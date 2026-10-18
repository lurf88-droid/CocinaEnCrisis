import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const AVES: IngredienteCatalogo[] = [

  // ====================================================
  // 🐔 POLLO ENTERO
  // ====================================================

  {
    id: 'pollo',

    nombre: 'Pollo',

    aliases: [
      'pollo',
      'pollo entero',
      'carne de pollo',
      'pollo fresco',
      'chicken',
    ],

    precioUnitario: 95,

    unidad: 'kg',

    precio: {
      minimo: 70,
      promedio: 95,
      maximo: 140,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'aves',

    basico: false,

    tags: [
      'economico',
      'versatil',
      'cotidiano',
      'proteina',
      'familiar',
    ],

    cocinas: [
      'mexicana',
      'internacional',
      'asiatica',
      'mediterranea',
      'latinoamericana',
    ],

    tecnicas: [
      'asar',
      'hornear',
      'cocer',
      'guisar',
      'freir',
      'brasear',
    ],

    nivel: 'basico',

    familias: [
      'aves',
      'pollo',
      'proteinas_animales',
    ],

    usos: [
      'guisos',
      'caldos',
      'tacos',
      'arroces',
      'sopas',
      'platos_principales',
    ],

    roles: [
      'proteina',
      'sabor_principal',
      'base_de_platillo',
      'generador_de_caldo',
    ],

    combinaCon: [
      'ajo',
      'cebolla_blanca',
      'jitomate',
      'papa',
      'zanahoria',
      'arroz_blanco',
      'limon',
      'chile_guajillo',
    ],

    sustitutos: [
      'pavo',
      'gallina',
    ],

    sustitutosEconomicos: [
      'muslo_pollo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 7,
      picante: 0,

      ahumado: 1,
      graso: 5,
      fresco: 3,
      aromatico: 3,
    },

    sabores: [
      'suave',
      'carnico',
      'umami',
    ],

    texturas: [
      'tierna',
      'jugosa',
      'firme',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'pollo_asado',
      'caldo_de_pollo',
      'pollo_guisado',
      'pollo_al_horno',
      'arroz_con_pollo',
    ],
  },


  // ====================================================
  // 🍗 PECHUGA DE POLLO
  // ====================================================

  {
    id: 'pechuga_pollo',

    nombre: 'Pechuga de pollo',

    aliases: [
      'pechuga',
      'pechuga de pollo',
      'pechuga sin hueso',
      'pollo sin hueso',
      'chicken breast',
    ],

    precioUnitario: 145,

    unidad: 'kg',
 pesoPorUnidad: 300,
    compraFraccionable: true,
    precio: {
      minimo: 110,
      promedio: 145,
      maximo: 195,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'aves',

    basico: false,

    tags: [
      'magra',
      'rapida',
      'versatil',
      'proteina',
      'facil',
    ],

    cocinas: [
      'mexicana',
      'internacional',
      'italiana',
      'asiatica',
      'mediterranea',
    ],

    tecnicas: [
      'plancha',
      'asar',
      'saltear',
      'hornear',
      'empanizar',
      'pochar',
    ],

    nivel: 'basico',

    familias: [
      'aves',
      'pollo',
      'cortes_de_pollo',
      'proteinas_animales',
    ],

    usos: [
      'ensaladas',
      'tacos',
      'pastas',
      'sandwiches',
      'platos_principales',
    ],

    roles: [
      'proteina',
      'base_de_platillo',
      'proteina_magra',
    ],

    combinaCon: [
      'ajo',
      'limon',
      'pimienta_negra',
      'arroz_blanco',
      'pasta',
      'espinaca',
      'brocoli',
    ],

    sustitutos: [
      'muslo_pollo',
      'pechuga_pavo',
    ],

    sustitutosEconomicos: [
      'muslo_pollo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 6,
      picante: 0,

      ahumado: 0,
      graso: 2,
      fresco: 4,
      aromatico: 2,
    },

    sabores: [
      'suave',
      'ligero',
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
      'pechuga_a_la_plancha',
      'pollo_con_verduras',
      'ensalada_de_pollo',
      'pollo_empanizado',
      'tacos_de_pollo',
    ],
  },


  // ====================================================
  // 🍗 MUSLO DE POLLO
  // ====================================================

  {
    id: 'muslo_pollo',

    nombre: 'Muslo de pollo',

    aliases: [
      'muslo',
      'muslo de pollo',
      'chicken thigh',
    ],

    precioUnitario: 85,

    unidad: 'kg',
pesoPorUnidad: 200,
    compraFraccionable: true,
    precio: {
      minimo: 65,
      promedio: 85,
      maximo: 125,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'aves',

    basico: false,

    tags: [
      'economico',
      'jugoso',
      'versatil',
      'proteina',
    ],

    cocinas: [
      'mexicana',
      'internacional',
      'asiatica',
      'latinoamericana',
    ],

    tecnicas: [
      'guisar',
      'asar',
      'hornear',
      'freir',
      'brasear',
    ],

    nivel: 'basico',

    familias: [
      'aves',
      'pollo',
      'cortes_de_pollo',
      'proteinas_animales',
    ],

    usos: [
      'guisos',
      'caldos',
      'arroces',
      'platos_principales',
    ],

    roles: [
      'proteina',
      'sabor_principal',
      'jugosidad',
    ],

    combinaCon: [
      'ajo',
      'cebolla_blanca',
      'jitomate',
      'papa',
      'arroz_blanco',
      'chile_guajillo',
    ],

    sustitutos: [
      'pierna_pollo',
      'pechuga_pollo',
    ],

    sustitutosEconomicos: [],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 8,
      picante: 0,

      ahumado: 1,
      graso: 6,
      fresco: 3,
      aromatico: 3,
    },

    sabores: [
      'carnico',
      'umami',
      'jugoso',
    ],

    texturas: [
      'jugosa',
      'tierna',
      'carnosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'pollo_guisado',
      'muslos_al_horno',
      'pollo_en_salsa',
      'arroz_con_pollo',
    ],
  },


  // ====================================================
  // 🍗 PIERNA DE POLLO
  // ====================================================

  {
    id: 'pierna_pollo',

    nombre: 'Pierna de pollo',

   aliases: [
  'pierna de pollo',
  'pierna pollo',
  'drumstick',
  'chicken drumstick',
],

    precioUnitario: 82,

    unidad: 'kg',
   pesoPorUnidad: 180,
    compraFraccionable: true,
    precio: {
      minimo: 60,
      promedio: 82,
      maximo: 120,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'aves',

    basico: false,

    tags: [
      'economico',
      'jugoso',
      'familiar',
      'versatil',
    ],

    cocinas: [
      'mexicana',
      'internacional',
      'estadounidense',
      'asiatica',
    ],

    tecnicas: [
      'hornear',
      'freir',
      'asar',
      'guisar',
      'brasear',
    ],

    nivel: 'basico',

    familias: [
      'aves',
      'pollo',
      'cortes_de_pollo',
      'proteinas_animales',
    ],

    usos: [
      'guisos',
      'horneados',
      'frituras',
      'platos_principales',
    ],

    roles: [
      'proteina',
      'jugosidad',
      'sabor_principal',
    ],

    combinaCon: [
      'ajo',
      'cebolla_blanca',
      'papa',
      'chile_guajillo',
      'miel',
      'mostaza',
    ],

    sustitutos: [
      'muslo_pollo',
      'pollo',
    ],

    sustitutosEconomicos: [],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 8,
      picante: 0,

      ahumado: 1,
      graso: 6,
      fresco: 3,
      aromatico: 3,
    },

    sabores: [
      'carnico',
      'jugoso',
      'umami',
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
      'piernas_de_pollo_al_horno',
      'pollo_en_adobo',
      'pollo_frito',
    ],
  },


  // ====================================================
  // 🍗 ALAS DE POLLO
  // ====================================================

  {
    id: 'alas_pollo',

    nombre: 'Alas de pollo',

    aliases: [
      'alas',
      'alas de pollo',
      'alitas',
      'chicken wings',
    ],

    precioUnitario: 110,

    unidad: 'kg',
  pesoPorUnidad: 80,
    compraFraccionable: true,
    precio: {
      minimo: 85,
      promedio: 110,
      maximo: 160,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'aves',

    basico: false,

    tags: [
      'botana',
      'jugoso',
      'fritura',
      'horneado',
    ],

    cocinas: [
      'estadounidense',
      'mexicana',
      'asiatica',
      'internacional',
    ],

    tecnicas: [
      'freir',
      'hornear',
      'asar',
      'glasear',
    ],

    nivel: 'basico',

    familias: [
      'aves',
      'pollo',
      'cortes_de_pollo',
      'proteinas_animales',
    ],

    usos: [
      'botanas',
      'entradas',
      'platos_principales',
    ],

    roles: [
      'proteina',
      'botana',
      'vehiculo_de_salsa',
    ],

    combinaCon: [
      'salsa_picante',
      'miel',
      'ajo',
      'limon',
      'mostaza',
    ],

    sustitutos: [
      'pierna_pollo',
    ],

    sustitutosEconomicos: [
      'pierna_pollo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 8,
      picante: 0,

      ahumado: 2,
      graso: 7,
      fresco: 2,
      aromatico: 3,
    },

    sabores: [
      'carnico',
      'umami',
      'graso',
    ],

    texturas: [
      'jugosa',
      'carnosa',
      'crujiente_al_dorar',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'alitas_picantes',
      'alitas_al_horno',
      'alitas_con_miel',
    ],
  },


  // ====================================================
  // 🌮 POLLO DESHEBRADO
  // ====================================================

  {
    id: 'pollo_deshebrado',

    nombre: 'Pollo deshebrado',

    aliases: [
      'pollo deshebrado',
      'pollo desmenuzado',
      'pollo cocido deshebrado',
      'pollo cocido',
      'shredded chicken',
    ],

    precioUnitario: 180,

    unidad: 'kg',

    precio: {
      minimo: 140,
      promedio: 180,
      maximo: 240,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'aves',

    basico: false,

    tags: [
      'cocido',
      'listo_para_usar',
      'rapido',
      'versatil',
      'aprovechamiento',
      'mexicano',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
      'internacional',
    ],

    tecnicas: [
      'deshebrar',
      'saltear',
      'guisar',
      'rellenar',
      'recalentar',
    ],

    nivel: 'basico',

    familias: [
      'aves',
      'pollo',
      'proteinas_animales',
      'ingredientes_cocidos',
      'aprovechamiento',
    ],

    usos: [
      'tacos',
      'enchiladas',
      'enfrijoladas',
      'quesadillas',
      'tostadas',
      'sopas',
      'ensaladas',
      'rellenos',
      'sandwiches',
    ],

    roles: [
      'proteina',
      'relleno',
      'ingrediente_listo',
      'base_de_platillo',
    ],

    combinaCon: [
      'tortilla_maiz',
      'jitomate',
      'cebolla_blanca',
      'chile_chipotle_seco',
      'salsa_verde',
      'salsa_roja',
      'queso_oaxaca',
      'crema',
      'aguacate',
    ],

    sustitutos: [
      'pechuga_pollo',
      'pollo',
      'pavo',
    ],

    sustitutosEconomicos: [
      'frijoles_conserva',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 2,
      amargo: 0,
      umami: 7,
      picante: 0,

      ahumado: 1,
      graso: 3,
      fresco: 2,
      aromatico: 3,
    },

    sabores: [
      'suave',
      'carnico',
      'umami',
      'cocido',
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
      'tacos_de_pollo',
      'tostadas_de_pollo',
      'enchiladas_de_pollo',
      'enfrijoladas_con_pollo',
      'quesadillas_de_pollo',
      'tinga_de_pollo',
    ],
  },


  // ====================================================
  // 🍲 GALLINA
  // ====================================================

  {
    id: 'gallina',

    nombre: 'Gallina',

    aliases: [
      'gallina',
      'gallina criolla',
      'gallina de rancho',
      'hen',
    ],

    precioUnitario: 130,

    unidad: 'kg',
  pesoPorUnidad: 2000,
    compraFraccionable: true,
    precio: {
      minimo: 90,
      promedio: 130,
      maximo: 200,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'aves',

    basico: false,

    tags: [
      'tradicional',
      'caldo',
      'intenso',
      'coccion_lenta',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
      'tradicional',
    ],

    tecnicas: [
      'cocer',
      'hervir',
      'guisar',
      'brasear',
    ],

    nivel: 'intermedio',

    familias: [
      'aves',
      'gallina',
      'proteinas_animales',
    ],

    usos: [
      'caldos',
      'sopas',
      'guisos',
      'moles',
    ],

    roles: [
      'proteina',
      'generador_de_caldo',
      'sabor_principal',
    ],

    combinaCon: [
      'ajo',
      'cebolla_blanca',
      'zanahoria',
      'apio',
      'arroz_blanco',
      'mole_negro',
    ],

    sustitutos: [
      'pollo',
    ],

    sustitutosEconomicos: [
      'pollo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 9,
      picante: 0,

      ahumado: 1,
      graso: 6,
      fresco: 2,
      aromatico: 4,
    },

    sabores: [
      'carnico',
      'intenso',
      'umami',
    ],

    texturas: [
      'firme',
      'fibrosa',
      'tierna_con_coccion_lenta',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'caldo_de_gallina',
      'gallina_en_mole',
      'sopa_de_gallina',
    ],
  },


  // ====================================================
  // 🦃 PAVO
  // ====================================================

  {
    id: 'pavo',

    nombre: 'Pavo',

    aliases: [
      'pavo',
      'carne de pavo',
      'turkey',
    ],

    precioUnitario: 170,

    unidad: 'kg',
 pesoPorUnidad: 5000,
    compraFraccionable: true,
    precio: {
      minimo: 120,
      promedio: 170,
      maximo: 260,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'aves',

    basico: false,

    tags: [
      'magra',
      'festivo',
      'proteina',
      'versatil',
    ],

    cocinas: [
      'mexicana',
      'estadounidense',
      'internacional',
    ],

    tecnicas: [
      'hornear',
      'asar',
      'guisar',
      'saltear',
      'brasear',
    ],

    nivel: 'intermedio',

    familias: [
      'aves',
      'pavo',
      'proteinas_animales',
    ],

    usos: [
      'platos_principales',
      'guisos',
      'sandwiches',
      'ensaladas',
    ],

    roles: [
      'proteina',
      'sabor_principal',
      'proteina_magra',
    ],

    combinaCon: [
      'ajo',
      'romero',
      'papa',
      'mantequilla',
      'naranja',
      'arandano',
    ],

    sustitutos: [
      'pollo',
      'pechuga_pollo',
    ],

    sustitutosEconomicos: [
      'pollo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 7,
      picante: 0,

      ahumado: 1,
      graso: 3,
      fresco: 3,
      aromatico: 3,
    },

    sabores: [
      'suave',
      'carnico',
      'umami',
    ],

    texturas: [
      'firme',
      'tierna',
      'magra',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'pavo_al_horno',
      'pavo_en_salsa',
      'sandwich_de_pavo',
    ],
  },


  // ====================================================
  // 🦃 PECHUGA DE PAVO
  // ====================================================

  {
    id: 'pechuga_pavo',

    nombre: 'Pechuga de pavo',

    aliases: [
      'pechuga de pavo',
      'pavo sin hueso',
      'turkey breast',
    ],

    precioUnitario: 210,

    unidad: 'kg',
 pesoPorUnidad: 400,
    compraFraccionable: true,
    precio: {
      minimo: 160,
      promedio: 210,
      maximo: 300,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'aves',

    basico: false,

    tags: [
      'magra',
      'proteina',
      'ligera',
      'versatil',
    ],

    cocinas: [
      'internacional',
      'estadounidense',
      'mediterranea',
    ],

    tecnicas: [
      'plancha',
      'hornear',
      'asar',
      'saltear',
    ],

    nivel: 'basico',

    familias: [
      'aves',
      'pavo',
      'cortes_de_ave',
      'proteinas_animales',
    ],

    usos: [
      'ensaladas',
      'platos_principales',
      'sandwiches',
      'wraps',
    ],

    roles: [
      'proteina',
      'proteina_magra',
      'base_de_platillo',
    ],

    combinaCon: [
      'limon',
      'romero',
      'pimienta_negra',
      'espinaca',
      'arroz_blanco',
    ],

    sustitutos: [
      'pechuga_pollo',
    ],

    sustitutosEconomicos: [
      'pechuga_pollo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 6,
      picante: 0,

      ahumado: 0,
      graso: 2,
      fresco: 4,
      aromatico: 2,
    },

    sabores: [
      'suave',
      'ligero',
      'umami',
    ],

    texturas: [
      'magra',
      'firme',
      'tierna',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'pechuga_de_pavo_a_la_plancha',
      'ensalada_de_pavo',
      'pavo_con_verduras',
    ],
  },


  // ====================================================
  // 🦆 PATO
  // ====================================================

  {
    id: 'pato',

    nombre: 'Pato',

    aliases: [
      'pato',
      'carne de pato',
      'duck',
    ],

    precioUnitario: 260,

    unidad: 'kg',

    precio: {
      minimo: 190,
      promedio: 260,
      maximo: 420,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'aves',

    basico: false,

    tags: [
      'premium',
      'graso',
      'intenso',
      'gourmet',
    ],

    cocinas: [
      'francesa',
      'china',
      'asiatica',
      'internacional',
    ],

    tecnicas: [
      'asar',
      'hornear',
      'confit',
      'saltear',
      'brasear',
    ],

    nivel: 'avanzado',

    familias: [
      'aves',
      'pato',
      'proteinas_animales',
    ],

    usos: [
      'platos_principales',
      'arroces',
      'entradas',
      'platos_gourmet',
    ],

    roles: [
      'proteina',
      'grasa',
      'sabor_principal',
    ],

    combinaCon: [
      'naranja',
      'miel',
      'vino_tinto',
      'papa',
      'romero',
    ],

    sustitutos: [
      'ganso',
      'pollo',
    ],

    sustitutosEconomicos: [
      'muslo_pollo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 9,
      picante: 0,

      ahumado: 2,
      graso: 9,
      fresco: 2,
      aromatico: 5,
    },

    sabores: [
      'intenso',
      'carnico',
      'umami',
      'graso',
    ],

    texturas: [
      'jugosa',
      'tierna',
      'carnosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'pato_a_la_naranja',
      'pato_asado',
      'pato_con_reduccion',
    ],
  },


  // ====================================================
  // 🦆 PECHUGA DE PATO
  // ====================================================

  {
    id: 'pechuga_pato',

    nombre: 'Pechuga de pato',

    aliases: [
      'pechuga de pato',
      'magret',
      'magret de pato',
      'duck breast',
    ],

    precioUnitario: 520,

    unidad: 'kg',

    precio: {
      minimo: 380,
      promedio: 520,
      maximo: 800,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'aves',

    basico: false,

    tags: [
      'premium',
      'gourmet',
      'graso',
      'alta_cocina',
    ],

    cocinas: [
      'francesa',
      'internacional',
    ],

    tecnicas: [
      'sellar',
      'plancha',
      'asar',
      'reposar',
    ],

    nivel: 'avanzado',

    familias: [
      'aves',
      'pato',
      'cortes_de_ave',
      'proteinas_animales',
    ],

    usos: [
      'platos_gourmet',
      'platos_principales',
    ],

    roles: [
      'proteina',
      'sabor_principal',
      'premium',
    ],

    combinaCon: [
      'naranja',
      'vino_tinto',
      'reduccion_vino_tinto',
      'miel',
      'papa',
    ],

    sustitutos: [
      'pato',
      'ganso',
    ],

    sustitutosEconomicos: [
      'muslo_pollo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 9,
      picante: 0,

      ahumado: 2,
      graso: 9,
      fresco: 2,
      aromatico: 6,
    },

    sabores: [
      'intenso',
      'umami',
      'graso',
      'carnico',
    ],

    texturas: [
      'jugosa',
      'tierna',
      'mantequillosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'magret_de_pato',
      'pechuga_de_pato_con_reduccion',
      'pato_a_la_naranja',
    ],
  },


  // ====================================================
  // 🐦 CODORNIZ
  // ====================================================

  {
    id: 'codorniz',

    nombre: 'Codorniz',

    aliases: [
      'codorniz',
      'codornices',
      'quail',
    ],

    precioUnitario: 320,

    unidad: 'kg',

    precio: {
      minimo: 220,
      promedio: 320,
      maximo: 500,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'aves',

    basico: false,

    tags: [
      'premium',
      'pequeña',
      'gourmet',
      'intensa',
    ],

    cocinas: [
      'francesa',
      'española',
      'mediterranea',
      'internacional',
    ],

    tecnicas: [
      'asar',
      'hornear',
      'rellenar',
      'brasear',
    ],

    nivel: 'avanzado',

    familias: [
      'aves',
      'aves_pequeñas',
      'proteinas_animales',
    ],

    usos: [
      'platos_gourmet',
      'entradas',
      'platos_principales',
    ],

    roles: [
      'proteina',
      'premium',
      'sabor_principal',
    ],

    combinaCon: [
      'romero',
      'ajo',
      'mantequilla',
      'vino_tinto',
      'papa',
    ],

    sustitutos: [
      'pollo',
      'pato',
    ],

    sustitutosEconomicos: [
      'pollo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 8,
      picante: 0,

      ahumado: 2,
      graso: 5,
      fresco: 3,
      aromatico: 5,
    },

    sabores: [
      'carnico',
      'intenso',
      'umami',
    ],

    texturas: [
      'tierna',
      'jugosa',
      'delicada',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'codorniz_asada',
      'codorniz_rellena',
      'codorniz_al_horno',
    ],
  },


  // ====================================================
  // 🐦 FAISÁN
  // ====================================================

  {
    id: 'faisan',

    nombre: 'Faisán',

    aliases: [
      'faisan',
      'faisán',
      'pheasant',
    ],

    precioUnitario: 480,

    unidad: 'kg',

    precio: {
      minimo: 350,
      promedio: 480,
      maximo: 750,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'aves',

    basico: false,

    tags: [
      'premium',
      'caza',
      'gourmet',
      'intenso',
    ],

    cocinas: [
      'francesa',
      'europea',
      'internacional',
    ],

    tecnicas: [
      'asar',
      'hornear',
      'brasear',
      'rellenar',
    ],

    nivel: 'avanzado',

    familias: [
      'aves',
      'aves_de_caza',
      'proteinas_animales',
    ],

    usos: [
      'platos_gourmet',
      'platos_principales',
    ],

    roles: [
      'proteina',
      'premium',
      'sabor_principal',
    ],

    combinaCon: [
      'vino_tinto',
      'romero',
      'mantequilla',
      'papa',
      'hongos',
    ],

    sustitutos: [
      'codorniz',
      'pato',
    ],

    sustitutosEconomicos: [
      'pollo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 1,
      amargo: 1,
      umami: 9,
      picante: 0,

      ahumado: 2,
      graso: 4,
      fresco: 2,
      aromatico: 6,
    },

    sabores: [
      'intenso',
      'terroso',
      'carnico',
      'umami',
    ],

    texturas: [
      'firme',
      'tierna',
      'magra',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'faisan_asado',
      'faisan_al_horno',
      'faisan_con_hongos',
    ],
  },


  // ====================================================
  // 🪿 GANSO
  // ====================================================

  {
    id: 'ganso',

    nombre: 'Ganso',

    aliases: [
      'ganso',
      'carne de ganso',
      'goose',
    ],

    precioUnitario: 360,

    unidad: 'kg',

    precio: {
      minimo: 260,
      promedio: 360,
      maximo: 550,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'aves',

    basico: false,

    tags: [
      'graso',
      'premium',
      'intenso',
      'festivo',
    ],

    cocinas: [
      'alemana',
      'francesa',
      'europea',
      'internacional',
    ],

    tecnicas: [
      'asar',
      'hornear',
      'confit',
      'brasear',
    ],

    nivel: 'avanzado',

    familias: [
      'aves',
      'ganso',
      'proteinas_animales',
    ],

    usos: [
      'platos_principales',
      'platos_gourmet',
    ],

    roles: [
      'proteina',
      'grasa',
      'sabor_principal',
    ],

    combinaCon: [
      'manzana',
      'naranja',
      'papa',
      'vino_tinto',
      'romero',
    ],

    sustitutos: [
      'pato',
    ],

    sustitutosEconomicos: [
      'muslo_pollo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 9,
      picante: 0,

      ahumado: 2,
      graso: 10,
      fresco: 2,
      aromatico: 5,
    },

    sabores: [
      'intenso',
      'graso',
      'carnico',
      'umami',
    ],

    texturas: [
      'jugosa',
      'carnosa',
      'tierna',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'ganso_asado',
      'ganso_al_horno',
      'ganso_con_manzana',
    ],
  },


  // ====================================================
  // 🫀 HÍGADO DE POLLO
  // ====================================================

  {
    id: 'higado_pollo',

    nombre: 'Hígado de pollo',

    aliases: [
      'higado de pollo',
      'hígado de pollo',
      'higaditos',
      'chicken liver',
    ],

    precioUnitario: 75,

    unidad: 'kg',

    precio: {
      minimo: 50,
      promedio: 75,
      maximo: 110,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'aves',

    basico: false,

    tags: [
      'visceras',
      'economico',
      'intenso',
      'hierro',
    ],

    cocinas: [
      'mexicana',
      'francesa',
      'internacional',
    ],

    tecnicas: [
      'saltear',
      'freir',
      'guisar',
      'hacer_pate',
    ],

    nivel: 'intermedio',

    familias: [
      'aves',
      'pollo',
      'visceras',
      'proteinas_animales',
    ],

    usos: [
      'guisos',
      'entradas',
      'pates',
      'rellenos',
    ],

    roles: [
      'proteina',
      'sabor_intenso',
      'umami',
    ],

    combinaCon: [
      'cebolla_blanca',
      'ajo',
      'mantequilla',
      'vino_tinto',
      'pimienta_negra',
    ],

    sustitutos: [
      'higado_res',
    ],

    sustitutosEconomicos: [],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 2,
      amargo: 3,
      umami: 10,
      picante: 0,

      ahumado: 1,
      graso: 6,
      fresco: 2,
      aromatico: 7,
    },

    sabores: [
      'intenso',
      'mineral',
      'umami',
    ],

    texturas: [
      'suave',
      'cremosa',
      'tierna',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'higaditos_encebollados',
      'pate_de_higado',
      'higado_de_pollo_sal­teado',
    ],
  },


  // ====================================================
  // 🫀 MOLLEJA DE POLLO
  // ====================================================

  {
    id: 'molleja_pollo',

    nombre: 'Molleja de pollo',

    aliases: [
      'molleja',
      'molleja de pollo',
      'mollejas',
      'chicken gizzard',
    ],

    precioUnitario: 70,

    unidad: 'kg',

    precio: {
      minimo: 45,
      promedio: 70,
      maximo: 100,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'aves',

    basico: false,

    tags: [
      'visceras',
      'economico',
      'textura',
      'tradicional',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
      'asiatica',
    ],

    tecnicas: [
      'cocer',
      'guisar',
      'freir',
      'brasear',
    ],

    nivel: 'intermedio',

    familias: [
      'aves',
      'pollo',
      'visceras',
      'proteinas_animales',
    ],

    usos: [
      'guisos',
      'caldos',
      'botanas',
      'tacos',
    ],

    roles: [
      'proteina',
      'textura',
      'umami',
    ],

    combinaCon: [
      'ajo',
      'cebolla_blanca',
      'chile_guajillo',
      'jitomate',
      'limon',
    ],

    sustitutos: [
      'higado_pollo',
    ],

    sustitutosEconomicos: [],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 2,
      amargo: 1,
      umami: 9,
      picante: 0,

      ahumado: 1,
      graso: 4,
      fresco: 2,
      aromatico: 4,
    },

    sabores: [
      'carnico',
      'umami',
      'intenso',
    ],

    texturas: [
      'firme',
      'elastica',
      'carnosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'mollejas_guisadas',
      'mollejas_en_salsa',
      'tacos_de_molleja',
    ],
  },


  // ====================================================
  // 🍗 POLLO ASADO
  // ====================================================

  {
    id: 'pollo_asado',

    nombre: 'Pollo asado',

    aliases: [
      'pollo asado',
      'pollo rostizado',
      'pollo rosticero',
      'roast chicken',
    ],

    precioUnitario: 170,

    unidad: 'kg',

    precio: {
      minimo: 130,
      promedio: 170,
      maximo: 240,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'aves',

    basico: false,

    tags: [
      'cocido',
      'listo_para_usar',
      'rapido',
      'aprovechamiento',
      'rostizado',
    ],

    cocinas: [
      'mexicana',
      'internacional',
    ],

    tecnicas: [
      'asar',
      'deshebrar',
      'recalentar',
      'saltear',
    ],

    nivel: 'basico',

    familias: [
      'aves',
      'pollo',
      'ingredientes_cocidos',
      'proteinas_animales',
      'aprovechamiento',
    ],

    usos: [
      'tacos',
      'tostadas',
      'ensaladas',
      'sandwiches',
      'sopas',
      'rellenos',
    ],

    roles: [
      'proteina',
      'ingrediente_listo',
      'sabor_principal',
      'aprovechamiento',
    ],

    combinaCon: [
      'tortilla_maiz',
      'aguacate',
      'salsa_verde',
      'salsa_roja',
      'cebolla_blanca',
      'limon',
    ],

    sustitutos: [
      'pollo_deshebrado',
      'pollo',
    ],

    sustitutosEconomicos: [
      'pollo_deshebrado',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 3,
      amargo: 1,
      umami: 8,
      picante: 0,

      ahumado: 5,
      graso: 6,
      fresco: 2,
      aromatico: 5,
    },

    sabores: [
      'rostizado',
      'carnico',
      'umami',
      'ahumado',
    ],

    texturas: [
      'jugosa',
      'tierna',
      'dorada',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'tacos_de_pollo',
      'tostadas_de_pollo',
      'ensalada_de_pollo',
      'sopa_de_pollo',
    ],
  },

];