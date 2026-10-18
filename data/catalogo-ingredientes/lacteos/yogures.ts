import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const YOGURES: IngredienteCatalogo[] = [

  // ====================================================
  // 🥛 YOGURT BEBIBLE
  // ====================================================

  {
    id: 'yogurt_bebible',

    nombre: 'Yogurt bebible',

    aliases: [
      'yogurt bebible',
      'yogurt para beber',
      'yogurt liquido',
      'yogurt líquido',
    ],

    precioUnitario: 70,

    unidad: 'litro',

    precio: {
      minimo: 50,
      promedio: 70,
      maximo: 120,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'fermentados',

    basico: true,

    tags: [
      'fermentado',
      'desayuno',
      'practico',
    ],

    cocinas: [
      'internacional',
    ],

    tecnicas: [
      'beber',
      'mezclar',
    ],

    nivel: 'basico',

    familias: [
      'yogures',
      'lacteos',
      'fermentados',
    ],

    usos: [
      'desayunos',
      'licuados',
      'colaciones',
    ],

    roles: [
      'fermentado',
      'cremosidad',
      'base',
    ],

    combinaCon: [
      'frutas',
      'avena',
      'miel',
      'semillas',
    ],

    sustitutos: [],

    sustitutosEconomicos: [
      'leche_entera',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 5,
      acido: 3,
      salado: 0,
      amargo: 0,
      umami: 2,
      picante: 0,

      ahumado: 0,
      graso: 2,
      fresco: 6,
      aromatico: 3,
    },

    sabores: [
      'dulce',
      'acido',
      'fresco',
    ],

    texturas: [
      'liquida',
      'cremosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'licuados',
      'parfait',
      'desayunos',
      'batidos',
    ],
  },

];