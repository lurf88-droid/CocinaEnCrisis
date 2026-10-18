import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const CHILES: IngredienteCatalogo[] = [

  // ====================================================
  // 🌶 CHILE EN POLVO
  // ====================================================

  {
    id: 'chile_polvo',

    nombre: 'Chile en polvo',

    aliases: [
      'chile molido',
      'polvo de chile',
    ],

    precioUnitario: 250,

    unidad: 'kg',

    precio: {
      minimo: 150,
      promedio: 250,
      maximo: 450,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'condimentos',

    subcategoria: 'chiles',

    basico: true,

    tags: [
      'mexicano',
      'picante',
      'aromatico',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
    ],

    tecnicas: [
      'sazonar',
      'adobar',
      'mezclar',
    ],

    nivel: 'basico',

    familias: [
      'chiles',
      'especias',
    ],

    usos: [
      'tacos',
      'salsas',
      'adobos',
      'guisos',
    ],

    roles: [
      'picante',
      'identidad',
      'aroma',
    ],

    combinaCon: [
      'limon',
      'ajo',
      'comino',
      'carne',
    ],

    sustitutos: [
      'chile_seco',
      'paprika',
    ],

    sustitutosEconomicos: [
      'chile_fresco',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 1,
      salado: 0,
      amargo: 2,
      umami: 2,
      picante: 8,

      ahumado: 3,
      graso: 0,
      fresco: 3,
      aromatico: 8,
    },

    sabores: [
      'picante',
      'terroso',
      'ahumado',
    ],

    texturas: [
      'polvo',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'adobos',
      'tacos',
      'salsas mexicanas',
      'carnes sazonadas',
    ],
  },


  // ====================================================
  // 🌶 CHILE SECO TRITURADO
  // ====================================================

  {
    id: 'chile_seco_triturado',

    nombre: 'Chile seco triturado',

    aliases: [
      'hojuelas de chile',
      'chile flakes',
      'pepper flakes',
    ],

    precioUnitario: 300,

    unidad: 'kg',

    precio: {
      minimo: 200,
      promedio: 300,
      maximo: 550,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'condimentos',

    subcategoria: 'chiles',

    basico: false,

    tags: [
      'picante',
      'italiano',
      'mexicano',
      'aromatico',
    ],

    cocinas: [
      'italiana',
      'mexicana',
      'asiatica',
    ],

    tecnicas: [
      'terminar',
      'infusionar',
    ],

    nivel: 'basico',

    familias: [
      'chiles',
      'especias',
    ],

    usos: [
      'pizzas',
      'pastas',
      'salsas',
      'aceites',
    ],

    roles: [
      'picante',
      'aroma',
      'terminado',
    ],

    combinaCon: [
      'aceite_oliva',
      'tomate',
      'ajo',
      'pasta',
    ],

    sustitutos: [
      'chile_polvo',
    ],

    sustitutosEconomicos: [
      'chile_fresco',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 0,
      amargo: 2,
      umami: 1,
      picante: 9,

      ahumado: 3,
      graso: 0,
      fresco: 2,
      aromatico: 8,
    },

    sabores: [
      'picante',
      'ahumado',
    ],

    texturas: [
      'escamas',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'pasta arrabbiata',
      'pizza picante',
      'aceite enchilado',
    ],
  },


  // ====================================================
  // 🌶 CHIPOTLE SECO
  // ====================================================

  {
    id: 'chile_chipotle_seco',

    nombre: 'Chile chipotle',

    aliases: [
      'chipotle seco',
      'chile chipotle seco',
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

    categoria: 'condimentos',

    subcategoria: 'chiles_procesados',

    basico: true,

    tags: [
      'picante',
      'ahumado',
      'mexicano',
      'adobado',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
    ],

    tecnicas: [
      'adobar',
      'moler',
      'sazonar',
      'ahumar',
    ],

    nivel: 'basico',

    familias: [
      'chiles',
      'condimentos_mexicanos',
      'aromaticos',
    ],

    usos: [
      'salsas',
      'tacos',
      'guisos',
      'adobos',
    ],

    roles: [
      'picante',
      'aroma',
      'ahumado',
      'identidad',
    ],

    combinaCon: [
      'tomate',
      'ajo',
      'cebolla',
      'carne',
      'pollo',
    ],

    sustitutos: [
      'chile_morita',
      'chile_meco',
    ],

    sustitutosEconomicos: [
      'chile_seco',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 2,
      salado: 2,
      amargo: 1,
      umami: 5,
      picante: 8,

      ahumado: 10,
      graso: 2,
      fresco: 1,
      aromatico: 9,
    },

    sabores: [
      'ahumado',
      'picante',
      'intenso',
    ],

    texturas: [
      'seca',
      'fibrosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'tinga de pollo',
      'salsa chipotle',
      'adobo',
      'tacos al chipotle',
    ],
  },


  // ====================================================
  // 🌶 CHILE SIMOJOVEL
  // ====================================================

  {
    id: 'chile_simojovel',

    nombre: 'Chile Simojovel',

    aliases: [
      'chile simojovel',
      'chile de simojovel',
      'chilito de simojovel',
      'chilitos de simojovel',
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

    categoria: 'condimentos',

    subcategoria: 'chiles_secos',

    basico: false,

    tags: [
      'chile',
      'chile_seco',
      'mexicano',
      'chiapas',
      'simojovel',
      'tradicional',
      'regional',
    ],

    cocinas: [
      'mexicana',
      'chiapaneca',
    ],

    tecnicas: [
      'freir',
      'tostar',
      'moler',
      'guisar',
    ],

    nivel: 'intermedio',

    familias: [
      'chiles',
      'chiles_secos',
      'ingredientes_regionales',
    ],

    usos: [
      'tamales',
      'recados',
      'salsas',
      'guisos',
    ],

    roles: [
      'picante',
      'aromatico',
      'sabor',
      'identidad_regional',
    ],

    combinaCon: [
      'masa_maiz',
      'carne_cerdo',
      'costilla_cerdo',
      'jitomate',
      'tomate_verde',
      'comino',
      'oregano',
      'tomillo',
    ],

    sustitutos: [
      'chile_ancho',
      'chile_guajillo',
    ],

    sustitutosEconomicos: [
      'chile_guajillo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 0,
      amargo: 2,
      umami: 1,
      picante: 7,

      ahumado: 2,
      graso: 0,
      fresco: 0,
      aromatico: 5,
    },

    sabores: [
      'picante',
      'seco',
      'terroso',
      'aromatico',
    ],

    texturas: [
      'seco',
      'crujiente_frito',
      'suave_hidratado',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'seco_en_recipiente_hermetico',

    recetasCompatibles: [
      'tamal-bola-chiapaneco',
    ],
  },

];