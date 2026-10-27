import type { Receta } from '@/types/receta';

export const ENSALADA_GARBANZOS: Receta = {
  id: 'ensalada-garbanzos',
  titulo: 'Ensalada de garbanzos y atún',
imagen: require('../../../assets/images/recetas/ensaladas/ensalada-garbanzos.webp'), 
  descripcion: 'Una ensalada mediterránea cargada de proteína y fibra. Aprende a usar legumbres enlatadas correctamente y a crear un aderezo fresco que no las haga sentir pesadas.',
  
  cocina: 'mediterranea',
  tecnicaPrincipal: 'drenado de conservas y maceración',
  categoria: 'comida',
  rolCulinario: 'plato_principal',
  porciones: 2,
  tiempoMinutos: 10,
  dificultad: 'facil',
  nivelChef: 1,

  aprendizajes: [
    'limpieza de conservas (eliminar el exceso de sodio)',
    'maceración de cebollas en ácido',
    'ensamblaje de ensaladas sin hojas verdes'
  ],

  ingredientes: [
    { id: 'garbanzos', cantidad: 0.400, unidad: 'kg' }, // 1 lata escurrida aprox
    { id: 'atun', cantidad: 1, unidad: 'pieza' }, // 1 lata
    { id: 'jitomate', cantidad: 2, unidad: 'pieza' },
    { id: 'cebolla_blanca', cantidad: 0.050, unidad: 'kg' },
    { id: 'pepino', cantidad: 1, unidad: 'pieza' },
    { id: 'limon', cantidad: 2, unidad: 'pieza' },
    { id: 'aceite_vegetal', cantidad: 0.020, unidad: 'litro' },
    { id: 'sal', cantidad: 0.003, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Lava los garbanzos',
      descripcion: 'Abre la lata de garbanzos y escúrrelos. Enjuágalos con abundante agua fría dentro del colador.',
      tiempo: '2 minutos',
      porQue: 'El líquido de la lata es almidonado y salado. Enjuagarlos los hace más ligeros y digestivos.',
      mensajeChef: 'Un pequeño enjuague cambia por completo el sabor de una legumbre.',
      nivelImportancia: 'clave',
      señalCorrecta: 'Los garbanzos no hacen espuma y el agua sale clara.',
    },
    {
      numero: 2,
      titulo: 'Macerar la cebolla',
      descripcion: 'Pica la cebolla en cuadritos muy finos. Ponla en un tazón con el jugo de un limón y una pizca de sal por 5 minutos.',
      tiempo: '5 minutos',
      consejo: 'Esto quita el sabor fuerte de la cebolla cruda y la hace más dulce.',
      chefPregunta: '¿Por qué la cebolla nos hace llorar al picarla y el limón ayuda con el sabor?',
      respuestaEsperada: 'Al picarla libera compuestos de azufre que irritan los ojos; el limón "cocina" la cebolla reduciendo su acidez y amargor.',
    },
    {
      numero: 3,
      titulo: 'Corta los vegetales',
      descripcion: 'Pica el jitomate y el pepino en cubos del mismo tamaño. Escurre bien el atún.',
      tiempo: '3 minutos',
    },
    {
      numero: 4,
      titulo: 'Mezcla y adereza',
      descripcion: 'En un bowl grande, mezcla los garbanzos, el atún, el jitomate, el pepino y la cebolla macerada. Agrega el aceite, el jugo del limón restante y sal.',
      tiempo: '2 minutos',
      mensajeChef: 'Las ensaladas sin lechuga son perfectas para llevar a la oficina o al picnic.',
      señalCorrecta: 'Colores brillantes y textura jugosa.',
    }
  ],

  tip: 'Puedes agregar perejil picado o queso fresco en cubos para hacerla aún más completa.',
  ahorro: 'Los garbanzos y el atún en lata son de las proteínas más económicas del súper.',
  errorComun: 'No lavar los garbanzos y que la ensalada sepa solo a lata.',
  popularidad: 78,
  tags: ['ensalada', 'mediterranea', 'proteina', 'saludable', 'rapido'],
  tipoComida: 'barata',
  historiaChef: 'Los garbanzos se cultivan desde hace más de 7,000 años en Medio Oriente. Esta ensalada es un ejemplo de la dieta mediterránea, famosa por sus beneficios a la salud.',
  trucoChef: 'Si te sobra, al día siguiente el limón habrá penetrado más y sabrá aún mejor.',
  sustituciones: [
    { falta: 'garbanzos', reemplazo: 'frijoles blancos o lentejas cocidas' },
    { falta: 'pepino', reemplazo: 'calabacita cruda en cubitos' }
  ],
  chefInicio: 'Hoy vamos a usar latas a nuestro favor. Con técnica, podemos hacer un platillo fresco en minutos.',
  chefFinal: 'Has creado una ensalada llena de proteína y sabor. El enjuague de los garbanzos fue clave.',
  señalesExito: {
    vista: 'Garbanzos dorados, atún, jitomate rojo y pepino verde.',
    olor: 'Aroma cítrico con toques de mar.',
    textura: 'Firme de los garbanzos y jugosa del jitomate.',
  },
  rescates: [
    { problema: 'Sabe muy a limón', solucion: 'Agrega más atún o un poco de aceite para diluir la acidez.' }
  ]
};