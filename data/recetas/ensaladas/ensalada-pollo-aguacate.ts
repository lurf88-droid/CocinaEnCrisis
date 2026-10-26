import type { Receta } from '@/types/receta';

export const ENSALADA_POLLO_AGUACATE: Receta = {
  id: 'ensalada-pollo-aguacate',
  titulo: 'Ensalada de pollo y aguacate',
  imagen: require('../../../assets/images/recetas/ensaladas/ensalada-pollo-aguacate'), 
  descripcion: 'Una ensalada completa, llena de proteína y grasas saludables. Aprende a mantener el aguacate verde y a equilibrar un aderezo cítrico que realza el sabor del pollo.',
  
  cocina: 'internacional',
  tecnicaPrincipal: 'ensamblaje en frío y prevención de oxidación',
  categoria: 'comida',
  rolCulinario: 'plato_principal',
  porciones: 2,
  tiempoMinutos: 15,
  dificultad: 'facil',
  nivelChef: 1,

  aprendizajes: [
    'prevención de oxidación en frutas',
    'equilibrio de texturas (cremoso y crujiente)',
    'aderezo básico con cítricos'
  ],

  ingredientes: [
    { id: 'lechuga', cantidad: 0.200, unidad: 'kg' },
    { id: 'pollo_deshebrado', cantidad: 0.250, unidad: 'kg' },
    { id: 'aguacate', cantidad: 1, unidad: 'pieza' },
    { id: 'jitomate', cantidad: 1, unidad: 'pieza' },
    { id: 'limon', cantidad: 2, unidad: 'pieza' },
    { id: 'aceite_vegetal', cantidad: 0.020, unidad: 'litro' },
    { id: 'sal', cantidad: 0.003, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Prepara la base verde',
      descripcion: 'Lava y desinfecta la lechuga. Sécala muy bien y trocéala en un bowl grande.',
      tiempo: '4 minutos',
      consejo: 'La lechuga seca es clave para que el aderezo se adhiera.',
      nivelImportancia: 'clave',
    },
    {
      numero: 2,
      titulo: 'Corta el aguacate (La técnica anti-oxidación)',
      descripcion: 'Corta el aguacate en cubos. Inmediatamente después, exprime medio limón sobre él y revuelve suavemente.',
      tiempo: '3 minutos',
      porQue: 'El ácido del limón (ácido cítrico) detiene la enzima que hace que el aguacate se ponga café y feo.',
      mensajeChef: 'El limón no solo da sabor, también protege el color de tus ingredientes.',
      chefPregunta: '¿Por qué el aguacate se pone negro si no le ponemos limón?',
      respuestaEsperada: 'Porque entra en contacto con el oxígeno del aire y se oxida (reacción de pardeamiento enzimático).',
      nivelImportancia: 'critico',
    },
    {
      numero: 3,
      titulo: 'Haz el aderezo',
      descripcion: 'En un tazón, mezcla el jugo del limón restante, el aceite y una pizca de sal. Bate hasta integrar.',
      tiempo: '2 minutos',
    },
    {
      numero: 4,
      titulo: 'Ensambla y sirve',
      descripcion: 'Coloca el pollo y el jitomate picado sobre la lechuga. Agrega el aguacate y baña con el aderezo justo antes de servir.',
      tiempo: '3 minutos',
      señalCorrecta: 'Colores vivos, aguacate verde brillante y hojas crujientes.',
    }
  ],

  tip: 'Si no vas a comer la ensalada de inmediato, guarda el aguacate en un recipiente hermético con el hueso.',
  ahorro: 'Aprovecha el pollo rostizado del día anterior.',
  errorComun: 'Poner el aderezo desde temprano y que la lechuga se marchite.',
  popularidad: 88,
  tags: ['ensalada', 'pollo', 'saludable', 'rapido'],
  tipoComida: 'familia',
  historiaChef: 'Este tipo de ensaladas se volvieron populares en los años 80 en California, cuando la gente empezó a buscar comidas ligeras pero completas.',
  trucoChef: 'Un poco de queso fresco desmoronado por encima le da el toque salado perfecto.',
  sustituciones: [
    { falta: 'pollo_deshebrado', reemplazo: 'atun o garbanzos' }
  ],
  chefInicio: 'Hoy vamos a hacer una ensalada que llena. El secreto está en proteger el aguacate.',
  chefFinal: '¡Perfecto! Tienes una comida balanceada y con colores hermosos.',
  señalesExito: {
    vista: 'Verde de la lechuga y el aguacate, rojo del jitomate y blanco del pollo.',
    olor: 'Aroma cítrico y fresco.',
    textura: 'Crujiente y cremoso a la vez.',
  },
  rescates: [
    { problema: 'El aguacate se puso negro', solucion: 'Corta una capa fina de la superficie oxidada; el interior estará perfecto.' }
  ]
};