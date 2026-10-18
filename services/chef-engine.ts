import type {
  ResultadoBusqueda,
} from '@/types/receta';

import {
  calcularChefScore,
} from '@/utils/chefScore';

import type {
  ChefMode,
} from '@/utils/chefMode';

import {
  encontrarIngredienteClave,
} from '@/utils/desbloqueo';

import {
  obtenerMensajeChef,
} from '@/utils/chefMessages';

import {
  obtenerIngrediente,
} from '@/data/catalogo-ingredientes';


// ======================================================
// 🧠 TIPOS INTERNOS
// ======================================================

type DashboardContext = {
  resultados: ResultadoBusqueda[];
  presupuesto: number;
  modo: ChefMode;
};


type TipoRecomendacion =
  | 'chef'
  | 'crisis'
  | 'ahorro'
  | 'rapido'
  | 'antojo'
  | 'oportunidad'
  | 'sin-resultados';


type RecomendacionPrincipal = {
  tipo: TipoRecomendacion;
  titulo: string;
  subtitulo: string;
  receta: ResultadoBusqueda | null;
};


type EstadisticasChef = {
  total: number;
  listas: number;
  parciales: number;
  casiListas: number;
  fueraPresupuesto: number;
  crisis: number;
};


// ======================================================
// 🌙 CHEF ENGINE
// ======================================================

export class ChefEngine {


  // ====================================================
  // 🧮 SCORE ÚNICO
  // ====================================================

  private static scoreGeneral(
    receta: ResultadoBusqueda,
    modo: ChefMode
  ): number {

    /*
      UNA SOLA FUENTE DE VERDAD.

      ChefEngine:
      - organiza
      - filtra
      - decide

      chefScore:
      - calcula la puntuación
    */

   return calcularChefScore({

  compatibilidad:
    receta.compatibilidad,

  costo:
    receta.costoTotal,

  costoCompra:
    receta.costoFaltantes,

  tiempo:
    receta.tiempoMinutos,

  puedeCocinar:
    receta.puedeCocinar,

  faltantes:
    receta.faltantes.length,

  popularidad:
    receta.popularidad ?? 0,

  dentroPresupuesto:
    receta.dentroPresupuesto,

  modo,

});

  }


  // ====================================================
  // 🔀 DESEMPATE GENERAL
  // ====================================================

  private static desempatar(
    a: ResultadoBusqueda,
    b: ResultadoBusqueda
  ): number {

    // ==================================================
    // 1. YA SE PUEDE COCINAR
    // ==================================================

    if (
      a.puedeCocinar !==
      b.puedeCocinar
    ) {

      return a.puedeCocinar
        ? -1
        : 1;

    }


    // ==================================================
    // 2. COMPRA DENTRO DE PRESUPUESTO
    // ==================================================

    if (
      a.dentroPresupuesto !==
      b.dentroPresupuesto
    ) {

      return a.dentroPresupuesto
        ? -1
        : 1;

    }


    // ==================================================
    // 3. MENOS FALTANTES
    // ==================================================

    if (
      a.faltantes.length !==
      b.faltantes.length
    ) {

      return (
        a.faltantes.length -
        b.faltantes.length
      );

    }


    // ==================================================
    // 4. MAYOR COMPATIBILIDAD
    // ==================================================

    if (
      b.compatibilidad !==
      a.compatibilidad
    ) {

      return (
        b.compatibilidad -
        a.compatibilidad
      );

    }


    // ==================================================
    // 5. MÁS RÁPIDA
    // ==================================================

    if (
      a.tiempoMinutos !==
      b.tiempoMinutos
    ) {

      return (
        a.tiempoMinutos -
        b.tiempoMinutos
      );

    }


    // ==================================================
    // 6. MENOR COSTO COMPLETO
    // ==================================================

    return (
      a.costoTotal -
      b.costoTotal
    );

  }
// ====================================================
// 🍽 ¿RESUELVE UNA COMIDA?
// ====================================================

private static esComidaPrincipal(
  receta: ResultadoBusqueda
): boolean {

  return (
    receta.categoria === 'desayuno' ||
    receta.categoria === 'comida' ||
    receta.categoria === 'cena'
  );

}


// ====================================================
// 🥤 OPCIONES COMPLEMENTARIAS
// ====================================================

private static esComplementaria(
  receta: ResultadoBusqueda
): boolean {

  return (
    receta.categoria === 'bebida' ||
    receta.categoria === 'salsa' ||
    receta.categoria === 'base_culinaria'
  );

}


// ====================================================
// 🍳 UNIVERSO DE DECISIÓN
// ====================================================

