import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const GRASAS_ACEITES: IngredienteCatalogo[] = [

  // ====================================================
  // 🫒 ACEITE DE OLIVA
  // ====================================================

  {
    id: 'aceite_oliva',

    nombre: 'Aceite de oliva',

    aliases: [
      'aceite oliva',
      'aceite de oliva',
      'aceite de oliva extra virgen',
      'olive oil',
    ],

    precioUnitario: 220,

    unidad: 'litro',

    precio: {
      minimo: 150,
      promedio: 220,
      maximo: 400,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'aceites',

    basico: false,

    tags: [
      'mediterraneo',
      'chef',
      'aromatico',
      'sabor',
    ],

    cocinas: [
      'italiana',
      'española',
      'mediterranea',
      'internacional',
    ],

    tecnicas: [
      'aliñar',
      'saltear',
      'montar',
      'marinar',
    ],

    nivel: 'basico',

    familias: [
      'grasas',
      'aceites',
      'aceites_vegetales',
    ],

    usos: [
      'ensaladas',
      'pasta',
      'salsas',
      'coccion',
    ],

    roles: [
      'grasa',
      'aroma',
      'transportador_de_sabor',
    ],

    combinaCon: [
      'tomate',
      'ajo',
      'quesos',
      'verduras',
      'hierbas',
    ],

    sustitutos: [
      'aceite_vegetal',
    ],

    sustitutosEconomicos: [
      'aceite_vegetal',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 0,
      acido: 0,
      salado: 0,
      amargo: 2,
      umami: 1,
      picante: 1,

      ahumado: 1,
      graso: 10,
      fresco: 5,
      aromatico: 9,
    },

    sabores: [
      'frutado',
      'herbal',
      'ligeramente_amargo',
    ],

    texturas: [
      'liquida',
      'untuosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_oscuro_y_fresco',

    recetasCompatibles: [
      'vinagretas',
      'pasta italiana',
      'vegetales asados',
      'pan con aceite',
    ],
  },


  // ====================================================
  // 🛢️ ACEITE VEGETAL
  // ====================================================

  {
    id: 'aceite_vegetal',

    nombre: 'Aceite vegetal',

    aliases: [
      'aceite',
      'aceite cocina',
      'aceite para cocinar',
      'aceite comestible',
    ],

    precioUnitario: 45,

    unidad: 'litro',
unidadCompra: 'botella',
cantidadCompra: 1,
compraFraccionable: false,
    precio: {
      minimo: 35,
      promedio: 45,
      maximo: 80,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'aceites',

    basico: true,

    tags: [
      'cocina_diaria',
      'versatil',
      'basico',
    ],

    cocinas: [
      'mexicana',
      'internacional',
    ],

    tecnicas: [
      'freir',
      'saltear',
      'cocinar',
    ],

    nivel: 'basico',

    familias: [
      'grasas',
      'aceites',
      'aceites_vegetales',
    ],

    usos: [
      'frituras',
      'salteados',
      'coccion',
    ],

    roles: [
      'grasa',
      'transferencia_calor',
    ],

    combinaCon: [
      'verduras',
      'carnes',
      'huevo',
      'harinas',
    ],

    sustitutos: [
      'aceite_oliva',
      'manteca_cerdo',
    ],

    sustitutosEconomicos: [
      'manteca_cerdo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 0,
      acido: 0,
      salado: 0,
      amargo: 0,
      umami: 0,
      picante: 0,

      ahumado: 0,
      graso: 10,
      fresco: 0,
      aromatico: 0,
    },

    sabores: [
      'neutro',
    ],

    texturas: [
      'liquida',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_y_cerrado',

    recetasCompatibles: [
      'fritos',
      'guisados',
      'salteados',
    ],
  },


  // ====================================================
  // 🐖 MANTECA DE CERDO
  // ====================================================

  {
    id: 'manteca_cerdo',

    nombre: 'Manteca de cerdo',

    aliases: [
      'manteca',
      'manteca de puerco',
      'manteca cerdo',
      'lard',
    ],

    precioUnitario: 90,

    unidad: 'kg',

    precio: {
      minimo: 60,
      promedio: 90,
      maximo: 150,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'grasas_animales',

    basico: true,

    tags: [
      'mexicano',
      'tradicional',
      'grasa_cocina',
      'sabor',
    ],

    cocinas: [
      'mexicana',
      'española',
      'internacional',
    ],

    tecnicas: [
      'freir',
      'sofreir',
      'amasar',
      'confitar',
    ],

    nivel: 'basico',

    familias: [
      'grasas',
      'grasas_animales',
      'bases_culinarias',
    ],

    usos: [
      'tamales',
      'frijoles',
      'carnitas',
      'frituras',
      'masas',
    ],

    roles: [
      'grasa',
      'sabor',
      'textura',
      'coccion',
    ],

    combinaCon: [
      'masa_maiz',
      'frijol',
      'chile',
      'ajo',
      'cebolla',
      'carne_cerdo',
    ],

    sustitutos: [
      'mantequilla',
      'aceite_vegetal',
      'manteca_vegetal',
    ],

    sustitutosEconomicos: [
      'aceite_vegetal',
      'manteca_vegetal',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 0,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 3,
      picante: 0,

      ahumado: 2,
      graso: 10,
      fresco: 0,
      aromatico: 2,
    },

    sabores: [
      'graso',
      'carnico',
      'intenso',
    ],

    texturas: [
      'untuosa',
      'cremosa',
      'solida',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado_o_lugar_fresco_cerrado',

    recetasCompatibles: [
      'tamales mexicanos',
      'frijoles refritos',
      'carnitas',
      'gorditas',
      'masa para tortillas',
    ],
  },


  // ====================================================
  // 🐖 ASIENTO DE CERDO
  // ====================================================

  {
    id: 'asiento_cerdo',

    nombre: 'Asiento de cerdo',

    aliases: [
      'asiento',
      'asiento oaxaqueño',
      'grasa de cerdo con residuos dorados',
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

    categoria: 'bases_culinarias',

    subcategoria: 'grasas_tradicionales',

    basico: false,

    tags: [
      'oaxaca',
      'tradicional',
      'comal',
      'antojitos',
    ],

    cocinas: [
      'mexicana',
      'oaxaqueña',
    ],

    tecnicas: [
      'freir',
      'untar',
      'cocinar_comal',
    ],

    nivel: 'intermedio',

    familias: [
      'grasas',
      'grasas_animales',
      'ingredientes_regionales',
      'bases_culinarias',
    ],

    usos: [
      'memelas',
      'tlayudas',
      'garnachas',
      'antojitos_oaxaqueños',
    ],

    roles: [
      'grasa',
      'sabor',
      'aroma',
      'textura',
    ],

    combinaCon: [
      'masa_maiz',
      'frijol_negro',
      'queso_istmo',
      'salsas',
    ],

    sustitutos: [
      'manteca_cerdo',
    ],

    sustitutosEconomicos: [
      'manteca_cerdo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 0,
      acido: 0,
      salado: 2,
      amargo: 0,
      umami: 5,
      picante: 0,

      ahumado: 2,
      graso: 5,
      fresco: 0,
      aromatico: 3,
    },

    sabores: [
      'cerdo',
      'tostado',
      'umami',
    ],

    texturas: [
      'untuosa',
      'grasa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado_en_recipiente_cerrado',

    recetasCompatibles: [
      'memelas_oaxaquenas',
      'tlayuda_oaxaquena',
    ],
  },


  // ====================================================
  // 🥜 ACEITE DE CACAHUATE
  // ====================================================

  {
    id: 'aceite_cacahuate',

    nombre: 'Aceite de cacahuate',

    aliases: [
      'aceite mani',
      'aceite de mani',
      'peanut oil',
    ],

    precioUnitario: 160,

    unidad: 'litro',

    precio: {
      minimo: 100,
      promedio: 160,
      maximo: 250,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'aceites',

    basico: false,

    tags: [
      'asiatico',
      'temperatura_alta',
      'aroma',
    ],

    cocinas: [
      'asiatica',
      'internacional',
    ],

    tecnicas: [
      'freir',
      'saltear',
    ],

    nivel: 'intermedio',

    familias: [
      'grasas',
      'aceites',
      'aceites_vegetales',
      'cacahuate',
    ],

    usos: [
      'fritura',
      'salteados',
    ],

    roles: [
      'grasa',
      'aroma',
    ],

    combinaCon: [
      'salsa_soya',
      'verduras',
      'pollo',
    ],

    sustitutos: [
      'aceite_vegetal',
    ],

    sustitutosEconomicos: [
      'aceite_vegetal',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 0,
      amargo: 0,
      umami: 1,
      picante: 0,

      ahumado: 1,
      graso: 9,
      fresco: 0,
      aromatico: 7,
    },

    sabores: [
      'nuez',
      'cacahuate',
    ],

    texturas: [
      'liquida',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_y_cerrado',

    recetasCompatibles: [
      'wok',
      'pollo oriental',
      'frituras',
    ],
  },


  // ====================================================
  // 🥥 ACEITE DE COCO
  // ====================================================

  {
    id: 'aceite_coco',

    nombre: 'Aceite de coco',

    aliases: [
      'aceite de coco',
      'coconut oil',
    ],

    precioUnitario: 180,

    unidad: 'litro',

    precio: {
      minimo: 120,
      promedio: 180,
      maximo: 300,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'aceites',

    basico: false,

    tags: [
      'tropical',
      'reposteria',
      'aroma',
    ],

    cocinas: [
      'asiatica',
      'tropical',
      'internacional',
    ],

    tecnicas: [
      'freir',
      'hornear',
    ],

    nivel: 'intermedio',

    familias: [
      'grasas',
      'aceites',
      'aceites_vegetales',
      'coco',
    ],

    usos: [
      'postres',
      'coccion',
      'bebidas',
    ],

    roles: [
      'grasa',
      'aroma',
    ],

    combinaCon: [
      'chocolate',
      'coco',
      'frutas',
    ],

    sustitutos: [
      'mantequilla',
      'aceite_vegetal',
    ],

    sustitutosEconomicos: [
      'aceite_vegetal',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 0,
      amargo: 0,
      umami: 0,
      picante: 0,

      ahumado: 0,
      graso: 10,
      fresco: 1,
      aromatico: 8,
    },

    sabores: [
      'coco',
    ],

    texturas: [
      'liquida',
      'solida_en_frio',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_y_cerrado',

    recetasCompatibles: [
      'postres de coco',
      'granola',
      'cocina tropical',
    ],
  },


  // ====================================================
  // 🧈 MANTECA VEGETAL
  // ====================================================

  {
    id: 'manteca_vegetal',

    nombre: 'Manteca vegetal',

    aliases: [
      'grasa vegetal',
      'shortening',
    ],

    precioUnitario: 90,

    unidad: 'kg',

    precio: {
      minimo: 60,
      promedio: 90,
      maximo: 150,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'grasas',

    basico: false,

    tags: [
      'reposteria',
      'panaderia',
      'textura',
    ],

    cocinas: [
      'reposteria',
      'internacional',
    ],

    tecnicas: [
      'batir',
      'hornear',
      'freir',
    ],

    nivel: 'basico',

    familias: [
      'grasas',
      'grasas_vegetales',
      'reposteria',
    ],

    usos: [
      'pan',
      'galletas',
      'pasteles',
    ],

    roles: [
      'grasa',
      'textura',
      'estructura',
    ],

    combinaCon: [
      'harina',
      'azucar',
      'huevo',
      'leche',
    ],

    sustitutos: [
      'mantequilla',
      'manteca_cerdo',
    ],

    sustitutosEconomicos: [
      'aceite_vegetal',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 0,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 0,
      picante: 0,

      ahumado: 0,
      graso: 10,
      fresco: 0,
      aromatico: 1,
    },

    sabores: [
      'neutro',
    ],

    texturas: [
      'cremosa',
      'solida',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_y_cerrado',

    recetasCompatibles: [
      'galletas',
      'pan dulce',
      'pasteles',
    ],
  },


  
];