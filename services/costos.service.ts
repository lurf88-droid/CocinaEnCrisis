import {
  RECETAS,
} from '@/data/recetas';

import type {
  IngredienteCatalogo,
} from '@/data/catalogo-ingredientes';

import {
  resolverIngrediente,
} from '@/utils/resolverIngrediente';

import {
  REGION_NACIONAL_ID,
  ajustarPrecioRegional,
  type RegionId,
} from '@/data/regiones-mexico';

import type {
  IngredienteReceta,
  Receta,
  RecetaConCosto,
} from '@/types/receta';

import {
  PESO_POR_UNIDAD,
  PESO_POR_ENVASE,
  PESO_POR_MEDIDA,
} from '@/utils/conversionIngredientes';


// ======================================================
// ⚠️ WARNINGS YA MOSTRADOS
// ======================================================

const conversionesAdvertidas =
  new Set<string>();


function advertirConversionPendiente(
  ingrediente: string,
  cantidad: number,
  unidadReceta: string,
  unidadCatalogo: string,
  ingredienteOriginal?: string,
  recetaId?: string,
  recetaTitulo?: string
) {
  if (!__DEV__) {
    return;
  }

  const recetasCoincidentes =
    RECETAS
      .filter(
        receta =>
          receta.ingredientes.some(
            item => {
              const ingredienteResuelto =
                resolverIngrediente(
                  item.id
                );

              return (
                ingredienteResuelto?.id ===
                  ingrediente &&
                item.cantidad ===
                  cantidad &&
                normalizarUnidad(
                  item.unidad
                ) ===
                  normalizarUnidad(
                    unidadReceta
                  )
              );
            }
          )
      )
      .map(
        receta => ({
          id: receta.id,
          titulo: receta.titulo,
        })
      );

  const clave = [
    ingrediente,
    cantidad,
    unidadReceta,
    unidadCatalogo,
    ...recetasCoincidentes.map(
      receta => receta.id
    ),
  ].join('::');

  if (
    conversionesAdvertidas.has(
      clave
    )
  ) {
    return;
  }

  conversionesAdvertidas.add(
    clave
  );

  console.warn(
    '⚠️ Conversión pendiente:',
    {
      recetaId:
        recetaId ?? 'desconocida',

      recetaTitulo:
        recetaTitulo ?? 'desconocida',

      recetasCoincidentes,

      cantidad,
      ingrediente,
      unidadCatalogo,
      unidadReceta,
    }
  );
}


// ======================================================
// 🔤 NORMALIZAR UNIDAD
// ======================================================

export function normalizarUnidad(
  unidad: string
): string {

  const normalizada =
    unidad
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(
        /[\u0300-\u036f]/g,
        ''
      );

  switch (
    normalizada
  ) {

    case 'gramos':
    case 'gramo':
      return 'g';

    case 'kilogramo':
    case 'kilogramos':
      return 'kg';

    case 'mililitro':
    case 'mililitros':
      return 'ml';

    case 'litros':
      return 'litro';

    case 'piezas':
      return 'pieza';

    case 'porciones':
    case 'porción':
      return 'porcion';

    case 'latas':
      return 'lata';

    case 'cucharadas':
      return 'cucharada';

    case 'cucharaditas':
      return 'cucharadita';

    case 'tazas':
      return 'taza';

    case 'manojos':
      return 'manojo';

    case 'paquetes':
      return 'paquete';

    default:
      return normalizada;

  }

}


// ======================================================
// ⚖️ CONVERTIR GRAMOS A UNIDAD DEL CATÁLOGO
// ======================================================

function convertirGramosAUnidadCatalogo(
  gramos: number,
  unidadCatalogo: string
): number | null {

  if (
    !Number.isFinite(gramos) ||
    gramos <= 0
  ) {
    return null;
  }

  if (unidadCatalogo === 'kg') {
    return gramos / 1000;
  }

  if (unidadCatalogo === 'g') {
    return gramos;
  }

  return null;

}


// ======================================================
// ⚖️ PESO POR PIEZA
// ======================================================