  private static obtenerUniversoDecision(
    recetas: ResultadoBusqueda[],
    modo: ChefMode
  ): ResultadoBusqueda[] {
    if (recetas.length === 0) return [];

    // 1. Crisis: Solo comidas principales (no bebidas sueltas ni salsas)
    if (modo === 'crisis') {
      const comidas = recetas.filter(receta => this.esComidaPrincipal(receta));
      if (comidas.length > 0) return comidas;

      const noComplementarias = recetas.filter(receta => !this.esComplementaria(receta));
      if (noComplementarias.length > 0) return noComplementarias;
    }

    // 2. Ahorro y Rápido: Pueden ser comidas, pero también snacks rápidos o guarniciones
    if (modo === 'ahorro' || modo === 'rapido') {
      // Solo evitamos cosas que no llenan (salsas o bases), pero permitimos bebidas/snacks
      const noComplementarias = recetas.filter(receta => !this.esComplementaria(receta));
      if (noComplementarias.length > 0) return noComplementarias;
    }

    // 3. Antojo: Tiene el universo completo (postres, snacks, bebidas, todo)
    return recetas;
  }
  // ====================================================
  // 🏆 MEJOR RECETA
  // ====================================================

  static mejorReceta(
    recetas: ResultadoBusqueda[] = [],
    modo: ChefMode = 'crisis',
    excluirTitulos: string[] = []
  ): ResultadoBusqueda | null {
    if (recetas.length === 0) return null;

    // 1. Universo base
    let universo = this.obtenerUniversoDecision(recetas, modo);
    if (universo.length === 0) return null;

    // 2. Excluir recetas que YA ganaron en otros modos
    if (excluirTitulos.length > 0) {
      const filtradas = universo.filter(r => !excluirTitulos.includes(r.titulo));
      if (filtradas.length > 0) {
        universo = filtradas;
      }
    }

    // 3. Pre-filtro diferencial por modo
    let candidatas = universo;

    if (modo === 'crisis') {
      const listas = candidatas.filter(r => r.puedeCocinar);
      if (listas.length > 0) {
        candidatas = listas;
      } else {
        const casi = candidatas.filter(
          r => r.faltantes.length === 1 && r.dentroPresupuesto && r.tiempoMinutos <= 60
        );
        if (casi.length > 0) candidatas = casi;
      }
    }

    if (modo === 'rapido') {
      candidatas = [...candidatas]
        .sort((a, b) => a.tiempoMinutos - b.tiempoMinutos)
        .slice(0, 5);
    }

    if (modo === 'ahorro') {
      candidatas = [...candidatas]
        .sort((a, b) => {
          const ca = a.costoFaltantes ?? 0;
          const cb = b.costoFaltantes ?? 0;
          if (ca !== cb) return ca - cb;
          return a.costoTotal - b.costoTotal;
        })
        .slice(0, 5);
    }

    if (modo === 'antojo') {
      candidatas = [...candidatas]
        .sort((a, b) => (b.popularidad ?? 0) - (a.popularidad ?? 0))
        .slice(0, 5);
    }

    // 4. Ordenar y devolver la mejor
    return [...candidatas].sort((a, b) => {
      const scoreA = this.scoreGeneral(a, modo);
      const scoreB = this.scoreGeneral(b, modo);
      if (scoreB !== scoreA) return scoreB - scoreA;
      return this.desempatar(a, b);
    })[0];
  }
  // ====================================================
  // ✅ RECETAS LISTAS
  // ====================================================

  static recetasListas(
    recetas: ResultadoBusqueda[] = []
  ): ResultadoBusqueda[] {

    /*
      Una receta lista significa:

      - no falta ningún ingrediente no básico
      - no necesita gasto adicional para completarse
    */

    return recetas
      .filter(
        receta =>
          receta.puedeCocinar
      )
      .sort(
        (a, b) =>
          this.desempatar(
            a,
            b
          )
      );

  }


  // ====================================================
  // 🍳 RECETAS COCINABLES
  // ====================================================

  static recetasCocinables(
    recetas: ResultadoBusqueda[] = []
  ): ResultadoBusqueda[] {

    /*
      Conservamos esta colección porque varias
      pantallas pueden consumirla.

      Con la nueva semántica de presupuesto,
      una receta cocinable no requiere compras,
      por lo que normalmente coincide con
      recetasListas().
    */

    return recetas
      .filter(
        receta =>
          receta.puedeCocinar
      )
      .sort(
        (a, b) =>
          this.desempatar(
            a,
            b
          )
      );

  }


  // ====================================================
  // 🧺 RECETAS PARCIALES
  // ====================================================

