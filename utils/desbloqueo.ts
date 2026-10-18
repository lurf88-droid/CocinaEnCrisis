import type {
  ResultadoBusqueda,
} from '@/types/receta';

import {
  calcularChefShoppingScore,
} from './chefShoppingScore';

import type {
  ChefMode,
} from './chefMode';

import {
  obtenerIngrediente,
} from '@/data/catalogo-ingredientes';


// ======================================================
// 🧠 TIPOS
// ======================================================

type IngredienteScore = {

  ingrediente: string;

  /*
    Recetas que REALMENTE puedes cocinar
    comprando solamente este ingrediente.
  */
  recetasDesbloqueadas: number;

  recetasNuevas: string[];

  score: number;

  razon: string;

  popularidad: number;

  costo: number;

  confianza: number;

};


type CandidatoInterno = {

  ingrediente: string;

  recetasDesbloqueadas:
    Set<string>;

  recetasAyudadas:
    Set<string>;

  /*
    Costos reales de las recetas que este
    ingrediente desbloquea inmediatamente.
  */
  costosDesbloqueo:
    number[];

};


// ======================================================
// 🛒 ENCONTRAR COMPRA ESTRATÉGICA
// ======================================================

export function encontrarIngredienteClave(

  recetas: ResultadoBusqueda[],

  modo: ChefMode = 'crisis'

): IngredienteScore | null {


  // ====================================================
  // 🧺 CANDIDATOS
  // ====================================================

  const candidatos =
    new Map<
      string,
      CandidatoInterno
    >();


  // ====================================================
  // 🍳 ANALIZAR RECETAS
  // ====================================================

  recetas.forEach(
    receta => {

      // ===============================================
      // YA PUEDE COCINARLA
      // ===============================================

      if (
        !receta.faltantes ||
        receta.faltantes.length === 0
      ) {

        return;

      }


      // ===============================================
      // LIMPIAR Y VALIDAR FALTANTES
      // ===============================================

      const faltantesValidos =
        [
          ...new Set(
            receta.faltantes.filter(
              ingrediente => {

                const info =
                  obtenerIngrediente(
                    ingrediente
                  );


                if (!info) {

                  if (__DEV__) {

                    console.warn(
                      '⚠️ Ingrediente faltante inexistente:',
                      ingrediente,
                      'en',
                      receta.titulo
                    );

                  }


                  return false;

                }


                /*
                  Los ingredientes básicos no
                  forman parte de una compra
                  estratégica.
                */

                return (
                  !info.basico
                );

              }
            )
          ),
        ];


      if (
        faltantesValidos.length === 0
      ) {

        return;

      }


      // ===============================================
      // ANALIZAR CADA FALTANTE
      // ===============================================

      faltantesValidos.forEach(
        ingrediente => {

          const info =
            obtenerIngrediente(
              ingrediente
            );


          if (!info) {

            return;

          }


          const idCanonico =
            info.id;


          let candidato =
            candidatos.get(
              idCanonico
            );


          if (!candidato) {

            candidato = {

              ingrediente:
                idCanonico,

              recetasDesbloqueadas:
                new Set<string>(),

              recetasAyudadas:
                new Set<string>(),

              costosDesbloqueo:
                [],

            };


            candidatos.set(
              idCanonico,
              candidato
            );

          }


          // =============================================
          // UTILIDAD GENERAL
          // =============================================

          candidato
            .recetasAyudadas
            .add(
              receta.titulo
            );


          // =============================================
          // DESBLOQUEO REAL
          // =============================================

          /*
            Solo desbloquea la receta si este
            es el único ingrediente faltante.
          */

          if (
            faltantesValidos.length === 1
          ) {

            const yaRegistrada =
              candidato
                .recetasDesbloqueadas
                .has(
                  receta.titulo
                );


            candidato
              .recetasDesbloqueadas
              .add(
                receta.titulo
              );


            /*
              costoFaltantes representa justo
              el desembolso necesario para
              completar esa receta.

              Como solo falta este ingrediente,
              ese valor es la mejor estimación
              disponible del costo estratégico.
            */

            if (
              !yaRegistrada &&
              Number.isFinite(
                receta.costoFaltantes
              ) &&
              receta.costoFaltantes >= 0
            ) {

              candidato
                .costosDesbloqueo
                .push(
                  receta.costoFaltantes
                );

            }

          }

        }
      );

    }
  );


  // ====================================================
  // 🚫 SIN CANDIDATOS
  // ====================================================

  if (
    candidatos.size === 0
  ) {

    return null;

  }


  // ====================================================
  // 🧮 CREAR SCORES
  // ====================================================

  const resultados:
    IngredienteScore[] = [];


  candidatos.forEach(
    candidato => {

      const info =
        obtenerIngrediente(
          candidato.ingrediente
        );


      if (!info) {

        return;

      }


      const desbloqueadas =
        candidato
          .recetasDesbloqueadas
          .size;


      const ayudadas =
        candidato
          .recetasAyudadas
          .size;


      // ===============================================
      // DEBE DESBLOQUEAR ALGO
      // ===============================================

      if (
        desbloqueadas === 0
      ) {

        return;

      }


      // ===============================================
      // 💰 COSTO ESTRATÉGICO
      // ===============================================

      /*
        Un mismo ingrediente puede desbloquear
        varias recetas con cantidades diferentes.

        Para una recomendación inmediata usamos
        el MENOR costo real de desbloqueo.

        Ejemplo:

        queso:
        receta A → faltan $12
        receta B → faltan $28

        Chef Luna puede decir:
        "desde aproximadamente $12".
      */

      const costosValidos =
        candidato
          .costosDesbloqueo
          .filter(
            costo =>
              Number.isFinite(costo) &&
              costo >= 0
          );


      const costo =
        costosValidos.length > 0
          ? Math.min(
              ...costosValidos
            )
          : Math.max(
              0,
              info.precioUnitario ?? 0
            );


      // ===============================================
      // ⭐ POPULARIDAD / UTILIDAD
      // ===============================================

      /*
        No es popularidad social.

        Es utilidad estimada dentro del
        universo actual de recetas.
      */

      const popularidad =
        Math.min(
          100,
          30 +
          desbloqueadas * 20 +
          ayudadas * 5
        );


      // ===============================================
      // 🧮 SCORE BASE
      // ===============================================

      const scoreBase =
        calcularChefShoppingScore({

          recetasDesbloqueadas:
            desbloqueadas,

          costo,

          popularidad,

          basico:
            Boolean(
              info.basico
            ),

          modo,

        });


      // ===============================================
      // 🔭 UTILIDAD FUTURA
      // ===============================================

      const utilidadExtra =
        Math.max(
          0,
          ayudadas -
          desbloqueadas
        );


      const bonusUtilidad =
        Math.min(
          utilidadExtra * 2,
          10
        );


      const score =
        Math.max(
          0,
          scoreBase +
          bonusUtilidad
        );


      // ===============================================
      // 💬 RAZÓN
      // ===============================================

      let razon:
        string;


      if (
        desbloqueadas >= 3 &&
        costo <= 20
      ) {

        razon =
          `Con una compra económica desbloqueas ${desbloqueadas} recetas.`;

      } else if (
        desbloqueadas >= 2
      ) {

        razon =
          `Este ingrediente desbloquea ${desbloqueadas} recetas de inmediato.`;

      } else if (
        desbloqueadas === 1 &&
        ayudadas >= 3
      ) {

        razon =
          'Desbloquea una receta ahora y además aparece en varias opciones de tu cocina.';

      } else if (
        costo <= 20
      ) {

        razon =
          'Es una compra pequeña que te permite completar una receta.';

      } else {

        razon =
          'Con este ingrediente puedes completar una receta que ya tienes casi lista.';

      }


      // ===============================================
      // 🎯 CONFIANZA
      // ===============================================

      /*
        La confianza expresa qué tan clara
        es la recomendación.

        No debe confundirse con probabilidad.
      */

      const confianza =
        Math.min(
          100,
          Math.round(

            45 +

            desbloqueadas *
              18 +

            Math.min(
              utilidadExtra * 4,
              15
            ) +

            (
              costo <= 20
                ? 10
                : costo <= 50
                  ? 5
                  : 0
            )

          )
        );


      // ===============================================
      // 📦 RESULTADO
      // ===============================================

      resultados.push({

        ingrediente:
          candidato.ingrediente,

        recetasDesbloqueadas:
          desbloqueadas,

        recetasNuevas:
          [
            ...candidato
              .recetasDesbloqueadas,
          ],

        score,

        razon,

        popularidad,

        costo:
          Math.round(
            costo * 100
          ) / 100,

        confianza,

      });

    }
  );


  // ====================================================
  // 🚫 NADA DESBLOQUEA AHORA
  // ====================================================

  if (
    resultados.length === 0
  ) {

    return null;

  }


  // ====================================================
  // 🏆 MEJOR COMPRA
  // ====================================================

  return resultados.reduce(
    (
      mejor,
      candidato
    ) => {

      // ===============================================
      // 1. MAYOR SCORE
      // ===============================================

      if (
        candidato.score >
        mejor.score
      ) {

        return candidato;

      }


      if (
        candidato.score <
        mejor.score
      ) {

        return mejor;

      }


      // ===============================================
      // 2. MÁS RECETAS DESBLOQUEADAS
      // ===============================================

      if (
        candidato.recetasDesbloqueadas >
        mejor.recetasDesbloqueadas
      ) {

        return candidato;

      }


      if (
        candidato.recetasDesbloqueadas <
        mejor.recetasDesbloqueadas
      ) {

        return mejor;

      }


      // ===============================================
      // 3. MAYOR CONFIANZA
      // ===============================================

      if (
        candidato.confianza >
        mejor.confianza
      ) {

        return candidato;

      }


      if (
        candidato.confianza <
        mejor.confianza
      ) {

        return mejor;

      }


      // ===============================================
      // 4. MENOR COSTO
      // ===============================================

      if (
        candidato.costo !==
        mejor.costo
      ) {

        return candidato.costo <
          mejor.costo
          ? candidato
          : mejor;

      }


      // ===============================================
      // 5. ID ESTABLE PARA DESEMPATE
      // ===============================================

      return (
        candidato.ingrediente.localeCompare(
          mejor.ingrediente
        ) < 0
      )
        ? candidato
        : mejor;

    }
  );

}