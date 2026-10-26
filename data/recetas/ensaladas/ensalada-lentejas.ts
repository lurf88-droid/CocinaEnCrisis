import type { Receta } from '@/types/receta';

export const ENSALADA_LENTEJAS: Receta = {
  id: 'ensalada-lentejas',
  titulo: 'Ensalada tibia de lentejas',
  imagen: require('../../../assets/images/recetas/ensaladas/ensalada-lentejas'), 
  descripcion: 'Una ensalada que alimenta de verdad. Las lentejas absorben el aderezo como esponjas, creando un plato lleno de proteína y sabor que se puede comer tibio o frío.',
  
  cocina: 'mediterranea',
  tecnicaPrincipal: 'cocción de legumbres y vinagreta',
  categoria: 'comida',
  rolCulinario: 'plato_principal',
  porciones: 3,
  tiempoMinutos: 30,
  dificultad: 'facil',
  nivelChef: 2,

  aprendizajes: [
    'punto de cocción de las lentejas',
    'maceración en caliente',
    'equilibrio de aderezos sin aceite pesado'
  ],

  ingredientes: [
    { id: 'lentejas', cantidad: 0.200, unidad: 'kg' },
    { id: 'zanahoria', cantidad: 1, unidad: 'pieza' },
    { id: 'cebolla_blanca', cantidad: 0.050, unidad: 'kg' },
    { id: 'jitomate', cantidad: 1, unidad: 'pieza' },
    { id: 'limon', cantidad: 2, unidad: 'pieza' },
    { id: 'aceite_vegetal', cantidad: 0.030, unidad: 'litro' },
    { id: 'sal', cantidad: 0.005, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Lava y cuece las lentejas',
      descripcion: 'Lava las lentejas. Ponlas a hervir en abundante agua (sin sal) durante 20 minutos, hasta que estén suaves pero no deshechas. Escurre.',
      tiempo: '20 minutos',
      consejo: 'No le pongas sal al agua de cocción porque endurece la cáscara de la lenteja.',
      porQue: 'La sal hace que la piel de la lenteja se contraiga y no se cocine por dentro.',
      nivelImportancia: 'critico',
    },
    {
      numero: 2,
      titulo: 'Prepara los vegetales',
      descripcion: 'Mientras se cuecen, pica la zanahoria en cubitos muy pequeños, la cebolla finamente y el jitomate en cubos.',
      tiempo: '4 minutos',
    },
    {
      numero: 3,
      titulo: 'Haz la vinagreta',
      descripcion: 'En un tazón, mezcla el jugo de limón, el aceite, la sal y la cebolla picada. Deja reposar para que la cebolla suelte su sabor.',
      tiempo: '2 minutos',
    },
    {
      numero: 4,
      titulo: 'Mezcla en caliente',
      descripcion: 'Escurre las lentejas y mézclalas con la zanahoria (que se cocinará con el calor de la lenteja) y el jitomate. Baña con la vinagreta.',
      tiempo: '3 minutos',
      mensajeChef: 'Al mezclar en caliente, las lentejas absorben todo el sabor del limón y el aceite.',
      chefPregunta: '¿Por qué las lentejas saben mejor si las aderezas cuando están calientes?',
      respuestaEsperada: 'Porque los poros están abiertos y absorben el aderezo de manera uniforme.',
      señalCorrecta: 'Lentejas brillantes y con un aroma cítrico potente.',
    }
  ],

  tip: 'Puedes agregar espinaca fresca picada al final; el calor de las lentejas la cocinará ligeramente.',
  ahorro: 'Las lentejas son una de las proteínas más baratas y rendidoras del mercado.',
  errorComun: 'Sobre-cocer las lentejas y que se haga un puré.',
  popularidad: 75,
  tags: ['ensalada', 'lentejas', 'proteina', 'vegetariano', 'saludable'],
  tipoComida: 'barata',
  historiaChef: 'Las lentejas son uno de los cultivos más antiguos de la humanidad, mencionadas incluso en la Biblia. Esta ensalada tibia es un clásico de la cocina mediterránea.',
  trucoChef: 'Un diente de ajo picado en la vinagreta le da un golpe de sabor increíble.',
  sustituciones: [
    { falta: 'lentejas', reemplazo: 'garbanzos o frijoles cocidos' }
  ],
  chefInicio: 'Hoy preparamos un plato que te llenará de energía. El secreto está en el punto de cocción de la lenteja.',
  chefFinal: 'Has logrado una ensalada tibia perfecta. Las lentejas están firmes y llenas de sabor.',
  señalesExito: {
    vista: 'Lentejas oscuras con cubitos naranjas de zanahoria y rojos de jitomate.',
    olor: 'Aroma a limón, aceite de oliva y tierra.',
    textura: 'Firme y ligeramente al dente.',
  },
  rescates: [
    { problema: 'Las lentejas quedaron duras', solucion: 'Agrega un poco de agua caliente y hierve por 5 minutos más; no les pongas sal aún.' }
  ]
};