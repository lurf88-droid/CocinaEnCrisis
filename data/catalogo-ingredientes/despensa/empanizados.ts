import type { IngredienteCatalogo } from '@/data/catalogo-ingredientes';
import { SABOR_BASE } from '@/types/saborBase';

export const EMPANIZADOS: IngredienteCatalogo[] = [

  // ====================================================
  // 🍞 PAN MOLIDO
  // ====================================================

  {
    id: 'pan_molido',

    nombre: 'Pan molido',

    aliases: [
      'pan rallado',
      'breadcrumbs',
      'bread crumbs',
    ],

    precioUnitario: 55,

    unidad: 'kg',

    precio: {
      minimo: 35,
      promedio: 55,
      maximo: 90,
      moneda: 'MXN',
      actualizado: '2026-08',
    },

    categoria: 'despensa',

    subcategoria: 'empanizados',

    basico: true,

    tags: [
      'empanizado',
      'textura',
      'cocina_diaria',
    ],

    cocinas: [
      'mexicana',
      'italiana',
      'internacional',
    ],

    tecnicas: [
      'empanizar',
      'gratinar',
    ],

    nivel: 'basico',

    familias: [
      'harinas',
      'panaderia',
      'empanizados',
    ],

    usos: [
      'empanizados',
      'rellenos',
      'gratinar',
    ],

    roles: [
      'textura',
      'cobertura',
    ],

    combinaCon: [
      'huevo',
      'pollo',
      'queso',
      'pescado',
    ],

    sustitutos: [
      'harina_trigo',
      'galleta_molida',
    ],

    sustitutosEconomicos: [
      'avena',
    ],

    perfilSabor: {
      ...SABOR_BASE,

      dulce: 1,
      acido: 0,
      salado: 1,
      amargo: 0,
      umami: 2,
      picante: 0,

      ahumado: 1,
      graso: 1,
      fresco: 0,
      aromatico: 2,
    },

    sabores: [
      'pan_tostado',
    ],

    texturas: [
      'crujiente',
    ],

    temporada: [
      'todo_el_año',
    ],

    conservacion:
      'lugar_seco_y_cerrado',

    recetasCompatibles: [
      'pollo empanizado',
      'croquetas',
      'gratinados',
    ],
  },

];