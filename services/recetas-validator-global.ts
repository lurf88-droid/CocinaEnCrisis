import {
  validarReceta,
  type ErrorReceta,
} from './receta-validator';

import {
  RECETAS,
} from '@/data/recetas';


// ======================================================
// 📊 TIPO DEL REPORTE GLOBAL
// ======================================================

export type ReporteReceta = {

  id: string;

  titulo: string;

  correcta: boolean;

  errores: ErrorReceta[];

};


// ======================================================
// 🔤 NORMALIZAR TEXTO
// ======================================================

function normalizarTexto(
  texto: string
): string {

  return texto
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(
      /[\u0300-\u036f]/g,
      ''
    )
    .replace(
      /\s+/g,
      ' '
    );

}


// ======================================================
// 🆔 NORMALIZAR ID
// ======================================================

function normalizarId(
  id: string
): string {

  return id
    .trim()
    .toLowerCase();

}


// ======================================================
// 🧹 EVITAR ERRORES DUPLICADOS
// ======================================================

function eliminarErroresDuplicados(
  errores: ErrorReceta[]
): ErrorReceta[] {

  const vistos =
    new Set<string>();


  return errores.filter(
    error => {

      const clave =
        `${error.tipo}::${error.mensaje}`;


      if (
        vistos.has(clave)
      ) {
        return false;
      }


      vistos.add(clave);

      return true;

    }
  );

}


// ======================================================
// 🔥 VALIDAR TODAS LAS RECETAS
// ======================================================

export function validarTodasLasRecetas():
  ReporteReceta[] {


  // ====================================================
  // CONTADORES GLOBALES
  // ====================================================

  const contadorIds =
    new Map<
      string,
      number
    >();


  const contadorTitulos =
    new Map<
      string,
      number
    >();


  // ====================================================
  // PRIMERA PASADA
  // ====================================================

  RECETAS.forEach(
    receta => {


      // ------------------------------------------------
      // ID
      // ------------------------------------------------

      const idNormalizado =
        normalizarId(
          receta.id
        );


      contadorIds.set(

        idNormalizado,

        (
          contadorIds.get(
            idNormalizado
          ) ?? 0
        ) + 1

      );


      // ------------------------------------------------
      // TÍTULO
      // ------------------------------------------------

      const tituloNormalizado =
        normalizarTexto(
          receta.titulo
        );


      contadorTitulos.set(

        tituloNormalizado,

        (
          contadorTitulos.get(
            tituloNormalizado
          ) ?? 0
        ) + 1

      );

    }
  );


  // ====================================================
  // SEGUNDA PASADA
  // ====================================================

  return RECETAS.map(
    receta => {


      const errores:
        ErrorReceta[] = [

          ...validarReceta(
            receta
          ),

        ];


      // =================================================
      // 🆔 ID DUPLICADO
      // =================================================

      const idNormalizado =
        normalizarId(
          receta.id
        );


      const cantidadId =
        contadorIds.get(
          idNormalizado
        ) ?? 0;


      if (
        cantidadId > 1
      ) {

        errores.push({

          tipo:
            'estructura',

          mensaje:
            `El ID de receta "${receta.id}" está duplicado ${cantidadId} veces en el recetario.`,

        });

      }


      // =================================================
      // 📝 TÍTULO DUPLICADO
      // =================================================

      const tituloNormalizado =
        normalizarTexto(
          receta.titulo
        );


      const cantidadTitulo =
        contadorTitulos.get(
          tituloNormalizado
        ) ?? 0;


      if (
        cantidadTitulo > 1
      ) {

        errores.push({

          tipo:
            'estructura',

          mensaje:
            `El título "${receta.titulo}" aparece ${cantidadTitulo} veces en el recetario.`,

        });

      }


      // =================================================
      // 🧹 LIMPIAR DUPLICADOS
      // =================================================

      const erroresFinales =
        eliminarErroresDuplicados(
          errores
        );


      // =================================================
      // 📦 REPORTE
      // =================================================

      return {

        id:
          receta.id,

        titulo:
          receta.titulo,

        correcta:
          erroresFinales.length === 0,

        errores:
          erroresFinales,

      };

    }
  );

}