// ======================================================
// ⚖️ PESO APROXIMADO POR PIEZA
// ======================================================
//
// Valores expresados en GRAMOS.
//
// Solo deben existir aquí ingredientes que realmente
// puedan utilizarse de forma razonable como "pieza".
//
// ======================================================

export const PESO_POR_UNIDAD:
  Record<string, number> = {

    // ==================================================
    // 🌶 CHILES SECOS
    // ==================================================

    chile_guajillo: 8,

    chile_ancho: 15,

    chile_pasilla: 12,

    chile_morita: 8,

    chile_mulato: 15,

    chipotle: 10,


    // ==================================================
    // 🧄 AROMÁTICOS
    // ==================================================

    ajo: 10,

    cebolla_blanca: 150,

    cebolla_morada: 150,

    laurel: 1,

    canela: 20,


    // ==================================================
    // 🌽 MAÍZ Y DERIVADOS
    // ==================================================

    tostada_maiz: 15,

    tortilla_maiz: 30,

    hoja_maiz: 5,


    // ==================================================
    // 🍋 FRUTAS
    // ==================================================

    limon: 80,

    naranja: 180,

    naranja_agria: 180,

    aguacate: 200,

    manzana: 180,

    pera: 170,

    durazno: 150,

    granada: 250,


    // ==================================================
    // 🥬 VERDURAS
    // ==================================================

    chayote: 350,

    jitomate: 120,

    tomate: 120,

    pepino: 250,

    papa: 180,

    zanahoria: 100,

    calabaza_italiana: 200,

    rabano: 30,

    chile_serrano: 12,

    chile_poblano: 120,


    // ==================================================
    // 🌿 ENVOLTURAS
    // ==================================================

    hoja_maguey: 80,

    hoja_platano: 200,


    // ==================================================
    // 🥚 PROTEÍNAS
    // ==================================================

    huevo: 50,
    // Pollo
    pollo: 1800,
    pollo_entero: 1800,
    pechuga_pollo: 300,
    muslo_pollo: 200,
    pierna_pollo: 180,
    alas_pollo: 80,
    gallina: 2000,
    pavo: 5000,
    pechuga_pavo: 400,
    

    // ==================================================
    // 🍝 DESPENSA
    // ==================================================

    pasta_lasagna: 15,


    // ==================================================
    // 🐟 CONSERVAS
    // ==================================================

    atun_lata: 140,

  };


// ======================================================
// 🥄 PESOS POR MEDIDA CULINARIA
// ======================================================
//
// Valores expresados en GRAMOS.
//
// Estructura:
//
// medida → ingrediente → gramos
//
// ======================================================

export const PESO_POR_MEDIDA:
  Record<
    string,
    Record<string, number>
  > = {


    // ==================================================
    // 🥄 CUCHARADA
    // ==================================================

    cucharada: {

      aceite_vegetal: 15,

      aceite_oliva: 14,

      mantequilla: 14,

      harina: 8,

      azucar: 12,

      sal: 18,

      crema: 15,

      mayonesa: 15,

      miel: 21,

      cacao: 5,

    },


    // ==================================================
    // 🥄 CUCHARADITA
    // ==================================================

    cucharadita: {

      sal: 6,

      azucar: 4,

      pimienta_negra: 2,

      comino: 2,

      oregano_seco: 1,

      canela: 3,

      ajo_polvo: 3,

    },


    // ==================================================
    // ☕ TAZA
    // ==================================================

    taza: {

      harina: 120,

      azucar: 200,

      arroz_blanco: 185,

      frijol_bayo: 180,

      leche_entera: 240,

      crema: 240,

      queso_rallado: 100,

      caldo_pollo: 240,

    },


    // ==================================================
    // 🌿 MANOJO
    // ==================================================

    manojo: {

      cilantro: 80,

      epazote: 50,

      perejil: 60,

      espinaca: 100,

    },


    // ==================================================
    // 📦 PAQUETE
    // ==================================================

    paquete: {

      pasta: 500,

      pasta_lasagna: 500,

      arroz_blanco: 1000,

      harina: 1000,

      tortilla_maiz: 1000,

    },

  };


// ======================================================
// 🥫 PESO POR ENVASE
// ======================================================
//
// Valores expresados en GRAMOS.
//
// ======================================================

export const PESO_POR_ENVASE:
  Record<string, number> = {

    atun_lata: 140,

    leche_condensada_lata: 397,

    crema_lata: 250,

    chiles_lata: 215,

  };


// ======================================================
// 🔤 NORMALIZAR UNIDAD
// ======================================================

