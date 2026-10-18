import {
  RECETAS,
} from '@/data/recetas';

import {
  calcularCostoReceta,
} from '@/services/costos.service';

import {
  REGION_NACIONAL_ID,
  type RegionId,
} from '@/data/regiones-mexico';


// ======================================================
// 💰 COSTO TOTAL DE RECETAS SELECCIONADAS
// ======================================================

export function calcularCostoRecetas(
  carrito: string[],
  regionId: RegionId =
    REGION_NACIONAL_ID
): number {

  // ====================================================
  // 🛡 SIN RECETAS
  // ====================================================

  if (
    !Array.isArray(carrito) ||
    carrito.length === 0
  ) {

    return 0;

  }


  // ====================================================
  // 🧹 EVITAR IDs DUPLICADOS
  // ====================================================

  const idsUnicos =
    new Set(
      carrito
        .map(
          id =>
            id.trim()
        )
        .filter(
          Boolean
        )
    );


  // ====================================================
  // 🍳 RECETAS SELECCIONADAS
  // ====================================================

  const recetasSeleccionadas =
    RECETAS.filter(
      receta =>
        idsUnicos.has(
          receta.id
        )
    );


  // ====================================================
  // 💰 COSTO COMPLETO
  // ====================================================

  const costoTotal =
    recetasSeleccionadas.reduce(
      (
        acumulado,
        receta
      ) => {

        const recetaConCosto =
          calcularCostoReceta(
            receta,
            regionId
          );


        return (
          acumulado +
          recetaConCosto.costoTotal
        );

      },
      0
    );


  // ====================================================
  // 📦 RESULTADO
  // ====================================================

  return (
    Math.round(
      costoTotal *
      100
    ) /
    100
  );

}


// ======================================================
// ♻️ COMPATIBILIDAD CON CÓDIGO ANTERIOR
// ======================================================

/**
 * @deprecated
 *
 * Esta función calcula el COSTO COMPLETO
 * de las recetas seleccionadas.
 *
 * No representa necesariamente el dinero
 * que el usuario necesita gastar, porque
 * no descuenta lo que ya tiene en despensa.
 *
 * Preferir calcularCostoRecetas().
 */
export function calcularGastoRecetas(
  carrito: string[],
  regionId: RegionId =
    REGION_NACIONAL_ID
): number {

  return calcularCostoRecetas(
    carrito,
    regionId
  );

}