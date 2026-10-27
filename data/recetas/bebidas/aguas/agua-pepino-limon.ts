import type { Receta } from '@/types/receta';

export const AGUA_PEPINO_LIMON: Receta = {
  id: 'agua-pepino-limon',
  titulo: 'Agua fresca de pepino y limón',
  imagen: require('../../../../assets/images/recetas/bebidas/aguas/agua-pepino-limon.webp'),
  descripcion: 'La bebida más ligera y detox que existe. Aprende a infusionar el pepino sin que la bebida sepa a ensalada, logrando un sabor cítrico y fresco.',
  cocina: 'mexicana',
  tecnicaPrincipal: 'infusión en frío y machacado de hierbas',
  categoria: 'bebida',
  rolCulinario: 'bebida',
  porciones: 4,
  tiempoMinutos: 10,
  dificultad: 'facil',
  nivelChef: 1,
  aprendizajes: ['infusión en frío', 'extracción de aceites esenciales', 'hidratación'],
  ingredientes: [
    { id: 'pepino', cantidad: 0.400, unidad: 'kg' },
    { id: 'limon', cantidad: 3, unidad: 'pieza' },
    { id: 'hierbabuena', cantidad: 0.020, unidad: 'kg' }, // O menta
    { id: 'agua', cantidad: 1.500, unidad: 'litro' },
    { id: 'azucar', cantidad: 0.020, unidad: 'kg' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Corta el pepino',
      descripcion: 'Lava el pepino y córtalo en rodajas muy finas (sin pelar, si es orgánico). Agrégalo a una jarra con agua fría.',
      tiempo: '3 minutos',
      consejo: 'Las rodajas finas sueltan su sabor más rápido.',
      porQue: 'No necesitamos licuar; la infusión en frío conserva la frescura del pepino.',
    },
    {
      numero: 2,
      titulo: 'Machaca la menta',
      descripcion: 'Agrega las hojas de hierbabuena y el jugo de limón. Con una cuchara de palo, machaca suavemente las hojas contra la jarra para liberar su aroma.',
      tiempo: '2 minutos',
      mensajeChef: 'Machacar las hierbas es la magia para un agua que huela increíble.',
      chefPregunta: '¿Por qué no debemos hervir el pepino?',
      respuestaEsperada: 'Porque pierde su textura, su frescura y su color verde.',
    },
    {
      numero: 3,
      titulo: 'Endulza y deja reposar',
      descripcion: 'Agrega el azúcar y revuelve bien. Deja reposar en el refri al menos 15 minutos para que los sabores se integren.',
      tiempo: '15 minutos (inactivo)',
      señalCorrecta: 'El agua huele a limón, pepino y menta, y el color es verde pálido.',
    }
  ],
  tip: 'Puedes agregar rodajas de limón dentro de la jarra para que se vea más bonita.',
  ahorro: 'El pepino es de las hortalizas más baratas del mercado.',
  errorComun: 'Usar demasiado pepino y sentir que te estás tomando una ensalada licuada.',
  popularidad: 80,
  tags: ['bebida', 'detox', 'saludable', 'pepino', 'refrescante'],
  tipoComida: 'barata',
  historiaChef: 'Las aguas infusionadas se volvieron tendencia mundial en los años 2010, pero en México ya teníamos siglos mezclando pepino con limón en las aguas frescas.',
  chefInicio: 'Hoy vamos a hacer la bebida más fresca y ligera. No usaremos licuadora, solo paciencia.',
  chefFinal: '¡Perfecto! Tienes una bebida elegante y llena de frescura.',
  señalesExito: { vista: 'Agua ligeramente verde con rodajas de pepino flotando.', olor: 'Aroma a limón y menta fresca.', textura: 'Líquida y refrescante.' },
  rescates: [{ problema: 'Sabe a ensalada', solucion: 'Agrega más limón y un poco más de azúcar para enmascarar el sabor verde del pepino.' }]
};