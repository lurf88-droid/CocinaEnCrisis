const assert = require('node:assert/strict');
const test = require('node:test');
const { entorno } = require('./entorno.cjs');

const e = entorno();
const { cargarHistorial, registrarPreparacion, fechaPreparacion } = e.cargar('@/utils/historialCocina');
const { RECETAS } = e.cargar('@/data/recetas');
const { validarReceta } = e.cargar('@/services/receta-validator');
const { calcularCostoIngrediente } = e.cargar('@/services/costos.service');
const copia = value => JSON.parse(JSON.stringify(value));

test('migra el historial anterior sin perder su orden ni inventar fechas', () => {
  const anterior = ['arroz-huevo', 'papas-huevo'];
  const migrado = cargarHistorial(null, anterior);
  assert.deepEqual(copia(migrado.map(item => item.recetaId)), anterior);
  assert.ok(migrado.every(item => item.preparadaEn === null));
  assert.match(fechaPreparacion(migrado[0].preparadaEn), /sin fecha/);
  assert.equal(new Set(migrado.map(item => item.id)).size, 2);
  assert.deepEqual(anterior, ['arroz-huevo', 'papas-huevo']);
});

test('cada repetición cuenta y Chef Luna recuerda la última preparación', () => {
  const fecha = '2026-09-27T12:00:00.000Z';
  let historial = cargarHistorial(null, ['arroz-huevo', 'papas-huevo']);
  historial = registrarPreparacion(historial, 'arroz-huevo', fecha);
  historial = registrarPreparacion(historial, 'arroz-huevo', fecha);
  assert.equal(historial.length, 4);
  assert.equal(new Set(historial.map(item => item.id)).size, 4);
  assert.equal(historial.at(-1).preparadaEn, fecha);
  const restaurado = cargarHistorial(copia(historial), ['dato-antiguo']);
  assert.deepEqual(copia(restaurado), copia(historial));
  const mensaje = e.cargar('@/utils/chefMemory').obtenerMensajeMemoriaChef(restaurado.map(item => item.recetaId));
  assert.ok(mensaje.includes(RECETAS.find(r => r.id === 'arroz-huevo').titulo));
});

test('no reemplaza un historial inválido por una lista vacía', () => {
  for (const datos of [{}, [null], [{ id: '1', recetaId: 'arroz-huevo', preparadaEn: 'ayer' }]]) {
    assert.throws(() => cargarHistorial(datos, ['arroz-huevo']));
  }
  assert.throws(() => cargarHistorial(null, [42]));
});

test('las 63 recetas pasan el auditor con las conversiones reales', () => {
  const resultado = e.cargar('@/services/chef-audit').auditoriaChef();
  assert.equal(resultado.total, 63);
  assert.equal(resultado.errores, 0, JSON.stringify(resultado.detalle));
  for (const receta of RECETAS) {
    for (const ingrediente of receta.ingredientes) {
      assert.ok(calcularCostoIngrediente(ingrediente) > 0, `${receta.id}: ${ingrediente.id}`);
    }
  }
});

test('el auditor sigue rechazando unidades desconocidas, cantidades inválidas e ingredientes ausentes', () => {
  const base = RECETAS[0];
  for (const [cambio, tipo] of [
    [{ unidad: 'unidad_inexistente' }, 'unidad'],
    [{ cantidad: -1 }, 'cantidad'],
    [{ id: 'ingrediente_inexistente' }, 'ingrediente'],
  ]) {
    const receta = { ...base, ingredientes: [{ ...base.ingredientes[0], ...cambio }] };
    assert.ok(validarReceta(receta).some(error => error.tipo === tipo), tipo);
  }
  assert.ok(validarReceta({ ...base, ingredientes: null }).some(error => error.tipo === 'estructura'));
});

test('guardar dos versiones mantiene el orden aunque la primera escritura tarde', async () => {
  const escritos = [];
  let liberar;
  const bloqueo = new Promise(resolve => { liberar = resolve; });
  const local = entorno({ escritura: async (clave, contenido) => {
    if (contenido === '1') await bloqueo;
    escritos.push([clave, contenido]);
  } });
  const storage = local.cargar('@/services/storage.service');
  const primera = storage.guardarDato('historial', 1);
  const segunda = storage.guardarDato('historial', 2);
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(escritos.length, 0);
  liberar();
  await Promise.all([primera, segunda]);
  assert.deepEqual(escritos, [['historial', '1'], ['historial', '2']]);
});

test('los errores de lectura y guardado se propagan y permiten reintentar', async () => {
  let fallar = true;
  const local = entorno({
    lectura: async () => '{json roto',
    escritura: async () => { if (fallar) throw new Error('Sin espacio'); },
  });
  const storage = local.cargar('@/services/storage.service');
  await assert.rejects(storage.cargarDato('historial'));
  await assert.rejects(storage.guardarDato('historial', []));
  fallar = false;
  await assert.doesNotReject(storage.guardarDato('historial', ['arroz-huevo']));
});

