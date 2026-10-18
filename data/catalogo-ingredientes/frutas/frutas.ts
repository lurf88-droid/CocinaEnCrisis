import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const FRUTAS: IngredienteCatalogo[] = [

  // ====================================================
  // 🍊 NARANJA AGRIA
  // ====================================================

  {
    id: 'naranja_agria',

    nombre: 'Naranja agria',

    aliases: [
      'naranja amarga',
      'naranja sevillana',
      'sour orange',
      'naranja agria mexicana',
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

    categoria: 'frutas',

    subcategoria: 'citricos',

    basico: false,

    tags: [
      'acido',
      'mexicano',
      'marinado',
      'fresco',
    ],

    cocinas: [
      'mexicana',
      'caribeña',
      'latinoamericana',
    ],

    tecnicas: [
      'marinar',
      'exprimir',
      'sazonar',
    ],

    nivel: 'basico',

    familias: [
      'frutas',
      'citricos',
    ],

    usos: [
      'marinados',
      'salsas',
      'cochinita_pibil',
      'bebidas',
    ],

    roles: [
      'acidez',
      'equilibrio',
      'frescura',
    ],

    combinaCon: [
      'cerdo',
      'achiote',
      'chile',
      'cebolla',
      'pescado',
    ],

    sustitutos: [
      'limon',
      'naranja+limon',
    ],

    sustitutosEconomicos: [
      'limon',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 3,
      acido: 9,
      salado: 0,
      amargo: 5,
      umami: 0,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 10,
      aromatico: 8,
    },

    sabores: [
      'acido',
      'citrico',
      'amargo',
    ],

    texturas: [
      'jugosa',
      'fibrosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'cochinita pibil',
      'ceviche',
      'marinados',
      'salsas',
    ],
  },


  // ====================================================
  // 🍎 MANZANA
  // ====================================================

  {
    id: 'manzana',

    nombre: 'Manzana',

    aliases: [
      'manzana roja',
      'manzana verde',
      'apple',
    ],

    precioUnitario: 55,

    unidad: 'kg',

    pesoPorUnidad: 180,

    precio: {
      minimo: 35,
      promedio: 55,
      maximo: 100,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'frutas_temperadas',

    basico: true,

    tags: [
      'dulce',
      'acido',
      'reposteria',
      'fresco',
    ],

    cocinas: [
      'mexicana',
      'francesa',
      'europea',
      'internacional',
    ],

    tecnicas: [
      'hornear',
      'caramelizar',
      'reducir',
      'compota',
      'crudo',
    ],

    nivel: 'basico',

    familias: [
      'frutas',
      'frutas_temperadas',
    ],

    usos: [
      'postres',
      'ensaladas',
      'salsas',
      'compotas',
      'jugos',
    ],

    roles: [
      'dulzor',
      'acidez',
      'humectacion',
      'aroma',
    ],

    combinaCon: [
      'canela',
      'avena',
      'nuez',
      'miel',
      'queso',
      'cerdo',
    ],

    sustitutos: [
      'pera',
      'durazno',
    ],

    sustitutosEconomicos: [
      'platano',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 7,
      acido: 4,
      salado: 0,
      amargo: 1,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 6,
      aromatico: 7,
    },

    sabores: [
      'dulce',
      'frutal',
      'ligeramente_acido',
    ],

    texturas: [
      'crujiente',
      'jugosa',
      'blanda_cocida',
    ],

    temporada: [
      'otoño',
      'invierno',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'tarta de manzana',
      'compota de manzana',
      'ensalada de manzana',
      'cerdo con manzana',
    ],
  },


  // ====================================================
  // 🥑 AGUACATE
  // ====================================================

  {
    id: 'aguacate',

    nombre: 'Aguacate',

    aliases: [
      'aguacate hass',
      'palta',
    ],

    precioUnitario: 120,

    unidad: 'kg',

    precio: {
      minimo: 80,
      promedio: 120,
      maximo: 180,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'verduras',

    subcategoria: 'frutos',

    basico: true,

    tags: [
      'mexicano',
      'grasa_saludable',
      'fresco',
      'gourmet_accesible',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
      'internacional',
    ],

    tecnicas: [
      'crudo',
      'machacado',
      'salsa',
    ],

    nivel: 'basico',

    familias: [
      'frutos',
    ],

    usos: [
      'guacamole',
      'tacos',
      'ensaladas',
      'salsas',
    ],

    roles: [
      'grasa',
      'cremosidad',
      'contraste',
    ],

    combinaCon: [
      'limon',
      'tomate',
      'cebolla',
      'chile',
      'huevo',
    ],

    sustitutos: [
      'hummus',
      'queso crema',
    ],

    sustitutosEconomicos: [
      'frijol machacado',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 0,
      amargo: 1,
      umami: 2,
      picante: 0,

      ahumado: 0,
      graso: 10,
      fresco: 8,
      aromatico: 5,
    },

    sabores: [
      'cremoso',
      'ligero',
    ],

    texturas: [
      'cremosa',
      'mantecosa',
    ],

    temporada: [
      'primavera',
      'verano',
    ],

    conservacion:
      'refrigerado una vez abierto',

    recetasCompatibles: [
      'guacamole',
      'tostadas',
      'tacos',
      'ensalada de aguacate',
    ],
  },


  // ====================================================
  // 🍐 PERA
  // ====================================================

  {
    id: 'pera',

    nombre: 'Pera',

    aliases: [
      'pera',
      'pear',
    ],

    precioUnitario: 80,

    unidad: 'kg',

    pesoPorUnidad: 170,

    precio: {
      minimo: 50,
      promedio: 80,
      maximo: 150,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'frutas_temperadas',

    basico: false,

    tags: [
      'dulce',
      'gourmet',
      'postre',
    ],

    cocinas: [
      'francesa',
      'europea',
      'internacional',
    ],

    tecnicas: [
      'pochar',
      'hornear',
      'reducir',
    ],

    nivel: 'intermedio',

    familias: [
      'frutas',
      'frutas_temperadas',
    ],

    usos: [
      'postres',
      'ensaladas',
      'salsas',
      'maridajes',
    ],

    roles: [
      'dulzor',
      'aroma',
      'textura',
    ],

    combinaCon: [
      'quesos',
      'nuez',
      'miel',
      'vino',
      'chocolate',
    ],

    sustitutos: [
      'manzana',
      'durazno',
    ],

    sustitutosEconomicos: [
      'platano',
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
      fresco: 6,
      aromatico: 8,
    },

    sabores: [
      'dulce',
      'floral',
      'suave',
    ],

    texturas: [
      'jugosa',
      'fibrosa',
    ],

    temporada: [
      'otoño',
      'invierno',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'pera al vino',
      'tarta de pera',
      'ensalada con queso',
    ],
  },


  // ====================================================
  // 🍌 PLÁTANO
  // ====================================================

  {
    id: 'platano',

    nombre: 'Plátano',

    aliases: [
      'platano',
      'banana',
    ],

    precioUnitario: 35,

    unidad: 'kg',

    pesoPorUnidad: 120,

    precio: {
      minimo: 20,
      promedio: 35,
      maximo: 60,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'tropicales',

    basico: true,

    tags: [
      'dulce',
      'energia',
      'reposteria',
    ],

    cocinas: [
      'mexicana',
      'caribeña',
      'internacional',
    ],

    tecnicas: [
      'freir',
      'hornear',
      'caramelizar',
      'moler',
    ],

    nivel: 'basico',

    familias: [
      'frutas',
      'tropicales',
    ],

    usos: [
      'desayunos',
      'postres',
      'licuados',
      'panaderia',
    ],

    roles: [
      'dulzor',
      'humectacion',
      'energia',
    ],

    combinaCon: [
      'canela',
      'chocolate',
      'avena',
      'nuez',
      'miel',
    ],

    sustitutos: [
      'mango',
      'papaya',
    ],

    sustitutosEconomicos: [
      'avena',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 9,
      acido: 1,
      salado: 0,
      amargo: 0,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 1,
      fresco: 5,
      aromatico: 5,
    },

    sabores: [
      'dulce',
      'cremoso',
    ],

    texturas: [
      'cremosa',
      'blanda',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'temperatura_ambiente',

    recetasCompatibles: [
      'pan de plátano',
      'licuado de plátano',
      'plátano frito',
      'postres',
    ],
  },


  // ====================================================
  // 🥭 MANGO
  // ====================================================

  {
    id: 'mango',

    nombre: 'Mango',

    aliases: [
      'mango ataulfo',
      'mango manila',
      'mango',
    ],

    precioUnitario: 70,

    unidad: 'kg',

    precio: {
      minimo: 40,
      promedio: 70,
      maximo: 140,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'tropicales',

    basico: true,

    tags: [
      'tropical',
      'dulce',
      'acido',
      'fresco',
    ],

    cocinas: [
      'mexicana',
      'tailandesa',
      'india',
      'latinoamericana',
      'internacional',
    ],

    tecnicas: [
      'crudo',
      'salsa',
      'licuado',
      'caramelizar',
      'reduccion',
    ],

    nivel: 'basico',

    familias: [
      'frutas',
      'tropicales',
    ],

    usos: [
      'ensaladas',
      'salsas',
      'postres',
      'bebidas',
      'chutney',
    ],

    roles: [
      'dulzor',
      'acidez',
      'aroma',
      'color',
    ],

    combinaCon: [
      'chile',
      'limon',
      'yogurt',
      'coco',
      'pollo',
      'pescado',
    ],

    sustitutos: [
      'papaya',
      'piña',
      'durazno',
    ],

    sustitutosEconomicos: [
      'platano',
      'manzana',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 8,
      acido: 5,
      salado: 0,
      amargo: 0,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 8,
      aromatico: 8,
    },

    sabores: [
      'dulce',
      'tropical',
      'frutal',
    ],

    texturas: [
      'jugosa',
      'fibrosa',
      'cremosa',
    ],

    temporada: [
      'primavera',
      'verano',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'salsa de mango con chile',
      'ceviche de mango',
      'smoothie de mango',
      'postres tropicales',
    ],
  },


  // ====================================================
  // 🍍 PIÑA
  // ====================================================

  {
    id: 'pina',

    nombre: 'Piña',

    aliases: [
      'piña',
      'ananas',
      'pineapple',
    ],

    precioUnitario: 35,

    unidad: 'kg',

    precio: {
      minimo: 20,
      promedio: 35,
      maximo: 70,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'tropicales',

    basico: true,

    tags: [
      'tropical',
      'acido',
      'dulce',
      'carne',
    ],

    cocinas: [
      'mexicana',
      'asiatica',
      'caribeña',
      'latinoamericana',
    ],

    tecnicas: [
      'asar',
      'caramelizar',
      'marinado',
      'crudo',
    ],

    nivel: 'basico',

    familias: [
      'frutas',
      'tropicales',
    ],

    usos: [
      'postres',
      'salsas',
      'bebidas',
      'marinados',
      'ensaladas',
    ],

    roles: [
      'acidez',
      'dulzor',
      'marinado',
      'aroma',
    ],

    combinaCon: [
      'cerdo',
      'pollo',
      'chile',
      'limon',
      'coco',
      'canela',
    ],

    sustitutos: [
      'mango',
      'papaya',
    ],

    sustitutosEconomicos: [
      'manzana',
      'platano',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 7,
      acido: 7,
      salado: 0,
      amargo: 0,
      umami: 1,
      picante: 0,

      ahumado: 1,
      graso: 0,
      fresco: 8,
      aromatico: 7,
    },

    sabores: [
      'dulce',
      'acido',
      'tropical',
    ],

    texturas: [
      'fibrosa',
      'jugosa',
    ],

    temporada: [
      'primavera',
      'verano',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'tacos al pastor',
      'pollo con piña',
      'agua de piña',
      'piña asada',
      'salsas tropicales',
    ],
  },


  // ====================================================
  // 🍈 PAPAYA
  // ====================================================

  {
    id: 'papaya',

    nombre: 'Papaya',

    aliases: [
      'papaya maradol',
      'papaya',
    ],

    precioUnitario: 40,

    unidad: 'kg',

    precio: {
      minimo: 25,
      promedio: 40,
      maximo: 80,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'tropicales',

    basico: true,

    tags: [
      'tropical',
      'dulce',
      'fresca',
      'desayuno',
    ],

    cocinas: [
      'mexicana',
      'caribeña',
      'latinoamericana',
    ],

    tecnicas: [
      'crudo',
      'licuado',
      'postre',
      'ensalada',
    ],

    nivel: 'basico',

    familias: [
      'frutas',
      'tropicales',
    ],

    usos: [
      'desayunos',
      'aguas',
      'licuados',
      'postres',
      'ensaladas',
    ],

    roles: [
      'dulzor',
      'textura',
      'frescura',
    ],

    combinaCon: [
      'limon',
      'granola',
      'yogurt',
      'miel',
      'coco',
    ],

    sustitutos: [
      'melon',
      'mango',
      'piña',
    ],

    sustitutosEconomicos: [
      'platano',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 7,
      acido: 2,
      salado: 0,
      amargo: 0,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 8,
      aromatico: 5,
    },

    sabores: [
      'dulce',
      'suave',
      'tropical',
    ],

    texturas: [
      'blanda',
      'jugosa',
    ],

    temporada: [
      'primavera',
      'verano',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'ensalada de papaya',
      'agua de papaya',
      'licuado tropical',
      'papaya con yogurt',
    ],
  },


  // ====================================================
  // 🍓 FRESA
  // ====================================================

  {
    id: 'fresa',

    nombre: 'Fresa',

    aliases: [
      'fresa',
      'fresas',
      'strawberry',
    ],

    precioUnitario: 120,

    unidad: 'kg',

    precio: {
      minimo: 80,
      promedio: 120,
      maximo: 250,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'bayas',

    basico: true,

    tags: [
      'dulce',
      'acido',
      'postre',
      'gourmet',
    ],

    cocinas: [
      'francesa',
      'europea',
      'internacional',
    ],

    tecnicas: [
      'reduccion',
      'salsa',
      'reposteria',
      'crudo',
    ],

    nivel: 'basico',

    familias: [
      'frutas',
      'bayas',
    ],

    usos: [
      'postres',
      'pasteles',
      'bebidas',
      'salsas',
    ],

    roles: [
      'dulzor',
      'acidez',
      'color',
      'aroma',
    ],

    combinaCon: [
      'chocolate',
      'crema',
      'vainilla',
      'queso',
      'yogurt',
    ],

    sustitutos: [
      'zarzamora',
      'frambuesa',
    ],

    sustitutosEconomicos: [
      'manzana',
      'platano',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 7,
      acido: 6,
      salado: 0,
      amargo: 0,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 9,
      aromatico: 8,
    },

    sabores: [
      'dulce',
      'acido',
      'floral',
    ],

    texturas: [
      'jugosa',
      'tierna',
    ],

    temporada: [
      'primavera',
      'verano',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'tarta de fresa',
      'mermelada',
      'pastel de fresa',
      'smoothie',
    ],
  },


  // ====================================================
  // 🫐 ZARZAMORA
  // ====================================================

  {
    id: 'zarzamora',

    nombre: 'Zarzamora',

    aliases: [
      'zarzamora',
      'blackberry',
    ],

    precioUnitario: 180,

    unidad: 'kg',

    precio: {
      minimo: 120,
      promedio: 180,
      maximo: 350,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'bayas',

    basico: false,

    tags: [
      'gourmet',
      'acido',
      'postre',
    ],

    cocinas: [
      'francesa',
      'europea',
      'internacional',
    ],

    tecnicas: [
      'reduccion',
      'salsa',
      'reposteria',
    ],

    nivel: 'intermedio',

    familias: [
      'frutas',
      'bayas',
    ],

    usos: [
      'postres',
      'salsas',
      'mermeladas',
      'bebidas',
    ],

    roles: [
      'acidez',
      'color',
      'aroma',
    ],

    combinaCon: [
      'queso',
      'crema',
      'chocolate',
      'vainilla',
    ],

    sustitutos: [
      'frambuesa',
      'fresa',
    ],

    sustitutosEconomicos: [
      'fresa',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 5,
      acido: 7,
      salado: 0,
      amargo: 1,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 8,
      aromatico: 7,
    },

    sabores: [
      'acido',
      'frutal',
      'intenso',
    ],

    texturas: [
      'jugosa',
      'con_semillas',
    ],

    temporada: [
      'verano',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'salsa de zarzamora',
      'postres gourmet',
      'cheesecake',
    ],
  },


  // ====================================================
  // 🍓 FRAMBUESA
  // ====================================================

  {
    id: 'frambuesa',

    nombre: 'Frambuesa',

    aliases: [
      'frambuesa',
      'raspberry',
    ],

    precioUnitario: 250,

    unidad: 'kg',

    precio: {
      minimo: 180,
      promedio: 250,
      maximo: 450,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'bayas',

    basico: false,

    tags: [
      'gourmet',
      'acido',
      'reposteria',
    ],

    cocinas: [
      'francesa',
      'europea',
    ],

    tecnicas: [
      'salsa',
      'coulis',
      'reposteria',
    ],

    nivel: 'chef',

    familias: [
      'frutas',
      'bayas',
    ],

    usos: [
      'postres',
      'pasteles',
      'salsas',
    ],

    roles: [
      'aroma',
      'acidez',
      'decoracion',
    ],

    combinaCon: [
      'chocolate',
      'vainilla',
      'queso',
      'crema',
    ],

    sustitutos: [
      'zarzamora',
      'fresa',
    ],

    sustitutosEconomicos: [
      'fresa',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 6,
      acido: 8,
      salado: 0,
      amargo: 1,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 9,
      aromatico: 9,
    },

    sabores: [
      'acido',
      'floral',
      'intenso',
    ],

    texturas: [
      'jugosa',
      'con_semillas',
    ],

    temporada: [
      'verano',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'coulis de frambuesa',
      'postres franceses',
      'tartas',
    ],
  },


  // ====================================================
  // 🍋 LIMÓN
  // ====================================================

  {
    id: 'limon',

    nombre: 'Limón',

    aliases: [
      'limon verde',
      'limón mexicano',
      'lime',
    ],

    precioUnitario: 45,

    unidad: 'kg',

    pesoPorUnidad: 80,

    precio: {
      minimo: 25,
      promedio: 45,
      maximo: 90,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'citricos',

    basico: true,

    tags: [
      'acido',
      'fresco',
      'equilibrio',
      'basico_cocina',
    ],

    cocinas: [
      'mexicana',
      'mediterranea',
      'asiatica',
      'internacional',
    ],

    tecnicas: [
      'marinar',
      'aderezo',
      'salsa',
      'infusion',
    ],

    nivel: 'basico',

    familias: [
      'frutas',
      'citricos',
    ],

    usos: [
      'ceviches',
      'salsas',
      'bebidas',
      'aderezos',
      'postres',
    ],

    roles: [
      'acidez',
      'equilibrio',
      'aroma',
    ],

    combinaCon: [
      'pescado',
      'mariscos',
      'chile',
      'cilantro',
      'aguacate',
      'pollo',
    ],

    sustitutos: [
      'lima',
      'vinagre',
    ],

    sustitutosEconomicos: [
      'vinagre_blanco',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 10,
      salado: 0,
      amargo: 2,
      umami: 0,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 10,
      aromatico: 8,
    },

    sabores: [
      'acido',
      'fresco',
      'citrico',
    ],

    texturas: [
      'jugosa',
      'fibrosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'temperatura_ambiente_refrigerado',

    recetasCompatibles: [
      'ceviche',
      'guacamole',
      'agua de limon',
      'tacos de pescado',
      'aderezos',
    ],
  },


  // ====================================================
  // 🍊 NARANJA
  // ====================================================

  {
    id: 'naranja',

    nombre: 'Naranja',

    aliases: [
      'naranja dulce',
      'orange',
    ],

    precioUnitario: 40,

    unidad: 'kg',

    precio: {
      minimo: 25,
      promedio: 40,
      maximo: 80,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'citricos',

    basico: true,

    tags: [
      'acido',
      'dulce',
      'aroma',
      'bebida',
    ],

    cocinas: [
      'mexicana',
      'francesa',
      'internacional',
    ],

    tecnicas: [
      'reduccion',
      'marinado',
      'jugo',
      'postre',
    ],

    nivel: 'basico',

    familias: [
      'frutas',
      'citricos',
    ],

    usos: [
      'bebidas',
      'postres',
      'salsas',
      'marinados',
    ],

    roles: [
      'acidez',
      'dulzor',
      'aroma',
    ],

    combinaCon: [
      'cerdo',
      'pollo',
      'chocolate',
      'canela',
      'miel',
    ],

    sustitutos: [
      'mandarina',
      'toronja',
    ],

    sustitutosEconomicos: [
      'limon',
      'vinagre',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 6,
      acido: 5,
      salado: 0,
      amargo: 1,
      umami: 0,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 8,
      aromatico: 9,
    },

    sabores: [
      'dulce',
      'citrico',
      'aromatico',
    ],

    texturas: [
      'jugosa',
      'fibrosa',
    ],

    temporada: [
      'invierno',
    ],

    conservacion:
      'temperatura_ambiente_refrigerado',

    recetasCompatibles: [
      'pollo a la naranja',
      'cerdo con naranja',
      'mermelada',
      'postres',
    ],
  },


  // ====================================================
  // 🍊 TORONJA
  // ====================================================

  {
    id: 'toronja',

    nombre: 'Toronja',

    aliases: [
      'toronja',
      'pomelo',
      'grapefruit',
    ],

    precioUnitario: 70,

    unidad: 'kg',

    precio: {
      minimo: 40,
      promedio: 70,
      maximo: 120,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'citricos',

    basico: false,

    tags: [
      'acido',
      'amargo',
      'fresco',
    ],

    cocinas: [
      'internacional',
    ],

    tecnicas: [
      'ensalada',
      'crudo',
      'bebidas',
    ],

    nivel: 'intermedio',

    familias: [
      'frutas',
      'citricos',
    ],

    usos: [
      'ensaladas',
      'bebidas',
      'postres',
    ],

    roles: [
      'acidez',
      'contraste',
      'frescura',
    ],

    combinaCon: [
      'miel',
      'yogurt',
      'menta',
      'aguacate',
    ],

    sustitutos: [
      'naranja',
      'limon',
    ],

    sustitutosEconomicos: [
      'naranja',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 3,
      acido: 7,
      salado: 0,
      amargo: 7,
      umami: 0,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 9,
      aromatico: 7,
    },

    sabores: [
      'acido',
      'amargo',
      'citrico',
    ],

    texturas: [
      'jugosa',
    ],

    temporada: [
      'invierno',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'ensalada de citricos',
      'bebidas frescas',
      'postres',
    ],
  },


  // ====================================================
  // ❤️ GRANADA
  // ====================================================

  {
    id: 'granada',

    nombre: 'Granada',

    aliases: [
      'granada roja',
      'granada fruta',
      'pomegranate',
    ],

    precioUnitario: 160,

    unidad: 'kg',

    pesoPorUnidad: 250,

    precio: {
      minimo: 100,
      promedio: 160,
      maximo: 300,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'frutas',

    subcategoria: 'frutas_especiales',

    basico: false,

    tags: [
      'gourmet',
      'color',
      'acido',
      'decoracion',
    ],

    cocinas: [
      'mexicana',
      'mediterranea',
      'medio_oriente',
      'internacional',
    ],

    tecnicas: [
      'decorar',
      'salsa',
      'jugo',
      'ensalada',
    ],

    nivel: 'intermedio',

    familias: [
      'frutas',
      'semillas',
      'especiales',
    ],

    usos: [
      'ensaladas',
      'salsas',
      'postres',
      'bebidas',
      'decoracion',
    ],

    roles: [
      'acidez',
      'color',
      'textura',
      'aroma',
    ],

    combinaCon: [
      'queso',
      'nuez',
      'pollo',
      'cerdo',
      'yogurt',
      'miel',
    ],

    sustitutos: [
      'arándano',
      'zarzamora',
      'fresa',
    ],

    sustitutosEconomicos: [
      'fresa',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 5,
      acido: 7,
      salado: 0,
      amargo: 1,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 0,
      fresco: 9,
      aromatico: 7,
    },

    sabores: [
      'dulce',
      'acido',
      'frutal',
    ],

    texturas: [
      'jugosa',
      'crujiente',
    ],

    temporada: [
      'otoño',
      'invierno',
    ],

    conservacion:
      'refrigerado',

    recetasCompatibles: [
      'chiles en nogada',
      'ensalada mediterranea',
      'salsa de granada',
      'postres gourmet',
    ],
  },

];