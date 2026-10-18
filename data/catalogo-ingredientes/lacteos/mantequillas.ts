import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const MANTEQUILLAS: IngredienteCatalogo[] = [

// ====================================================
// 🧈 MANTEQUILLA
// ====================================================

{
id: 'mantequilla',

nombre: 'Mantequilla',


  aliases: [
  'mantequilla',
  'butter',

],

precioUnitario: 160,

unidad: 'kg',

precio: {
  minimo: 120,
  promedio: 160,
  maximo: 250,
  moneda: 'MXN',
  actualizado: '2026-08',
},

categoria: 'lacteos',

subcategoria: 'grasas_lacteas',

basico: true,

tags: [
  'reposteria',
  'cremoso',
  'grasa',
  'base_cocina',
],

cocinas: [
  'francesa',
  'italiana',
  'mexicana',
  'internacional',
],

tecnicas: [
  'fundir',
  'batir',
  'saltear',
  'hornear',
  'emulsionar',
],

nivel: 'basico',

familias: [
  'lacteos',
  'grasas_culinarias',
  'bases_culinarias',
],

usos: [
  'reposteria',
  'salsas',
  'panaderia',
  'pasta',
  'cocina_diaria',
],

roles: [
  'grasa',
  'sabor',
  'textura',
  'cremosidad',
],

combinaCon: [
  'harina',
  'huevo',
  'azucar',
  'leche',
  'queso',
  'ajo',
  'papa',
],

sustitutos: [
  'margarina',
  'aceite_vegetal',
  'aceite_oliva',
],

sustitutosEconomicos: [
  'margarina',
  'aceite_vegetal',
],

perfilSabor: {
  ...SABOR_BASE,

  dulce: 1,
  acido: 1,
  salado: 2,
  amargo: 0,
  umami: 2,
  picante: 0,

  ahumado: 0,
  graso: 10,
  fresco: 1,
  aromatico: 5,
},

sabores: [
  'lacteo',
  'cremoso',
  'mantecoso',
],

texturas: [
  'cremosa',
  'solida',
  'untuosa',
],

temporada: [
  'todo_el_año',
],

conservacion:
  'refrigerado',

recetasCompatibles: [
  'salsa bechamel',
  'galletas',
  'pasteles',
  'croissants',
  'pasta cremosa',
  'pure de papa',
  'salsas francesas',
],

},

// ====================================================
// 🧈 MANTEQUILLA CLARIFICADA
// ====================================================

{
id: 'mantequilla_clarificada',

nombre: 'Mantequilla clarificada',

aliases: [
  'mantequilla clarificada',
  'clarified butter',
],

precioUnitario: 220,

unidad: 'kg',

precio: {
  minimo: 170,
  promedio: 220,
  maximo: 320,
  moneda: 'MXN',
  actualizado: '2026-08',
},

categoria: 'lacteos',

subcategoria: 'grasas_lacteas',

basico: false,

tags: [
  'grasa',
  'alta_temperatura',
  'gourmet',
  'culinario',
],

cocinas: [
  'francesa',
  'india',
  'internacional',
],

tecnicas: [
  'clarificar',
  'fundir',
  'saltear',
  'freir',
],

nivel: 'intermedio',

familias: [
  'lacteos',
  'grasas_culinarias',
  'mantequillas',
],

usos: [
  'salteados',
  'salsas',
  'carnes',
  'vegetales',
],

roles: [
  'grasa',
  'sabor',
  'coccion_alta_temperatura',
],

combinaCon: [
  'ajo',
  'hierbas',
  'carne',
  'pescado',
  'verduras',
],

sustitutos: [
  'mantequilla',
  'ghee',
],

sustitutosEconomicos: [
  'mantequilla',
  'aceite_vegetal',
],

perfilSabor: {
  ...SABOR_BASE,

  dulce: 1,
  acido: 0,
  salado: 1,
  amargo: 0,
  umami: 2,
  picante: 0,

  ahumado: 1,
  graso: 10,
  fresco: 0,
  aromatico: 6,
},

sabores: [
  'mantecoso',
  'lacteo',
  'ligeramente tostado',
],

texturas: [
  'liquida',
  'untuosa',
],

temporada: [
  'todo_el_año',
],

conservacion:
  'refrigerado o lugar fresco',

recetasCompatibles: [
  'salsas francesas',
  'vegetales salteados',
  'pescado a la mantequilla',
  'carnes a la plancha',
],

},

// ====================================================
// 🧈 MANTEQUILLA DE AJO
// ====================================================

{
id: 'mantequilla_ajo',

nombre: 'Mantequilla de ajo',

aliases: [
  'mantequilla con ajo',
  'garlic butter',
],

precioUnitario: 190,

unidad: 'kg',

precio: {
  minimo: 140,
  promedio: 190,
  maximo: 280,
  moneda: 'MXN',
  actualizado: '2026-08',
},

categoria: 'lacteos',

subcategoria: 'mantequillas_saborizadas',

basico: false,

tags: [
  'aromatico',
  'saborizado',
  'ajo',
  'versatil',
],

cocinas: [
  'francesa',
  'italiana',
  'internacional',
],

tecnicas: [
  'mezclar',
  'fundir',
  'saltear',
  'untar',
],

nivel: 'basico',

familias: [
  'lacteos',
  'mantequillas',
  'grasas_saborizadas',
],

usos: [
  'pan',
  'pasta',
  'mariscos',
  'carnes',
  'verduras',
],

roles: [
  'grasa',
  'aroma',
  'sabor',
],

combinaCon: [
  'ajo',
  'perejil',
  'pan',
  'pasta',
  'camaron',
  'pollo',
],

sustitutos: [
  'mantequilla',
],

sustitutosEconomicos: [
  'mantequilla',
],

perfilSabor: {
  ...SABOR_BASE,

  dulce: 1,
  acido: 0,
  salado: 2,
  amargo: 0,
  umami: 3,
  picante: 1,

  ahumado: 1,
  graso: 10,
  fresco: 1,
  aromatico: 9,
},

sabores: [
  'ajo',
  'mantecoso',
  'aromatico',
],

texturas: [
  'cremosa',
  'untuosa',
],

temporada: [
  'todo_el_año',
],

conservacion:
  'refrigerado',

recetasCompatibles: [
  'pan de ajo',
  'pasta al ajo',
  'camarones al ajo',
  'pollo a la mantequilla',
],

},

// ====================================================
// 🧈 MANTEQUILLA DE HIERBAS
// ====================================================

{
id: 'mantequilla_hierbas',

nombre: 'Mantequilla de hierbas',

aliases: [
  'mantequilla con hierbas',
  'herb butter',
],

precioUnitario: 200,

unidad: 'kg',

precio: {
  minimo: 150,
  promedio: 200,
  maximo: 300,
  moneda: 'MXN',
  actualizado: '2026-08',
},

categoria: 'lacteos',

subcategoria: 'mantequillas_saborizadas',

basico: false,

tags: [
  'aromatico',
  'saborizado',
  'hierbas',
  'gourmet',
],

cocinas: [
  'francesa',
  'italiana',
  'internacional',
],

tecnicas: [
  'mezclar',
  'fundir',
  'untar',
  'terminar',
],

nivel: 'intermedio',

familias: [
  'lacteos',
  'mantequillas',
  'grasas_saborizadas',
],

usos: [
  'carnes',
  'pescados',
  'pan',
  'verduras',
  'pastas',
],

roles: [
  'grasa',
  'aroma',
  'acabado',
],

combinaCon: [
  'romero',
  'tomillo',
  'perejil',
  'ajo',
  'carne',
  'pescado',
],

sustitutos: [
  'mantequilla',
],

sustitutosEconomicos: [
  'mantequilla',
],

perfilSabor: {
  ...SABOR_BASE,

  dulce: 1,
  acido: 0,
  salado: 2,
  amargo: 0,
  umami: 2,
  picante: 0,

  ahumado: 1,
  graso: 10,
  fresco: 3,
  aromatico: 9,
},

sabores: [
  'herbal',
  'mantecoso',
  'aromatico',
],

texturas: [
  'cremosa',
  'untuosa',
],

temporada: [
  'todo_el_año',
],

conservacion:
  'refrigerado',

recetasCompatibles: [
  'pollo con hierbas',
  'pescado con mantequilla',
  'verduras asadas',
  'pan con hierbas',
],

},

// ====================================================
// 🧈 MANTEQUILLA AVELLANADA
// ====================================================

{
id: 'mantequilla_avellanada',

nombre: 'Mantequilla avellanada',

aliases: [
  'mantequilla noisette',
  'beurre noisette',
  'brown butter',
],

precioUnitario: 190,

unidad: 'kg',

precio: {
  minimo: 140,
  promedio: 190,
  maximo: 280,
  moneda: 'MXN',
  actualizado: '2026-08',
},

categoria: 'lacteos',

subcategoria: 'grasas_lacteas',

basico: false,

tags: [
  'gourmet',
  'tostado',
  'reposteria',
  'aromatico',
],

cocinas: [
  'francesa',
  'italiana',
  'internacional',
],

tecnicas: [
  'fundir',
  'dorar',
  'terminar',
],

nivel: 'avanzado',

familias: [
  'lacteos',
  'mantequillas',
  'grasas_culinarias',
],

usos: [
  'reposteria',
  'pasta',
  'salsas',
  'vegetales',
],

roles: [
  'grasa',
  'aroma',
  'sabor_tostado',
],

combinaCon: [
  'nuez',
  'pasta',
  'salvia',
  'verduras',
  'postres',
],

sustitutos: [
  'mantequilla',
],

sustitutosEconomicos: [
  'mantequilla',
],

perfilSabor: {
  ...SABOR_BASE,

  dulce: 2,
  acido: 0,
  salado: 1,
  amargo: 1,
  umami: 2,
  picante: 0,

  ahumado: 5,
  graso: 10,
  fresco: 0,
  aromatico: 9,
},

sabores: [
  'nuez',
  'tostado',
  'mantecoso',
],

texturas: [
  'liquida',
  'untuosa',
],

temporada: [
  'todo_el_año',
],

conservacion:
  'refrigerado',

recetasCompatibles: [
  'pasta con mantequilla avellanada',
  'galletas',
  'pasteles',
  'vegetales salteados',
],

},

// ====================================================
  // 🧈 GHEE
  // ====================================================

  {
    id: 'ghee',

    nombre: 'Ghee',

    aliases: [
  'ghee',
  'mantequilla ghee',
],

    precioUnitario: 300,

    unidad: 'kg',

    precio: {
      minimo: 200,
      promedio: 300,
      maximo: 500,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'grasas_lacteas',

    basico: false,

    tags: [
      'chef',
      'aromatico',
      'especial',
    ],

    cocinas: [
      'india',
      'internacional',
    ],

    tecnicas: [
      'saltear',
      'freir',
      'cocinar',
    ],

    nivel: 'intermedio',

    familias: [
      'grasas',
      'grasas_lacteas',
    ],

    usos: [
      'salteados',
      'arroz',
      'carnes',
    ],

    roles: [
      'grasa',
      'aroma',
      'profundidad',
    ],

    combinaCon: [
      'especias',
      'arroz',
      'vegetales',
    ],

    sustitutos: [
      'mantequilla',
    ],

    sustitutosEconomicos: [
      'aceite_vegetal',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 2,
      picante: 0,

      ahumado: 1,
      graso: 10,
      fresco: 0,
      aromatico: 8,
    },

    sabores: [
      'mantequilla',
      'nuez',
    ],

    texturas: [
      'liquida',
      'untuosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_y_cerrado',

    recetasCompatibles: [
      'arroz especiado',
      'currys',
      'salteados',
    ],
  },

];