// Simula los ciclos de estado y efectos del proveedor, sin una instancia de Android.
function proveedorConAlmacenamiento(almacen, debeFallar = () => false, fallaEscritura = () => false) {
  const estados = [], efectos = [];
  let cursorEstado = 0, cursorEfecto = 0, pendientes = [], sucio = true, vista;
  const escritos = [];
  const react = {
    createContext: () => ({ Provider: 'Provider' }),
    useState: inicial => {
      const index = cursorEstado++;
      if (!(index in estados)) estados[index] = inicial;
      return [estados[index], valor => {
        const nuevo = typeof valor === 'function' ? valor(estados[index]) : valor;
        if (!Object.is(nuevo, estados[index])) { estados[index] = nuevo; sucio = true; }
      }];
    },
    useMemo: fn => fn(),
    useEffect: (fn, deps) => {
      const index = cursorEfecto++;
      const previo = efectos[index];
      if (!previo || deps.some((dep, i) => !Object.is(dep, previo.deps[i]))) {
        pendientes.push(() => {
          previo?.limpiar?.();
          efectos[index] = { deps, limpiar: fn() };
        });
      }
    },
  };
  const local = entorno({ sustituciones: { react },
    lectura: async clave => {
      if (debeFallar()) throw new Error('Lectura fallida');
      return almacen.get(clave) ?? null;
    },
    escritura: async (clave, dato) => {
      if (fallaEscritura()) throw new Error('Sin espacio');
      escritos.push(clave);
      almacen.set(clave, dato);
    },
  });
  const Provider = local.cargar('@/context/IngredientesContext').IngredientesProvider;
  return {
    escritos,
    async actualizar() {
      for (let i = 0; i < 10; i++) {
        if (sucio) {
          sucio = false;
          cursorEstado = cursorEfecto = 0;
          pendientes = [];
          vista = Provider({ children: 'contenido' });
          pendientes.forEach(fn => fn());
        }
        await new Promise(resolve => setImmediate(resolve));
        if (!sucio) return vista;
      }
      throw new Error('El proveedor no estabilizó su estado');
    },
  };
}

function buscarBoton(nodo, texto) {
  if (!nodo || typeof nodo !== 'object') return null;
  const hijos = [nodo.props?.children].flat(Infinity);
  if (nodo.props?.onPress && hijos.some(hijo => hijo?.props?.children === texto)) return nodo;
  for (const hijo of hijos) {
    const encontrado = buscarBoton(hijo, texto);
    if (encontrado) return encontrado;
  }
  return null;
}

test('el proveedor migra, registra repeticiones y las recupera al abrir de nuevo', async () => {
  const almacen = new Map([['@cocina_historial', JSON.stringify(['arroz-huevo'])]]);
  const proveedor = proveedorConAlmacenamiento(almacen);
  let vista = await proveedor.actualizar();
  assert.equal(vista.type, 'Provider');
  assert.equal(vista.props.value.preparaciones[0].preparadaEn, null);
  vista.props.value.prepararReceta('arroz-huevo');
  vista = await proveedor.actualizar();
  assert.equal(vista.props.value.historial.length, 2);
  const reabierto = await proveedorConAlmacenamiento(almacen).actualizar();
  assert.equal(reabierto.props.value.preparaciones.length, 2);
  assert.ok(reabierto.props.value.preparaciones[1].preparadaEn);
  assert.equal(almacen.get('@cocina_historial'), '["arroz-huevo"]');
});

test('una lectura fallida no escribe datos vacíos y el botón reintenta la carga', async () => {
  const almacen = new Map([['@cocina_historial', '["arroz-huevo"]']]);
  let fallo = true;
  const proveedor = proveedorConAlmacenamiento(almacen, () => fallo);
  const error = await proveedor.actualizar();
  assert.equal(proveedor.escritos.length, 0);
  const reintentar = buscarBoton(error, 'Volver a intentar');
  assert.ok(reintentar);
  fallo = false;
  reintentar.props.onPress();
  const recuperado = await proveedor.actualizar();
  assert.equal(recuperado.props.value.historial[0], 'arroz-huevo');
});

test('el aviso permite reintentar sin perder una preparación cuyo guardado falló', async () => {
  const almacen = new Map();
  let fallo = false;
  const proveedor = proveedorConAlmacenamiento(almacen, () => false, () => fallo);
  let vista = await proveedor.actualizar();
  fallo = true;
  vista.props.value.prepararReceta('arroz-huevo');
  vista = await proveedor.actualizar();
  const reintentar = buscarBoton(vista, 'Reintentar guardado');
  assert.ok(reintentar);
  assert.equal(JSON.parse(almacen.get('@cocina_preparaciones_v1')).length, 0);
  fallo = false;
  reintentar.props.onPress();
  vista = await proveedor.actualizar();
  assert.equal(buscarBoton(vista, 'Reintentar guardado'), null);
  assert.equal(JSON.parse(almacen.get('@cocina_preparaciones_v1'))[0].recetaId, 'arroz-huevo');
});
