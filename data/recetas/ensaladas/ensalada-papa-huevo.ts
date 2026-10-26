import type { Receta } from '@/types/receta';

export const ENSALADA_PAPA_HUEVO: Receta = {
  id: 'ensalada-papa-huevo',
  titulo: 'Ensalada de papa y huevo',
imagen: require('../../../assets/images/recetas/ensaladas/ensalada-papa-huevo'), 
  descripcion: 'El clásico de los picnics y las comidas de campo. Aprende a cocinar la papa perfecta para ensalada y a hacer un aderezo cremoso que no se corte.',
  
  cocina: 'internacional',
  tecnicaPrincipal: 'cocción de papa y aderezo cremoso',
  categoria: 'comida',
  rolCulinario: 'acompanamiento',
  porciones: 4,
  tiempoMinutos: 25,
  dificultad: 'facil',
  nivelChef: 1,

  aprendizajes: [
    'cocción de papa sin que se deshaga',
    'cocción perfecta del huevo duro',
    'emulsión de mayonesa con mostaza'
  ],

  ingredientes: [
    { id: 'papa', cantidad: 0.400, unidad: 'kg' },
    { id: 'huevo', cantidad: 3, unidad: 'pieza' },
    { id: 'mayonesa', cantidad: 0.100, unidad: 'kg' },
    { id: 'mostaza', cantidad: 0.010, unidad: 'kg' },
    { id: 'cebolla_blanca', cantidad: 0.030, unidad: 'kg' },
    { id: 'apio', cantidad: 0.050, unidad: 'kg' },
    { id: 'sal', cantidad: 0.005, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Cuece las papas',
      descripcion: 'Pela y corta las papas en cubos medianos. Cuécelas en agua con sal por 10-12 minutos, hasta que estén suaves pero firmes.',
      tiempo: '12 minutos',
      consejo: 'No las dejes demasiado tiempo; si se deshacen, la ensalada se hará puré.',
      porQue: 'La papa debe estar firme para mantener la textura de la ensalada.',
      nivelImportancia: 'critico',
      señalCorrecta: 'Al pinchar con un cuchillo, entra con facilidad pero no se desmorona.',
    },
    {
      numero: 2,
      titulo: 'Cuece los huevos',
      descripcion: 'Pon los huevos en agua hirviendo por 10 minutos. Pásalos a agua fría y pélalos.',
      tiempo: '10 minutos',
      consejo: 'El agua fría corta la cocción y hace que sea más fácil pelarlos.',
    },
    {
      numero: 3,
      titulo: 'Prepara el aderezo',
      descripcion: 'En un tazón, mezcla la mayonesa, la mostaza y una pizca de sal. Pica finamente la cebolla y el apio y agrégalos.',
      tiempo: '3 minutos',
      porQue: 'La mostaza no solo da sabor, también ayuda a que el aderezo sea más estable.',
    },
    {
      numero: 4,
      titulo: 'Mezcla todo',
      descripcion: 'Escurre bien las papas y mézclalas con el aderezo mientras aún están tibias. Pica los huevos y agrégalos al final, mezclando suavemente.',
      tiempo: '3 minutos',
      mensajeChef: 'Mezclar las papas tibias hace que absorban todo el sabor del aderezo.',
      señalCorrecta: 'Ensalada cremosa con trozos de papa y huevo visibles.',
    }
  ],

  tip: 'Puedes agregar un toque de pimentón o paprika al final para darle color y sabor.',
  ahorro: 'Es una ensalada súper económica y rinde para muchos.',
  errorComun: 'Sobre-cocer las papas y que la ensalada quede aguada.',
  popularidad: 85,
  tags: ['ensalada', 'papa', 'huevo', 'economica', 'picnic'],
  tipoComida: 'barata',
  historiaChef: 'La ensalada de papa es un plato tradicional en toda Europa y América. Cada país tiene su versión, pero la base siempre es la misma: papa, huevo y un aderezo cremoso.',
  trucoChef: 'Un poco de vinagre en el aderezo le da un contraste ácido que corta la cremosidad de la mayonesa.',
  sustituciones: [
    { falta: 'mayonesa', reemplazo: 'yogurt griego natural o crema' },
    { falta: 'apio', reemplazo: 'pepino o zanahoria rallada' }
  ],
  chefInicio: 'Hoy vamos a hacer un clásico que nunca falla. El secreto está en el punto de la papa.',
  chefFinal: '¡Excelente! Tienes una ensalada cremosa y llena de sabor.',
  señalesExito: {
    vista: 'Cubos de papa bañados en una salsa cremosa con trozos de huevo amarillo.',
    olor: 'Aroma suave a mayonesa y mostaza.',
    textura: 'Cremosa y suave.',
  },
  rescates: [
    { problema: 'La ensalada quedó muy seca', solucion: 'Agrega una cucharada extra de mayonesa y un chorrito de leche para aflojarla.' }
  ]
};