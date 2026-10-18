import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const ESPECIAS_MEXICANAS: IngredienteCatalogo[] = [

  // ====================================================
  // 🌶 CHILE ANCHO
  // ====================================================

  {
    id: 'chile_ancho',

    nombre: 'Chile ancho',

    aliases: [
      'chile ancho',
      'ancho seco',
      'chile poblano seco',
    ],

    precioUnitario: 280,

    unidad: 'kg',

    pesoPorUnidad: 20,

    precio: {
      minimo: 220,
      promedio: 280,
      maximo: 420,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'especias',

    subcategoria: 'chiles_secos',

    basico: true,

    tags: [
      'mexicano',
      'dulce',
      'frutal',
      'color',
      'adobo',
      'mole',
    ],

    cocinas: [
      'mexicana',
    ],

    tecnicas: [
      'tostar',
      'hidratar',
      'moler',
      'adobar',
      'tatemar',
    ],

    nivel: 'basico',

    familias: [
      'chiles',
      'especias',
      'mexicanos',
    ],

    usos: [
      'moles',
      'adobos',
      'salsas',
      'guisos',
      'caldos',
    ],

    roles: [
      'sabor',
      'color',
      'aroma',
      'profundidad',
      'picante_suave',
    ],

    combinaCon: [
      'pollo',
      'cerdo',
      'res',
      'ajo',
      'cebolla',
      'jitomate',
      'vinagre',
      'canela',
    ],

    sustitutos: [
      'chile_guajillo',
      'chile_pasilla',
      'chile_mulato',
    ],

    sustitutosEconomicos: [
      'chile_guajillo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 4,
      acido: 1,
      salado: 0,
      amargo: 1,
      umami: 4,
      picante: 3,

      ahumado: 3,
      graso: 0,
      fresco: 1,
      aromatico: 8,
    },

    sabores: [
      'frutal',
      'dulce',
      'terroso',
      'ligeramente_ahumado',
    ],

    texturas: [
      'seca',
      'correosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'mole poblano',
      'adobo mexicano',
      'salsa de chile ancho',
      'carne enchilada',
      'guisos mexicanos',
    ],
  },


  // ====================================================
  // 🌶 CHILE GUAJILLO
  // ====================================================

  {
    id: 'chile_guajillo',

    nombre: 'Chile guajillo',

    aliases: [
      'guajillo',
      'chile guajillo',
    ],

    precioUnitario: 220,

    unidad: 'kg',

    pesoPorUnidad: 8,

    precio: {
      minimo: 160,
      promedio: 220,
      maximo: 350,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'especias',

    subcategoria: 'chiles_secos',

    basico: true,

    tags: [
      'mexicano',
      'color',
      'aromatico',
      'adobo',
      'salsa',
      'pozole',
    ],

    cocinas: [
      'mexicana',
    ],

    tecnicas: [
      'tostar',
      'hidratar',
      'moler',
      'adobar',
      'salsa',
    ],

    nivel: 'basico',

    familias: [
      'chiles',
      'especias',
      'mexicanos',
    ],

    usos: [
      'adobos',
      'salsas',
      'pozole',
      'caldos',
      'guisos',
      'marinados',
    ],

    roles: [
      'color',
      'aroma',
      'sabor',
      'picante_moderado',
    ],

    combinaCon: [
      'pollo',
      'cerdo',
      'res',
      'ajo',
      'cebolla',
      'jitomate',
      'vinagre',
      'comino',
    ],

    sustitutos: [
      'chile_ancho',
      'chile_pasilla',
    ],

    sustitutosEconomicos: [
      'chile_ancho',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 3,
      acido: 1,
      salado: 0,
      amargo: 1,
      umami: 4,
      picante: 4,

      ahumado: 2,
      graso: 0,
      fresco: 1,
      aromatico: 8,
    },

    sabores: [
      'frutal',
      'terroso',
      'ligeramente_dulce',
      'picante_moderado',
    ],

    texturas: [
      'seca',
      'lisa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'pozole rojo',
      'adobo de guajillo',
      'salsa roja',
      'carne enchilada',
      'caldo rojo',
    ],
  },


  // ====================================================
  // 🌶 CHILE PASILLA
  // ====================================================

  {
    id: 'chile_pasilla',

    nombre: 'Chile pasilla',

    aliases: [
      'pasilla',
      'chile pasilla',
      'pasilla seco',
    ],

    precioUnitario: 260,

    unidad: 'kg',

    pesoPorUnidad: 15,

    precio: {
      minimo: 180,
      promedio: 260,
      maximo: 420,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'especias',

    subcategoria: 'chiles_secos',

    basico: true,

    tags: [
      'mexicano',
      'profundo',
      'terroso',
      'mole',
      'salsa',
    ],

    cocinas: [
      'mexicana',
    ],

    tecnicas: [
      'tostar',
      'hidratar',
      'moler',
      'adobar',
    ],

    nivel: 'intermedio',

    familias: [
      'chiles',
      'especias',
      'mexicanos',
    ],

    usos: [
      'moles',
      'salsas',
      'adobos',
      'caldos',
      'guisos',
    ],

    roles: [
      'profundidad',
      'aroma',
      'sabor',
      'color',
    ],

    combinaCon: [
      'res',
      'pollo',
      'cerdo',
      'jitomate',
      'ajo',
      'cebolla',
      'chocolate',
      'especias',
    ],

    sustitutos: [
      'chile_ancho',
      'chile_guajillo',
      'chile_mulato',
    ],

    sustitutosEconomicos: [
      'chile_guajillo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 0,
      amargo: 2,
      umami: 5,
      picante: 3,

      ahumado: 4,
      graso: 0,
      fresco: 1,
      aromatico: 8,
    },

    sabores: [
      'terroso',
      'profundo',
      'ligeramente_ahumado',
      'frutal',
    ],

    texturas: [
      'seca',
      'arrugada',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'mole',
      'salsa de chile pasilla',
      'adobo',
      'guisos de carne',
      'caldos mexicanos',
    ],
  },


  // ====================================================
  // 🌶 CHILE MULATO
  // ====================================================

  {
    id: 'chile_mulato',

    nombre: 'Chile mulato',

    aliases: [
      'mulato',
      'chile mulato',
    ],

    precioUnitario: 300,

    unidad: 'kg',

    pesoPorUnidad: 20,

    precio: {
      minimo: 220,
      promedio: 300,
      maximo: 480,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'especias',

    subcategoria: 'chiles_secos',

    basico: false,

    tags: [
      'mexicano',
      'mole',
      'complejo',
      'dulce',
      'profundo',
    ],

    cocinas: [
      'mexicana',
    ],

    tecnicas: [
      'tostar',
      'hidratar',
      'moler',
      'mole',
    ],

    nivel: 'avanzado',

    familias: [
      'chiles',
      'especias',
      'mexicanos',
    ],

    usos: [
      'moles',
      'adobos',
      'salsas_complejas',
      'guisos',
    ],

    roles: [
      'profundidad',
      'color',
      'aroma',
      'complejidad',
    ],

    combinaCon: [
      'chile_ancho',
      'chile_pasilla',
      'chocolate',
      'canela',
      'clavo',
      'ajo',
      'cebolla',
      'pollo',
    ],

    sustitutos: [
      'chile_ancho',
      'chile_pasilla',
    ],

    sustitutosEconomicos: [
      'chile_ancho',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 5,
      acido: 0,
      salado: 0,
      amargo: 2,
      umami: 4,
      picante: 2,

      ahumado: 3,
      graso: 0,
      fresco: 1,
      aromatico: 9,
    },

    sabores: [
      'dulce',
      'chocolate',
      'terroso',
      'frutal',
    ],

    texturas: [
      'seca',
      'carnosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'mole poblano',
      'mole negro',
      'adobos complejos',
      'salsas tradicionales',
    ],
  },


  // ====================================================
  // 🌶 CHILE MORITA
  // ====================================================

  {
    id: 'chile_morita',

    nombre: 'Chile morita',

    aliases: [
      'morita',
      'chile morita',
    ],

    precioUnitario: 300,

    unidad: 'kg',

    pesoPorUnidad: 8,

    precio: {
      minimo: 220,
      promedio: 300,
      maximo: 480,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'especias',

    subcategoria: 'chiles_secos',

    basico: false,

    tags: [
      'mexicano',
      'ahumado',
      'frutal',
      'picante',
    ],

    cocinas: [
      'mexicana',
    ],

    tecnicas: [
      'tostar',
      'hidratar',
      'moler',
      'salsa',
      'adobo',
    ],

    nivel: 'intermedio',

    familias: [
      'chiles',
      'especias',
      'mexicanos',
      'chiles_ahumados',
    ],

    usos: [
      'salsas',
      'adobos',
      'marinados',
      'guisos',
    ],

    roles: [
      'ahumado',
      'picante',
      'aroma',
      'profundidad',
    ],

    combinaCon: [
      'jitomate',
      'ajo',
      'cebolla',
      'pollo',
      'cerdo',
      'cacahuate',
      'vinagre',
    ],

    sustitutos: [
      'chile_chipotle_seco',
      'chile_arbol',
    ],

    sustitutosEconomicos: [
      'chile_arbol',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 3,
      acido: 1,
      salado: 0,
      amargo: 1,
      umami: 5,
      picante: 7,

      ahumado: 8,
      graso: 0,
      fresco: 1,
      aromatico: 9,
    },

    sabores: [
      'ahumado',
      'frutal',
      'picante',
      'ligeramente_dulce',
    ],

    texturas: [
      'seca',
      'pequena',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'salsa morita',
      'adobo morita',
      'salsa de cacahuate y morita',
      'guisos mexicanos',
    ],
  },


  // ====================================================
  // 🌶 CHILE CASCABEL
  // ====================================================

  {
    id: 'chile_cascabel',

    nombre: 'Chile cascabel',

    aliases: [
      'cascabel',
      'chile cascabel',
    ],

    precioUnitario: 280,

    unidad: 'kg',

    pesoPorUnidad: 10,

    precio: {
      minimo: 200,
      promedio: 280,
      maximo: 450,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'especias',

    subcategoria: 'chiles_secos',

    basico: false,

    tags: [
      'mexicano',
      'nuez',
      'aroma',
      'salsa',
      'terroso',
    ],

    cocinas: [
      'mexicana',
    ],

    tecnicas: [
      'tostar',
      'hidratar',
      'moler',
      'salsa',
    ],

    nivel: 'intermedio',

    familias: [
      'chiles',
      'especias',
      'mexicanos',
    ],

    usos: [
      'salsas',
      'adobos',
      'guisos',
      'caldos',
    ],

    roles: [
      'aroma',
      'sabor',
      'profundidad',
      'picante_moderado',
    ],

    combinaCon: [
      'jitomate',
      'ajo',
      'cebolla',
      'cacahuate',
      'pollo',
      'cerdo',
    ],

    sustitutos: [
      'chile_guajillo',
      'chile_ancho',
    ],

    sustitutosEconomicos: [
      'chile_guajillo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 3,
      acido: 0,
      salado: 0,
      amargo: 1,
      umami: 4,
      picante: 4,

      ahumado: 2,
      graso: 0,
      fresco: 1,
      aromatico: 8,
    },

    sabores: [
      'nuez',
      'terroso',
      'ligeramente_dulce',
      'frutal',
    ],

    texturas: [
      'seca',
      'redonda',
      'cascara_firme',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'salsa de chile cascabel',
      'adobos',
      'guisos mexicanos',
      'salsas con cacahuate',
    ],
  },


  // ====================================================
  // 🌶 CHILE DE ÁRBOL
  // ====================================================

  {
    id: 'chile_arbol',

    nombre: 'Chile de árbol',

    aliases: [
      'arbol',
      'chile de arbol',
      'chile árbol',
    ],

    precioUnitario: 250,

    unidad: 'kg',

    pesoPorUnidad: 2,

    precio: {
      minimo: 180,
      promedio: 250,
      maximo: 400,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'especias',

    subcategoria: 'chiles_secos',

    basico: true,

    tags: [
      'mexicano',
      'muy_picante',
      'salsa',
      'intenso',
    ],

    cocinas: [
      'mexicana',
    ],

    tecnicas: [
      'tostar',
      'moler',
      'infusionar',
      'salsa',
    ],

    nivel: 'basico',

    familias: [
      'chiles',
      'especias',
      'mexicanos',
    ],

    usos: [
      'salsas',
      'aceites_picantes',
      'adobos',
      'caldos',
      'sazonadores',
    ],

    roles: [
      'picante',
      'intensidad',
      'aroma',
      'calor',
    ],

    combinaCon: [
      'ajo',
      'cebolla',
      'jitomate',
      'vinagre',
      'limon',
      'cacahuate',
      'ajonjoli',
    ],

    sustitutos: [
      'chile_piquin',
      'chile_cayena',
    ],

    sustitutosEconomicos: [
      'chile_seco_molido',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 0,
      acido: 0,
      salado: 0,
      amargo: 1,
      umami: 3,
      picante: 10,

      ahumado: 2,
      graso: 0,
      fresco: 1,
      aromatico: 7,
    },

    sabores: [
      'muy_picante',
      'seco',
      'intenso',
      'ligeramente_terroso',
    ],

    texturas: [
      'seca',
      'delgada',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'salsa de chile de árbol',
      'salsa macha',
      'aceite picante',
      'salsa taquera',
      'caldos picantes',
    ],
  },


  // ====================================================
  // 🌶 CHILE PIQUÍN
  // ====================================================

  {
    id: 'chile_piquin',

    nombre: 'Chile piquín',

    aliases: [
      'piquin',
      'piquín',
      'chile piquin',
    ],

    precioUnitario: 500,

    unidad: 'kg',

    pesoPorUnidad: 0.5,

    precio: {
      minimo: 350,
      promedio: 500,
      maximo: 800,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'especias',

    subcategoria: 'chiles_secos',

    basico: false,

    tags: [
      'mexicano',
      'intenso',
      'muy_picante',
      'sazonador',
    ],

    cocinas: [
      'mexicana',
    ],

    tecnicas: [
      'secar',
      'moler',
      'sazonar',
      'infusionar',
    ],

    nivel: 'intermedio',

    familias: [
      'chiles',
      'especias',
      'mexicanos',
    ],

    usos: [
      'sazonadores',
      'frutas',
      'botanas',
      'salsas',
      'aceites_picantes',
    ],

    roles: [
      'picante',
      'intensidad',
      'aroma',
      'sazonador',
    ],

    combinaCon: [
      'limon',
      'sal',
      'frutas',
      'pepino',
      'jicama',
      'cacahuate',
    ],

    sustitutos: [
      'chile_arbol',
      'chile_cayena',
    ],

    sustitutosEconomicos: [
      'chile_arbol',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 0,
      acido: 1,
      salado: 0,
      amargo: 1,
      umami: 2,
      picante: 10,

      ahumado: 1,
      graso: 0,
      fresco: 2,
      aromatico: 8,
    },

    sabores: [
      'muy_picante',
      'frutal',
      'intenso',
    ],

    texturas: [
      'pequena',
      'seca',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'chile piquin con fruta',
      'sazonadores mexicanos',
      'salsas picantes',
      'botanas mexicanas',
    ],
  },


  // ====================================================
  // 🌶 CHILE HABANERO SECO
  // ====================================================

  {
    id: 'chile_habanero_seco',

    nombre: 'Chile habanero seco',

    aliases: [
      'habanero seco',
      'chile habanero deshidratado',
    ],

    precioUnitario: 600,

    unidad: 'kg',

    pesoPorUnidad: 5,

    precio: {
      minimo: 420,
      promedio: 600,
      maximo: 900,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'especias',

    subcategoria: 'chiles_secos',

    basico: false,

    tags: [
      'yucateco',
      'muy_picante',
      'aromatico',
      'frutal',
    ],

    cocinas: [
      'mexicana',
      'yucateca',
      'caribeña',
    ],

    tecnicas: [
      'secar',
      'moler',
      'hidratar',
      'salsa',
      'adobo',
    ],

    nivel: 'avanzado',

    familias: [
      'chiles',
      'especias',
      'mexicanos',
    ],

    usos: [
      'salsas',
      'adobos',
      'marinados',
      'sazonadores',
      'aceites_picantes',
    ],

    roles: [
      'picante_extremo',
      'aroma',
      'frutal',
      'intensidad',
    ],

    combinaCon: [
      'cebolla_morada',
      'limon',
      'naranja',
      'ajo',
      'pollo',
      'cerdo',
      'pescado',
    ],

    sustitutos: [
      'chile_habanero',
      'chile_piquin',
      'chile_arbol',
    ],

    sustitutosEconomicos: [
      'chile_arbol',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 1,
      salado: 0,
      amargo: 1,
      umami: 2,
      picante: 10,

      ahumado: 1,
      graso: 0,
      fresco: 2,
      aromatico: 10,
    },

    sabores: [
      'frutal',
      'floral',
      'muy_picante',
      'intenso',
    ],

    texturas: [
      'seca',
      'quebradiza',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'salsa de habanero',
      'adobo yucateco',
      'sazonador de habanero',
      'marinado picante',
      'salsa para mariscos',
    ],
  },


  // ====================================================
  // 🌶 CHILE CHILHUACLE
  // ====================================================

  {
    id: 'chile_chilhuacle',

    nombre: 'Chile chilhuacle',

    aliases: [
      'chilhuacle',
      'chile chilhuacle',
      'chilhuacle oaxaqueño',
    ],

    precioUnitario: 900,

    unidad: 'kg',

    pesoPorUnidad: 15,

    precio: {
      minimo: 650,
      promedio: 900,
      maximo: 1400,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'especias',

    subcategoria: 'chiles_secos',

    basico: false,

    tags: [
      'oaxaca',
      'gourmet',
      'mole',
      'tradicional',
      'complejo',
    ],

    cocinas: [
      'mexicana',
      'oaxaqueña',
    ],

    tecnicas: [
      'tostar',
      'hidratar',
      'moler',
      'mole',
    ],

    nivel: 'avanzado',

    familias: [
      'chiles',
      'especias',
      'mexicanos',
      'ingredientes_tradicionales',
    ],

    usos: [
      'moles',
      'adobos',
      'salsas_tradicionales',
      'guisos_especiales',
    ],

    roles: [
      'profundidad',
      'aroma',
      'color',
      'complejidad',
      'identidad',
    ],

    combinaCon: [
      'chocolate',
      'ajo',
      'cebolla',
      'jitomate',
      'canela',
      'clavo',
      'pollo',
      'cerdo',
    ],

    sustitutos: [
      'chile_mulato',
      'chile_ancho',
      'chile_pasilla',
    ],

    sustitutosEconomicos: [
      'chile_mulato',
      'chile_ancho',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 4,
      acido: 1,
      salado: 0,
      amargo: 2,
      umami: 6,
      picante: 4,

      ahumado: 3,
      graso: 0,
      fresco: 1,
      aromatico: 10,
    },

    sabores: [
      'complejo',
      'frutal',
      'terroso',
      'dulce',
      'profundo',
    ],

    texturas: [
      'seca',
      'carnosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'mole negro oaxaqueño',
      'moles tradicionales',
      'adobos oaxaqueños',
      'salsas complejas',
    ],
  },

];