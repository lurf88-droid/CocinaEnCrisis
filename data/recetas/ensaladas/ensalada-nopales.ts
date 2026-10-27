import type { Receta } from '@/types/receta';

export const ENSALADA_NOPALES: Receta = {
  id: 'ensalada-nopales',
  titulo: 'Ensalada de nopales tradicional',
imagen: require('../../../assets/images/recetas/ensaladas/ensalada-nopales.webp'), 
  descripcion: 'Un platillo prehispánico lleno de salud. Aprende la técnica fundamental para limpiar los nopales, quitarles la baba y lograr una textura firme y deliciosa.',
  
  cocina: 'mexicana',
  tecnicaPrincipal: 'limpieza de nopales, desbabado y ensamblaje en frío',
  categoria: 'comida',
  rolCulinario: 'acompanamiento',
  porciones: 3,
  tiempoMinutos: 20,
  dificultad: 'facil',
  nivelChef: 1,

  aprendizajes: [
    'técnica para cortar nopales',
    'control de la baba (mucílago)',
    'equilibrio de sabores con limón y sal'
  ],

  ingredientes: [
   { id: 'nopal', cantidad: 0.400, unidad: 'kg' },
    { id: 'jitomate', cantidad: 2, unidad: 'pieza' },
    { id: 'cebolla_blanca', cantidad: 0.050, unidad: 'kg' },
    { id: 'cilantro', cantidad: 0.020, unidad: 'kg' },
    { id: 'queso_fresco', cantidad: 0.100, unidad: 'kg' },
    { id: 'limon', cantidad: 2, unidad: 'pieza' },
    { id: 'aceite_vegetal', cantidad: 0.020, unidad: 'litro' },
    { id: 'sal', cantidad: 0.005, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Limpia los nopales',
      descripcion: 'Lava los nopales. Con un cuchillo, raspa suavemente la superficie para quitar las espinitas (o los pequeñitos que tengan). Corta los bordes y luego córtalos en tiras o cuadritos.',
      tiempo: '5 minutos',
      consejo: 'Sostén el nopal con un tenedor o un trapo para no pincharte.',
      nivelImportancia: 'clave',
    },
    {
      numero: 2,
      titulo: 'Quita la baba',
      descripcion: 'Pon los nopales en un colador y lávalos con agua fría abundante. En un tazón, cúbrelos con agua con mucho limón y sal por 5 minutos. Luego escúrrelos.',
      tiempo: '5 minutos',
      porQue: 'El limón y la sal ayudan a cortar la baba natural del nopal y le quitan el sabor amargo.',
      mensajeChef: 'La baba es el mayor miedo del nopal, pero con limón se controla.',
      chefPregunta: '¿Qué pasa si no le pones limón a los nopales?',
      respuestaEsperada: 'Suelten mucha baba, se peguen y sepan ligeramente amargos.',
      nivelImportancia: 'critico',
      señalCorrecta: 'Los nopales se sienten menos resbalosos.',
    },
    {
      numero: 3,
      titulo: 'Pica los vegetales',
      descripcion: 'Pica el jitomate en cubos, la cebolla en tiras finas y el cilantro finamente. Desmorona el queso fresco.',
      tiempo: '4 minutos',
    },
    {
      numero: 4,
      titulo: 'Ensambla la ensalada',
      descripcion: 'En un bowl, mezcla los nopales escurridos con el jitomate, la cebolla y el cilantro. Adereza con el aceite, jugo de limón y sal. Termina con el queso fresco encima.',
      tiempo: '3 minutos',
      señalCorrecta: 'Nopales verdes brillantes, sin hilos de baba colgando.',
    }
  ],

  tip: 'Si quieres una versión caliente, asa los nopales en un comal en lugar de comerlos crudos.',
  ahorro: 'El nopal es uno de los ingredientes más baratos y nutritivos de México.',
  errorComun: 'No quitarles la baba y que la ensalada se vea babosa.',
  popularidad: 85,
  tags: ['ensalada', 'mexicana', 'vegetariano', 'saludable', 'economico'],
  tipoComida: 'barata',
  historiaChef: 'El nopal fue un alimento fundamental en la dieta de los aztecas, simbolizando la fundación de Tenochtitlán. Hoy es reconocido mundialmente por sus propiedades medicinales.',
  trucoChef: 'Si compras nopales ya limpios en bolsa, lávalos muy bien antes de usarlos.',
  sustituciones: [
    { falta: 'queso_fresco', reemplazo: 'panela o queso cotija' }
  ],
  chefInicio: 'Hoy vamos a quitarle el miedo al nopal. Con la técnica correcta, es una delicia.',
  chefFinal: '¡Excelente! Dominaste la baba del nopal y lograste una ensalada fresca y tradicional.',
  señalesExito: {
    vista: 'Tiras de nopal verde brillante, jitomate rojo y queso blanco.',
    olor: 'Aroma fresco a cilantro y limón.',
    textura: 'Crujiente y ligeramente firme.',
  },
  rescates: [
    { problema: 'Los nopales tienen mucha baba', solucion: 'Enjuágalos de nuevo con agua caliente (solo un poco) y escúrrelos de inmediato.' }
  ]
};