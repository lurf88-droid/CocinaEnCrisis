export function generarMensajeCompra(
  ingrediente: string,
  recetasDisponibles: number
) {

  if (recetasDisponibles >= 10) {

    return `
👨‍🍳 ¡Excelente decisión!

🍳 ${ingrediente} abrió muchas posibilidades.

🔥 Ahora tienes ${recetasDisponibles} recetas disponibles.

Tu cocina acaba de subir de nivel.
`;

  }


  if (recetasDisponibles >= 5) {

    return `
👨‍🍳 ¡Muy buena compra!

🧺 ${ingrediente} es un ingrediente muy útil.

🔥 Ahora puedes preparar ${recetasDisponibles} recetas.

El Chef recomienda aprovecharlo al máximo.
`;

  }


  return `
👨‍🍳 Buena elección.

🧺 Agregaste ${ingrediente} a tu despensa.

🔥 Tu cocina tiene nuevas opciones.
`;

}