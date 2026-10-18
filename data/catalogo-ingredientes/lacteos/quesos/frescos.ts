import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const FRESCOS: IngredienteCatalogo[] = [

  // ====================================================
  // 🧀 QUESO CREMA
  // ====================================================

  {
    id: 'queso_crema',

    nombre: 'Queso crema',

    aliases: [
      'queso crema',
      'cream cheese',
      'philadelphia',
    ],

    precioUnitario: 220,

    unidad: 'kg',

    precio: {
      minimo: 160,
      promedio: 220,
      maximo: 350,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_frescos',

    basico: true,

    tags: [
      'cremoso',
      'reposteria',
      'salsas',
      'untable',
      'versatil',
    ],

    cocinas: [
      'americana',
      'mexicana',
      'italiana',
      'internacional',
    ],

    tecnicas: [
      'mezclar',
      'batir',
      'rellenar',
      'incorporar_en_salsa',
      'preparar_reposteria',
    ],

    nivel: 'basico',

    familias: [
      'quesos',
      'lacteos',
      'proteinas_lacteas',
      'quesos_cremosos',
    ],

    usos: [
      'postres',
      'salsas',
      'sandwiches',
      'rellenos',
      'desayunos',
    ],

    roles: [
      'cremosidad',
      'textura',
      'sabor',
      'base',
    ],

    combinaCon: [
      'pan',
      'salmon',
      'frutas',
      'mermeladas',
      'verduras',
      'pasta',
    ],

    sustitutos: [
      'queso_mascarpone',
      'requeson',
    ],

    sustitutosEconomicos: [
      'queso_cottage',
      'queso_panela',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 2,
      salado: 2,
      amargo: 0,
      umami: 5,
      picante: 0,

      ahumado: 0,
      graso: 7,
      fresco: 4,
      aromatico: 2,
    },

    sabores: [
      'cremoso',
      'suave',
      'ligeramente_acido',
    ],

    texturas: [
      'cremosa',
      'untable',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'cheesecake',
      'pasta cremosa',
      'bagel con queso crema',
      'rollos rellenos',
      'betunes',
    ],
  },


  // ====================================================
  // 🧀 QUESO OAXACA
  // ====================================================

  {
    id: 'queso_oaxaca',

    nombre: 'Queso Oaxaca',

    aliases: [
      'queso oaxaca',
      'quesillo',
      'queso de hebra',
    ],

    precioUnitario: 180,

    unidad: 'kg',

    precio: {
      minimo: 140,
      promedio: 180,
      maximo: 250,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_frescos',

    basico: true,

    tags: [
      'mexicano',
      'derretible',
      'proteina',
    ],

    cocinas: [
      'mexicana',
    ],

    tecnicas: [
      'fundir',
      'rellenar',
      'gratinar',
    ],

    nivel: 'basico',

    familias: [
      'quesos',
      'lacteos',
      'lacteos_mexicanos',
      'quesos_mexicanos',
    ],

    usos: [
      'tacos',
      'quesadillas',
      'enchiladas',
      'gratinados',
    ],

    roles: [
      'umami',
      'grasa',
      'textura',
    ],

    combinaCon: [
      'tortilla_maiz',
      'jitomate',
      'chile',
      'pollo',
    ],

    sustitutos: [
      'queso_mozzarella',
      'queso_panela',
    ],

    sustitutosEconomicos: [
      'queso_panela',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 2,
      salado: 4,
      amargo: 0,
      umami: 6,
      picante: 0,

      ahumado: 0,
      graso: 6,
      fresco: 5,
      aromatico: 3,
    },

    sabores: [
      'lacteo',
      'suave',
      'salado',
    ],

    texturas: [
      'elastica',
      'fibrosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'quesadillas',
      'enchiladas',
      'chiles rellenos',
    ],
  },


  // ====================================================
  // 🧀 QUESO MOZZARELLA
  // ====================================================

  {
    id: 'queso_mozzarella',

    nombre: 'Queso mozzarella',

    aliases: [
      'mozzarella',
      'queso mozzarella',
      'queso mozarella',
    ],

    precioUnitario: 220,

    unidad: 'kg',

    precio: {
      minimo: 160,
      promedio: 220,
      maximo: 320,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_frescos',

    basico: true,

    tags: [
      'italiano',
      'derretible',
      'pizza',
    ],

    cocinas: [
      'italiana',
      'internacional',
    ],

    tecnicas: [
      'fundir',
      'gratinar',
      'hornear',
    ],

    nivel: 'basico',

    familias: [
      'quesos',
      'lacteos',
      'quesos_italianos',
      'quesos_frescos',
    ],

    usos: [
      'pizzas',
      'pasta',
      'gratinar',
      'ensaladas',
    ],

    roles: [
      'umami',
      'textura',
      'grasa',
    ],

    combinaCon: [
      'tomate',
      'albahaca',
      'pasta',
      'harina_trigo',
    ],

    sustitutos: [
      'queso_oaxaca',
    ],

    sustitutosEconomicos: [
      'queso_oaxaca',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 2,
      salado: 3,
      amargo: 0,
      umami: 6,
      picante: 0,

      ahumado: 0,
      graso: 7,
      fresco: 6,
      aromatico: 2,
    },

    sabores: [
      'lacteo',
      'suave',
      'ligero',
    ],

    texturas: [
      'elastica',
      'cremosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'pizza',
      'lasaña',
      'pasta cremosa',
      'ensaladas',
    ],
  },


  // ====================================================
  // 🧀 QUESO FRESCO
  // ====================================================

  {
    id: 'queso_fresco',

    nombre: 'Queso fresco',

    aliases: [
      'queso',
      'queso fresco',
      'queso blanco',
    ],

    precioUnitario: 120,

    unidad: 'kg',

    precio: {
      minimo: 90,
      promedio: 120,
      maximo: 180,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_frescos',

    basico: true,

    tags: [
      'mexicano',
      'fresco',
      'economico',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
    ],

    tecnicas: [
      'desmoronar',
      'rellenar',
      'terminar',
    ],

    nivel: 'basico',

    familias: [
      'quesos',
      'lacteos',
      'lacteos_mexicanos',
      'quesos_mexicanos',
      'quesos_frescos',
    ],

    usos: [
      'tacos',
      'ensaladas',
      'enchiladas',
      'antojitos',
    ],

    roles: [
      'contraste',
      'umami',
      'textura',
    ],

    combinaCon: [
      'tortilla_maiz',
      'frijol',
      'nopal',
      'jitomate',
    ],

    sustitutos: [
      'queso_panela',
      'requeson',
    ],

    sustitutosEconomicos: [
      'requeson',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 3,
      salado: 3,
      amargo: 0,
      umami: 5,
      picante: 0,

      ahumado: 0,
      graso: 4,
      fresco: 8,
      aromatico: 2,
    },

    sabores: [
      'lacteo',
      'fresco',
      'ligeramente_acido',
    ],

    texturas: [
      'desmenuzable',
      'suave',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'quesadillas',
      'tacos',
      'enchiladas',
      'ensaladas',
    ],
  },


  // ====================================================
  // 🧀 QUESO PANELA
  // ====================================================

  {
    id: 'queso_panela',

    nombre: 'Queso panela',

    aliases: [
      'queso panela',
      'queso fresco panela',
    ],

    precioUnitario: 180,

    unidad: 'kg',

    precio: {
      minimo: 120,
      promedio: 180,
      maximo: 260,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_frescos',

    basico: true,

    tags: [
      'lacteo',
      'fresco',
      'mexicano',
      'proteina',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
    ],

    tecnicas: [
      'asar',
      'freir',
      'desmoronar',
      'rebanar',
    ],

    nivel: 'basico',

    familias: [
      'quesos',
      'lacteos',
      'lacteos_mexicanos',
      'quesos_mexicanos',
      'quesos_frescos',
    ],

    usos: [
      'tacos',
      'ensaladas',
      'guisados',
      'quesadillas',
    ],

    roles: [
      'proteina',
      'cremosidad',
      'contraste',
    ],

    combinaCon: [
      'frijol',
      'tomate',
      'cilantro',
      'chile',
      'aguacate',
    ],

    sustitutos: [
      'queso_oaxaca',
      'queso_fresco',
      'requeson',
    ],

    sustitutosEconomicos: [
      'requeson',
      'huevo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 2,
      salado: 3,
      amargo: 0,
      umami: 5,
      picante: 0,

      ahumado: 0,
      graso: 4,
      fresco: 8,
      aromatico: 2,
    },

    sabores: [
      'lacteo',
      'fresco',
      'suave',
    ],

    texturas: [
      'compacta',
      'blanda',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'quesadillas',
      'tacos',
      'ensalada mexicana',
      'frijoles con queso',
    ],
  },


  // ====================================================
  // 🧀 REQUESÓN
  // ====================================================

  {
    id: 'requeson',

    nombre: 'Requesón',

    aliases: [
      'requeson',
      'requesón',
      'queso requeson',
      'queso requesón',
      'ricotta mexicana',
    ],

    precioUnitario: 160,

    unidad: 'kg',

    precio: {
      minimo: 120,
      promedio: 160,
      maximo: 250,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_frescos',

    basico: true,

    tags: [
      'economico',
      'fresco',
      'tradicional',
      'relleno',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
    ],

    tecnicas: [
      'rellenar',
      'mezclar',
      'asar',
      'desmoronar',
    ],

    nivel: 'basico',

    familias: [
      'quesos',
      'lacteos',
      'proteinas_lacteas',
      'quesos_frescos',
      'lacteos_mexicanos',
    ],

    usos: [
      'quesadillas',
      'tacos',
      'rellenos',
      'desayunos',
      'ensaladas',
    ],

    roles: [
      'proteina',
      'textura',
      'relleno',
      'economia',
    ],

    combinaCon: [
      'tortilla_maiz',
      'epazote',
      'verduras',
      'chile',
      'frijoles',
      'pan',
    ],

    sustitutos: [
      'queso_cottage',
      'queso_panela',
      'queso_crema',
    ],

    sustitutosEconomicos: [
      'huevo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 2,
      salado: 2,
      amargo: 0,
      umami: 4,
      picante: 0,

      ahumado: 0,
      graso: 3,
      fresco: 6,
      aromatico: 2,
    },

    sabores: [
      'suave',
      'fresco',
      'ligeramente_acido',
    ],

    texturas: [
      'granulada',
      'cremosa',
      'suave',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'quesadillas de requeson',
      'tacos de requeson',
      'requeson con verduras',
      'relleno de pasta',
      'antojitos mexicanos',
    ],
  },


  // ====================================================
  // 🧀 QUESO COTTAGE
  // ====================================================

  {
    id: 'queso_cottage',

    nombre: 'Queso Cottage',

    aliases: [
      'cottage',
      'queso cottage',
      'cottage cheese',
    ],

    precioUnitario: 180,

    unidad: 'kg',

    precio: {
      minimo: 130,
      promedio: 180,
      maximo: 280,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_frescos',

    basico: true,

    tags: [
      'proteina',
      'ligero',
      'fresco',
      'saludable',
      'economico',
    ],

    cocinas: [
      'americana',
      'europea',
      'internacional',
    ],

    tecnicas: [
      'mezclar',
      'servir_frio',
      'rellenar',
      'hornear',
    ],

    nivel: 'basico',

    familias: [
      'quesos',
      'lacteos',
      'proteinas_lacteas',
      'quesos_frescos',
    ],

    usos: [
      'desayunos',
      'ensaladas',
      'rellenos',
      'licuados',
      'botanas',
    ],

    roles: [
      'proteina',
      'textura',
      'cremosidad',
      'saciedad',
    ],

    combinaCon: [
      'frutas',
      'miel',
      'verduras',
      'pan',
      'huevo',
      'semillas',
    ],

    sustitutos: [
      'requeson',
      'queso_crema',
    ],

    sustitutosEconomicos: [
      'huevo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 2,
      salado: 2,
      amargo: 0,
      umami: 4,
      picante: 0,

      ahumado: 0,
      graso: 2,
      fresco: 7,
      aromatico: 1,
    },

    sabores: [
      'suave',
      'fresco',
      'ligeramente_acido',
    ],

    texturas: [
      'granulada',
      'cremosa',
      'humeda',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'ensalada con cottage',
      'cottage con fruta',
      'tostadas con cottage',
      'rellenos de verduras',
      'desayunos proteicos',
    ],
  },


  // ====================================================
  // 🧀 BURRATA
  // ====================================================

  {
    id: 'queso_burrata',

    nombre: 'Queso Burrata',

    aliases: [
      'burrata',
      'queso burrata',
    ],

    precioUnitario: 650,

    unidad: 'kg',

    precio: {
      minimo: 450,
      promedio: 650,
      maximo: 1000,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_frescos',

    basico: false,

    tags: [
      'italiano',
      'gourmet',
      'cremoso',
      'fresco',
    ],

    cocinas: [
      'italiana',
      'mediterranea',
    ],

    tecnicas: [
      'servir_fresco',
      'rebanar',
      'preparar_ensalada',
    ],

    nivel: 'intermedio',

    familias: [
      'quesos',
      'lacteos',
      'quesos_italianos',
      'quesos_frescos',
      'quesos_cremosos',
    ],

    usos: [
      'ensaladas',
      'pizzas',
      'entradas',
      'pasta',
    ],

    roles: [
      'cremosidad',
      'textura',
      'experiencia',
    ],

    combinaCon: [
      'tomate',
      'albahaca',
      'aceite_oliva',
      'pan',
    ],

    sustitutos: [
      'queso_mozzarella',
      'queso_fresco',
    ],

    sustitutosEconomicos: [
      'queso_oaxaca',
      'queso_fresco',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 2,
      salado: 2,
      amargo: 0,
      umami: 6,
      picante: 0,

      ahumado: 0,
      graso: 8,
      fresco: 8,
      aromatico: 3,
    },

    sabores: [
      'cremoso',
      'fresco',
      'lacteo',
    ],

    texturas: [
      'exterior_firme',
      'interior_cremoso',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'ensalada caprese',
      'pizza burrata',
      'pan con burrata',
      'pasta fresca',
    ],
  },


  // ====================================================
  // 🧀 QUESO AÑEJO
  // ====================================================

  {
    id: 'queso_anejo',

    nombre: 'Queso añejo',

    aliases: [
      'queso añejo',
      'queso anejo',
      'queso añejado',
      'queso madurado mexicano',
    ],

    precioUnitario: 230,

    unidad: 'kg',

    precio: {
      minimo: 170,
      promedio: 230,
      maximo: 320,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'lacteos',

    subcategoria: 'quesos_anejos',

    basico: false,

    tags: [
      'queso',
      'lacteo',
      'anejo',
      'madurado',
      'mexicano',
      'salado',
      'tradicional',
    ],

    cocinas: [
      'mexicana',
      'chiapaneca',
    ],

    tecnicas: [
      'rallar',
      'desmoronar',
      'gratinar',
      'madurar',
    ],

    nivel: 'basico',

    familias: [
      'lacteos',
      'quesos',
      'quesos_madurados',
      'quesos_mexicanos',
      'ingredientes_regionales',
    ],

    usos: [
      'pan_compuesto',
      'antojitos',
      'tamales',
      'enchiladas',
      'garnachas',
      'acompañamientos',
    ],

    roles: [
      'umami',
      'salinidad',
      'grasa',
      'contraste',
      'terminacion',
    ],

    combinaCon: [
      'pan_frances_comiteco',
      'frijol_colorado',
      'carne_cerdo',
      'chile_ancho',
      'jitomate',
    ],

    sustitutos: [
      'queso_fresco',
    ],

    sustitutosEconomicos: [
      'queso_fresco',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 0,
      acido: 2,
      salado: 8,
      amargo: 1,
      umami: 7,
      picante: 0,

      ahumado: 0,
      graso: 6,
      fresco: 0,
      aromatico: 6,
    },

    sabores: [
      'salado',
      'lacteo',
      'intenso',
      'madurado',
      'umami',
    ],

    texturas: [
      'firme',
      'seca',
      'desmoronable',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado_en_recipiente_cerrado',

    recetasCompatibles: [
      'pan-compuesto-comiteco',
    ],
  },

];