function obtenerPesoPieza(
  ingrediente: IngredienteCatalogo,
  ingredienteOriginal?: string
): number | null {

  if (
    typeof ingrediente.pesoPorUnidad === 'number' &&
    Number.isFinite(ingrediente.pesoPorUnidad) &&
    ingrediente.pesoPorUnidad > 0
  ) {
    return ingrediente.pesoPorUnidad;
  }

  if (ingredienteOriginal) {
    const pesoOriginal = PESO_POR_UNIDAD[ingredienteOriginal];

    if (
      typeof pesoOriginal === 'number' &&
      Number.isFinite(pesoOriginal) &&
      pesoOriginal > 0
    ) {
      return pesoOriginal;
    }
  }

  const pesoTabla = PESO_POR_UNIDAD[ingrediente.id];

  if (
    typeof pesoTabla === 'number' &&
    Number.isFinite(pesoTabla) &&
    pesoTabla > 0
  ) {
    return pesoTabla;
  }

  return null;

}


// ======================================================
// 🔄 CONVERTIR CANTIDAD
// ======================================================

export function convertirCantidad(
  cantidad: number,
  unidadRecetaOriginal: string,
  ingrediente: IngredienteCatalogo,
  ingredienteOriginal?: string,
  recetaId?: string,
  recetaTitulo?: string
): number | null {

  const unidadReceta =
    normalizarUnidad(unidadRecetaOriginal);

  const unidadCatalogo =
    normalizarUnidad(ingrediente.unidad);

  // ====================================================
  // 🛡 VALIDAR CANTIDAD
  // ====================================================

  if (
    !Number.isFinite(cantidad) ||
    cantidad <= 0
  ) {
    return null;
  }

  // ====================================================
  // ✅ MISMA UNIDAD
  // ====================================================

  if (unidadReceta === unidadCatalogo) {
    return cantidad;
  }

  // ====================================================
  // ⚖️ g → kg
  // ====================================================

  if (
    unidadReceta === 'g' &&
    unidadCatalogo === 'kg'
  ) {
    return cantidad / 1000;
  }

  // ====================================================
  // ⚖️ kg → g
  // ====================================================

  if (
    unidadReceta === 'kg' &&
    unidadCatalogo === 'g'
  ) {
    return cantidad * 1000;
  }

  // ====================================================
  // 🥛 ml → litro
  // ====================================================

  if (
    unidadReceta === 'ml' &&
    unidadCatalogo === 'litro'
  ) {
    return cantidad / 1000;
  }

  // ====================================================
  // 🥛 litro → ml
  // ====================================================

  if (
    unidadReceta === 'litro' &&
    unidadCatalogo === 'ml'
  ) {
    return cantidad * 1000;
  }

  // ====================================================
  // 🥛 VOLUMEN → PESO CON DENSIDAD EXPLÍCITA
  // ====================================================

  if (
    (unidadReceta === 'ml' || unidadReceta === 'litro') &&
    (unidadCatalogo === 'g' || unidadCatalogo === 'kg')
  ) {

    const densidad = ingrediente.densidadGPorMl;

    if (
      typeof densidad === 'number' &&
      Number.isFinite(densidad) &&
      densidad > 0
    ) {

      const mililitros =
        unidadReceta === 'litro'
          ? cantidad * 1000
          : cantidad;

      const gramos =
        mililitros * densidad;

      return convertirGramosAUnidadCatalogo(
        gramos,
        unidadCatalogo
      );
    }
  }

  // ====================================================
  // 🧺 PIEZA → PESO
  // ====================================================

  if (
    unidadReceta === 'pieza' &&
    (unidadCatalogo === 'kg' || unidadCatalogo === 'g')
  ) {

    const pesoGramos =
      obtenerPesoPieza(
        ingrediente,
        ingredienteOriginal
      );

    if (pesoGramos !== null) {
      return convertirGramosAUnidadCatalogo(
        cantidad * pesoGramos,
        unidadCatalogo
      );
    }

  }

  // ====================================================
  // 🥫 LATA → PESO
  // ====================================================

  if (
    unidadReceta === 'lata' &&
    (unidadCatalogo === 'kg' || unidadCatalogo === 'g')
  ) {

    const pesoEnvase = PESO_POR_ENVASE[ingrediente.id];

    if (
      typeof pesoEnvase === 'number' &&
      Number.isFinite(pesoEnvase) &&
      pesoEnvase > 0
    ) {
      return convertirGramosAUnidadCatalogo(
        cantidad * pesoEnvase,
        unidadCatalogo
      );
    }

  }

  // ====================================================
  // 🥄 MEDIDAS CULINARIAS → PESO
  // ====================================================

  const tablaMedida = PESO_POR_MEDIDA[unidadReceta];

  if (
    tablaMedida &&
    (unidadCatalogo === 'kg' || unidadCatalogo === 'g')
  ) {

    const pesoGramos = tablaMedida[ingrediente.id];

    if (
      typeof pesoGramos === 'number' &&
      Number.isFinite(pesoGramos) &&
      pesoGramos > 0
    ) {
      return convertirGramosAUnidadCatalogo(
        cantidad * pesoGramos,
        unidadCatalogo
      );
    }

  }

  // ====================================================
  // 🥣 PORCIÓN
  // ====================================================

  if (
    unidadReceta === 'porcion' &&
    unidadCatalogo !== 'porcion'
  ) {

    if (
      typeof ingrediente.factorConversion === 'number' &&
      Number.isFinite(ingrediente.factorConversion) &&
      ingrediente.factorConversion > 0
    ) {
      return cantidad * ingrediente.factorConversion;
    }

    advertirConversionPendiente(
      ingrediente.id,
      cantidad,
      unidadReceta,
      unidadCatalogo,
      recetaId,
      recetaTitulo
    );

    return null;

  }

  // ====================================================
  // 🔁 FACTOR DE CONVERSIÓN EXPLÍCITO
  // ====================================================

  if (
    typeof ingrediente.factorConversion === 'number' &&
    Number.isFinite(ingrediente.factorConversion) &&
    ingrediente.factorConversion > 0
  ) {
    return cantidad * ingrediente.factorConversion;
  }

  // ====================================================
  // ⚠️ CONVERSIÓN DESCONOCIDA
  // ====================================================

  advertirConversionPendiente(
    ingrediente.id,
    cantidad,
    unidadReceta,
    unidadCatalogo
  );

  return null;

}


