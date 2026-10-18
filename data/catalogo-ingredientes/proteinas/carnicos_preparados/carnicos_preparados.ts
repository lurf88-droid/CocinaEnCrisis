import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const CARNICOS_PREPARADOS: IngredienteCatalogo[] = [

  // ====================================================
  // 🐖 CHICHARRÓN PRENSADO
  // ====================================================

  {
    id: 'chicharron_prensado',

    nombre: 'Chicharrón prensado',

    aliases: [
      'chicharron prensado',
      'chicharrón prensado',
      'chicharrón prensado mexicano',
      'chicharron prensado mexicano',
      'guisado de chicharrón',
      'guisado de chicharron',
    ],

    precioUnitario: 180,

    unidad: 'kg',

    precio: {
      minimo: 120,
      promedio: 180,
      maximo: 250,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'productos_carnicos_preparados',

    basico: false,

    tags: [
      'mexicano',
      'cerdo',
      'antojitos',
      'tacos',
      'tradicional',
    ],

    cocinas: [
      'mexicana',
      'capitalina',
      'antojitos_mexicanos',
    ],

    tecnicas: [
      'coccion_lenta',
      'prensado',
      'guisar',
    ],

    nivel: 'intermedio',

    familias: [
      'proteinas',
      'cerdo',
      'preparaciones_tradicionales',
    ],

    usos: [
      'tacos_canasta',
      'guisos',
      'quesadillas',
      'tacos',
    ],

    roles: [
      'proteina',
      'umami',
      'sabor_intenso',
      'relleno',
    ],

    combinaCon: [
      'tortilla_maiz',
      'masa_maiz',
      'salsa_verde',
      'cebolla',
    ],

    sustitutos: [
      'chicharron_cerdo',
    ],

    sustitutosEconomicos: [
      'frijol',
      'papa',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 0,
      acido: 0,
      salado: 4,
      amargo: 0,
      umami: 5,
      picante: 1,

      ahumado: 2,
      graso: 5,
      fresco: 0,
      aromatico: 3,
    },

    sabores: [
      'cerdo',
      'intenso',
      'graso',
      'umami',
    ],

    texturas: [
      'suave',
      'fibrosa',
      'jugosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado_en_recipiente_cerrado',

    recetasCompatibles: [
      'tacos-canasta-chicharron',
      'quesadillas-chicharron',
      'tacos',
    ],
  },


  // ====================================================
  // 🐖 CHICHARRÓN DE CERDO
  // ====================================================

  {
    id: 'chicharron_cerdo',

    nombre: 'Chicharrón de cerdo',

    aliases: [
      'chicharrón',
      'chicharron',
      'chicharrón seco',
      'chicharron seco',
      'chicharrón de cerdo',
      'chicharron de cerdo',
    ],

    precioUnitario: 220,

    unidad: 'kg',

    precio: {
      minimo: 170,
      promedio: 220,
      maximo: 280,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'derivados_cerdo',

    basico: false,

    tags: [
      'cerdo',
      'chicharron',
      'mexicano',
      'tradicional',
      'derivado_cerdo',
    ],

    cocinas: [
      'mexicana',
      'chiapaneca',
    ],

    tecnicas: [
      'freir',
      'triturar',
      'moler',
      'guisar',
    ],

    nivel: 'basico',

    familias: [
      'proteinas',
      'cerdo',
      'derivados_cerdo',
    ],

    usos: [
      'tamales',
      'guisos',
      'tacos',
      'salsas',
      'rellenos',
    ],

    roles: [
      'proteina',
      'grasa',
      'textura',
      'sabor',
      'umami',
    ],

    combinaCon: [
      'masa_maiz',
      'jitomate',
      'tomate_verde',
      'chile_simojovel',
      'cebolla_blanca',
      'frijol_bayo',
    ],

    sustitutos: [
      'chicharron_prensado',
    ],

    sustitutosEconomicos: [
      'chicharron_prensado',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 0,
      acido: 0,
      salado: 6,
      amargo: 0,
      umami: 7,
      picante: 0,

      ahumado: 1,
      graso: 8,
      fresco: 0,
      aromatico: 3,
    },

    sabores: [
      'salado',
      'carnico',
      'umami',
      'graso',
    ],

    texturas: [
      'crujiente',
      'seca',
      'quebradiza',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_seco_en_recipiente_hermetico',

    recetasCompatibles: [
      'tamal-bola-chiapaneco',
    ],
  },


  // ====================================================
  // 🥩 CARNE SECA DE RES
  // ====================================================

 

  // ====================================================
  // 🐖 MIGAJAS DE CHICHARRÓN
  // ====================================================

  {
    id: 'migajas_chicharron',

    nombre: 'Migajas de chicharrón',

    aliases: [
      'migajas',
      'migajas de chicharrón',
      'migajas de chicharron',
      'chales',
      'achicalada',
      'zurrapa',
      'tierritas',
      'gorduritas',
    ],

    precioUnitario: 240,

    unidad: 'kg',

    pesoPorUnidad: 1000,

    precio: {
      minimo: 200,
      promedio: 240,
      maximo: 280,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'carnes',

    subcategoria: 'derivados de cerdo',

    basico: false,

    tags: [
      'frito',
      'crujiente',
      'aprovechamiento',
      'antojito',
      'callejero',
    ],

    cocinas: [
      'mexicana',
      'queretana',
      'bajio',
    ],

    tecnicas: [
      'freir',
      'rellenar',
      'picar',
    ],

    nivel: 'basico',

    familias: [
      'carnes de cerdo',
      'chicharrones',
      'frituras',
    ],

    usos: [
      'relleno de gorditas',
      'botana',
      'guiso en salsa',
      'topping de antojitos',
    ],

    roles: [
      'relleno principal',
      'aporte de sabor umami y salado',
      'aporte de textura crujiente',
    ],

    combinaCon: [
      'masa de maíz',
      'salsa roja',
      'queso fresco',
      'lechuga',
      'cebolla',
    ],

    sustitutos: [
      'chicharron_prensado',
      'chicharron_cerdo',
    ],

    sustitutosEconomicos: [
      'chicharron_cerdo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 0,
      acido: 0,
      salado: 6,
      amargo: 0,
      umami: 7,
      picante: 0,

      ahumado: 2,
      graso: 8,
      fresco: 0,
      aromatico: 4,
    },

    sabores: [
      'salado intenso',
      'sabor a cerdo frito',
      'notas tostadas',
    ],

    texturas: [
      'crujiente',
      'quebradizo',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'Se conserva mejor en un recipiente hermético a temperatura ambiente por 2-3 días; refrigerado dura hasta una semana, aunque pierde algo de textura crujiente',

    recetasCompatibles: [
      'gorditas-migajas-queretaro',
      'tacos de chicharrón',
      'chicharrón en salsa roja',
      'chicharrón en salsa verde',
    ],
  },


];