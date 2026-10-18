import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const HARINAS: IngredienteCatalogo[] = [

  // ====================================================
  // 🌾 HARINA DE TRIGO
  // ====================================================

  {
    id: 'harina_trigo',

    nombre: 'Harina de trigo',

    aliases: [
      'harina',
      'harina trigo',
      'harina de trigo',
      'harina blanca',
      'wheat flour',
    ],

    precioUnitario: 22,

    unidad: 'kg',

    precio: {
      minimo: 15,
      promedio: 22,
      maximo: 40,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'harinas',

    basico: true,

    tags: [
      'base',
      'panaderia',
      'reposteria',
      'versatil',
    ],

    cocinas: [
      'mexicana',
      'italiana',
      'francesa',
      'internacional',
    ],

    tecnicas: [
      'amasar',
      'hornear',
      'ligar',
      'empanizar',
    ],

    nivel: 'basico',

    familias: [
      'harinas',
      'trigo',
      'derivados_de_cereales',
    ],

    usos: [
      'pan',
      'tortas',
      'pasteles',
      'salsas',
      'masas',
    ],

    roles: [
      'estructura',
      'base',
      'espesante',
    ],

    combinaCon: [
      'huevo',
      'leche',
      'mantequilla',
      'azucar_blanca',
      'levadura',
    ],

    sustitutos: [
      'harina_avena',
      'harina_maiz',
    ],

    sustitutosEconomicos: [
      'harina_maiz',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 0,
      amargo: 0,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 1,
      fresco: 0,
      aromatico: 1,
    },

    sabores: [
      'neutro',
    ],

    texturas: [
      'polvo_fino',
      'elastica_al_hidratar',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'pan casero',
      'tortas',
      'hot cakes',
      'galletas',
      'salsas',
    ],
  },


  // ====================================================
  // 🌽 HARINA DE MAÍZ
  // ====================================================

  {
    id: 'harina_maiz',

    nombre: 'Harina de maíz',

    aliases: [
      'masa harina',
      'harina maiz',
      'harina de maiz',
      'harina de maíz',
      'harina nixtamalizada',
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

    subcategoria: 'harinas',

    basico: true,

    tags: [
      'mexicano',
      'tortilla',
      'tradicional',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
    ],

    tecnicas: [
      'amasar',
      'nixtamal',
      'cocer',
    ],

    nivel: 'basico',

    familias: [
      'harinas',
      'maiz',
      'derivados_de_cereales',
    ],

    usos: [
      'tortillas',
      'gorditas',
      'tamales',
      'antojitos',
    ],

    roles: [
      'base',
      'identidad',
      'masa',
    ],

    combinaCon: [
      'frijol',
      'queso',
      'chile',
      'carne',
    ],

    sustitutos: [
      'harina_trigo',
    ],

    sustitutosEconomicos: [],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 1,
      salado: 0,
      amargo: 0,
      umami: 2,
      picante: 0,

      ahumado: 2,
      graso: 1,
      fresco: 0,
      aromatico: 3,
    },

    sabores: [
      'maiz',
      'terroso',
    ],

    texturas: [
      'masa',
      'granulada',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'tortillas',
      'gorditas',
      'tamales',
      'sopes',
    ],
  },


  // ====================================================
  // 🌾 HARINA DE AVENA
  // ====================================================

  {
    id: 'harina_avena',

    nombre: 'Harina de avena',

    aliases: [
      'avena molida',
      'harina avena',
      'harina de avena',
      'oat flour',
    ],

    precioUnitario: 70,

    unidad: 'kg',

    precio: {
      minimo: 50,
      promedio: 70,
      maximo: 120,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'harinas',

    basico: false,

    tags: [
      'saludable',
      'desayuno',
      'sin_trigo',
    ],

    cocinas: [
      'internacional',
    ],

    tecnicas: [
      'hornear',
      'ligar',
    ],

    nivel: 'basico',

    familias: [
      'harinas',
      'cereales',
      'avena',
      'derivados_de_cereales',
    ],

    usos: [
      'galletas',
      'hot cakes',
      'tortitas',
    ],

    roles: [
      'estructura',
      'sabor',
    ],

    combinaCon: [
      'huevo',
      'leche',
      'frutas',
      'miel',
    ],

    sustitutos: [
      'harina_trigo',
      'avena',
    ],

    sustitutosEconomicos: [
      'avena',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 3,
      acido: 0,
      salado: 0,
      amargo: 1,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 2,
      fresco: 0,
      aromatico: 4,
    },

    sabores: [
      'nuez',
      'cereal',
    ],

    texturas: [
      'suave',
      'ligeramente_granulada',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'hot cakes de avena',
      'galletas de avena',
      'barras caseras',
    ],
  },


  // ====================================================
  // 🌾 SÉMOLA DE TRIGO
  // ====================================================

  {
    id: 'semola_trigo',

    nombre: 'Sémola de trigo',

    aliases: [
      'semola',
      'sémola',
      'semolina',
      'semola de trigo',
      'sémola de trigo',
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

    categoria: 'despensa',

    subcategoria: 'harinas',

    basico: false,

    tags: [
      'italiano',
      'pasta_fresca',
      'chef',
    ],

    cocinas: [
      'italiana',
      'europea',
    ],

    tecnicas: [
      'amasar',
      'hacer_pasta',
      'cocer',
    ],

    nivel: 'intermedio',

    familias: [
      'harinas',
      'trigo',
      'derivados_de_cereales',
      'pastas',
    ],

    usos: [
      'pasta_fresca',
      'gachas',
      'pan',
    ],

    roles: [
      'estructura',
      'textura',
    ],

    combinaCon: [
      'huevo',
      'aceite_oliva',
      'salsas',
    ],

    sustitutos: [
      'harina_trigo',
    ],

    sustitutosEconomicos: [
      'harina_trigo',
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
      graso: 1,
      fresco: 0,
      aromatico: 2,
    },

    sabores: [
      'trigo',
      'nuez_ligera',
    ],

    texturas: [
      'granulada',
      'firme',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'pasta fresca',
      'gnocchi',
      'pan artesanal',
    ],
  },

];