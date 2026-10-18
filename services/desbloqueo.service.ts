import type { ResultadoBusqueda } from '@/types/receta';

export function obtenerNuevasRecetas(
  antes: ResultadoBusqueda[],
  despues: ResultadoBusqueda[]
){

  const nuevas = despues.filter(
    receta =>
      receta.puedeCocinar &&
      !antes.some(
        r=>r.id === receta.id &&
        r.puedeCocinar
      )
  );


  return nuevas;

}