import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const CONDIMENTOS: IngredienteCatalogo[] = [

  // ====================================================
  // 🧄 PASTA DE AJO
  // ====================================================

  {
    id: 'pasta_ajo',

    nombre: 'Pasta de ajo',

    aliases: [
      'ajo triturado',
      'ajo preparado',
      'pasta de ajo',
    ],

    precioUnitario: 120,

    unidad: 'kg',

    precio: {
      minimo: 80,
      promedio: 120,
      maximo: 220,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'condimentos',

    subcategoria: 'pastas_condimentos',

    basico: true,

    tags: [
      'aromatico',
      'practico',
      'umami',
    ],

    cocinas: [
      'mexicana',
      'italiana',
      'mediterranea',
      'internacional',
    ],

    tecnicas: [
      'sazonar',
      'marinar',
      'sofreir',
    ],

    nivel: 'basico',

    familias: [
      'aromaticos',
      'pasta_sabor',
      'ajo',
    ],

    usos: [
      'salsas',
      'carnes',
      'guisos',
      'pastas',
    ],

    roles: [
      'aroma',
      'umami',
      'base',
    ],

    combinaCon: [
      'cebolla',
      'tomate',
      'pollo',
      'aceite_oliva',
    ],

    sustitutos: [
      'ajo',
      'ajo_polvo',
    ],

    sustitutosEconomicos: [
      'ajo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 1,
      amargo: 1,
      umami: 5,
      picante: 1,

      ahumado: 1,
      graso: 1,
      fresco: 4,
      aromatico: 10,
    },

    sabores: [
      'ajo',
      'profundo',
      'herbal',
    ],

    texturas: [
      'pasta_cremosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'pasta al ajo',
      'salsas',
      'adobos',
      'pollo al ajo',
    ],
  },


  // ====================================================
  // 🌶 PASTA DE CHILE
  // ====================================================

  {
    id: 'pasta_chile',

    nombre: 'Pasta de chile',

    aliases: [
      'chile triturado',
      'pasta de chile rojo',
      'pasta de chile',
    ],

    precioUnitario: 220,

    unidad: 'kg',

    precio: {
      minimo: 150,
      promedio: 220,
      maximo: 400,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'condimentos',

    subcategoria: 'pastas_condimentos',

    basico: false,

    tags: [
      'picante',
      'chile',
      'intenso',
    ],

    cocinas: [
      'mexicana',
      'asiatica',
      'latinoamericana',
    ],

    tecnicas: [
      'sazonar',
      'marinar',
      'cocinar',
    ],

    nivel: 'intermedio',

    familias: [
      'chiles',
      'pasta_sabor',
    ],

    usos: [
      'salsas',
      'guisos',
      'marinados',
    ],

    roles: [
      'picante',
      'identidad',
      'aroma',
    ],

    combinaCon: [
      'ajo',
      'tomate',
      'carne',
      'pollo',
    ],

    sustitutos: [
      'chile_polvo',
      'chile_seco',
    ],

    sustitutosEconomicos: [
      'chile_fresco',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 1,
      salado: 1,
      amargo: 2,
      umami: 3,
      picante: 9,

      ahumado: 4,
      graso: 1,
      fresco: 3,
      aromatico: 8,
    },

    sabores: [
      'picante',
      'ahumado',
      'terroso',
    ],

    texturas: [
      'pasta_espesa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'salsas picantes',
      'guisos',
      'marinados',
      'tacos',
    ],
  },

];