import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const DERIVADOS_SOYA: IngredienteCatalogo[] = [

  // ====================================================
  // 🌱 SOYA TEXTURIZADA
  // ====================================================

  {
    id: 'soya_texturizada',

    nombre: 'Soya texturizada',

    aliases: [
      'soya texturizada',
      'proteina de soya',
      'carne de soya',
      'TVP',
    ],

    precioUnitario: 90,

    unidad: 'kg',

    precio: {
      minimo: 60,
      promedio: 90,
      maximo: 150,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas_vegetales',

    subcategoria: 'derivados_soya',

    basico: true,

    tags: [
      'economico',
      'alta_proteina',
      'sustituto_carne',
      'crisis',
    ],

    cocinas: [
      'mexicana',
      'internacional',
    ],

    tecnicas: [
      'hidratar',
      'guisar',
      'sazonar',
    ],

    nivel: 'basico',

    familias: [
      'soya',
      'proteinas_vegetales',
    ],

    usos: [
      'tacos',
      'guisos',
      'picadillo',
      'bolones',
    ],

    roles: [
      'proteina',
      'sustituto',
      'volumen',
    ],

    combinaCon: [
      'tomate',
      'chile',
      'cebolla',
      'especias',
    ],

    sustitutos: [
      'carne molida',
      'lenteja',
    ],

    sustitutosEconomicos: [
      'frijol',
      'huevo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 1,
      amargo: 1,
      umami: 7,
      picante: 0,

      ahumado: 2,
      graso: 1,
      fresco: 1,
      aromatico: 4,
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
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'tacos de soya',
      'picadillo vegetal',
      'bolognesa vegetal',
    ],
  },


  // ====================================================
  // 🌱 TOFU
  // ====================================================

  {
    id: 'tofu',

    nombre: 'Tofu',

    aliases: [
      'tofu',
      'queso de soya',
      'tofu firme',
      'soy tofu',
    ],

    precioUnitario: 120,

    unidad: 'kg',

    precio: {
      minimo: 80,
      promedio: 120,
      maximo: 220,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas_vegetales',

    subcategoria: 'derivados_soya',

    basico: false,

    tags: [
      'proteina',
      'asiatico',
      'versatil',
      'vegetariano',
    ],

    cocinas: [
      'japonesa',
      'china',
      'asiatica',
      'internacional',
    ],

    tecnicas: [
      'saltear',
      'freir',
      'hornear',
      'marinar',
    ],

    nivel: 'basico',

    familias: [
      'soya',
      'proteinas_vegetales',
    ],

    usos: [
      'bowls',
      'sopas',
      'stir_fry',
      'tacos',
      'ensaladas',
    ],

    roles: [
      'proteina',
      'sustituto_carne',
      'textura',
    ],

    combinaCon: [
      'salsa_soya',
      'verduras',
      'arroz',
      'jengibre',
      'ajo',
    ],

    sustitutos: [
      'tempeh',
      'soya_texturizada',
      'pollo',
    ],

    sustitutosEconomicos: [
      'huevo',
      'frijoles',
      'lentejas',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 0,
      amargo: 1,
      umami: 5,
      picante: 0,

      ahumado: 1,
      graso: 3,
      fresco: 4,
      aromatico: 2,
    },

    sabores: [
      'neutro',
      'suave',
    ],

    texturas: [
      'blanda',
      'compacta',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'tofu salteado',
      'tofu con verduras',
      'sopa miso',
      'bowl vegetariano',
    ],
  },


  // ====================================================
  // 🌱 TEMPEH
  // ====================================================

  {
    id: 'tempeh',

    nombre: 'Tempeh',

    aliases: [
      'tempeh',
      'témpé',
      'tempe',
    ],

    precioUnitario: 180,

    unidad: 'kg',

    precio: {
      minimo: 120,
      promedio: 180,
      maximo: 300,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas_vegetales',

    subcategoria: 'fermentados_soya',

    basico: false,

    tags: [
      'fermentado',
      'proteina',
      'asiatico',
    ],

    cocinas: [
      'indonesia',
      'asiatica',
      'internacional',
    ],

    tecnicas: [
      'freir',
      'saltear',
      'marinar',
    ],

    nivel: 'intermedio',

    familias: [
      'soya',
      'fermentados',
      'proteinas_vegetales',
    ],

    usos: [
      'bowls',
      'sandwiches',
      'guisos',
    ],

    roles: [
      'proteina',
      'umami',
      'textura',
    ],

    combinaCon: [
      'vegetales',
      'arroz',
      'salsas',
    ],

    sustitutos: [
      'tofu',
      'soya_texturizada',
    ],

    sustitutosEconomicos: [
      'lentejas',
      'frijoles',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 1,
      salado: 0,
      amargo: 1,
      umami: 7,
      picante: 0,

      ahumado: 2,
      graso: 3,
      fresco: 2,
      aromatico: 4,
    },

    sabores: [
      'nuez',
      'fermentado',
      'umami',
    ],

    texturas: [
      'firme',
      'carnosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'tempeh salteado',
      'bowl de tempeh',
      'tacos vegetales',
    ],
  },


  // ====================================================
  // 🌱 EDAMAME
  // ====================================================

  {
    id: 'edamame',

    nombre: 'Edamame',

    aliases: [
      'edamame',
      'soya verde',
      'vainas de soya',
    ],

    precioUnitario: 140,

    unidad: 'kg',

    precio: {
      minimo: 100,
      promedio: 140,
      maximo: 220,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas_vegetales',

    subcategoria: 'soya',

    basico: false,

    tags: [
      'japones',
      'fresco',
      'proteina',
    ],

    cocinas: [
      'japonesa',
      'asiatica',
    ],

    tecnicas: [
      'hervir',
      'saltear',
    ],

    nivel: 'basico',

    familias: [
      'soya',
      'proteinas_vegetales',
    ],

    usos: [
      'botanas',
      'ensaladas',
      'bowls',
    ],

    roles: [
      'proteina',
      'fibra',
    ],

    combinaCon: [
      'arroz',
      'salsa_soya',
      'verduras',
    ],

    sustitutos: [
      'chicharo',
      'garbanzo',
    ],

    sustitutosEconomicos: [
      'frijol',
      'lenteja',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 3,
      acido: 0,
      salado: 0,
      amargo: 0,
      umami: 5,
      picante: 0,

      ahumado: 0,
      graso: 2,
      fresco: 6,
      aromatico: 2,
    },

    sabores: [
      'dulce',
      'fresco',
    ],

    texturas: [
      'firme',
      'tierna',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'congelado_refrigerado',

    recetasCompatibles: [
      'bowl asiatico',
      'ensalada de edamame',
      'arroz con verduras',
    ],
  },

];