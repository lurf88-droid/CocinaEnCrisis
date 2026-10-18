import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const CEREALES: IngredienteCatalogo[] = [

  // ====================================================
  // 🌽 ELOTE
  // ====================================================

  {
    id: 'elote',

    nombre: 'Elote',

    aliases: [
      'elote fresco',
      'maiz tierno',
      'maíz tierno',
      'corn on the cob',
    ],

    precioUnitario: 25,

    unidad: 'kg',

    pesoPorUnidad: 180,

    precio: {
      minimo: 15,
      promedio: 25,
      maximo: 45,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'verduras',

    subcategoria: 'granos',

    basico: true,

    tags: [
      'economico',
      'mexicano',
      'energia',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
      'internacional',
    ],

    tecnicas: [
      'hervir',
      'asar',
      'grillar',
    ],

    nivel: 'basico',

    familias: [
      'maiz',
      'cereales',
      'granos',
    ],

    usos: [
      'sopas',
      'ensaladas',
      'antojitos',
      'guarniciones',
    ],

    roles: [
      'dulzor',
      'volumen',
    ],

    combinaCon: [
      'queso',
      'chile',
      'crema',
      'pollo',
    ],

    sustitutos: [
      'maiz_dulce',
    ],

    sustitutosEconomicos: [
      'papa',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 7,
      acido: 0,
      salado: 0,
      amargo: 0,
      umami: 3,
      picante: 0,

      ahumado: 3,
      graso: 1,
      fresco: 5,
      aromatico: 4,
    },

    sabores: [
      'dulce',
      'maiz',
    ],

    texturas: [
      'crujiente',
      'tierna',
    ],

    temporada: [
      'verano',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'elote preparado',
      'pozole',
      'sopa de verduras',
      'esquites',
    ],
  },


  // ====================================================
  // 🌽 MAÍZ DULCE
  // ====================================================

  {
    id: 'maiz_dulce',

    nombre: 'Maíz dulce',

    aliases: [
      'maiz amarillo',
      'maíz amarillo',
      'maiz dulce en grano',
      'maíz dulce en grano',
      'sweet corn',
    ],

    precioUnitario: 35,

    unidad: 'kg',

    precio: {
      minimo: 20,
      promedio: 35,
      maximo: 60,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'verduras',

    subcategoria: 'granos',

    basico: true,

    tags: [
      'economico',
      'dulce',
      'versatil',
    ],

    cocinas: [
      'mexicana',
      'internacional',
    ],

    tecnicas: [
      'hervir',
      'saltear',
      'asar',
    ],

    nivel: 'basico',

    familias: [
      'maiz',
      'cereales',
      'granos',
    ],

    usos: [
      'ensaladas',
      'sopas',
      'arroz',
      'guarniciones',
    ],

    roles: [
      'dulzor',
      'volumen',
    ],

    combinaCon: [
      'queso',
      'crema',
      'chile',
      'pollo',
    ],

    sustitutos: [
      'elote',
    ],

    sustitutosEconomicos: [
      'zanahoria',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 8,
      acido: 0,
      salado: 0,
      amargo: 0,
      umami: 3,
      picante: 0,

      ahumado: 2,
      graso: 1,
      fresco: 5,
      aromatico: 4,
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
      'verano',
    ],

    conservacion:
      'refrigerado_o_congelado',

    recetasCompatibles: [
      'ensalada de maiz',
      'sopa de verduras',
      'arroz mexicano',
    ],
  },


  // ====================================================
  // 🌾 AVENA
  // ====================================================

  {
    id: 'avena',

    nombre: 'Avena',

    aliases: [
      'avena tradicional',
      'hojuelas de avena',
      'avena en hojuelas',
      'oats',
    ],

    precioUnitario: 45,

    unidad: 'kg',

    precio: {
      minimo: 30,
      promedio: 45,
      maximo: 80,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'cereales',

    basico: true,

    tags: [
      'desayuno',
      'versatil',
      'saludable',
      'cotidiano',
    ],

    cocinas: [
      'internacional',
      'mexicana',
    ],

    tecnicas: [
      'cocer',
      'hidratar',
      'hornear',
    ],

    nivel: 'basico',

    familias: [
      'cereales',
      'granos',
      'desayunos',
    ],

    usos: [
      'desayunos',
      'postres',
      'batidos',
      'panaderia',
    ],

    roles: [
      'base',
      'textura',
      'nutricion',
    ],

    combinaCon: [
      'leche',
      'frutas',
      'miel',
      'canela',
      'chocolate',
    ],

    sustitutos: [
      'quinoa',
      'amaranto',
    ],

    sustitutosEconomicos: [
      'arroz_blanco',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 3,
      acido: 0,
      salado: 0,
      amargo: 1,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 2,
      fresco: 0,
      aromatico: 4,
    },

    sabores: [
      'nuez',
      'cereal',
    ],

    texturas: [
      'cremosa',
      'ligeramente_crujiente',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'avena con fruta',
      'galletas de avena',
      'granola casera',
      'tortitas de avena',
    ],
  },


  // ====================================================
  // 🌾 CEBADA
  // ====================================================

  {
    id: 'cebada',

    nombre: 'Cebada',

    aliases: [
      'cebada perlada',
      'grano de cebada',
      'barley',
    ],

    precioUnitario: 40,

    unidad: 'kg',

    precio: {
      minimo: 30,
      promedio: 40,
      maximo: 70,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'granos',

    basico: false,

    tags: [
      'tradicional',
      'sopas',
      'grano',
    ],

    cocinas: [
      'europea',
      'mexicana',
      'internacional',
    ],

    tecnicas: [
      'hervir',
      'coccion_lenta',
    ],

    nivel: 'basico',

    familias: [
      'cereales',
      'granos',
    ],

    usos: [
      'sopas',
      'ensaladas',
      'bebidas',
    ],

    roles: [
      'volumen',
      'textura',
    ],

    combinaCon: [
      'verduras',
      'pollo',
      'caldos',
    ],

    sustitutos: [
      'arroz_integral',
      'quinoa',
    ],

    sustitutosEconomicos: [
      'arroz_blanco',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 0,
      amargo: 1,
      umami: 2,
      picante: 0,

      ahumado: 1,
      graso: 1,
      fresco: 0,
      aromatico: 3,
    },

    sabores: [
      'terroso',
      'nuez',
    ],

    texturas: [
      'masticable',
      'firme',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'sopa de cebada',
      'ensalada de granos',
      'agua de cebada',
    ],
  },


  // ====================================================
  // 🌾 SALVADO DE TRIGO
  // ====================================================

  {
    id: 'salvado_trigo',

    nombre: 'Salvado de trigo',

    aliases: [
      'salvado',
      'fibra de trigo',
      'wheat bran',
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

    subcategoria: 'cereales',

    basico: false,

    tags: [
      'fibra',
      'saludable',
      'horneado',
    ],

    cocinas: [
      'internacional',
    ],

    tecnicas: [
      'mezclar',
      'hornear',
    ],

    nivel: 'basico',

    familias: [
      'cereales',
      'trigo',
      'fibras',
    ],

    usos: [
      'panaderia',
      'desayunos',
      'mezclas',
    ],

    roles: [
      'fibra',
      'textura',
    ],

    combinaCon: [
      'avena',
      'yogur',
      'frutas',
      'miel',
    ],

    sustitutos: [
      'avena',
      'harina_integral',
    ],

    sustitutosEconomicos: [
      'avena',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 0,
      amargo: 2,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 1,
      fresco: 0,
      aromatico: 3,
    },

    sabores: [
      'cereal',
      'terroso',
    ],

    texturas: [
      'fibrosa',
      'granulada',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'pan integral',
      'muffins saludables',
      'mezclas de avena',
    ],
  },


  // ====================================================
  // 🌾 TRIGO INFLADO
  // ====================================================

  {
    id: 'trigo_inflado',

    nombre: 'Trigo inflado',

    aliases: [
      'trigo expandido',
      'puffed wheat',
    ],

    precioUnitario: 90,

    unidad: 'kg',

    precio: {
      minimo: 60,
      promedio: 90,
      maximo: 140,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'cereales_preparados',

    basico: false,

    tags: [
      'desayuno',
      'crujiente',
      'snack',
    ],

    cocinas: [
      'internacional',
    ],

    tecnicas: [
      'sin_coccion',
      'mezclar',
    ],

    nivel: 'basico',

    familias: [
      'cereales',
      'trigo',
      'desayunos',
    ],

    usos: [
      'cereal',
      'barras',
      'postres',
    ],

    roles: [
      'textura',
      'volumen',
    ],

    combinaCon: [
      'chocolate',
      'miel',
      'frutas',
    ],

    sustitutos: [
      'amaranto',
      'granola',
    ],

    sustitutosEconomicos: [
      'avena',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 0,
      amargo: 0,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 0,
      aromatico: 2,
    },

    sabores: [
      'neutro',
      'cereal',
    ],

    texturas: [
      'crujiente',
      'ligera',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'barras energéticas',
      'mezclas de cereal',
    ],
  },

];