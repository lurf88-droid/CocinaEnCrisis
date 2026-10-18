import type {
  ResultadoBusqueda,
} from '@/types/receta';


// ======================================================
// 🚦 SEPARAR RECETAS POR ESTADO
// ======================================================

export function separarRecetasPorEstado(
  recetas: ResultadoBusqueda[]
) {

  const listas =
    recetas.filter(
      receta =>
        receta.estadoReceta === 'lista'
    );


  const casi =
    recetas.filter(
      receta =>
        receta.estadoReceta === 'casi'
    );


  const faltantes =
    recetas.filter(
      receta =>
        receta.estadoReceta === 'faltante'
    );


  return {
    listas,
    casi,
    faltantes,
  };

}