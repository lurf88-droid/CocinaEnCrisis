import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const MASAS: IngredienteCatalogo[] = [

  // ====================================================
  // 🥟 LÁMINAS WONTON
  // ====================================================

  {
    id: 'laminas_wonton',

    nombre: 'Láminas wonton',

    aliases: [
      'wonton wrappers',
      'wonton wrapper',
      'masa wonton',
      'laminas wonton',
      'láminas de wonton',
      'masa para wonton',
    ],

    precioUnitario: 120,

    unidad: 'kg',

    precio: {
      minimo: 80,
      promedio: 120,
      maximo: 200,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'masas',

    basico: false,

    tags: [
      'asiatico',
      'relleno',
      'cocina_creativa',
    ],

    cocinas: [
      'china',
      'asiatica',
    ],

    tecnicas: [
      'rellenar',
      'freir',
      'cocer',
    ],

    nivel: 'intermedio',

    familias: [
      'masas',
      'harinas',
      'derivados_de_cereales',
    ],

    usos: [
      'dumplings',
      'sopas',
      'botanas',
    ],

    roles: [
      'contenedor',
      'textura',
    ],

    combinaCon: [
      'carne',
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
      'crujiente',
      'tierna',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'refrigerado_o_congelado',

    recetasCompatibles: [
      'wontons',
      'dumplings',
      'sopas',
    ],
  },

];