import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const ALMIDONES_ESPESANTES: IngredienteCatalogo[] = [

  // ====================================================
  // 🌽 FÉCULA DE MAÍZ
  // ====================================================

  {
    id: 'fecula_maiz',

    nombre: 'Fécula de maíz',

    aliases: [
      'maicena',
      'almidon de maiz',
      'fécula de maíz',
      'fecula de maiz',
      'cornstarch',
    ],

    precioUnitario: 60,

    unidad: 'kg',

    precio: {
      minimo: 40,
      promedio: 60,
      maximo: 100,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'espesantes',

    basico: true,

    tags: [
      'reposteria',
      'espesante',
      'salsas',
      'almidon',
    ],

    cocinas: [
      'internacional',
    ],

    tecnicas: [
      'espesar',
      'hornear',
    ],

    nivel: 'basico',

    familias: [
      'harinas',
      'almidones',
      'espesantes',
      'maiz',
    ],

    usos: [
      'atoles',
      'salsas',
      'postres',
      'texturas',
    ],

    roles: [
      'espesante',
      'ligereza',
    ],

    combinaCon: [
      'leche',
      'azucar',
      'chocolate',
      'frutas',
    ],

    sustitutos: [
      'harina_trigo',
    ],

    sustitutosEconomicos: [
      'harina_trigo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 0,
      amargo: 0,
      umami: 0,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 0,
      aromatico: 0,
    },

    sabores: [
      'neutro',
    ],

    texturas: [
      'polvo_fino',
      'cremosa_al_cocinar',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'atole',
      'cremas',
      'flanes',
      'salsas',
    ],
  },


  // ====================================================
  // ⚪ TAPIOCA
  // ====================================================

  {
    id: 'tapioca',

    nombre: 'Tapioca',

    aliases: [
      'perlas de tapioca',
      'almidon de yuca',
      'almidón de yuca',
      'tapioca starch',
    ],

    precioUnitario: 90,

    unidad: 'kg',

    precio: {
      minimo: 60,
      promedio: 90,
      maximo: 150,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'almidones',

    basico: false,

    tags: [
      'sin_gluten',
      'postres',
      'textura',
      'espesante',
    ],

    cocinas: [
      'asiatica',
      'latinoamericana',
    ],

    tecnicas: [
      'hervir',
      'espesar',
    ],

    nivel: 'basico',

    familias: [
      'almidones',
      'espesantes',
    ],

    usos: [
      'bebidas',
      'postres',
      'espesante',
    ],

    roles: [
      'textura',
      'espesante',
    ],

    combinaCon: [
      'leche',
      'frutas',
      'azucar',
    ],

    sustitutos: [
      'fecula_maiz',
    ],

    sustitutosEconomicos: [
      'fecula_maiz',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 0,
      amargo: 0,
      umami: 0,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 0,
      aromatico: 0,
    },

    sabores: [
      'neutro',
    ],

    texturas: [
      'elastica',
      'gelatinosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'bubble tea',
      'budín de tapioca',
      'postres',
    ],
  },

];