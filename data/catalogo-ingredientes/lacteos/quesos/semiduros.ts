import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const SEMIDUROS: IngredienteCatalogo[] = [

  // ====================================================
  // 🧀 QUESO MANCHEGO
  // ====================================================

  {
    id: 'queso_manchego',

    nombre: 'Queso Manchego',

    aliases: [
      'queso manchego',
      'manchego',
      'queso manchego mexicano',
    ],

    precioUnitario: 280,

    unidad: 'kg',

    precio: {
      minimo: 200,
      promedio: 280,
      maximo: 420,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_semiduros',

    basico: true,

    tags: [
      'fundente',
      'mexicano',
      'versatil',
      'gratinar',
    ],

    cocinas: [
      'mexicana',
      'internacional',
    ],

    tecnicas: [
      'fundir',
      'gratinar',
      'rebanar',
      'hornear',
    ],

    nivel: 'basico',

    familias: [
      'quesos',
      'lacteos',
      'proteinas_lacteas',
      'quesos_semiduros',
      'quesos_mexicanos',
    ],

    usos: [
      'quesadillas',
      'sincronizadas',
      'gratines',
      'sandwiches',
      'pizzas',
    ],

    roles: [
      'cremosidad',
      'fundente',
      'sabor',
      'textura',
    ],

    combinaCon: [
      'tortilla_maiz',
      'pan',
      'jamon',
      'tomate',
      'pasta',
      'verduras',
    ],

    sustitutos: [
      'queso_mozzarella',
      'queso_oaxaca',
    ],

    sustitutosEconomicos: [
      'queso_oaxaca',
      'queso_panela',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 1,
      salado: 3,
      amargo: 0,
      umami: 6,
      picante: 0,

      ahumado: 1,
      graso: 6,
      fresco: 3,
      aromatico: 2,
    },

    sabores: [
      'suave',
      'cremoso',
      'lacteo',
    ],

    texturas: [
      'semidura',
      'fundente',
      'elastica',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'sincronizadas',
      'quesadillas con queso manchego',
      'pasta gratinada',
      'sandwich caliente',
      'pizza casera',
    ],
  },


  // ====================================================
  // 🧀 QUESO EDAM
  // ====================================================

  {
    id: 'queso_edam',

    nombre: 'Queso Edam',

    aliases: [
      'edam',
      'queso holandes',
      'queso holandés',
      'edam cheese',
    ],

    precioUnitario: 300,

    unidad: 'kg',

    precio: {
      minimo: 220,
      promedio: 300,
      maximo: 450,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_semiduros',

    basico: false,

    tags: [
      'fundente',
      'suave',
      'internacional',
      'versatil',
    ],

    cocinas: [
      'holandesa',
      'europea',
      'internacional',
    ],

    tecnicas: [
      'rebanar',
      'fundir',
      'gratinar',
    ],

    nivel: 'basico',

    familias: [
      'quesos',
      'lacteos',
      'proteinas_lacteas',
      'quesos_semiduros',
      'quesos_holandeses',
    ],

    usos: [
      'sandwiches',
      'fondue',
      'gratines',
      'tablas_de_quesos',
    ],

    roles: [
      'sabor',
      'fundente',
      'textura',
    ],

    combinaCon: [
      'pan',
      'jamon',
      'frutas',
      'nueces',
      'vino',
    ],

    sustitutos: [
      'queso_manchego',
      'queso_gouda',
      'queso_cheddar',
    ],

    sustitutosEconomicos: [
      'queso_oaxaca',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 1,
      salado: 3,
      amargo: 0,
      umami: 6,
      picante: 0,

      ahumado: 1,
      graso: 5,
      fresco: 3,
      aromatico: 2,
    },

    sabores: [
      'suave',
      'lacteo',
      'ligeramente_nuez',
    ],

    texturas: [
      'semidura',
      'elastica',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'sandwich gourmet',
      'queso fundido',
      'tabla de quesos',
      'gratinados',
    ],
  },


  // ====================================================
  // 🧀 QUESO GOUDA
  // ====================================================

  {
    id: 'queso_gouda',

    nombre: 'Queso Gouda',

    aliases: [
      'gouda',
      'queso gouda',
    ],

    precioUnitario: 320,

    unidad: 'kg',

    precio: {
      minimo: 240,
      promedio: 320,
      maximo: 500,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_semiduros',

    basico: false,

    tags: [
      'cremoso',
      'fundente',
      'internacional',
    ],

    cocinas: [
      'holandesa',
      'europea',
      'internacional',
    ],

    tecnicas: [
      'fundir',
      'gratinar',
      'rebanar',
    ],

    nivel: 'basico',

    familias: [
      'quesos',
      'lacteos',
      'quesos_semiduros',
      'quesos_holandeses',
    ],

    usos: [
      'hamburguesas',
      'sandwiches',
      'pizzas',
      'fondue',
    ],

    roles: [
      'fundente',
      'sabor',
      'cremosidad',
    ],

    combinaCon: [
      'pan',
      'carne',
      'jamon',
      'papa',
    ],

    sustitutos: [
      'queso_edam',
      'queso_manchego',
      'queso_cheddar',
    ],

    sustitutosEconomicos: [
      'queso_oaxaca',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 1,
      salado: 3,
      amargo: 0,
      umami: 7,
      picante: 0,

      ahumado: 1,
      graso: 6,
      fresco: 2,
      aromatico: 3,
    },

    sabores: [
      'cremoso',
      'nuez',
      'suave',
    ],

    texturas: [
      'semidura',
      'fundente',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'hamburguesa con gouda',
      'queso gratinado',
      'sandwich caliente',
      'fondue',
    ],
  },


  // ====================================================
  // 🧀 QUESO CHEDDAR
  // ====================================================

  {
    id: 'queso_cheddar',

    nombre: 'Queso Cheddar',

    aliases: [
      'cheddar',
      'queso cheddar',
      'queso amarillo cheddar',
    ],

    precioUnitario: 260,

    unidad: 'kg',

    precio: {
      minimo: 180,
      promedio: 260,
      maximo: 420,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_semiduros',

    basico: true,

    tags: [
      'fundente',
      'hamburguesa',
      'popular',
    ],

    cocinas: [
      'americana',
      'inglesa',
      'internacional',
    ],

    tecnicas: [
      'fundir',
      'gratinar',
      'rebanar',
    ],

    nivel: 'basico',

    familias: [
      'quesos',
      'lacteos',
      'quesos_semiduros',
    ],

    usos: [
      'hamburguesas',
      'sandwiches',
      'nachos',
      'pizzas',
    ],

    roles: [
      'fundente',
      'sabor',
      'cremosidad',
    ],

    combinaCon: [
      'carne',
      'pan',
      'papa',
      'jalapeño',
    ],

    sustitutos: [
      'queso_gouda',
      'queso_manchego',
      'queso_edam',
    ],

    sustitutosEconomicos: [
      'queso_oaxaca',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 2,
      salado: 4,
      amargo: 0,
      umami: 7,
      picante: 0,

      ahumado: 2,
      graso: 7,
      fresco: 1,
      aromatico: 2,
    },

    sabores: [
      'cremoso',
      'intenso',
      'ligeramente_salado',
    ],

    texturas: [
      'semidura',
      'fundente',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'hamburguesa con cheddar',
      'nachos',
      'sandwich caliente',
      'papas gratinadas',
    ],
  },


  // ====================================================
  // 🧀 QUESO HALLOUMI
  // ====================================================

  {
    id: 'queso_halloumi',

    nombre: 'Queso Halloumi',

    aliases: [
      'halloumi',
      'queso halloumi',
    ],

    precioUnitario: 550,

    unidad: 'kg',

    precio: {
      minimo: 350,
      promedio: 550,
      maximo: 850,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_semiduros',

    basico: false,

    tags: [
      'grill',
      'mediterraneo',
      'resistente_calor',
    ],

    cocinas: [
      'chipriota',
      'mediterranea',
      'internacional',
    ],

    tecnicas: [
      'asar',
      'cocinar_plancha',
      'freir',
    ],

    nivel: 'intermedio',

    familias: [
      'quesos',
      'lacteos',
      'quesos_semiduros',
      'quesos_mediterraneos',
    ],

    usos: [
      'ensaladas',
      'parrilla',
      'tacos',
      'platos_vegetarianos',
    ],

    roles: [
      'proteina',
      'textura',
      'sabor',
    ],

    combinaCon: [
      'verduras',
      'limon',
      'menta',
      'tomate',
    ],

    sustitutos: [
      'queso_panela',
    ],

    sustitutosEconomicos: [
      'queso_panela',
      'queso_oaxaca',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 1,
      salado: 7,
      amargo: 0,
      umami: 7,
      picante: 0,

      ahumado: 2,
      graso: 6,
      fresco: 3,
      aromatico: 3,
    },

    sabores: [
      'salado',
      'lacteo',
      'intenso',
    ],

    texturas: [
      'firme',
      'elastica',
      'crujiente_al_asar',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'halloumi a la parrilla',
      'ensalada mediterranea',
      'tacos vegetarianos',
      'brochetas',
    ],
  },


  // ====================================================
  // 🧀 QUESO FONTINA
  // ====================================================

  {
    id: 'queso_fontina',

    nombre: 'Queso Fontina',

    aliases: [
      'fontina',
      'queso fontina',
    ],

    precioUnitario: 480,

    unidad: 'kg',

    precio: {
      minimo: 350,
      promedio: 480,
      maximo: 750,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_semiblandos',

    basico: false,

    tags: [
      'fundente',
      'italiano',
      'cremoso',
    ],

    cocinas: [
      'italiana',
      'europea',
    ],

    tecnicas: [
      'fundir',
      'gratinar',
      'salsear',
    ],

    nivel: 'intermedio',

    familias: [
      'quesos',
      'lacteos',
      'quesos_italianos',
      'quesos_semiblandos',
      'quesos_fundentes',
    ],

    usos: [
      'pizzas',
      'risottos',
      'salsas',
      'fondue',
    ],

    roles: [
      'fundente',
      'cremosidad',
      'sabor',
    ],

    combinaCon: [
      'pasta',
      'pan',
      'champiñones',
      'vegetales',
    ],

    sustitutos: [
      'queso_mozzarella',
      'queso_taleggio',
    ],

    sustitutosEconomicos: [
      'queso_oaxaca',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 1,
      salado: 3,
      amargo: 0,
      umami: 7,
      picante: 0,

      ahumado: 1,
      graso: 7,
      fresco: 2,
      aromatico: 4,
    },

    sabores: [
      'cremoso',
      'suave',
      'lacteo',
    ],

    texturas: [
      'semiblanda',
      'fundente',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'risotto con fontina',
      'pasta cremosa',
      'pizza gourmet',
      'fondue',
    ],
  },

];