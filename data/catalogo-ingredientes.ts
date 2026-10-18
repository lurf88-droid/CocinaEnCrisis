import {
  BASES_CULINARIAS,
} from './catalogo-ingredientes/bases';

import {
  CONDIMENTOS,
} from './catalogo-ingredientes/condimentos';

import {
  DESPENSA,
} from './catalogo-ingredientes/despensa';

import {
  CATALOGO_FRUTAS,
} from './catalogo-ingredientes/frutas';

import {
  LACTEOS,
} from './catalogo-ingredientes/lacteos';

import {
  PROTEINAS,
} from './catalogo-ingredientes/proteinas';

import {
  PROTEINAS_VEGETALES,
} from './catalogo-ingredientes/proteinas-vegetales';

import {
  SEMILLAS_CEREALES,
} from './catalogo-ingredientes/semillas-cereales';

import {
  CATALOGO_VERDURAS,
} from './catalogo-ingredientes/verduras';

import {
  BEBIDAS,
} from './catalogo-ingredientes/bebidas';

import {
  PANADERIA,
} from './catalogo-ingredientes/panaderia';

import type {
  PerfilSabor,
} from '@/types/perfilSabor';


// ======================================================
// 🧺 TIPO INGREDIENTE DEL CATÁLOGO
// ======================================================

export type IngredienteCatalogo = {

  id: string;

  nombre: string;

  aliases: string[];


  // ====================================================
  // 💰 COSTO
  // ====================================================

 precioUnitario: number;

unidad: string;

unidadCompra?: string;
/**
 * Cantidad contenida en una presentación de compra,
 * expresada en la unidad base del ingrediente.
 *
 * Ejemplos:
 * unidad: 'kg'
 * unidadCompra: 'bolsa'
 * cantidadCompra: 1
 *
 * unidad: 'pieza'
 * unidadCompra: 'docena'
 * cantidadCompra: 12
 */
cantidadCompra?: number;

/**
 * Indica que el ingrediente puede comprarse exactamente
 * en la cantidad necesaria.
 *
 * Ejemplos habituales:
 * carne por kg, jitomate por kg, cebolla por kg.
 */
compraFraccionable?: boolean;
/**
 * Peso aproximado de una pieza en gramos.
 */
pesoPorUnidad?: number;

/**
 * Densidad aproximada en gramos por mililitro.
 *
 * Sirve para convertir volumen ↔ peso
 * únicamente cuando el ingrediente la define.
 */
densidadGPorMl?: number;

/**
 * Conversión explícita para casos especiales.
 */
factorConversion?: number;


  precio?: {

    minimo: number;

    promedio: number;

    maximo: number;

    moneda: 'MXN';

    actualizado: string;

  };


  // ====================================================
  // 📦 CLASIFICACIÓN
  // ====================================================

  categoria:
    | 'despensa'
    | 'refrigerador'
    | 'lacteos'
    | 'proteinas'
    | 'verduras'
    | 'frutas'
    | 'especias'
    | 'condimentos'
    | 'panaderia'
    | 'reposteria'
    | 'bebidas'
    | 'botanas'
    | 'proteinas_vegetales'
    | 'salsas_base'
    | 'bases_culinarias'
    | 'salsas'
    | 'preparaciones'
    | 'chiles'
    | 'carnes'
    | 'chiles_secos';

  subcategoria?: string;


  // ====================================================
  // 🧾 GENERAL
  // ====================================================

  basico?: boolean;

  tags?: string[];


  // ====================================================
  // 🌎 COCINA
  // ====================================================

  cocinas?: string[];

  tecnicas?: string[];


  // ====================================================
  // ⭐ NIVEL
  // ====================================================

  nivel?:
    | 'basico'
    | 'intermedio'
    | 'avanzado'
    | 'chef';


  // ====================================================
  // 🌙 CHEF LUNA
  // ====================================================

  familias?: string[];

  usos?: string[];

  roles?: string[];


  // ====================================================
  // 🧠 MOTOR
  // ====================================================

  combinaCon?: string[];

  sustitutos?: string[];

  sustitutosEconomicos?: string[];


  // ====================================================
  // 👅 SABOR
  // ====================================================

  perfilSabor?: PerfilSabor;

  sabores?: string[];

  texturas?: string[];


  // ====================================================
  // 🌱 PRODUCTO
  // ====================================================

  temporada?: string[];

  conservacion?: string;


  // ====================================================
  // 🍳 RECETAS
  // ====================================================

  recetasCompatibles?: string[];

};


// ======================================================
// 📚 CATÁLOGO MAESTRO
// ======================================================

export const CATALOGO_INGREDIENTES:
  IngredienteCatalogo[] = [

    ...CONDIMENTOS,

    ...DESPENSA,

    ...CATALOGO_FRUTAS,

    ...LACTEOS,

    ...PROTEINAS,

    ...PROTEINAS_VEGETALES,

    ...SEMILLAS_CEREALES,

    ...CATALOGO_VERDURAS,

    ...BASES_CULINARIAS,

    ...BEBIDAS,

    ...PANADERIA,

  ];


// ======================================================
// 🔤 NORMALIZACIÓN HUMANA
// ======================================================

export function normalizarIngrediente(
  texto: string
): string {

  return texto
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(
      /[\u0300-\u036f]/g,
      ''
    )
    .replace(
      /[-_]/g,
      ' '
    )
    .replace(
      /[^a-z0-9\s]/g,
      ''
    )
    .replace(
      /\s+/g,
      ' '
    );

}


// ======================================================
// 🆔 NORMALIZACIÓN DE ID
// ======================================================

export function normalizarID(
  texto: string
): string {

  return normalizarIngrediente(
    texto
  )
    .replace(
      /\s+/g,
      '_'
    );

}


