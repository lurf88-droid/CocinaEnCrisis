import type {
  ChefMode,
} from './chefMode';


// ======================================================
// 🧠 TIPOS
// ======================================================

type Props = {

  /**
   * Número de recetas que esta compra
   * desbloquea inmediatamente.
   */
  recetasDesbloqueadas: number;


  /**
   * Costo aproximado de comprar
   * este ingrediente.
   */
  costo: number;


  /**
   * Qué tan útil / frecuente es el ingrediente
   * dentro del universo de recetas.
   *
   * Escala esperada: 0 - 100.
   */
  popularidad: number;


  /**
   * Los ingredientes básicos no deberían
   * considerarse compras estratégicas,
   * porque no bloquean recetas.
   */
  basico?: boolean;


  /**
   * Personalidad de decisión de Chef Luna.
   */
  modo?: ChefMode;

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
    !Number.isFinite(valor)
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
    !Number.isFinite(valor)
  ) {

    return 0;

  }


  return Math.max(
    0,
    valor
  );

}


// ======================================================
// 🛒 SCORE DE COMPRA ESTRATÉGICA
// ======================================================

export function calcularChefShoppingScore({

  recetasDesbloqueadas,

  costo,

  popularidad,

  basico = false,

  modo = 'crisis',

}: Props): number {


  // ====================================================
  // 🛡 NORMALIZACIÓN
  // ====================================================

  const desbloqueadasSeguras =
    Math.floor(
      noNegativo(
        recetasDesbloqueadas
      )
    );


  const costoSeguro =
    noNegativo(
      costo
    );


  const popularidadSegura =
    limitar(
      popularidad,
      0,
      100
    );


  // ====================================================
  // 🚫 NO ES UNA COMPRA ESTRATÉGICA
  // ====================================================

  /*
    Si no desbloquea ninguna receta,
    no tiene sentido recomendarla desde
    el módulo de desbloqueo.
  */

  if (
    desbloqueadasSeguras === 0
  ) {

    return 0;

  }


  /*
    Los básicos no bloquean recetas.

    Por lo tanto tampoco deben aparecer
    como ingrediente estratégico.
  */

  if (
    basico
  ) {

    return 0;

  }


  let score =
    0;


  // ====================================================
  // 🔥 IMPACTO CULINARIO
  // ====================================================

  /*
    Este es el factor más importante.

    La función principal de esta compra es:

    "¿Cuántas recetas nuevas puedo cocinar
    si compro este ingrediente?"
  */

  score +=
    desbloqueadasSeguras *
    24;


  // ====================================================
  // 💡 EFICIENCIA DE COMPRA
  // ====================================================

  /*
    Costo aproximado por receta desbloqueada.

    Ejemplo:

    ingrediente A:
    $20 / 4 recetas = $5 por receta

    ingrediente B:
    $20 / 1 receta = $20 por receta

    A debe considerarse una compra
    mucho más estratégica.
  */

  const costoPorDesbloqueo =
    costoSeguro /
    desbloqueadasSeguras;


  if (
    costoPorDesbloqueo <= 5
  ) {

    score += 30;

  } else if (
    costoPorDesbloqueo <= 10
  ) {

    score += 24;

  } else if (
    costoPorDesbloqueo <= 20
  ) {

    score += 16;

  } else if (
    costoPorDesbloqueo <= 30
  ) {

    score += 8;

  }


  // ====================================================
  // ⭐ VERSATILIDAD
  // ====================================================

  /*
    Popularidad no manda sobre el desbloqueo,
    pero sirve para favorecer ingredientes
    que probablemente vuelvan a ser útiles.
  */

  score +=
    popularidadSegura *
    0.22;


  // ====================================================
  // 💰 COSTO ABSOLUTO
  // ====================================================

  if (
    costoSeguro <= 15
  ) {

    score += 28;

  } else if (
    costoSeguro <= 30
  ) {

    score += 20;

  } else if (
    costoSeguro <= 50
  ) {

    score += 10;

  } else if (
    costoSeguro > 100
  ) {

    score -= 18;

  }


  // ====================================================
  // 🎯 PERSONALIDAD SEGÚN MODO
  // ====================================================

  switch (
    modo
  ) {


    // ==================================================
    // 💰 AHORRO
    // ==================================================

    case 'ahorro': {

      /*
        Ahorro busca máximo impacto
        con mínimo desembolso.
      */

      if (
        costoSeguro <= 15
      ) {

        score += 32;

      } else if (
        costoSeguro <= 30
      ) {

        score += 22;

      } else if (
        costoSeguro <= 50
      ) {

        score += 8;

      } else if (
        costoSeguro > 60
      ) {

        score -= 28;

      }


      if (
        desbloqueadasSeguras >= 3
      ) {

        score += 22;

      } else if (
        desbloqueadasSeguras === 2
      ) {

        score += 14;

      }


      /*
        Premio adicional a una compra
        realmente eficiente.
      */

      if (
        costoPorDesbloqueo <= 10
      ) {

        score += 18;

      }


      break;

    }


    // ==================================================
    // ⚡ RÁPIDO
    // ==================================================

    case 'rapido': {

      /*
        No conocemos el tiempo de las recetas
        desbloqueadas en esta función.

        No inventamos información.

        Premiamos únicamente una compra sencilla
        que abra varias posibilidades.
      */

      if (
        desbloqueadasSeguras >= 3
      ) {

        score += 22;

      } else if (
        desbloqueadasSeguras === 2
      ) {

        score += 15;

      }


      if (
        costoSeguro <= 30
      ) {

        score += 8;

      }


      break;

    }


    // ==================================================
    // ❤️ ANTOJO
    // ==================================================

    case 'antojo': {

      /*
        Antojo tolera un poco más de costo.

        Aquí la popularidad pesa más porque
        buscamos ingredientes relacionados con
        opciones atractivas.
      */

      score +=
        popularidadSegura *
        0.18;


      if (
        popularidadSegura >= 80
      ) {

        score += 24;

      } else if (
        popularidadSegura >= 65
      ) {

        score += 14;

      }


      if (
        desbloqueadasSeguras >= 2
      ) {

        score += 8;

      }


      break;

    }


    // ==================================================
    // 🔥 CRISIS
    // ==================================================

    case 'crisis': {

      /*
        Crisis culinaria:

        "¿Qué compro para poder cocinar YA?"

        El impacto inmediato domina.
      */

      score +=
        desbloqueadasSeguras *
        13;


      if (
        desbloqueadasSeguras >= 4
      ) {

        score += 42;

      } else if (
        desbloqueadasSeguras === 3
      ) {

        score += 34;

      } else if (
        desbloqueadasSeguras === 2
      ) {

        score += 22;

      } else {

        score += 10;

      }


      /*
        Resolver una crisis no debería
        requerir una compra exagerada.
      */

      if (
        costoSeguro <= 20
      ) {

        score += 20;

      } else if (
        costoSeguro <= 40
      ) {

        score += 8;

      } else if (
        costoSeguro > 60
      ) {

        score -= 20;

      }


      /*
        Si una compra barata abre varias recetas,
        es exactamente el comportamiento deseado.
      */

      if (
        desbloqueadasSeguras >= 2 &&
        costoPorDesbloqueo <= 15
      ) {

        score += 18;

      }


      break;

    }

  }


  // ====================================================
  // 📦 RESULTADO
  // ====================================================

  return Math.max(
    0,
    Math.round(
      score
    )
  );

}