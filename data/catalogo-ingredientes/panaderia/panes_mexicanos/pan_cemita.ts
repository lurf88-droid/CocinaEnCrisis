import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const PAN_CEMITA: IngredienteCatalogo[] = [

  // ====================================================
  // 🥖 PAN DE CEMITA
  // ====================================================

  {
    id: 'pan_cemita',

    nombre: 'Pan de cemita',

    aliases: [
      'cemita',
      'cemita poblana',
      'pan para cemita',
      'pan de cemita poblana',
    ],

    precioUnitario: 10,

    unidad: 'pieza',

    precio: {
      minimo: 7,
      promedio: 10,
      maximo: 15,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'panaderia',

    subcategoria: 'panes_mexicanos',

    basico: false,

    tags: [
      'pan',
      'mexicano',
      'puebla',
      'cemita',
      'ajonjoli',
    ],

    cocinas: [
      'mexicana',
      'poblana',
      'antojitos_mexicanos',
    ],

    tecnicas: [
      'horneado',
      'cortar',
      'rellenar',
    ],

    nivel: 'basico',

    familias: [
      'panaderia',
      'panes_mexicanos',
    ],

    usos: [
      'cemitas',
      'emparedados',
    ],

    roles: [
      'base',
      'carbohidrato',
      'estructura',
    ],

    combinaCon: [
      'papalo',
      'aguacate',
      'quesillo',
      'chile_chipotle',
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
      'trigo',
      'ajonjoli',
      'tostado',
    ],

    texturas: [
      'corteza_firme',
      'miga_suave',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'temperatura_ambiente_en_bolsa_cerrada',

    recetasCompatibles: [
      'cemita-poblana',
    ],
  },

];