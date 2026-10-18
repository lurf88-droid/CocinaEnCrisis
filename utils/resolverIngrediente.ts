import {
  obtenerIngrediente,
  normalizarID,
  type IngredienteCatalogo,
} from '@/data/catalogo-ingredientes';


// ======================================================
// ⚠️ WARNINGS YA MOSTRADOS
// ======================================================

const ingredientesNoResueltosAdvertidos =
  new Set<string>();

const equivalenciasInvalidasAdvertidas =
  new Set<string>();


// ======================================================
// 🔄 EQUIVALENCIAS LEGACY
// ======================================================

/*
  Estas equivalencias sirven únicamente
  para compatibilidad con nombres o IDs antiguos.

  IMPORTANTE:

  Nunca sustituyen un ingrediente que ya exista
  directamente en el catálogo.

  Orden:

  1. ID / nombre / alias real
  2. equivalencia legacy
  3. null
*/

const EQUIVALENCIAS_INGREDIENTES:
  Record<string, string> = {

    // ==================================================
    // 🥖 PANADERÍA
    // ==================================================

    bolillo:
      'bolillo',

    pan_blanco:
      'bolillo',


    // ==================================================
    // 🍝 PASTAS
    // ==================================================

    pasta:
      'pasta',

    pasta_lasagna:
      'pasta_lasagna',

    pasta_lasana:
      'pasta_lasagna',


    // ==================================================
    // 🥛 LÁCTEOS
    // ==================================================

    crema_acida:
      'crema',

    crema_agria:
      'crema',

    /*
      No incluimos:

      leche_entera: 'leche'

      porque si leche_entera existe como ID real,
      el catálogo debe resolverlo directamente.
    */


    // ==================================================
    // 🥩 CARNES
    // ==================================================

    carne_cerdo:
      'carne_cerdo',

    carne_de_cerdo:
      'carne_cerdo',

    cerdo:
      'carne_cerdo',

    carne_res:
      'carne_res',

    carne_de_res:
      'carne_res',

    res:
      'carne_res',


    // ==================================================
    // 🍗 POLLO
    // ==================================================

    pollo_deshebrado:
      'pechuga_pollo',

    pollo_piezas:
      'pollo_entero',


    // ==================================================
    // 🌽 MAÍZ / TORTILLA
    // ==================================================

    tostadas:
      'tostada_maiz',

    tostada_maiz:
      'tostada_maiz',

    tortilla:
      'tortilla_maiz',

    masa_maiz:
      'masa_maiz',

    masa_de_maiz:
      'masa_maiz',


    // ==================================================
    // 🌿 ESPECIAS
    // ==================================================

    oregano:
      'oregano_seco',

    pimienta:
      'pimienta_negra',

    comino:
      'comino',

    canela:
      'canela',

    clavo:
      'clavo',

    tomillo:
      'tomillo',

    laurel:
      'laurel',


    // ==================================================
    // 🌶 CHILES / BASES
    // ==================================================

    chipotle_adobado:
      'chipotle_adobado_lata',

    mole_poblano:
      'mole_poblano',


    // ==================================================
    // 🥣 CALDOS
    // ==================================================

    caldo_pollo:
      'caldo_de_pollo',

    caldo_de_pollo:
      'caldo_de_pollo',


    // ==================================================
    // 🌿 HIERBAS
    // ==================================================

    cilantro_fresco:
      'cilantro',

    epazote_fresco:
      'epazote',


    // ==================================================
    // 🧀 QUESOS
    // ==================================================

    queso_panela:
      'queso_panela',

    panela:
      'queso_panela',


    // ==================================================
    // 🍫 OTROS
    // ==================================================

    chocolate_mesa:
      'chocolate_mesa',

    almendra:
      'almendra',

    naranja_agria:
      'naranja_agria',

    chayote:
      'chayote',

    hoja_maguey:
      'hoja_maguey',
  };


// ======================================================
// 🔎 RESOLVER INGREDIENTE
// ======================================================

export function resolverIngrediente(
  texto: string
): IngredienteCatalogo | null {

  // ====================================================
  // 🛡 VALIDACIÓN
  // ====================================================

  if (
    typeof texto !== 'string' ||
    texto.trim().length === 0
  ) {

    return null;

  }


  // ====================================================
  // 1️⃣ RESOLUCIÓN DIRECTA
  // ====================================================

  /*
    El catálogo es la fuente de verdad.

    Puede resolver:

    - ID
    - nombre
    - alias
  */

  const directo =
    obtenerIngrediente(
      texto
    );


  if (
    directo
  ) {

    return directo;

  }


  // ====================================================
  // 2️⃣ NORMALIZAR COMO ID
  // ====================================================

  const clave =
    normalizarID(
      texto
    );


  if (
    !clave
  ) {

    return null;

  }


  // ====================================================
  // 3️⃣ EQUIVALENCIA LEGACY
  // ====================================================

  const equivalente =
    EQUIVALENCIAS_INGREDIENTES[
      clave
    ];


  if (
    !equivalente
  ) {

    if (
      __DEV__ &&
      !ingredientesNoResueltosAdvertidos.has(
        clave
      )
    ) {

      ingredientesNoResueltosAdvertidos.add(
        clave
      );

      console.warn(
        '⚠️ Ingrediente no resuelto:',
        {
          entrada:
            texto,

          clave,
        }
      );

    }


    return null;

  }


  // ====================================================
  // 4️⃣ VALIDAR DESTINO CONTRA CATÁLOGO
  // ====================================================

  const resuelto =
    obtenerIngrediente(
      equivalente
    );


  if (
    resuelto
  ) {

    return resuelto;

  }


  // ====================================================
  // ⚠️ EQUIVALENCIA INVÁLIDA
  // ====================================================

  const claveAdvertencia =
    `${clave}::${equivalente}`;


  if (
    __DEV__ &&
    !equivalenciasInvalidasAdvertidas.has(
      claveAdvertencia
    )
  ) {

    equivalenciasInvalidasAdvertidas.add(
      claveAdvertencia
    );

    console.warn(
      '⚠️ Equivalencia de ingrediente inválida:',
      {
        entrada:
          texto,

        clave,

        equivalente,
      }
    );

  }


  return null;

}


// ======================================================
// 🆔 RESOLVER SOLO ID
// ======================================================

export function resolverIngredienteId(
  texto: string
): string | null {

  return (
    resolverIngrediente(
      texto
    )?.id ??
    null
  );

}