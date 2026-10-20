import type { Receta } from '@/types/receta';

export const ENSALADA_CESAR: Receta = {
  id: 'ensalada-cesar',
  titulo: 'Ensalada César clásica',
  imagen: require('../../../assets/images/recetas/ensaladas/ensalada-cesar.webp'), 
  descripcion: 'La ensalada más famosa del mundo nació en México. Aprende a preparar el verdadero aderezo César desde cero, logrando una emulsión perfecta y equilibrando texturas crujientes.',
  
  cocina: 'mexicana',
  tecnicaPrincipal: 'emulsión de aderezo y garrapiñado de pan',
  categoria: 'comida',
  rolCulinario: 'plato_principal',
  porciones: 2,
  tiempoMinutos: 20,
  dificultad: 'media',
  nivelChef: 2,

  aprendizajes: [
    'técnica de emulsión con yema de huevo',
    'elaboración de crutones caseros',
    'balance de sabores umami y ácido'
  ],

  ingredientes: [
    { id: 'lechuga', cantidad: 0.250, unidad: 'kg' },
    { id: 'pollo_deshebrado', cantidad: 0.200, unidad: 'kg' },
   { id: 'bolillo', cantidad: 2, unidad: 'pieza' },
    { id: 'queso_fresco', cantidad: 0.050, unidad: 'kg' },
    { id: 'limon', cantidad: 1, unidad: 'pieza' },
    { id: 'aceite_vegetal', cantidad: 0.050, unidad: 'litro' },
    { id: 'ajo', cantidad: 1, unidad: 'pieza' },
    { id: 'mostaza', cantidad: 0.010, unidad: 'kg' },
    { id: 'huevo', cantidad: 1, unidad: 'pieza' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Prepara los crutones',
      descripcion: 'Corta el pan en cubos. Calienta un poco de aceite en un sartén con un diente de ajo aplastado. Dora los cubos de pan hasta que estén crujientes.',
      tiempo: '5 minutos',
      consejo: 'Retira el ajo antes de que se queme; solo lo queremos para perfumar el aceite.',
      mensajeChef: 'El pan de ayer es el mejor para hacer crutones.',
      nivelImportancia: 'clave',
      señalCorrecta: 'Pan dorado, crujiente y con aroma a ajo.',
    },
    {
      numero: 2,
      titulo: 'Haz el aderezo César',
      descripcion: 'En un tazón, mezcla la yema de huevo, la mostaza, el jugo de limón y una pizca de sal. Bate vigorosamente mientras agregas el aceite en hilo muy fino hasta que espese.',
      tiempo: '5 minutos',
      porQue: 'La mostaza y la yema actúan como emulsionantes, uniendo el agua del limón con el aceite.',
      chefPregunta: '¿Qué pasa si agregas todo el aceite de golpe?',
      respuestaEsperada: 'El aderezo se "corta" y no logra espesar.',
      nivelImportancia: 'critico',
      errorEvitar: 'Agregar el aceite demasiado rápido.',
    },
    {
      numero: 3,
      titulo: 'Prepara la lechuga',
      descripcion: 'Lava, desinfecta y seca muy bien la lechuga. Córtala en trozos grandes y colócala en un bowl frío.',
      tiempo: '4 minutos',
      consejo: 'La lechuga debe estar helada y seca para que el aderezo se adhiera perfectamente.',
    },
    {
      numero: 4,
      titulo: 'Ensambla y sirve',
      descripcion: 'Baña la lechuga con el aderezo, agrega el pollo y los crutones. Termina con queso fresco desmoronado.',
      tiempo: '3 minutos',
      mensajeChef: 'Mezcla con las manos o con pinzas, con delicadeza.',
      señalCorrecta: 'Las hojas brillan, pero no hay charcos de aderezo en el fondo.',
    }
  ],

  tip: 'Para una versión más ligera, puedes usar pechuga de pollo a la plancha en tiras en lugar de deshebrada.',
  ahorro: 'Aprovecha el pan duro y las sobras de pollo.',
  errorComun: 'No secar la lechuga, lo que hace que el aderezo se escurra al fondo.',
  popularidad: 95,
  tags: ['ensalada', 'pollo', 'clasica', 'mexicana'],
  tipoComida: 'familia',
  historiaChef: 'Aunque su nombre evoca al emperador romano, la ensalada César fue inventada en 1924 por el chef italiano Caesar Cardini en Tijuana, México.',
  trucoChef: 'Unas gotas de salsa inglesa (Worcestershire) le dan un toque umami increíble al aderezo.',
  sustituciones: [
    { falta: 'mostaza', reemplazo: 'un poco más de yema de huevo' },
    { falta: 'queso_fresco', reemplazo: 'queso parmesano rallado' }
  ],
  chefInicio: 'Hoy vamos a preparar una leyenda. Muchos compran el aderezo en frasco, pero hacerlo desde cero es otra dimensión.',
  chefFinal: 'Lograste una emulsión perfecta. Acabas de dominar una de las salsas más importantes de la cocina.',
  señalesExito: {
    vista: 'Hojas verdes brillantes, cubiertas de un aderezo cremoso, con crutones dorados.',
    olor: 'Aroma a ajo, limón y queso.',
    textura: 'Crujiente de la lechuga y el pan, contrastando con el aderezo sedoso.',
  },
  rescates: [
    { problema: 'El aderezo se cortó', solucion: 'En un tazón limpio, pon una cucharadita de agua fría y ve agregando el aderezo cortado poco a poco batiendo.' }
  ]
};