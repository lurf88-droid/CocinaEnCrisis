import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const CERDO: IngredienteCatalogo[] = [

  // ====================================================
  // 🐖 CARNE DE CERDO
  // ====================================================

  {
    id: 'carne_cerdo',

    nombre: 'Carne de cerdo',

    aliases: [
      'cerdo',
      'carne de cerdo',
      'carne porcina',
      'pork',
    ],

    precioUnitario: 145,

    unidad: 'kg',

    precio: {
      minimo: 105,
      promedio: 145,
      maximo: 220,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'cerdo',

    basico: false,

    tags: [
      'proteina',
      'versatil',
      'cotidiano',
      'jugoso',
      'umami',
    ],

    cocinas: [
      'mexicana',
      'asiatica',
      'española',
      'latinoamericana',
      'internacional',
    ],

    tecnicas: [
      'asar',
      'guisar',
      'freir',
      'hornear',
      'brasear',
      'cocer',
    ],

    nivel: 'basico',

    familias: [
      'cerdo',
      'porcinos',
      'carnes',
      'proteinas_animales',
    ],

    usos: [
      'guisos',
      'tacos',
      'arroces',
      'caldos',
      'platos_principales',
    ],

    roles: [
      'proteina',
      'sabor_principal',
      'base_de_platillo',
      'umami',
    ],

    combinaCon: [
      'ajo',
      'cebolla_blanca',
      'jitomate',
      'papa',
      'chile_guajillo',
      'pimienta_negra',
    ],

    sustitutos: [
      'carne_res',
      'pollo',
    ],

    sustitutosEconomicos: [
      'espaldilla_cerdo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 2,
      amargo: 0,
      umami: 8,
      picante: 0,

      ahumado: 2,
      graso: 7,
      fresco: 2,
      aromatico: 4,
    },

    sabores: [
      'carnico',
      'suave',
      'umami',
      'ligeramente_dulce',
    ],

    texturas: [
      'tierna',
      'jugosa',
      'carnosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'cerdo_guisado',
      'cerdo_en_salsa',
      'tacos_de_cerdo',
      'cerdo_con_papas',
    ],
  },


  // ====================================================
  // 🥩 LOMO DE CERDO
  // ====================================================

  {
    id: 'lomo_cerdo',

    nombre: 'Lomo de cerdo',

    aliases: [
      'lomo',
      'lomo de cerdo',
      'pork loin',
    ],

    precioUnitario: 180,

    unidad: 'kg',

    precio: {
      minimo: 135,
      promedio: 180,
      maximo: 250,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'cerdo',

    basico: false,

    tags: [
      'magro',
      'versatil',
      'horno',
      'premium_medio',
    ],

    cocinas: [
      'mexicana',
      'española',
      'internacional',
      'europea',
    ],

    tecnicas: [
      'hornear',
      'asar',
      'sellar',
      'rellenar',
      'brasear',
    ],

    nivel: 'intermedio',

    familias: [
      'cerdo',
      'porcinos',
      'cortes_de_cerdo',
      'proteinas_animales',
    ],

    usos: [
      'platos_principales',
      'horneados',
      'guisos',
      'rellenos',
    ],

    roles: [
      'proteina',
      'corte_magro',
      'sabor_principal',
    ],

    combinaCon: [
      'ajo',
      'romero',
      'mostaza',
      'miel',
      'manzana',
      'papa',
    ],

    sustitutos: [
      'pierna_cerdo',
      'chuleta_cerdo',
    ],

    sustitutosEconomicos: [
      'espaldilla_cerdo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 7,
      picante: 0,

      ahumado: 2,
      graso: 4,
      fresco: 3,
      aromatico: 4,
    },

    sabores: [
      'suave',
      'carnico',
      'umami',
    ],

    texturas: [
      'tierna',
      'firme',
      'magra',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'lomo_de_cerdo_al_horno',
      'lomo_en_salsa',
      'lomo_relleno',
    ],
  },


  // ====================================================
  // 🍖 PIERNA DE CERDO
  // ====================================================

  {
    id: 'pierna_cerdo',

    nombre: 'Pierna de cerdo',

   aliases: [
  'pierna de cerdo',
  'pierna cerdo',
  'pork leg',
  'fresh ham',
],

    precioUnitario: 135,

    unidad: 'kg',

    precio: {
      minimo: 100,
      promedio: 135,
      maximo: 190,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'cerdo',

    basico: false,

    tags: [
      'versatil',
      'horno',
      'festivo',
      'guisos',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
      'europea',
      'internacional',
    ],

    tecnicas: [
      'hornear',
      'brasear',
      'guisar',
      'asar',
      'deshebrar',
    ],

    nivel: 'intermedio',

    familias: [
      'cerdo',
      'porcinos',
      'cortes_de_cerdo',
      'proteinas_animales',
    ],

    usos: [
      'horneados',
      'guisos',
      'tacos',
      'carne_deshebrada',
      'platos_principales',
    ],

    roles: [
      'proteina',
      'base_de_platillo',
      'sabor_principal',
    ],

    combinaCon: [
      'ajo',
      'chile_guajillo',
      'naranja',
      'pimienta_negra',
      'papa',
      'cebolla_blanca',
    ],

    sustitutos: [
      'lomo_cerdo',
      'espaldilla_cerdo',
    ],

    sustitutosEconomicos: [
      'espaldilla_cerdo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 2,
      amargo: 0,
      umami: 8,
      picante: 0,

      ahumado: 2,
      graso: 6,
      fresco: 2,
      aromatico: 5,
    },

    sabores: [
      'carnico',
      'suave',
      'umami',
    ],

    texturas: [
      'firme',
      'jugosa',
      'deshebrable_con_coccion',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'pierna_de_cerdo_al_horno',
      'cerdo_adobado',
      'cerdo_deshebrado',
    ],
  },


  // ====================================================
  // 🐖 ESPALDILLA DE CERDO
  // ====================================================

  {
    id: 'espaldilla_cerdo',

    nombre: 'Espaldilla de cerdo',

    aliases: [
      'espaldilla',
      'espaldilla de cerdo',
      'paleta de cerdo',
      'pork shoulder',
    ],

    precioUnitario: 125,

    unidad: 'kg',

    precio: {
      minimo: 90,
      promedio: 125,
      maximo: 180,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'cerdo',

    basico: false,

    tags: [
      'economico',
      'coccion_lenta',
      'deshebrar',
      'jugoso',
      'carnitas',
    ],

    cocinas: [
      'mexicana',
      'estadounidense',
      'latinoamericana',
      'internacional',
    ],

    tecnicas: [
      'brasear',
      'cocer',
      'hornear',
      'confit',
      'deshebrar',
    ],

    nivel: 'intermedio',

    familias: [
      'cerdo',
      'porcinos',
      'cortes_de_cerdo',
      'cortes_para_coccion_lenta',
      'proteinas_animales',
    ],

    usos: [
      'carnitas',
      'cerdo_deshebrado',
      'tacos',
      'guisos',
      'sandwiches',
    ],

    roles: [
      'proteina',
      'corte_economico',
      'colageno',
      'base_de_guiso',
    ],

    combinaCon: [
      'ajo',
      'cebolla_blanca',
      'naranja',
      'oregano_seco',
      'tortilla_maiz',
    ],

    sustitutos: [
      'pierna_cerdo',
      'panceta_cerdo',
    ],

    sustitutosEconomicos: [],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 2,
      amargo: 0,
      umami: 9,
      picante: 0,

      ahumado: 2,
      graso: 8,
      fresco: 2,
      aromatico: 5,
    },

    sabores: [
      'carnico',
      'umami',
      'graso',
      'profundo',
    ],

    texturas: [
      'fibrosa',
      'jugosa',
      'deshebrable',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'carnitas',
      'cerdo_deshebrado',
      'pulled_pork',
      'tacos_de_cerdo',
    ],
  },


  // ====================================================
  // 🥩 CHULETA DE CERDO
  // ====================================================

  {
    id: 'chuleta_cerdo',

    nombre: 'Chuleta de cerdo',

    aliases: [
      'chuleta',
      'chuleta de cerdo',
      'pork chop',
    ],

    precioUnitario: 165,

    unidad: 'kg',

    precio: {
      minimo: 120,
      promedio: 165,
      maximo: 230,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'cerdo',

    basico: false,

    tags: [
      'plancha',
      'parrilla',
      'rapido',
      'con_hueso',
    ],

    cocinas: [
      'mexicana',
      'estadounidense',
      'europea',
      'internacional',
    ],

    tecnicas: [
      'plancha',
      'asar',
      'parrilla',
      'hornear',
      'sellar',
    ],

    nivel: 'basico',

    familias: [
      'cerdo',
      'porcinos',
      'cortes_de_cerdo',
      'cortes_con_hueso',
      'proteinas_animales',
    ],

    usos: [
      'platos_principales',
      'parrilla',
      'comidas_rapidas',
    ],

    roles: [
      'proteina',
      'coccion_rapida',
      'sabor_principal',
    ],

    combinaCon: [
      'ajo',
      'pimienta_negra',
      'mostaza',
      'manzana',
      'papa',
    ],

    sustitutos: [
      'lomo_cerdo',
      'bistec_res',
    ],

    sustitutosEconomicos: [
      'pierna_cerdo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 2,
      amargo: 0,
      umami: 8,
      picante: 0,

      ahumado: 4,
      graso: 7,
      fresco: 2,
      aromatico: 5,
    },

    sabores: [
      'carnico',
      'asado',
      'umami',
    ],

    texturas: [
      'jugosa',
      'firme',
      'tierna',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'chuleta_a_la_plancha',
      'chuleta_en_salsa',
      'chuleta_asada',
    ],
  },


  // ====================================================
  // 🦴 COSTILLA DE CERDO
  // ====================================================

  {
    id: 'costilla_cerdo',

    nombre: 'Costilla de cerdo',

  aliases: [
  'costilla de cerdo',
  'costilla cerdo',
  'costillas de cerdo',
  'pork ribs',
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

    categoria: 'proteinas',

    subcategoria: 'cerdo',

    basico: false,

    tags: [
      'graso',
      'hueso',
      'parrilla',
      'barbecue',
      'coccion_lenta',
    ],

    cocinas: [
      'mexicana',
      'estadounidense',
      'china',
      'internacional',
    ],

    tecnicas: [
      'hornear',
      'parrilla',
      'brasear',
      'ahumar',
      'glasear',
    ],

    nivel: 'intermedio',

    familias: [
      'cerdo',
      'porcinos',
      'costillas',
      'cortes_con_hueso',
      'proteinas_animales',
    ],

    usos: [
      'parrilladas',
      'barbecue',
      'guisos',
      'platos_principales',
    ],

    roles: [
      'proteina',
      'grasa',
      'colageno',
      'sabor_principal',
    ],

    combinaCon: [
      'miel',
      'mostaza',
      'ajo',
      'salsa_inglesa',
      'pimienta_negra',
    ],

    sustitutos: [
      'costilla_res',
      'panceta_cerdo',
    ],

    sustitutosEconomicos: [
      'espaldilla_cerdo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 2,
      amargo: 0,
      umami: 9,
      picante: 0,

      ahumado: 7,
      graso: 9,
      fresco: 1,
      aromatico: 6,
    },

    sabores: [
      'carnico',
      'graso',
      'ahumado',
      'umami',
    ],

    texturas: [
      'jugosa',
      'carnosa',
      'gelatinosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'costillas_de_cerdo',
      'costillas_bbq',
      'costillas_al_horno',
    ],
  },


  // ====================================================
  // 🥓 PANCETA DE CERDO
  // ====================================================

  {
    id: 'panceta_cerdo',

    nombre: 'Panceta de cerdo',

    aliases: [
      'panceta',
      'panceta de cerdo',
      'vientre de cerdo',
      'pork belly',
    ],

    precioUnitario: 200,

    unidad: 'kg',

    precio: {
      minimo: 145,
      promedio: 200,
      maximo: 300,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'cerdo',

    basico: false,

    tags: [
      'graso',
      'premium_medio',
      'crujiente',
      'asiatico',
      'coccion_lenta',
    ],

    cocinas: [
      'mexicana',
      'china',
      'japonesa',
      'coreana',
      'internacional',
    ],

    tecnicas: [
      'hornear',
      'brasear',
      'freir',
      'asar',
      'confitar',
    ],

    nivel: 'intermedio',

    familias: [
      'cerdo',
      'porcinos',
      'cortes_de_cerdo',
      'cortes_grasos',
      'proteinas_animales',
    ],

    usos: [
      'tacos',
      'ramen',
      'guisos',
      'platos_principales',
    ],

    roles: [
      'proteina',
      'grasa',
      'textura',
      'umami',
    ],

    combinaCon: [
      'ajo',
      'salsa_teriyaki',
      'arroz_blanco',
      'chile_serrano',
      'cebollin',
    ],

    sustitutos: [
      'tocino',
      'costilla_cerdo',
    ],

    sustitutosEconomicos: [
      'espaldilla_cerdo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 2,
      amargo: 0,
      umami: 10,
      picante: 0,

      ahumado: 4,
      graso: 10,
      fresco: 1,
      aromatico: 6,
    },

    sabores: [
      'graso',
      'carnico',
      'umami',
      'intenso',
    ],

    texturas: [
      'mantequillosa',
      'jugosa',
      'crujiente_al_dorar',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'panceta_al_horno',
      'tacos_de_panceta',
      'panceta_asiatica',
    ],
  },


  // ====================================================
  // 🥓 TOCINO
  // ====================================================

  {
    id: 'tocino',

    nombre: 'Tocino',

    aliases: [
      'tocino',
      'bacon',
      'tocino de cerdo',
    ],

    precioUnitario: 280,

    unidad: 'kg',

    precio: {
      minimo: 190,
      promedio: 280,
      maximo: 420,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'cerdo',

    basico: false,

    tags: [
      'curado',
      'ahumado',
      'graso',
      'salado',
      'desayuno',
    ],

    cocinas: [
      'estadounidense',
      'mexicana',
      'internacional',
    ],

    tecnicas: [
      'freir',
      'hornear',
      'saltear',
    ],

    nivel: 'basico',

    familias: [
      'cerdo',
      'porcinos',
      'carnes_curadas',
      'proteinas_animales',
    ],

    usos: [
      'desayunos',
      'hamburguesas',
      'pastas',
      'ensaladas',
      'guisos',
    ],

    roles: [
      'proteina',
      'grasa',
      'salinidad',
      'ahumado',
    ],

    combinaCon: [
      'huevo',
      'papa',
      'queso_cheddar',
      'pasta',
      'pan',
    ],

    sustitutos: [
      'panceta_cerdo',
    ],

    sustitutosEconomicos: [
      'chicharron_cerdo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 8,
      amargo: 1,
      umami: 10,
      picante: 0,

      ahumado: 9,
      graso: 10,
      fresco: 0,
      aromatico: 8,
    },

    sabores: [
      'ahumado',
      'salado',
      'graso',
      'umami',
    ],

    texturas: [
      'crujiente',
      'grasa',
      'carnosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'huevos_con_tocino',
      'pasta_con_tocino',
      'papas_con_tocino',
    ],
  },


  // ====================================================
  // 🥩 CARNE MOLIDA DE CERDO
  // ====================================================

  {
    id: 'carne_molida_cerdo',

    nombre: 'Carne molida de cerdo',

    aliases: [
      'cerdo molido',
      'carne molida de cerdo',
      'pork mince',
      'ground pork',
    ],

    precioUnitario: 140,

    unidad: 'kg',

    precio: {
      minimo: 100,
      promedio: 140,
      maximo: 200,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'cerdo',

    basico: false,

    tags: [
      'molida',
      'versatil',
      'relleno',
      'economico',
    ],

    cocinas: [
      'mexicana',
      'china',
      'japonesa',
      'italiana',
      'internacional',
    ],

    tecnicas: [
      'saltear',
      'freir',
      'guisar',
      'rellenar',
    ],

    nivel: 'basico',

    familias: [
      'cerdo',
      'carne_molida',
      'porcinos',
      'proteinas_animales',
    ],

    usos: [
      'albóndigas',
      'rellenos',
      'dumplings',
      'tacos',
      'guisos',
    ],

    roles: [
      'proteina',
      'relleno',
      'base_de_platillo',
    ],

    combinaCon: [
      'ajo',
      'cebolla_blanca',
      'pasta',
      'jitomate',
      'laminas_wonton',
    ],

    sustitutos: [
      'carne_molida_res',
      'pollo',
    ],

    sustitutosEconomicos: [
      'frijoles_conserva',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 2,
      amargo: 0,
      umami: 8,
      picante: 0,

      ahumado: 1,
      graso: 8,
      fresco: 2,
      aromatico: 4,
    },

    sabores: [
      'carnico',
      'umami',
      'graso',
    ],

    texturas: [
      'granulada',
      'jugosa',
      'tierna',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'albóndigas_de_cerdo',
      'dumplings_de_cerdo',
      'tacos_de_cerdo_molido',
    ],
  },


  // ====================================================
  // 🌮 CERDO DESHEBRADO
  // ====================================================

  {
    id: 'cerdo_deshebrado',

    nombre: 'Cerdo deshebrado',

    aliases: [
      'cerdo deshebrado',
      'carne de cerdo deshebrada',
      'cerdo cocido desmenuzado',
      'pulled pork',
      'shredded pork',
    ],

    precioUnitario: 200,

    unidad: 'kg',

    precio: {
      minimo: 150,
      promedio: 200,
      maximo: 280,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'cerdo',

    basico: false,

    tags: [
      'cocido',
      'listo_para_usar',
      'rapido',
      'aprovechamiento',
      'deshebrado',
    ],

    cocinas: [
      'mexicana',
      'estadounidense',
      'latinoamericana',
      'internacional',
    ],

    tecnicas: [
      'deshebrar',
      'guisar',
      'saltear',
      'recalentar',
      'rellenar',
    ],

    nivel: 'basico',

    familias: [
      'cerdo',
      'ingredientes_cocidos',
      'proteinas_animales',
      'aprovechamiento',
    ],

    usos: [
      'tacos',
      'tostadas',
      'sandwiches',
      'tortas',
      'quesadillas',
      'rellenos',
    ],

    roles: [
      'proteina',
      'ingrediente_listo',
      'relleno',
      'base_de_platillo',
    ],

    combinaCon: [
      'tortilla_maiz',
      'salsa_verde',
      'salsa_roja',
      'cebolla_blanca',
      'aguacate',
      'pan_cemita',
    ],

    sustitutos: [
      'pollo_deshebrado',
      'carne_deshebrada_res',
    ],

    sustitutosEconomicos: [
      'pollo_deshebrado',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 2,
      amargo: 0,
      umami: 9,
      picante: 0,

      ahumado: 3,
      graso: 7,
      fresco: 1,
      aromatico: 5,
    },

    sabores: [
      'carnico',
      'umami',
      'cocido',
      'graso',
    ],

    texturas: [
      'fibrosa',
      'tierna',
      'deshebrada',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'tacos_de_cerdo',
      'torta_de_cerdo',
      'quesadillas_de_cerdo',
      'pulled_pork',
    ],
  },


  // ====================================================
  // 🇲🇽 CARNITAS
  // ====================================================

  {
    id: 'carnitas_cerdo',

    nombre: 'Carnitas de cerdo',

    aliases: [
      'carnitas',
      'carnitas de cerdo',
      'cerdo en carnitas',
    ],

    precioUnitario: 260,

    unidad: 'kg',

    precio: {
      minimo: 190,
      promedio: 260,
      maximo: 380,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'cerdo',

    basico: false,

    tags: [
      'mexicano',
      'michoacan',
      'cocido',
      'listo_para_usar',
      'tradicional',
      'graso',
    ],

    cocinas: [
      'mexicana',
      'michoacana',
    ],

    tecnicas: [
      'confit',
      'cocer_en_grasa',
      'dorar',
    ],

    nivel: 'intermedio',

    familias: [
      'cerdo',
      'preparaciones_mexicanas',
      'ingredientes_cocidos',
      'proteinas_animales',
    ],

    usos: [
      'tacos',
      'tortas',
      'quesadillas',
      'platos_principales',
    ],

    roles: [
      'proteina',
      'ingrediente_listo',
      'identidad_regional',
      'sabor_principal',
    ],

    combinaCon: [
      'tortilla_maiz',
      'cebolla_blanca',
      'cilantro',
      'limon',
      'salsa_verde',
      'salsa_roja',
    ],

    sustitutos: [
      'cerdo_deshebrado',
      'chicharron_prensado',
    ],

    sustitutosEconomicos: [
      'cerdo_deshebrado',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 4,
      amargo: 1,
      umami: 10,
      picante: 0,

      ahumado: 4,
      graso: 10,
      fresco: 1,
      aromatico: 7,
    },

    sabores: [
      'carnico',
      'graso',
      'dorado',
      'umami',
    ],

    texturas: [
      'tierna',
      'jugosa',
      'crujiente_en_bordes',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'tacos_de_carnitas',
      'torta_de_carnitas',
      'quesadillas_de_carnitas',
    ],
  },



  // ====================================================
  // 🌶️ CHORIZO DE CERDO
  // ====================================================

  {
    id: 'chorizo_cerdo',

    nombre: 'Chorizo de cerdo',

    aliases: [
      'chorizo',
      'chorizo de cerdo',
      'chorizo mexicano',
      'mexican chorizo',
    ],

    precioUnitario: 160,

    unidad: 'kg',

    precio: {
      minimo: 110,
      promedio: 160,
      maximo: 240,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'cerdo',

    basico: false,

    tags: [
      'mexicano',
      'embutido',
      'especiado',
      'graso',
      'intenso',
    ],

    cocinas: [
      'mexicana',
      'española',
    ],

    tecnicas: [
      'freir',
      'saltear',
      'asar',
      'guisar',
    ],

    nivel: 'basico',

    familias: [
      'cerdo',
      'embutidos',
      'carnes_preparadas',
      'proteinas_animales',
    ],

    usos: [
      'tacos',
      'huevos',
      'papas',
      'quesadillas',
      'guisos',
    ],

    roles: [
      'proteina',
      'grasa',
      'especia',
      'sabor_intenso',
    ],

    combinaCon: [
      'papa',
      'huevo',
      'tortilla_maiz',
      'queso_oaxaca',
      'frijoles_conserva',
    ],

    sustitutos: [
      'longaniza_cerdo',
      'carne_molida_cerdo',
    ],

    sustitutosEconomicos: [
      'carne_molida_cerdo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 2,
      salado: 7,
      amargo: 1,
      umami: 9,
      picante: 6,

      ahumado: 5,
      graso: 10,
      fresco: 0,
      aromatico: 9,
    },

    sabores: [
      'especiado',
      'picante',
      'graso',
      'umami',
    ],

    texturas: [
      'granulada',
      'jugosa',
      'grasa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'papas_con_chorizo',
      'huevo_con_chorizo',
      'tacos_de_chorizo',
      'quesadillas_de_chorizo',
    ],
  },


  // ====================================================
  // 🌶️ LONGANIZA DE CERDO
  // ====================================================

  {
    id: 'longaniza_cerdo',

    nombre: 'Longaniza de cerdo',

    aliases: [
      'longaniza',
      'longaniza de cerdo',
      'longaniza mexicana',
    ],

    precioUnitario: 155,

    unidad: 'kg',

    precio: {
      minimo: 110,
      promedio: 155,
      maximo: 230,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'cerdo',

    basico: false,

    tags: [
      'mexicano',
      'embutido',
      'especiado',
      'tradicional',
    ],

    cocinas: [
      'mexicana',
      'española',
    ],

    tecnicas: [
      'freir',
      'asar',
      'saltear',
      'guisar',
    ],

    nivel: 'basico',

    familias: [
      'cerdo',
      'embutidos',
      'carnes_preparadas',
      'proteinas_animales',
    ],

    usos: [
      'tacos',
      'parrilladas',
      'papas',
      'guisos',
    ],

    roles: [
      'proteina',
      'grasa',
      'sabor_intenso',
      'especia',
    ],

    combinaCon: [
      'tortilla_maiz',
      'papa',
      'cebolla_blanca',
      'salsa_verde',
      'frijoles_conserva',
    ],

    sustitutos: [
      'chorizo_cerdo',
    ],

    sustitutosEconomicos: [
      'carne_molida_cerdo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 1,
      salado: 7,
      amargo: 1,
      umami: 9,
      picante: 5,

      ahumado: 4,
      graso: 9,
      fresco: 0,
      aromatico: 9,
    },

    sabores: [
      'especiado',
      'carnico',
      'graso',
      'umami',
    ],

    texturas: [
      'granulada',
      'jugosa',
      'firme',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'tacos_de_longaniza',
      'longaniza_con_papas',
      'longaniza_asada',
    ],
  },


  // ====================================================
  // 🍖 CODILLO DE CERDO
  // ====================================================

  {
    id: 'codillo_cerdo',

    nombre: 'Codillo de cerdo',

    aliases: [
      'codillo',
      'codillo de cerdo',
      'pork knuckle',
      'pork hock',
    ],

    precioUnitario: 135,

    unidad: 'kg',

    precio: {
      minimo: 95,
      promedio: 135,
      maximo: 200,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'cerdo',

    basico: false,

    tags: [
      'colageno',
      'hueso',
      'coccion_lenta',
      'tradicional',
    ],

    cocinas: [
      'alemana',
      'española',
      'mexicana',
      'europea',
    ],

    tecnicas: [
      'hornear',
      'brasear',
      'cocer',
      'coccion_lenta',
    ],

    nivel: 'intermedio',

    familias: [
      'cerdo',
      'porcinos',
      'cortes_con_hueso',
      'cortes_para_coccion_lenta',
      'proteinas_animales',
    ],

    usos: [
      'guisos',
      'sopas',
      'platos_principales',
    ],

    roles: [
      'proteina',
      'colageno',
      'generador_de_caldo',
      'sabor_principal',
    ],

    combinaCon: [
      'papa',
      'cebolla_blanca',
      'ajo',
      'laurel',
      'cerveza',
    ],

    sustitutos: [
      'chambarete_res',
      'costilla_cerdo',
    ],

    sustitutosEconomicos: [
      'espaldilla_cerdo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 2,
      amargo: 1,
      umami: 10,
      picante: 0,

      ahumado: 3,
      graso: 9,
      fresco: 1,
      aromatico: 6,
    },

    sabores: [
      'carnico',
      'profundo',
      'umami',
      'graso',
    ],

    texturas: [
      'gelatinosa',
      'jugosa',
      'muy_tierna',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'codillo_al_horno',
      'codillo_guisado',
      'codillo_braseado',
    ],
  },


  // ====================================================
  // 🐷 CABEZA DE CERDO
  // ====================================================

  {
    id: 'cabeza_cerdo',

    nombre: 'Cabeza de cerdo',

    aliases: [
      'cabeza de cerdo',
      'cabeza de puerco',
      'pork head',
    ],

    precioUnitario: 90,

    unidad: 'kg',

    precio: {
      minimo: 60,
      promedio: 90,
      maximo: 140,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'cerdo',

    basico: false,

    tags: [
      'tradicional',
      'economico',
      'coccion_lenta',
      'tacos',
      'aprovechamiento',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
      'tradicional',
    ],

    tecnicas: [
      'cocer',
      'hornear',
      'desmenuzar',
      'brasear',
    ],

    nivel: 'avanzado',

    familias: [
      'cerdo',
      'porcinos',
      'subproductos_porcinoss',
      'proteinas_animales',
    ],

    usos: [
      'tacos',
      'guisos',
      'carnitas',
    ],

    roles: [
      'proteina',
      'aprovechamiento',
      'colageno',
      'sabor_intenso',
    ],

    combinaCon: [
      'tortilla_maiz',
      'cebolla_blanca',
      'cilantro',
      'limon',
      'salsa_verde',
    ],

    sustitutos: [
      'carnitas_cerdo',
      'cerdo_deshebrado',
    ],

    sustitutosEconomicos: [
      'espaldilla_cerdo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 3,
      amargo: 1,
      umami: 10,
      picante: 0,

      ahumado: 3,
      graso: 10,
      fresco: 1,
      aromatico: 6,
    },

    sabores: [
      'carnico',
      'intenso',
      'graso',
      'umami',
    ],

    texturas: [
      'tierna',
      'gelatinosa',
      'carnosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'tacos_de_cabeza',
      'cabeza_de_cerdo_guisada',
      'carnitas_de_cabeza',
    ],
  },


  // ====================================================
  // 🐷 OREJA DE CERDO
  // ====================================================

  {
    id: 'oreja_cerdo',

    nombre: 'Oreja de cerdo',

    aliases: [
      'oreja',
      'oreja de cerdo',
      'oreja de puerco',
      'pig ear',
    ],

    precioUnitario: 110,

    unidad: 'kg',

    precio: {
      minimo: 70,
      promedio: 110,
      maximo: 170,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'cerdo',

    basico: false,

    tags: [
      'colageno',
      'textura',
      'tradicional',
      'aprovechamiento',
    ],

    cocinas: [
      'mexicana',
      'china',
      'asiatica',
      'europea',
    ],

    tecnicas: [
      'cocer',
      'freir',
      'brasear',
      'asar',
    ],

    nivel: 'avanzado',

    familias: [
      'cerdo',
      'porcinos',
      'subproductos_porcinoss',
      'proteinas_animales',
    ],

    usos: [
      'tacos',
      'botanas',
      'guisos',
      'entradas',
    ],

    roles: [
      'proteina',
      'textura',
      'colageno',
    ],

    combinaCon: [
      'ajo',
      'chile_serrano',
      'limon',
      'cebolla_blanca',
      'salsa_roja',
    ],

    sustitutos: [
      'cueritos_cerdo',
    ],

    sustitutosEconomicos: [],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 2,
      amargo: 0,
      umami: 8,
      picante: 0,

      ahumado: 2,
      graso: 7,
      fresco: 1,
      aromatico: 4,
    },

    sabores: [
      'carnico',
      'suave',
      'umami',
    ],

    texturas: [
      'cartilaginosa',
      'gelatinosa',
      'crujiente_al_dorar',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'oreja_de_cerdo_guisada',
      'oreja_crujiente',
      'tacos_de_oreja',
    ],
  },


  // ====================================================
  // 🐷 CUERITOS DE CERDO
  // ====================================================

  {
    id: 'cueritos_cerdo',

    nombre: 'Cueritos de cerdo',

    aliases: [
      'cueritos',
      'cueritos de cerdo',
      'piel de cerdo cocida',
      'pork skin',
    ],

    precioUnitario: 100,

    unidad: 'kg',

    precio: {
      minimo: 70,
      promedio: 100,
      maximo: 160,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'cerdo',

    basico: false,

    tags: [
      'mexicano',
      'antojitos',
      'colageno',
      'tradicional',
    ],

    cocinas: [
      'mexicana',
    ],

    tecnicas: [
      'cocer',
      'encurtir',
      'guisar',
    ],

    nivel: 'intermedio',

    familias: [
      'cerdo',
      'piel_de_cerdo',
      'proteinas_animales',
    ],

    usos: [
      'tostadas',
      'tacos',
      'botanas',
      'antojitos',
    ],

    roles: [
      'proteina',
      'textura',
      'colageno',
    ],

    combinaCon: [
      'tostada_maiz',
      'salsa_roja',
      'aguacate',
      'cebolla_blanca',
      'limon',
    ],

    sustitutos: [
      'oreja_cerdo',
      'chicharron_cerdo',
    ],

    sustitutosEconomicos: [],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 2,
      salado: 4,
      amargo: 0,
      umami: 7,
      picante: 0,

      ahumado: 1,
      graso: 6,
      fresco: 2,
      aromatico: 3,
    },

    sabores: [
      'salado',
      'suave',
      'carnico',
    ],

    texturas: [
      'gelatinosa',
      'elastica',
      'tierna',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'tostadas_de_cueritos',
      'tacos_de_cueritos',
      'cueritos_en_vinagre',
    ],
  },


  
  // ====================================================
  // 🐷 JAMON COCIDO
  // ====================================================

  {
  id: 'jamon_cocido',

  nombre: 'Jamón cocido',

  aliases: [
    'jamon',
    'jamón',
    'jamon cocido',
    'jamón cocido',
    'jamon de pierna',
    'jamón de pierna',
    'jamon york',
    'jamón york',
    'cooked ham',
  ],

  precioUnitario: 180,

  unidad: 'kg',

  precio: {
    minimo: 120,
    promedio: 180,
    maximo: 260,
    moneda: 'MXN',
    actualizado: '2026-09',
  },

  categoria: 'proteinas',

  subcategoria: 'cerdo',

  basico: false,

  tags: [
    'cerdo',
    'jamon',
    'cocido',
    'listo_para_usar',
    'rapido',
    'desayuno',
    'sandwich',
  ],

  cocinas: [
    'mexicana',
    'americana',
    'europea',
    'internacional',
  ],

  tecnicas: [
    'servir',
    'calentar',
    'asar',
    'hornear',
    'saltear',
  ],

  nivel: 'basico',

  familias: [
    'cerdo',
    'porcinos',
    'embutidos',
    'carnes_frias',
    'proteinas_animales',
  ],

  usos: [
    'sandwiches',
    'tortas',
    'desayunos',
    'huevos',
    'ensaladas',
    'pizzas',
    'pastas',
    'botanas',
  ],

  roles: [
    'proteina',
    'relleno',
    'acompanamiento',
  ],

  combinaCon: [
    'huevo',
    'queso_oaxaca',
    'pan_frances',
    'mayonesa',
    'mostaza',
    'jitomate',
    'lechuga',
    'cebolla_blanca',
  ],

  sustitutos: [
    'pechuga_pavo',
    'tocino',
  ],

  sustitutosEconomicos: [
    'huevo',
  ],

  perfilSabor: {
    ...SABOR_BASE,

    dulce: 2,
    acido: 0,
    salado: 7,
    amargo: 0,
    umami: 7,
    picante: 0,

    ahumado: 2,
    graso: 5,
    fresco: 2,
    aromatico: 4,
  },

  sabores: [
    'salado',
    'carnico',
    'suave',
    'umami',
  ],

  texturas: [
    'suave',
    'tierna',
    'jugosa',
  ],

  temporada: [
    'todo_el_año',
  ],

  conservacion:
    'refrigerado',

  recetasCompatibles: [
    'sandwich_jamon_queso',
    'huevos_con_jamon',
    'torta_jamon',
    'omelette_jamon_queso',
    'pasta_con_jamon',
  ],
},
];