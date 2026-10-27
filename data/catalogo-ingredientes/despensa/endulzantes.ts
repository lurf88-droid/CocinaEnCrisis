import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const ENDULZANTES: IngredienteCatalogo[] = [

  // ====================================================
  // 🍬 AZÚCAR BLANCA
  // ====================================================
 {
    id: 'cajeta',
    nombre: 'Cajeta',
    aliases: ['dulce de leche', 'cajeta quemada', 'cajeta de Celaya'],
    precioUnitario: 60,
    unidad: 'kg',
    precio: { minimo: 40, promedio: 60, maximo: 90, moneda: 'MXN', actualizado: '2026-08' },
    categoria: 'lacteos',
    subcategoria: 'dulces',
    basico: false,
    tags: ['dulce', 'mexicano', 'reposteria'],
    cocinas: ['mexicana'],
    tecnicas: ['derretir', 'mezclar', 'untar'],
    nivel: 'basico',
    familias: ['lacteos', 'dulces'],
    usos: ['postres', 'bebidas', 'panaderia'],
    roles: ['sabor_principal', 'endulzante'],
    combinaCon: ['leche', 'canela', 'nuez'],
    sustitutos: ['mermelada', 'chocolate'],
    sustitutosEconomicos: [],
    perfilSabor: {
      ...SABOR_BASE,
      dulce: 10, acido: 0, salado: 1, amargo: 1, umami: 0, picante: 0,
      ahumado: 2, graso: 7, fresco: 1, aromatico: 5,
    },
    sabores: ['dulce', 'caramelo'],
    texturas: ['viscosa', 'cremosa'],
    temporada: ['todo_el_año'],
    conservacion: 'refrigerado',
    recetasCompatibles: ['agua-cajeta', 'postre-cajeta'],
  },
  {
    id: 'azucar_blanca',

    nombre: 'Azúcar blanca',

    aliases: [
      'azucar',
      'azúcar refinada',
      'azucar refinada',
      'azucar blanca',
      'sugar',
    ],

    precioUnitario: 25,

    unidad: 'kg',

    precio: {
      minimo: 18,
      promedio: 25,
      maximo: 40,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'endulzantes',

    basico: true,

    tags: [
      'basico',
      'reposteria',
      'bebidas',
      'cocina_diaria',
    ],

    cocinas: [
      'mexicana',
      'internacional',
      'reposteria',
    ],

    tecnicas: [
      'endulzar',
      'caramelizar',
      'conservar',
    ],

    nivel: 'basico',

    familias: [
      'endulzantes',
      'azucares',
    ],

    usos: [
      'postres',
      'bebidas',
      'salsas',
      'reposteria',
    ],

    roles: [
      'dulzor',
      'textura',
      'equilibrio',
    ],

    combinaCon: [
      'frutas',
      'chocolate',
      'harinas',
      'leche',
    ],

    sustitutos: [
      'miel',
      'piloncillo',
      'azucar_mascabado',
    ],

    sustitutosEconomicos: [
      'piloncillo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 10,
      acido: 0,
      salado: 0,
      amargo: 0,
      umami: 0,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 0,
      aromatico: 0,
    },

    sabores: [
      'dulce_puro',
    ],

    texturas: [
      'cristalina',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'pasteles',
      'galletas',
      'aguas frescas',
      'caramelos',
    ],
  },


  // ====================================================
  // 🍯 AZÚCAR MASCABADO
  // ====================================================

  {
    id: 'azucar_mascabado',

    nombre: 'Azúcar mascabado',

    aliases: [
      'azucar morena',
      'azúcar morena',
      'azúcar integral',
      'azucar integral',
      'brown sugar',
    ],

    precioUnitario: 45,

    unidad: 'kg',

    precio: {
      minimo: 30,
      promedio: 45,
      maximo: 80,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'endulzantes',

    basico: false,

    tags: [
      'caramelo',
      'reposteria',
      'aroma',
    ],

    cocinas: [
      'internacional',
      'reposteria',
    ],

    tecnicas: [
      'endulzar',
      'caramelizar',
      'hornear',
    ],

    nivel: 'basico',

    familias: [
      'endulzantes',
      'azucares',
    ],

    usos: [
      'panaderia',
      'postres',
      'bebidas',
    ],

    roles: [
      'dulzor',
      'aroma',
      'color',
    ],

    combinaCon: [
      'canela',
      'chocolate',
      'frutas',
      'avena',
    ],

    sustitutos: [
      'azucar_blanca',
      'piloncillo',
    ],

    sustitutosEconomicos: [
      'azucar_blanca',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 9,
      acido: 0,
      salado: 0,
      amargo: 1,
      umami: 0,
      picante: 0,

      ahumado: 1,
      graso: 0,
      fresco: 0,
      aromatico: 5,
    },

    sabores: [
      'caramelo',
      'melaza',
    ],

    texturas: [
      'granulada',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'galletas',
      'pan especiado',
      'postres con avena',
    ],
  },


  // ====================================================
  // 🇲🇽 PILONCILLO
  // ====================================================

  {
    id: 'piloncillo',

    nombre: 'Piloncillo',

    aliases: [
      'piloncillo',
      'panela de caña',
      'azucar de panela',
      'azúcar de panela',
    ],

    precioUnitario: 60,

    unidad: 'kg',

    precio: {
      minimo: 40,
      promedio: 60,
      maximo: 100,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'endulzantes',

    basico: true,

    tags: [
      'mexicano',
      'tradicional',
      'bebidas',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
    ],

    tecnicas: [
      'disolver',
      'jarabes',
      'bebidas',
    ],

    nivel: 'basico',

    familias: [
      'endulzantes',
      'azucares',
      'mexicanos',
    ],

    usos: [
      'atoles',
      'cafe',
      'postres',
      'aguas',
    ],

    roles: [
      'dulzor',
      'aroma',
      'identidad',
    ],

    combinaCon: [
      'canela',
      'cafe',
      'chocolate',
      'frutas',
    ],

    sustitutos: [
      'azucar_mascabado',
      'azucar_blanca',
    ],

    sustitutosEconomicos: [
      'azucar_blanca',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 9,
      acido: 0,
      salado: 0,
      amargo: 1,
      umami: 1,
      picante: 0,

      ahumado: 2,
      graso: 0,
      fresco: 0,
      aromatico: 7,
    },

    sabores: [
      'caramelo',
      'caña',
    ],

    texturas: [
      'solida',
      'fundente',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'atole',
      'cafe de olla',
      'postres mexicanos',
    ],
  },


  // ====================================================
  // 🍯 MIEL
  // ====================================================

  {
    id: 'miel',

    nombre: 'Miel',

    aliases: [
      'miel de abeja',
      'honey',
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

    categoria: 'despensa',

    subcategoria: 'endulzantes',

    basico: false,

    tags: [
      'natural',
      'bebidas',
      'reposteria',
    ],

    cocinas: [
      'internacional',
    ],

    tecnicas: [
      'endulzar',
      'marinar',
      'glasear',
    ],

    nivel: 'basico',

    familias: [
      'endulzantes',
      'mieles',
    ],

    usos: [
      'desayunos',
      'bebidas',
      'postres',
      'salsas',
    ],

    roles: [
      'dulzor',
      'aroma',
      'brillo',
    ],

    combinaCon: [
      'avena',
      'yogur',
      'frutas',
      'pollo',
    ],

    sustitutos: [
      'piloncillo',
      'azucar_blanca',
      'jarabe_maple',
    ],

    sustitutosEconomicos: [
      'azucar_blanca',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 10,
      acido: 1,
      salado: 0,
      amargo: 0,
      umami: 0,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 2,
      aromatico: 8,
    },

    sabores: [
      'floral',
      'dulce',
    ],

    texturas: [
      'liquida',
      'espesa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_y_seco',

    recetasCompatibles: [
      'avena con miel',
      'pollo glaseado',
      'bebidas',
    ],
  },


  // ====================================================
  // 🍁 JARABE DE MAPLE
  // ====================================================

  {
    id: 'jarabe_maple',

    nombre: 'Jarabe de maple',

    aliases: [
      'maple',
      'sirope de maple',
      'jarabe de arce',
      'maple syrup',
    ],

    precioUnitario: 250,

    unidad: 'kg',

    precio: {
      minimo: 180,
      promedio: 250,
      maximo: 400,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'endulzantes',

    basico: false,

    tags: [
      'desayuno',
      'reposteria',
      'especial',
    ],

    cocinas: [
      'americana',
      'internacional',
    ],

    tecnicas: [
      'endulzar',
      'glasear',
    ],

    nivel: 'basico',

    familias: [
      'endulzantes',
      'jarabes',
    ],

    usos: [
      'hot cakes',
      'postres',
      'bebidas',
    ],

    roles: [
      'dulzor',
      'aroma',
    ],

    combinaCon: [
      'avena',
      'frutas',
      'nueces',
    ],

    sustitutos: [
      'miel',
    ],

    sustitutosEconomicos: [
      'azucar_blanca',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 10,
      acido: 0,
      salado: 0,
      amargo: 0,
      umami: 0,
      picante: 0,

      ahumado: 1,
      graso: 0,
      fresco: 0,
      aromatico: 8,
    },

    sabores: [
      'caramelo',
      'madera',
    ],

    texturas: [
      'liquida',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco',

    recetasCompatibles: [
      'hot cakes',
      'postres',
      'bebidas',
    ],
  },


  // ====================================================
  // 🍫 CHOCOLATE DE MESA
  // ====================================================

  {
    id: 'chocolate_mesa',

    nombre: 'Chocolate de mesa',

    aliases: [
      'chocolate mexicano',
      'chocolate de taza',
      'chocolate para bebida',
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

    categoria: 'despensa',

    subcategoria: 'cacao_y_chocolate',

    basico: false,

    tags: [
      'dulce',
      'reposteria',
      'bebida',
      'mexicano',
    ],

    cocinas: [
      'mexicana',
      'internacional',
    ],

    tecnicas: [
      'fundir',
      'infusionar',
      'batir',
    ],

    nivel: 'basico',

    familias: [
      'cacao',
      'chocolate',
      'reposteria',
      'endulzantes',
    ],

    usos: [
      'atole',
      'pasteles',
      'bebidas',
      'postres',
    ],

    roles: [
      'dulzor',
      'aroma',
      'cuerpo',
    ],

    combinaCon: [
      'leche',
      'canela',
      'vainilla',
      'cafe',
    ],

    sustitutos: [
      'cacao_en_polvo',
      'chocolate_amargo',
    ],

    sustitutosEconomicos: [
      'cacao_en_polvo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 8,
      acido: 1,
      salado: 0,
      amargo: 4,
      umami: 2,
      picante: 0,

      ahumado: 0,
      graso: 5,
      fresco: 1,
      aromatico: 8,
    },

    sabores: [
      'chocolate',
      'dulce',
      'tostado',
    ],

    texturas: [
      'solida',
      'cremosa_al_fundir',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_y_seco',

    recetasCompatibles: [
      'chocolate caliente',
      'mole poblano',
      'pasteles',
      'postres',
    ],
  },

];