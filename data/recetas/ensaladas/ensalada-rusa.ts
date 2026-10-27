import type { Receta } from '@/types/receta';

export const ENSALADA_RUSA: Receta = {
  id: 'ensalada-rusa',
  titulo: 'Ensalada Rusa tradicional',
  imagen: require('../../../assets/images/recetas/ensaladas/ensalada-rusa.webp'), 
  descripcion: 'Un clásico que no falla. Aprende el punto exacto de cocción de las verduras y cómo evitar que la mayonesa se corte por el calor.',
  
  cocina: 'internacional',
  tecnicaPrincipal: 'cocción de raíces y ensamblaje cremoso',
  categoria: 'cena',
  rolCulinario: 'acompanamiento',
  porciones: 4,
  tiempoMinutos: 30,
  dificultad: 'facil',
  nivelChef: 1,

  aprendizajes: [
    'cocción al dente de tubérculos',
    'cortes en cubos perfectos (brunoise grande)',
    'equilibrio de humedad en aderezos cremosos'
  ],

  ingredientes: [
    { id: 'papa', cantidad: 0.300, unidad: 'kg' },
    { id: 'zanahoria', cantidad: 0.150, unidad: 'kg' },
    { id: 'elote', cantidad: 0.100, unidad: 'kg' }, // O chícharos si tienes
    { id: 'mayonesa', cantidad: 0.100, unidad: 'kg' },
    { id: 'crema', cantidad: 0.050, unidad: 'litro' },
    { id: 'sal', cantidad: 0.005, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Cuece las verduras',
      descripcion: 'Pela la papa y la zanahoria. Cuécelas en agua con sal hasta que estén suaves, pero firmes (al dente). Añade el elote al final.',
      tiempo: '15 minutos',
      consejo: 'Clava un cuchillo; si entra sin resistencia pero no se deshace, están perfectas.',
      porQue: 'Si las sobre-coces, al mezclar se harán puré y la ensalada perderá textura.',
      nivelImportancia: 'critico',
      señalCorrecta: 'Los cubos mantienen su forma.',
    },
    {
      numero: 2,
      titulo: 'Enfría y pica',
      descripcion: 'Escurre las verduras y pásalas por agua fría para cortar la cocción. Déjalas enfriar completamente y córtalas en cubos pequeños.',
      tiempo: '5 minutos',
      consejo: 'Si las mezclas con la mayonesa calientes, la mayonesa se separará y soltará aceite.',
      chefPregunta: '¿Por qué la mayonesa se "corta" o se hace aguada cuando se mezcla con cosas calientes?',
      respuestaEsperada: 'Porque el calor rompe la emulsión de la mayonesa (el huevo y el aceite se separan).',
      nivelImportancia: 'clave',
    },
    {
      numero: 3,
      titulo: 'Mezcla el aderezo',
      descripcion: 'En un tazón grande, mezcla la mayonesa con la crema. Esto suavizará el sabor fuerte de la mayonesa.',
      tiempo: '1 minuto',
    },
    {
      numero: 4,
      titulo: 'Integra todo',
      descripcion: 'Agrega las verduras frías y mezcla suavemente hasta cubrir todo. Ajusta la sal.',
      tiempo: '3 minutos',
      señalCorrecta: 'Una ensalada cremosa, brillante y de colores vivos (blanco, naranja y amarillo).',
    }
  ],

  tip: 'Puedes agregar un huevo cocido picado para darle más proteína y cremosidad.',
  ahorro: 'Es una receta que rinde muchísimo y usa verduras muy económicas.',
  errorComun: 'Hacerla con verduras calientes o no escurrir bien la papa.',
  popularidad: 82,
  tags: ['ensalada', 'tradicional', 'economica', 'acompanamiento'],
  tipoComida: 'barata',
  historiaChef: 'A pesar de su nombre, la ensaladilla rusa fue creada en Moscú a finales del siglo XIX por el chef Lucien Olivier. En México, se volvió un clásico navideño y de cumpleaños.',
  trucoChef: 'Una cucharadita de mostaza en la mayonesa le da un sabor increíble y un color bonito.',
  sustituciones: [
    { falta: 'crema', reemplazo: 'yogurt griego natural' },
    { falta: 'elote', reemplazo: 'chícharos (arvejas) o granos de soya' }
  ],
  chefInicio: 'Hoy vamos a preparar un clásico que a todos les gusta. El secreto está en el enfriado.',
  chefFinal: 'Has logrado una ensalada rusa perfecta. La textura y el punto de las verduras son impecables.',
  señalesExito: {
    vista: 'Colores pastel por la mayonesa, con trozos visibles de papa y zanahoria.',
    olor: 'Aroma suave y cremoso.',
    textura: 'Cremosa y suave.',
  },
  rescates: [
    { problema: 'La ensalada quedó muy aguada', solucion: 'Si la papa soltó mucha agua, agrega un poco más de mayonesa para recuperar la textura.' }
  ]
};