  static recetasParciales(
    recetas: ResultadoBusqueda[] = []
  ): ResultadoBusqueda[] {

    return recetas
      .filter(
        receta =>
          !receta.puedeCocinar
      )
      .sort(
        (a, b) => {

          // =============================================
          // Compra dentro del presupuesto
          // =============================================

          if (
            a.dentroPresupuesto !==
            b.dentroPresupuesto
          ) {

            return a.dentroPresupuesto
              ? -1
              : 1;

          }


          // =============================================
          // Menos faltantes
          // =============================================

          if (
            a.faltantes.length !==
            b.faltantes.length
          ) {

            return (
              a.faltantes.length -
              b.faltantes.length
            );

          }


          // =============================================
          // Mayor compatibilidad
          // =============================================

          if (
            b.compatibilidad !==
            a.compatibilidad
          ) {

            return (
              b.compatibilidad -
              a.compatibilidad
            );

          }


          // =============================================
          // Más rápida
          // =============================================

          if (
            a.tiempoMinutos !==
            b.tiempoMinutos
          ) {

            return (
              a.tiempoMinutos -
              b.tiempoMinutos
            );

          }


          return (
            a.costoTotal -
            b.costoTotal
          );

        }
      );

  }


  // ====================================================
  // 🔥 RECETAS VIABLES PARA CRISIS
  // ====================================================

  static recetasModoCrisis(
  recetas: ResultadoBusqueda[] = []
): ResultadoBusqueda[] {

  const universo =
    this.obtenerUniversoDecision(
      recetas,
      'crisis'
    );


  return universo
    .filter(
      receta => {

        if (
          receta.puedeCocinar
        ) {

          return true;

        }


        if (
          receta.faltantes.length !== 1
        ) {

          return false;

        }


        if (
          !receta.dentroPresupuesto
        ) {

          return false;

        }


        return (
          receta.tiempoMinutos <= 60
        );

      }
    )
    .sort(
      (a, b) => {

        const scoreA =
          this.scoreGeneral(
            a,
            'crisis'
          );


        const scoreB =
          this.scoreGeneral(
            b,
            'crisis'
          );


        if (
          scoreB !==
          scoreA
        ) {

          return (
            scoreB -
            scoreA
          );

        }


        return this.desempatar(
          a,
          b
        );

      }
    );

}

  // ====================================================
  // 🔥 SÁLVAME LA COMIDA
  // ====================================================

  static salvameLaComida(
  recetas: ResultadoBusqueda[] = []
): ResultadoBusqueda | null {

  if (
    recetas.length === 0
  ) {
    return null;
  }

  const crisis =
    this.recetasModoCrisis(
      recetas
    );

  if (
    crisis.length > 0
  ) {
    return crisis[0];
  }

  const mejor =
    this.mejorReceta(
      recetas,
      'crisis'
    );

  if (!mejor) {
    return null;
  }

  const viable =
    mejor.puedeCocinar ||
    (
      mejor.faltantes.length <= 1 &&
      mejor.dentroPresupuesto
    ) ||
    mejor.compatibilidad >= 60;

  return viable
    ? mejor
    : null;
}

  // ====================================================
  // 💰 RECETA MÁS BARATA
  // ====================================================

  static recetaMasBarata(
    recetas: ResultadoBusqueda[] = []
  ): ResultadoBusqueda | null {

    if (
      recetas.length === 0
    ) {

      return null;

    }


    const listas =
      this.recetasListas(
        recetas
      );


    /*
      Si ya existen recetas listas,
      priorizamos esas porque requieren
      cero compras para poder cocinarse.
    */

    const fuente =
      listas.length > 0
        ? listas
        : recetas.filter(
            receta =>
              receta.dentroPresupuesto
          );


    const fuenteFinal =
      fuente.length > 0
        ? fuente
        : recetas;


    return [...fuenteFinal]
      .sort(
        (a, b) => {

          if (
            a.faltantes.length !==
            b.faltantes.length
          ) {

            return (
              a.faltantes.length -
              b.faltantes.length
            );

          }


          return (
            a.costoTotal -
            b.costoTotal
          );

        }
      )[0];

  }


  // ====================================================
  // ⚡ RECETA MÁS RÁPIDA
  // ====================================================

  static recetaMasRapida(
    recetas: ResultadoBusqueda[] = []
  ): ResultadoBusqueda | null {

    if (
      recetas.length === 0
    ) {

      return null;

    }


    const listas =
      this.recetasListas(
        recetas
      );


    const cercanas =
      recetas.filter(
        receta =>
          receta.dentroPresupuesto &&
          receta.faltantes.length <= 1
      );


    const fuente =
      listas.length > 0
        ? listas
        : cercanas.length > 0
          ? cercanas
          : recetas;


    return [...fuente]
      .sort(
        (a, b) => {

          if (
            a.tiempoMinutos !==
            b.tiempoMinutos
          ) {

            return (
              a.tiempoMinutos -
              b.tiempoMinutos
            );

          }


          if (
            a.faltantes.length !==
            b.faltantes.length
          ) {

            return (
              a.faltantes.length -
              b.faltantes.length
            );

          }


          return (
            a.costoTotal -
            b.costoTotal
          );

        }
      )[0];

  }


  // ====================================================
  // 🧠 RAZONES GENERALES
  // ====================================================

