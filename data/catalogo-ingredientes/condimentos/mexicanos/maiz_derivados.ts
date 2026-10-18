import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const MAIZ_DERIVADOS: IngredienteCatalogo[] = [

  // ====================================================
  // 🌮 TORTILLA DE MAÍZ
  // ====================================================

  {
    id: 'tortilla_maiz',

    nombre: 'Tortilla de maíz',

    aliases: [
      'tortilla',
      'tortilla maiz',
      'tortilla de maiz',
      'tortillas',
    ],

    precioUnitario: 24,

    unidad: 'kg',

    pesoPorUnidad: 25,

    precio: {
      minimo: 18,
      promedio: 24,
      maximo: 35,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'tortillas_y_maiz',

    basico: true,

    tags: [
      'mexicano',
      'economico',
      'base',
      'tacos',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
    ],

    tecnicas: [
      'calentar',
      'freir',
      'tostar',
      'hornear',
    ],

    nivel: 'basico',

    familias: [
      'mexicanos',
      'cereales',
      'despensa',
      'maiz',
    ],

    usos: [
      'tacos',
      'quesadillas',
      'enchiladas',
      'chilaquiles',
      'tostadas',
      'garnachas',
    ],

    roles: [
      'base',
      'energia',
      'transportador_de_sabor',
    ],

    combinaCon: [
      'pollo',
      'carne_cerdo',
      'queso',
      'frijol',
      'huevo',
      'chile',
      'aguacate',
    ],

    sustitutos: [
      'tostada_maiz',
      'masa_maiz',
    ],

    sustitutosEconomicos: [
      'pan',
      'arroz',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 2,
      picante: 0,

      ahumado: 1,
      graso: 1,
      fresco: 3,
      aromatico: 4,
    },

    sabores: [
      'maiz',
      'tostado',
      'neutro',
    ],

    texturas: [
      'suave',
      'flexible',
      'crujiente_al_tostar',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado_o_temperatura_ambiente',

    recetasCompatibles: [
      'tacos_al_pastor',
      'tacos_de_pollo',
      'quesadillas',
      'enchiladas',
      'chilaquiles',
      'tostadas',
    ],
  },


  // ====================================================
  // 🌽 MAÍZ POZOLERO
  // ====================================================

  {
    id: 'maiz_pozolero',

    nombre: 'Maíz pozolero',

    aliases: [
      'maiz cacahuazintle',
      'cacahuazintle',
      'maiz para pozole',
    ],

    precioUnitario: 35,

    unidad: 'kg',

    precio: {
      minimo: 25,
      promedio: 35,
      maximo: 60,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'mexicanos',

    basico: true,

    tags: [
      'mexicano',
      'pozole',
      'grano',
      'nixtamal',
    ],

    cocinas: [
      'mexicana',
    ],

    tecnicas: [
      'hervir',
      'nixtamalizar',
      'cocer',
    ],

    nivel: 'basico',

    familias: [
      'granos',
      'mexicanos',
      'maiz',
    ],

    usos: [
      'pozole',
      'guisos',
      'caldos',
    ],

    roles: [
      'energia',
      'volumen',
      'base',
    ],

    combinaCon: [
      'cerdo',
      'pollo',
      'chile_guajillo',
      'lechuga',
      'rabano',
    ],

    sustitutos: [],

    sustitutosEconomicos: [
      'arroz',
      'pasta',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 0,
      amargo: 0,
      umami: 2,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 2,
      aromatico: 1,
    },

    sabores: [
      'neutro',
      'maiz',
    ],

    texturas: [
      'tierna',
      'esponjosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'pozole_rojo',
      'pozole_blanco',
      'pozole_verde',
    ],
  },


  // ====================================================
  // 🌽 TOSTADA DE MAÍZ
  // ====================================================

  {
    id: 'tostada_maiz',

    nombre: 'Tostada de maíz',

    aliases: [
      'tostada',
      'tostadas',
      'tostada mexicana',
      'tostadas de maiz',
    ],

    precioUnitario: 160,

    unidad: 'kg',

    precio: {
      minimo: 120,
      promedio: 160,
      maximo: 220,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'productos_de_maiz',

    basico: true,

    tags: [
      'mexicano',
      'maiz',
      'crujiente',
      'economico',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
    ],

    tecnicas: [
      'tostar',
      'freir',
      'montar',
    ],

    nivel: 'basico',

    familias: [
      'mexicanos',
      'mexico_maiz',
      'maiz',
    ],

    usos: [
      'tostadas',
      'antojitos',
      'botanas',
    ],

    roles: [
      'base',
      'textura',
      'soporte',
    ],

    combinaCon: [
      'frijol',
      'pollo',
      'ceviche',
      'aguacate',
      'salsa',
    ],

    sustitutos: [
      'tortilla_maiz',
    ],

    sustitutosEconomicos: [
      'tortilla_maiz',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 1,
      picante: 0,

      ahumado: 1,
      graso: 2,
      fresco: 0,
      aromatico: 2,
    },

    sabores: [
      'maiz',
      'tostado',
    ],

    texturas: [
      'crujiente',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'tostadas_de_ceviche',
      'tostadas_de_pollo',
      'tostadas_de_frijol',
    ],
  },

];