import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';

import { SABOR_BASE } from '@/types/saborBase';


export const SALES: IngredienteCatalogo[] = [

  // ====================================================
  // 🧂 SAL
  // ====================================================

  {
    id: 'sal',

    nombre: 'Sal',

    aliases: [
      'sal fina',
      'sal de mesa',
      'sal comun',
      'sal común',
      'salt',
    ],

    precioUnitario: 20,

    unidad: 'kg',

    precio: {
      minimo: 10,
      promedio: 20,
      maximo: 80,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'condimentos',

    subcategoria: 'sales',

    basico: true,

    tags: [
      'esencial',
      'sazonador',
      'basico',
    ],

    cocinas: [
      'mexicana',
      'internacional',
    ],

    tecnicas: [
      'sazonar',
      'curar',
      'conservar',
    ],

    nivel: 'basico',

    familias: [
      'condimentos',
      'sazonadores',
      'sales',
    ],

    usos: [
      'guisos',
      'sopas',
      'carnes',
      'reposteria',
      'panaderia',
    ],

    roles: [
      'sabor',
      'equilibrio',
      'potenciador_umami',
    ],

    combinaCon: [
      'todos_los_ingredientes',
    ],

    sustitutos: [
      'sal_mar',
    ],

    sustitutosEconomicos: [],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 0,
      acido: 0,
      salado: 10,
      amargo: 0,
      umami: 3,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 0,
      aromatico: 0,
    },

    sabores: [
      'salado',
    ],

    texturas: [
      'granulada',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'todas',
    ],
  },


  // ====================================================
  // 🧂 SAL MARINA
  // ====================================================

  {
    id: 'sal_mar',

    nombre: 'Sal marina',

    aliases: [
      'sal marina',
      'sal de mar',
      'sea salt',
    ],

    precioUnitario: 60,

    unidad: 'kg',

    precio: {
      minimo: 40,
      promedio: 60,
      maximo: 120,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'condimentos',

    subcategoria: 'sales',

    basico: false,

    tags: [
      'chef',
      'terminado',
      'mineral',
      'sazonador',
    ],

    cocinas: [
      'internacional',
    ],

    tecnicas: [
      'sazonar',
      'terminar',
    ],

    nivel: 'basico',

    familias: [
      'condimentos',
      'sazonadores',
      'sales',
    ],

    usos: [
      'terminados',
      'cocina_general',
    ],

    roles: [
      'sabor',
      'equilibrio',
      'textura',
    ],

    combinaCon: [
      'carnes',
      'ensaladas',
      'vegetales',
    ],

    sustitutos: [
      'sal',
    ],

    sustitutosEconomicos: [
      'sal',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 0,
      acido: 0,
      salado: 10,
      amargo: 0,
      umami: 3,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 1,
      aromatico: 1,
    },

    sabores: [
      'salado',
      'mineral',
    ],

    texturas: [
      'cristalina',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'ensaladas',
      'carnes',
      'terminados',
    ],
  },

];