  static razonesMejorReceta(
    receta: ResultadoBusqueda
  ): string[] {

    const razones:
      string[] = [];


    // ==================================================
    // DISPONIBILIDAD
    // ==================================================

    if (
      receta.puedeCocinar
    ) {

      razones.push(
        'Puedes prepararla con lo que ya tienes.'
      );

    } else if (
      receta.faltantes.length === 1
    ) {

      razones.push(
        'Estás a un solo ingrediente de poder cocinarla.'
      );

    } else if (
      receta.faltantes.length === 2
    ) {

      razones.push(
        'Te faltan solamente dos ingredientes.'
      );

    }


    // ==================================================
    // COMPATIBILIDAD
    // ==================================================

    if (
      receta.compatibilidad >= 90
    ) {

      razones.push(
        `Coincidencia excelente con tu despensa: ${receta.compatibilidad}%.`
      );

    } else if (
      receta.compatibilidad >= 70
    ) {

      razones.push(
        `Aprovecha muy bien tu despensa: ${receta.compatibilidad}% de compatibilidad.`
      );

    } else if (
      receta.compatibilidad >= 50
    ) {

      razones.push(
        `Ya tienes buena parte de lo necesario: ${receta.compatibilidad}%.`
      );

    }


    // ==================================================
    // PRESUPUESTO
    // ==================================================

    if (
      receta.puedeCocinar
    ) {

      razones.push(
        'No necesitas comprar nada para completar esta receta.'
      );

    } else if (
      receta.dentroPresupuesto
    ) {

      razones.push(
        'Lo que te falta entra en el presupuesto que elegiste.'
      );

    } else {

      razones.push(
        'Lo que necesitas comprar supera tu presupuesto actual.'
      );

    }


    // ==================================================
    // TIEMPO
    // ==================================================

    if (
      receta.tiempoMinutos <= 15
    ) {

      razones.push(
        'Es una preparación especialmente rápida.'
      );

    } else if (
      receta.tiempoMinutos <= 30
    ) {

      razones.push(
        'Tiene un tiempo práctico para cocinar hoy.'
      );

    }


    // ==================================================
    // RENDIMIENTO
    // ==================================================

    if (
      receta.porciones >= 4
    ) {

      razones.push(
        `Rinde ${receta.porciones} porciones.`
      );

    }


    return razones.slice(
      0,
      5
    );

  }


  // ====================================================
  // 🔥 RAZONES CRISIS
  // ====================================================

  static razonesCrisis(
    receta: ResultadoBusqueda
  ): string[] {

    const razones:
      string[] = [];


    if (
      receta.puedeCocinar
    ) {

      razones.push(
        'No necesitas seguir pensando: ya puedes preparar esta receta.'
      );

    }


    if (
      !receta.puedeCocinar &&
      receta.faltantes.length === 1
    ) {

      razones.push(
        receta.dentroPresupuesto
          ? 'Solo necesitas resolver un ingrediente para cocinarla.'
          : 'Solo falta un ingrediente, pero actualmente supera tu presupuesto.'
      );

    }


    if (
      receta.compatibilidad >= 80
    ) {

      razones.push(
        'Aprovecha casi todo lo que ya tienes.'
      );

    }


    if (
      receta.tiempoMinutos <= 30
    ) {

      razones.push(
        'Es una decisión práctica para cocinar hoy.'
      );

    }


    if (
      !receta.puedeCocinar &&
      receta.dentroPresupuesto
    ) {

      razones.push(
        'La compra pendiente entra en el presupuesto que marcaste.'
      );

    }


    return razones.slice(
      0,
      4
    );

  }


  // ====================================================
  // 🔓 INGREDIENTE ESTRATÉGICO
  // ====================================================

  static consejoDesbloqueo(
    recetas: ResultadoBusqueda[],
    modo: ChefMode = 'crisis'
  ) {

    const resultado =
      encontrarIngredienteClave(
        recetas,
        modo
      );


    if (!resultado) {

      return null;

    }


    /*
      recetasNuevas es la evidencia concreta
      de lo que realmente se desbloquea.
    */

    const recetasNuevas =
      resultado.recetasNuevas ??
      [];


    const cantidad =
      recetasNuevas.length > 0
        ? recetasNuevas.length
        : resultado.recetasDesbloqueadas;


    if (
      cantidad <= 0
    ) {

      return null;

    }


    const ingredienteInfo =
      obtenerIngrediente(
        resultado.ingrediente
      );


    const nombreIngrediente =
      ingredienteInfo?.nombre ??
      resultado.ingrediente;


    return {

      mensajeChef:
        cantidad === 1
          ? `Con ${nombreIngrediente} desbloqueas una receta nueva.`
          : `Con ${nombreIngrediente} desbloqueas ${cantidad} recetas nuevas.`,


      ingrediente:
        resultado.ingrediente,


      cantidad,


      recetasDesbloqueadas:
        cantidad,


      recetasNuevas,


      score:
        resultado.score,


      costo:
        resultado.costo,


      popularidad:
        resultado.popularidad,


      confianza:
        resultado.confianza,


      razon:
        resultado.razon,


      mensaje:
        cantidad === 1
          ? (
              `Si vas a comprar algo, Chef Luna recomienda ${nombreIngrediente}. ` +
              `Por aproximadamente $${Math.round(resultado.costo)}, ` +
              'puedes desbloquear una receta.'
            )
          : (
              `Si vas a comprar algo, Chef Luna recomienda ${nombreIngrediente}. ` +
              `Por aproximadamente $${Math.round(resultado.costo)}, ` +
              `puedes desbloquear ${cantidad} recetas.`
            ),

    };

  }


