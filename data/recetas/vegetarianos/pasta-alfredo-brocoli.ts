import type { Receta } from '@/types/receta';

export const PASTA_ALFREDO_BROCOLI: Receta = {
  id: 'pasta-alfredo-brocoli',
  titulo: 'Pasta Alfredo con brócoli',
  imagen: require('../../../assets/images/recetas/vegetarianos/pasta-alfredo-brocoli.webp'),
  descripcion: 'Una pasta cremosa y reconfortante. Aprende a crear una salsa espesa sin necesidad de harina, usando solo la crema, el queso y el almidón de la pasta.',
  cocina: 'italiana',
  tecnicaPrincipal: 'reducción de crema y emulsión con queso',
  categoria: 'cena',
  rolCulinario: 'plato_principal',
  porciones: 3,
  tiempoMinutos: 20,
  dificultad: 'media',
  nivelChef: 2,
  aprendizajes: ['punto de cocción de pasta', 'reducción de lácteos', 'emulsión de queso'],
  ingredientes: [
    { id: 'pasta', cantidad: 0.250, unidad: 'kg' },
    { id: 'crema', cantidad: 0.200, unidad: 'litro' },
    { id: 'mantequilla', cantidad: 0.030, unidad: 'kg' },
    { id: 'queso_fresco', cantidad: 0.100, unidad: 'kg' },
    { id: 'brocoli', cantidad: 0.200, unidad: 'kg' },
    { id: 'ajo', cantidad: 2, unidad: 'pieza' },
    { id: 'sal', cantidad: 0.005, unidad: 'kg' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Cuece la pasta y el brócoli',
      descripcion: 'Hierve agua con sal. Cocina la pasta y, a mitad de cocción, agrega los floretes de brócoli a la misma olla.',
      tiempo: '10 minutos',
      consejo: 'El brócoli necesita menos tiempo que la pasta, así que agregarlo después es perfecto.',
    },
    {
      numero: 2,
      titulo: 'Haz la salsa',
      descripcion: 'En un sartén, derrite la mantequilla y sofríe el ajo picado. Agrega la crema y cocina a fuego bajo hasta que reduzca un poco.',
      tiempo: '5 minutos',
      porQue: 'Reducir la crema concentra su sabor y hace que espese más rápido.',
      mensajeChef: 'La crema no debe hervir fuerte, o se cortará.',
      nivelImportancia: 'critico',
    },
    {
      numero: 3,
      titulo: 'Integra el queso',
      descripcion: 'Baja el fuego al mínimo y agrega el queso desmoronado. Revuelve hasta que se derrita y se forme una salsa suave.',
      tiempo: '2 minutos',
      chefPregunta: '¿Por qué el queso se hace grumos en la crema?',
      respuestaEsperada: 'Porque el fuego está muy alto o el queso es muy seco; hay que agregarlo con el fuego bajo y en porciones.',
      señalCorrecta: 'Salsa tersa de color crema.',
    },
    {
      numero: 4,
      titulo: 'Mezcla y sirve',
      descripcion: 'Escurre la pasta y el brócoli. Mézclalos con la salsa Alfredo y sirve caliente.',
      tiempo: '2 minutos',
    }
  ],
  tip: 'Reserva un poco del agua de la cocción de la pasta; si la salsa queda muy espesa, agrégale un chorrito para aligerarla.',
  ahorro: 'Rinde mucho y es un plato súper reconfortante.',
  errorComun: 'Dejar que la crema hierva a borbotones.',
  popularidad: 92,
  tags: ['vegetariano', 'pasta', 'cremosa', 'italiana'],
  tipoComida: 'familia',
  historiaChef: 'La Fettuccine Alfredo nació en Roma en 1914, creada por el chef Alfredo Di Lelio para una esposa que tenía problemas para comer. Se popularizó en Estados Unidos con la adición de crema.',
  trucoChef: 'Una pizca de nuez moscada en la salsa Alfredo le da un toque de restaurante.',
  sustituciones: [
    { falta: 'crema', reemplazo: 'leche evaporada o crema de leche vegetal' }
  ],
  chefInicio: 'Hoy vamos a hacer una pasta cremosa de verdad. El secreto está en el queso y el fuego bajo.',
  chefFinal: '¡Perfecto! Lograste una salsa sedosa sin grumos, con el brócoli al dente.',
  señalesExito: {
    vista: 'Pasta bañada en salsa blanca brillante con brócoli verde.',
    olor: 'Aroma a mantequilla, ajo y queso.',
    textura: 'Cremosa y reconfortante.',
  },
  rescates: [
    { problema: 'La salsa se cortó', solucion: 'Baja el fuego y agrega un poco de agua caliente de la pasta mientras revuelves rápido.' }
  ]
};