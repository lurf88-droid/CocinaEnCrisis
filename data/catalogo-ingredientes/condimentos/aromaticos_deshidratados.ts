import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const AROMATICOS_DESHIDRATADOS: IngredienteCatalogo[] = [

  // ====================================================
  // 🧄 AJO EN POLVO
  // ====================================================

  {
    id: 'ajo_polvo',

    nombre: 'Ajo en polvo',

    aliases: [
      'ajo molido',
      'ajo deshidratado',
      'garlic powder',
    ],

    precioUnitario: 180,

    unidad: 'kg',

    precio: {
      minimo: 120,
      promedio: 180,
      maximo: 280,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'condimentos',

    subcategoria: 'especias_individuales',

    basico: true,

    tags: [
      'aromatico',
      'esencial',
      'umami',
      'cocina_diaria',
    ],

    cocinas: [
      'mexicana',
      'italiana',
      'mediterranea',
      'internacional',
    ],

    tecnicas: [
      'sazonar',
      'mezclar',
      'adobar',
    ],

    nivel: 'basico',

    familias: [
      'especias',
      'aromaticos',
      'ajo',
    ],

    usos: [
      'carnes',
      'salsas',
      'vegetales',
      'pastas',
    ],

    roles: [
      'aroma',
      'profundidad',
      'umami',
    ],

    combinaCon: [
      'pollo',
      'carne',
      'tomate',
      'queso',
      'vegetales',
    ],

    sustitutos: [
      'ajo fresco',
    ],

    sustitutosEconomicos: [
      'ajo fresco',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 1,
      amargo: 1,
      umami: 5,
      picante: 1,

      ahumado: 1,
      graso: 0,
      fresco: 2,
      aromatico: 10,
    },

    sabores: [
      'ajo',
      'terroso',
      'profundo',
    ],

    texturas: [
      'polvo_fino',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'adobos',
      'pollo al ajo',
      'pasta al ajo',
      'vegetales sazonados',
    ],
  },


  // ====================================================
  // 🧅 CEBOLLA EN POLVO
  // ====================================================

  {
    id: 'cebolla_polvo',

    nombre: 'Cebolla en polvo',

    aliases: [
      'cebolla deshidratada',
      'onion powder',
    ],

    precioUnitario: 150,

    unidad: 'kg',

    precio: {
      minimo: 100,
      promedio: 150,
      maximo: 250,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'condimentos',

    subcategoria: 'especias_individuales',

    basico: true,

    tags: [
      'aromatico',
      'base',
      'dulzor',
    ],

    cocinas: [
      'mexicana',
      'americana',
      'internacional',
    ],

    tecnicas: [
      'sazonar',
      'mezclar',
    ],

    nivel: 'basico',

    familias: [
      'especias',
      'aromaticos',
      'cebolla',
    ],

    usos: [
      'sopas',
      'salsas',
      'guisos',
      'carnes',
    ],

    roles: [
      'aroma',
      'profundidad',
      'dulzor',
    ],

    combinaCon: [
      'ajo',
      'carne',
      'pollo',
      'tomate',
    ],

    sustitutos: [
      'cebolla fresca',
    ],

    sustitutosEconomicos: [
      'cebolla fresca',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 4,
      acido: 0,
      salado: 0,
      amargo: 1,
      umami: 4,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 2,
      aromatico: 8,
    },

    sabores: [
      'cebolla',
      'dulce',
      'caramelo',
    ],

    texturas: [
      'polvo_fino',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'guisos',
      'sazonadores caseros',
      'sopas',
    ],
  },

];