import {
  RECETAS,
} from '@/data/recetas';

import {
  auditarRecetaChefLunaPro,
} from './chefLunaPro';

import type {
  ReporteChefLunaPro,
} from '@/types/chef-luna-pro';


// ======================================================
// 📊 REPORTE GLOBAL CHEF LUNA PRO
// ======================================================

export type ReporteGlobalChefLunaPro = {
  total: number;

  promedio: number;

  legendarias: number;

  completas: number;

  enDesarrollo: number;

  basicas: number;

  mejorReceta:
    ReporteChefLunaPro | null;

  recetaMasDebil:
    ReporteChefLunaPro | null;

  ranking:
    ReporteChefLunaPro[];
};


// ======================================================
// 🔥 AUDITAR TODAS LAS RECETAS
// ======================================================

export function auditarTodasLasRecetasChefLunaPro():
  ReporteGlobalChefLunaPro {


  const ranking =
    RECETAS
      .map(
        receta =>
          auditarRecetaChefLunaPro(
            receta
          )
      )
      .sort(
        (a, b) =>
          b.puntuacion -
          a.puntuacion
      );


  const total =
    ranking.length;


  const suma =
    ranking.reduce(
      (
        acumulado,
        receta
      ) =>
        acumulado +
        receta.puntuacion,
      0
    );


  const promedio =
    total === 0
      ? 0
      : Math.round(
          suma /
          total
        );


  const legendarias =
    ranking.filter(
      receta =>
        receta.nivel ===
        'legendaria'
    ).length;


  const completas =
    ranking.filter(
      receta =>
        receta.nivel ===
        'completa'
    ).length;


  const enDesarrollo =
    ranking.filter(
      receta =>
        receta.nivel ===
        'en-desarrollo'
    ).length;


  const basicas =
    ranking.filter(
      receta =>
        receta.nivel ===
        'basica'
    ).length;


  const mejorReceta =
    ranking[0] ??
    null;


  const recetaMasDebil =
    ranking.length > 0
      ? ranking[
          ranking.length - 1
        ]
      : null;


  return {
    total,

    promedio,

    legendarias,

    completas,

    enDesarrollo,

    basicas,

    mejorReceta,

    recetaMasDebil,

    ranking,
  };

}


// ======================================================
// 🧪 MOSTRAR AUDITORÍA EN DESARROLLO
// ======================================================

export function imprimirAuditoriaChefLunaPro() {

  const reporte =
    auditarTodasLasRecetasChefLunaPro();


  if (!__DEV__) {
    return reporte;
  }


  console.log(
    '=========================================='
  );

  console.log(
    '🔥 CHEF LUNA PRO — AUDITORÍA GLOBAL'
  );

  console.log(
    `📚 Recetas: ${reporte.total}`
  );

  console.log(
    `📊 Promedio: ${reporte.promedio}/100`
  );

  console.log(
    `🔥 Legendarias: ${reporte.legendarias}`
  );

  console.log(
    `👨‍🍳 Completas: ${reporte.completas}`
  );

  console.log(
    `🍳 En desarrollo: ${reporte.enDesarrollo}`
  );

  console.log(
    `⚠️ Básicas: ${reporte.basicas}`
  );


  if (
    reporte.mejorReceta
  ) {

    console.log(
      `🏆 Mejor: ${reporte.mejorReceta.titulo} — ${reporte.mejorReceta.puntuacion}/100`
    );

  }


  if (
    reporte.recetaMasDebil
  ) {

    console.log(
      `🔧 A mejorar: ${reporte.recetaMasDebil.titulo} — ${reporte.recetaMasDebil.puntuacion}/100`
    );

  }


  console.log(
    '------------------------------------------'
  );


  reporte.ranking.forEach(
    (
      receta,
      index: number
    ) => {

      console.log(
        `${index + 1}. ${receta.titulo} — ${receta.puntuacion}/100 — ${receta.etiqueta}`
      );

    }
  );


  console.log(
    '=========================================='
  );


  return reporte;

}