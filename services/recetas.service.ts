import type {
  RecetaConCosto,
  ResultadoBusqueda,
} from '@/types/receta';

import {
  resolverIngredienteId,
} from '@/utils/resolverIngrediente';

import {
  calcularCostoIngrediente,
} from '@/services/costos.service';

import {
  REGION_NACIONAL_ID,
  type RegionId,
} from '@/data/regiones-mexico';


// ======================================================
// 🧂 DESPENSA IMPLÍCITA
// ======================================================

/*
  MUY IMPORTANTE:

  "basico" en el catálogo NO significa que Chef Luna
  pueda asumir que el usuario lo tiene.

  Ejemplos que NO deben asumirse automáticamente:

  - leche
  - café
  - huevo
  - aceite
  - azúcar
  - mantequilla
  - tortilla
  - cebolla
  - ajo

  Aunque alguno esté clasificado como "básico",
  debe aparecer en la despensa del usuario.

  Solamente dejamos implícitos ingredientes realmente
  universales cuya ausencia no debería bloquear
  una recomendación normal.
*/

const INGREDIENTES_ASUMIBLES =
  new Set<string>([
    'agua',
    'sal',
  ]);


// ======================================================
// 🧠 ¿SE PUEDE ASUMIR?
// ======================================================

function esIngredienteAsumible(
  id: string
): boolean {

  return INGREDIENTES_ASUMIBLES.has(
    id
  );

}


// ======================================================
// 📊 ORGANIZAR RESULTADOS
// ======================================================

