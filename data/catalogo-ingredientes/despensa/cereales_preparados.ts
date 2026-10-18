import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const CEREALES_PREPARADOS: IngredienteCatalogo[] = [

  // ====================================================
  // 🥞 MEZCLA PARA HOT CAKES
  // ====================================================

  {
    id: 'mezcla_hotcakes',

    nombre: 'Mezcla para hot cakes',

    aliases: [
      'harina hot cakes',
      'harina para hot cakes',
      'preparado hotcakes',
      'mezcla para hotcakes',
      'pancake mix',
    ],

    precioUnitario: 80,

    unidad: 'kg',

    precio: {
      minimo: 50,
      promedio: 80,
      maximo: 130,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'preparados',

    basico: false,

    tags: [
      'desayuno',
      'rapido',
      'practico',
    ],

    cocinas: [
      'americana',
      'internacional',
    ],

    tecnicas: [
      'mezclar',
      'cocinar_plancha',
    ],

    nivel: 'basico',

    familias: [
      'harinas',
      'cereales',
      'preparados',
      'desayunos',
    ],

    usos: [
      'desayunos',
      'postres',
    ],

    roles: [
      'rapidez',
      'estructura',
    ],

    combinaCon: [
      'leche',
      'huevo',
      'frutas',
      'miel',
    ],

    sustitutos: [
      'harina_trigo',
    ],

    sustitutosEconomicos: [
      'avena',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 4,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 2,
      fresco: 0,
      aromatico: 3,
    },

    sabores: [
      'dulce',
      'vainilla',
    ],

    texturas: [
      'esponjosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'hot cakes',
      'waffles',
      'postres rápidos',
    ],
  },


  // ====================================================
  // 🥣 GRANOLA
  // ====================================================

  {
    id: 'granola',

    nombre: 'Granola',

    aliases: [
      'granola casera',
      'mezcla de avena',
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

    subcategoria: 'cereales_preparados',

    basico: false,

    tags: [
      'desayuno',
      'lista_para_comer',
      'snack',
    ],

    cocinas: [
      'internacional',
    ],

    tecnicas: [
      'hornear',
      'mezclar',
    ],

    nivel: 'basico',

    familias: [
      'cereales',
      'snacks',
      'desayunos',
    ],

    usos: [
      'desayuno',
      'botana',
      'postre',
    ],

    roles: [
      'textura',
      'energia',
    ],

    combinaCon: [
      'yogur',
      'frutas',
      'leche',
    ],

    sustitutos: [
      'avena',
      'amaranto',
    ],

    sustitutosEconomicos: [
      'avena',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 6,
      acido: 1,
      salado: 1,
      amargo: 1,
      umami: 1,
      picante: 0,

      ahumado: 1,
      graso: 3,
      fresco: 1,
      aromatico: 5,
    },

    sabores: [
      'dulce',
      'nuez',
    ],

    texturas: [
      'crujiente',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'parfait',
      'desayuno con yogur',
      'barras caseras',
    ],
  },


  // ====================================================
  // 🌽 CEREAL DE MAÍZ
  // ====================================================

  {
    id: 'cereal_maiz',

    nombre: 'Cereal de maíz',

    aliases: [
      'hojuelas de maiz',
      'hojuelas de maíz',
      'corn flakes',
      'cereal de maiz',
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

    subcategoria: 'cereales_preparados',

    basico: false,

    tags: [
      'desayuno',
      'rapido',
      'crujiente',
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
      'desayunos',
      'maiz',
    ],

    usos: [
      'desayuno',
      'postre',
      'botana',
    ],

    roles: [
      'textura',
      'rapidez',
      'volumen',
    ],

    combinaCon: [
      'leche',
      'yogur',
      'frutas',
      'chocolate',
    ],

    sustitutos: [
      'granola',
      'avena',
    ],

    sustitutosEconomicos: [
      'avena',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 5,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 1,
      picante: 0,

      ahumado: 1,
      graso: 1,
      fresco: 0,
      aromatico: 3,
    },

    sabores: [
      'dulce',
      'maiz_tostado',
    ],

    texturas: [
      'crujiente',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'cereal con leche',
      'barras caseras',
      'cubiertas crujientes',
    ],
  },

];