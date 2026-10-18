import type {
  Receta,
} from '@/types/receta';


// ======================================================
// 🌙 MENSAJE PERSONALIZADO POR RECETA
// ======================================================

export function obtenerMensajeRecetaChef(
  receta: Receta
) {

  const titulo =
    receta.titulo
      .toLowerCase();


  const tecnica =
    receta.tecnicaPrincipal
      ?.toLowerCase()
    ?? '';


  const cocina =
    receta.cocina
      ?.toLowerCase()
    ?? '';


  const totalIngredientes =
    receta.ingredientes
      ?.length
    ?? 0;


  // ====================================================
  // 🍚 ARROZ
  // ====================================================

  if (
    titulo.includes(
      'arroz'
    )
  ) {

    return (
      'Parece una preparación sencilla, pero el resultado depende mucho del control del líquido, el fuego y el tiempo.'
    );

  }


  // ====================================================
  // 🍗 POLLO
  // ====================================================

  if (
    titulo.includes(
      'pollo'
    )
  ) {

    return (
      'Es una opción muy casera y rendidora. Si cuidamos la cocción, puede quedar jugosa, sabrosa y muy completa.'
    );

  }


  // ====================================================
  // 🥚 HUEVO
  // ====================================================

  if (
    titulo.includes(
      'huevo'
    )
  ) {

    return (
      'Aquí los ingredientes son sencillos, así que los pequeños detalles de cocción son los que hacen la diferencia.'
    );

  }


  // ====================================================
  // 🌮 TORTILLA / TACOS / ENCHILADAS
  // ====================================================

  if (
    titulo.includes('taco') ||
    titulo.includes('enchilada') ||
    titulo.includes('enfrijolada') ||
    titulo.includes('enmolada')
  ) {

    return (
      'Esta receta se disfruta mucho cuando cada componente está bien caliente y equilibrado. La textura de la tortilla será clave.'
    );

  }


  // ====================================================
  // 🥣 CALDOS / SOPAS
  // ====================================================

  if (
    titulo.includes('caldo') ||
    titulo.includes('sopa')
  ) {

    return (
      'Aquí conviene cocinar sin prisa y construir el sabor poco a poco. Un buen caldo se nota desde el aroma.'
    );

  }


  // ====================================================
  // 🫔 TAMALES
  // ====================================================

  if (
    titulo.includes(
      'tamal'
    )
  ) {

    return (
      'Esta preparación requiere atención en la textura de la masa y en la cocción al vapor. Chef Luna te irá guiando en los puntos importantes.'
    );

  }


  // ====================================================
  // 🔥 TÉCNICA
  // ====================================================

  if (
    tecnica.includes(
      'frit'
    )
  ) {

    return (
      'El punto importante aquí será controlar la temperatura para conseguir buen dorado sin resecar la preparación.'
    );

  }


  if (
    tecnica.includes(
      'horno'
    ) ||
    tecnica.includes(
      'horne'
    )
  ) {

    return (
      'La temperatura y el tiempo serán importantes. Evita abrir el horno innecesariamente y fíjate en las señales de cocción.'
    );

  }


  if (
    tecnica.includes(
      'asado'
    )
  ) {

    return (
      'El dorado será parte del sabor. Deja que los ingredientes desarrollen color antes de moverlos demasiado.'
    );

  }


  // ====================================================
  // 🇲🇽 COCINA MEXICANA
  // ====================================================

  if (
    cocina.includes(
      'mexic'
    )
  ) {

    return (
      'Es una preparación con identidad mexicana. Vamos a cuidar especialmente el sazón, las texturas y el equilibrio de sus ingredientes.'
    );

  }


  // ====================================================
  // 🧺 POCOS INGREDIENTES
  // ====================================================

  if (
    totalIngredientes <= 5
  ) {

    return (
      'Tiene pocos ingredientes, así que es una preparación práctica. Aquí cada ingrediente cuenta y conviene cuidar bien cada paso.'
    );

  }


  // ====================================================
  // 🌙 FALLBACK
  // ====================================================

  return (
    'Revisé esta receta y tiene buen equilibrio para tu cocina de hoy. Vamos paso a paso para que salga bien.'
  );

}