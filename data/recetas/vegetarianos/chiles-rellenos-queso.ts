import type { Receta } from '@/types/receta';

export const CHILES_RELLENOS_QUESO: Receta = {
  id: 'chiles-rellenos-queso',
  titulo: 'Chiles rellenos de queso capeados',
  imagen: require('../../../assets/images/recetas/vegetarianos/chiles-rellenos-queso.webp'),
  descripcion: 'El orgullo de la cocina mexicana. Aprende a pelar chiles sin llorar, a rellenarlos y a lograr un capeado esponjoso y crujiente.',
  cocina: 'mexicana',
  tecnicaPrincipal: 'tatemado, pelado y capeado de huevo',
  categoria: 'comida',
  rolCulinario: 'plato_principal',
  porciones: 4,
  tiempoMinutos: 40,
  dificultad: 'avanzada',
  nivelChef: 3,
  aprendizajes: ['tatemado de chiles', 'pelado por vapor', 'punto de huevo para capear'],
  ingredientes: [
    { id: 'chile_poblano', cantidad: 4, unidad: 'pieza' },
    { id: 'queso_fresco', cantidad: 0.250, unidad: 'kg' },
    { id: 'huevo', cantidad: 4, unidad: 'pieza' },
    { id: 'harina', cantidad: 0.050, unidad: 'kg' },
    { id: 'aceite_vegetal', cantidad: 0.100, unidad: 'litro' },
    { id: 'sal', cantidad: 0.005, unidad: 'kg' },
    { id: 'jitomate', cantidad: 0.500, unidad: 'kg' }, // Para la salsa
    { id: 'cebolla_blanca', cantidad: 0.050, unidad: 'kg' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Tatema y pela los chiles',
      descripcion: 'Asa los chiles en el comal hasta que la piel esté negra. Mételos en una bolsa de plástico cerrada por 10 minutos, luego pélalos.',
      tiempo: '15 minutos',
      porQue: 'El vapor dentro de la bolsa hace que la piel se despegue fácilmente.',
      mensajeChef: 'El tatemado le da un sabor ahumado irremplazable.',
      nivelImportancia: 'critico',
    },
    {
      numero: 2,
      titulo: 'Rellena',
      descripcion: 'Haz una pequeña abertura en cada chile y retira las semillas con cuidado. Rellena con el queso fresco desmoronado y cierra con un palillo.',
      tiempo: '10 minutos',
    },
    {
      numero: 3,
      titulo: 'El capeado perfecto',
      descripcion: 'Separa las claras de las yemas. Bate las claras a punto de nieve (que formen picos). Incorpora las yemas suavemente con movimientos envolventes.',
      tiempo: '5 minutos',
      porQue: 'El aire de las claras es lo que hace que el capeado sea esponjoso.',
      chefPregunta: '¿Qué pasa si no bates las claras a punto de nieve?',
      respuestaEsperada: 'El capeado no esponjará y se desprenderá del chile.',
    },
    {
      numero: 4,
      titulo: 'Enharina y capea',
      descripcion: 'Pasa los chiles por harina (esto ayuda a que el huevo se pegue). Sumérgelos en el huevo batido y fríelos en aceite caliente hasta que estén dorados.',
      tiempo: '8 minutos',
      señalCorrecta: 'Capeado inflado, dorado y crujiente.',
    }
  ],
  tip: 'Licúa el jitomate con cebolla y hierve para hacer una salsa roja sencilla y bañar los chiles.',
  popularidad: 95,
  tags: ['vegetariano', 'mexicano', 'chiles', 'premium', 'tradicional'],
  tipoComida: 'familia',
  historiaChef: 'Los chiles rellenos son un platillo de la época colonial, donde la cocina española se fusionó con los ingredientes mexicanos. El capeado proviene de la técnica española del "rebozado".',
  trucoChef: 'Si te da miedo el aceite salpicando, puedes sellar los chiles en un sartén antiadherente con menos aceite.',
  chefInicio: 'Hoy vamos a cocinar un clásico de la cocina mexicana. La técnica del capeado requiere paciencia.',
  chefFinal: '¡Increíble! Lograste un capeado esponjoso y unos chiles llenos de queso.',
  señalesExito: {
    vista: 'Chiles dorados y esponjosos bañados en salsa roja.',
    olor: 'Aroma a chile asado y huevo frito.',
    textura: 'Crujiente por fuera y fundido por dentro.',
  },
  rescates: [
    { problema: 'El capeado se cayó', solucion: 'El aceite no estaba suficientemente caliente o no enharinaste los chiles.' }
  ]
};