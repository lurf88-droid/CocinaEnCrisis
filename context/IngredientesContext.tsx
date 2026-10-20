import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import { ActivityIndicator, Pressable, Text, View } from 'react-native';

import { cargarHistorial, registrarPreparacion, type Preparacion } from '@/utils/historialCocina';
import { resolverIngredienteId } from '@/utils/resolverIngrediente';

import { STORAGE_KEYS } from '@/constants/storage';

import { guardarDato, cargarDato } from '@/services/storage.service';


// ======================================================
// 🧩 TIPOS
// ======================================================

type IngredientesContextType = {

  // 🧺 DESPENSA
  ingredientes: string[];
  agregarIngrediente: (ingrediente?: string) => void;
  eliminarIngrediente: (ingrediente: string) => void;

  // ❤️ FAVORITOS
  favoritos: string[];
  toggleFavorito: (id: string) => void;

  // 🛒 COMPRADOS
  comprados: string[];
  toggleComprado: (ingrediente: string) => void;
  limpiarComprados: () => void;

  // 💰 PRESUPUESTO
  presupuesto: number;
  setPresupuesto: (monto: number) => void;

  // 🍳 CARRITO DE RECETAS
  carrito: string[];
  agregarAlCarrito: (id: string) => void;
  quitarDelCarrito: (id: string) => void;
  vaciarCarrito: () => void;

  // 📝 LISTA DE COMPRA
  listaCompra: string[];
  ultimaCompra: string | undefined;
  agregarCompra: (ingrediente: string) => void;
  quitarCompra: (ingrediente: string) => void;
  vaciarCompra: () => void;
  marcarComprado: (ingrediente: string) => void;

  // 🕒 HISTORIAL
  historial: string[];
  preparaciones: Preparacion[];

  // 👨‍🍳 PREPARAR
  confirmarCompra: () => void;

  /**
   * @deprecated
   * Compatibilidad temporal. Usar confirmarCompra().
   */
  prepararRecetas: () => void;

  // 👇 CAMBIO 1: Ahora recibe el costo de la receta
  prepararReceta: (id: string, costoReceta: number) => void;
};


// ======================================================
// 🌙 CONTEXT
// ======================================================

const IngredientesContext =
  createContext<IngredientesContextType | undefined>(undefined);


// ======================================================
// 🌙 PROVIDER
// ======================================================

