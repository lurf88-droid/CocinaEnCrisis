import type { Receta } from '@/types/receta';

export const ENSALADA_HUERTA: Receta = {

  id: 'ensalada-huerta',

  titulo: 'Ensalada fresca de la huerta',

  imagen: require('../../../assets/images/recetas/ensaladas/ensalada-huerta.webp'),

  descripcion: 'Una ensalada no es solo mezclar verduras; es entender el equilibrio entre acidez, sal y textura. Aprende a crear un aderezo básico que transforma cualquier ingrediente.',

  cocina: 'internacional',

  tecnicaPrincipal: 'cortes de cuchillo y emulsión de aderezo',

  categoria: 'comida',

  rolCulinario: 'entrada',

  porciones: 2,

  tiempoMinutos: 10,

  dificultad: 'facil',

  nivelChef: 1,

  aprendizajes: [
    'cortes de vegetales uniformes',
    'emulsión básica de limón y aceite',
    'balance de sabores',
  ],

  ingredientes: [
    { id: 'lechuga', cantidad: 0.200, unidad: 'kg' },
    { id: 'jitomate', cantidad: 2, unidad: 'pieza' },
    { id: 'pepino', cantidad: 1, unidad: 'pieza' },
    { id: 'limon', cantidad: 2, unidad: 'pieza' },
    { id: 'aceite_vegetal', cantidad: 0.02, unidad: 'litro' },
    { id: 'sal', cantidad: 0.003, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Desinfecta y seca',
      descripcion: 'Lava y desinfecta las verduras. Sécalas muy bien con un paño o centrifugadora.',
      tiempo: '4 minutos',
      consejo: 'El agua en las hojas diluye el aderezo.',
      nivelImportancia: 'clave',
      señalCorrecta: 'Las hojas están crujientes y sin gotas de agua.',
    },
    {
      numero: 2,
      titulo: 'Corta con intención',
      descripcion: 'Corta la lechuga en trozos de bocado. El jitomate en cuñas y el pepino en medias lunas.',
      tiempo: '4 minutos',
      porQue: 'Los cortes deben ser del mismo tamaño para que el tenedor atrape todos los ingredientes.',
      mensajeChef: 'Un buen corte no es el más rápido, es el más consistente.',
    },
    {
      numero: 3,
      titulo: 'Haz el aderezo',
      descripcion: 'En un vaso, exprime el limón, agrega la sal y bate mientras viertes el aceite poco a poco.',
      tiempo: '2 minutos',
      consejo: 'Agregar el aceite despacio ayuda a crear una emulsión ligera.',
      chefPregunta: '¿Por qué es mejor salar el aderezo y no la ensalada directamente?',
      respuestaEsperada: 'Porque la sal se disuelve mejor en el líquido y se distribuye de manera uniforme.',
      nivelImportancia: 'critico',
    },
    {
      numero: 4,
      titulo: 'Mezcla justo antes de servir',
      descripcion: 'En un bowl grande, mezcla las verduras con el aderezo.',
      tiempo: '1 minuto',
      porQue: 'Si la aderezas mucho tiempo antes, la sal extraerá el agua de los vegetales y la ensalada se marchitará.',
      señalCorrecta: 'Las hojas brillan sutilmente y no hay charcos en el fondo.',
    }
  ],

  tip: 'Puedes agregar granos de elote, nueces o queso fresco para convertirla en un plato más contundente.',

  ahorro: 'Aprovecha los restos de vegetales de la semana.',

  errorComun: 'Aderezar con demasiada anticipación.',

  popularidad: 75,

  tags: ['vegetariano', 'saludable', 'fresco', 'ensalada', 'rapido'],

  tipoComida: 'barata',

  historiaChef: 'Las ensaladas modernas nacieron en la cocina francesa, pero en México adoptamos rápidamente la frescura del limón como nuestro aderezo predilecto.',

  trucoChef: 'Frota el bowl con un diente de ajo antes de mezclar para darle un aroma increíble a la ensalada.',

  sustituciones: [
    { falta: 'lechuga', reemplazo: 'espinaca o acelga' },
    { falta: 'limon', reemplazo: 'vinagre de manzana' }
  ],

  chefInicio: 'Una ensalada perfecta no se trata de muchas verduras, sino del balance perfecto.',

  chefFinal: 'Acabas de aprender que el aderezo es el alma de la ensalada. El equilibrio es la verdadera técnica.',

  señalesExito: {
    vista: 'Colores vivos, sin vegetales marchitos.',
    olor: 'Aroma fresco a limón y vegetales recién cortados.',
    textura: 'Crujiente y jugosa.',
  },

  rescates: [
    { problema: 'La ensalada quedó demasiado ácida', solucion: 'Agrega una pizca de azúcar para equilibrar la acidez.' }
  ]
};