// ======================================================
// 💰 COSTO DE UN INGREDIENTE
// ======================================================

export function calcularCostoIngrediente(
  item: IngredienteReceta,
  regionId: RegionId = REGION_NACIONAL_ID,
  recetaId?: string,
  recetaTitulo?: string
): number {

  const catalogo = resolverIngrediente(item.id);

  if (!catalogo) {

    if (__DEV__) {
      console.warn('⚠️ Ingrediente no encontrado:', item.id);
    }

    return 0;
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

    if (__DEV__) {
      console.warn(
        '⚠️ Precio regional inválido:',
        {
          ingrediente: catalogo.id,
          precioRegional,
          regionId,
        }
      );
    }

    return 0;
  }

  const cantidadReal =
    convertirCantidad(
      item.cantidad,
      item.unidad,
      catalogo,
      item.id,
      recetaId,
      recetaTitulo
    );

  if (cantidadReal === null) {
    return 0;
  }

  const costo = cantidadReal * precioRegional;

  return Math.round(costo * 100) / 100;

}


// ======================================================
// 🍳 COSTO DE RECETA COMPLETA
// ======================================================

export function calcularCostoReceta(
  receta: Receta,
  regionId: RegionId = REGION_NACIONAL_ID
): RecetaConCosto {

  const desglose = receta.ingredientes.map(item => {

    const catalogo = resolverIngrediente(item.id);

    const costo = calcularCostoIngrediente(
      item,
      regionId,
      receta.id,
      receta.titulo
    );

    return {
      nombre: catalogo?.nombre ?? item.id,
      costo,
    };

  });

  const costoTotalSinRedondear = desglose.reduce(
    (total, item) => total + item.costo,
    0
  );

  const costoTotal =
    Math.round(costoTotalSinRedondear * 100) / 100;

  const costoPorPorcion =
    receta.porciones > 0
      ? Math.round((costoTotal / receta.porciones) * 100) / 100
      : 0;

  const ingredientesClave = [
    ...new Set(
      receta.ingredientes
        .map(
          ingrediente =>
            resolverIngrediente(ingrediente.id)?.id ?? null
        )
        .filter((id): id is string => id !== null)
    ),
  ];

  return {
    ...receta,
    costoTotal,
    costoPorPorcion,
    ingredientesClave,
    desglose,
  };

}


// ======================================================
// 📚 TODAS LAS RECETAS CON COSTO
// ======================================================

export function obtenerRecetasConCosto(
  regionId: RegionId = REGION_NACIONAL_ID
): RecetaConCosto[] {

  return RECETAS.map(
    receta => calcularCostoReceta(receta, regionId)
  );

}