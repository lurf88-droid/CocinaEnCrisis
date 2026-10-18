import {
  validarTodasLasRecetas,
} from './recetas-validator-global';


// ======================================================
// 🔥 AUDITORÍA TÉCNICA GLOBAL
// ======================================================

export function auditoriaChef() {

  const reporte =
    validarTodasLasRecetas();


  // ====================================================
  // ✅ CORRECTAS
  // ====================================================

  const correctas =
    reporte.filter(
      resultado =>
        resultado.correcta
    );


  // ====================================================
  // ❌ CON PROBLEMAS
  // ====================================================

  const incorrectas =
    reporte.filter(
      resultado =>
        !resultado.correcta
    );


  // ====================================================
  // 📊 RESUMEN
  // ====================================================

  const total =
    reporte.length;


  const totalCorrectas =
    correctas.length;


  const totalErrores =
    incorrectas.length;


  const porcentajeCorrectas =
    total === 0
      ? 100
      : Math.round(
          (
            totalCorrectas /
            total
          ) * 100
        );


  // ====================================================
  // 🧪 LOG DESARROLLO
  // ====================================================

  if (__DEV__) {

    console.log(
      '=========================================='
    );

    console.log(
      '🔥 AUDITORÍA TÉCNICA CHEF LUNA'
    );

    console.log(
      `📚 Recetas revisadas: ${total}`
    );

    console.log(
      `✅ Correctas: ${totalCorrectas}`
    );

    console.log(
      `❌ Con problemas: ${totalErrores}`
    );

    console.log(
      `📊 Integridad: ${porcentajeCorrectas}%`
    );


    if (
      totalErrores === 0
    ) {

      console.log(
        '🔥 RESULTADO: PERFECTO'
      );

    } else {

      console.warn(
        `⚠️ RESULTADO: ${totalErrores} ${
          totalErrores === 1
            ? 'receta necesita revisión'
            : 'recetas necesitan revisión'
        }`
      );


      incorrectas.forEach(
        (
          resultado,
          index: number
        ) => {

          console.warn(
            `❌ Problema ${index + 1}:`,
            resultado
          );

        }
      );

    }


    console.log(
      '=========================================='
    );

  }


  // ====================================================
  // 📦 RESULTADO
  // ====================================================

  return {

    total,

    correctas:
      totalCorrectas,

    errores:
      totalErrores,

    porcentajeCorrectas,

    perfecto:
      totalErrores === 0,

    detalle:
      incorrectas,

  };

}