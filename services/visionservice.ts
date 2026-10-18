import {
  CATALOGO_INGREDIENTES,
  type IngredienteCatalogo,
} from '@/data/catalogo-ingredientes';


// ======================================================
// 🧠 CHEF LUNA VISION
// MODO DESARROLLO
//
// Actualmente simula la visión.
//
// IMPORTANTE:
// Los resultados SIEMPRE se intentan resolver
// contra el catálogo real de Cocina en Crisis.
// ======================================================


// ======================================================
// 🧩 TIPOS
// ======================================================

export type IngredienteDetectado = {
  id: string;
  nombre: string;
  confianza: number;
  textoDetectado: string;
};


export type IngredienteAmbiguo = {
  textoDetectado: string;

  opciones: {
    id: string;
    nombre: string;
  }[];
};


export type VisionResult = {
  ingredients: string[];

  detected: IngredienteDetectado[];

  unknown: string[];

  ambiguous: IngredienteAmbiguo[];
};


// ======================================================
// 🔤 NORMALIZACIÓN
// ======================================================

function normalizarTexto(
  valor: string
): string {

  return valor
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(
      /[\u0300-\u036f]/g,
      ''
    )
    .replace(
      /[_-]+/g,
      ' '
    )
    .replace(
      /[^a-z0-9ñ\s]/g,
      ''
    )
    .replace(
      /\s+/g,
      ' '
    )
    .trim();

}


// ======================================================
// 🔎 OBTENER TEXTOS BUSCABLES
// ======================================================

function obtenerTextosIngrediente(
  ingrediente: IngredienteCatalogo
): string[] {

  return [
    ingrediente.id,
    ingrediente.nombre,
    ...(ingrediente.aliases ?? []),
  ]
    .map(
      normalizarTexto
    )
    .filter(
      Boolean
    );

}


// ======================================================
// 🔍 RESULTADO DE RESOLUCIÓN
// ======================================================

type ResultadoBusqueda =
  | {
      tipo: 'encontrado';
      ingrediente: IngredienteCatalogo;
    }
  | {
      tipo: 'ambiguo';
      candidatos: IngredienteCatalogo[];
    }
  | {
      tipo: 'desconocido';
    };


// ======================================================
// 🔍 BUSCAR EN CATÁLOGO
// ======================================================

function buscarEnCatalogo(
  texto: string
): ResultadoBusqueda {

  const consulta =
    normalizarTexto(
      texto
    );


  if (!consulta) {

    return {
      tipo: 'desconocido',
    };

  }


  // ====================================================
  // 1. ID EXACTO
  // ====================================================

  const porId =
    CATALOGO_INGREDIENTES.find(
      ingrediente =>
        normalizarTexto(
          ingrediente.id
        ) ===
        consulta
    );


  if (porId) {

    return {
      tipo: 'encontrado',
      ingrediente:
        porId,
    };

  }


  // ====================================================
  // 2. NOMBRE EXACTO
  // ====================================================

  const porNombre =
    CATALOGO_INGREDIENTES.filter(
      ingrediente =>
        normalizarTexto(
          ingrediente.nombre
        ) ===
        consulta
    );


  if (
    porNombre.length ===
    1
  ) {

    return {
      tipo: 'encontrado',
      ingrediente:
        porNombre[0],
    };

  }


  if (
    porNombre.length >
    1
  ) {

    return {
      tipo: 'ambiguo',
      candidatos:
        porNombre,
    };

  }


  // ====================================================
  // 3. ALIAS EXACTO
  // ====================================================

  const porAlias =
    CATALOGO_INGREDIENTES.filter(
      ingrediente =>
        ingrediente.aliases?.some(
          alias =>
            normalizarTexto(
              alias
            ) ===
            consulta
        )
    );


  if (
    porAlias.length ===
    1
  ) {

    return {
      tipo: 'encontrado',
      ingrediente:
        porAlias[0],
    };

  }


  if (
    porAlias.length >
    1
  ) {

    return {
      tipo: 'ambiguo',
      candidatos:
        porAlias,
    };

  }


  // ====================================================
  // 4. TEXTO COMPLETO CONTENIDO
  //
  // Ejemplo:
  //
  // "carne molida de res"
  //
  // puede relacionarse con
  //
  // "Carne molida de res"
  //
  // sin aceptar automáticamente una palabra demasiado
  // genérica como "queso".
  // ====================================================

  const coincidencias =
    CATALOGO_INGREDIENTES.filter(
      ingrediente => {

        const textos =
          obtenerTextosIngrediente(
            ingrediente
          );


        return textos.some(
          textoCatalogo =>
            textoCatalogo.includes(
              consulta
            ) ||
            consulta.includes(
              textoCatalogo
            )
        );

      }
    );


  // ====================================================
  // UNA SOLA COINCIDENCIA
  // ====================================================

  if (
    coincidencias.length ===
    1
  ) {

    return {
      tipo: 'encontrado',
      ingrediente:
        coincidencias[0],
    };

  }


  // ====================================================
  // VARIAS COINCIDENCIAS = AMBIGÜEDAD
  // ====================================================

  if (
    coincidencias.length >
    1
  ) {

    return {
      tipo: 'ambiguo',

      candidatos:
        coincidencias.slice(
          0,
          8
        ),
    };

  }


  // ====================================================
  // SIN RESULTADOS
  // ====================================================

  return {
    tipo: 'desconocido',
  };

}


// ======================================================
// 🧹 QUITAR DUPLICADOS
// ======================================================

