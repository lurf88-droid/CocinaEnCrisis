import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const HIERBAS_SECAS: IngredienteCatalogo[] = [

  // ====================================================
  // 🌿 ROMERO
  // ====================================================

  {
    id: 'romero',

    nombre: 'Romero',

    aliases: [
      'romero',
      'romero seco',
      'rosemary',
    ],

    precioUnitario: 350,

    unidad: 'kg',

    precio: {
      minimo: 250,
      promedio: 350,
      maximo: 600,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'condimentos',

    subcategoria: 'hierbas_secas',

    basico: false,

    tags: [
      'aromatico',
      'intenso',
      'mediterraneo',
      'herbal',
    ],

    cocinas: [
      'italiana',
      'española',
      'mediterranea',
    ],

    tecnicas: [
      'asar',
      'infusionar',
      'sazonar',
    ],

    nivel: 'intermedio',

    familias: [
      'hierbas',
      'aromaticos',
    ],

    usos: [
      'carnes',
      'papas',
      'pan',
    ],

    roles: [
      'aroma',
      'profundidad',
    ],

    combinaCon: [
      'pollo',
      'carne',
      'papa',
      'ajo',
    ],

    sustitutos: [
      'tomillo',
    ],

    sustitutosEconomicos: [
      'oregano_seco',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 0,
      amargo: 2,
      umami: 1,
      picante: 0,

      ahumado: 1,
      graso: 0,
      fresco: 4,
      aromatico: 10,
    },

    sabores: [
      'herbal',
      'pino',
      'resinoso',
    ],

    texturas: [
      'hoja_seca',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'pollo al romero',
      'papas al horno',
      'pan artesanal',
    ],
  },


  // ====================================================
  // 🌿 ALBAHACA SECA
  // ====================================================

  {
    id: 'albahaca_seca',

    nombre: 'Albahaca seca',

    aliases: [
      'albahaca',
      'albahaca seca',
      'basil',
      'basil seco',
      'dried basil',
    ],

    precioUnitario: 300,

    unidad: 'kg',

    precio: {
      minimo: 220,
      promedio: 300,
      maximo: 500,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'condimentos',

    subcategoria: 'hierbas_secas',

    basico: false,

    tags: [
      'aromatico',
      'italiano',
      'herbal',
      'mediterraneo',
    ],

    cocinas: [
      'italiana',
      'mediterranea',
      'internacional',
    ],

    tecnicas: [
      'sazonar',
      'infusionar',
    ],

    nivel: 'basico',

    familias: [
      'hierbas',
      'aromaticos',
    ],

    usos: [
      'pasta',
      'pizza',
      'salsas',
      'ensaladas',
    ],

    roles: [
      'aroma',
      'identidad',
      'frescura',
    ],

    combinaCon: [
      'tomate',
      'queso',
      'aceite oliva',
      'ajo',
    ],

    sustitutos: [
      'oregano_seco',
      'tomillo',
    ],

    sustitutosEconomicos: [
      'oregano_seco',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 0,
      amargo: 1,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 6,
      aromatico: 10,
    },

    sabores: [
      'herbal',
      'ligeramente_dulce',
    ],

    texturas: [
      'hoja_seca',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'pasta italiana',
      'pizza margarita',
      'salsa de tomate',
    ],
  },

];