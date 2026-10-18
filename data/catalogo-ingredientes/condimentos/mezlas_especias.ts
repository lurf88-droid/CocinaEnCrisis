import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const CONDIMENTOS: IngredienteCatalogo[] = [

  // ====================================================
  // 🇮🇳 GARAM MASALA
  // ====================================================

  {
    id: 'garam_masala',

    nombre: 'Garam masala',

    aliases: [
      'garam masala',
      'mezcla india de especias',
    ],

    precioUnitario: 600,

    unidad: 'kg',

    precio: {
      minimo: 400,
      promedio: 600,
      maximo: 900,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'condimentos',

    subcategoria: 'mezclas_especias',

    basico: false,

    tags: [
      'indio',
      'aromatico',
      'especiado',
      'profundo',
    ],

    cocinas: [
      'india',
      'sudasiatica',
      'internacional',
    ],

    tecnicas: [
      'tostar',
      'sazonar',
      'infusionar',
    ],

    nivel: 'intermedio',

    familias: [
      'especias',
      'mezclas',
    ],

    usos: [
      'currys',
      'arroces',
      'guisos',
      'vegetales',
    ],

    roles: [
      'aroma',
      'complejidad',
      'identidad',
    ],

    combinaCon: [
      'pollo',
      'garbanzo',
      'lentejas',
      'arroz',
      'leche_coco',
    ],

    sustitutos: [
      'curry_polvo',
    ],

    sustitutosEconomicos: [
      'comino',
      'curcuma',
      'canela',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 3,
      acido: 0,
      salado: 0,
      amargo: 2,
      umami: 3,
      picante: 3,

      ahumado: 1,
      graso: 0,
      fresco: 2,
      aromatico: 10,
    },

    sabores: [
      'calido',
      'especiado',
      'aromatico',
    ],

    texturas: [
      'polvo_fino',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'pollo tikka',
      'curry vegetal',
      'arroz especiado',
      'guisos indios',
    ],
  },


  // ====================================================
  // 🇨🇳 CINCO ESPECIAS CHINAS
  // ====================================================

  {
    id: 'cinco_especias_chinas',

    nombre: 'Cinco especias chinas',

    aliases: [
      'five spice',
      'chinese five spice',
      'polvo cinco especias',
    ],

    precioUnitario: 700,

    unidad: 'kg',

    precio: {
      minimo: 450,
      promedio: 700,
      maximo: 1000,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'condimentos',

    subcategoria: 'mezclas_especias',

    basico: false,

    tags: [
      'chino',
      'aromatico',
      'complejo',
    ],

    cocinas: [
      'china',
      'asiatica',
    ],

    tecnicas: [
      'sazonar',
      'marinar',
    ],

    nivel: 'intermedio',

    familias: [
      'especias',
      'mezclas',
    ],

    usos: [
      'carnes',
      'wok',
      'marinados',
    ],

    roles: [
      'aroma',
      'profundidad',
      'identidad',
    ],

    combinaCon: [
      'cerdo',
      'pato',
      'pollo',
      'salsa_soya',
    ],

    sustitutos: [
      'garam_masala',
    ],

    sustitutosEconomicos: [
      'anis',
      'canela',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 3,
      acido: 0,
      salado: 0,
      amargo: 2,
      umami: 3,
      picante: 2,

      ahumado: 2,
      graso: 0,
      fresco: 1,
      aromatico: 10,
    },

    sabores: [
      'anisado',
      'dulce',
      'calido',
    ],

    texturas: [
      'polvo_fino',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'cerdo chino',
      'wok de verduras',
      'marinados asiaticos',
    ],
  },


  // ====================================================
  // 🇫🇷 HIERBAS PROVENZALES
  // ====================================================

  {
    id: 'hierbas_provenzales',

    nombre: 'Hierbas provenzales',

    aliases: [
      'herbes de provence',
      'hierbas de provenza',
      'mezcla mediterranea',
    ],

    precioUnitario: 500,

    unidad: 'kg',

    precio: {
      minimo: 300,
      promedio: 500,
      maximo: 800,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'condimentos',

    subcategoria: 'mezclas_especias',

    basico: false,

    tags: [
      'frances',
      'mediterraneo',
      'herbal',
    ],

    cocinas: [
      'francesa',
      'mediterranea',
    ],

    tecnicas: [
      'sazonar',
      'infusionar',
    ],

    nivel: 'basico',

    familias: [
      'hierbas',
      'mezclas',
      'aromaticos',
    ],

    usos: [
      'pollo',
      'vegetales',
      'salsas',
      'pan',
    ],

    roles: [
      'aroma',
      'identidad',
      'frescura',
    ],

    combinaCon: [
      'tomate',
      'queso',
      'aceite_oliva',
      'pollo',
    ],

    sustitutos: [
      'oregano_seco',
      'tomillo',
      'romero',
    ],

    sustitutosEconomicos: [
      'oregano_seco',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 0,
      amargo: 2,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 6,
      aromatico: 10,
    },

    sabores: [
      'herbal',
      'floral',
      'mediterraneo',
    ],

    texturas: [
      'hojas_secas',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'pollo mediterraneo',
      'vegetales asados',
      'salsas francesas',
    ],
  },


  // ====================================================
  // 🌿 ZA'ATAR
  // ====================================================

  {
    id: 'zaatar',

    nombre: 'Za’atar',

    aliases: [
      'zaatar',
      'zatar',
      "za'atar",
      'mezcla arabe de especias',
    ],

    precioUnitario: 700,

    unidad: 'kg',

    precio: {
      minimo: 450,
      promedio: 700,
      maximo: 1000,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'condimentos',

    subcategoria: 'mezclas_especias',

    basico: false,

    tags: [
      'medio_oriente',
      'herbal',
      'tostado',
      'aromatico',
    ],

    cocinas: [
      'arabe',
      'libanesa',
      'mediterranea',
    ],

    tecnicas: [
      'sazonar',
      'tostar',
      'terminar',
    ],

    nivel: 'intermedio',

    familias: [
      'hierbas',
      'especias',
      'semillas',
      'mezclas',
    ],

    usos: [
      'pan',
      'vegetales',
      'quesos',
      'aderezos',
    ],

    roles: [
      'aroma',
      'textura',
      'identidad',
    ],

    combinaCon: [
      'aceite_oliva',
      'pan_pita',
      'queso',
      'vegetales',
      'hummus',
    ],

    sustitutos: [
      'hierbas_provenzales',
    ],

    sustitutosEconomicos: [
      'oregano_seco',
      'ajonjoli',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 3,
      salado: 1,
      amargo: 2,
      umami: 2,
      picante: 0,

      ahumado: 1,
      graso: 2,
      fresco: 5,
      aromatico: 10,
    },

    sabores: [
      'herbal',
      'citrico',
      'tostado',
    ],

    texturas: [
      'polvo',
      'semillas',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'hummus',
      'pan pita',
      'vegetales asados',
      'aderezos mediterraneos',
    ],
  },


  // ====================================================
  // 🇲🇽 SAZONADOR MEXICANO
  // ====================================================

  {
    id: 'sazonador_mexicano',

    nombre: 'Sazonador mexicano',

    aliases: [
      'mezcla mexicana',
      'sazonador tacos',
      'sazonador para tacos',
      'mezcla para carne',
    ],

    precioUnitario: 300,

    unidad: 'kg',

    precio: {
      minimo: 180,
      promedio: 300,
      maximo: 500,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'condimentos',

    subcategoria: 'mezclas_especias',

    basico: true,

    tags: [
      'mexicano',
      'picante',
      'adobo',
      'tacos',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
    ],

    tecnicas: [
      'sazonar',
      'adobar',
      'macerear',
    ],

    nivel: 'basico',

    familias: [
      'chiles',
      'especias',
      'mezclas',
      'condimentos_mexicanos',
    ],

    usos: [
      'tacos',
      'carnes',
      'pollo',
      'guisos',
    ],

    roles: [
      'identidad',
      'picante',
      'aroma',
    ],

    combinaCon: [
      'carne',
      'pollo',
      'frijoles',
      'verduras',
      'limon',
    ],

    sustitutos: [
      'chile_polvo',
      'comino',
      'ajo_polvo',
    ],

    sustitutosEconomicos: [
      'chile_seco',
      'ajo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 1,
      salado: 2,
      amargo: 1,
      umami: 3,
      picante: 7,

      ahumado: 4,
      graso: 0,
      fresco: 3,
      aromatico: 9,
    },

    sabores: [
      'picante',
      'ahumado',
      'terroso',
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
      'tacos al pastor',
      'fajitas',
      'adobos',
      'carne sazonada',
    ],
  },

];