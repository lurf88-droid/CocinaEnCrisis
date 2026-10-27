import type { Receta } from '@/types/receta';

export const ENSALADA_ESPINACA_FRESA: Receta = {
  id: 'ensalada-espinaca-fresa',
  titulo: 'Ensalada de espinaca y fresa',
 imagen: require('../../../assets/images/recetas/ensaladas/ensalada-espinaca-fresa.webp'), 
  descripcion: 'Una combinación elegante que parece sacada de un restaurante de lujo. El dulzor de la fresa, la acidez del limón y la textura de la nuez crean un balance perfecto.',
  
  cocina: 'internacional',
  tecnicaPrincipal: 'aderezo con miel y ensamblaje en frío',
  categoria: 'cena',
  rolCulinario: 'entrada',
  porciones: 2,
  tiempoMinutos: 10,
  dificultad: 'facil',
  nivelChef: 2,

  aprendizajes: [
    'balance de sabores dulce-ácido',
    'emulsión con miel',
    'cuidado de hojas verdes delicadas'
  ],

  ingredientes: [
    { id: 'espinaca', cantidad: 0.150, unidad: 'kg' },
    { id: 'fresa', cantidad: 0.150, unidad: 'kg' },
    { id: 'queso_fresco', cantidad: 0.080, unidad: 'kg' }, // O queso de cabra si tienes
    { id: 'nuez', cantidad: 0.040, unidad: 'kg' },
    { id: 'miel', cantidad: 0.020, unidad: 'kg' },
    { id: 'limon', cantidad: 1, unidad: 'pieza' },
    { id: 'aceite_vegetal', cantidad: 0.020, unidad: 'litro' },
    { id: 'sal', cantidad: 0.002, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Prepara las fresas',
      descripcion: 'Lava las fresas, retira el rabito y córtalas en láminas (rodajas) a lo largo.',
      tiempo: '3 minutos',
      consejo: 'No las cortes en cubos pequeños, las láminas se ven mucho más elegantes en el plato.',
      nivelImportancia: 'clave',
    },
    {
      numero: 2,
      titulo: 'El aderezo mágico',
      descripcion: 'En un vaso, mezcla el jugo de limón, la miel, el aceite y una pizca de sal. Bate enérgicamente hasta que se integren y se vea espeso.',
      tiempo: '2 minutos',
      porQue: 'La miel es un emulsionante natural que unifica los sabores dulces con los ácidos.',
      mensajeChef: 'La miel no solo endulza, también da cuerpo al aderezo.',
      chefPregunta: '¿Qué pasa si el aderezo queda demasiado dulce?',
      respuestaEsperada: 'Puedes agregar unas gotas más de limón o una pizca extra de sal para equilibrar el sabor.',
      nivelImportancia: 'critico',
    },
    {
      numero: 3,
      titulo: 'Tuesta la nuez',
      descripcion: 'Pica las nueces. Si tienes tiempo, tuéstalas en un sartén seco por 2 minutos para que suelten su aroma.',
      tiempo: '2 minutos',
      consejo: 'El aroma de la nuez tostada es el 50% del éxito de esta ensalada.',
    },
    {
      numero: 4,
      titulo: 'Ensambla',
      descripcion: 'Coloca la espinaca en un plato, distribuye las fresas encima, desmorona el queso y espolvorea las nueces. Baña con el aderezo justo antes de servir.',
      tiempo: '3 minutos',
      señalCorrecta: 'Hojas verdes brillantes, fresas rojas y queso blanco (como la bandera de Italia).',
    }
  ],

  tip: 'Usa las manos limpias para mezclar la espinaca con el aderezo, así no la maltratas con pinzas.',
  ahorro: 'Aprovecha las fresas que estén un poco más maduras, son más dulces.',
  errorComun: 'Aderezar horas antes; la espinaca es muy delicada y se hace papilla.',
  popularidad: 85,
  tags: ['ensalada', 'gourmet', 'saludable', 'vegetariano'],
  tipoComida: 'familia',
  historiaChef: 'Las ensaladas con fruta se popularizaron en Europa en el siglo XIX como un lujo de la nobleza. Hoy en día, la combinación de espinaca y fresa es un clásico en las bodas y eventos.',
  trucoChef: 'Agrega un poco de queso parmesano rallado encima si quieres intensificar el sabor salado.',
  sustituciones: [
    { falta: 'queso_fresco', reemplazo: 'queso de cabra o feta' },
    { falta: 'nuez', reemplazo: 'almendras o pistaches tostados' }
  ],
  chefInicio: 'Hoy vamos a preparar una ensalada que parece un postre. El balance es todo.',
  chefFinal: 'Has creado una ensalada de nivel restaurante. El contraste de colores y texturas es perfecto.',
  señalesExito: {
    vista: 'Verde brillante de la espinaca, rojo de la fresa y blanco del queso.',
    olor: 'Aroma a miel, limón y nuez tostada.',
    textura: 'Suave de las hojas, crujiente de la nuez y jugosa de la fresa.',
  },
  rescates: [
    { problema: 'Las fresas no están dulces', solucion: 'Espolvorea una pizca de azúcar o endulza un poco más el aderezo.' }
  ]
};