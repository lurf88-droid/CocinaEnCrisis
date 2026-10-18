import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const ACIDOS_VINAGRES: IngredienteCatalogo[] = [

  // ====================================================
  // ⚪ VINAGRE BLANCO
  // ====================================================

  {
    id: 'vinagre_blanco',

    nombre: 'Vinagre blanco',

    aliases: [
      'vinagre',
      'vinagre de alcohol',
    ],

    precioUnitario: 35,

    unidad: 'litro',

    precio: {
      minimo: 20,
      promedio: 35,
      maximo: 60,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'condimentos',

    subcategoria: 'acidulantes',

    basico: true,

    tags: [
      'acidez',
      'equilibrio',
      'conservacion',
    ],

    cocinas: [
      'mexicana',
      'internacional',
    ],

    tecnicas: [
      'marinar',
      'encurtir',
      'sazonar',
    ],

    nivel: 'basico',

    familias: [
      'acidos',
      'vinagres',
      'condimentos',
    ],

    usos: [
      'salsas',
      'ensaladas',
      'encurtidos',
    ],

    roles: [
      'acidez',
      'equilibrio',
    ],

    combinaCon: [
      'verduras',
      'aceite',
      'hierbas',
      'chiles',
    ],

    sustitutos: [
      'vinagre_manzana',
      'limon',
    ],

    sustitutosEconomicos: [
      'limon',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 0,
      acido: 10,
      salado: 0,
      amargo: 0,
      umami: 0,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 4,
      aromatico: 2,
    },

    sabores: [
      'acido',
      'limpio',
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
      'vinagretas',
      'encurtidos',
      'salsas',
    ],
  },


  // ====================================================
  // 🍎 VINAGRE DE MANZANA
  // ====================================================

  {
    id: 'vinagre_manzana',

    nombre: 'Vinagre de manzana',

    aliases: [
      'vinagre manzana',
      'apple cider vinegar',
    ],

    precioUnitario: 70,

    unidad: 'litro',

    precio: {
      minimo: 50,
      promedio: 70,
      maximo: 120,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'condimentos',

    subcategoria: 'acidulantes',

    basico: false,

    tags: [
      'frutal',
      'aromatico',
      'acido',
    ],

    cocinas: [
      'internacional',
    ],

    tecnicas: [
      'marinar',
      'aliñar',
    ],

    nivel: 'basico',

    familias: [
      'acidos',
      'vinagres',
      'condimentos',
    ],

    usos: [
      'ensaladas',
      'marinados',
      'bebidas',
    ],

    roles: [
      'acidez',
      'aroma',
    ],

    combinaCon: [
      'miel',
      'mostaza',
      'aceite_oliva',
      'frutas',
    ],

    sustitutos: [
      'vinagre_blanco',
    ],

    sustitutosEconomicos: [
      'vinagre_blanco',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 9,
      salado: 0,
      amargo: 1,
      umami: 0,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 5,
      aromatico: 7,
    },

    sabores: [
      'acido_frutal',
      'manzana',
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
      'vinagretas',
      'ensaladas',
      'marinados',
    ],
  },


  // ====================================================
  // 🟤 VINAGRE BALSÁMICO
  // ====================================================

  {
    id: 'vinagre_balsamico',

    nombre: 'Vinagre balsámico',

    aliases: [
      'balsamico',
      'aceto balsamico',
    ],

    precioUnitario: 250,

    unidad: 'litro',

    precio: {
      minimo: 150,
      promedio: 250,
      maximo: 500,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'condimentos',

    subcategoria: 'acidulantes',

    basico: false,

    tags: [
      'chef',
      'gourmet',
      'italiano',
    ],

    cocinas: [
      'italiana',
      'mediterranea',
    ],

    tecnicas: [
      'terminar',
      'reducir',
    ],

    nivel: 'intermedio',

    familias: [
      'acidos',
      'vinagres',
      'condimentos',
    ],

    usos: [
      'ensaladas',
      'carnes',
      'terminados',
    ],

    roles: [
      'acidez',
      'dulzor',
      'aroma',
    ],

    combinaCon: [
      'queso',
      'tomate',
      'frutas',
      'carne',
    ],

    sustitutos: [
      'vinagre_manzana',
    ],

    sustitutosEconomicos: [
      'vinagre_blanco',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 5,
      acido: 8,
      salado: 0,
      amargo: 1,
      umami: 2,
      picante: 0,

      ahumado: 1,
      graso: 0,
      fresco: 3,
      aromatico: 9,
    },

    sabores: [
      'dulce',
      'acido',
      'frutal',
    ],

    texturas: [
      'liquida',
      'espesa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco',

    recetasCompatibles: [
      'ensalada caprese',
      'carne con reducción',
      'quesos',
    ],
  },


  // ====================================================
  // 🍋 JUGO DE LIMÓN CONCENTRADO
  // ====================================================

  {
    id: 'jugo_limon_concentrado',

    nombre: 'Jugo de limón concentrado',

    aliases: [
      'limon concentrado',
      'jugo de limon',
      'jugo concentrado de limon',
    ],

    precioUnitario: 80,

    unidad: 'litro',

    precio: {
      minimo: 50,
      promedio: 80,
      maximo: 150,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'condimentos',

    subcategoria: 'acidulantes',

    basico: false,

    tags: [
      'acido',
      'fresco',
      'bebidas',
    ],

    cocinas: [
      'mexicana',
      'internacional',
    ],

    tecnicas: [
      'sazonar',
      'marinar',
    ],

    nivel: 'basico',

    familias: [
      'acidos',
      'citricos',
      'condimentos',
    ],

    usos: [
      'bebidas',
      'salsas',
      'marinados',
    ],

    roles: [
      'acidez',
      'frescura',
    ],

    combinaCon: [
      'chile',
      'aguacate',
      'pescado',
      'frutas',
    ],

    sustitutos: [
      'limon',
      'vinagre_blanco',
    ],

    sustitutosEconomicos: [
      'vinagre_blanco',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 10,
      salado: 0,
      amargo: 1,
      umami: 0,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 10,
      aromatico: 8,
    },

    sabores: [
      'citrico',
      'fresco',
    ],

    texturas: [
      'liquida',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'ceviches',
      'salsas',
      'bebidas',
    ],
  },


  // ====================================================
  // 🍚 VINAGRE DE ARROZ
  // ====================================================

  {
    id: 'vinagre_arroz',

    nombre: 'Vinagre de arroz',

    aliases: [
      'rice vinegar',
      'vinagre de sushi',
      'vinagre sushi',
    ],

    precioUnitario: 120,

    unidad: 'litro',

    precio: {
      minimo: 80,
      promedio: 120,
      maximo: 200,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'condimentos',

    subcategoria: 'acidulantes',

    basico: false,

    tags: [
      'asiatico',
      'sushi',
      'acidez',
    ],

    cocinas: [
      'japonesa',
      'asiatica',
    ],

    tecnicas: [
      'sazonar',
      'marinar',
    ],

    nivel: 'intermedio',

    familias: [
      'fermentados',
      'acidos',
      'vinagres',
      'condimentos',
    ],

    usos: [
      'sushi',
      'ensaladas',
      'marinados',
    ],

    roles: [
      'acidez',
      'equilibrio',
    ],

    combinaCon: [
      'arroz',
      'salsa_soya',
      'pescado',
    ],

    sustitutos: [
      'vinagre_blanco',
    ],

    sustitutosEconomicos: [
      'vinagre_blanco',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 8,
      salado: 0,
      amargo: 0,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 5,
      aromatico: 5,
    },

    sabores: [
      'acido_suave',
      'ligeramente_dulce',
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
      'sushi',
      'ensalada japonesa',
      'aderezos',
    ],
  },

];