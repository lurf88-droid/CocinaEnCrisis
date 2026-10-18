// ======================================================
// 🌙 MODOS DE CHEF LUNA
// ======================================================

export type ChefMode =
  | 'crisis'
  | 'ahorro'
  | 'rapido'
  | 'antojo';


// ======================================================
// 🧠 CONFIGURACIÓN DE MODO
// ======================================================

export type ChefModeConfig = {
  id: ChefMode;

  nombre: string;

  titulo: string;

  descripcion: string;

  objetivo: string;
};


// ======================================================
// 🍳 CONFIGURACIONES
// ======================================================

export const CHEF_MODES:
  Record<ChefMode, ChefModeConfig> = {

    // ==================================================
    // 🔥 CRISIS CULINARIA
    // ==================================================

    crisis: {

      id:
        'crisis',

      nombre:
        'Resuélveme la comida',

      titulo:
        'No quiero seguir pensando',

      descripcion:
        'Chef Luna decide por ti usando lo que ya tienes y buscando la salida con menos complicaciones.',

      objetivo:
        'Resolver la comida con la menor fricción posible.',

    },


    // ==================================================
    // 💰 AHORRO
    // ==================================================

    ahorro: {

      id:
        'ahorro',

      nombre:
        'No quiero gastar de más',

      titulo:
        'Cuida mi bolsillo',

      descripcion:
        'Chef Luna aprovecha tu despensa y prioriza recetas que necesiten poca o ninguna compra adicional.',

      objetivo:
        'Reducir el gasto necesario para poder cocinar.',

    },


    // ==================================================
    // ⚡ RÁPIDO
    // ==================================================

    rapido: {

      id:
        'rapido',

      nombre:
        'Tengo poco tiempo',

      titulo:
        'Necesito resolver rápido',

      descripcion:
        'Chef Luna prioriza recetas rápidas y evita opciones que requieran demasiadas compras o complicaciones.',

      objetivo:
        'Llegar a una comida viable en el menor tiempo posible.',

    },


    // ==================================================
    // ❤️ ANTOJO
    // ==================================================

    antojo: {

      id:
        'antojo',

      nombre:
        'Quiero algo que se me antoje',

      titulo:
        'Quiero disfrutar la comida',

      descripcion:
        'Chef Luna busca una opción atractiva y disfrutable sin ignorar lo que realmente tienes disponible.',

      objetivo:
        'Encontrar una receta apetecible que siga siendo razonable para tu cocina.',

    },

  };


// ======================================================
// 🔎 OBTENER CONFIGURACIÓN
// ======================================================

export function obtenerConfiguracionModo(
  modo: ChefMode
): ChefModeConfig {

  return CHEF_MODES[
    modo
  ];

}


// ======================================================
// ♻️ COMPATIBILIDAD CON CÓDIGO ANTERIOR
// ======================================================

/*
  Conservamos este nombre para no romper
  imports existentes.

  IMPORTANTE:

  Los pesos matemáticos ya NO viven aquí.

  La puntuación real de Chef Luna se define
  exclusivamente en:

  utils/chefScore.ts
*/

export function obtenerMultiplicadorModo(
  modo: ChefMode
) {

  const config =
    obtenerConfiguracionModo(
      modo
    );


  return {

    nombre:
      config.nombre,

    descripcion:
      config.descripcion,

    costoPeso:
      1,

    tiempoPeso:
      1,

  };

}