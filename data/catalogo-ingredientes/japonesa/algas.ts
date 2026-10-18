import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const ALGAS: IngredienteCatalogo[] = [

  // ====================================================
  // 🌿 ALGA NORI
  // ====================================================

  {
    id: 'alga_nori',

    nombre: 'Alga nori',

    aliases: [
      'nori',
      'alga sushi',
      'alga para sushi',
      'nori seaweed',
    ],

    precioUnitario: 500,

    unidad: 'kg',

    precio: {
      minimo: 300,
      promedio: 500,
      maximo: 800,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'algas',

    basico: false,

    tags: [
      'japones',
      'umami',
      'marino',
    ],

    cocinas: [
      'japonesa',
      'asiatica',
    ],

    tecnicas: [
      'armar',
      'tostar',
    ],

    nivel: 'intermedio',

    familias: [
      'algas',
      'ingredientes_marinos',
      'asiaticos',
    ],

    usos: [
      'sushi',
      'terminados',
      'bowls',
    ],

    roles: [
      'umami',
      'aroma',
      'textura',
    ],

    combinaCon: [
      'arroz',
      'pescado',
      'salsa_soya',
    ],

    sustitutos: [],

    sustitutosEconomicos: [
      'pepino',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 4,
      amargo: 1,
      umami: 9,
      picante: 0,

      ahumado: 2,
      graso: 0,
      fresco: 3,
      aromatico: 7,
    },

    sabores: [
      'marino',
      'umami',
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
      'sushi',
      'onigiri',
      'bowls japoneses',
    ],
  },

];