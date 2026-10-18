import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const FIDEOS: IngredienteCatalogo[] = [

  // ====================================================
  // 🍜 FIDEOS DE ARROZ
  // ====================================================

  {
    id: 'fideos_arroz',

    nombre: 'Fideos de arroz',

    aliases: [
      'fideos de arroz',
      'noodles de arroz',
      'rice noodles',
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

    subcategoria: 'pastas',

    basico: false,

    tags: [
      'asiatico',
      'ligero',
      'rapido',
    ],

    cocinas: [
      'tailandesa',
      'vietnamita',
      'china',
    ],

    tecnicas: [
      'hidratar',
      'saltear',
    ],

    nivel: 'intermedio',

    familias: [
      'pastas',
      'cereales',
      'arroz',
      'fideos',
      'asiaticos',
    ],

    usos: [
      'wok',
      'sopas',
      'ensaladas',
    ],

    roles: [
      'base',
      'textura',
    ],

    combinaCon: [
      'verduras',
      'salsa_soya',
      'pollo',
      'mariscos',
    ],

    sustitutos: [
      'pasta',
      'pasta_spaghetti',
    ],

    sustitutosEconomicos: [
      'pasta_spaghetti',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 0,
      amargo: 0,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 1,
      fresco: 0,
      aromatico: 1,
    },

    sabores: [
      'neutro',
      'arroz',
    ],

    texturas: [
      'elastica',
      'suave',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'pad thai',
      'sopas asiaticas',
      'wok',
    ],
  },

];