import type { Receta } from '@/types/receta';

import {
  resolverIngrediente,
} from '@/utils/resolverIngrediente';

import {
  calcularCostoIngrediente,
  calcularCostoReceta,
  convertirCantidad,
  normalizarUnidad,
} from './costos.service';

import {
  evaluarReceta,
} from './recetas.service';

import {
  REGION_NACIONAL_ID,
  ajustarPrecioRegional,
  type RegionId,
} from '@/data/regiones-mexico';


// ======================================================
// 🛒 INGREDIENTE DE COMPRA
// ======================================================

export type IngredienteCompra = {

  /**
   * Clave única de la fila de compra.
   */
  clave: string;

  /**
   * ID canónico del catálogo.
   */
  id: string;

  nombre: string;

  /**
   * Cantidad que realmente requieren las recetas.
   */
  cantidad: number;

  /**
   * Unidad utilizada por las recetas agrupadas.
   */
  unidad: string;

  /**
   * Compatibilidad temporal.
   *
   * Sigue representando el valor proporcional
   * de lo utilizado.
   */
  costo: number;

  /**
   * Valor proporcional de lo que se va a consumir.
   */
  costoUso: number;

  /**
   * Dinero aproximado que debe desembolsarse
   * para comprar la presentación comercial.
   *
   * null = todavía no tenemos información suficiente.
   */
  costoCompra: number | null;

  /**
   * false significa:
   * conocemos el ingrediente, pero todavía no
   * podemos calcular correctamente su compra.
   */
  compraCalculable: boolean;

  /**
   * Ejemplos:
   * bolsa, botella, paquete, docena, kg.
   */
  unidadCompra?: string;

  /**
   * Contenido de una presentación,
   * expresado en la unidad base del catálogo.
   */
  cantidadCompra?: number;

  /**
   * Número de presentaciones necesarias.
   *
   * Solo existe para productos no fraccionables.
   */
  numeroCompras?: number;
};


// ======================================================
// 🔢 UTILIDAD
// ======================================================

function redondearDinero(
  valor: number
): number {

  return (
    Math.round(
      valor * 100
    ) / 100
  );
}


// ======================================================
// 🧾 ESTIMAR COMPRA REAL
// ======================================================

function estimarCompraReal(
  item: IngredienteCompra,
  regionId: RegionId
): Pick<
  IngredienteCompra,
  | 'costoCompra'
  | 'compraCalculable'
  | 'unidadCompra'
  | 'cantidadCompra'
  | 'numeroCompras'
> {

  const catalogo =
    resolverIngrediente(
      item.id
    );


  if (!catalogo) {

    return {
      costoCompra: null,
      compraCalculable: false,
    };

  }


  // ====================================================
  // ⚖️ CONVERTIR A LA UNIDAD DEL CATÁLOGO
  // ====================================================

  const cantidadCatalogo =
    convertirCantidad(
      item.cantidad,
      item.unidad,
      catalogo,
      item.id
    );


  if (
    cantidadCatalogo === null ||
    !Number.isFinite(cantidadCatalogo) ||
    cantidadCatalogo <= 0
  ) {

    return {
      costoCompra: null,
      compraCalculable: false,
      unidadCompra:
        catalogo.unidadCompra,
      cantidadCompra:
        catalogo.cantidadCompra,
    };

  }


  // ====================================================
  // 💵 PRECIO REGIONAL
  // ====================================================

  const precioRegional =
    ajustarPrecioRegional(
      catalogo.precioUnitario,
      catalogo.id,
      regionId
    );


  if (
    !Number.isFinite(precioRegional) ||
    precioRegional < 0
  ) {

    return {
      costoCompra: null,
      compraCalculable: false,
      unidadCompra:
        catalogo.unidadCompra,
      cantidadCompra:
        catalogo.cantidadCompra,
    };

  }


  // ====================================================
  // ⚖️ COMPRA FRACCIONABLE
  // ====================================================

  /*
    Ejemplo:

    jitomate:
      unidad = kg
      compraFraccionable = true

    Si necesitamos 0.4 kg,
    solamente estimamos esos 0.4 kg.
  */

  if (
    catalogo.compraFraccionable === true
  ) {

    return {

      costoCompra:
        redondearDinero(
          cantidadCatalogo *
          precioRegional
        ),

      compraCalculable: true,

      unidadCompra:
        catalogo.unidadCompra ??
        catalogo.unidad,

    };

  }


  // ====================================================
  // 📦 PRESENTACIÓN COMPLETA
  // ====================================================

  const cantidadCompra =
    catalogo.cantidadCompra;


  if (
    typeof cantidadCompra !== 'number' ||
    !Number.isFinite(cantidadCompra) ||
    cantidadCompra <= 0
  ) {

    /*
      MUY IMPORTANTE:

      No usamos $0.
      Tampoco fingimos que el costo proporcional
      es igual al dinero que pagará en tienda.

      Simplemente declaramos que todavía
      no podemos calcular esa presentación.
    */

    return {

      costoCompra: null,

      compraCalculable: false,

      unidadCompra:
        catalogo.unidadCompra,

    };

  }


  const numeroCompras =
    Math.ceil(
      cantidadCatalogo /
      cantidadCompra
    );


  const costoCompra =
    numeroCompras *
    cantidadCompra *
    precioRegional;


  return {

    costoCompra:
      redondearDinero(
        costoCompra
      ),

    compraCalculable: true,

    unidadCompra:
      catalogo.unidadCompra ??
      catalogo.unidad,

    cantidadCompra,

    numeroCompras,

  };

}


