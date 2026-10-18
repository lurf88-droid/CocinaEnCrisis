import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const MADURADOS: IngredienteCatalogo[] = [

  // ====================================================
  // 🧀 QUESO AZUL
  // ====================================================

  {
    id: 'queso_azul',

    nombre: 'Queso azul',

    aliases: [
      'blue cheese',
      'queso azul',
      'queso azul madurado',
    ],

    precioUnitario: 420,

    unidad: 'kg',

    precio: {
      minimo: 300,
      promedio: 420,
      maximo: 700,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_madurados',

    basico: false,

    tags: [
      'intenso',
      'gourmet',
      'madurado',
      'umami',
    ],

    cocinas: [
      'francesa',
      'europea',
      'internacional',
    ],

    tecnicas: [
      'desmenuzar',
      'salsear',
      'gratinar',
    ],

    nivel: 'intermedio',

    familias: [
      'quesos',
      'lacteos',
      'proteinas_lacteas',
      'quesos_madurados',
      'quesos_azules',
    ],

    usos: [
      'salsas',
      'ensaladas',
      'tablas_de_quesos',
      'pizzas',
    ],

    roles: [
      'sabor_intenso',
      'umami',
      'acento',
    ],

    combinaCon: [
      'nueces',
      'pera',
      'miel',
      'carne',
      'ensalada',
    ],

    sustitutos: [],

    sustitutosEconomicos: [
      'queso_crema',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 3,
      salado: 6,
      amargo: 1,
      umami: 10,
      picante: 0,

      ahumado: 1,
      graso: 8,
      fresco: 1,
      aromatico: 8,
    },

    sabores: [
      'intenso',
      'picante_lacteo',
      'umami',
    ],

    texturas: [
      'cremosa',
      'desmenuzable',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'salsa de queso azul',
      'ensalada con queso azul',
      'hamburguesa gourmet',
      'tabla de quesos',
    ],
  },


  // ====================================================
  // 🧀 QUESO COMTÉ
  // ====================================================

  {
    id: 'queso_comte',

    nombre: 'Queso Comté',

    aliases: [
      'comte',
      'comté',
      'queso comte',
      'queso comté',
    ],

    precioUnitario: 650,

    unidad: 'kg',

    precio: {
      minimo: 450,
      promedio: 650,
      maximo: 1000,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_madurados',

    basico: false,

    tags: [
      'gourmet',
      'frances',
      'madurado',
    ],

    cocinas: [
      'francesa',
      'europea',
    ],

    tecnicas: [
      'rebanar',
      'fundir',
      'gratinar',
    ],

    nivel: 'avanzado',

    familias: [
      'quesos',
      'lacteos',
      'quesos_madurados',
      'quesos_franceses',
    ],

    usos: [
      'tablas_de_quesos',
      'fondue',
      'salsas',
      'gratinados',
    ],

    roles: [
      'sabor',
      'umami',
      'fundente',
    ],

    combinaCon: [
      'pan',
      'vino',
      'nueces',
      'frutas',
    ],

    sustitutos: [],

    sustitutosEconomicos: [],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 3,
      acido: 1,
      salado: 3,
      amargo: 0,
      umami: 8,
      picante: 0,

      ahumado: 1,
      graso: 7,
      fresco: 2,
      aromatico: 5,
    },

    sabores: [
      'nuez',
      'cremoso',
      'elegante',
    ],

    texturas: [
      'firme',
      'fundente',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'fondue francesa',
      'gratinados',
      'tabla de quesos',
      'sandwich gourmet',
    ],
  },


  // ====================================================
  // 🧀 QUESO STILTON
  // ====================================================

  {
    id: 'queso_stilton',

    nombre: 'Queso Stilton',

    aliases: [
      'stilton',
      'queso stilton',
      'blue stilton',
    ],

    precioUnitario: 750,

    unidad: 'kg',

    precio: {
      minimo: 500,
      promedio: 750,
      maximo: 1200,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_madurados',

    basico: false,

    tags: [
      'gourmet',
      'intenso',
      'azul',
      'madurado',
    ],

    cocinas: [
      'inglesa',
      'europea',
      'internacional',
    ],

    tecnicas: [
      'desmenuzar',
      'salsear',
      'gratinar',
    ],

    nivel: 'avanzado',

    familias: [
      'quesos',
      'lacteos',
      'quesos_madurados',
      'quesos_azules',
    ],

    usos: [
      'tablas_de_quesos',
      'salsas',
      'ensaladas',
      'carnes',
    ],

    roles: [
      'umami',
      'sabor_intenso',
      'acento',
    ],

    combinaCon: [
      'pera',
      'nueces',
      'miel',
      'carne_roja',
      'vino',
    ],

    sustitutos: [
      'queso_azul',
    ],

    sustitutosEconomicos: [
      'queso_crema',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 3,
      salado: 6,
      amargo: 1,
      umami: 10,
      picante: 0,

      ahumado: 1,
      graso: 8,
      fresco: 1,
      aromatico: 9,
    },

    sabores: [
      'intenso',
      'azul',
      'umami',
    ],

    texturas: [
      'cremosa',
      'desmenuzable',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'salsa stilton',
      'ensalada gourmet',
      'tabla de quesos',
      'carne con queso azul',
    ],
  },


  // ====================================================
  // 🧀 QUESO ASIAGO
  // ====================================================

  {
    id: 'queso_asiago',

    nombre: 'Queso Asiago',

    aliases: [
      'asiago',
      'queso asiago',
    ],

    precioUnitario: 450,

    unidad: 'kg',

    precio: {
      minimo: 300,
      promedio: 450,
      maximo: 700,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_madurados',

    basico: false,

    tags: [
      'italiano',
      'parmesano_alternativo',
      'gratinado',
    ],

    cocinas: [
      'italiana',
      'europea',
    ],

    tecnicas: [
      'rallar',
      'gratinar',
      'rebanar',
    ],

    nivel: 'intermedio',

    familias: [
      'quesos',
      'lacteos',
      'quesos_madurados',
      'quesos_italianos',
    ],

    usos: [
      'pasta',
      'risotto',
      'sopas',
      'gratines',
    ],

    roles: [
      'umami',
      'sabor',
      'textura',
    ],

    combinaCon: [
      'pasta',
      'pan',
      'tomate',
      'vino',
    ],

    sustitutos: [
      'queso_anejo',
    ],

    sustitutosEconomicos: [
      'queso_anejo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 1,
      salado: 5,
      amargo: 0,
      umami: 9,
      picante: 0,

      ahumado: 1,
      graso: 6,
      fresco: 2,
      aromatico: 5,
    },

    sabores: [
      'nuez',
      'salado',
      'umami',
    ],

    texturas: [
      'firme',
      'rallable',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'pasta con asiago',
      'risotto',
      'queso gratinado',
    ],
  },


  // ====================================================
  // 🧀 QUESO CAMEMBERT
  // ====================================================

  {
    id: 'queso_camembert',

    nombre: 'Queso Camembert',

    aliases: [
      'camembert',
      'queso camembert',
    ],

    precioUnitario: 650,

    unidad: 'kg',

    precio: {
      minimo: 450,
      promedio: 650,
      maximo: 1000,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_madurados',

    basico: false,

    tags: [
      'frances',
      'gourmet',
      'cremoso',
      'madurado',
    ],

    cocinas: [
      'francesa',
      'europea',
    ],

    tecnicas: [
      'hornear',
      'servir',
      'fundir',
    ],

    nivel: 'intermedio',

    familias: [
      'quesos',
      'lacteos',
      'quesos_madurados',
      'quesos_franceses',
      'quesos_cremosos',
    ],

    usos: [
      'entradas',
      'tablas_de_queso',
      'sandwiches',
    ],

    roles: [
      'cremosidad',
      'sabor',
      'experiencia',
    ],

    combinaCon: [
      'pan',
      'miel',
      'nueces',
      'frutas',
    ],

    sustitutos: [
      'queso_cabra',
    ],

    sustitutosEconomicos: [
      'queso_crema',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 2,
      salado: 3,
      amargo: 0,
      umami: 7,
      picante: 0,

      ahumado: 0,
      graso: 8,
      fresco: 2,
      aromatico: 6,
    },

    sabores: [
      'cremoso',
      'lacteo',
      'elegante',
    ],

    texturas: [
      'cremosa',
      'corteza_suave',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'camembert horneado',
      'tabla de quesos',
      'sandwich gourmet',
    ],
  },

];