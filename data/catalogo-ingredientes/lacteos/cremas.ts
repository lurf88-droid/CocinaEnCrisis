import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const CREMAS: IngredienteCatalogo[] = [

  // ====================================================
  // 🥛 CREMA
  // ====================================================

  {
    id: 'crema',

    nombre: 'Crema',

    aliases: [
      'crema',
      'crema acida',
      'crema ácida',
      'crema agria',
      'crema_agria',
      'crema_acida',
      'sour cream',
      'crema agria mexicana',
    ],

    precioUnitario: 120,

    unidad: 'kg',

    densidadGPorMl: 1,

    precio: {
      minimo: 80,
      promedio: 120,
      maximo: 220,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'cremas_fermentadas',

    basico: true,

    tags: [
      'cremosa',
      'acida',
      'fresca',
      'versatil',
    ],

    cocinas: [
      'mexicana',
      'americana',
      'europea',
      'internacional',
    ],

    tecnicas: [
      'salsa',
      'mezclar',
      'untar',
      'reposteria',
    ],

    nivel: 'basico',

    familias: [
      'cremas',
      'lacteos',
      'fermentados',
    ],

    usos: [
      'tacos',
      'salsas',
      'papas',
      'burritos',
      'postres',
    ],

    roles: [
      'cremosidad',
      'acidez',
      'equilibrio',
      'salsa',
    ],

    combinaCon: [
      'papas',
      'chile',
      'queso',
      'verduras',
      'pollo',
      'carne',
    ],

    sustitutos: [
      'yogurt griego',
      'crema fresca',
      'crème fraiche',
    ],

    sustitutosEconomicos: [
      'yogurt natural',
      'leche evaporada',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 6,
      salado: 1,
      amargo: 0,
      umami: 3,
      picante: 0,

      ahumado: 0,
      graso: 6,
      fresco: 7,
      aromatico: 2,
    },

    sabores: [
      'cremoso',
      'acido',
      'fresco',
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
      'tacos con crema',
      'papa con crema agria',
      'salsa ranch',
      'burritos',
      'cheesecake',
    ],
  },

];