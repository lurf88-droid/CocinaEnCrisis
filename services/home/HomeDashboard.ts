import type { ResultadoBusqueda } from "@/types/receta";

export function calcularEstadoDespensa(
  ingredientes: number,
  recetas: number,
  presupuesto: number
) {

  const puntosIngredientes =
    Math.min(40, ingredientes * 3);

  const puntosRecetas =
    Math.min(40, recetas * 5);

  const puntosPresupuesto =
    presupuesto >= 300
      ? 20
      : presupuesto >= 150
        ? 15
        : presupuesto >= 50
          ? 10
          : 5;


  const porcentaje =
    puntosIngredientes +
    puntosRecetas +
    puntosPresupuesto;


 let estado = "Básica";

if (porcentaje >= 85) {

  estado = "Excelente";

}

else if (porcentaje >= 65) {

  estado = "Preparada";

}

else if (porcentaje >= 45) {

  estado = "Funcional";

}

else if (porcentaje >= 25) {

  estado = "Iniciando";

}


let mensaje =
"Tu cocina está comenzando. Agrega ingredientes clave para desbloquear más recetas.";


if (porcentaje >= 75) {

  mensaje =
 "🔥 Tu cocina está preparada. Chef Luna tiene muchas opciones para ti.";
}

else if (porcentaje >= 45) {

  mensaje =
  "Ya tienes una buena base. Sigue agregando ingredientes para crear más recetas."

}

else if (porcentaje >= 25) {

  mensaje =
  "🧺 Tu cocina está despertando. Agrega ingredientes clave para mejorar tus opciones.";

}



let accion = "";


if (porcentaje >= 75) {

  accion =
  "Explora nuevas recetas y aprovecha tu despensa.";

}

else if (porcentaje >= 45) {

  accion =
  "Agrega algunos ingredientes para desbloquear más opciones.";

}

else {

  accion =
  "Compra ingredientes clave para mejorar tu cocina.";

}



return {
  porcentaje,
  estado,
  mensaje,
  accion,
};
}
export function calcularAhorro(
  resultados: ResultadoBusqueda[]
) {

  return resultados
    .filter(r => r.puedeCocinar)
    .reduce(
      (total, receta) =>
        total + receta.costoPorPorcion,
      0
    );


}