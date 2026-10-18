import {
  RECETAS,
} from '@/data/recetas';


// ======================================================
// 🌙 MEMORIA CHEF LUNA
// ======================================================

export function obtenerMensajeMemoriaChef(
  historial: string[]
) {

  // ====================================================
  // PRIMERA VEZ
  // ====================================================

  if (
    historial.length === 0
  ) {

    return (
      'Qué gusto tenerte aquí. Veamos qué puedes cocinar hoy con lo que tienes en tu despensa.'
    );

  }


  // ====================================================
  // ÚLTIMA RECETA
  // ====================================================

  const ultimoId =
    historial[
      historial.length - 1
    ];


  const ultimaReceta =
    RECETAS.find(
      receta =>
        receta.id === ultimoId
    );


  // ====================================================
  // ID VÁLIDO
  // ====================================================

  if (
    ultimaReceta
  ) {

    return (
      `Qué gusto verte otra vez. La última vez preparaste ${ultimaReceta.titulo}. ` +
      'Veamos qué tiene sentido cocinar hoy.'
    );

  }


  // ====================================================
  // FALLBACK
  // ====================================================

  return (
    'Qué gusto verte otra vez. Chef Luna está lista para revisar tu cocina y encontrar una buena opción para hoy.'
  );

}