  // ====================================================
  // 📋 RESUMEN
  // ====================================================

  static resumenChef(
    receta: ResultadoBusqueda
  ): string[] {

    const resumen:
      string[] = [

        `${receta.compatibilidad}% compatible`,

        `$${Math.round(
          receta.costoTotal
        )} valor aprox.`,

        `${receta.tiempoMinutos} min`,

        `${receta.porciones} porciones`,

      ];


    if (
      receta.puedeCocinar
    ) {

      resumen.unshift(
        'Lista para cocinar'
      );

    } else if (
      receta.faltantes.length === 1
    ) {

      resumen.unshift(
        receta.dentroPresupuesto
          ? 'A una compra de cocinar'
          : 'A un ingrediente de cocinar'
      );

    }


    return resumen;

  }


  // ====================================================
  // 💬 EXPLICACIÓN
  // ====================================================

  static explicacionChef(
    receta: ResultadoBusqueda
  ): string[] {

    return this.razonesMejorReceta(
      receta
    );

  }


  // ====================================================
  // 📝 EXPLICACIÓN SIMPLE
  // ====================================================

  static explicarDecision(
    receta: {
      compatibilidad: number;
      costoTotal: number;
      tiempoMinutos: number;
    }
  ): string[] {

    const mensajes:
      string[] = [];


    if (
      receta.compatibilidad >= 90
    ) {

      mensajes.push(
        `Coincidencia excelente: ${receta.compatibilidad}% con tu despensa.`
      );

    } else if (
      receta.compatibilidad >= 70
    ) {

      mensajes.push(
        `Buena coincidencia: ${receta.compatibilidad}% con tu despensa.`
      );

    } else if (
      receta.compatibilidad >= 40
    ) {

      mensajes.push(
        `Ya tienes parte importante de lo necesario: ${receta.compatibilidad}%.`
      );

    }


    if (
      receta.tiempoMinutos <= 15
    ) {

      mensajes.push(
        `Muy rápida: aproximadamente ${receta.tiempoMinutos} minutos.`
      );

    } else if (
      receta.tiempoMinutos <= 30
    ) {

      mensajes.push(
        `Tiempo práctico: aproximadamente ${receta.tiempoMinutos} minutos.`
      );

    }


    if (
      receta.costoTotal <= 30
    ) {

      mensajes.push(
        `El valor completo estimado es de $${Math.round(receta.costoTotal)}.`
      );

    } else if (
      receta.costoTotal <= 60
    ) {

      mensajes.push(
        `Valor completo aproximado: $${Math.round(receta.costoTotal)}.`
      );

    }


    return mensajes;

  }


  // ====================================================
  // 🌙 PERSONALIDAD
  // ====================================================

  static personalidadChef(
    receta: ResultadoBusqueda,
    modo: ChefMode = 'crisis'
  ): string {

    if (
      modo === 'crisis'
    ) {

      if (
        receta.puedeCocinar
      ) {

        return (
          'Ya está. No le des más vueltas: esta es la receta que Chef Luna elegiría hoy.'
        );

      }


      if (
        receta.faltantes.length === 1 &&
        receta.dentroPresupuesto
      ) {

        return (
          'Estás muy cerca. Resuelve ese ingrediente y salimos de la crisis culinaria.'
        );

      }


      if (
        receta.faltantes.length === 1
      ) {

        return (
          'Solo falta una cosa, pero Chef Luna está cuidando que la solución también sea viable para tu presupuesto.'
        );

      }


      return (
        'Chef Luna ya redujo las opciones. Esta es la salida más razonable con lo que tienes.'
      );

    }


    let nivel = 1;


    if (
      receta.puedeCocinar &&
      receta.compatibilidad >= 80
    ) {

      nivel = 3;

    } else if (
      receta.faltantes.length <= 1 ||
      receta.compatibilidad >= 60
    ) {

      nivel = 2;

    }


    return obtenerMensajeChef(
      modo,
      nivel
    );

  }


  // ====================================================
  // 🎯 ALTERNATIVAS
  // ====================================================

