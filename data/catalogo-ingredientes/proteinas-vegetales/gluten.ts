import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const GLUTEN: IngredienteCatalogo[] = [

  // ====================================================
  // 🌾 SEITÁN
  // ====================================================

  {
    id: 'seitan',

    nombre: 'Seitán',

    aliases: [
      'seitan',
      'seitán',
      'carne de trigo',
      'wheat gluten',
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

    categoria: 'proteinas_vegetales',

    subcategoria: 'gluten_trigo',

    basico: false,

    tags: [
      'textura_carne',
      'proteina',
      'sustituto',
    ],

    cocinas: [
      'budista',
      'asiatica',
      'internacional',
    ],

    tecnicas: [
      'saltear',
      'guisar',
      'asar',
    ],

    nivel: 'intermedio',

    familias: [
      'trigo',
      'proteinas_vegetales',
    ],

    usos: [
      'tacos',
      'guisos',
      'sandwiches',
    ],

    roles: [
      'proteina',
      'sustituto_carne',
      'textura',
    ],

    combinaCon: [
      'chile',
      'salsas',
      'vegetales',
    ],

    sustitutos: [
      'soya_texturizada',
      'tofu',
    ],

    sustitutosEconomicos: [
      'lenteja',
      'frijol',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 0,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 6,
      picante: 0,

      ahumado: 2,
      graso: 1,
      fresco: 1,
      aromatico: 3,
    },

    sabores: [
      'neutro',
      'umami',
    ],

    texturas: [
      'fibrosa',
      'carnosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'tacos de seitán',
      'estofado vegetal',
      'sandwich vegetal',
    ],
  },

];