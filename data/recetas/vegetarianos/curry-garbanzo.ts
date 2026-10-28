import type { Receta } from '@/types/receta';

export const CURRY_GARBANZO: Receta = {
  id: 'curry-garbanzo',
  titulo: 'Curry de garbanzo y espinaca',
  imagen: require('../../../assets/images/recetas/vegetarianos/curry-garbanzo.webp'),
  descripcion: 'Un plato reconfortante y lleno de proteína vegetal. Aprende a "bloom" las especias (calentarlas en aceite) para liberar todo su potencial aromático.',
  cocina: 'india',
  tecnicaPrincipal: 'bloom de especias y cocción de legumbres',
  categoria: 'comida',
  rolCulinario: 'plato_principal',
  porciones: 4,
  tiempoMinutos: 25,
  dificultad: 'media',
  nivelChef: 2,
  aprendizajes: ['tostado de especias', 'cremosidad sin lácteos', 'cocción de legumbres'],
  ingredientes: [
    { id: 'garbanzos', cantidad: 0.400, unidad: 'kg' },
    { id: 'leche_coco', cantidad: 0.400, unidad: 'litro' },
    { id: 'espinaca', cantidad: 0.150, unidad: 'kg' },
    { id: 'jitomate', cantidad: 0.200, unidad: 'kg' },
    { id: 'cebolla_blanca', cantidad: 0.100, unidad: 'kg' },
    { id: 'ajo', cantidad: 2, unidad: 'pieza' },
    { id: 'curry', cantidad: 0.010, unidad: 'kg' },
    { id: 'aceite_vegetal', cantidad: 0.020, unidad: 'litro' },
    { id: 'sal', cantidad: 0.005, unidad: 'kg' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Prepara la base',
      descripcion: 'Pica finamente la cebolla y el ajo. Calienta el aceite en una olla y sofríelos hasta que estén transparentes.',
      tiempo: '5 minutos',
      nivelImportancia: 'clave',
    },
    {
      numero: 2,
      titulo: 'El truco de las especias',
      descripcion: 'Agrega el curry en polvo al sartén con la cebolla y el ajo. Revuelve constantemente por 30 segundos.',
      tiempo: '1 minuto',
      porQue: 'Al calentar las especias en grasa, se liberan sus aceites esenciales, multiplicando su aroma y sabor.',
      mensajeChef: 'No quemes las especias, solo despértalas con el calor.',
      nivelImportancia: 'critico',
      señalCorrecta: 'Las especias huelen muy intenso.',
    },
    {
      numero: 3,
      titulo: 'Cocina el curry',
      descripcion: 'Agrega el jitomate picado y cocina 3 minutos. Añade los garbanzos escurridos y la leche de coco. Hierve suavemente por 10 minutos.',
      tiempo: '13 minutos',
      porQue: 'La leche de coco aporta la grasa y cremosidad que normalmente daría la mantequilla o la crema.',
    },
    {
      numero: 4,
      titulo: 'Termina con la espinaca',
      descripcion: 'Agrega la espinaca y tapa la olla por 2 minutos hasta que se reduzca. Sazona con sal.',
      tiempo: '2 minutos',
      chefPregunta: '¿Por qué la espinaca se reduce tanto al cocinarla?',
      respuestaEsperada: 'Porque está compuesta principalmente de agua, que se evapora con el calor.',
      señalCorrecta: 'Espinaca cocida, garbanzos suaves y salsa espesa.',
    }
  ],
  tip: 'Sirve con arroz blanco para una comida completa.',
  ahorro: 'Las legumbres y la leche de coco son muy económicas.',
  errorComun: 'No escurrir bien los garbanzos y que el curry quede aguado.',
  popularidad: 88,
  tags: ['vegetariano', 'curry', 'india', 'vegano', 'proteina'],
  tipoComida: 'familia',
  historiaChef: 'El curry es un término occidental para las salsas especiadas de la India. Este plato adapta la tradición con ingredientes fáciles de encontrar en México.',
  trucoChef: 'Aplasta unos garbanzos con una cuchara para espesar la salsa naturalmente.',
  sustituciones: [
    { falta: 'garbanzos', reemplazo: 'lentejas cocidas' },
    { falta: 'leche_coco', reemplazo: 'crema de leche (no vegano)' }
  ],
  chefInicio: 'Hoy vamos a viajar a la India con un curry lleno de proteína y sin carne.',
  chefFinal: '¡Espectacular! Las especias liberaron todo su aroma y la cremosidad es perfecta.',
  señalesExito: {
    vista: 'Salsa espesa de color mostaza con hojas verdes de espinaca.',
    olor: 'Aroma profundo a curry y coco.',
    textura: 'Cremosa con garbanzos firmes.',
  },
  rescates: [
    { problema: 'Quedó muy picante', solucion: 'Agrega un poco más de leche de coco o sirve con un poco de yogurt.' }
  ]
};