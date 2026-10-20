import type { Receta } from '@/types/receta';

export const ENSALADA_ATUN_ELOTE: Receta = {
  id: 'ensalada-atun-elote',
  titulo: 'Ensalada fresca de atún y elote',
  imagen: require('../../../assets/images/recetas/ensaladas/ensalada-atun-elote.webp'), 
  descripcion: 'Una ensalada rápida, llena de color y perfecta para los días calurosos. Aprende a balancear el dulzor del elote con la acidez del limón y la textura del atún.',
  
  cocina: 'internacional',
  tecnicaPrincipal: 'ensamblaje en frío y maceración rápida',
  categoria: 'comida',
  rolCulinario: 'plato_principal',
  porciones: 2,
  tiempoMinutos: 10,
  dificultad: 'facil',
  nivelChef: 1,

  aprendizajes: [
    'drenado correcto de conservas',
    'balance de sabores dulce-ácido',
    'cortes en cubos uniformes'
  ],

  ingredientes: [
    { id: 'atun', cantidad: 1, unidad: 'pieza' }, // 1 lata
    { id: 'elote', cantidad: 0.150, unidad: 'kg' }, // Granos de elote
    { id: 'jitomate', cantidad: 2, unidad: 'pieza' },
    { id: 'cebolla_blanca', cantidad: 0.050, unidad: 'kg' },
    { id: 'limon', cantidad: 2, unidad: 'pieza' },
    { id: 'aceite_vegetal', cantidad: 0.020, unidad: 'litro' },
    { id: 'lechuga', cantidad: 0.100, unidad: 'kg' },
    { id: 'sal', cantidad: 0.003, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Drena y limpia',
      descripcion: 'Abre la lata de atún y escúrrela muy bien. Lava y pica el jitomate en cubos, la cebolla finamente y deshoja la lechuga.',
      tiempo: '4 minutos',
      consejo: 'Presiona el atún contra la tapa para sacar todo el aceite o agua. Si no lo haces, la ensalada quedará aguada.',
      nivelImportancia: 'clave',
    },
    {
      numero: 2,
      titulo: 'Macerar la cebolla',
      descripcion: 'Coloca la cebolla picada en un tazón y cúbrela con el jugo de un limón y una pizca de sal. Déjala reposar 5 minutos.',
      tiempo: '5 minutos',
      porQue: 'El limón "cuece" la cebolla ligeramente, quitándole el sabor fuerte y amargo.',
      mensajeChef: 'Este pequeño paso hace la diferencia entre una ensalada casera y una de restaurante.',
      señalCorrecta: 'La cebolla se ve más transparente y huele menos penetrante.',
    },
    {
      numero: 3,
      titulo: 'Mezcla los ingredientes',
      descripcion: 'En un bowl grande, mezcla el atún, el elote, el jitomate y la cebolla macerada (con todo y limón).',
      tiempo: '2 minutos',
    },
    {
      numero: 4,
      titulo: 'Adereza y sirve',
      descripcion: 'Agrega el aceite, el jugo del limón restante y sal al gusto. Sirve la mezcla sobre un colchón de lechuga fresca.',
      tiempo: '2 minutos',
      chefPregunta: '¿Por qué servimos la mezcla de atún sobre la lechuga y no la mezclamos toda?',
      respuestaEsperada: 'Para que la lechuga se mantenga crujiente y no se marchite con la humedad del atún.',
      nivelImportancia: 'clave',
      señalCorrecta: 'La lechuga está erguida y la mezcla de atún se ve jugosa.',
    }
  ],

  tip: 'Puedes agregar aguacate en cubos justo antes de servir para darle cremosidad.',
  ahorro: 'Usa elote de lata o congelado si no es temporada; es igual de efectivo.',
  errorComun: 'No escurrir bien el atún.',
  popularidad: 85,
  tags: ['ensalada', 'atun', 'rapido', 'fresco'],
  tipoComida: 'barata',
  historiaChef: 'El atún enlatado se volvió popular en el siglo XX como una proteína accesible y económica, y esta ensalada es un ejemplo perfecto de cómo la cocina práctica se vuelve deliciosa.',
  trucoChef: 'Un toque de mayonesa (solo una cucharadita) hace que la mezcla se sienta más cremosa sin ser pesada.',
  sustituciones: [
    { falta: 'atun', reemplazo: 'sardina en agua o pollo picado' },
    { falta: 'elote', reemplazo: 'granos de soya o chícharos' }
  ],
  chefInicio: 'Hoy haremos una ensalada rápida. El secreto está en el balance ácido-dulce y en mantener las texturas.',
  chefFinal: '¡Listo! Tienes un platillo fresco, lleno de proteína y color.',
  señalesExito: {
    vista: 'Colores brillantes: rojo del jitomate, amarillo del elote y verde de la lechuga.',
    olor: 'Aroma cítrico y fresco del limón.',
    textura: 'Crujiente y jugosa.',
  },
  rescates: [
    { problema: 'La ensalada quedó muy ácida', solucion: 'Agrega el elote restante o un poco de aguacate para equilibrar la acidez.' }
  ]
};