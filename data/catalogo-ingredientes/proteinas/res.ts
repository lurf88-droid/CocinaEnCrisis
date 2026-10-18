import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const RES: IngredienteCatalogo[] = [

  // ====================================================
  // 🥩 CARNE DE RES
  // ====================================================

  {
    id: 'carne_res',

    nombre: 'Carne de res',

    aliases: [
      'carne de res',
      'res',
      'carne vacuna',
      'carne bovina',
      'beef',
    ],

    precioUnitario: 190,

    unidad: 'kg',

    precio: {
      minimo: 140,
      promedio: 190,
      maximo: 280,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'res',

    basico: false,

    tags: [
      'proteina',
      'versatil',
      'cotidiano',
      'carnico',
      'umami',
    ],

    cocinas: [
      'mexicana',
      'internacional',
      'estadounidense',
      'latinoamericana',
      'europea',
    ],

    tecnicas: [
      'asar',
      'guisar',
      'saltear',
      'hornear',
      'brasear',
      'cocer',
    ],

    nivel: 'basico',

    familias: [
      'res',
      'bovinos',
      'carnes_rojas',
      'proteinas_animales',
    ],

    usos: [
      'guisos',
      'tacos',
      'caldos',
      'arroces',
      'pastas',
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
      'arroz_blanco',
    ],

    sustitutos: [
      'carne_cerdo',
      'pollo',
    ],

    sustitutosEconomicos: [
      'carne_molida_res',
      'diezmillo_res',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 2,
      amargo: 1,
      umami: 9,
      picante: 0,

      ahumado: 2,
      graso: 6,
      fresco: 2,
      aromatico: 5,
    },

    sabores: [
      'carnico',
      'umami',
      'intenso',
    ],

    texturas: [
      'firme',
      'carnosa',
      'jugosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'carne_guisada',
      'tacos_de_res',
      'carne_con_papas',
      'caldo_de_res',
    ],
  },


  // ====================================================
  // 🥩 BISTEC DE RES
  // ====================================================

  {
    id: 'bistec_res',

    nombre: 'Bistec de res',

    aliases: [
      'bistec',
      'bistec de res',
      'filete delgado de res',
      'beef steak',
    ],

    precioUnitario: 210,

    unidad: 'kg',

    precio: {
      minimo: 160,
      promedio: 210,
      maximo: 300,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'res',

    basico: false,

    tags: [
      'rapido',
      'plancha',
      'cotidiano',
      'mexicano',
      'versatil',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
      'internacional',
    ],

    tecnicas: [
      'plancha',
      'asar',
      'saltear',
      'guisar',
    ],

    nivel: 'basico',

    familias: [
      'res',
      'bovinos',
      'cortes_de_res',
      'carnes_rojas',
      'proteinas_animales',
    ],

    usos: [
      'tacos',
      'platos_principales',
      'guisos',
      'tortas',
    ],

    roles: [
      'proteina',
      'sabor_principal',
      'coccion_rapida',
    ],

    combinaCon: [
      'cebolla_blanca',
      'ajo',
      'jitomate',
      'chile_serrano',
      'papa',
      'tortilla_maiz',
    ],

    sustitutos: [
      'sirloin_res',
      'aguayon_res',
    ],

    sustitutosEconomicos: [
      'diezmillo_res',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 2,
      amargo: 1,
      umami: 9,
      picante: 0,

      ahumado: 2,
      graso: 5,
      fresco: 2,
      aromatico: 4,
    },

    sabores: [
      'carnico',
      'umami',
      'asado',
    ],

    texturas: [
      'firme',
      'jugosa',
      'tierna',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'bistec_encebollado',
      'bistec_a_la_mexicana',
      'tacos_de_bistec',
    ],
  },


  // ====================================================
  // 🍔 CARNE MOLIDA DE RES
  // ====================================================

  {
    id: 'carne_molida_res',

    nombre: 'Carne molida de res',

    aliases: [
      'carne molida',
      'carne molida de res',
      'res molida',
      'ground beef',
    ],

    precioUnitario: 175,

    unidad: 'kg',

    precio: {
      minimo: 125,
      promedio: 175,
      maximo: 240,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'res',

    basico: false,

    tags: [
      'economico',
      'versatil',
      'rapido',
      'familiar',
      'relleno',
    ],

    cocinas: [
      'mexicana',
      'italiana',
      'estadounidense',
      'internacional',
    ],

    tecnicas: [
      'saltear',
      'guisar',
      'freir',
      'hornear',
      'rellenar',
    ],

    nivel: 'basico',

    familias: [
      'res',
      'carne_molida',
      'bovinos',
      'proteinas_animales',
    ],

    usos: [
      'picadillo',
      'hamburguesas',
      'pastas',
      'rellenos',
      'tacos',
      'albóndigas',
    ],

    roles: [
      'proteina',
      'relleno',
      'base_de_platillo',
    ],

    combinaCon: [
      'papa',
      'zanahoria',
      'jitomate',
      'cebolla_blanca',
      'ajo',
      'pasta',
    ],

    sustitutos: [
      'carne_molida_cerdo',
      'pollo_deshebrado',
    ],

    sustitutosEconomicos: [
      'frijoles_conserva',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 2,
      amargo: 1,
      umami: 8,
      picante: 0,

      ahumado: 1,
      graso: 7,
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
      'picadillo',
      'hamburguesa',
      'albóndigas',
      'pasta_con_carne',
      'tacos_de_carne_molida',
    ],
  },


  // ====================================================
  // 🥩 SIRLOIN
  // ====================================================

  {
    id: 'sirloin_res',

    nombre: 'Sirloin de res',

    aliases: [
      'sirloin',
      'sirloin de res',
      'solomillo bajo',
      'sirloin steak',
    ],

    precioUnitario: 320,

    unidad: 'kg',

    precio: {
      minimo: 240,
      promedio: 320,
      maximo: 480,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'res',

    basico: false,

    tags: [
      'parrilla',
      'corte',
      'jugoso',
      'premium',
    ],

    cocinas: [
      'estadounidense',
      'mexicana',
      'internacional',
      'argentina',
    ],

    tecnicas: [
      'parrilla',
      'asar',
      'sellar',
      'plancha',
    ],

    nivel: 'intermedio',

    familias: [
      'res',
      'cortes_de_res',
      'cortes_parrilleros',
      'proteinas_animales',
    ],

    usos: [
      'parrilla',
      'tacos',
      'platos_principales',
    ],

    roles: [
      'proteina',
      'sabor_principal',
      'corte_parrillero',
    ],

    combinaCon: [
      'sal_mar',
      'pimienta_negra',
      'ajo',
      'mantequilla',
      'papa',
      'romero',
    ],

    sustitutos: [
      'ribeye_res',
      'arrachera_res',
    ],

    sustitutosEconomicos: [
      'bistec_res',
      'diezmillo_res',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 2,
      amargo: 1,
      umami: 9,
      picante: 0,

      ahumado: 4,
      graso: 6,
      fresco: 2,
      aromatico: 5,
    },

    sabores: [
      'carnico',
      'asado',
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
      'sirloin_a_la_parrilla',
      'tacos_de_sirloin',
      'sirloin_con_papas',
    ],
  },


  // ====================================================
  // 🥩 RIBEYE
  // ====================================================

  {
    id: 'ribeye_res',

    nombre: 'Ribeye de res',

    aliases: [
      'ribeye',
      'rib eye',
      'ojo de costilla',
      'ribeye steak',
    ],

    precioUnitario: 520,

    unidad: 'kg',

    precio: {
      minimo: 380,
      promedio: 520,
      maximo: 850,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'res',

    basico: false,

    tags: [
      'premium',
      'parrilla',
      'marmoleo',
      'jugoso',
      'gourmet',
    ],

    cocinas: [
      'estadounidense',
      'argentina',
      'internacional',
    ],

    tecnicas: [
      'parrilla',
      'sellar',
      'asar',
      'reposar',
    ],

    nivel: 'avanzado',

    familias: [
      'res',
      'cortes_de_res',
      'cortes_premium',
      'cortes_parrilleros',
      'proteinas_animales',
    ],

    usos: [
      'parrilla',
      'platos_gourmet',
      'platos_principales',
    ],

    roles: [
      'proteina',
      'premium',
      'sabor_principal',
      'grasa_intramuscular',
    ],

    combinaCon: [
      'sal_mar',
      'pimienta_negra',
      'ajo',
      'mantequilla',
      'romero',
      'papa',
    ],

    sustitutos: [
      'sirloin_res',
      'filete_res',
    ],

    sustitutosEconomicos: [
      'diezmillo_res',
      'bistec_res',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 2,
      amargo: 1,
      umami: 10,
      picante: 0,

      ahumado: 5,
      graso: 10,
      fresco: 2,
      aromatico: 7,
    },

    sabores: [
      'carnico_intenso',
      'umami',
      'graso',
      'asado',
    ],

    texturas: [
      'mantequillosa',
      'jugosa',
      'tierna',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'ribeye_a_la_parrilla',
      'ribeye_con_mantequilla',
      'ribeye_con_papas',
    ],
  },


  // ====================================================
  // 🥩 FILETE DE RES
  // ====================================================

  {
    id: 'filete_res',

    nombre: 'Filete de res',

    aliases: [
      'filete',
      'filete de res',
      'tenderloin',
      'beef tenderloin',
      'solomillo',
    ],

    precioUnitario: 590,

    unidad: 'kg',

    precio: {
      minimo: 430,
      promedio: 590,
      maximo: 900,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'res',

    basico: false,

    tags: [
      'premium',
      'tierno',
      'gourmet',
      'magro',
    ],

    cocinas: [
      'francesa',
      'internacional',
      'mexicana',
    ],

    tecnicas: [
      'sellar',
      'asar',
      'plancha',
      'hornear',
    ],

    nivel: 'avanzado',

    familias: [
      'res',
      'cortes_de_res',
      'cortes_premium',
      'proteinas_animales',
    ],

    usos: [
      'platos_gourmet',
      'platos_principales',
      'medallones',
    ],

    roles: [
      'proteina',
      'premium',
      'sabor_principal',
    ],

    combinaCon: [
      'mantequilla',
      'ajo',
      'romero',
      'vino_tinto',
      'reduccion_vino_tinto',
      'papa',
    ],

    sustitutos: [
      'sirloin_res',
      'ribeye_res',
    ],

    sustitutosEconomicos: [
      'aguayon_res',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 8,
      picante: 0,

      ahumado: 3,
      graso: 4,
      fresco: 3,
      aromatico: 5,
    },

    sabores: [
      'suave',
      'carnico',
      'umami',
    ],

    texturas: [
      'muy_tierna',
      'fina',
      'jugosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'filete_a_la_plancha',
      'filete_con_reduccion',
      'medallones_de_res',
    ],
  },


  // ====================================================
  // 🥩 ARRACHERA
  // ====================================================

  {
    id: 'arrachera_res',

    nombre: 'Arrachera',

    aliases: [
      'arrachera',
      'arrachera de res',
      'skirt steak',
      'carne para asar',
    ],

    precioUnitario: 330,

    unidad: 'kg',

    precio: {
      minimo: 240,
      promedio: 330,
      maximo: 500,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'res',

    basico: false,

    tags: [
      'mexicano',
      'parrilla',
      'tacos',
      'jugoso',
      'fibroso',
    ],

    cocinas: [
      'mexicana',
      'texmex',
      'latinoamericana',
    ],

    tecnicas: [
      'marinar',
      'parrilla',
      'asar',
      'plancha',
    ],

    nivel: 'intermedio',

    familias: [
      'res',
      'cortes_de_res',
      'cortes_parrilleros',
      'proteinas_animales',
    ],

    usos: [
      'tacos',
      'parrilladas',
      'fajitas',
      'platos_principales',
    ],

    roles: [
      'proteina',
      'sabor_principal',
      'carne_para_asar',
    ],

    combinaCon: [
      'tortilla_maiz',
      'cebolla_blanca',
      'cilantro',
      'limon',
      'guacamole',
      'salsa_roja',
    ],

    sustitutos: [
      'sirloin_res',
      'diezmillo_res',
    ],

    sustitutosEconomicos: [
      'diezmillo_res',
      'bistec_res',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 2,
      amargo: 1,
      umami: 9,
      picante: 0,

      ahumado: 5,
      graso: 7,
      fresco: 2,
      aromatico: 6,
    },

    sabores: [
      'asado',
      'carnico',
      'umami',
    ],

    texturas: [
      'fibrosa',
      'jugosa',
      'tierna_si_se_corta_correctamente',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'tacos_de_arrachera',
      'arrachera_a_la_parrilla',
      'fajitas_de_res',
    ],
  },


  // ====================================================
  // 🥩 DIEZMILLO
  // ====================================================

  {
    id: 'diezmillo_res',

    nombre: 'Diezmillo de res',

    aliases: [
      'diezmillo',
      'diezmillo de res',
      'chuck',
      'chuck steak',
    ],

    precioUnitario: 170,

    unidad: 'kg',

    precio: {
      minimo: 125,
      promedio: 170,
      maximo: 240,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'res',

    basico: false,

    tags: [
      'economico',
      'versatil',
      'guisos',
      'parrilla',
      'coccion_lenta',
    ],

    cocinas: [
      'mexicana',
      'estadounidense',
      'internacional',
    ],

    tecnicas: [
      'guisar',
      'brasear',
      'asar',
      'cocer',
    ],

    nivel: 'basico',

    familias: [
      'res',
      'cortes_de_res',
      'cortes_economicos',
      'proteinas_animales',
    ],

    usos: [
      'guisos',
      'tacos',
      'caldos',
      'carne_deshebrada',
    ],

    roles: [
      'proteina',
      'corte_economico',
      'base_de_guiso',
    ],

    combinaCon: [
      'cebolla_blanca',
      'ajo',
      'jitomate',
      'papa',
      'chile_guajillo',
    ],

    sustitutos: [
      'aguayon_res',
      'falda_res',
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

      ahumado: 2,
      graso: 7,
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
      'fibrosa',
      'tierna_con_coccion',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'diezmillo_guisado',
      'carne_deshebrada',
      'tacos_de_res',
    ],
  },


  // ====================================================
  // 🥩 AGUAYÓN
  // ====================================================

  {
    id: 'aguayon_res',

    nombre: 'Aguayón de res',

    aliases: [
      'aguayon',
      'aguayón',
      'aguayon de res',
      'round steak',
    ],

    precioUnitario: 205,

    unidad: 'kg',

    precio: {
      minimo: 155,
      promedio: 205,
      maximo: 290,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'res',

    basico: false,

    tags: [
      'magro',
      'versatil',
      'bistec',
      'guisos',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
      'internacional',
    ],

    tecnicas: [
      'asar',
      'plancha',
      'guisar',
      'brasear',
    ],

    nivel: 'basico',

    familias: [
      'res',
      'cortes_de_res',
      'proteinas_animales',
    ],

    usos: [
      'bisteces',
      'guisos',
      'tacos',
      'milanesas',
    ],

    roles: [
      'proteina',
      'corte_magro',
      'base_de_platillo',
    ],

    combinaCon: [
      'ajo',
      'cebolla_blanca',
      'pimienta_negra',
      'jitomate',
      'papa',
    ],

    sustitutos: [
      'bistec_res',
      'sirloin_res',
    ],

    sustitutosEconomicos: [
      'diezmillo_res',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 2,
      amargo: 1,
      umami: 8,
      picante: 0,

      ahumado: 2,
      graso: 4,
      fresco: 3,
      aromatico: 4,
    },

    sabores: [
      'carnico',
      'suave',
      'umami',
    ],

    texturas: [
      'firme',
      'magra',
      'tierna',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'aguayon_asado',
      'bistec_de_aguayon',
      'milanesa_de_res',
    ],
  },


  // ====================================================
  // 🥩 FALDA DE RES
  // ====================================================

  {
    id: 'falda_res',

    nombre: 'Falda de res',

    aliases: [
      'falda',
      'falda de res',
      'flank steak',
      'carne para deshebrar',
    ],

    precioUnitario: 185,

    unidad: 'kg',

    precio: {
      minimo: 135,
      promedio: 185,
      maximo: 270,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'res',

    basico: false,

    tags: [
      'deshebrar',
      'coccion_lenta',
      'mexicano',
      'fibroso',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
      'internacional',
    ],

    tecnicas: [
      'cocer',
      'brasear',
      'guisar',
      'deshebrar',
    ],

    nivel: 'intermedio',

    familias: [
      'res',
      'cortes_de_res',
      'cortes_para_coccion_lenta',
      'proteinas_animales',
    ],

    usos: [
      'deshebrados',
      'tacos',
      'caldos',
      'guisos',
      'ropa_vieja',
    ],

    roles: [
      'proteina',
      'carne_para_deshebrar',
      'base_de_guiso',
    ],

    combinaCon: [
      'jitomate',
      'cebolla_blanca',
      'ajo',
      'chile_guajillo',
      'tortilla_maiz',
    ],

    sustitutos: [
      'diezmillo_res',
      'chambarete_res',
    ],

    sustitutosEconomicos: [
      'diezmillo_res',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 2,
      amargo: 1,
      umami: 9,
      picante: 0,

      ahumado: 1,
      graso: 6,
      fresco: 2,
      aromatico: 4,
    },

    sabores: [
      'carnico',
      'umami',
      'intenso',
    ],

    texturas: [
      'fibrosa',
      'deshebrable',
      'tierna_con_coccion_lenta',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'carne_deshebrada',
      'ropa_vieja',
      'tacos_de_res',
      'falda_guisada',
    ],
  },


  // ====================================================
  // 🍲 CHAMBARETE
  // ====================================================

  {
    id: 'chambarete_res',

    nombre: 'Chambarete de res',

    aliases: [
      'chambarete',
      'chambarete de res',
      'jarrete',
      'shank',
      'beef shank',
    ],

    precioUnitario: 150,

    unidad: 'kg',

    precio: {
      minimo: 110,
      promedio: 150,
      maximo: 220,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'res',

    basico: false,

    tags: [
      'economico',
      'caldo',
      'colageno',
      'coccion_lenta',
      'tradicional',
    ],

    cocinas: [
      'mexicana',
      'italiana',
      'latinoamericana',
    ],

    tecnicas: [
      'hervir',
      'cocer',
      'brasear',
      'guisar',
    ],

    nivel: 'intermedio',

    familias: [
      'res',
      'cortes_de_res',
      'cortes_con_hueso',
      'cortes_para_coccion_lenta',
      'proteinas_animales',
    ],

    usos: [
      'caldos',
      'sopas',
      'guisos',
      'coccion_lenta',
    ],

    roles: [
      'proteina',
      'generador_de_caldo',
      'colageno',
      'umami',
    ],

    combinaCon: [
      'zanahoria',
      'papa',
      'apio',
      'cebolla_blanca',
      'ajo',
      'elote',
    ],

    sustitutos: [
      'costilla_res',
      'falda_res',
    ],

    sustitutosEconomicos: [],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 2,
      amargo: 1,
      umami: 10,
      picante: 0,

      ahumado: 1,
      graso: 7,
      fresco: 2,
      aromatico: 5,
    },

    sabores: [
      'carnico',
      'profundo',
      'umami',
    ],

    texturas: [
      'gelatinosa',
      'tierna_con_coccion',
      'carnosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'caldo_de_res',
      'chambarete_guisado',
      'chambarete_en_salsa',
    ],
  },


  // ====================================================
  // 🦴 COSTILLA DE RES
  // ====================================================

  {
    id: 'costilla_res',

    nombre: 'Costilla de res',

 aliases: [
  'costilla de res',
  'costilla res',
  'beef ribs',
  'costillas de res',
],

    precioUnitario: 230,

    unidad: 'kg',

    precio: {
      minimo: 170,
      promedio: 230,
      maximo: 350,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'res',

    basico: false,

    tags: [
      'hueso',
      'graso',
      'parrilla',
      'coccion_lenta',
      'intenso',
    ],

    cocinas: [
      'mexicana',
      'estadounidense',
      'coreana',
      'internacional',
    ],

    tecnicas: [
      'parrilla',
      'hornear',
      'brasear',
      'ahumar',
    ],

    nivel: 'intermedio',

    familias: [
      'res',
      'costillas',
      'cortes_con_hueso',
      'proteinas_animales',
    ],

    usos: [
      'parrilladas',
      'guisos',
      'barbecue',
      'platos_principales',
    ],

    roles: [
      'proteina',
      'sabor_principal',
      'grasa',
      'colageno',
    ],

    combinaCon: [
      'ajo',
      'miel',
      'salsa_inglesa',
      'pimienta_negra',
      'papa',
    ],

    sustitutos: [
      'short_rib_res',
      'chambarete_res',
    ],

    sustitutosEconomicos: [
      'chambarete_res',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 2,
      amargo: 1,
      umami: 10,
      picante: 0,

      ahumado: 6,
      graso: 9,
      fresco: 1,
      aromatico: 6,
    },

    sabores: [
      'carnico_intenso',
      'ahumado',
      'graso',
      'umami',
    ],

    texturas: [
      'carnosa',
      'jugosa',
      'gelatinosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'costillas_de_res',
      'costilla_asada',
      'costillas_al_horno',
    ],
  },


  // ====================================================
  // 🥩 SHORT RIB
  // ====================================================

  {
    id: 'short_rib_res',

    nombre: 'Short rib de res',

    aliases: [
      'short rib',
      'short ribs',
      'costilla corta',
      'asado de tira',
    ],

    precioUnitario: 360,

    unidad: 'kg',

    precio: {
      minimo: 270,
      promedio: 360,
      maximo: 550,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'res',

    basico: false,

    tags: [
      'premium',
      'colageno',
      'coccion_lenta',
      'parrilla',
    ],

    cocinas: [
      'estadounidense',
      'coreana',
      'argentina',
      'francesa',
    ],

    tecnicas: [
      'brasear',
      'parrilla',
      'hornear',
      'coccion_lenta',
    ],

    nivel: 'avanzado',

    familias: [
      'res',
      'costillas',
      'cortes_premium',
      'cortes_para_coccion_lenta',
      'proteinas_animales',
    ],

    usos: [
      'platos_gourmet',
      'parrilladas',
      'guisos',
    ],

    roles: [
      'proteina',
      'colageno',
      'sabor_principal',
      'premium',
    ],

    combinaCon: [
      'vino_tinto',
      'demi_glace',
      'ajo',
      'cebolla_blanca',
      'papa',
    ],

    sustitutos: [
      'costilla_res',
      'chambarete_res',
    ],

    sustitutosEconomicos: [
      'costilla_res',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 2,
      amargo: 1,
      umami: 10,
      picante: 0,

      ahumado: 5,
      graso: 9,
      fresco: 1,
      aromatico: 7,
    },

    sabores: [
      'profundo',
      'carnico',
      'umami',
      'graso',
    ],

    texturas: [
      'gelatinosa',
      'muy_tierna',
      'jugosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'short_rib_braseado',
      'short_rib_al_vino_tinto',
      'costilla_coccion_lenta',
    ],
  },


  // ====================================================
  // 🔥 BRISKET
  // ====================================================

  {
    id: 'brisket_res',

    nombre: 'Brisket de res',

    aliases: [
      'brisket',
      'pecho de res',
      'beef brisket',
    ],

    precioUnitario: 270,

    unidad: 'kg',

    precio: {
      minimo: 190,
      promedio: 270,
      maximo: 420,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'res',

    basico: false,

    tags: [
      'ahumado',
      'barbecue',
      'coccion_lenta',
      'colageno',
    ],

    cocinas: [
      'estadounidense',
      'texmex',
      'internacional',
    ],

    tecnicas: [
      'ahumar',
      'hornear',
      'brasear',
      'coccion_lenta',
    ],

    nivel: 'avanzado',

    familias: [
      'res',
      'cortes_de_res',
      'barbecue',
      'cortes_para_coccion_lenta',
      'proteinas_animales',
    ],

    usos: [
      'barbecue',
      'sandwiches',
      'tacos',
      'platos_principales',
    ],

    roles: [
      'proteina',
      'sabor_principal',
      'ahumado',
      'colageno',
    ],

    combinaCon: [
      'pimienta_negra',
      'ajo',
      'salsa_inglesa',
      'mostaza',
      'pan_cemita',
    ],

    sustitutos: [
      'falda_res',
      'diezmillo_res',
    ],

    sustitutosEconomicos: [
      'diezmillo_res',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 2,
      amargo: 1,
      umami: 10,
      picante: 0,

      ahumado: 10,
      graso: 8,
      fresco: 1,
      aromatico: 8,
    },

    sabores: [
      'ahumado',
      'carnico',
      'umami',
      'intenso',
    ],

    texturas: [
      'fibrosa',
      'jugosa',
      'tierna_con_coccion_lenta',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'brisket_ahumado',
      'tacos_de_brisket',
      'sandwich_de_brisket',
    ],
  },


  // ====================================================
  // 🌮 CARNE DESHEBRADA DE RES
  // ====================================================

  {
    id: 'carne_deshebrada_res',

    nombre: 'Carne de res deshebrada',

    aliases: [
      'carne deshebrada',
      'res deshebrada',
      'carne cocida deshebrada',
      'shredded beef',
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

    categoria: 'proteinas',

    subcategoria: 'res',

    basico: false,

    tags: [
      'cocido',
      'listo_para_usar',
      'rapido',
      'aprovechamiento',
      'mexicano',
      'relleno',
    ],

    cocinas: [
      'mexicana',
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
      'res',
      'ingredientes_cocidos',
      'proteinas_animales',
      'aprovechamiento',
    ],

    usos: [
      'tacos',
      'tostadas',
      'enchiladas',
      'quesadillas',
      'guisos',
      'sandwiches',
      'rellenos',
    ],

    roles: [
      'proteina',
      'relleno',
      'ingrediente_listo',
      'base_de_platillo',
    ],

    combinaCon: [
      'tortilla_maiz',
      'cebolla_blanca',
      'jitomate',
      'salsa_verde',
      'salsa_roja',
      'aguacate',
      'queso_oaxaca',
    ],

    sustitutos: [
      'pollo_deshebrado',
      'falda_res',
    ],

    sustitutosEconomicos: [
      'pollo_deshebrado',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 2,
      amargo: 1,
      umami: 9,
      picante: 0,

      ahumado: 1,
      graso: 5,
      fresco: 2,
      aromatico: 4,
    },

    sabores: [
      'carnico',
      'cocido',
      'umami',
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
      'tacos_de_carne_deshebrada',
      'tostadas_de_res',
      'carne_deshebrada_en_salsa',
      'ropa_vieja',
    ],
  },


  // ====================================================
  // 🌵 CECINA DE RES
  // ====================================================

  {
    id: 'cecina_res',

    nombre: 'Cecina de res',

    aliases: [
      'cecina',
      'cecina de res',
      'carne salada de res',
    ],

    precioUnitario: 310,

    unidad: 'kg',

    precio: {
      minimo: 230,
      promedio: 310,
      maximo: 450,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'res',

    basico: false,

    tags: [
      'mexicano',
      'tradicional',
      'salado',
      'parrilla',
      'morelos',
    ],

    cocinas: [
      'mexicana',
      'morelense',
      'centro_mexico',
    ],

    tecnicas: [
      'asar',
      'plancha',
      'secar',
    ],

    nivel: 'intermedio',

    familias: [
      'res',
      'carnes_curadas',
      'carnes_mexicanas',
      'proteinas_animales',
    ],

    usos: [
      'tacos',
      'parrilladas',
      'platos_principales',
    ],

    roles: [
      'proteina',
      'sabor_principal',
      'salinidad',
    ],

    combinaCon: [
      'tortilla_maiz',
      'aguacate',
      'cebolla_blanca',
      'cilantro',
      'limon',
      'salsa_verde',
    ],

    sustitutos: [
      'tasajo',
      'carne_seca_res',
    ],

    sustitutosEconomicos: [
      'bistec_res',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 7,
      amargo: 1,
      umami: 9,
      picante: 0,

      ahumado: 3,
      graso: 4,
      fresco: 1,
      aromatico: 5,
    },

    sabores: [
      'salado',
      'carnico',
      'umami',
      'curado',
    ],

    texturas: [
      'firme',
      'delgada',
      'ligeramente_seca',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'cecina_asada',
      'tacos_de_cecina',
      'cecina_con_nopales',
    ],
  },


  // ====================================================
  // 🥩 CARNE SECA DE RES
  // ====================================================

  {
    id: 'carne_seca_res',

    nombre: 'Carne seca de res',

    aliases: [
      'carne seca',
      'carne seca de res',
      'machaca',
      'dried beef',
    ],

    precioUnitario: 520,

    unidad: 'kg',

    precio: {
      minimo: 380,
      promedio: 520,
      maximo: 750,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'res',

    basico: false,

    tags: [
      'seca',
      'norte_mexico',
      'tradicional',
      'conservada',
      'intensa',
    ],

    cocinas: [
      'mexicana',
      'norte_mexico',
      'sonorense',
      'chihuahuense',
    ],

    tecnicas: [
      'secar',
      'deshebrar',
      'saltear',
      'rehidratar',
    ],

    nivel: 'intermedio',

    familias: [
      'res',
      'carnes_secas',
      'carnes_mexicanas',
      'proteinas_animales',
    ],

    usos: [
      'machaca',
      'huevos',
      'tacos',
      'guisos',
    ],

    roles: [
      'proteina',
      'sabor_intenso',
      'salinidad',
      'umami',
    ],

    combinaCon: [
      'huevo',
      'jitomate',
      'cebolla_blanca',
      'chile_serrano',
      'tortilla_maiz',
    ],

    sustitutos: [
      'cecina_res',
      'tasajo',
    ],

    sustitutosEconomicos: [
      'carne_deshebrada_res',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 8,
      amargo: 1,
      umami: 10,
      picante: 0,

      ahumado: 3,
      graso: 3,
      fresco: 0,
      aromatico: 6,
    },

    sabores: [
      'salado',
      'intenso',
      'curado',
      'umami',
    ],

    texturas: [
      'seca',
      'fibrosa',
      'deshebrable',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_y_seco',

    recetasCompatibles: [
      'machaca_con_huevo',
      'tacos_de_carne_seca',
      'carne_seca_guisada',
    ],
  },


  // ====================================================
  // 🥩 TASAJO
  // ====================================================

  {
    id: 'tasajo',

    nombre: 'Tasajo',

    aliases: [
      'tasajo',
      'tasajo oaxaqueño',
      'carne de res tasajo',
    ],

    precioUnitario: 340,

    unidad: 'kg',

    precio: {
      minimo: 250,
      promedio: 340,
      maximo: 500,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'res',

    basico: false,

    tags: [
      'oaxaca',
      'tradicional',
      'mexicano',
      'parrilla',
      'salado',
    ],

    cocinas: [
      'oaxaqueña',
      'mexicana',
    ],

    tecnicas: [
      'asar',
      'plancha',
      'secar',
    ],

    nivel: 'intermedio',

    familias: [
      'res',
      'carnes_mexicanas',
      'carnes_curadas',
      'proteinas_animales',
    ],

    usos: [
      'tlayudas',
      'tacos',
      'parrilladas',
      'enfrijoladas',
    ],

    roles: [
      'proteina',
      'identidad_regional',
      'sabor_principal',
      'salinidad',
    ],

    combinaCon: [
      'tortilla_maiz',
      'frijoles_conserva',
      'queso_oaxaca',
      'aguacate',
      'cebolla_blanca',
      'salsa_roja',
    ],

    sustitutos: [
      'cecina_res',
      'carne_seca_res',
    ],

    sustitutosEconomicos: [
      'bistec_res',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 7,
      amargo: 1,
      umami: 9,
      picante: 0,

      ahumado: 4,
      graso: 4,
      fresco: 1,
      aromatico: 5,
    },

    sabores: [
      'salado',
      'carnico',
      'asado',
      'umami',
    ],

    texturas: [
      'firme',
      'delgada',
      'fibrosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'tlayuda_con_tasajo',
      'enfrijoladas_con_tasajo',
      'tacos_de_tasajo',
    ],
  },


  // ====================================================
  // 👅 LENGUA DE RES
  // ====================================================

  {
    id: 'lengua_res',

    nombre: 'Lengua de res',

    aliases: [
      'lengua',
      'lengua de res',
      'beef tongue',
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

    subcategoria: 'res',

    basico: false,

    tags: [
      'visceras',
      'tradicional',
      'tacos',
      'coccion_lenta',
      'tierna',
    ],

    cocinas: [
      'mexicana',
      'internacional',
      'japonesa',
    ],

    tecnicas: [
      'hervir',
      'brasear',
      'pelar',
      'rebanar',
      'guisar',
    ],

    nivel: 'avanzado',

    familias: [
      'res',
      'visceras',
      'bovinos',
      'proteinas_animales',
    ],

    usos: [
      'tacos',
      'guisos',
      'platos_principales',
    ],

    roles: [
      'proteina',
      'textura',
      'sabor_principal',
    ],

    combinaCon: [
      'tortilla_maiz',
      'cebolla_blanca',
      'cilantro',
      'salsa_verde',
      'limon',
    ],

    sustitutos: [
      'carne_deshebrada_res',
    ],

    sustitutosEconomicos: [
      'diezmillo_res',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 2,
      amargo: 1,
      umami: 10,
      picante: 0,

      ahumado: 1,
      graso: 8,
      fresco: 1,
      aromatico: 5,
    },

    sabores: [
      'carnico',
      'umami',
      'profundo',
    ],

    texturas: [
      'muy_tierna',
      'carnosa',
      'suave',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'tacos_de_lengua',
      'lengua_en_salsa_verde',
      'lengua_guisada',
    ],
  },


  // ====================================================
  // 🫀 HÍGADO DE RES
  // ====================================================

  {
    id: 'higado_res',

    nombre: 'Hígado de res',

    aliases: [
      'higado',
      'hígado',
      'higado de res',
      'hígado de res',
      'beef liver',
    ],

    precioUnitario: 100,

    unidad: 'kg',

    precio: {
      minimo: 70,
      promedio: 100,
      maximo: 150,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'res',

    basico: false,

    tags: [
      'visceras',
      'economico',
      'mineral',
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
      'plancha',
      'guisar',
    ],

    nivel: 'intermedio',

    familias: [
      'res',
      'visceras',
      'bovinos',
      'proteinas_animales',
    ],

    usos: [
      'guisos',
      'platos_principales',
      'encebollados',
    ],

    roles: [
      'proteina',
      'sabor_intenso',
      'umami',
    ],

    combinaCon: [
      'cebolla_blanca',
      'ajo',
      'pimienta_negra',
      'limon',
      'mantequilla',
    ],

    sustitutos: [
      'higado_pollo',
    ],

    sustitutosEconomicos: [
      'higado_pollo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 2,
      amargo: 4,
      umami: 10,
      picante: 0,

      ahumado: 1,
      graso: 5,
      fresco: 2,
      aromatico: 8,
    },

    sabores: [
      'mineral',
      'intenso',
      'umami',
      'ligeramente_amargo',
    ],

    texturas: [
      'suave',
      'densa',
      'cremosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'higado_encebollado',
      'higado_a_la_mexicana',
      'higado_a_la_plancha',
    ],
  },


  // ====================================================
  // 🦴 TUÉTANO
  // ====================================================

  {
    id: 'tuetano_res',

    nombre: 'Tuétano de res',

    aliases: [
      'tuetano',
      'tuétano',
      'tuetano de res',
      'medula osea',
      'bone marrow',
    ],

    precioUnitario: 170,

    unidad: 'kg',

    precio: {
      minimo: 110,
      promedio: 170,
      maximo: 280,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'res',

    basico: false,

    tags: [
      'graso',
      'premium',
      'umami',
      'hueso',
      'mexicano',
    ],

    cocinas: [
      'mexicana',
      'francesa',
      'internacional',
    ],

    tecnicas: [
      'hornear',
      'asar',
      'parrilla',
      'fundir',
    ],

    nivel: 'avanzado',

    familias: [
      'res',
      'huesos',
      'subproductos_bovinos',
      'proteinas_animales',
    ],

    usos: [
      'tacos',
      'entradas',
      'caldos',
      'platos_gourmet',
    ],

    roles: [
      'grasa',
      'umami',
      'sabor_principal',
      'enriquecedor',
    ],

    combinaCon: [
      'tortilla_maiz',
      'sal_mar',
      'limon',
      'cilantro',
      'ajo',
    ],

    sustitutos: [
      'mantequilla',
    ],

    sustitutosEconomicos: [
      'manteca_cerdo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 2,
      amargo: 0,
      umami: 10,
      picante: 0,

      ahumado: 4,
      graso: 10,
      fresco: 1,
      aromatico: 7,
    },

    sabores: [
      'graso',
      'profundo',
      'umami',
      'carnico',
    ],

    texturas: [
      'cremosa',
      'mantequillosa',
      'fundente',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'tuetanos_asados',
      'tacos_de_tuetano',
      'tuetano_a_la_parrilla',
    ],
  },


  // ====================================================
  // 🐂 COLA DE RES
  // ====================================================

  {
    id: 'cola_res',

    nombre: 'Cola de res',

    aliases: [
      'cola de res',
      'rabo de res',
      'oxtail',
    ],

    precioUnitario: 190,

    unidad: 'kg',

    precio: {
      minimo: 140,
      promedio: 190,
      maximo: 280,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'res',

    basico: false,

    tags: [
      'colageno',
      'coccion_lenta',
      'guiso',
      'tradicional',
      'intenso',
    ],

    cocinas: [
      'mexicana',
      'caribeña',
      'española',
      'internacional',
    ],

    tecnicas: [
      'brasear',
      'cocer',
      'guisar',
      'coccion_lenta',
    ],

    nivel: 'avanzado',

    familias: [
      'res',
      'cortes_con_hueso',
      'cortes_para_coccion_lenta',
      'proteinas_animales',
    ],

    usos: [
      'guisos',
      'caldos',
      'estofados',
    ],

    roles: [
      'proteina',
      'colageno',
      'generador_de_caldo',
      'sabor_profundo',
    ],

    combinaCon: [
      'vino_tinto',
      'jitomate',
      'cebolla_blanca',
      'zanahoria',
      'apio',
    ],

    sustitutos: [
      'chambarete_res',
      'short_rib_res',
    ],

    sustitutosEconomicos: [
      'chambarete_res',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 2,
      amargo: 1,
      umami: 10,
      picante: 0,

      ahumado: 2,
      graso: 8,
      fresco: 1,
      aromatico: 6,
    },

    sabores: [
      'profundo',
      'carnico',
      'umami',
      'intenso',
    ],

    texturas: [
      'gelatinosa',
      'muy_tierna',
      'carnosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'rabo_de_res_guisado',
      'cola_de_res_estofada',
      'caldo_de_res',
    ],
  },

];