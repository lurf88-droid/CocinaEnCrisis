const assert = require('node:assert/strict');
const test = require('node:test');
const { entorno } = require('./entorno.cjs');

const terminarLecturas = () => new Promise(resolve => setImmediate(resolve));

test('la búsqueda del proveedor usa la ciudad para los faltantes y el presupuesto', () => {
  const e = entorno();
  const vista = e.cargar('@/hooks/use-ciudad').CiudadProvider({ children: null });
  const receta = vista.props.value.buscarRecetas([], 12).find(r => r.id === 'licuado-platano');
  assert.equal(receta.costoTotal, 12.42);
  assert.equal(receta.costoFaltantes, 12.42);
  assert.equal(receta.dentroPresupuesto, false);
  const disponible = vista.props.value.buscarRecetas(receta.ingredientesClave, 0).find(r => r.id === receta.id);
  assert.equal(disponible.costoFaltantes, 0);
  assert.equal(disponible.dentroPresupuesto, true);
});

test('un fallo al guardar la ciudad avisa y no deja una promesa rechazada', async () => {
  const e = entorno({ escritura: async () => { throw new Error('Sin espacio'); } });
  const vista = e.cargar('@/hooks/use-ciudad').CiudadProvider({ children: null });
  await vista.props.value.setRegionId('puebla');
  assert.equal(e.cambios.at(-1), 'puebla');
  assert.equal(e.avisos[0][0], 'No se guardó tu ciudad');
});

test('un fallo al leer la ciudad termina la carga y avisa', async () => {
  const e = entorno({ lectura: async () => { throw new Error('Lectura fallida'); } });
  e.cargar('@/hooks/use-ciudad').CiudadProvider({ children: null });
  e.efectos[0]();
  await terminarLecturas();
  assert.equal(e.cambios.at(-1), false);
  assert.equal(e.avisos.length, 1);
});

for (const [nombre, lectura, destino] of [
  ['primera apertura', async () => null, '/intro'],
  ['bienvenida ya vista', async () => 'true', '/(tabs)'],
  ['fallo de almacenamiento', async () => { throw new Error('Lectura fallida'); }, '/intro'],
]) {
  test(`inicio: ${nombre}`, async () => {
    const e = entorno({ lectura });
    e.cargar('@/app/bienvenida/index').default();
    e.efectos[0]();
    await terminarLecturas();
    assert.equal(e.cambios.at(-1), destino);
  });
}