// ======================================================
// ⚡ ÍNDICE RÁPIDO
// ======================================================

/*
  Este índice se crea UNA sola vez.

  Permite resolver exactamente:

  - ID
  - nombre
  - aliases

  Ejemplos:

  masa_maiz
  masa maíz
  masa de maíz

  pueden terminar apuntando al mismo ingrediente.
*/

const INDICE_INGREDIENTES =
  new Map<
    string,
    IngredienteCatalogo
  >();


// ======================================================
// 🧪 COLISIONES DEL CATÁLOGO
// ======================================================

type ColisionIngrediente = {
  clave: string;
  existente: string;
  nuevo: string;
};


const COLISIONES:
  ColisionIngrediente[] = [];


// ======================================================
// 🏗 CONSTRUIR ÍNDICE
// ======================================================

for (
  const ingrediente
  of CATALOGO_INGREDIENTES
) {

  const opciones = [

    ingrediente.id,

    ingrediente.nombre,

    ...ingrediente.aliases,

  ];


  for (
    const opcion
    of opciones
  ) {

    const clave =
      normalizarIngrediente(
        opcion
      );


    if (!clave) {
      continue;
    }


    const existente =
      INDICE_INGREDIENTES.get(
        clave
      );


    /*
      Si la clave ya pertenece al MISMO
      ingrediente no hay problema.

      Puede ocurrir que nombre y alias
      sean equivalentes.
    */

    if (
      existente &&
      existente.id === ingrediente.id
    ) {

      continue;

    }


    /*
      Si ya pertenece a OTRO ingrediente,
      no sobrescribimos silenciosamente.
    */

    if (
      existente &&
      existente.id !== ingrediente.id
    ) {

      COLISIONES.push({

        clave,

        existente:
          existente.id,

        nuevo:
          ingrediente.id,

      });


      continue;

    }


    INDICE_INGREDIENTES.set(
      clave,
      ingrediente
    );

  }

}


// ======================================================
// 🧪 AVISO DE COLISIONES
// ======================================================

if (
  __DEV__ &&
  COLISIONES.length > 0
) {

  console.warn(
    `⚠️ CATÁLOGO: ${COLISIONES.length} ${
      COLISIONES.length === 1
        ? 'alias o nombre duplicado'
        : 'alias o nombres duplicados'
    }.`
  );


  COLISIONES.forEach(
    (
      colision,
      index: number
    ) => {

      console.warn(
        `⚠️ Colisión ${index + 1}: "${colision.clave}" → ` +
        `${colision.existente} / ${colision.nuevo}`
      );

    }
  );

}


// ======================================================
// 🎯 BUSCAR EXACTO
// ======================================================

export function obtenerIngrediente(
  texto: string
): IngredienteCatalogo | undefined {

  const normalizado =
    normalizarIngrediente(
      texto
    );


  if (!normalizado) {
    return undefined;
  }


  return (
    INDICE_INGREDIENTES.get(
      normalizado
    )
  );

}


// ======================================================
// 🆔 OBTENER POR ID
// ======================================================

export function obtenerIngredientePorId(
  id: string
): IngredienteCatalogo | undefined {

  const idNormalizado =
    normalizarID(
      id
    );


  return CATALOGO_INGREDIENTES.find(
    ingrediente =>
      normalizarID(
        ingrediente.id
      ) === idNormalizado
  );

}


// ======================================================
// 🔎 BUSCADOR LIBRE
// ======================================================

export function buscarIngrediente(
  texto: string
): IngredienteCatalogo[] {

  const normalizado =
    normalizarIngrediente(
      texto
    );


  if (!normalizado) {
    return [];
  }


  /*
    Si existe una coincidencia exacta,
    la colocamos primero.
  */

  const exacto =
    INDICE_INGREDIENTES.get(
      normalizado
    );


  const resultados =
    CATALOGO_INGREDIENTES
      .filter(
        ingrediente => {

          const opciones = [

            ingrediente.id,

            ingrediente.nombre,

            ...ingrediente.aliases,

            ...(ingrediente.tags ?? []),

          ];


          return opciones.some(
            opcion => {

              const opcionNormalizada =
                normalizarIngrediente(
                  opcion
                );


              return (
                opcionNormalizada.includes(
                  normalizado
                ) ||
                normalizado.includes(
                  opcionNormalizada
                )
              );

            }
          );

        }
      )
      .sort(
        (a, b) => {

          /*
            Coincidencia exacta siempre primero.
          */

          if (
            exacto?.id === a.id &&
            exacto?.id !== b.id
          ) {
            return -1;
          }


          if (
            exacto?.id === b.id &&
            exacto?.id !== a.id
          ) {
            return 1;
          }


          /*
            Nombre exacto antes de coincidencias
            parciales.
          */

          const nombreA =
            normalizarIngrediente(
              a.nombre
            );


          const nombreB =
            normalizarIngrediente(
              b.nombre
            );


          if (
            nombreA === normalizado &&
            nombreB !== normalizado
          ) {
            return -1;
          }


          if (
            nombreB === normalizado &&
            nombreA !== normalizado
          ) {
            return 1;
          }


          return (
            a.nombre.localeCompare(
              b.nombre,
              'es'
            )
          );

        }
      );


  /*
    Evitamos duplicados por ID,
    aunque el catálogo accidentalmente
    tuviera referencias repetidas.
  */

  const unicos =
    new Map<
      string,
      IngredienteCatalogo
    >();


  resultados.forEach(
    ingrediente => {

      if (
        !unicos.has(
          ingrediente.id
        )
      ) {

        unicos.set(
          ingrediente.id,
          ingrediente
        );

      }

    }
  );


  return [
    ...unicos.values(),
  ];

}