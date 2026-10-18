import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const ENLATADOS_CONSERVA: IngredienteCatalogo[] = [

  // ====================================================
  // 🌶️ CHIPOTLE ADOBADO EN LATA
  // ====================================================

  {
    id: 'chipotle_adobado_lata',

    nombre: 'Chipotle adobado en lata',

    aliases: [
      'chipotle en lata',
      'chipotle lata',
      'chipotle adobado',
      'chipotles adobados',
    ],

    precioUnitario: 80,

    unidad: 'kg',

    pesoPorUnidad: 215,

    precio: {
      minimo: 15,
      promedio: 20,
      maximo: 30,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'conservas',

    basico: true,

    tags: [
      'mexicano',
      'picante',
      'conserva',
      'adobado',
      'ahumado',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
    ],

    tecnicas: [
      'conservar',
      'adobar',
      'moler',
      'salsear',
      'guisar',
    ],

    nivel: 'basico',

    familias: [
      'chiles',
      'conservas',
      'condimentos',
      'condimentos_mexicanos',
    ],

    usos: [
      'salsas',
      'tacos',
      'guisos',
      'marinados',
      'rellenos',
    ],

    roles: [
      'sabor',
      'picante',
      'aroma',
      'color',
    ],

    combinaCon: [
      'pollo',
      'carne',
      'cerdo',
      'queso',
      'crema',
      'jitomate',
      'cebolla',
    ],

    sustitutos: [
      'chile_chipotle_seco',
      'chile_morita',
    ],

    sustitutosEconomicos: [
      'chile_morita',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 1,
      salado: 2,
      amargo: 0,
      umami: 3,
      picante: 5,

      ahumado: 4,
      graso: 2,
      fresco: 0,
      aromatico: 3,
    },

    sabores: [
      'picante',
      'ahumado',
      'adobado',
      'umami',
    ],

    texturas: [
      'tierno',
      'suave',
      'aceitoso',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_sin_abrir_refrigerado_despues_de_abrir',

    recetasCompatibles: [
      'pollo al chipotle',
      'salsa de chipotle',
      'tacos al chipotle',
      'crema de chipotle',
      'marinados mexicanos',
    ],
  },


  // ====================================================
  // 🐟 ATÚN EN LATA
  // ====================================================

  {
    id: 'atun_lata',

    nombre: 'Atún en lata',

    aliases: [
      'atun',
      'atún',
      'atun en conserva',
      'atún en conserva',
      'atun enlatado',
      'atún enlatado',
    ],

    precioUnitario: 160,

    unidad: 'kg',

    precio: {
      minimo: 100,
      promedio: 160,
      maximo: 250,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'conservas',

    basico: true,

    tags: [
      'proteina',
      'rapido',
      'versatil',
      'practico',
    ],

    cocinas: [
      'mexicana',
      'mediterranea',
      'internacional',
    ],

    tecnicas: [
      'mezclar',
      'ensamblar',
      'cocinar',
    ],

    nivel: 'basico',

    familias: [
      'conservas',
      'proteinas',
      'pescados',
    ],

    usos: [
      'ensaladas',
      'tacos',
      'pasta',
      'sandwiches',
    ],

    roles: [
      'proteina',
      'umami',
      'base',
    ],

    combinaCon: [
      'pasta',
      'arroz',
      'mayonesa',
      'verduras',
      'limon',
    ],

    sustitutos: [
      'sardina_lata',
    ],

    sustitutosEconomicos: [
      'huevo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 0,
      acido: 0,
      salado: 5,
      amargo: 0,
      umami: 9,
      picante: 0,

      ahumado: 2,
      graso: 5,
      fresco: 0,
      aromatico: 2,
    },

    sabores: [
      'umami',
      'marino',
      'salado',
    ],

    texturas: [
      'fibrosa',
      'suave',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'alacena_sin_abrir_refrigerado_despues_de_abrir',

    recetasCompatibles: [
      'ensalada de atun',
      'pasta con atun',
      'tostadas',
      'tacos de atun',
    ],
  },


  // ====================================================
  // 🐟 SARDINA EN LATA
  // ====================================================

  {
    id: 'sardina_lata',

    nombre: 'Sardina en lata',

    aliases: [
      'sardina',
      'sardinas',
      'sardina en conserva',
      'sardinas en conserva',
    ],

    precioUnitario: 120,

    unidad: 'kg',

    precio: {
      minimo: 80,
      promedio: 120,
      maximo: 200,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'conservas',

    basico: false,

    tags: [
      'proteina',
      'umami',
      'marino',
    ],

    cocinas: [
      'mexicana',
      'mediterranea',
    ],

    tecnicas: [
      'mezclar',
      'calentar',
    ],

    nivel: 'basico',

    familias: [
      'conservas',
      'proteinas',
      'pescados',
    ],

    usos: [
      'tostadas',
      'salsas',
      'ensaladas',
    ],

    roles: [
      'proteina',
      'umami',
      'intensidad',
    ],

    combinaCon: [
      'limon',
      'tomate',
      'chile',
      'cebolla',
    ],

    sustitutos: [
      'atun_lata',
    ],

    sustitutosEconomicos: [
      'huevo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 0,
      acido: 0,
      salado: 7,
      amargo: 0,
      umami: 10,
      picante: 0,

      ahumado: 3,
      graso: 7,
      fresco: 0,
      aromatico: 3,
    },

    sabores: [
      'marino',
      'intenso',
    ],

    texturas: [
      'suave',
      'fibrosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'alacena_sin_abrir_refrigerado_despues_de_abrir',

    recetasCompatibles: [
      'tostadas de sardina',
      'salsas marinas',
      'ensaladas',
    ],
  },


  // ====================================================
  // 🫘 FRIJOLES EN CONSERVA
  // ====================================================

  {
    id: 'frijoles_conserva',

    nombre: 'Frijoles en conserva',

    aliases: [
      'frijoles en lata',
      'frijoles cocidos',
      'frijoles en conserva',
    ],

    precioUnitario: 50,

    unidad: 'kg',

    precio: {
      minimo: 35,
      promedio: 50,
      maximo: 90,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'legumbres',

    basico: true,

    tags: [
      'mexicano',
      'base',
      'versatil',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
    ],

    tecnicas: [
      'calentar',
      'refreir',
      'mezclar',
    ],

    nivel: 'basico',

    familias: [
      'legumbres',
      'conservas',
    ],

    usos: [
      'tacos',
      'guarniciones',
      'sopas',
    ],

    roles: [
      'proteina_vegetal',
      'cuerpo',
      'umami',
    ],

    combinaCon: [
      'arroz',
      'queso',
      'chile',
      'tortilla',
    ],

    sustitutos: [
      'garbanzo_conserva',
    ],

    sustitutosEconomicos: [],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 2,
      amargo: 0,
      umami: 6,
      picante: 0,

      ahumado: 2,
      graso: 1,
      fresco: 0,
      aromatico: 4,
    },

    sabores: [
      'terroso',
      'cremoso',
    ],

    texturas: [
      'cremosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'alacena_sin_abrir_refrigerado_despues_de_abrir',

    recetasCompatibles: [
      'frijoles refritos',
      'tacos',
      'ensalada de frijol',
    ],
  },


  // ====================================================
  // 🫘 GARBANZOS EN CONSERVA
  // ====================================================

  {
    id: 'garbanzo_conserva',

    nombre: 'Garbanzos en conserva',

    aliases: [
      'garbanzo cocido',
      'garbanzos cocidos',
      'garbanzo en lata',
      'garbanzos en lata',
    ],

    precioUnitario: 70,

    unidad: 'kg',

    precio: {
      minimo: 50,
      promedio: 70,
      maximo: 120,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'legumbres',

    basico: false,

    tags: [
      'mediterraneo',
      'proteina_vegetal',
      'saludable',
    ],

    cocinas: [
      'mediterranea',
      'arabe',
      'internacional',
    ],

    tecnicas: [
      'mezclar',
      'calentar',
      'triturar',
    ],

    nivel: 'basico',

    familias: [
      'legumbres',
      'conservas',
    ],

    usos: [
      'ensaladas',
      'hummus',
      'guisos',
    ],

    roles: [
      'proteina',
      'textura',
      'cuerpo',
    ],

    combinaCon: [
      'limon',
      'ajo',
      'tahini',
      'verduras',
    ],

    sustitutos: [
      'frijoles_conserva',
    ],

    sustitutosEconomicos: [
      'frijoles_conserva',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 5,
      picante: 0,

      ahumado: 1,
      graso: 2,
      fresco: 1,
      aromatico: 4,
    },

    sabores: [
      'terroso',
      'nuez',
    ],

    texturas: [
      'cremosa',
      'harinosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'alacena_sin_abrir_refrigerado_despues_de_abrir',

    recetasCompatibles: [
      'hummus',
      'ensalada mediterranea',
      'curry de garbanzo',
    ],
  },


  // ====================================================
  // 🌽 MAÍZ DULCE EN LATA
  // ====================================================

  {
    id: 'maiz_lata',

    nombre: 'Maíz dulce en lata',

aliases: [
  'elote en lata',
  'maiz en lata',
  'maíz en lata',
  'maiz dulce en lata',
  'maíz dulce en lata',
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

    subcategoria: 'conservas',

    basico: true,

    tags: [
      'versatil',
      'color',
      'rapido',
    ],

    cocinas: [
      'mexicana',
      'internacional',
    ],

    tecnicas: [
      'mezclar',
      'saltear',
    ],

    nivel: 'basico',

    familias: [
      'conservas',
      'verduras',
      'maiz',
    ],

    usos: [
      'ensaladas',
      'tacos',
      'sopas',
    ],

    roles: [
      'dulzor',
      'color',
      'textura',
    ],

    combinaCon: [
      'queso',
      'pollo',
      'arroz',
      'chile',
    ],

    sustitutos: [
      'maiz_dulce',
      'elote',
    ],

    sustitutosEconomicos: [
      'zanahoria',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 8,
      acido: 1,
      salado: 1,
      amargo: 0,
      umami: 3,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 4,
      aromatico: 3,
    },

    sabores: [
      'dulce',
      'maiz',
    ],

    texturas: [
      'tierna',
      'crujiente',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'alacena_sin_abrir_refrigerado_despues_de_abrir',

    recetasCompatibles: [
      'ensalada mexicana',
      'tacos',
      'sopas',
    ],
  },


  // ====================================================
  // 🍅 PASTA DE TOMATE
  // ====================================================

  {
    id: 'pasta_tomate',

    nombre: 'Pasta de tomate',

    aliases: [
      'concentrado tomate',
      'concentrado de tomate',
      'tomato paste',
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

    subcategoria: 'conservas',

    basico: false,

    tags: [
      'concentrado',
      'sabor',
      'chef',
    ],

    cocinas: [
      'italiana',
      'internacional',
    ],

    tecnicas: [
      'reducir',
      'salsear',
    ],

    nivel: 'intermedio',

    familias: [
      'tomate',
      'conservas',
    ],

    usos: [
      'salsas',
      'guisos',
      'fondos',
    ],

    roles: [
      'umami',
      'color',
      'profundidad',
    ],

    combinaCon: [
      'ajo',
      'cebolla',
      'hierbas',
      'carne',
    ],

    sustitutos: [],

    sustitutosEconomicos: [],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 5,
      acido: 5,
      salado: 1,
      amargo: 1,
      umami: 8,
      picante: 0,

      ahumado: 1,
      graso: 0,
      fresco: 2,
      aromatico: 6,
    },

    sabores: [
      'tomate_intenso',
      'umami',
    ],

    texturas: [
      'espesa',
      'pasta',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'alacena_sin_abrir_refrigerado_despues_de_abrir',

    recetasCompatibles: [
      'salsa italiana',
      'estofados',
      'guisos profundos',
    ],
  },


  // ====================================================
  // 🌶️ CHILES EN CONSERVA
  // ====================================================

  {
    id: 'chiles_conserva',

    nombre: 'Chiles en conserva',

    aliases: [
      'chiles en vinagre',
      'jalapeños en escabeche',
      'jalapenos en escabeche',
      'chiles en escabeche',
    ],

    precioUnitario: 80,

    unidad: 'kg',

    precio: {
      minimo: 50,
      promedio: 80,
      maximo: 140,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'conservas',

    basico: true,

    tags: [
      'mexicano',
      'acido',
      'picoso',
    ],

    cocinas: [
      'mexicana',
    ],

    tecnicas: [
      'conservar',
      'terminar',
    ],

    nivel: 'basico',

    familias: [
      'chiles',
      'conservas',
      'encurtidos',
    ],

    usos: [
      'tacos',
      'sandwiches',
      'salsas',
    ],

    roles: [
      'picante',
      'acidez',
      'identidad',
    ],

    combinaCon: [
      'tortilla',
      'queso',
      'carne',
      'frijoles',
    ],

    sustitutos: [],

    sustitutosEconomicos: [],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 7,
      salado: 4,
      amargo: 1,
      umami: 3,
      picante: 8,

      ahumado: 1,
      graso: 0,
      fresco: 3,
      aromatico: 7,
    },

    sabores: [
      'picante',
      'acido',
      'vinagre',
    ],

    texturas: [
      'crujiente',
      'tierna',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'alacena_sin_abrir_refrigerado_despues_de_abrir',

    recetasCompatibles: [
      'tacos',
      'tortas',
      'salsas',
    ],
  },


  // ====================================================
  // 🥒 PEPINILLOS EN CONSERVA
  // ====================================================

  {
    id: 'pepinillos_conserva',

    nombre: 'Pepinillos en conserva',

    aliases: [
      'pepinillos',
      'pickles',
      'pepinillos encurtidos',
    ],

    precioUnitario: 100,

    unidad: 'kg',

    precio: {
      minimo: 70,
      promedio: 100,
      maximo: 160,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'conservas',

    basico: false,

    tags: [
      'acido',
      'fermentado',
      'textura',
    ],

    cocinas: [
      'europea',
      'americana',
      'internacional',
    ],

    tecnicas: [
      'conservar',
      'terminar',
    ],

    nivel: 'basico',

    familias: [
      'conservas',
      'fermentados',
      'encurtidos',
    ],

    usos: [
      'sandwiches',
      'ensaladas',
      'botanas',
    ],

    roles: [
      'acidez',
      'textura',
      'equilibrio',
    ],

    combinaCon: [
      'mayonesa',
      'carne',
      'quesos',
    ],

    sustitutos: [],

    sustitutosEconomicos: [
      'zanahoria',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 9,
      salado: 5,
      amargo: 1,
      umami: 2,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 5,
      aromatico: 5,
    },

    sabores: [
      'acido',
      'fermentado',
    ],

    texturas: [
      'crujiente',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'alacena_sin_abrir_refrigerado_despues_de_abrir',

    recetasCompatibles: [
      'hamburguesas',
      'sandwiches',
      'ensaladas',
    ],
  },

];