  static alternativasChef(
    recetas: ResultadoBusqueda[],
    principal: ResultadoBusqueda | null,
    modo: ChefMode = 'crisis'
  ): ResultadoBusqueda[] {

    if (!principal) {

      return [];

    }


    return recetas
      .filter(
        receta =>
          receta.id !==
          principal.id
      )
      .sort(
        (a, b) => {

          const scoreA =
            this.scoreGeneral(
              a,
              modo
            );


          const scoreB =
            this.scoreGeneral(
              b,
              modo
            );


          if (
            scoreB !==
            scoreA
          ) {

            return (
              scoreB -
              scoreA
            );

          }


          return this.desempatar(
            a,
            b
          );

        }
      )
      .slice(
        0,
        3
      );

  }


  // ====================================================
  // 💬 CONSEJO GLOBAL
  // ====================================================

  static consejoChef(
    presupuesto: number,
    recetas: ResultadoBusqueda[],
    modo: ChefMode = 'crisis'
  ): string {

    const listas =
      this.recetasListas(
        recetas
      );


    const casiListas =
      recetas.filter(
        receta =>
          !receta.puedeCocinar &&
          receta.faltantes.length === 1 &&
          receta.dentroPresupuesto
      );


    if (
      recetas.length === 0
    ) {

      return (
        'Dime qué tienes en tu cocina y Chef Luna encontrará una opción para ti.'
      );

    }


    // ==================================================
    // CRISIS
    // ==================================================

    if (
      modo === 'crisis'
    ) {

      if (
        listas.length > 0
      ) {

        return (
          'Crisis culinaria resuelta. Ya tienes opciones que puedes cocinar y Chef Luna eligió una para hoy.'
        );

      }


      if (
        casiListas.length > 0
      ) {

        return (
          'Estás muy cerca. Hay recetas que necesitan solamente una compra y esa compra entra en tu presupuesto.'
        );

      }


      return (
        'Chef Luna ya redujo las opciones y buscará la salida más cercana a lo que tienes.'
      );

    }


    // ==================================================
    // AHORRO
    // ==================================================

    if (
      modo === 'ahorro'
    ) {

      if (
        listas.length > 0
      ) {

        return (
          'Tienes recetas que puedes preparar sin comprar nada adicional. Conviene aprovechar primero tu despensa.'
        );

      }


      if (
        presupuesto <= 50
      ) {

        return (
          'Con este presupuesto conviene comprar únicamente ingredientes que desbloqueen una receta de inmediato.'
        );

      }


      return (
        'Chef Luna buscará aprovechar tu despensa y reducir compras innecesarias.'
      );

    }


    // ==================================================
    // RÁPIDO
    // ==================================================

    if (
      modo === 'rapido'
    ) {

      const rapida =
        this.recetaMasRapida(
          recetas
        );


      if (rapida) {

        return (
          `Chef Luna está priorizando tiempo. La mejor salida disponible ronda los ${rapida.tiempoMinutos} minutos.`
        );

      }

    }


    // ==================================================
    // ANTOJO
    // ==================================================

    if (
      modo === 'antojo'
    ) {

      return (
        'Hoy Chef Luna prioriza una receta atractiva y disfrutable sin perder de vista tu despensa.'
      );

    }


    return (
      `Encontré ${listas.length} ${
        listas.length === 1
          ? 'opción lista'
          : 'opciones listas'
      } para cocinar.`
    );

  }


  // ====================================================
  // 🎛 RAZONAMIENTO POR MODO
  // ====================================================

  static razonamientoChef(
    receta: ResultadoBusqueda,
    modo: ChefMode
  ): string[] {

    if (
      modo === 'crisis'
    ) {

      return this.razonesCrisis(
        receta
      );

    }


    const razones:
      string[] = [];


    // ==================================================
    // AHORRO
    // ==================================================

    if (
      modo === 'ahorro'
    ) {

      if (
        receta.puedeCocinar
      ) {

        razones.push(
          'No necesitas comprar nada para completar esta receta.'
        );

      } else if (
        receta.dentroPresupuesto
      ) {

        razones.push(
          'Lo que necesitas comprar entra en tu presupuesto.'
        );

      }


      if (
        receta.costoTotal <= 40
      ) {

        razones.push(
          'Además, el valor completo de la receta es contenido.'
        );

      }

    }


    // ==================================================
    // RÁPIDO
    // ==================================================

    if (
      modo === 'rapido'
    ) {

      if (
        receta.tiempoMinutos <= 15
      ) {

        razones.push(
          'Es una opción especialmente rápida.'
        );

      } else if (
        receta.tiempoMinutos <= 30
      ) {

        razones.push(
          'Tiene un tiempo práctico para hoy.'
        );

      }

    }


    // ==================================================
    // ANTOJO
    // ==================================================

    if (
      modo === 'antojo'
    ) {

      if (
        (receta.popularidad ?? 0) >= 70
      ) {

        razones.push(
          'Es una receta especialmente atractiva dentro de tus opciones.'
        );

      }


      if (
        receta.puedeCocinar
      ) {

        razones.push(
          'Puedes darte el gusto sin necesitar completar la despensa.'
        );

      }

    }


    // ==================================================
    // COMPATIBILIDAD
    // ==================================================

    if (
      receta.compatibilidad >= 80
    ) {

      razones.push(
        'Aprovecha gran parte de los ingredientes que ya tienes.'
      );

    }


    if (
      receta.faltantes.length === 1 &&
      receta.dentroPresupuesto
    ) {

      razones.push(
        'Una sola compra podría desbloquearla.'
      );

    }


    return razones.slice(
      0,
      4
    );

  }


