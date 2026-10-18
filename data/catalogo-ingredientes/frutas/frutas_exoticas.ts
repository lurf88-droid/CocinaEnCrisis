import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const FRUTAS_EXOTICAS: IngredienteCatalogo[] = [

  // ====================================================
  // 🟡 MARACUYÁ
  // ====================================================

  {
    id: 'maracuya',

    nombre: 'Maracuyá',

    aliases: [
      'maracuya',
      'maracuyá',
      'fruta de la pasion',
      'fruta de la pasión',
      'passion fruit',
    ],

    precioUnitario: 160,

    unidad: 'kg',

    precio: {
      minimo: 100,
      promedio: 160,
      maximo: 300,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'tropicales',

    basico: false,

    tags: [
      'acido',
      'aromatico',
      'gourmet',
      'tropical',
    ],

    cocinas: [
      'latinoamericana',
      'francesa',
      'internacional',
    ],

    tecnicas: [
      'salsear',
      'reducir',
      'preparar_postre',
      'preparar_bebida',
    ],

    nivel: 'intermedio',

    familias: [
      'frutas',
      'tropicales',
      'exoticas',
    ],

    usos: [
      'postres',
      'salsas',
      'bebidas',
      'cocteles',
    ],

    roles: [
      'acidez',
      'aroma',
      'contraste',
    ],

    combinaCon: [
      'chocolate',
      'vainilla',
      'yogurt',
      'quesos',
      'mango',
    ],

    sustitutos: [
      'mango',
    ],

    sustitutosEconomicos: [
      'limon',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 5,
      acido: 9,
      salado: 0,
      amargo: 1,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 9,
      aromatico: 10,
    },

    sabores: [
      'acido',
      'tropical',
      'floral',
    ],

    texturas: [
      'jugosa',
      'semillas',
    ],

    temporada: [
      'verano',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'cheesecake de maracuya',
      'salsa de maracuya',
      'agua tropical',
      'postres gourmet',
    ],
  },


  // ====================================================
  // 🐉 PITAYA
  // ====================================================

  {
    id: 'pitaya',

    nombre: 'Pitaya',

    aliases: [
      'pitaya',
      'fruta dragon',
      'fruta dragón',
      'dragon fruit',
    ],

    precioUnitario: 250,

    unidad: 'kg',

    precio: {
      minimo: 150,
      promedio: 250,
      maximo: 500,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'exoticas',

    basico: false,

    tags: [
      'gourmet',
      'color',
      'fresco',
      'exotico',
    ],

    cocinas: [
      'mexicana',
      'internacional',
    ],

    tecnicas: [
      'crudo',
      'preparar_postre',
      'decorar',
      'preparar_ensalada',
    ],

    nivel: 'intermedio',

    familias: [
      'frutas',
      'exoticas',
      'tropicales',
    ],

    usos: [
      'postres',
      'bowls',
      'bebidas',
      'decoracion',
    ],

    roles: [
      'color',
      'textura',
      'frescura',
    ],

    combinaCon: [
      'yogurt',
      'granola',
      'mango',
      'coco',
    ],

    sustitutos: [
      'mango',
      'papaya',
    ],

    sustitutosEconomicos: [
      'papaya',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 5,
      acido: 3,
      salado: 0,
      amargo: 0,
      umami: 0,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 9,
      aromatico: 4,
    },

    sabores: [
      'suave',
      'ligeramente_dulce',
    ],

    texturas: [
      'crujiente',
      'jugosa',
    ],

    temporada: [
      'verano',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'bowl tropical',
      'postres frescos',
      'ensaladas de fruta',
    ],
  },


  // ====================================================
  // 🟠 GRANADILLA
  // ====================================================

  {
    id: 'granadilla',

    nombre: 'Granadilla',

    aliases: [
      'granadilla',
      'fruta dulce de la pasion',
      'fruta dulce de la pasión',
    ],

    precioUnitario: 200,

    unidad: 'kg',

    precio: {
      minimo: 120,
      promedio: 200,
      maximo: 350,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'tropicales',

    basico: false,

    tags: [
      'aromatica',
      'dulce',
      'fresca',
      'exotica',
    ],

    cocinas: [
      'latinoamericana',
      'internacional',
    ],

    tecnicas: [
      'crudo',
      'preparar_postre',
      'preparar_bebida',
    ],

    nivel: 'intermedio',

    familias: [
      'frutas',
      'tropicales',
      'exoticas',
    ],

    usos: [
      'bebidas',
      'postres',
      'ensaladas',
    ],

    roles: [
      'aroma',
      'dulzor',
      'textura',
    ],

    combinaCon: [
      'yogurt',
      'miel',
      'maracuya',
      'quesos',
    ],

    sustitutos: [
      'maracuya',
      'lichi',
    ],

    sustitutosEconomicos: [
      'papaya',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 8,
      acido: 4,
      salado: 0,
      amargo: 0,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 8,
      aromatico: 9,
    },

    sabores: [
      'dulce',
      'floral',
      'tropical',
    ],

    texturas: [
      'jugosa',
      'semillas_crujientes',
    ],

    temporada: [
      'verano',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'ensalada tropical',
      'bebidas exoticas',
      'postres con yogurt',
    ],
  },


  // ====================================================
  // 🌸 LICHI
  // ====================================================

  {
    id: 'lichi',

    nombre: 'Lichi',

    aliases: [
      'lichi',
      'lychee',
    ],

    precioUnitario: 300,

    unidad: 'kg',

    precio: {
      minimo: 200,
      promedio: 300,
      maximo: 600,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'asiaticas',

    basico: false,

    tags: [
      'floral',
      'dulce',
      'exotico',
    ],

    cocinas: [
      'china',
      'tailandesa',
      'asiatica',
    ],

    tecnicas: [
      'crudo',
      'preparar_postre',
      'preparar_bebida',
    ],

    nivel: 'intermedio',

    familias: [
      'frutas',
      'exoticas',
      'asiaticas',
      'tropicales',
    ],

    usos: [
      'cocteles',
      'postres',
      'bebidas',
      'ensaladas',
    ],

    roles: [
      'aroma',
      'dulzor',
      'contraste',
    ],

    combinaCon: [
      'coco',
      'mango',
      'limon',
      'jengibre',
    ],

    sustitutos: [
      'granadilla',
      'rambutan',
    ],

    sustitutosEconomicos: [
      'uva',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 8,
      acido: 3,
      salado: 0,
      amargo: 0,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 8,
      aromatico: 10,
    },

    sabores: [
      'dulce',
      'floral',
      'perfumado',
    ],

    texturas: [
      'jugosa',
      'fibrosa',
    ],

    temporada: [
      'verano',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'bebida de lichi',
      'postres asiaticos',
      'cocteles',
    ],
  },


  // ====================================================
  // 🔴 RAMBUTÁN
  // ====================================================

  {
    id: 'rambutan',

    nombre: 'Rambután',

    aliases: [
      'rambutan',
      'rambután',
      'rambutan fruta',
    ],

    precioUnitario: 350,

    unidad: 'kg',

    precio: {
      minimo: 220,
      promedio: 350,
      maximo: 700,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'asiaticas',

    basico: false,

    tags: [
      'exotico',
      'dulce',
      'tropical',
      'gourmet',
    ],

    cocinas: [
      'asiatica',
      'tailandesa',
      'internacional',
    ],

    tecnicas: [
      'crudo',
      'preparar_postre',
      'preparar_bebida',
    ],

    nivel: 'chef',

    familias: [
      'frutas',
      'exoticas',
      'asiaticas',
      'tropicales',
    ],

    usos: [
      'postres',
      'ensaladas',
      'bebidas',
      'cocteles',
    ],

    roles: [
      'dulzor',
      'aroma',
      'experiencia',
    ],

    combinaCon: [
      'lichi',
      'coco',
      'mango',
      'limon',
      'jengibre',
    ],

    sustitutos: [
      'lichi',
      'granadilla',
    ],

    sustitutosEconomicos: [
      'uva',
      'manzana',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 8,
      acido: 2,
      salado: 0,
      amargo: 0,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 8,
      aromatico: 9,
    },

    sabores: [
      'dulce',
      'floral',
      'tropical',
    ],

    texturas: [
      'jugosa',
      'fibrosa',
    ],

    temporada: [
      'verano',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'ensalada tropical',
      'postres asiaticos',
      'cocteles exoticos',
    ],
  },


  // ====================================================
  // 🥥 COCO
  // ====================================================

  {
    id: 'coco',

    nombre: 'Coco',

    aliases: [
      'coco',
      'coco fresco',
      'coconut',
    ],

    precioUnitario: 80,

    unidad: 'pieza',

    precio: {
      minimo: 50,
      promedio: 80,
      maximo: 150,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'tropicales',

    basico: true,

    tags: [
      'tropical',
      'grasa',
      'leche',
      'aromatico',
    ],

    cocinas: [
      'tailandesa',
      'caribeña',
      'latinoamericana',
      'asiatica',
    ],

    tecnicas: [
      'extraer_leche',
      'rallar',
      'salsear',
      'preparar_postre',
    ],

    nivel: 'intermedio',

    familias: [
      'frutas',
      'tropicales',
      'coco',
    ],

    usos: [
      'leche_de_coco',
      'postres',
      'currys',
      'bebidas',
      'reposteria',
    ],

    roles: [
      'grasa',
      'cremosidad',
      'aroma',
    ],

    combinaCon: [
      'chocolate',
      'pina',
      'mango',
      'arroz',
      'pollo',
      'pescado',
    ],

    sustitutos: [],

    sustitutosEconomicos: [
      'crema',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 5,
      acido: 0,
      salado: 0,
      amargo: 0,
      umami: 2,
      picante: 0,

      ahumado: 0,
      graso: 10,
      fresco: 5,
      aromatico: 9,
    },

    sabores: [
      'coco',
      'dulce',
      'tropical',
    ],

    texturas: [
      'fibrosa',
      'cremosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_refrigerado_despues_de_abrir',

    recetasCompatibles: [
      'arroz con coco',
      'leche de coco',
      'curry tropical',
      'postres de coco',
    ],
  },


  // ====================================================
  // ⭐ CARAMBOLA
  // ====================================================

  {
    id: 'carambola',

    nombre: 'Carambola',

    aliases: [
      'carambola',
      'fruta estrella',
      'star fruit',
    ],

    precioUnitario: 220,

    unidad: 'kg',

    precio: {
      minimo: 140,
      promedio: 220,
      maximo: 400,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'exoticas',

    basico: false,

    tags: [
      'acida',
      'decoracion',
      'gourmet',
    ],

    cocinas: [
      'asiatica',
      'internacional',
    ],

    tecnicas: [
      'crudo',
      'decorar',
      'preparar_ensalada',
    ],

    nivel: 'chef',

    familias: [
      'frutas',
      'exoticas',
      'tropicales',
    ],

    usos: [
      'decoracion',
      'ensaladas',
      'bebidas',
      'postres',
    ],

    roles: [
      'color',
      'acidez',
      'presentacion',
    ],

    combinaCon: [
      'kiwi',
      'mango',
      'limon',
      'yogurt',
    ],

    sustitutos: [
      'mango',
      'manzana',
    ],

    sustitutosEconomicos: [
      'pina',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 4,
      acido: 7,
      salado: 0,
      amargo: 1,
      umami: 0,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 9,
      aromatico: 5,
    },

    sabores: [
      'acido',
      'fresco',
      'ligero',
    ],

    texturas: [
      'crujiente',
      'jugosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'ensalada tropical',
      'decoracion gourmet',
      'bebidas frescas',
    ],
  },


  // ====================================================
  // 🟣 HIGO
  // ====================================================

  {
    id: 'higo',

    nombre: 'Higo',

    aliases: [
      'higo',
      'higos frescos',
      'higo fresco',
      'fig',
    ],

    precioUnitario: 300,

    unidad: 'kg',

    precio: {
      minimo: 200,
      promedio: 300,
      maximo: 600,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'mediterraneas',

    basico: false,

    tags: [
      'dulce',
      'gourmet',
      'quesos',
      'mediterraneo',
    ],

    cocinas: [
      'italiana',
      'francesa',
      'mediterranea',
    ],

    tecnicas: [
      'caramelizar',
      'hornear',
      'preparar_ensalada',
    ],

    nivel: 'chef',

    familias: [
      'frutas',
      'mediterraneas',
    ],

    usos: [
      'postres',
      'tablas_de_queso',
      'ensaladas',
      'mermeladas',
    ],

    roles: [
      'dulzor',
      'contraste',
      'aroma',
    ],

    combinaCon: [
      'queso_brie',
      'queso_cabra',
      'nuez',
      'miel',
    ],

    sustitutos: [
      'ciruela',
    ],

    sustitutosEconomicos: [
      'manzana',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 9,
      acido: 2,
      salado: 0,
      amargo: 0,
      umami: 2,
      picante: 0,

      ahumado: 0,
      graso: 1,
      fresco: 6,
      aromatico: 8,
    },

    sabores: [
      'dulce',
      'miel',
      'floral',
    ],

    texturas: [
      'suave',
      'semillas',
    ],

    temporada: [
      'verano',
      'otoño',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'tabla de quesos',
      'higo caramelizado',
      'postres mediterraneos',
    ],
  },


  // ====================================================
  // 🍇 UVA
  // ====================================================

  {
    id: 'uva',

    nombre: 'Uva',

    aliases: [
      'uva',
      'uvas',
      'grape',
      'grapes',
    ],

    precioUnitario: 90,

    unidad: 'kg',

    precio: {
      minimo: 50,
      promedio: 90,
      maximo: 180,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'bayas',

    basico: true,

    tags: [
      'dulce',
      'vino',
      'quesos',
      'fermentacion',
    ],

    cocinas: [
      'francesa',
      'italiana',
      'mediterranea',
    ],

    tecnicas: [
      'reducir',
      'fermentar',
      'crudo',
      'preparar_ensalada',
    ],

    nivel: 'intermedio',

    familias: [
      'frutas',
      'bayas',
    ],

    usos: [
      'vino',
      'postres',
      'ensaladas',
      'tablas_de_queso',
    ],

    roles: [
      'dulzor',
      'aroma',
      'acidez',
    ],

    combinaCon: [
      'quesos',
      'nuez',
      'pollo',
      'vino',
    ],

    sustitutos: [
      'ciruela',
    ],

    sustitutosEconomicos: [
      'manzana',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 8,
      acido: 3,
      salado: 0,
      amargo: 0,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 8,
      aromatico: 7,
    },

    sabores: [
      'dulce',
      'frutal',
    ],

    texturas: [
      'jugosa',
      'piel_firme',
    ],

    temporada: [
      'verano',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'ensalada de uvas',
      'salsa de uva',
      'tabla de quesos',
    ],
  },


  // ====================================================
  // 🟣 CIRUELA
  // ====================================================

  {
    id: 'ciruela',

    nombre: 'Ciruela',

    aliases: [
      'ciruela',
      'ciruela roja',
      'plum',
    ],

    precioUnitario: 100,

    unidad: 'kg',

    precio: {
      minimo: 60,
      promedio: 100,
      maximo: 200,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'frutas_temperadas',

    basico: false,

    tags: [
      'acido',
      'dulce',
      'postre',
    ],

    cocinas: [
      'europea',
      'francesa',
    ],

    tecnicas: [
      'hacer_compota',
      'salsear',
      'hornear',
    ],

    nivel: 'intermedio',

    familias: [
      'frutas',
      'frutas_temperadas',
    ],

    usos: [
      'postres',
      'salsas',
      'mermeladas',
    ],

    roles: [
      'acidez',
      'dulzor',
      'textura',
    ],

    combinaCon: [
      'canela',
      'queso',
      'nuez',
      'miel',
    ],

    sustitutos: [
      'durazno',
      'pera',
    ],

    sustitutosEconomicos: [
      'manzana',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 7,
      acido: 6,
      salado: 0,
      amargo: 1,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 7,
      aromatico: 7,
    },

    sabores: [
      'dulce',
      'acido',
      'frutal',
    ],

    texturas: [
      'jugosa',
      'tierna',
    ],

    temporada: [
      'verano',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'compota de ciruela',
      'salsas dulces',
      'postres europeos',
    ],
  },


  // ====================================================
  // 🍑 DURAZNO
  // ====================================================

  {
    id: 'durazno',

    nombre: 'Durazno',

    aliases: [
      'durazno',
      'melocoton',
      'melocotón',
      'peach',
    ],

    precioUnitario: 120,

    unidad: 'kg',

    pesoPorUnidad: 150,

    precio: {
      minimo: 80,
      promedio: 120,
      maximo: 250,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'frutas_temperadas',

    basico: false,

    tags: [
      'aromatico',
      'dulce',
      'gourmet',
    ],

    cocinas: [
      'francesa',
      'italiana',
      'europea',
    ],

    tecnicas: [
      'asar',
      'pochar',
      'preparar_postre',
    ],

    nivel: 'intermedio',

    familias: [
      'frutas',
      'frutas_temperadas',
    ],

    usos: [
      'postres',
      'mermeladas',
      'ensaladas',
    ],

    roles: [
      'aroma',
      'dulzor',
      'textura',
    ],

    combinaCon: [
      'vainilla',
      'canela',
      'queso',
      'miel',
    ],

    sustitutos: [
      'pera',
      'ciruela',
    ],

    sustitutosEconomicos: [
      'manzana',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 8,
      acido: 4,
      salado: 0,
      amargo: 0,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 7,
      aromatico: 9,
    },

    sabores: [
      'dulce',
      'floral',
      'frutal',
    ],

    texturas: [
      'jugosa',
      'suave',
    ],

    temporada: [
      'verano',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'duraznos al horno',
      'tarta de durazno',
      'postres franceses',
    ],
  },

];