function eliminarDuplicados(
  ingredientes:
    IngredienteDetectado[]
): IngredienteDetectado[] {

  const encontrados =
    new Map<
      string,
      IngredienteDetectado
    >();


  for (
    const ingrediente
    of ingredientes
  ) {

    const existente =
      encontrados.get(
        ingrediente.id
      );


    if (
      !existente ||
      ingrediente.confianza >
        existente.confianza
    ) {

      encontrados.set(
        ingrediente.id,
        ingrediente
      );

    }

  }


  return Array.from(
    encontrados.values()
  );

}


// ======================================================
// 🧹 QUITAR AMBIGÜEDADES DUPLICADAS
// ======================================================

function eliminarAmbiguosDuplicados(
  ambiguos:
    IngredienteAmbiguo[]
): IngredienteAmbiguo[] {

  const mapa =
    new Map<
      string,
      IngredienteAmbiguo
    >();


  for (
    const ambiguo
    of ambiguos
  ) {

    const clave =
      normalizarTexto(
        ambiguo.textoDetectado
      );


    if (
      !mapa.has(
        clave
      )
    ) {

      mapa.set(
        clave,
        ambiguo
      );

    }

  }


  return Array.from(
    mapa.values()
  );

}


// ======================================================
// 🎯 CONFIANZA SIMULADA
// ======================================================

function generarConfianza(): number {

  return (
    Math.floor(
      Math.random() *
        11
    ) +
    89
  );

}


// ======================================================
// 🧪 RESPUESTAS SIMULADAS
// ======================================================

const FAKE_RESPONSES: string[][] = [

  [
    'huevo',
    'queso oaxaca',
    'jitomate',
  ],

  [
    'pollo',
    'cebolla',
    'ajo',
  ],

  [
    'leche',
    'cereal',
    'platano',
  ],

  [
    'tortilla de maiz',
    'frijoles',
    'queso',
  ],

  [
    'arroz blanco',
    'carne de res',
    'zanahoria',
    'papa',
  ],

  [
    'pollo deshebrado',
    'tortilla de maiz',
    'salsa verde',
    'queso oaxaca',
  ],

  [
    'carne molida de res',
    'jitomate',
    'cebolla',
    'papa',
  ],

];


// ======================================================
// 📸 ANALIZAR IMAGEN
// ======================================================

export async function analyzeFoodImage(
  imageUri: string
): Promise<VisionResult> {

  try {

    console.log(
      '📸 Chef Luna Vision:',
      imageUri
    );


    // ==================================================
    // 🧪 SIMULAR TIEMPO DE VISIÓN
    // ==================================================

    await new Promise(
      resolve =>
        setTimeout(
          resolve,
          1500
        )
    );


    const respuesta =
      FAKE_RESPONSES[
        Math.floor(
          Math.random() *
            FAKE_RESPONSES.length
        )
      ];


    // ==================================================
    // 📦 RESULTADOS
    // ==================================================

    const detectados:
      IngredienteDetectado[] =
      [];


    const desconocidos:
      string[] =
      [];


    const ambiguos:
      IngredienteAmbiguo[] =
      [];


    // ==================================================
    // 🔎 PROCESAR RESPUESTA
    // ==================================================

    for (
      const texto
      of respuesta
    ) {

      const resultado =
        buscarEnCatalogo(
          texto
        );


      // ================================================
      // ✅ ENCONTRADO
      // ================================================

      if (
        resultado.tipo ===
        'encontrado'
      ) {

        const ingrediente =
          resultado.ingrediente;


        detectados.push({

          id:
            ingrediente.id,

          nombre:
            ingrediente.nombre,

          confianza:
            generarConfianza(),

          textoDetectado:
            texto,

        });


        continue;

      }


      // ================================================
      // ⚠️ AMBIGUO
      // ================================================

      if (
        resultado.tipo ===
        'ambiguo'
      ) {

        ambiguos.push({

          textoDetectado:
            texto,

          opciones:
            resultado.candidatos.map(
              ingrediente => ({
                id:
                  ingrediente.id,

                nombre:
                  ingrediente.nombre,
              })
            ),

        });


        continue;

      }


      // ================================================
      // ❓ DESCONOCIDO
      // ================================================

      desconocidos.push(
        texto
      );

    }


    // ==================================================
    // 🧹 LIMPIEZA
    // ==================================================

    const sinDuplicados =
      eliminarDuplicados(
        detectados
      );


    const ambiguosSinDuplicar =
      eliminarAmbiguosDuplicados(
        ambiguos
      );


    const desconocidosUnicos =
      Array.from(
        new Set(
          desconocidos
        )
      );


    // ==================================================
    // 🧪 LOGS DE DESARROLLO
    // ==================================================

    console.log(
      '✅ Ingredientes reconocidos:',
      sinDuplicados
    );


    if (
      ambiguosSinDuplicar.length >
      0
    ) {

      console.log(
        '⚠️ Ingredientes ambiguos:',
        ambiguosSinDuplicar
      );

    }


    if (
      desconocidosUnicos.length >
      0
    ) {

      console.log(
        '❓ Sin coincidencia en catálogo:',
        desconocidosUnicos
      );

    }


    // ==================================================
    // 📤 RESPUESTA
    // ==================================================

    return {

      // =================================================
      // Compatibilidad con ScannerScreen.
      //
      // SOLO IDs realmente resueltos.
      // =================================================

      ingredients:
        sinDuplicados.map(
          ingrediente =>
            ingrediente.id
        ),


      // =================================================
      // Información PRO
      // =================================================

      detected:
        sinDuplicados,


      unknown:
        desconocidosUnicos,


      ambiguous:
        ambiguosSinDuplicar,

    };

  } catch (
    error
  ) {

    console.log(
      '❌ Error Chef Luna Vision:',
      error
    );


    return {

      ingredients:
        [],

      detected:
        [],

      unknown:
        [],

      ambiguous:
        [],

    };

  }

}