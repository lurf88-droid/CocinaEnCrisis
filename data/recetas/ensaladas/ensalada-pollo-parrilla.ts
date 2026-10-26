import type { Receta } from '@/types/receta';

export const ENSALADA_POLLO_PARRILLA: Receta = {
  id: 'ensalada-pollo-parrilla',
  titulo: 'Ensalada de pollo a la parrilla con mostaza y miel',
 imagen: require('../../../assets/images/recetas/ensaladas/ensalada-pollo-parrilla'), 
  descripcion: 'Una ensalada premium con un aderezo agridulce que te va a volar la cabeza. Aprende a sellar la pechuga de pollo para que quede jugosa y a emulsionar una vinagreta espesa.',
  
  cocina: 'internacional',
  tecnicaPrincipal: 'sellado de pechuga y emulsión de mostaza-miel',
  categoria: 'comida',
  rolCulinario: 'plato_principal',
  porciones: 2,
  tiempoMinutos: 25,
  dificultad: 'media',
  nivelChef: 2,

  aprendizajes: [
    'sellado de pechuga sin secarla',
    'corte de carne contra el grano',
    'emulsión de aderezo con mostaza y miel'
  ],

  ingredientes: [
    { id: 'pechuga_pollo', cantidad: 0.350, unidad: 'kg' },
    { id: 'lechuga', cantidad: 0.150, unidad: 'kg' },
    { id: 'jitomate', cantidad: 1, unidad: 'pieza' },
    { id: 'cebolla_blanca', cantidad: 0.030, unidad: 'kg' },
    { id: 'mostaza', cantidad: 0.015, unidad: 'kg' },
    { id: 'miel', cantidad: 0.020, unidad: 'kg' },
    { id: 'limon', cantidad: 1, unidad: 'pieza' },
    { id: 'aceite_vegetal', cantidad: 0.030, unidad: 'litro' },
    { id: 'sal', cantidad: 0.003, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Sazona y sella la pechuga',
      descripcion: 'Sazona la pechuga con sal. Calienta un sartén con un poco de aceite a fuego medio-alto. Cocina la pechuga 4-5 minutos por lado hasta que esté dorada.',
      tiempo: '10 minutos',
      consejo: 'No muevas la pechuga mientras se cocina. Déjala que se selle bien para crear esa costra dorada.',
      porQue: 'La reacción de Maillard (dorar la carne) crea sabores profundos y mantiene los jugos adentro.',
      mensajeChef: 'La paciencia en el sartén se traduce en jugosidad en el plato.',
      nivelImportancia: 'critico',
      señalCorrecta: 'La pechuga está dorada por fuera y firme al tacto.',
    },
    {
      numero: 2,
      titulo: 'Deja reposar la carne',
      descripcion: 'Pasa la pechuga a una tabla y déjala reposar 5 minutos antes de cortarla en tiras.',
      tiempo: '5 minutos',
      porQue: 'Al reposar, los jugos se redistribuyen y la carne queda más suave.',
      chefPregunta: '¿Por qué la pechuga de pollo se seca tan fácil?',
      respuestaEsperada: 'Porque tiene muy poca grasa. Por eso hay que sellarla rápido y no sobre-cocerla.',
      nivelImportancia: 'clave',
    },
    {
      numero: 3,
      titulo: 'Haz el aderezo',
      descripcion: 'En un tazón, mezcla la mostaza, la miel, el jugo de limón y una pizca de sal. Bate mientras agregas el aceite poco a poco.',
      tiempo: '3 minutos',
      consejo: 'La mostaza ayuda a que la miel y el aceite se integren perfectamente.',
    },
    {
      numero: 4,
      titulo: 'Ensambla y sirve',
      descripcion: 'Coloca la lechuga trozada, el jitomate en rodajas y la cebolla en tiras. Pon las tiras de pollo encima y baña con el aderezo.',
      tiempo: '3 minutos',
      señalCorrecta: 'Pollo dorado, vegetales frescos y aderezo brillante.',
    }
  ],

  tip: 'Si te sobra aderezo, puedes guardarlo en un frasco en el refri hasta por 5 días.',
  ahorro: 'La pechuga de pollo es una proteína rendidora y más barata que otras carnes.',
  errorComun: 'Cortar la pechuga en el sentido de las fibras y que quede chiclosa.',
  popularidad: 88,
  tags: ['ensalada', 'pollo', 'premium', 'agridulce', 'comida'],
  tipoComida: 'familia',
  historiaChef: 'La combinación de mostaza y miel es un clásico de la cocina americana moderna, famosa por su equilibrio perfecto entre lo dulce y lo picante.',
  trucoChef: 'Un toque de pimienta negra recién molida sobre el pollo recién cocinado le da un aroma increíble.',
  sustituciones: [
    { falta: 'pechuga_pollo', reemplazo: 'muslo de pollo deshuesado o tofu firme' }
  ],
  chefInicio: 'Hoy vamos a dominar el sellado del pollo y un aderezo que parece de restaurante.',
  chefFinal: '¡Listo! Tienes una ensalada llena de proteína con un aderezo premium.',
  señalesExito: {
    vista: 'Tiras de pollo dorado sobre hojas verdes con aderezo brillante.',
    olor: 'Aroma a miel, mostaza y pollo asado.',
    textura: 'Pollo jugoso y vegetales crujientes.',
  },
  rescates: [
    { problema: 'El aderezo se cortó', solucion: 'Agrega una cucharadita de agua fría y sigue batiendo hasta que se una.' }
  ]
};