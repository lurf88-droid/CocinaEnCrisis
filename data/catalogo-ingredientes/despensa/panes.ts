import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const PANES: IngredienteCatalogo[] = [

  // ====================================================
  // 🫓 PAN PITA
  // ====================================================

  {
    id: 'pan_pita',

    nombre: 'Pan pita',

    aliases: [
      'pita',
      'pan arabe',
      'pan árabe',
      'pita bread',
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

    subcategoria: 'panes',

    basico: false,

    tags: [
      'mediterraneo',
      'rellenable',
      'versatil',
    ],

    cocinas: [
      'arabe',
      'mediterranea',
    ],

    tecnicas: [
      'calentar',
      'rellenar',
      'tostar',
    ],

    nivel: 'basico',

    familias: [
      'panes',
      'panaderia',
      'trigo',
    ],

    usos: [
      'wraps',
      'sandwiches',
      'botanas',
    ],

    roles: [
      'base',
      'contenedor',
    ],

    combinaCon: [
      'hummus',
      'pollo',
      'verduras',
      'queso',
    ],

    sustitutos: [],

    sustitutosEconomicos: [
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
      aromatico: 2,
    },

    sabores: [
      'pan',
    ],

    texturas: [
      'flexible',
      'esponjosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_y_cerrado',

    recetasCompatibles: [
      'gyro',
      'wraps',
      'hummus con pita',
    ],
  },


  // ====================================================
  // 🥖 BOLILLO
  // ====================================================

  {
    id: 'bolillo',

    nombre: 'Bolillo',

    aliases: [
      'bolillo',
      'pan bolillo',
      'pambazo blanco',
      'pan blanco mexicano',
      'rollo mexicano',
      'birote',
    ],

    precioUnitario: 5,

    unidad: 'pieza',

    precio: {
      minimo: 2,
      promedio: 5,
      maximo: 10,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'panaderia',

    subcategoria: 'panes_mexicanos',

    basico: true,

    tags: [
      'economico',
      'mexicano',
      'basico',
      'pan',
    ],

    cocinas: [
      'mexicana',
      'latinoamericana',
    ],

    tecnicas: [
      'hornear',
      'tostar',
      'rellenar',
    ],

    nivel: 'basico',

    familias: [
      'panes',
      'trigo',
      'panaderia',
      'panaderia_mexicana',
      'panes_mexicanos',
    ],

    usos: [
      'tortas',
      'lonches',
      'desayunos',
      'antojitos',
    ],

    roles: [
      'base',
      'carbohidrato',
      'soporte',
    ],

    combinaCon: [
      'jamon',
      'queso',
      'frijol',
      'aguacate',
      'carne',
      'pollo',
      'huevo',
    ],

    sustitutos: [],

    sustitutosEconomicos: [
      'tortilla_maiz',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 2,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 1,
      fresco: 1,
      aromatico: 2,
    },

    sabores: [
      'trigo',
      'neutro',
      'ligeramente_dulce',
    ],

    texturas: [
      'crujiente_exterior',
      'tierno_interior',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_fresco_o_congelado_para_conservar',

    recetasCompatibles: [
      'torta mexicana',
      'molletes',
      'lonche',
      'bolillo con frijoles',
      'antojitos mexicanos',
    ],
  },


  // ====================================================
  // 🥖 PAN FRANCÉS COMITECO
  // ====================================================

  {
    id: 'pan_frances_comiteco',

    nombre: 'Pan francés comiteco',

    aliases: [
      'pan francés comiteco',
      'pan frances comiteco',
      'pan francés de Comitán',
      'pan frances de Comitan',
      'pan comiteco',
    ],

    precioUnitario: 8,

    unidad: 'pieza',

    precio: {
      minimo: 5,
      promedio: 8,
      maximo: 12,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'panaderia',

    subcategoria: 'panes_mexicanos',

    basico: false,

    tags: [
      'pan',
      'pan_frances',
      'pan_mexicano',
      'chiapas',
      'comitan',
      'comitan_de_dominguez',
      'tradicional',
    ],

    cocinas: [
      'mexicana',
      'chiapaneca',
      'comiteca',
    ],

    tecnicas: [
      'amasar',
      'fermentar',
      'hornear',
      'abrir',
      'rellenar',
    ],

    nivel: 'intermedio',

    familias: [
      'panes',
      'trigo',
      'panaderia',
      'panaderia_mexicana',
      'panes_mexicanos',
      'panes_salados',
      'ingredientes_regionales',
    ],

    usos: [
      'pan_compuesto',
      'bocadillos',
      'pan_relleno',
      'acompañamientos',
    ],

    roles: [
      'base',
      'carbohidrato',
      'soporte',
      'saciedad',
    ],

    combinaCon: [
      'frijol_colorado',
      'carne_cerdo',
      'queso_anejo',
      'zanahoria',
      'chile_ancho',
    ],

    sustitutos: [
      'bolillo',
    ],

    sustitutosEconomicos: [
      'bolillo',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 2,
      amargo: 0,
      umami: 1,
      picante: 0,

      ahumado: 0,
      graso: 1,
      fresco: 0,
      aromatico: 3,
    },

    sabores: [
      'trigo',
      'horneado',
      'ligeramente_salado',
      'panificado',
    ],

    texturas: [
      'corteza_ligera',
      'miga_suave',
      'esponjosa',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'temperatura_ambiente_en_bolsa_o_recipiente_cerrado',

    recetasCompatibles: [
      'pan-compuesto-comiteco',
    ],
  },

];