export function IngredientesProvider({
  children,
}: {
  children: ReactNode;
}) {

  // 🧺 ESTADOS
  const [ingredientes, setIngredientes] = useState<string[]>([]);
  const [favoritos, setFavoritos] = useState<string[]>([]);
  const [comprados, setComprados] = useState<string[]>([]);
  const [carrito, setCarrito] = useState<string[]>([]);
  const [listaCompra, setListaCompra] = useState<string[]>([]);
  const [ultimaCompra, setUltimaCompra] = useState<string | undefined>(undefined);
  const [preparaciones, setPreparaciones] = useState<Preparacion[]>([]);

  const historial = useMemo(
    () => preparaciones.map(item => item.recetaId),
    [preparaciones]
  );

  const [errorCarga, setErrorCarga] = useState(false);
  const [errorGuardado, setErrorGuardado] = useState(false);
  const [intentoCarga, setIntentoCarga] = useState(0);
  const [intentoGuardado, setIntentoGuardado] = useState(0);

  const [presupuesto, setPresupuestoState] = useState(1000);

  /*
    Evita guardar estados vacíos antes de
    terminar de leer AsyncStorage.
  */
  const [hidratado, setHidratado] = useState(false);


  // ====================================================
  // 📥 CARGAR DATOS
  // ====================================================

  useEffect(() => {
    let activo = true;

    const cargar = async () => {
      try {
        const [
          ing,
          cart,
          hist,
          fav,
          compradosGuardados,
          lista,
          ultima,
          pres,
          preparacionesGuardadas,
        ] = await Promise.all([
          cargarDato<string[]>(STORAGE_KEYS.INGREDIENTES),
          cargarDato<string[]>(STORAGE_KEYS.CARRITO),
          cargarDato<string[]>(STORAGE_KEYS.HISTORIAL),
          cargarDato<string[]>(STORAGE_KEYS.FAVORITOS),
          cargarDato<string[]>(STORAGE_KEYS.COMPRADOS),
          cargarDato<string[]>(STORAGE_KEYS.LISTA_COMPRA),
          cargarDato<string>(STORAGE_KEYS.ULTIMA_COMPRA),
          cargarDato<number>(STORAGE_KEYS.PRESUPUESTO),
          cargarDato<unknown>(STORAGE_KEYS.PREPARACIONES),
        ]);

        const historialCargado = cargarHistorial(preparacionesGuardadas, hist);
        if (!activo) return;

        // =============================================
        // 🧺 MIGRACIÓN AUTOMÁTICA A IDs CANÓNICOS
        // =============================================
        if (Array.isArray(ing)) {
          const migrados = [
            ...new Set(
              ing.map(item => {
                const limpio = item.trim().toLowerCase();
                return resolverIngredienteId(limpio) ?? limpio;
              })
            ),
          ];
          setIngredientes(migrados);
        }

        if (Array.isArray(cart)) {
          setCarrito(cart);
        }

        setPreparaciones(historialCargado);

        if (Array.isArray(fav)) {
          setFavoritos(fav);
        }

        if (Array.isArray(compradosGuardados)) {
          setComprados(compradosGuardados);
        }

        if (Array.isArray(lista)) {
          setListaCompra(lista);
        }

        if (typeof ultima === 'string') {
          setUltimaCompra(ultima);
        }

        if (typeof pres === 'number' && Number.isFinite(pres)) {
          setPresupuestoState(Math.max(0, pres));
        }

        setHidratado(true);

      } catch (error) {
        if (__DEV__) {
          console.warn(
            '⚠️ No se pudieron cargar los datos de Cocina en Crisis:',
            error
          );
        }
        if (activo) setErrorCarga(true);
      }
    };

    void cargar();
    return () => { activo = false; };

  }, [intentoCarga]);


  // ====================================================
  // 💾 GUARDAR DATOS
  // ====================================================

  useEffect(() => {
    /*
      No escribimos en almacenamiento
      hasta terminar la carga inicial.
    */
    if (!hidratado) {
      return;
    }

    let vigente = true;

    const guardar = async () => {
      try {
        await Promise.all([
          guardarDato(STORAGE_KEYS.INGREDIENTES, ingredientes),
          guardarDato(STORAGE_KEYS.CARRITO, carrito),
          guardarDato(STORAGE_KEYS.PREPARACIONES, preparaciones),
          guardarDato(STORAGE_KEYS.FAVORITOS, favoritos),
          guardarDato(STORAGE_KEYS.COMPRADOS, comprados),
          guardarDato(STORAGE_KEYS.PRESUPUESTO, presupuesto),
          guardarDato(STORAGE_KEYS.LISTA_COMPRA, listaCompra),
          ...(ultimaCompra !== undefined
            ? [guardarDato(STORAGE_KEYS.ULTIMA_COMPRA, ultimaCompra)]
            : []),
        ]);

        if (vigente) setErrorGuardado(false);

      } catch (error) {
        if (__DEV__) {
          console.warn(
            '⚠️ No se pudieron guardar los datos de Cocina en Crisis:',
            error
          );
        }
        if (vigente) setErrorGuardado(true);
      }
    };

    void guardar();
    return () => { vigente = false; };

  }, [
    hidratado,
    ingredientes,
    carrito,
    preparaciones,
    intentoGuardado,
    favoritos,
    comprados,
    presupuesto,
    listaCompra,
    ultimaCompra,
  ]);


  // ====================================================
  // ❤️ FAVORITOS
  // ====================================================

  const toggleFavorito = (id: string) => {
    setFavoritos(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      return [...prev, id];
    });
  };


  // ====================================================
  // 💰 PRESUPUESTO
  // ====================================================

  /*
    El presupuesto ahora sí es un LÍMITE DE GASTO.
    Disminuye al momento de preparar una receta.
  */
  const setPresupuesto = (monto: number) => {
    if (!Number.isFinite(monto)) {
      return;
    }
    setPresupuestoState(Math.max(0, monto));
  };


  // ====================================================
  // 🧺 DESPENSA
  // ====================================================

  const agregarIngrediente = (valorRaw?: string) => {
    if (!valorRaw) return;

    const limpio = valorRaw.trim().toLowerCase();
    if (!limpio) return;

    const idCanonico = resolverIngredienteId(limpio) ?? limpio;

    setIngredientes(prev => {
      if (prev.includes(idCanonico)) return prev;
      return [...prev, idCanonico];
    });
  };


  const eliminarIngrediente = (ingrediente: string) => {
    const valor = ingrediente.trim().toLowerCase();
    if (!valor) return;

    const idCanonico = resolverIngredienteId(valor) ?? valor;

    setIngredientes(prev =>
      prev.filter(item => item !== idCanonico && item !== valor)
    );
  };


  // ====================================================
  // ✅ COMPRADOS
  // ====================================================

  const toggleComprado = (ingrediente: string) => {
    setComprados(prev => {
      if (prev.includes(ingrediente)) {
        return prev.filter(item => item !== ingrediente);
      }
      return [...prev, ingrediente];
    });
  };


  const limpiarComprados = () => {
    setComprados([]);
  };


  // ====================================================
  // 🍳 CARRITO DE RECETAS
  // ====================================================

  const agregarAlCarrito = (id: string) => {
    setCarrito(prev => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  };


  const quitarDelCarrito = (id: string) => {
    setCarrito(prev => prev.filter(item => item !== id));
  };


  const vaciarCarrito = () => {
    setCarrito([]);
    /*
      Los checks pertenecen a esa
      compra concreta.
    */
    setComprados([]);
  };


  // ====================================================
  // 📝 LISTA DE COMPRA INTELIGENTE
  // ====================================================

  const agregarCompra = (ingrediente: string) => {
    const valor = ingrediente.trim().toLowerCase();
    if (!valor) return;

    setUltimaCompra(valor);

    setListaCompra(prev => {
      if (prev.includes(valor)) return prev;
      return [...prev, valor];
    });
  };


  const quitarCompra = (ingrediente: string) => {
    setListaCompra(prev => prev.filter(item => item !== ingrediente));
  };


  const vaciarCompra = () => {
    setListaCompra([]);
  };


  // ====================================================
  // 🛍 MARCAR PRODUCTO COMO COMPRADO
  // ====================================================

  const marcarComprado = (ingrediente: string) => {
    if (!ingrediente) return;

    const limpio = ingrediente.trim().toLowerCase();
    if (!limpio) return;

    const idCanonico = resolverIngredienteId(limpio) ?? limpio;

    setUltimaCompra(idCanonico);

    // Quitar de lista pendiente
    setListaCompra(prev =>
      prev.filter(item => item !== limpio && item !== idCanonico)
    );

    // Agregar a la despensa
    setIngredientes(prev => {
      if (prev.includes(idCanonico)) return prev;
      return [...prev, idCanonico];
    });
  };


  // ====================================================
  // 👨‍🍳 PREPARAR TODAS LAS RECETAS
  // ====================================================

  const confirmarCompra = () => {
    if (carrito.length === 0) {
      return;
    }

    /*
      Los ingredientes que el usuario marcó
      como comprados ya forman parte de lo
      disponible en casa.
    */
    if (comprados.length > 0) {
      setIngredientes(prev => {

        const compradosIds = comprados.map(item => {
          const base = item.includes('::') ? item.split('::')[0] : item;
          const limpio = base.trim().toLowerCase();
          return resolverIngredienteId(limpio) ?? limpio;
        });

        const nuevos = compradosIds.filter(
          ingrediente => !prev.includes(ingrediente)
        );

        if (nuevos.length === 0) {
          return prev;
        }

        return [...prev, ...nuevos];
      });
    }

    // ==================================================
    // CERRAR COMPRA ACTUAL
    // ==================================================
    setComprados([]);

    alert(
      '🛒 Compra actualizada.\n\nLos ingredientes marcados ya están en tu despensa.'
    );
  };


  /**
   * @deprecated
   * Compatibilidad temporal con código anterior.
   * Usar confirmarCompra().
   */
  const prepararRecetas = confirmarCompra;


  // ====================================================
  // 👨‍🍳 PREPARAR UNA RECETA Y DESCONTAR PRESUPUESTO
  // ====================================================

  // 👇 CAMBIO 2: La función ahora descuenta el dinero
  const prepararReceta = (id: string, costoReceta: number) => {
    if (!id) return;

    // Descontar del presupuesto (sin que baje de 0)
    setPresupuestoState(prev => Math.max(0, prev - costoReceta));

    // Registrar en el historial
    const fecha = new Date().toISOString();
    setPreparaciones(prev => registrarPreparacion(prev, id, fecha));

    // Quitar del carrito
    setCarrito(prev => prev.filter(item => item !== id));

    alert(`🍳 ¡Receta preparada!\n\nSe descontaron $${Math.round(costoReceta)} de tu presupuesto.`);
  };


  // ====================================================
  // 🌙 PROVIDER
  // ====================================================

  if (!hidratado) {
    return (
      <View style={{ flex: 1, backgroundColor: '#1D1410', justifyContent: 'center', alignItems: 'center', padding: 24 }}>
        {errorCarga ? (
          <>
            <Text style={{ color: '#FFF3DD', fontSize: 18, textAlign: 'center' }}>
              No pudimos cargar tu cocina
            </Text>
            <Text style={{ color: '#FFF3DD', fontSize: 15, textAlign: 'center', marginVertical: 16 }}>
              Tus datos guardados no se han reemplazado. Intenta cargarlos de nuevo.
            </Text>
            <Pressable
              accessibilityRole="button"
              onPress={() => { setErrorCarga(false); setIntentoCarga(prev => prev + 1); }}
              style={{ padding: 16, backgroundColor: '#F2B35B', borderRadius: 12 }}
            >
              <Text>Volver a intentar</Text>
            </Pressable>
          </>
        ) : (
          <ActivityIndicator color="#F2B35B" accessibilityLabel="Cargando tu cocina" />
        )}
      </View>
    );
  }


  return (
    <IngredientesContext.Provider
      value={{
        ingredientes,
        ultimaCompra,

        favoritos,
        toggleFavorito,

        comprados,
        toggleComprado,
        limpiarComprados,

        presupuesto,
        setPresupuesto,

        agregarIngrediente,
        eliminarIngrediente,

        carrito,
        agregarAlCarrito,
        quitarDelCarrito,
        vaciarCarrito,

        listaCompra,
        agregarCompra,
        quitarCompra,
        vaciarCompra,
        marcarComprado,

        historial,
        preparaciones,

        confirmarCompra,
        prepararRecetas,
        prepararReceta, // Se pasa la nueva función
      }}
    >
      {errorGuardado && (
        <View accessibilityLiveRegion="polite" style={{ backgroundColor: '#4C251C', padding: 16 }}>
          <Text style={{ color: '#FFF3DD', fontSize: 15 }}>
            No se guardaron los últimos cambios. Reintenta antes de cerrar la app.
          </Text>
          <Pressable
            accessibilityRole="button"
            onPress={() => setIntentoGuardado(prev => prev + 1)}
            style={{ paddingVertical: 12 }}
          >
            <Text style={{ color: '#F2B35B', fontSize: 16 }}>Reintentar guardado</Text>
          </Pressable>
        </View>
      )}
      {children}
    </IngredientesContext.Provider>
  );
}


// ======================================================
// 🪝 HOOK
// ======================================================

export function useIngredientes() {
  const context = useContext(IngredientesContext);

  if (!context) {
    throw new Error('useIngredientes debe usarse dentro de IngredientesProvider');
  }

  return context;
}