// ======================================================
// 🛒 CREAR LISTA DE COMPRA
// ======================================================

export function crearListaCompra(
  recetas: Receta[],
  despensa: string[],
  regionId: RegionId =
    REGION_NACIONAL_ID
): IngredienteCompra[] {

  const agrupados =
    new Map<
      string,
      IngredienteCompra
    >();


  for (
    const receta
    of recetas
  ) {

    // ==================================================
    // 🔎 DETERMINAR QUÉ FALTA
    // ==================================================

    const estado =
      evaluarReceta(
        calcularCostoReceta(
          receta,
          regionId
        ),
        despensa,
        0,
        regionId
      );


    const faltantes =
      new Set(
        estado?.faltantes ??
        []
      );


    // ==================================================
    // 🧺 RECORRER INGREDIENTES
    // ==================================================

    for (
      const item
      of receta.ingredientes
    ) {

      const catalogo =
        resolverIngrediente(
          item.id
        );


      if (
        !catalogo ||
        !faltantes.has(
          catalogo.id
        )
      ) {

        continue;

      }


      const unidad =
        normalizarUnidad(
          item.unidad
        );


      const clave =
        `${catalogo.id}::${unidad}`;


      // =================================================
      // 💰 VALOR DE USO
      // =================================================

      const costoUso =
        calcularCostoIngrediente(
          item,
          regionId,
          receta.id,
          receta.titulo
        );


      const existente =
        agrupados.get(
          clave
        );


      if (existente) {

        existente.cantidad +=
          item.cantidad;

        existente.costo +=
          costoUso;

        existente.costoUso +=
          costoUso;

      } else {

        agrupados.set(
          clave,
          {

            clave,

            id:
              catalogo.id,

            nombre:
              catalogo.nombre,

            cantidad:
              item.cantidad,

            unidad,

            costo:
              costoUso,

            costoUso,

            costoCompra:
              null,

            compraCalculable:
              false,

          }
        );

      }

    }

  }


  // ====================================================
  // 📦 CALCULAR PRESENTACIONES DESPUÉS DE AGRUPAR
  // ====================================================

  return Array.from(
    agrupados.values()
  ).map(
    item => {

      const cantidad =
        Math.round(
          item.cantidad *
          1000
        ) / 1000;


      const costoUso =
        redondearDinero(
          item.costoUso
        );


      const base:
        IngredienteCompra =
        {

          ...item,

          cantidad,

          costo:
            costoUso,

          costoUso,

        };


      const compra =
        estimarCompraReal(
          base,
          regionId
        );


      return {

        ...base,

        ...compra,

      };

    }
  );

}
export type ResumenCompra = {
  costoUsoTotal: number;
  costoCompraTotal: number | null;
  compraCalculable: boolean;
  ingredientesSinCalculo: string[];
};


// ======================================================
// 💰 RESUMEN REAL DE COMPRA
// ======================================================