export function organizarResultados(
  resultados: ResultadoBusqueda[]
) {

  // ====================================================
  // ✅ LISTAS
  // ====================================================

  const recetasListas =
    resultados
      .filter(
        receta =>
          receta.puedeCocinar &&
          receta.dentroPresupuesto
      )
      .sort(
        (a, b) => {

          // =============================================
          // 1. MAYOR COMPATIBILIDAD
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
          // 2. MÁS RÁPIDA
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


          // =============================================
          // 3. MENOR COSTO COMPLETO
          // =============================================

          return (
            a.costoTotal -
            b.costoTotal
          );

        }
      );


  // ====================================================
  // 🟠 PARCIALES
  // ====================================================

  const recetasParciales =
    resultados
      .filter(
        receta =>
          !receta.puedeCocinar ||
          !receta.dentroPresupuesto
      )
      .sort(
        (a, b) => {

          // =============================================
          // 1. DENTRO DEL PRESUPUESTO
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
          // 2. MENOS FALTANTES
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
          // 3. MENOR GASTO PENDIENTE
          // =============================================

          if (
            a.costoFaltantes !==
            b.costoFaltantes
          ) {

            return (
              a.costoFaltantes -
              b.costoFaltantes
            );

          }


          // =============================================
          // 4. MAYOR COMPATIBILIDAD
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
          // 5. MÁS RÁPIDA
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


  // ====================================================
  // 🏆 MEJOR RESULTADO BASE
  // ====================================================

  /*
    Esto es solamente el orden inicial.

    ChefEngine posteriormente toma la decisión final
    dependiendo de la crisis seleccionada.
  */

  const mejorReceta =
    recetasListas[0] ??
    recetasParciales[0] ??
    null;


  return {

    mejorReceta,

    recetasListas,

    recetasParciales,

  };

}


// ======================================================
// 🧺 NORMALIZAR INGREDIENTES DEL USUARIO
// ======================================================

function normalizarIngredientesUsuario(
  ingredientesUsuario: string[]
): string[] {

  const ids =
    ingredientesUsuario
      .map(
        ingrediente =>
          resolverIngredienteId(
            ingrediente
          )
      )
      .filter(
        (
          id
        ): id is string =>
          id !== null
      );


  return [
    ...new Set(
      ids
    ),
  ];

}


// ======================================================
// 🍳 INGREDIENTES QUE REALMENTE BLOQUEAN
// ======================================================

function obtenerIngredientesNecesarios(
  receta: RecetaConCosto
): string[] {

  const canonicos =
    receta.ingredientesClave
      .map(
        id => {

          const resuelto =
            resolverIngredienteId(
              id
            );


          if (
            !resuelto
          ) {

            if (
              __DEV__
            ) {

              console.warn(
                `⚠️ Ingrediente inválido "${id}" en receta "${receta.titulo}"`
              );

            }


            return null;

          }


          return resuelto;

        }
      )
      .filter(
        (
          id
        ): id is string =>
          id !== null
      );


  // ====================================================
  // 🧹 EVITAR DUPLICADOS
  // ====================================================

  const unicos =
    [
      ...new Set(
        canonicos
      ),
    ];


  // ====================================================
  // 🧂 QUITAR ÚNICAMENTE INGREDIENTES ASUMIBLES
  // ====================================================

  /*
    ANTES:

      !ingrediente?.basico

    Eso hacía desaparecer ingredientes reales de la
    evaluación.

    AHORA:

    Solo agua y sal pueden omitirse como requisito
    explícito.

    Todo lo demás debe existir en la despensa.
  */

  return unicos.filter(
    id =>
      !esIngredienteAsumible(
        id
      )
  );

}


// ======================================================
// 💰 CALCULAR LO QUE FALTA COMPRAR
// ======================================================

function calcularCostoFaltantes(
  receta: RecetaConCosto,
  faltantes: string[],
  regionId: RegionId
): number {

  if (
    faltantes.length === 0
  ) {

    return 0;

  }


  const idsFaltantes =
    new Set(
      faltantes
    );


  const costo =
    receta.ingredientes.reduce(
      (
        total,
        ingrediente
      ) => {

        const idCanonico =
          resolverIngredienteId(
            ingrediente.id
          );


        if (
          !idCanonico ||
          !idsFaltantes.has(
            idCanonico
          )
        ) {

          return total;

        }


        return (
          total +
          calcularCostoIngrediente(
            {
              id:
                idCanonico,

              cantidad:
                ingrediente.cantidad,

              unidad:
                ingrediente.unidad,
            },
            regionId
          )
        );

      },
      0
    );


  return (
    Math.round(
      costo *
      100
    ) /
    100
  );

}


// ======================================================
// 🔎 BUSCAR RECETAS
// ======================================================

export function evaluarReceta(
  receta: RecetaConCosto,
  ingredientesUsuario: string[],
  presupuesto: number,
  regionId: RegionId = REGION_NACIONAL_ID
): ResultadoBusqueda | null {
  const ingredientesDisponibles = new Set(normalizarIngredientesUsuario(ingredientesUsuario));
  const presupuestoSeguro = Number.isFinite(presupuesto) ? Math.max(0, presupuesto) : 0;

    if (!receta.ingredientesClave ||
        receta.ingredientesClave.length === 0) {
        if (__DEV__) {
            console.warn('⚠️ Receta sin ingredientesClave:', receta.titulo);
        }
        return null;
    }
    const ingredientesNecesarios = obtenerIngredientesNecesarios(receta);
    const faltantes = ingredientesNecesarios.filter(id => !ingredientesDisponibles.has(id));
    const coincidencias = ingredientesNecesarios.length -
        faltantes.length;
    const compatibilidad = ingredientesNecesarios.length === 0
        ? 100
        : Math.round((coincidencias /
            ingredientesNecesarios.length) *
            100);
    let estadoReceta: 'lista' | 'casi' | 'faltante';
    if (faltantes.length === 0) {
        estadoReceta =
            'lista';
    }
    else if (faltantes.length <= 2) {
        estadoReceta =
            'casi';
    }
    else {
        estadoReceta =
            'faltante';
    }
    const puedeCocinar = faltantes.length === 0;
    const costoFaltantes = calcularCostoFaltantes(receta, faltantes, regionId);
    const dentroPresupuesto = costoFaltantes <=
        presupuestoSeguro;
    const razones: string[] = [];
    if (puedeCocinar) {
        razones.push('Puedes cocinarla con lo que realmente tienes en tu despensa.');
    }
    else if (faltantes.length === 1) {
        razones.push('Solo te falta 1 ingrediente.');
    }
    else if (faltantes.length === 2) {
        razones.push('Solo te faltan 2 ingredientes.');
    }
    else {
        razones.push(`Te faltan ${faltantes.length} ingredientes.`);
    }
    if (puedeCocinar) {
        razones.push('No necesitas comprar nada para completar esta receta.');
    }
    else if (dentroPresupuesto) {
        razones.push(`La compra pendiente cuesta aproximadamente $${Math.round(costoFaltantes)} y entra en tu presupuesto.`);
    }
    else {
        razones.push(`Necesitarías aproximadamente $${Math.round(costoFaltantes)} para completar esta receta.`);
    }
    if (receta.tiempoMinutos <= 15) {
        razones.push('Es una preparación muy rápida.');
    }
    else if (receta.tiempoMinutos <= 30) {
        razones.push('Tiene un tiempo de preparación razonable.');
    }
    if (receta.costoTotal <= 40) {
        razones.push('El valor completo de la receta es bajo.');
    }
    return {
        ...receta,
        estadoReceta,
        coincidencias,
        totalIngredientes: ingredientesNecesarios.length,
        compatibilidad,
        faltantes,
        costoFaltantes,
        puedeCocinar,
        dentroPresupuesto,
        razones,
    } satisfies ResultadoBusqueda;

}

export function buscarRecetas(
  ingredientesUsuario: string[],
  presupuesto: number,
  recetasConCosto: RecetaConCosto[],
  regionId: RegionId =
    REGION_NACIONAL_ID
): ResultadoBusqueda[] {

  // ====================================================
  // 🧺 DESPENSA
  // ====================================================

  const ingredientesUnicos =
    normalizarIngredientesUsuario(
      ingredientesUsuario
    );


  // ====================================================
  // 🍳 ANALIZAR RECETAS
  // ====================================================

  const resultados =
    recetasConCosto
      .map(
        receta => evaluarReceta(receta, ingredientesUsuario, presupuesto, regionId)
      )
      .filter(
        (
          receta
        ): receta is ResultadoBusqueda =>
          receta !== null
      );


  // ====================================================
  // 🧹 FILTRAR RESULTADOS MUY LEJANOS
  // ====================================================

  const resultadosUtiles =
    resultados.filter(
      receta => {

        /*
          Sin despensa registrada se conserva el
          comportamiento exploratorio.
        */

        if (
          ingredientesUnicos.length === 0
        ) {

          return true;

        }


        /*
          Una receta compuesta únicamente por ingredientes
          asumibles, por ejemplo agua/sal, sigue siendo válida.
        */

        if (
          receta.totalIngredientes === 0
        ) {

          return true;

        }


        /*
          Debe compartir al menos un ingrediente real
          con la despensa.
        */

        if (
          receta.coincidencias > 0
        ) {

          return true;

        }


        /*
          También conservamos oportunidades inmediatas:

          0 coincidencias
          + exactamente 1 ingrediente faltante.

          Chef Luna puede sugerir esa compra cuando tenga
          sentido.
        */

        return (
          receta.faltantes.length === 1
        );

      }
    );


  // ====================================================
  // 🏆 ORDEN BASE
  // ====================================================

  return resultadosUtiles.sort(
    (a, b) => {

      // ===============================================
      // 1. YA PUEDES COCINARLA
      // ===============================================

      if (
        a.puedeCocinar !==
        b.puedeCocinar
      ) {

        return a.puedeCocinar
          ? -1
          : 1;

      }


      // ===============================================
      // 2. DENTRO DEL PRESUPUESTO
      // ===============================================

      if (
        a.dentroPresupuesto !==
        b.dentroPresupuesto
      ) {

        return a.dentroPresupuesto
          ? -1
          : 1;

      }


      // ===============================================
      // 3. MENOS FALTANTES
      // ===============================================

      if (
        a.faltantes.length !==
        b.faltantes.length
      ) {

        return (
          a.faltantes.length -
          b.faltantes.length
        );

      }


      // ===============================================
      // 4. MENOR GASTO PENDIENTE
      // ===============================================

      if (
        a.costoFaltantes !==
        b.costoFaltantes
      ) {

        return (
          a.costoFaltantes -
          b.costoFaltantes
        );

      }


      // ===============================================
      // 5. MAYOR COMPATIBILIDAD
      // ===============================================

      if (
        b.compatibilidad !==
        a.compatibilidad
      ) {

        return (
          b.compatibilidad -
          a.compatibilidad
        );

      }


      // ===============================================
      // 6. MÁS RÁPIDA
      // ===============================================

      if (
        a.tiempoMinutos !==
        b.tiempoMinutos
      ) {

        return (
          a.tiempoMinutos -
          b.tiempoMinutos
        );

      }


      // ===============================================
      // 7. MENOR VALOR COMPLETO
      // ===============================================

      return (
        a.costoTotal -
        b.costoTotal
      );

    }
  );

}