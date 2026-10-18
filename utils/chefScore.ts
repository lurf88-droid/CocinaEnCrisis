import type {
  ChefMode,
} from './chefMode';


// ======================================================
// 🧠 TIPOS
// ======================================================

type PesoModo = {

  compatibilidad: number;

  compra: number;

  tiempo: number;

  popularidad: number;

  faltantes: number;

  disponibilidad: number;

};


type ChefScoreInput = {

  compatibilidad: number;

  /**
   * Valor completo aproximado de la receta.
   *
   * NO representa necesariamente lo que
   * el usuario necesita gastar ahora.
   */
  costo: number;

  /**
   * Dinero necesario para completar
   * únicamente los ingredientes faltantes.
   */
  costoCompra?: number;

  tiempo: number;

  puedeCocinar?: boolean;

  faltantes?: number;

  popularidad?: number;

  dentroPresupuesto?: boolean;

  modo?: ChefMode;

};


// ======================================================
// ⚖️ PERSONALIDAD DE CADA CRISIS
// ======================================================

const PESOS_MODO:
  Record<ChefMode, PesoModo> = {


    // ==================================================
    // 🔥 RESUÉLVEME LA COMIDA
    // ==================================================

    crisis: {

      compatibilidad:
        1.45,

      compra:
        1.05,

      tiempo:
        1.05,

      popularidad:
        0.35,

      faltantes:
        1.75,

      disponibilidad:
        1.8,

    },


    // ==================================================
    // 💰 NO QUIERO GASTAR DE MÁS
    // ==================================================

    ahorro: {

      compatibilidad:
        1.15,

      compra:
        2.15,

      tiempo:
        0.45,

      popularidad:
        0.25,

      faltantes:
        1.4,

      disponibilidad:
        1.55,

    },


    // ==================================================
    // ⚡ TENGO POCO TIEMPO
    // ==================================================

    rapido: {

      compatibilidad:
        1,

      compra:
        0.7,

      tiempo:
        2.2,

      popularidad:
        0.25,

      faltantes:
        1.45,

      disponibilidad:
        1.75,

    },


    // ==================================================
    // ❤️ QUIERO ALGO QUE SE ME ANTOJE
    // ==================================================

    antojo: {

      compatibilidad:
        1,

      compra:
        0.45,

      tiempo:
        0.5,

      popularidad:
        1.7,

      faltantes:
        0.9,

      disponibilidad:
        1.05,

    },

  };


// ======================================================
// 🛡 UTILIDADES
// ======================================================

function limitar(
  valor: number,
  minimo: number,
  maximo: number
): number {

  if (
    !Number.isFinite(
      valor
    )
  ) {

    return minimo;

  }


  return Math.max(
    minimo,
    Math.min(
      valor,
      maximo
    )
  );

}


function noNegativo(
  valor: number
): number {

  if (
    !Number.isFinite(
      valor
    )
  ) {

    return 0;

  }


  return Math.max(
    0,
    valor
  );

}


// ======================================================
// 🎯 COMPATIBILIDAD
// ======================================================

function puntosCompatibilidad(
  compatibilidad: number,
  peso: number
): number {

  /*
    Utilizamos máximo ~45 puntos base.

    Así un 100% de compatibilidad es muy bueno,
    pero no puede ganar por sí solo.
  */

  return (
    compatibilidad *
    0.45 *
    peso
  );

}


// ======================================================
// 🛒 COSTO DE COMPRA PENDIENTE
// ======================================================

function puntosCostoCompra(
  costoCompra: number,
  peso: number
): number {

  /*
    Premia cuánto falta gastar HOY.

    $0 sigue siendo excelente, pero evitamos
    darle un bonus tan enorme que destruya
    todas las demás señales.
  */

  let base = 0;


  if (
    costoCompra === 0
  ) {

    base = 28;

  } else if (
    costoCompra <= 15
  ) {

    base = 24;

  } else if (
    costoCompra <= 30
  ) {

    base = 18;

  } else if (
    costoCompra <= 50
  ) {

    base = 12;

  } else if (
    costoCompra <= 80
  ) {

    base = 6;

  }


  return (
    base *
    peso
  );

}


// ======================================================
// ⏱ TIEMPO
// ======================================================

