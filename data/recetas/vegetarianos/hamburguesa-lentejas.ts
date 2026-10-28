import type { Receta } from '@/types/receta';

export const HAMBURGUESA_LENTEJAS: Receta = {
  id: 'hamburguesa-lentejas',
  titulo: 'Hamburguesas de lentejas',
  imagen: require('../../../assets/images/recetas/vegetarianos/hamburguesa-lentejas.webp'),
  descripcion: 'Una alternativa vegetariana a la carne molida. Aprende a dar estructura a una hamburguesa sin carne usando avena como aglutinante y a sellarla sin que se deshaga.',
  cocina: 'internacional',
  tecnicaPrincipal: 'formación de masas y sellado',
  categoria: 'comida',
  rolCulinario: 'plato_principal',
  porciones: 4,
  tiempoMinutos: 30,
  dificultad: 'media',
  nivelChef: 2,
  aprendizajes: ['cocción de legumbres', 'aglutinantes naturales', 'formación de hamburguesas'],
  ingredientes: [
    { id: 'lentejas', cantidad: 0.200, unidad: 'kg' },
    { id: 'avena', cantidad: 0.050, unidad: 'kg' },
    { id: 'huevo', cantidad: 1, unidad: 'pieza' },
    { id: 'cebolla_blanca', cantidad: 0.050, unidad: 'kg' },
    { id: 'ajo', cantidad: 1, unidad: 'pieza' },
    { id: 'pan', cantidad: 2, unidad: 'pieza' }, // Pan para hamburguesa
    { id: 'aceite_vegetal', cantidad: 0.020, unidad: 'litro' },
    { id: 'sal', cantidad: 0.005, unidad: 'kg' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Cuece las lentejas',
      descripcion: 'Lava las lentejas y cuécelas en agua sin sal por 20 minutos hasta que estén muy suaves. Escúrrelas MUY bien.',
      tiempo: '20 minutos',
      consejo: 'Si las lentejas quedan aguadas, la hamburguesa no se sostendrá.',
      nivelImportancia: 'critico',
    },
    {
      numero: 2,
      titulo: 'Haz la mezcla',
      descripcion: 'Aplasta las lentejas con un tenedor. Pica la cebolla y el ajo muy finos. Mézclalos con las lentejas, el huevo, la avena y sal.',
      tiempo: '5 minutos',
      porQue: 'La avena absorberá la humedad y el huevo actuará como pegamento natural.',
      mensajeChef: 'La textura es la clave de una buena hamburguesa vegetariana.',
    },
    {
      numero: 3,
      titulo: 'Forma y enfría',
      descripcion: 'Forma 4 hamburguesas gruesas. Déjalas reposar en el refri por 10 minutos.',
      tiempo: '10 minutos',
      consejo: 'El frío ayuda a que mantengan su forma al sellarlas.',
    },
    {
      numero: 4,
      titulo: 'Sella en el sartén',
      descripcion: 'Calienta el aceite a fuego medio-alto. Cocina cada hamburguesa 4 minutos por lado.',
      tiempo: '8 minutos',
      chefPregunta: '¿Por qué una hamburguesa vegetariana es más difícil de hacer que una de carne?',
      respuestaEsperada: 'Porque la carne tiene grasa natural que la une y la hace jugosa; los vegetales son más acuosos y desmenuzables.',
      señalCorrecta: 'Dorada por fuera y firme al tacto.',
    }
  ],
  tip: 'Puedes agregar queso fresco derretido encima al final y servir con lechuga y jitomate.',
  ahorro: 'Las lentejas y la avena son muchísimo más baratas que la carne molida.',
  errorComun: 'No escurrir bien las lentejas y que las hamburguesas se deshagan.',
  popularidad: 85,
  tags: ['vegetariano', 'hamburguesa', 'lentejas', 'proteina'],
  tipoComida: 'barata',
  historiaChef: 'Las hamburguesas vegetarianas se popularizaron en los años 70 como alternativa saludable. Hoy son un plato estrella en cualquier restaurante veggie.',
  trucoChef: 'Si la mezcla está muy húmeda, agrega más avena hasta que puedas formar una bola sin que se pegue.',
  sustituciones: [
    { falta: 'huevo', reemplazo: 'linaza molida con agua (vegano)' }
  ],
  chefInicio: 'Hoy vamos a demostrar que no necesitas carne para hacer una gran hamburguesa.',
  chefFinal: '¡Logrado! Tienes hamburguesas firmes, doradas y llenas de proteína.',
  señalesExito: {
    vista: 'Hamburguesas doradas en pan tostado.',
    olor: 'Aroma a especias y lentejas cocidas.',
    textura: 'Crujiente por fuera y suave por dentro.',
  },
  rescates: [
    { problema: 'Se deshacen en el sartén', solucion: 'Agrega una cucharada más de avena a la mezcla y fríe con el fuego un poco más bajo.' }
  ]
};