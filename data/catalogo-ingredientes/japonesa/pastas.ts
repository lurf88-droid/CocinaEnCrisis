import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const FERMENTADOS_PASTAS: IngredienteCatalogo[] = [

  // ====================================================
  // 🍜 PASTA MISO
  // ====================================================

  {
    id: 'miso',

    nombre: 'Pasta miso',

    aliases: [
      'miso',
      'pasta miso',
      'pasta de miso',
      'pasta de soya fermentada',
      'miso paste',
    ],

    precioUnitario: 220,

    unidad: 'kg',

    precio: {
      minimo: 150,
      promedio: 220,
      maximo: 400,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'fermentados',

    basico: false,

    tags: [
      'fermentado',
      'umami',
      'japones',
    ],

    cocinas: [
      'japonesa',
      'asiatica',
    ],

    tecnicas: [
      'disolver',
      'sazonar',
      'marinar',
      'preparar_sopa',
    ],

    nivel: 'intermedio',

    familias: [
      'fermentados',
      'soya',
      'condimentos',
      'asiaticos',
    ],

    usos: [
      'sopas',
      'aderezos',
      'marinados',
      'salsas',
    ],

    roles: [
      'umami',
      'profundidad',
      'salinidad',
    ],

    combinaCon: [
      'alga_nori',
      'tofu',
      'vegetales',
      'salsa_soya',
    ],

    sustitutos: [
      'salsa_soya',
    ],

    sustitutosEconomicos: [
      'salsa_soya',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 1,
      salado: 8,
      amargo: 1,
      umami: 10,
      picante: 0,

      ahumado: 1,
      graso: 2,
      fresco: 0,
      aromatico: 7,
    },

    sabores: [
      'umami',
      'fermentado',
      'salado',
    ],

    texturas: [
      'pasta',
      'cremosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'sopa miso',
      'salsas',
      'marinados',
    ],
  },

];