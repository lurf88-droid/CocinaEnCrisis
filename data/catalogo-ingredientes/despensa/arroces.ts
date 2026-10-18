import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const ARROCES: IngredienteCatalogo[] = [

  // ====================================================
  // 🍚 ARROZ BLANCO
  // ====================================================

  {
    id: 'arroz_blanco',

    nombre: 'Arroz blanco',

    aliases: [
      'arroz',
      'arroz blanco',
      'white rice',
    ],

    precioUnitario: 35,

    unidad: 'kg',
unidadCompra: 'bolsa',
cantidadCompra: 1,
compraFraccionable: false,
    precio: {
      minimo: 25,
      promedio: 35,
      maximo: 60,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'cereales_arroces',

    basico: true,

    tags: [
      'economico',
      'base',
      'versatil',
      'crisis',
    ],

    cocinas: [
      'mexicana',
      'asiatica',
      'latinoamericana',
      'internacional',
    ],

    tecnicas: [
      'hervir',
      'freir',
      'vapor',
    ],

    nivel: 'basico',

    familias: [
      'cereales',
      'granos_base',
      'arroces',
    ],

    usos: [
      'guarnicion',
      'plato_principal',
      'sopas',
      'rellenos',
    ],

    roles: [
      'energia',
      'volumen',
      'base',
    ],

    combinaCon: [
      'huevo',
      'pollo',
      'verduras',
      'frijoles',
      'atun',
    ],

    sustitutos: [
      'quinoa',
      'arroz_integral',
    ],

    sustitutosEconomicos: [
      'papa',
      'pasta',
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
      aromatico: 2,
    },

    sabores: [
      'neutro',
    ],

    texturas: [
      'suelta',
      'tierna',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'arroz rojo',
      'arroz blanco con verduras',
      'arroz frito',
      'arroz con pollo',
    ],
  },


  // ====================================================
  // 🌾 ARROZ INTEGRAL
  // ====================================================

  {
    id: 'arroz_integral',

    nombre: 'Arroz integral',

    aliases: [
      'arroz integral',
      'brown rice',
    ],

    precioUnitario: 55,

    unidad: 'kg',

    precio: {
      minimo: 40,
      promedio: 55,
      maximo: 90,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'cereales_arroces',

    basico: false,

    tags: [
      'nutritivo',
      'fibra',
      'saludable',
    ],

    cocinas: [
      'internacional',
    ],

    tecnicas: [
      'coccion_lenta',
      'hervir',
    ],

    nivel: 'basico',

    familias: [
      'cereales',
      'granos_base',
      'arroces',
    ],

    usos: [
      'ensaladas',
      'guarniciones',
      'bowls',
    ],

    roles: [
      'energia',
      'nutricion',
    ],

    combinaCon: [
      'verduras',
      'pollo',
      'legumbres',
    ],

    sustitutos: [
      'arroz_blanco',
    ],

    sustitutosEconomicos: [
      'arroz_blanco',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 0,
      amargo: 1,
      umami: 2,
      picante: 0,

      ahumado: 1,
      graso: 1,
      fresco: 0,
      aromatico: 3,
    },

    sabores: [
      'nuez',
      'terroso',
    ],

    texturas: [
      'firme',
      'ligeramente_masticable',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'bowl saludable',
      'arroz integral con verduras',
    ],
  },


  // ====================================================
  // 🍣 ARROZ JAPONÉS
  // ====================================================

  {
    id: 'arroz_japones',

    nombre: 'Arroz japonés',

    aliases: [
      'arroz sushi',
      'arroz japones',
      'japanese rice',
      'sushi rice',
    ],

    precioUnitario: 100,

    unidad: 'kg',

    precio: {
      minimo: 80,
      promedio: 100,
      maximo: 160,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'arroces_especiales',

    basico: false,

    tags: [
      'sushi',
      'japon',
      'pegajoso',
    ],

    cocinas: [
      'japonesa',
    ],

    tecnicas: [
      'sushi',
      'vapor',
    ],

    nivel: 'intermedio',

    familias: [
      'cereales',
      'arroces',
      'arroces_especiales',
    ],

    usos: [
      'sushi',
      'bowls',
      'acompañamiento',
    ],

    roles: [
      'base',
      'textura',
    ],

    combinaCon: [
      'pescado',
      'alga',
      'salsa_soya',
    ],

    sustitutos: [
      'arroz_blanco',
    ],

    sustitutosEconomicos: [
      'arroz_blanco',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 3,
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
      'suave',
      'dulce',
    ],

    texturas: [
      'pegajosa',
      'cremosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'sushi',
      'onigiri',
      'bowl japonés',
    ],
  },


  // ====================================================
  // 🇮🇹 ARROZ ARBORIO
  // ====================================================

  {
    id: 'arroz_arborio',

    nombre: 'Arroz Arborio',

    aliases: [
      'arborio',
      'arroz risotto',
      'arroz para risotto',
    ],

    precioUnitario: 150,

    unidad: 'kg',

    precio: {
      minimo: 100,
      promedio: 150,
      maximo: 220,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'arroces_especiales',

    basico: false,

    tags: [
      'italiano',
      'cremoso',
      'chef',
    ],

    cocinas: [
      'italiana',
    ],

    tecnicas: [
      'risotto',
      'tostar',
    ],

    nivel: 'intermedio',

    familias: [
      'cereales',
      'arroces',
      'arroces_especiales',
    ],

    usos: [
      'risotto',
      'platos_cremosos',
    ],

    roles: [
      'textura',
      'cremosidad',
    ],

    combinaCon: [
      'queso',
      'vino',
      'hongos',
      'pollo',
    ],

    sustitutos: [
      'arroz_bomba',
    ],

    sustitutosEconomicos: [
      'arroz_blanco',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 0,
      amargo: 0,
      umami: 3,
      picante: 0,

      ahumado: 0,
      graso: 2,
      fresco: 0,
      aromatico: 3,
    },

    sabores: [
      'suave',
      'cremoso',
    ],

    texturas: [
      'cremosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'risotto de hongos',
      'risotto de verduras',
    ],
  },

];