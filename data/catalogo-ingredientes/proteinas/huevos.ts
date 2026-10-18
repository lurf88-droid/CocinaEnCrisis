import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const HUEVOS: IngredienteCatalogo[] = [

  // ====================================================
  // 🥚 HUEVO
  // ====================================================

  {
    id: 'huevo',

    nombre: 'Huevo',

    aliases: [
      'huevo',
      'huevo de gallina',
      'huevos',
    ],

    precioUnitario: 45,

    unidad: 'kg',

    pesoPorUnidad: 60,
unidadCompra: 'docena',
cantidadCompra: 0.72,
compraFraccionable: false,
    precio: {
      minimo: 35,
      promedio: 45,
      maximo: 70,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'huevos',

    basico: true,

    tags: [
      'economico',
      'versatil',
      'proteina',
      'basico',
    ],

    cocinas: [
      'mexicana',
      'italiana',
      'asiatica',
      'internacional',
    ],

    tecnicas: [
      'freir',
      'hervir',
      'revolver',
      'hornear',
      'escalfar',
    ],

    nivel: 'basico',

    familias: [
      'huevos',
      'proteinas_animales',
    ],

    usos: [
      'desayunos',
      'tacos',
      'pastas',
      'reposteria',
      'ligar_salsas',
      'comidas_rapidas',
    ],

    roles: [
      'proteina',
      'ligar',
      'textura',
      'saciedad',
    ],

    combinaCon: [
      'arroz',
      'tortilla',
      'verduras',
      'queso',
      'pan',
      'tomate',
    ],

    sustitutos: [
      'tofu',
      'garbanzo',
      'clara_huevo',
    ],

    sustitutosEconomicos: [
      'lentejas',
      'frijoles',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 5,
      picante: 0,

      ahumado: 0,
      graso: 6,
      fresco: 1,
      aromatico: 2,
    },

    sabores: [
      'suave',
      'umami',
    ],

    texturas: [
      'cremosa',
      'tierna',
      'esponjosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'huevo con arroz',
      'omelette',
      'huevos rancheros',
      'tortilla española',
      'pasta carbonara',
      'hot cakes',
    ],
  },


  // ====================================================
  // 🥚 CLARA DE HUEVO
  // ====================================================

  {
    id: 'clara_huevo',

    nombre: 'Clara de huevo',

    aliases: [
      'clara',
      'clara huevo',
      'clara de huevo',
    ],

    precioUnitario: 70,

    unidad: 'kg',

    precio: {
      minimo: 50,
      promedio: 70,
      maximo: 100,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'proteinas',

    subcategoria: 'huevos',

    basico: false,

    tags: [
      'alta_proteina',
      'ligero',
      'saludable',
    ],

    cocinas: [
      'internacional',
    ],

    tecnicas: [
      'batir',
      'cocer',
      'hornear',
    ],

    nivel: 'intermedio',

    familias: [
      'huevos',
      'proteinas_animales',
    ],

    usos: [
      'desayunos',
      'reposteria',
      'proteinas',
    ],

    roles: [
      'proteina',
      'ligar',
      'estructura',
    ],

    combinaCon: [
      'verduras',
      'avena',
      'frutas',
      'harinas',
    ],

    sustitutos: [
      'huevo',
      'tofu',
    ],

    sustitutosEconomicos: [
      'legumbres',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 0,
      acido: 0,
      salado: 0,
      amargo: 0,
      umami: 3,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 2,
      aromatico: 1,
    },

    sabores: [
      'neutro',
    ],

    texturas: [
      'esponjosa',
      'ligera',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'claras con verduras',
      'merengue',
      'tortillas ligeras',
      'batidos proteicos',
    ],
  },


  // ====================================================
  // 🥚 YEMA DE HUEVO
  // ====================================================

  {
    id: 'yema_huevo',

    nombre: 'Yema de huevo',

    aliases: [
      'yema',
      'yema huevo',
      'yema de huevo',
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

    subcategoria: 'huevos',

    basico: false,

    tags: [
      'cremoso',
      'grasa',
      'sabor',
    ],

    cocinas: [
      'francesa',
      'italiana',
      'internacional',
    ],

    tecnicas: [
      'emulsionar',
      'espesar',
      'batir',
    ],

    nivel: 'intermedio',

    familias: [
      'huevos',
      'proteinas_animales',
    ],

    usos: [
      'salsas',
      'pastas',
      'postres',
      'cremas',
    ],

    roles: [
      'grasa',
      'emulsion',
      'textura',
      'sabor',
    ],

    combinaCon: [
      'queso',
      'crema',
      'pasta',
      'azucar',
    ],

    sustitutos: [
      'huevo',
      'crema',
    ],

    sustitutosEconomicos: [
      'leche',
      'maicena',
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
      graso: 10,
      fresco: 1,
      aromatico: 3,
    },

    sabores: [
      'cremoso',
      'umami',
      'graso',
    ],

    texturas: [
      'cremosa',
      'espesa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'salsa carbonara',
      'crema pastelera',
      'mayonesa casera',
      'salsas cremosas',
    ],
  },

];