export function calcularResumenCompra(
  lista: IngredienteCompra[],
  regionId: RegionId = REGION_NACIONAL_ID
): ResumenCompra {

  const costoUsoTotal =
    redondearDinero(
      lista.reduce(
        (total, item) =>
          total + item.costoUso,
        0
      )
    );


  /*
    Agrupamos TODO por ingrediente canónico.

    Así:

    arroz 200 g
    +
    arroz 1 taza

    se convierten primero a la unidad base
    y después se calcula cuántas bolsas comprar.
  */

  const cantidades =
    new Map<
      string,
      {
        nombre: string;
        cantidad: number;
      }
    >();


  const ingredientesSinCalculo =
    new Set<string>();


  for (const item of lista) {

    const catalogo =
      resolverIngrediente(
        item.id
      );


    if (!catalogo) {

      ingredientesSinCalculo.add(
        item.nombre
      );

      continue;

    }


    const cantidadBase =
      convertirCantidad(
        item.cantidad,
        item.unidad,
        catalogo,
        item.id
      );


    if (
      cantidadBase === null ||
      !Number.isFinite(cantidadBase) ||
      cantidadBase < 0
    ) {

      ingredientesSinCalculo.add(
        item.nombre
      );

      continue;

    }


    const existente =
      cantidades.get(
        catalogo.id
      );


    if (existente) {

      existente.cantidad +=
        cantidadBase;

    } else {

      cantidades.set(
        catalogo.id,
        {
          nombre:
            catalogo.nombre,

          cantidad:
            cantidadBase,
        }
      );

    }

  }


  let costoCompraTotal = 0;


  for (
    const [
      ingredienteId,
      datos,
    ]
    of cantidades
  ) {

    const catalogo =
      resolverIngrediente(
        ingredienteId
      );


    if (!catalogo) {

      ingredientesSinCalculo.add(
        datos.nombre
      );

      continue;

    }


    const precioRegional =
      ajustarPrecioRegional(
        catalogo.precioUnitario,
        catalogo.id,
        regionId
      );


    if (
      !Number.isFinite(precioRegional) ||
      precioRegional < 0
    ) {

      ingredientesSinCalculo.add(
        datos.nombre
      );

      continue;

    }


    // ==================================================
    // ⚖️ PRODUCTO FRACCIONABLE
    // ==================================================

    if (
      catalogo.compraFraccionable === true
    ) {

      costoCompraTotal +=
        datos.cantidad *
        precioRegional;

      continue;

    }


    // ==================================================
    // 📦 PRODUCTO POR PRESENTACIÓN
    // ==================================================

    const cantidadCompra =
      catalogo.cantidadCompra;


    if (
      typeof cantidadCompra !== 'number' ||
      !Number.isFinite(cantidadCompra) ||
      cantidadCompra <= 0
    ) {

      ingredientesSinCalculo.add(
        datos.nombre
      );

      continue;

    }


    const numeroCompras =
      Math.ceil(
        datos.cantidad /
        cantidadCompra
      );


    costoCompraTotal +=
      numeroCompras *
      cantidadCompra *
      precioRegional;

  }


  if (
    ingredientesSinCalculo.size > 0
  ) {

    return {

      costoUsoTotal,

      costoCompraTotal:
        null,

      compraCalculable:
        false,

      ingredientesSinCalculo:
        [
          ...ingredientesSinCalculo,
        ],

    };

  }


  return {

    costoUsoTotal,

    costoCompraTotal:
      redondearDinero(
        costoCompraTotal
      ),

    compraCalculable:
      true,

    ingredientesSinCalculo:
      [],

  };

}

// ======================================================
// ✅ INGREDIENTES COMPLETAMENTE COMPRADOS
// ======================================================

/**
 * Un ingrediente que aparece en varias filas solamente
 * se considera disponible cuando todas sus filas fueron
 * marcadas como compradas.
 */
export function obtenerCompradosCompletos(
  lista: IngredienteCompra[],
  marcados: string[]
): string[] {

  const seleccionados =
    new Set(
      marcados
    );


  return [
    ...new Set(
      lista.map(
        item =>
          item.id
      )
    ),
  ].filter(
    id =>

      lista
        .filter(
          item =>
            item.id === id
        )
        .every(
          item =>
            seleccionados.has(
              item.clave
            )
        )
  );

}