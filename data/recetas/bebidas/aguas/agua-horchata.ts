import type { Receta } from '@/types/receta';

export const AGUA_HORCHATA: Receta = {

  id: 'agua-horchata',

  titulo: 'Agua de horchata tradicional',

 imagen: require('../../../../assets/images/recetas/bebidas/aguas/agua-horchata.webp'),

  descripcion: 'La reina de las aguas frescas. Aprende por qué el remojo del arroz es crucial y cómo lograr esa textura cremosa característica sin necesidad de lácteos.',

  cocina: 'mexicana',

  tecnicaPrincipal: 'remojo, extracción de almidones y licuado',

  categoria: 'bebida',

  rolCulinario: 'bebida',

  porciones: 4,

  tiempoMinutos: 15,

  dificultad: 'facil',

  nivelChef: 2,

  aprendizajes: [
    'extracción de almidones naturales',
    'balance de dulzor y especias',
    'técnicas de colado fino',
  ],

  ingredientes: [
    { id: 'arroz_blanco', cantidad: 0.1, unidad: 'kg' },
    { id: 'leche', cantidad: 0.5, unidad: 'litro' },
    { id: 'canela', cantidad: 0.01, unidad: 'kg' },
    { id: 'azucar', cantidad: 0.08, unidad: 'kg' },
    { id: 'agua', cantidad: 0.5, unidad: 'litro' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Activa el arroz',
      descripcion: 'Lava el arroz y remójalo junto con la canela en agua caliente por al menos 2 horas (idealmente toda la noche).',
      tiempo: '2 horas (inactivo)',
      consejo: 'El agua caliente ablanda el grano más rápido.',
      porQue: 'El remojo permite que el almidón se libere más fácilmente durante el licuado.',
      nivelImportancia: 'critico',
      señalCorrecta: 'El arroz se rompe fácilmente al presionarlo con los dedos.',
    },
    {
      numero: 2,
      titulo: 'Licúa a máxima potencia',
      descripcion: 'Escurre el arroz y la canela. Licúa en tandas con la leche y el agua hasta que no queden grumos.',
      tiempo: '5 minutos',
      consejo: 'Licúa más tiempo del que crees necesario. La textura depende de ello.',
      mensajeChef: 'La constancia en la licuadora se traduce en cremosidad.',
    },
    {
      numero: 3,
      titulo: 'Cuela con paciencia',
      descripcion: 'Pasa la mezcla por un colador muy fino o una manta de cielo, presionando con una cuchara.',
      tiempo: '5 minutos',
      porQue: 'El bagazo (la pulpa del arroz) no debe llegar al vaso. Buscamos un líquido terso.',
      nivelImportancia: 'clave',
      chefPregunta: '¿Qué pasa si no cuelas la horchata?',
      respuestaEsperada: 'Quedará con una textura arenosa y desagradable al paladar.',
      señalCorrecta: 'La bebida se ve completamente lisa y sedosa.',
    },
    {
      numero: 4,
      titulo: 'Endulza y enfría',
      descripcion: 'Agrega el azúcar y mezcla bien. Sirve muy fría con hielos.',
      tiempo: '2 minutos',
      consejo: 'Prueba antes de agregar todo el azúcar.',
      errorEvitar: 'Servirla tibia, la horchata debe estar helada.',
    }
  ],

  tip: 'Si quieres una versión vegana, sustituye la leche por leche de almendra o agua extra.',

  ahorro: 'Es mucho más barata que cualquier bebida embotellada y rinde para toda la familia.',

  errorComun: 'No remojar el arroz y obtener una bebida aguada y sin cuerpo.',

  popularidad: 95,

  tags: ['bebida', 'tradicional', 'mexicano', 'economico'],

  tipoComida: 'barata',

  historiaChef: 'La horchata tiene raíces en la región de Valencia, España, pero en México se reinventó usando arroz y canela, convirtiéndose en la compañera perfecta de los tacos.',

  trucoChef: 'Deja la canela en rama durante el remojo para extraer su aceite esencial sin amargor.',

  sustituciones: [
    { falta: 'leche', reemplazo: 'leche de coco o más agua' },
    { falta: 'canela', reemplazo: 'vainilla' }
  ],

  chefInicio: 'Hoy vamos a hacer la bebida más noble de México. Es tiempo de paciencia y licuado.',

  chefFinal: 'Lograste extraer todo el sabor del arroz. El colado perfecto es la prueba de un buen cocinero.',

  señalesExito: {
    vista: 'Bebida blanca, opaca y sedosa.',
    olor: 'Aroma dulce a canela y arroz.',
    textura: 'Cremosa y ligeramente espesa.',
  },

  rescates: [
    { problema: 'Sabe a arroz crudo', solucion: 'Agrega un poco más de leche y azúcar, o licúa de nuevo con un pedazo de plátano para suavizar.' }
  ]
};