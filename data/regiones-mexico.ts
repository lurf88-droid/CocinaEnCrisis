/**
 * Ajustes regionales de precios.
 *
 * IMPORTANTE:
 *
 * - La tortilla puede usar precio regional directo.
 * - El jitomate puede usar precio regional directo.
 * - El resto del catálogo usa un factor regional estimado.
 *
 * Estos valores son REFERENCIAS para estimación
 * dentro de Cocina en Crisis, no precios en tiempo real.
 */


// ======================================================
// 🌎 IDS DE REGIÓN
// ======================================================

export type RegionId =
  | 'nacional'
  | 'cdmx'
  | 'puebla'
  | 'guadalajara'
  | 'monterrey'
  | 'tijuana'
  | 'merida'
  | 'oaxaca'
  | 'tuxtla'
  | 'culiacan'
  | 'cancun'
  | 'veracruz';


// ======================================================
// 📍 CONFIGURACIÓN REGIONAL
// ======================================================

export type RegionConfig = {

  id: RegionId;

  nombre: string;

  estado: string;

  zona: string;


  /**
   * Precio aproximado de tortilla
   * de maíz por kilogramo.
   */
  tortillaKg: number;


  /**
   * Precio aproximado de jitomate
   * por kilogramo.
   *
   * NO representa tomatillo/tomate verde.
   */
  jitomateKg: number;


  /**
   * Multiplicador general para ingredientes
   * que no poseen precio regional específico.
   *
   * 1 = promedio nacional
   * 0.95 = ~5% debajo
   * 1.10 = ~10% arriba
   */
  factorCanasta: number;

};


// ======================================================
// 🇲🇽 REGIÓN POR DEFECTO
// ======================================================

export const REGION_NACIONAL_ID:
  RegionId =
    'nacional';


// ======================================================
// 💾 STORAGE
// ======================================================

export const STORAGE_KEY_REGION =
  '@cocina_en_crisis/region';


// ======================================================
// 💰 BASES NACIONALES
// ======================================================

/*
  Estas bases permiten calcular la relación
  regional respecto al precio nacional.

  No deben interpretarse como precios en tiempo real.
*/

export const BASE_TORTILLA_KG =
  24.4;

export const BASE_JITOMATE_KG =
  35;


// ======================================================
// 🗺 REGIONES
// ======================================================

export const REGIONES:
  RegionConfig[] = [

    // ==================================================
    // 🇲🇽 NACIONAL
    // ==================================================

    {
      id:
        'nacional',

      nombre:
        'Promedio nacional',

      estado:
        'México',

      zona:
        'Referencia país',

      tortillaKg:
        24.4,

      jitomateKg:
        35,

      factorCanasta:
        1,
    },


    // ==================================================
    // 🏙 CDMX
    // ==================================================

    {
      id:
        'cdmx',

      nombre:
        'Ciudad de México',

      estado:
        'CDMX',

      zona:
        'Centro',

      tortillaKg:
        21.72,

      jitomateKg:
        23,

      factorCanasta:
        0.96,
    },


    // ==================================================
    // 🌋 PUEBLA
    // ==================================================

    {
      id:
        'puebla',

      nombre:
        'Puebla',

      estado:
        'Puebla',

      zona:
        'Centro',

      tortillaKg:
        16.5,

      jitomateKg:
        28,

      factorCanasta:
        0.9,
    },


    // ==================================================
    // 🌆 GUADALAJARA
    // ==================================================

    {
      id:
        'guadalajara',

      nombre:
        'Guadalajara',

      estado:
        'Jalisco',

      zona:
        'Centro-Occidente',

      tortillaKg:
        25.2,

      jitomateKg:
        32,

      factorCanasta:
        0.98,
    },


    // ==================================================
    // 🏙 MONTERREY
    // ==================================================

    {
      id:
        'monterrey',

      nombre:
        'Monterrey',

      estado:
        'Nuevo León',

      zona:
        'Norte',

      tortillaKg:
        28,

      jitomateKg:
        38,

      factorCanasta:
        1.05,
    },


    // ==================================================
    // 🌊 TIJUANA
    // ==================================================

    {
      id:
        'tijuana',

      nombre:
        'Tijuana',

      estado:
        'Baja California',

      zona:
        'Noroeste',

      tortillaKg:
        28.18,

      jitomateKg:
        42,

      factorCanasta:
        1.08,
    },


    // ==================================================
    // 🌴 MÉRIDA
    // ==================================================

    {
      id:
        'merida',

      nombre:
        'Mérida',

      estado:
        'Yucatán',

      zona:
        'Sureste',

      tortillaKg:
        28.17,

      jitomateKg:
        36,

      factorCanasta:
        1.02,
    },


    // ==================================================
    // 🫔 OAXACA
    // ==================================================

    {
      id:
        'oaxaca',

      nombre:
        'Oaxaca',

      estado:
        'Oaxaca',

      zona:
        'Sur',

      tortillaKg:
        24.5,

      jitomateKg:
        26,

      factorCanasta:
        0.92,
    },


    // ==================================================
    // 🌿 TUXTLA
    // ==================================================

    {
      id:
        'tuxtla',

      nombre:
        'Tuxtla Gutiérrez',

      estado:
        'Chiapas',

      zona:
        'Sureste',

      tortillaKg:
        22,

      jitomateKg:
        20,

      factorCanasta:
        0.88,
    },


    // ==================================================
    // 🌊 CULIACÁN
    // ==================================================

    {
      id:
        'culiacan',

      nombre:
        'Culiacán',

      estado:
        'Sinaloa',

      zona:
        'Noroeste',

      tortillaKg:
        26,

      jitomateKg:
        28,

      factorCanasta:
        0.94,
    },


    // ==================================================
    // 🏝 CANCÚN
    // ==================================================

    {
      id:
        'cancun',

      nombre:
        'Cancún',

      estado:
        'Quintana Roo',

      zona:
        'Sureste turístico',

      tortillaKg:
        27.5,

      jitomateKg:
        48,

      factorCanasta:
        1.12,
    },


    // ==================================================
    // 🌊 VERACRUZ
    // ==================================================

    {
      id:
        'veracruz',

      nombre:
        'Veracruz',

      estado:
        'Veracruz',

      zona:
        'Golfo',

      tortillaKg:
        25,

      jitomateKg:
        30,

      factorCanasta:
        0.95,
    },

  ];