function puntosTiempo(
  tiempo: number,
  peso: number
): number {

  let base = 0;


  if (
    tiempo <= 10
  ) {

    base = 24;

  } else if (
    tiempo <= 15
  ) {

    base = 20;

  } else if (
    tiempo <= 25
  ) {

    base = 15;

  } else if (
    tiempo <= 35
  ) {

    base = 10;

  } else if (
    tiempo <= 45
  ) {

    base = 5;

  }


  return (
    base *
    peso
  );

}


// ======================================================
// ❤️ POPULARIDAD / ATRACTIVO
// ======================================================

function puntosPopularidad(
  popularidad: number,
  peso: number
): number {

  /*
    Popularidad ayuda a decidir.

    NO decide por sí sola.

    Incluso en Antojo queda limitada a
    una influencia razonable.
  */

  return (
    popularidad *
    0.22 *
    peso
  );

}


// ======================================================
// 🧮 SCORE CHEF LUNA
// ======================================================

export function calcularChefScore({

  compatibilidad,

  costo,

  costoCompra,

  tiempo,

  puedeCocinar = false,

  faltantes = 0,

  popularidad = 0,

  dentroPresupuesto = true,

  modo = 'crisis',

}: ChefScoreInput): number {


  // ====================================================
  // 🛡 NORMALIZACIÓN
  // ====================================================

  const peso =
    PESOS_MODO[
      modo
    ];


  const compatibilidadSegura =
    limitar(
      compatibilidad,
      0,
      100
    );


  const costoTotalSeguro =
    noNegativo(
      costo
    );


  const costoCompraSeguro =
    costoCompra === undefined
      ? costoTotalSeguro
      : noNegativo(
          costoCompra
        );


  const tiempoSeguro =
    noNegativo(
      tiempo
    );


  const faltantesSeguros =
    Math.floor(
      noNegativo(
        faltantes
      )
    );


  const popularidadSegura =
    limitar(
      popularidad,
      0,
      100
    );


  let puntos =
    0;


  // ====================================================
  // 🎯 COMPATIBILIDAD REAL
  // ====================================================

  puntos +=
    puntosCompatibilidad(
      compatibilidadSegura,
      peso.compatibilidad
    );


  // ====================================================
  // 🍳 DISPONIBILIDAD
  // ====================================================

  if (
    puedeCocinar
  ) {

    puntos +=
      32 *
      peso.disponibilidad;

  }


  // ====================================================
  // 🧺 FALTANTES
  // ====================================================

  puntos -=
    faltantesSeguros *
    8 *
    peso.faltantes;


  // ====================================================
  // 🛒 A UNA COMPRA
  // ====================================================

  if (
    !puedeCocinar &&
    faltantesSeguros === 1 &&
    dentroPresupuesto
  ) {

    if (
      modo === 'crisis'
    ) {

      puntos += 20;

    } else if (
      modo === 'ahorro'
    ) {

      puntos += 14;

    } else if (
      modo === 'rapido'
    ) {

      puntos += 8;

    } else {

      puntos += 5;

    }

  }


  // ====================================================
  // 🚫 DEMASIADOS FALTANTES
  // ====================================================

  if (
    faltantesSeguros >= 3
  ) {

    switch (
      modo
    ) {

      case 'crisis':

        puntos -= 38;

        break;


      case 'ahorro':

        puntos -= 30;

        break;


      case 'rapido':

        puntos -= 35;

        break;


      case 'antojo':

        puntos -= 15;

        break;

    }

  }


  // ====================================================
  // 💰 GASTO PENDIENTE
  // ====================================================

  puntos +=
    puntosCostoCompra(
      costoCompraSeguro,
      peso.compra
    );


  // ====================================================
  // 🚫 FUERA DE PRESUPUESTO
  // ====================================================

  if (
    !puedeCocinar &&
    !dentroPresupuesto
  ) {

    switch (
      modo
    ) {

      case 'crisis':

        puntos -= 65;

        break;


      case 'ahorro':

        puntos -= 85;

        break;


      case 'rapido':

        puntos -= 35;

        break;


      case 'antojo':

        puntos -= 20;

        break;

    }

  }


  // ====================================================
  // ⏱ TIEMPO
  // ====================================================

  puntos +=
    puntosTiempo(
      tiempoSeguro,
      peso.tiempo
    );


  // ====================================================
  // ❤️ POPULARIDAD
  // ====================================================

  puntos +=
    puntosPopularidad(
      popularidadSegura,
      peso.popularidad
    );


  // ====================================================
  // 🔥 CRISIS CULINARIA
  // ====================================================

  if (
    modo === 'crisis'
  ) {

    /*
      Una crisis culinaria busca:

      1. poder empezar
      2. usar la despensa
      3. poca compra
      4. poca fricción

      Evitamos volver a regalar enormes
      bonus por algo que ya puntuamos arriba.
    */

    if (
      puedeCocinar &&
      compatibilidadSegura >= 80
    ) {

      puntos += 18;

    }


    if (
      puedeCocinar &&
      tiempoSeguro <= 30
    ) {

      puntos += 10;

    }


    if (
      !puedeCocinar &&
      faltantesSeguros === 1 &&
      dentroPresupuesto &&
      costoCompraSeguro <= 40
    ) {

      puntos += 10;

    }


    if (
      tiempoSeguro > 60
    ) {

      puntos -= 25;

    }

  }


  // ====================================================
  // 💰 AHORRO
  // ====================================================

  if (
    modo === 'ahorro'
  ) {

    /*
      Ahorro piensa principalmente:

      "¿Cuánto tengo que sacar de mi bolsillo?"
    */

    if (
      puedeCocinar &&
      costoCompraSeguro === 0
    ) {

      puntos += 22;

    }


    if (
      !puedeCocinar &&
      dentroPresupuesto &&
      costoCompraSeguro <= 20
    ) {

      puntos += 18;

    } else if (
      !puedeCocinar &&
      dentroPresupuesto &&
      costoCompraSeguro <= 40
    ) {

      puntos += 8;

    }


    /*
      Valor completo de la receta:

      señal secundaria, nunca gasto real.
    */

    if (
      costoTotalSeguro <= 40
    ) {

      puntos += 5;

    }


    if (
      costoCompraSeguro > 150
    ) {

      puntos -= 55;

    } else if (
      costoCompraSeguro > 100
    ) {

      puntos -= 35;

    } else if (
      costoCompraSeguro > 70
    ) {

      puntos -= 15;

    }

  }


  // ====================================================
  // ⚡ RÁPIDO
  // ====================================================

  if (
    modo === 'rapido'
  ) {

    /*
      Una receta de 8 minutos que requiere ir
      por tres cosas NO es realmente una
      solución rápida.
    */

    if (
      puedeCocinar &&
      tiempoSeguro <= 10
    ) {

      puntos += 25;

    } else if (
      puedeCocinar &&
      tiempoSeguro <= 15
    ) {

      puntos += 18;

    } else if (
      puedeCocinar &&
      tiempoSeguro <= 30
    ) {

      puntos += 8;

    }


    if (
      faltantesSeguros >= 2
    ) {

      puntos -= 22;

    }


    if (
      tiempoSeguro > 60
    ) {

      puntos -= 70;

    } else if (
      tiempoSeguro > 45
    ) {

      puntos -= 42;

    } else if (
      tiempoSeguro > 30
    ) {

      puntos -= 20;

    }

  }


  // ====================================================
  // ❤️ ANTOJO
  // ====================================================

  if (
    modo === 'antojo'
  ) {

    /*
      Antojo puede premiar atractivo.

      Pero antes tiene que seguir siendo una
      posibilidad razonable para el usuario.
    */

    if (
      popularidadSegura >= 85
    ) {

      puntos += 18;

    } else if (
      popularidadSegura >= 70
    ) {

      puntos += 12;

    } else if (
      popularidadSegura >= 55
    ) {

      puntos += 6;

    }


    /*
      Una receta muy atractiva que además
      realmente puedes preparar merece subir.
    */

    if (
      puedeCocinar &&
      popularidadSegura >= 70
    ) {

      puntos += 10;

    }


    /*
      Pero el antojo tampoco debe recomendar
      algo completamente ajeno a tu cocina.
    */

    if (
      compatibilidadSegura < 40
    ) {

      puntos -= 20;

    }


    if (
      faltantesSeguros >= 3
    ) {

      puntos -= 15;

    }

  }


  // ====================================================
  // 🧠 COHERENCIA FINAL
  // ====================================================

  if (
    puedeCocinar
  ) {

    puntos =
      Math.max(
        puntos,
        1
      );

  }


  // ====================================================
  // 📦 RESULTADO
  // ====================================================

  return Math.max(
    0,
    Math.round(
      puntos
    )
  );

}