  // ====================================================
  // 🎯 RECOMENDACIÓN PRINCIPAL
  // ====================================================

  static recomendacionPrincipal(
    recetas: ResultadoBusqueda[],
    presupuesto: number,
    modo: ChefMode = 'crisis'
  ): RecomendacionPrincipal {

    // ==================================================
    // SIN RESULTADOS
    // ==================================================

    if (
      recetas.length === 0
    ) {

      return {

        tipo:
          'sin-resultados',

        titulo:
          '¿Qué tienes en casa?',

        subtitulo:
          'Agrega algunos ingredientes y Chef Luna encontrará una salida.',

        receta:
          null,

      };

    }


    // ==================================================
    // CRISIS
    // ==================================================

    if (
      modo === 'crisis'
    ) {

      const receta =
        this.salvameLaComida(
          recetas
        );


      if (
        receta?.puedeCocinar
      ) {

        return {

          tipo:
            'crisis',

          titulo:
            'Chef Luna decidió por ti',

          subtitulo:
            'No le des más vueltas. Ya tienes lo necesario para preparar esta opción.',

          receta,

        };

      }


      if (
        receta &&
        receta.faltantes.length === 1 &&
        receta.dentroPresupuesto
      ) {

        return {

          tipo:
            'oportunidad',

          titulo:
            'Estás a una compra de resolver la comida',

          subtitulo:
            'Esta es la opción viable más cercana a lo que ya tienes.',

          receta,

        };

      }


      return {

        tipo:
          'crisis',

        titulo:
          'Esta es tu mejor salida',

        subtitulo:
          'Chef Luna redujo las opciones para que no tengas que decidir entre demasiadas recetas.',

        receta,

      };

    }


    const listas =
      this.recetasListas(
        recetas
      );


    // ==================================================
    // NINGUNA LISTA
    // ==================================================

    if (
      listas.length === 0
    ) {

      const oportunidad =
        recetas
          .filter(
            receta =>
              receta.faltantes.length === 1 &&
              receta.dentroPresupuesto
          )
          .sort(
            (a, b) => {

              const scoreA =
                this.scoreGeneral(
                  a,
                  modo
                );


              const scoreB =
                this.scoreGeneral(
                  b,
                  modo
                );


              if (
                scoreB !==
                scoreA
              ) {

                return (
                  scoreB -
                  scoreA
                );

              }


              return this.desempatar(
                a,
                b
              );

            }
          )[0];


      if (
        oportunidad
      ) {

        return {

          tipo:
            'oportunidad',

          titulo:
            'A una compra de cocinar',

          subtitulo:
            'Chef Luna encontró una receta que puedes desbloquear con una sola compra dentro de tu presupuesto.',

          receta:
            oportunidad,

        };

      }


      const mejor =
        this.mejorReceta(
          recetas,
          modo
        );


      return {

        tipo:
          'oportunidad',

        titulo:
          'Mejor opción para completar',

        subtitulo:
          `Chef Luna buscó la alternativa más cercana con un presupuesto de $${Math.round(
            Math.max(
              0,
              presupuesto
            )
          )}.`,

        receta:
          mejor,

      };

    }


    // ==================================================
    // RÁPIDO
    // ==================================================

    if (
      modo === 'rapido'
    ) {

      return {

        tipo:
          'rapido',

        titulo:
          'Lo más rápido para cocinar',

        subtitulo:
          'Ya tienes los ingredientes. Chef Luna priorizó tiempo.',

        receta:
          this.mejorReceta(
            listas,
            'rapido'
          ),

      };

    }


    // ==================================================
    // AHORRO
    // ==================================================

    if (
      modo === 'ahorro'
    ) {

      return {

        tipo:
          'ahorro',

        titulo:
          'Mejor opción para ahorrar',

        subtitulo:
          'Chef Luna priorizó aprovechar lo que ya tienes y evitar compras.',

        receta:
          this.mejorReceta(
            listas,
            'ahorro'
          ),

      };

    }


    // ==================================================
    // ANTOJO
    // ==================================================

    if (
      modo === 'antojo'
    ) {

      return {

        tipo:
          'antojo',

        titulo:
          'Hoy toca darte un gusto',

        subtitulo:
          'Chef Luna priorizó una receta atractiva entre las opciones que ya puedes preparar.',

        receta:
          this.mejorReceta(
            listas,
            'antojo'
          ),

      };

    }


    // ==================================================
    // FALLBACK
    // ==================================================

    return {

      tipo:
        'chef',

      titulo:
        'Recomendación de Chef Luna',

      subtitulo:
        'La mejor combinación entre despensa, tiempo y presupuesto.',

      receta:
        this.mejorReceta(
          listas,
          modo
        ),

    };

  }