export function normalizarUnidadConversion(
  unidad: string
): string {

  return unidad
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(
      /[\u0300-\u036f]/g,
      ''
    );

}


// ======================================================
// ⚖️ OBTENER PESO POR PIEZA
// ======================================================

export function obtenerPesoPorUnidad(
  ingrediente: string
): number | null {

  const id =
    ingrediente
      .toLowerCase()
      .trim();


  const peso =
    PESO_POR_UNIDAD[
      id
    ];


  if (
    typeof peso !== 'number' ||
    peso <= 0
  ) {

    return null;

  }


  return peso;

}


// ======================================================
// 🥄 OBTENER PESO POR MEDIDA
// ======================================================

export function obtenerPesoPorMedida(
  ingrediente: string,
  unidad: string
): number | null {

  const id =
    ingrediente
      .toLowerCase()
      .trim();


  const medida =
    normalizarUnidadConversion(
      unidad
    );


  const tabla =
    PESO_POR_MEDIDA[
      medida
    ];


  if (!tabla) {

    return null;

  }


  const peso =
    tabla[id];


  if (
    typeof peso !== 'number' ||
    peso <= 0
  ) {

    return null;

  }


  return peso;

}


// ======================================================
// 🥫 OBTENER PESO POR ENVASE
// ======================================================

export function obtenerPesoPorEnvase(
  ingrediente: string
): number | null {

  const id =
    ingrediente
      .toLowerCase()
      .trim();


  const peso =
    PESO_POR_ENVASE[
      id
    ];


  if (
    typeof peso !== 'number' ||
    peso <= 0
  ) {

    return null;

  }


  return peso;

}


// ======================================================
// 🔄 CONVERSIÓN AUXILIAR
// ======================================================
//
// Esta función queda disponible para módulos antiguos.
//
// IMPORTANTE:
//
// No inventa conversiones de "porción".
// Si una receta utiliza "porción", la conversión real
// debe venir de factorConversion en el catálogo.
//
// El motor principal de costos sigue siendo:
// services/costos.service.ts
//
// ======================================================

export function convertirUnidad(
  ingrediente: string,
  cantidad: number,
  unidadOriginal: string
): number | null {

  if (
    !Number.isFinite(cantidad) ||
    cantidad <= 0
  ) {

    return null;

  }


  const unidad =
    normalizarUnidadConversion(
      unidadOriginal
    );


  // ====================================================
  // UNIDADES BASE
  // ====================================================

  if (
    unidad === 'kg' ||
    unidad === 'litro' ||
    unidad === 'g' ||
    unidad === 'ml'
  ) {

    return cantidad;

  }


  // ====================================================
  // PIEZA → KG
  // ====================================================

  if (
    unidad === 'pieza'
  ) {

    const peso =
      obtenerPesoPorUnidad(
        ingrediente
      );


    if (
      peso === null
    ) {

      if (__DEV__) {

        console.warn(
          '⚠️ Sin conversión de pieza:',
          {
            ingrediente,
            cantidad,
            unidad,
          }
        );

      }


      return null;

    }


    return (
      cantidad *
      peso
    ) / 1000;

  }


  // ====================================================
  // LATA → KG
  // ====================================================

  if (
    unidad === 'lata'
  ) {

    const peso =
      obtenerPesoPorEnvase(
        ingrediente
      );


    if (
      peso === null
    ) {

      if (__DEV__) {

        console.warn(
          '⚠️ Sin conversión de envase:',
          {
            ingrediente,
            cantidad,
            unidad,
          }
        );

      }


      return null;

    }


    return (
      cantidad *
      peso
    ) / 1000;

  }


  // ====================================================
  // MEDIDAS CULINARIAS → KG
  // ====================================================

  const pesoMedida =
    obtenerPesoPorMedida(
      ingrediente,
      unidad
    );


  if (
    pesoMedida !== null
  ) {

    return (
      cantidad *
      pesoMedida
    ) / 1000;

  }


  // ====================================================
  // PORCIÓN
  // ====================================================

  if (
    unidad === 'porcion'
  ) {

    if (__DEV__) {

      console.warn(
        '⚠️ Porción sin factorConversion:',
        {
          ingrediente,
          cantidad,
        }
      );

    }


    return null;

  }


  // ====================================================
  // UNIDAD NO SOPORTADA
  // ====================================================

  if (__DEV__) {

    console.warn(
      '⚠️ Unidad no soportada:',
      {
        ingrediente,
        cantidad,
        unidad,
      }
    );

  }


  return null;

}