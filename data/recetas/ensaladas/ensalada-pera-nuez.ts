import type { Receta } from '@/types/receta';

export const ENSALADA_PERA_NUEZ: Receta = {
  id: 'ensalada-pera-nuez',
  titulo: 'Ensalada gourmet de pera y nuez',
  imagen: require('../../../assets/images/recetas/ensaladas/ensalada-pera-nuez.webp'), 
  descripcion: 'La combinación definitiva de dulce y salado. Una ensalada otoñal e increíblemente elegante, que enseña el arte de caramelizar frutas y hacer un aderezo con miel que no empalaga.',
  
  cocina: 'francesa',
  tecnicaPrincipal: 'caramelización de fruta y emulsión con miel',
  categoria: 'cena',
  rolCulinario: 'entrada',
  porciones: 2,
  tiempoMinutos: 15,
  dificultad: 'media',
  nivelChef: 2,

  aprendizajes: [
    'caramelización de frutas en sartén',
    'balance de sabores dulce-ácido',
    'aderezo con miel y mostaza'
  ],

  ingredientes: [
    { id: 'espinaca', cantidad: 0.150, unidad: 'kg' },
    { id: 'pera', cantidad: 2, unidad: 'pieza' },
    { id: 'nuez', cantidad: 0.050, unidad: 'kg' },
    { id: 'queso_fresco', cantidad: 0.080, unidad: 'kg' },
    { id: 'miel', cantidad: 0.020, unidad: 'kg' },
    { id: 'mostaza', cantidad: 0.010, unidad: 'kg' },
    { id: 'limon', cantidad: 1, unidad: 'pieza' },
    { id: 'aceite_vegetal', cantidad: 0.020, unidad: 'litro' },
    { id: 'mantequilla', cantidad: 0.015, unidad: 'kg' },
    { id: 'sal', cantidad: 0.002, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Carameliza la pera',
      descripcion: 'Corta la pera en gajos (sin semillas). Calienta un sartén con la mantequilla y la miel. Cocina la pera 2 minutos por lado hasta que esté dorada.',
      tiempo: '5 minutos',
      consejo: 'No la muevas demasiado, deja que el azúcar de la miel y la pera se caramelicen.',
      porQue: 'Al caramelizar, los azúcares de la fruta cambian de sabor y se acentúa su dulzor.',
      mensajeChef: 'La magia de caramelizar es que transforma un ingrediente simple en algo gourmet.',
      nivelImportancia: 'critico',
      señalCorrecta: 'Gajos de pera dorados y brillantes.',
    },
    {
      numero: 2,
      titulo: 'Haz el aderezo',
      descripcion: 'En un vaso, mezcla la mostaza, el jugo de limón, la sal, y el aceite poco a poco batiendo hasta emulsionar.',
      tiempo: '2 minutos',
      porQue: 'La mostaza es un excelente emulsionante y da un toque picante que equilibra la miel.',
    },
    {
      numero: 3,
      titulo: 'Tuesta la nuez',
      descripcion: 'En un sartén seco, tuesta las nueces por 2 minutos.',
      tiempo: '2 minutos',
    },
    {
      numero: 4,
      titulo: 'Arma la ensalada',
      descripcion: 'Coloca la espinaca en un plato. Pon los gajos de pera caramelizada, el queso desmoronado y las nueces. Baña con el aderezo.',
      tiempo: '3 minutos',
      señalCorrecta: 'Colores otoñales y textura crujiente.',
    }
  ],

  tip: 'Si la pera no está muy madura, déjala caramelizar un minuto más para que se suavice.',
  ahorro: 'Si no tienes nuez, las almendras o piñones funcionan perfecto.',
  errorComun: 'Quemar la miel. Mantén el fuego medio para que la pera se cocine sin que la miel se amargue.',
  popularidad: 88,
  tags: ['ensalada', 'gourmet', 'fruta', 'premium', 'vegetariano'],
  tipoComida: 'familia',
  historiaChef: 'La combinación de pera y queso azul es un clásico francés. Esta versión con queso fresco y miel es una adaptación moderna que resalta el contraste de sabores.',
  trucoChef: 'Un poco de pimienta negra recién molida sobre la pera caramelizada le da un toque de chef increíble.',
  sustituciones: [
    { falta: 'pera', reemplazo: 'manzana o durazno' },
    { falta: 'espinaca', reemplazo: 'lechuga o arúgula' }
  ],
  chefInicio: 'Hoy vamos a jugar con el dulce y el salado. El fuego y la miel serán nuestros aliados.',
  chefFinal: '¡Perfecto! Has logrado un balance de sabores digno de alta cocina.',
  señalesExito: {
    vista: 'Pera dorada sobre hojas verdes con toques blancos y marrones.',
    olor: 'Aroma a miel caramelizada y fruta dulce.',
    textura: 'Suave de la pera y crujiente de la nuez.',
  },
  rescates: [
    { problema: 'La miel se quemó y sabe amarga', solucion: 'Lava rápidamente la pera (para quitarle la miel quemada) y vuelve a caramelizar con mantequilla limpia.' }
  ]
};