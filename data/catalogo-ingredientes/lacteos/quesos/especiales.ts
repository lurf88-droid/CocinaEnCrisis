import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const ESPECIALES: IngredienteCatalogo[] = [

  // ====================================================
  // 🧀 QUESO TALEGGIO
  // ====================================================

  {
    id: 'queso_taleggio',

    nombre: 'Queso Taleggio',

    aliases: [
      'taleggio',
      'queso taleggio',
    ],

    precioUnitario: 600,

    unidad: 'kg',

    precio: {
      minimo: 450,
      promedio: 600,
      maximo: 900,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_semiblandos',

    basico: false,

    tags: [
      'italiano',
      'cremoso',
      'gourmet',
    ],

    cocinas: [
      'italiana',
      'europea',
    ],

    tecnicas: [
      'fundir',
      'salsear',
      'gratinar',
    ],

    nivel: 'avanzado',

    familias: [
      'quesos',
      'lacteos',
      'quesos_italianos',
      'quesos_semiblandos',
    ],

    usos: [
      'pasta',
      'pizza',
      'sandwiches',
      'risotto',
    ],

    roles: [
      'cremosidad',
      'umami',
      'fundente',
    ],

    combinaCon: [
      'pan',
      'champiñones',
      'pasta',
      'frutas',
    ],

    sustitutos: [],

    sustitutosEconomicos: [],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 2,
      salado: 4,
      amargo: 0,
      umami: 8,
      picante: 0,

      ahumado: 0,
      graso: 8,
      fresco: 2,
      aromatico: 6,
    },

    sabores: [
      'cremoso',
      'intenso',
      'lacteo',
    ],

    texturas: [
      'blanda',
      'fundente',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'pasta con taleggio',
      'pizza gourmet',
      'salsa cremosa',
    ],
  },


  // ====================================================
  // 🧀 QUESO MASCARPONE
  // ====================================================

  {
    id: 'queso_mascarpone',

    nombre: 'Queso Mascarpone',

    aliases: [
      'mascarpone',
      'queso mascarpone',
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

    subcategoria: 'quesos_frescos_cremosos',

    basico: false,

    tags: [
      'italiano',
      'cremoso',
      'reposteria',
      'gourmet',
    ],

    cocinas: [
      'italiana',
      'europea',
      'internacional',
    ],

    tecnicas: [
      'batir',
      'mezclar',
      'rellenar',
      'incorporar_en_salsa',
    ],

    nivel: 'intermedio',

    familias: [
      'quesos',
      'lacteos',
      'proteinas_lacteas',
      'quesos_italianos',
      'quesos_cremosos',
    ],

    usos: [
      'postres',
      'pasta',
      'salsas',
      'rellenos',
      'cremas',
    ],

    roles: [
      'cremosidad',
      'grasa',
      'textura',
      'base',
    ],

    combinaCon: [
      'cafe',
      'cacao',
      'frutas',
      'vainilla',
      'pasta',
    ],

    sustitutos: [],

    sustitutosEconomicos: [],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 1,
      salado: 1,
      amargo: 0,
      umami: 4,
      picante: 0,

      ahumado: 0,
      graso: 10,
      fresco: 4,
      aromatico: 2,
    },

    sabores: [
      'cremoso',
      'suave',
      'mantecoso',
    ],

    texturas: [
      'aterciopelada',
      'cremosa',
      'espesa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'tiramisu',
      'cheesecake italiano',
      'pasta al mascarpone',
      'crema de frutas',
      'postres cremosos',
    ],
  },


  // ====================================================
  // 🐐 QUESO DE CABRA
  // ====================================================

  {
    id: 'queso_cabra',

    nombre: 'Queso de cabra',

    aliases: [
      'queso cabra',
      'queso de cabra',
      'goat cheese',
      'chevre',
      'chèvre',
    ],

    precioUnitario: 380,

    unidad: 'kg',

    precio: {
      minimo: 250,
      promedio: 380,
      maximo: 650,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_especiales',

    basico: false,

    tags: [
      'gourmet',
      'mediterraneo',
      'cremoso',
      'intenso',
    ],

    cocinas: [
      'francesa',
      'mediterranea',
      'internacional',
    ],

    tecnicas: [
      'desmenuzar',
      'untar',
      'gratinar',
      'preparar_ensalada',
    ],

    nivel: 'intermedio',

    familias: [
      'quesos',
      'lacteos',
      'quesos_especiales',
    ],

    usos: [
      'ensaladas',
      'pizzas',
      'tostadas',
      'pasta',
      'botanas',
    ],

    roles: [
      'sabor',
      'cremosidad',
      'umami',
    ],

    combinaCon: [
      'miel',
      'nueces',
      'frutas',
      'pan',
      'verduras',
    ],

    sustitutos: [],

    sustitutosEconomicos: [],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 3,
      salado: 3,
      amargo: 0,
      umami: 7,
      picante: 0,

      ahumado: 1,
      graso: 6,
      fresco: 5,
      aromatico: 5,
    },

    sabores: [
      'acido',
      'cremoso',
      'caracteristico',
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
      'ensalada con queso de cabra',
      'pizza gourmet',
      'tostadas con queso de cabra',
      'pasta cremosa',
    ],
  },


  // ====================================================
  // 🇲🇽 QUESO DEL ISTMO
  // ====================================================

  {
    id: 'queso_istmo',

    nombre: 'Queso del Istmo',

    aliases: [
      'queso istmeño',
      'queso istmeno',
      'queso oaxaqueño del istmo',
      'queso oaxaqueno del istmo',
      'queso del istmo',
    ],

    precioUnitario: 220,

    unidad: 'kg',

    precio: {
      minimo: 180,
      promedio: 220,
      maximo: 300,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_mexicanos',

    basico: false,

    tags: [
      'oaxaca',
      'tradicional',
      'queso',
      'regional',
    ],

    cocinas: [
      'mexicana',
      'oaxaqueña',
    ],

    tecnicas: [
      'rebanar',
      'desmenuzar',
      'agregar_en_crudo',
    ],

    nivel: 'intermedio',

    familias: [
      'lacteos',
      'quesos',
      'quesos_mexicanos',
      'ingredientes_regionales',
      'oaxaca',
    ],

    usos: [
      'memelas',
      'tlayudas',
      'antojitos',
    ],

    roles: [
      'sabor',
      'grasa',
      'textura',
      'identidad',
    ],

    combinaCon: [
      'masa_maiz',
      'frijol_negro',
      'salsas',
    ],

    sustitutos: [],

    sustitutosEconomicos: [],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 1,
      salado: 3,
      amargo: 0,
      umami: 5,
      picante: 0,

      ahumado: 0,
      graso: 4,
      fresco: 3,
      aromatico: 2,
    },

    sabores: [
      'lacteo',
      'salado',
      'cremoso',
    ],

    texturas: [
      'fibrosa',
      'suave',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'memelas_oaxaquenas',
      'tlayuda_oaxaquena',
    ],
  },

];