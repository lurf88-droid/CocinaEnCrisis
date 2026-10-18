import type {
  Receta,
} from '@/types/receta';

import { resolverIngrediente } from '@/utils/resolverIngrediente';
import { convertirCantidad, normalizarUnidad } from '@/services/costos.service';


// ======================================================
// 🔥 TIPOS
// ======================================================

export type ErrorReceta = {

  tipo:
    | 'estructura'
    | 'ingrediente'
    | 'unidad'
    | 'cantidad'
    | 'pasos'
    | 'tiempo'
    | 'porciones';

  mensaje: string;

};


// ======================================================
// 🔥 AUDITOR DE UNA RECETA
// ======================================================

export function validarReceta(
  receta: Receta
): ErrorReceta[] {


  const errores:
    ErrorReceta[] = [];


  // ====================================================
  // 1. ESTRUCTURA
  // ====================================================

  if (
    !receta.id ||
    receta.id.trim().length === 0
  ) {

    errores.push({

      tipo:
        'estructura',

      mensaje:
        'La receta no tiene un ID válido.',

    });

  }


  if (
    !receta.titulo ||
    receta.titulo.trim().length === 0
  ) {

    errores.push({

      tipo:
        'estructura',

      mensaje:
        `La receta "${receta.id}" no tiene título.`,

    });

  }


  if (
    !receta.imagen
  ) {

    errores.push({

      tipo:
        'estructura',

      mensaje:
        `"${receta.titulo}" no tiene imagen.`,

    });

  }


  // ====================================================
  // 2. PORCIONES
  // ====================================================

  if (
    !Number.isFinite(
      receta.porciones
    ) ||
    receta.porciones <= 0
  ) {

    errores.push({

      tipo:
        'porciones',

      mensaje:
        `"${receta.titulo}" tiene un número de porciones inválido.`,

    });

  }


  // ====================================================
  // 3. TIEMPO
  // ====================================================

  if (
    !Number.isFinite(
      receta.tiempoMinutos
    ) ||
    receta.tiempoMinutos <= 0
  ) {

    errores.push({

      tipo:
        'tiempo',

      mensaje:
        `"${receta.titulo}" tiene un tiempo de preparación inválido.`,

    });

  }


  // ====================================================
  // 4. INGREDIENTES
  // ====================================================

  if (
    !Array.isArray(
      receta.ingredientes
    ) ||
    receta.ingredientes.length === 0
  ) {

    errores.push({

      tipo:
        'estructura',

      mensaje:
        `"${receta.titulo}" no tiene ingredientes.`,

    });

  }


  // ====================================================
  // INGREDIENTES DUPLICADOS
  // ====================================================

  const ingredientesVistos =
    new Set<string>();


  (Array.isArray(receta.ingredientes) ? receta.ingredientes : []).forEach(
    ingrediente => {


      // =================================================
      // ID VACÍO
      // =================================================

      if (
        !ingrediente.id ||
        ingrediente.id.trim().length === 0
      ) {

        errores.push({

          tipo:
            'ingrediente',

          mensaje:
            `"${receta.titulo}" contiene un ingrediente sin ID válido.`,

        });


        return;

      }


      const idNormalizado =
        ingrediente.id
          .trim()
          .toLowerCase();


      // =================================================
      // DUPLICADO
      // =================================================

      if (
        ingredientesVistos.has(
          idNormalizado
        )
      ) {

        errores.push({

          tipo:
            'ingrediente',

          mensaje:
            `"${ingrediente.id}" aparece más de una vez en "${receta.titulo}".`,

        });

      }


      ingredientesVistos.add(
        idNormalizado
      );


      // =================================================
      // EXISTENCIA EN CATÁLOGO
      // =================================================

      const catalogo =
        resolverIngrediente(
          ingrediente.id
        );


      if (
        !catalogo
      ) {

        errores.push({

          tipo:
            'ingrediente',

          mensaje:
            `El ingrediente "${ingrediente.id}" usado en "${receta.titulo}" no existe en el catálogo.`,

        });


        return;

      }


      // =================================================
      // CANTIDAD
      // =================================================

      if (
        !Number.isFinite(
          ingrediente.cantidad
        ) ||
        ingrediente.cantidad <= 0
      ) {

        errores.push({

          tipo:
            'cantidad',

          mensaje:
            `"${ingrediente.id}" tiene una cantidad inválida en "${receta.titulo}".`,

        });

      }


      // =================================================
      // UNIDAD VACÍA
      // =================================================

      if (
        !ingrediente.unidad ||
        ingrediente.unidad.trim().length === 0
      ) {

        errores.push({

          tipo:
            'unidad',

          mensaje:
            `"${ingrediente.id}" no tiene una unidad válida en "${receta.titulo}".`,

        });


        return;

      }


      // =================================================
      // UNIDAD / CONVERSIÓN
      // =================================================

      const unidadValida =
        convertirCantidad(1, ingrediente.unidad, catalogo, ingrediente.id, receta.id, receta.titulo) !== null;


      if (
        !unidadValida
      ) {

        errores.push({

          tipo:
            'unidad',

          mensaje:
            `"${ingrediente.id}" usa "${ingrediente.unidad}" pero el catálogo usa "${catalogo.unidad}" y no existe una conversión válida.`,

        });

      }


      // =================================================
      // ESPECIAS SOSPECHOSAS
      // =================================================

      const unidadNormalizada =
        normalizarUnidad(
          ingrediente.unidad
        );


      if (
        catalogo.categoria === 'especias' &&
        unidadNormalizada === 'kg' &&
        ingrediente.cantidad > 0.1
      ) {

        errores.push({

          tipo:
            'cantidad',

          mensaje:
            `"${ingrediente.id}" usa ${ingrediente.cantidad} kg en "${receta.titulo}". La cantidad parece demasiado alta para una especia.`,

        });

      }

    }
  );


  // ====================================================
  // 5. PASOS
  // ====================================================

  if (
    !Array.isArray(
      receta.pasos
    ) ||
    receta.pasos.length === 0
  ) {

    errores.push({

      tipo:
        'pasos',

      mensaje:
        `"${receta.titulo}" no tiene pasos de preparación.`,

    });

  } else {


    receta.pasos.forEach(
      (
        paso,
        index
      ) => {


        // ===============================================
        // NUMERACIÓN
        // ===============================================

        const numeroEsperado =
          index + 1;


        if (
          paso.numero !==
          numeroEsperado
        ) {

          errores.push({

            tipo:
              'pasos',

            mensaje:
              `"${receta.titulo}" tiene un problema de numeración: se esperaba el paso ${numeroEsperado} pero aparece ${paso.numero}.`,

          });

        }


        // ===============================================
        // TÍTULO
        // ===============================================

        if (
          !paso.titulo ||
          paso.titulo.trim().length === 0
        ) {

          errores.push({

            tipo:
              'pasos',

            mensaje:
              `"${receta.titulo}" tiene el paso ${paso.numero} sin título.`,

          });

        }


        // ===============================================
        // DESCRIPCIÓN
        // ===============================================

        if (
          !paso.descripcion ||
          paso.descripcion.trim().length === 0
        ) {

          errores.push({

            tipo:
              'pasos',

            mensaje:
              `"${receta.titulo}" tiene el paso ${paso.numero} sin descripción.`,

          });

        }

      }
    );

  }


  return errores;

}
