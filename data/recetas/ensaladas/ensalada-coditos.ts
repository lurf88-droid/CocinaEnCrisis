import type { Receta } from '@/types/receta';

export const ENSALADA_CODITOS: Receta = {
  id: 'ensalada-coditos',
  titulo: 'Ensalada de coditos con jamón',
  imagen: require('../../../assets/images/recetas/ensaladas/ensalada-coditos.webp'), 
  descripcion: 'El rey de las fiestas infantiles y las comidas familiares. Aprende a cocinar la pasta perfecta para ensalada, evitando que se pegue o se pase de cocción.',
  
  cocina: 'mexicana',
  tecnicaPrincipal: 'cocción de pasta y ensamblaje en frío',
  categoria: 'comida',
  rolCulinario: 'acompanamiento',
  porciones: 4,
  tiempoMinutos: 20,
  dificultad: 'facil',
  nivelChef: 1,

  aprendizajes: [
    'cocción al dente de pasta corta',
    'enfriado rápido para detener la cocción',
    'equilibrio de cremosidad en ensaladas'
  ],

  ingredientes: [
    { id: 'pasta', cantidad: 0.250, unidad: 'kg' }, // Coditos o macarrones
    { id: 'jamon', cantidad: 0.150, unidad: 'kg' },
    { id: 'crema', cantidad: 0.150, unidad: 'litro' },
    { id: 'mayonesa', cantidad: 0.050, unidad: 'kg' },
    { id: 'elote', cantidad: 0.100, unidad: 'kg' }, // Granos de elote
    { id: 'sal', cantidad: 0.005, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Cuece la pasta',
      descripcion: 'Hierve abundante agua con sal. Agrega la pasta y cuécela hasta que esté al dente (un poco firme).',
      tiempo: '10 minutos',
      consejo: 'No la dejes demasiado tiempo, porque luego absorbe la crema y se hace papilla.',
      nivelImportancia: 'clave',
    },
    {
      numero: 2,
      titulo: 'Enfría y escurre',
      descripcion: 'Escurre la pasta en un colador y pásala inmediatamente por agua fría hasta que pierda el calor por completo.',
      tiempo: '2 minutos',
      porQue: 'El agua fría corta la cocción de inmediato y le quita el exceso de almidón (esa capa babosa) para que no se pegue.',
      mensajeChef: 'Para ensaladas de pasta, el agua fría es tu mejor amiga.',
      nivelImportancia: 'critico',
      señalCorrecta: 'La pasta está fría, firme y no se pega entre sí.',
    },
    {
      numero: 3,
      titulo: 'Prepara los complementos',
      descripcion: 'Corta el jamón en cuadritos pequeños. Si usas elote en lata, escúrrelo bien.',
      tiempo: '3 minutos',
    },
    {
      numero: 4,
      titulo: 'Mezcla todo',
      descripcion: 'En un tazón grande, mezcla la pasta, el jamón y el elote. Agrega la crema y la mayonesa. Prueba y ajusta la sal.',
      tiempo: '3 minutos',
      consejo: 'Mezcla con una espátula de silicona para no romper la pasta.',
      chefPregunta: '¿Por qué la pasta de ensalada sabe mejor al día siguiente?',
      respuestaEsperada: 'Porque la pasta absorbe los sabores de la crema, la mayonesa y el jamón, intensificando su sabor.',
    }
  ],

  tip: 'Puedes agregar zanahoria rallada o chícharos para darle más color y nutrientes.',
  ahorro: 'Rinde muchísimo y es perfecta para comer durante varios días.',
  errorComun: 'Enjuagar la pasta con agua caliente o no escurrirla bien antes de mezclar.',
  popularidad: 90,
  tags: ['ensalada', 'pasta', 'fiesta', 'economica'],
  tipoComida: 'familia',
  historiaChef: 'Esta ensalada llegó a México con la influencia de la cocina estadounidense de posguerra, donde la pasta y los aderezos cremosos eran símbolo de modernidad.',
  trucoChef: 'Una pizca de mostaza en la mezcla de crema y mayonesa le corta el exceso de dulzor y le da profundidad.',
  sustituciones: [
    { falta: 'jamon', reemplazo: 'atún escurrido o salchicha picada' },
    { falta: 'elote', reemplazo: 'chícharos enlatados' }
  ],
  chefInicio: 'Hoy vamos a hacer un clásico que a todos nos recuerda a las fiestas. La clave está en el enfriado.',
  chefFinal: '¡Listo! Una ensalada cremosa, fresca y perfecta para compartir.',
  señalesExito: {
    vista: 'Pasta cubierta de una salsa cremosa blanca, con trozos de jamón rosado y elote amarillo.',
    olor: 'Aroma suave a crema y jamón.',
    textura: 'Cremosa, con la pasta firme.',
  },
  rescates: [
    { problema: 'La ensalada quedó seca', solucion: 'Agrega una cucharada extra de crema o leche para hidratarla.' }
  ]
};