  // ====================================================
  // 📊 DASHBOARD
  // ====================================================

     static dashboard({
    resultados = [],
    presupuesto,
    modo,
  }: DashboardContext) {

    // 🎯 CALCULAR LAS 4 RECETAS DISTINTAS
    const mejorCrisis = this.mejorReceta(resultados, 'crisis');
    
    const excluirAhorro = mejorCrisis ? [mejorCrisis.titulo] : [];
    const mejorAhorro = this.mejorReceta(resultados, 'ahorro', excluirAhorro);

    const excluirRapido = [
      ...excluirAhorro, 
      ...(mejorAhorro ? [mejorAhorro.titulo] : [])
    ];
    const mejorRapido = this.mejorReceta(resultados, 'rapido', excluirRapido);

    const excluirAntojo = [
      ...excluirRapido, 
      ...(mejorRapido ? [mejorRapido.titulo] : [])
    ];
    const mejorAntojo = this.mejorReceta(resultados, 'antojo', excluirAntojo);

    // 🎯 SELECCIONAR LA DEL MODO ACTUAL
    let mejor = null;
    if (modo === 'crisis') mejor = mejorCrisis;
    else if (modo === 'ahorro') mejor = mejorAhorro;
    else if (modo === 'rapido') mejor = mejorRapido;
    else if (modo === 'antojo') mejor = mejorAntojo;
    else mejor = this.mejorReceta(resultados, modo);

    // 🔎 LOG DE VERIFICACIÓN (Para que veamos si funciona)
    if (__DEV__) {
      console.warn(
        `🏆 LOS 4 MODOS:\n🔥 Crisis: ${mejorCrisis?.titulo}\n💰 Ahorro: ${mejorAhorro?.titulo}\n⚡ Rápido: ${mejorRapido?.titulo}\n❤️ Antojo: ${mejorAntojo?.titulo}`
      );
    }

    const listas = this.recetasListas(resultados);
    const cocinables = this.recetasCocinables(resultados);
    const parciales = this.recetasParciales(resultados);
    const crisis = this.recetasModoCrisis(resultados);

    const casiListas = resultados.filter(
      receta => !receta.puedeCocinar && receta.faltantes.length === 1 && receta.dentroPresupuesto
    );

    const fueraPresupuesto = resultados.filter(
      receta => !receta.puedeCocinar && !receta.dentroPresupuesto
    );

    const estadisticas: EstadisticasChef = {
      total: resultados.length,
      listas: listas.length,
      parciales: parciales.length,
      casiListas: casiListas.length,
      fueraPresupuesto: fueraPresupuesto.length,
      crisis: crisis.length,
    };

    return {
      mejorReceta: mejor,
      recomendacionPrincipal: this.recomendacionPrincipal(resultados, presupuesto, modo),
      razonesChef: mejor ? this.razonamientoChef(mejor, modo) : [],
      razonamientoChef: mejor ? this.razonamientoChef(mejor, modo) : [],
      personalidad: mejor ? this.personalidadChef(mejor, modo) : null,
      resumenChef: mejor ? this.resumenChef(mejor) : [],
      desbloqueo: this.consejoDesbloqueo(resultados, modo),
      consejo: this.consejoChef(presupuesto, resultados, modo),
      alternativas: this.alternativasChef(resultados, mejor, modo),
      recetaMasBarata: this.recetaMasBarata(resultados),
      recetaMasRapida: this.recetaMasRapida(resultados),
      recetasListas: listas,
      recetasCocinables: cocinables,
      recetasParciales: parciales,
      recetasCrisis: crisis,
      estadisticas,
    };
  }
  // ====================================================
  // 🗂 ORGANIZAR RESULTADOS
  // ====================================================

  static organizarResultados(
    recetas: ResultadoBusqueda[],
    modo: ChefMode = 'crisis'
  ) {

    return {

      mejorReceta:
        modo === 'crisis'
          ? this.salvameLaComida(
              recetas
            )
          : this.mejorReceta(
              recetas,
              modo
            ),


      recetasListas:
        this.recetasListas(
          recetas
        ),


      recetasCocinables:
        this.recetasCocinables(
          recetas
        ),


      recetasParciales:
        this.recetasParciales(
          recetas
        ),


      recetasCrisis:
        this.recetasModoCrisis(
          recetas
        ),

    };

  }

}