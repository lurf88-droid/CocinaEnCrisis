import type { Receta } from '@/types/receta';

export const PASTA_BOLONESA_LENTEJAS: Receta = {
  id: 'pasta-bolonesa-lentejas',
  titulo: 'Pasta Boloñesa de Lentejas',
  imagen: require('../../../assets/images/recetas/vegetarianos/pasta-bolonesa-lentejas.webp'),
  descripcion: 'Una salsa boloñesa clásica, pero con lentejas en lugar de carne. Tan buena que nadie notará la diferencia. Aprende el sofrito perfecto y la reducción de tomate.',
  cocina: 'italiana',
  tecnicaPrincipal: 'sofrito, reducción de tomate y cocción de legumbres',
  categoria: 'comida',
  rolCulinario: 'plato_principal',
  porciones: 4,
  tiempoMinutos: 30,
  dificultad: 'media',
  nivelChef: 2,
  aprendizajes: ['sofrito italiano', 'desglase con vino', 'textura de boloñesa vegetal'],
  ingredientes: [
    { id: 'pasta', cantidad: 0.400, unidad: 'kg' },
    { id: 'lentejas', cantidad: 0.200, unidad: 'kg' },
    { id: 'jitomate', cantidad: 0.600, unidad: 'kg' },
    { id: 'cebolla_blanca', cantidad: 0.100, unidad: 'kg' },
    { id: 'zanahoria', cantidad: 1, unidad: 'pieza' },
    { id: 'ajo', cantidad: 2, unidad: 'pieza' },
    { id: 'aceite_vegetal', cantidad: 0.030, unidad: 'litro' },
    { id: 'sal', cantidad: 0.005, unidad: 'kg' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'El Sofrito',
      descripcion: 'Pica la cebolla, la zanahoria y el ajo muy finamente. Cocínalos en aceite a fuego lento hasta que estén suaves y dulces (10 minutos).',
      tiempo: '12 minutos',
      porQue: 'El sofrito lento extrae la dulzura natural de los vegetales y crea la base de sabor.',
      mensajeChef: 'La paciencia en el sofrito es lo que hace la diferencia.',
      nivelImportancia: 'critico',
    },
    {
      numero: 2,
      titulo: 'Cocina las lentejas',
      descripcion: 'Agrega las lentejas y el jitomate picado. Añade una taza de agua y cocina a fuego bajo por 15 minutos hasta que las lentejas estén tiernas.',
      tiempo: '15 minutos',
    },
    {
      numero: 3,
      titulo: 'Ajusta la textura',
      descripcion: 'Prueba y sazona. Si la salsa está muy líquida, aplasta un poco de lentejas con una cuchara para espesar.',
      tiempo: '2 minutos',
      señalCorrecta: 'Salsa espesa con textura de carne molida.',
    },
    {
      numero: 4,
      titulo: 'Sirve',
      descripcion: 'Mezcla la salsa con la pasta cocida y sirve caliente.',
      tiempo: '2 minutos',
      chefPregunta: '¿Por qué la boloñesa tradicional lleva zanahoria?',
      respuestaEsperada: 'Porque la zanahoria aporta dulzor natural y equilibra la acidez del tomate.',
    }
  ],
  tip: 'Agrega un toque de queso fresco rallado al servir.',
  popularidad: 92,
  tags: ['vegetariano', 'pasta', 'boloñesa', 'italiano', 'economico'],
  tipoComida: 'familia',
  historiaChef: 'La boloñesa nació en Bolonia, Italia, como un guiso de carne. Esta versión vegetariana es una adaptación moderna que mantiene el sabor profundo y la textura.',
  trucoChef: 'Un chorrito de salsa de soya en la salsa le da un toque umami increíble que imita el sabor de la carne.',
  chefInicio: 'Hoy vamos a hacer una boloñesa sin carne. El secreto está en el sofrito y las especias.',
  chefFinal: '¡Perfecto! Tienes una salsa llena de sabor y textura.',
  señalesExito: {
    vista: 'Pasta bañada en una salsa roja espesa.',
    olor: 'Aroma a tomate cocido y ajo.',
    textura: 'Salsa espesa con lentejas suaves.',
  },
  rescates: [
    { problema: 'La salsa quedó ácida', solucion: 'Agrega una pizca de azúcar para cortar la acidez del tomate.' }
  ]
};