import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const PASTAS: IngredienteCatalogo[] = [

  // ====================================================
  // 🍝 SPAGHETTI
  // ====================================================

  {
    id: 'pasta_spaghetti',

    nombre: 'Spaghetti',

    aliases: [
      'espagueti',
      'spaghetti',
      'pasta larga',
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

    subcategoria: 'pastas',

    basico: true,

    tags: [
      'economico',
      'italiano',
      'versatil',
      'crisis',
    ],

    cocinas: [
      'italiana',
      'mexicana',
      'internacional',
    ],

    tecnicas: [
      'hervir',
      'salsear',
      'emulsionar',
      'hornear',
    ],

    nivel: 'basico',

    familias: [
      'pastas',
      'cereales',
      'trigo',
    ],

    usos: [
      'plato_principal',
      'guarnicion',
      'horno',
    ],

    roles: [
      'energia',
      'base',
      'volumen',
    ],

    combinaCon: [
      'jitomate',
      'ajo',
      'queso',
      'pollo',
      'atun_lata',
      'verduras',
    ],

    sustitutos: [
      'pasta_penne',
      'pasta_fideo_seco',
    ],

    sustitutosEconomicos: [
      'arroz_blanco',
      'papa',
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
      'trigo',
    ],

    texturas: [
      'firme',
      'elastica',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'espagueti rojo',
      'espagueti al ajo',
      'pasta cremosa',
      'pasta con verduras',
    ],
  },


  // ====================================================
  // 🍝 PENNE
  // ====================================================

  {
    id: 'pasta_penne',

    nombre: 'Penne',

    aliases: [
      'penne',
      'pluma',
      'pasta penne',
      'pasta pluma',
    ],

    precioUnitario: 50,

    unidad: 'kg',

    precio: {
      minimo: 35,
      promedio: 50,
      maximo: 90,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'pastas',

    basico: true,

    tags: [
      'economico',
      'italiano',
      'salsas',
    ],

    cocinas: [
      'italiana',
      'internacional',
    ],

    tecnicas: [
      'hervir',
      'hornear',
      'gratinar',
    ],

    nivel: 'basico',

    familias: [
      'pastas',
      'cereales',
      'trigo',
    ],

    usos: [
      'plato_principal',
      'ensaladas',
      'horno',
    ],

    roles: [
      'base',
      'textura',
    ],

    combinaCon: [
      'queso',
      'crema',
      'tomate',
      'pollo',
    ],

    sustitutos: [
      'pasta_spaghetti',
      'pasta_fusilli',
    ],

    sustitutosEconomicos: [
      'pasta_codito',
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
      'trigo',
    ],

    texturas: [
      'firme',
      'compacta',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'penne al horno',
      'pasta con crema',
      'pasta con pollo',
    ],
  },


  // ====================================================
  // 🍝 FUSILLI
  // ====================================================

  {
    id: 'pasta_fusilli',

    nombre: 'Fusilli',

    aliases: [
      'fusilli',
      'tornillos',
      'pasta tornillo',
      'pasta de tornillo',
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

    subcategoria: 'pastas',

    basico: false,

    tags: [
      'italiano',
      'ensaladas',
      'salsas',
    ],

    cocinas: [
      'italiana',
      'internacional',
    ],

    tecnicas: [
      'hervir',
      'ensalada',
      'salsear',
    ],

    nivel: 'basico',

    familias: [
      'pastas',
      'cereales',
      'trigo',
    ],

    usos: [
      'ensaladas',
      'pastas_frias',
      'salsas',
    ],

    roles: [
      'textura',
      'base',
    ],

    combinaCon: [
      'verduras',
      'atun_lata',
      'queso',
      'pesto',
    ],

    sustitutos: [
      'pasta_penne',
    ],

    sustitutosEconomicos: [
      'pasta_codito',
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
      'trigo',
    ],

    texturas: [
      'firme',
      'rizada',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'ensalada de pasta',
      'fusilli con verduras',
      'pasta con pesto',
    ],
  },


  // ====================================================
  // 🍝 CODITOS
  // ====================================================

  {
    id: 'pasta_codito',

    nombre: 'Coditos',

    aliases: [
      'coditos',
      'codito',
      'pasta codito',
      'macarron pequeño',
      'macarrón pequeño',
    ],

    precioUnitario: 40,

    unidad: 'kg',

    precio: {
      minimo: 25,
      promedio: 40,
      maximo: 70,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'pastas',

    basico: true,

    tags: [
      'economico',
      'crisis',
      'mexicano',
    ],

    cocinas: [
      'mexicana',
      'internacional',
    ],

    tecnicas: [
      'hervir',
      'ensalada',
      'hornear',
    ],

    nivel: 'basico',

    familias: [
      'pastas',
      'cereales',
      'trigo',
    ],

    usos: [
      'ensaladas',
      'sopas',
      'guarniciones',
    ],

    roles: [
      'volumen',
      'economia',
      'base',
    ],

    combinaCon: [
      'crema',
      'atun_lata',
      'jamon',
      'verduras',
    ],

    sustitutos: [
      'pasta_penne',
      'pasta_macarron',
    ],

    sustitutosEconomicos: [
      'arroz_blanco',
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
      'trigo',
    ],

    texturas: [
      'tierna',
      'firme',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'ensalada de coditos',
      'sopa de pasta',
      'coditos con crema',
    ],
  },


  // ====================================================
  // 🍝 LÁMINAS DE LASAÑA
  // ====================================================

  {
    id: 'pasta_lasagna',

    nombre: 'Láminas de lasaña',

    aliases: [
      'lasaña',
      'lasana',
      'lasagna',
      'pasta para lasaña',
      'pasta lasagna',
      'laminas lasaña',
      'láminas lasaña',
      'laminas de pasta',
    ],

    precioUnitario: 80,

    unidad: 'kg',

    precio: {
      minimo: 60,
      promedio: 80,
      maximo: 130,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'pastas',

    basico: false,

    tags: [
      'italiano',
      'horno',
      'especial',
      'capas',
    ],

    cocinas: [
      'italiana',
      'internacional',
    ],

    tecnicas: [
      'hornear',
      'montar_capas',
      'salsear',
    ],

    nivel: 'intermedio',

    familias: [
      'pastas',
      'cereales',
      'trigo',
    ],

    usos: [
      'plato_principal',
      'horno',
    ],

    roles: [
      'base',
      'estructura',
      'transformacion',
    ],

    combinaCon: [
      'carne',
      'queso',
      'tomate',
      'verduras',
      'espinaca',
      'bechamel',
      'mozzarella',
    ],

    sustitutos: [
      'pasta_penne',
      'pasta_codito',
    ],

    sustitutosEconomicos: [
      'tortilla_maiz',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 0,
      amargo: 0,
      umami: 2,
      picante: 0,

      ahumado: 0,
      graso: 2,
      fresco: 0,
      aromatico: 1,
    },

    sabores: [
      'neutro',
      'trigo',
    ],

    texturas: [
      'capas',
      'tierna',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'lasaña boloñesa',
      'lasaña vegetariana',
      'lasaña de espinaca',
    ],
  },


  // ====================================================
  // 🇲🇽 FIDEO SECO
  // ====================================================

  {
    id: 'pasta_fideo_seco',

    nombre: 'Fideo seco',

    aliases: [
      'fideo',
      'fideo seco',
      'fideo mexicano',
      'pasta cabello corto',
    ],

    precioUnitario: 45,

    unidad: 'kg',

    precio: {
      minimo: 30,
      promedio: 45,
      maximo: 70,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'pastas',

    basico: true,

    tags: [
      'mexicano',
      'cotidiano',
      'rapido',
      'versatil',
    ],

    cocinas: [
      'mexicana',
    ],

    tecnicas: [
      'tostar',
      'cocer',
      'salsear',
    ],

    nivel: 'basico',

    familias: [
      'pastas',
      'cereales',
      'trigo',
      'pastas_mexicanas',
    ],

    usos: [
      'sopa',
      'guarnicion',
      'plato_principal',
    ],

    roles: [
      'base',
      'volumen',
      'comida_diaria',
    ],

    combinaCon: [
      'tomate',
      'ajo',
      'cebolla',
      'pollo',
      'queso',
    ],

    sustitutos: [
      'arroz_blanco',
      'pasta_codito',
    ],

    sustitutosEconomicos: [
      'arroz_blanco',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
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
      'neutro',
      'tostado',
      'trigo',
    ],

    texturas: [
      'suave',
      'tierna',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'fideo seco mexicano',
      'sopa de fideo',
      'fideo con pollo',
    ],
  },


  // ====================================================
  // 🍝 PASTA SECA GENÉRICA
  // ====================================================

  {
    id: 'pasta',

    nombre: 'Pasta seca',

    aliases: [
      'pasta',
      'pasta seca',
      'pastas',
      'pastas secas',
      'noodles',
    ],

    precioUnitario: 60,

    unidad: 'kg',

    precio: {
      minimo: 35,
      promedio: 60,
      maximo: 120,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'pastas',

    basico: true,

    tags: [
      'economico',
      'carbohidrato',
      'despensa',
      'italiano',
    ],

    cocinas: [
      'italiana',
      'internacional',
      'asiatica',
    ],

    tecnicas: [
      'hervir',
      'saltear',
      'hornear',
    ],

    nivel: 'basico',

    familias: [
      'pastas',
      'cereales',
      'trigo',
      'despensa',
    ],

    usos: [
      'platos_principales',
      'sopas',
      'guarniciones',
      'ensaladas',
    ],

    roles: [
      'base',
      'carbohidrato',
      'volumen',
    ],

    combinaCon: [
      'tomate',
      'queso',
      'crema',
      'carne',
      'pollo',
      'vegetales',
      'salsas',
    ],

    sustitutos: [
      'arroz_blanco',
      'papa',
      'tortilla_maiz',
    ],

    sustitutosEconomicos: [
      'arroz_blanco',
      'tortilla_maiz',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 1,
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
      'trigo',
    ],

    texturas: [
      'fibrosa',
      'firme',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'pasta con salsa',
      'espagueti',
      'lasaña',
      'pasta cremosa',
      'sopa de pasta',
    ],
  },


  // ====================================================
  // 🍝 MACARRÓN
  // ====================================================

  {
    id: 'pasta_macarron',

    nombre: 'Macarrón',

    aliases: [
      'macarron',
      'macarrón',
      'macarrones',
      'macaroni',
    ],

    precioUnitario: 50,

    unidad: 'kg',

    precio: {
      minimo: 35,
      promedio: 50,
      maximo: 80,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'pastas',

    basico: true,

    tags: [
      'versatil',
      'horno',
      'cremoso',
    ],

    cocinas: [
      'italiana',
      'americana',
      'internacional',
    ],

    tecnicas: [
      'hervir',
      'hornear',
      'gratinar',
    ],

    nivel: 'basico',

    familias: [
      'pastas',
      'cereales',
      'trigo',
    ],

    usos: [
      'horno',
      'ensalada',
      'plato_principal',
    ],

    roles: [
      'base',
      'textura',
    ],

    combinaCon: [
      'queso',
      'crema',
      'atun_lata',
      'verduras',
    ],

    sustitutos: [
      'pasta_codito',
      'pasta_penne',
    ],

    sustitutosEconomicos: [
      'pasta_codito',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 0,
      amargo: 0,
      umami: 2,
      picante: 0,

      ahumado: 0,
      graso: 2,
      fresco: 0,
      aromatico: 1,
    },

    sabores: [
      'neutro',
      'trigo',
    ],

    texturas: [
      'firme',
      'cremosa_con_salsa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'macarrones con queso',
      'ensalada de pasta',
      'macarrones gratinados',
    ],
  },


  // ====================================================
  // 🍝 CABELLO DE ÁNGEL
  // ====================================================

  {
    id: 'pasta_cabello_angel',

    nombre: 'Cabello de ángel',

    aliases: [
      'cabello de angel',
      'cabello de ángel',
      'capellini',
      'pasta fina',
      'angel hair pasta',
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

    subcategoria: 'pastas',

    basico: false,

    tags: [
      'italiano',
      'rapido',
      'ligero',
    ],

    cocinas: [
      'italiana',
    ],

    tecnicas: [
      'hervir',
      'salsear',
    ],

    nivel: 'intermedio',

    familias: [
      'pastas',
      'cereales',
      'trigo',
    ],

    usos: [
      'platos_ligeros',
      'sopas',
    ],

    roles: [
      'base',
      'rapidez',
    ],

    combinaCon: [
      'tomate',
      'ajo',
      'aceite_oliva',
      'mariscos',
    ],

    sustitutos: [
      'pasta_spaghetti',
      'pasta_fideo_seco',
    ],

    sustitutosEconomicos: [
      'pasta_fideo_seco',
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
      'trigo',
    ],

    texturas: [
      'muy_suave',
      'ligera',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'capellini al pomodoro',
      'pasta con ajo',
      'sopas ligeras',
    ],
  },

];