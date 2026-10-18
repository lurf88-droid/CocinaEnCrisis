import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const SEMILLAS_OLEAGINOSAS: IngredienteCatalogo[] = [

  // ====================================================
  // 🌰 AJONJOLÍ
  // ====================================================

  {
    id: 'ajonjoli',

    nombre: 'Ajonjolí',

    aliases: [
      'ajonjoli',
      'ajonjolí',
      'sesamo',
      'sésamo',
      'sesame',
    ],

    precioUnitario: 180,

    unidad: 'kg',

    precio: {
      minimo: 120,
      promedio: 180,
      maximo: 280,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

   categoria: 'despensa',

    subcategoria: 'semillas_oleaginosas',

    basico: false,

    tags: [
      'semilla',
      'oleaginosa',
      'aromatica',
      'tostada',
      'asiatica',
      'mexicana',
    ],

    cocinas: [
      'mexicana',
      'japonesa',
      'china',
      'mediterranea',
      'medio_oriente',
    ],

    tecnicas: [
      'tostar',
      'moler',
      'espolvorear',
      'triturar',
    ],

    nivel: 'basico',

    familias: [
      'semillas',
      'oleaginosas',
      'semillas_comestibles',
    ],

    usos: [
      'moles',
      'panaderia',
      'ensaladas',
      'salsas',
      'toppings',
    ],

    roles: [
      'grasa',
      'aroma',
      'textura',
      'topping',
    ],

    combinaCon: [
      'mole_poblano',
      'tahini',
      'pan',
      'arroz_blanco',
      'verduras',
    ],

    sustitutos: [
      'semilla_girasol',
      'pepita_calabaza',
    ],

    sustitutosEconomicos: [
      'semilla_girasol',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 0,
      amargo: 2,
      umami: 4,
      picante: 0,

      ahumado: 3,
      graso: 8,
      fresco: 1,
      aromatico: 7,
    },

    sabores: [
      'tostado',
      'nuez',
      'aromatico',
    ],

    texturas: [
      'crujiente',
      'pequeña',
      'seca',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_y_seco',

    recetasCompatibles: [
      'mole_poblano',
      'pan_con_ajonjoli',
      'ensalada_con_ajonjoli',
    ],
  },


  // ====================================================
  // 🎃 PEPITA DE CALABAZA
  // ====================================================

  {
    id: 'pepita_calabaza',

    nombre: 'Pepita de calabaza',

    aliases: [
      'pepita',
      'pepitas',
      'semilla de calabaza',
      'pepita de calabaza',
      'pumpkin seed',
    ],

    precioUnitario: 230,

    unidad: 'kg',

    precio: {
      minimo: 170,
      promedio: 230,
      maximo: 340,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

categoria: 'despensa',

    subcategoria: 'semillas_oleaginosas',

    basico: false,

    tags: [
      'mexicana',
      'oleaginosa',
      'semilla',
      'verde',
      'tradicional',
    ],

    cocinas: [
      'mexicana',
      'yucateca',
      'oaxaqueña',
      'centro_mexico',
    ],

    tecnicas: [
      'tostar',
      'moler',
      'triturar',
      'licuar',
    ],

    nivel: 'basico',

    familias: [
      'semillas',
      'oleaginosas',
      'semillas_mexicanas',
    ],

    usos: [
      'moles',
      'pipianes',
      'salsas',
      'toppings',
      'panaderia',
    ],

    roles: [
      'grasa',
      'espesante',
      'textura',
      'sabor_principal',
    ],

    combinaCon: [
      'chile_guajillo',
      'tomate_verde',
      'ajo',
      'cebolla_blanca',
      'cilantro',
    ],

    sustitutos: [
      'ajonjoli',
      'semilla_girasol',
    ],

    sustitutosEconomicos: [
      'semilla_girasol',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 0,
      amargo: 2,
      umami: 5,
      picante: 0,

      ahumado: 3,
      graso: 9,
      fresco: 2,
      aromatico: 7,
    },

    sabores: [
      'nuez',
      'tostado',
      'vegetal',
    ],

    texturas: [
      'crujiente',
      'firme',
      'oleosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_y_seco',

    recetasCompatibles: [
      'pipian_verde',
      'mole_verde',
      'salsa_de_pepita',
    ],
  },


  // ====================================================
  // 🌻 SEMILLA DE GIRASOL
  // ====================================================

  {
    id: 'semilla_girasol',

    nombre: 'Semilla de girasol',

    aliases: [
      'semilla de girasol',
      'semillas de girasol',
      'girasol',
      'sunflower seed',
    ],

    precioUnitario: 130,

    unidad: 'kg',

    precio: {
      minimo: 90,
      promedio: 130,
      maximo: 200,
      moneda: 'MXN',
      actualizado: '2026-08',
    },
categoria: 'despensa',
    subcategoria: 'semillas_oleaginosas',

    basico: false,

    tags: [
      'economico',
      'oleaginosa',
      'semilla',
      'versatil',
    ],

    cocinas: [
      'internacional',
      'europea',
      'mediterranea',
    ],

    tecnicas: [
      'tostar',
      'moler',
      'triturar',
      'espolvorear',
    ],

    nivel: 'basico',

    familias: [
      'semillas',
      'oleaginosas',
      'semillas_comestibles',
    ],

    usos: [
      'ensaladas',
      'panaderia',
      'granola',
      'toppings',
      'cremas',
    ],

    roles: [
      'grasa',
      'textura',
      'topping',
      'sustituto_de_nuez',
    ],

    combinaCon: [
      'avena',
      'granola',
      'miel',
      'ensaladas',
      'yogurt_bebible',
    ],

    sustitutos: [
      'pepita_calabaza',
      'ajonjoli',
    ],

    sustitutosEconomicos: [],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 0,
      amargo: 2,
      umami: 3,
      picante: 0,

      ahumado: 2,
      graso: 8,
      fresco: 1,
      aromatico: 5,
    },

    sabores: [
      'nuez',
      'suave',
      'tostado',
    ],

    texturas: [
      'crujiente',
      'firme',
      'seca',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_y_seco',

    recetasCompatibles: [
      'granola_con_semillas',
      'ensalada_con_semillas',
      'pan_con_semillas',
    ],
  },


  // ====================================================
  // 🌱 LINAZA
  // ====================================================

  {
    id: 'linaza',

    nombre: 'Linaza',

    aliases: [
      'linaza',
      'semilla de lino',
      'flaxseed',
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

   categoria: 'despensa',

    subcategoria: 'semillas_oleaginosas',

    basico: false,

    tags: [
      'semilla',
      'oleaginosa',
      'fibra',
      'reposteria',
      'gelificante',
    ],

    cocinas: [
      'internacional',
      'saludable',
      'vegetariana',
    ],

    tecnicas: [
      'moler',
      'hidratar',
      'mezclar',
    ],

    nivel: 'basico',

    familias: [
      'semillas',
      'oleaginosas',
      'semillas_funcionales',
    ],

    usos: [
      'panaderia',
      'licuados',
      'granola',
      'reposteria',
      'sustituto_de_huevo',
    ],

    roles: [
      'grasa',
      'fibra',
      'gelificante',
      'aglutinante',
    ],

    combinaCon: [
      'avena',
      'platano',
      'harina_avena',
      'miel',
      'yogurt_bebible',
    ],

    sustitutos: [
      'chia',
    ],

    sustitutosEconomicos: [],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 0,
      amargo: 2,
      umami: 2,
      picante: 0,

      ahumado: 1,
      graso: 7,
      fresco: 1,
      aromatico: 3,
    },

    sabores: [
      'suave',
      'nuez',
      'terroso',
    ],

    texturas: [
      'pequeña',
      'crujiente',
      'gelatinosa_al_hidratar',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_y_seco',

    recetasCompatibles: [
      'pan_con_linaza',
      'licuado_con_linaza',
      'granola_con_linaza',
    ],
  },


  // ====================================================
  // 🌱 CHÍA
  // ====================================================

  {
    id: 'chia',

    nombre: 'Chía',

    aliases: [
      'chia',
      'chía',
      'semilla de chia',
      'semilla de chía',
      'chia seed',
    ],

    precioUnitario: 150,

    unidad: 'kg',

    precio: {
      minimo: 100,
      promedio: 150,
      maximo: 230,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

   categoria: 'despensa',

    subcategoria: 'semillas_oleaginosas',

    basico: false,

    tags: [
      'mexicana',
      'semilla',
      'oleaginosa',
      'gelificante',
      'bebidas',
    ],

    cocinas: [
      'mexicana',
      'internacional',
      'saludable',
    ],

    tecnicas: [
      'hidratar',
      'mezclar',
      'moler',
    ],

    nivel: 'basico',

    familias: [
      'semillas',
      'oleaginosas',
      'semillas_mexicanas',
      'semillas_funcionales',
    ],

    usos: [
      'agua_fresca',
      'pudines',
      'licuados',
      'reposteria',
      'granola',
    ],

    roles: [
      'gelificante',
      'fibra',
      'textura',
      'aglutinante',
    ],

    combinaCon: [
      'limon',
      'agua',
      'miel',
      'platano',
      'fresa',
    ],

    sustitutos: [
      'linaza',
    ],

    sustitutosEconomicos: [
      'linaza',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 0,
      amargo: 1,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 6,
      fresco: 3,
      aromatico: 2,
    },

    sabores: [
      'neutro',
      'suave',
      'vegetal',
    ],

    texturas: [
      'pequeña',
      'crujiente',
      'gelatinosa_al_hidratar',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_y_seco',

    recetasCompatibles: [
      'agua_de_limon_con_chia',
      'pudin_de_chia',
      'licuado_con_chia',
    ],
  },


  // ====================================================
  // 🌿 SEMILLA DE CÁÑAMO
  // ====================================================

  {
    id: 'semilla_canamo',

    nombre: 'Semilla de cáñamo',

    aliases: [
      'semilla de canamo',
      'semilla de cáñamo',
      'hemp seed',
    ],

    precioUnitario: 420,

    unidad: 'kg',

    precio: {
      minimo: 300,
      promedio: 420,
      maximo: 650,
      moneda: 'MXN',
      actualizado: '2026-08',
    },
categoria: 'despensa',
    subcategoria: 'semillas_oleaginosas',

    basico: false,

    tags: [
      'premium',
      'oleaginosa',
      'semilla',
      'nutty',
    ],

    cocinas: [
      'internacional',
      'saludable',
      'vegetariana',
    ],

    tecnicas: [
      'espolvorear',
      'moler',
      'mezclar',
    ],

    nivel: 'basico',

    familias: [
      'semillas',
      'oleaginosas',
      'semillas_comestibles',
    ],

    usos: [
      'ensaladas',
      'licuados',
      'granola',
      'toppings',
    ],

    roles: [
      'grasa',
      'textura',
      'topping',
    ],

    combinaCon: [
      'avena',
      'granola',
      'yogurt_bebible',
      'platano',
      'miel',
    ],

    sustitutos: [
      'semilla_girasol',
      'pepita_calabaza',
    ],

    sustitutosEconomicos: [
      'semilla_girasol',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 0,
      amargo: 1,
      umami: 3,
      picante: 0,

      ahumado: 1,
      graso: 9,
      fresco: 2,
      aromatico: 5,
    },

    sabores: [
      'nuez',
      'suave',
      'cremoso',
    ],

    texturas: [
      'tierna',
      'oleosa',
      'pequeña',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_y_seco',

    recetasCompatibles: [
      'granola_con_semillas',
      'ensalada_con_semillas',
      'licuado_con_semillas',
    ],
  },


  // ====================================================
  // 🌼 SEMILLA DE AMAPOLA
  // ====================================================

  {
    id: 'semilla_amapola',

    nombre: 'Semilla de amapola',

    aliases: [
      'semilla de amapola',
      'semillas de amapola',
      'poppy seed',
    ],

    precioUnitario: 420,

    unidad: 'kg',

    precio: {
      minimo: 300,
      promedio: 420,
      maximo: 650,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

categoria: 'despensa',

    subcategoria: 'semillas_oleaginosas',

    basico: false,

    tags: [
      'reposteria',
      'semilla',
      'oleaginosa',
      'aromatica',
    ],

    cocinas: [
      'europea',
      'internacional',
      'panaderia',
    ],

    tecnicas: [
      'espolvorear',
      'moler',
      'hornear',
    ],

    nivel: 'basico',

    familias: [
      'semillas',
      'oleaginosas',
      'semillas_para_panaderia',
    ],

    usos: [
      'panaderia',
      'reposteria',
      'toppings',
    ],

    roles: [
      'textura',
      'aroma',
      'topping',
    ],

    combinaCon: [
      'harina_trigo',
      'limon',
      'mantequilla',
      'azucar_blanca',
    ],

    sustitutos: [
      'ajonjoli',
    ],

    sustitutosEconomicos: [
      'ajonjoli',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 0,
      amargo: 2,
      umami: 2,
      picante: 0,

      ahumado: 1,
      graso: 7,
      fresco: 1,
      aromatico: 5,
    },

    sabores: [
      'nuez',
      'ligeramente_amargo',
      'aromatico',
    ],

    texturas: [
      'crujiente',
      'muy_pequeña',
      'seca',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_y_seco',

    recetasCompatibles: [
      'pan_con_semillas',
      'panque_de_limon',
      'galletas_con_amapola',
    ],
  },


  // ====================================================
  // 🌰 PIÑÓN
  // ====================================================

  {
    id: 'pinon',

    nombre: 'Piñón',

    aliases: [
      'pinon',
      'piñon',
      'piñón',
      'piñones',
      'pine nut',
    ],

    precioUnitario: 1200,

    unidad: 'kg',

    precio: {
      minimo: 850,
      promedio: 1200,
      maximo: 1800,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

   categoria: 'despensa',

    subcategoria: 'semillas_oleaginosas',

    basico: false,

    tags: [
      'premium',
      'oleaginosa',
      'mediterranea',
      'gourmet',
    ],

    cocinas: [
      'italiana',
      'mediterranea',
      'española',
      'internacional',
    ],

    tecnicas: [
      'tostar',
      'moler',
      'triturar',
    ],

    nivel: 'intermedio',

    familias: [
      'semillas',
      'oleaginosas',
      'semillas_premium',
    ],

    usos: [
      'pesto',
      'ensaladas',
      'salsas',
      'reposteria',
    ],

    roles: [
      'grasa',
      'textura',
      'sabor_principal',
      'premium',
    ],

    combinaCon: [
      'albahaca_seca',
      'aceite_oliva',
      'ajo',
      'queso',
    ],

    sustitutos: [
      'nuez',
      'almendra',
    ],

    sustitutosEconomicos: [
      'semilla_girasol',
      'cacahuate',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 3,
      acido: 0,
      salado: 0,
      amargo: 1,
      umami: 4,
      picante: 0,

      ahumado: 2,
      graso: 10,
      fresco: 2,
      aromatico: 8,
    },

    sabores: [
      'mantequilloso',
      'nuez',
      'dulce_suave',
    ],

    texturas: [
      'tierna',
      'cremosa',
      'crujiente_al_tostar',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_y_seco',

    recetasCompatibles: [
      'pesto',
      'ensalada_con_pinones',
      'pasta_con_pesto',
    ],
  },


  // ====================================================
  // 🌰 SEMILLA DE MOSTAZA
  // ====================================================

  {
    id: 'semilla_mostaza',

    nombre: 'Semilla de mostaza',

    aliases: [
      'semilla de mostaza',
      'semillas de mostaza',
      'mustard seed',
    ],

    precioUnitario: 190,

    unidad: 'kg',

    precio: {
      minimo: 130,
      promedio: 190,
      maximo: 290,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',
    subcategoria: 'semillas_oleaginosas',

    basico: false,

    tags: [
      'especia',
      'semilla',
      'picante',
      'aromatica',
    ],

    cocinas: [
      'india',
      'europea',
      'internacional',
    ],

    tecnicas: [
      'tostar',
      'moler',
      'infusionar',
    ],

    nivel: 'intermedio',

    familias: [
      'semillas',
      'oleaginosas',
      'especias_en_semilla',
    ],

    usos: [
      'curries',
      'encurtidos',
      'salsas',
      'aderezos',
    ],

    roles: [
      'especia',
      'aroma',
      'picante',
    ],

    combinaCon: [
      'vinagre_blanco',
      'curcuma',
      'ajo',
      'cebolla_blanca',
    ],

    sustitutos: [
      'mostaza',
    ],

    sustitutosEconomicos: [
      'mostaza',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 1,
      salado: 0,
      amargo: 4,
      umami: 1,
      picante: 7,

      ahumado: 2,
      graso: 5,
      fresco: 2,
      aromatico: 8,
    },

    sabores: [
      'picante',
      'amargo',
      'aromatico',
    ],

    texturas: [
      'crujiente',
      'pequeña',
      'seca',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_y_seco',

    recetasCompatibles: [
      'mostaza_casera',
      'encurtidos',
      'curry_con_mostaza',
    ],
  },


  // ====================================================
  // 🌾 SEMILLA DE CILANTRO
  // ====================================================

  {
    id: 'semilla_cilantro',

    nombre: 'Semilla de cilantro',

    aliases: [
      'semilla de cilantro',
      'semillas de cilantro',
      'coriander seed',
    ],

    precioUnitario: 170,

    unidad: 'kg',

    precio: {
      minimo: 110,
      promedio: 170,
      maximo: 260,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'semillas_oleaginosas',

    basico: false,

    tags: [
      'especia',
      'semilla',
      'aromatica',
      'citricos',
    ],

    cocinas: [
      'india',
      'mexicana',
      'medio_oriente',
      'asiatica',
    ],

    tecnicas: [
      'tostar',
      'moler',
      'infusionar',
    ],

    nivel: 'basico',

    familias: [
      'semillas',
      'especias_en_semilla',
    ],

    usos: [
      'curries',
      'adobos',
      'encurtidos',
      'salsas',
    ],

    roles: [
      'especia',
      'aroma',
      'sabor_secundario',
    ],

    combinaCon: [
      'comino',
      'chile_guajillo',
      'ajo',
      'curcuma',
    ],

    sustitutos: [
      'comino',
    ],

    sustitutosEconomicos: [
      'comino',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 3,
      acido: 2,
      salado: 0,
      amargo: 2,
      umami: 1,
      picante: 2,

      ahumado: 2,
      graso: 3,
      fresco: 5,
      aromatico: 9,
    },

    sabores: [
      'citrico',
      'aromatico',
      'terroso',
    ],

    texturas: [
      'seca',
      'crujiente',
      'granulada',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_y_seco',

    recetasCompatibles: [
      'curry',
      'adobo_especiado',
      'encurtidos',
    ],
  },

];