// ======================================================
// 🔎 OBTENER REGIÓN
// ======================================================

export function obtenerRegion(
  id: RegionId
): RegionConfig {

  return (
    REGIONES.find(
      region =>
        region.id === id
    ) ??
    REGIONES[0]
  );

}


// ======================================================
// 🌽 IDS DE TORTILLA
// ======================================================

const IDS_TORTILLA =
  new Set([
    'tortilla',
    'tortilla_maiz',
  ]);


// ======================================================
// 🍅 IDS DE JITOMATE
// ======================================================

const IDS_JITOMATE =
  new Set([
    'jitomate',
  ]);


// ======================================================
// 🔤 NORMALIZAR ID DE PRECIO
// ======================================================

function normalizarIngredientePrecio(
  id: string
): string {

  return id
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(
      /[\u0300-\u036f]/g,
      ''
    );

}


// ======================================================
// 💰 AJUSTAR PRECIO REGIONAL
// ======================================================

export function ajustarPrecioRegional(
  precioNacional: number,
  ingredienteId: string,
  regionId: RegionId
): number {

  // ====================================================
  // 🛡 PRECIO INVÁLIDO
  // ====================================================

  if (
    !Number.isFinite(
      precioNacional
    ) ||
    precioNacional < 0
  ) {

    return 0;

  }


  const region =
    obtenerRegion(
      regionId
    );


  const id =
    normalizarIngredientePrecio(
      ingredienteId
    );


  // ====================================================
  // 🌽 TORTILLA
  // ====================================================

  if (
    IDS_TORTILLA.has(
      id
    )
  ) {

    const factor =
      region.tortillaKg /
      BASE_TORTILLA_KG;


    return redondearPrecio(
      precioNacional *
      factor
    );

  }


  // ====================================================
  // 🍅 JITOMATE
  // ====================================================

  if (
    IDS_JITOMATE.has(
      id
    )
  ) {

    const factor =
      region.jitomateKg /
      BASE_JITOMATE_KG;


    return redondearPrecio(
      precioNacional *
      factor
    );

  }


  // ====================================================
  // 🧺 CANASTA GENERAL
  // ====================================================

  return redondearPrecio(
    precioNacional *
    region.factorCanasta
  );

}


// ======================================================
// 🧮 REDONDEAR PRECIO
// ======================================================

function redondearPrecio(
  precio: number
): number {

  return (
    Math.round(
      precio *
      100
    ) /
    100
  );

}


// ======================================================
// 🏷 ETIQUETA DE REGIÓN
// ======================================================

export function etiquetaRegion(
  region: RegionConfig
): string {

  if (
    region.id ===
    'nacional'
  ) {

    return region.nombre;

  }


  return (
    `${region.nombre}, ${region.estado}`
  );

}


// ======================================================
// 📊 FUENTE / REFERENCIA DE PRECIOS
// ======================================================

export function fuentePreciosRegion(
  region: RegionConfig
): string {

  if (
    region.id ===
    'nacional'
  ) {

    return (
      'Referencia nacional · precios estimados para cálculo'
    );

  }


  return (
    `Referencia ${region.nombre} · ` +
    `tortilla $${region.tortillaKg}/kg · ` +
    `jitomate ~$${region.jitomateKg}/kg`
  );

}