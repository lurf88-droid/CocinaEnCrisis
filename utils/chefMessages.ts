import type {
  ChefMode,
} from './chefMode';


// ======================================================
// 🌙 MENSAJES CHEF LUNA
// ======================================================

const MENSAJES: Record<
  ChefMode,
  readonly string[]
> = {

  ahorro: [
    'Aprovechemos lo que ya tienes antes de comprar más.',
    'Tu despensa tiene más posibilidades de las que parece.',
    'Cada ingrediente cuenta. Hoy conviene cocinar con inteligencia.',
    'Podemos comer bien sin gastar de más.',
  ],

  rapido: [
    'Hoy vamos por una solución rápida y práctica.',
    'En pocos minutos puedes tener algo listo.',
    'El tiempo importa. Chef Luna está priorizando recetas ágiles.',
    'Menos vueltas y más cocina: vamos por algo rápido.',
  ],

  antojo: [
    'Hoy vale la pena preparar algo que realmente se antoje.',
    'Vamos a priorizar sabor y una receta especial.',
    'Hoy Chef Luna está buscando algo para disfrutar.',
    'Entre tus opciones, vamos por la que se sienta más especial.',
  ],

  crisis: [
    'No sabes qué cocinar. Chef Luna ya redujo las opciones.',
    'Déjame decidir por ti: voy a elegir la mejor salida con lo que tienes.',
    'Crisis culinaria detectada. Tu despensa sí tiene posibilidades.',
    'No le des más vueltas. Chef Luna está buscando qué cocinar hoy.',
  ],

};


// ======================================================
// 🌙 MENSAJE SEGÚN MODO
// ======================================================

export function obtenerMensajeChef(
  modo: ChefMode,
  nivel: number = 1
) {

  const lista =
    MENSAJES[modo];


  /*
    Evitamos Math.random().

    Si este método se ejecuta durante distintos
    renders, un mensaje aleatorio puede cambiar
    aunque nada haya cambiado realmente.

    El nivel define qué mensaje usar.
  */

  const nivelSeguro =
    Math.max(
      1,
      Math.round(nivel)
    );


  const indice =
    Math.min(
      nivelSeguro - 1,
      lista.length - 1
    );


  return lista[indice];

}


// ======================================================
// 🛒 MENSAJE DE COMPRA ESTRATÉGICA
// ======================================================

export function obtenerMensajeCompraChef(
  ingrediente: string,
  recetasDesbloqueadas: number,
  costo: number
) {

  const cantidad =
    Math.max(
      0,
      Math.round(
        recetasDesbloqueadas
      )
    );


  const costoSeguro =
    Math.max(
      0,
      costo
    );


  // ----------------------------------------------------
  // Nada desbloqueado
  // ----------------------------------------------------

  if (
    cantidad === 0
  ) {

    return (
      `${ingrediente} puede ser útil para tu despensa, ` +
      'pero no desbloquea una receta completa por sí solo.'
    );

  }


  // ----------------------------------------------------
  // Compra pequeña + alto impacto
  // ----------------------------------------------------

  if (
    costoSeguro <= 20 &&
    cantidad >= 3
  ) {

    return (
      `Con una compra económica de ${ingrediente} ` +
      `desbloqueas ${cantidad} recetas.`
    );

  }


  // ----------------------------------------------------
  // Mucho impacto
  // ----------------------------------------------------

  if (
    cantidad >= 5
  ) {

    return (
      `${ingrediente} tiene mucho impacto en tu cocina: ` +
      `desbloquea ${cantidad} recetas con una sola compra.`
    );

  }


  // ----------------------------------------------------
  // Una receta
  // ----------------------------------------------------

  if (
    cantidad === 1
  ) {

    return (
      `Agregar ${ingrediente} desbloquea una receta que ya tienes casi lista.`
    );

  }


  // ----------------------------------------------------
  // Varias recetas
  // ----------------------------------------------------

  return (
    `Agregar ${ingrediente} desbloquea ` +
    `${cantidad} recetas nuevas.`
  );

}