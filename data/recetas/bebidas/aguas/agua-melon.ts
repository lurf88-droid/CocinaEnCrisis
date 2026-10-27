import type { Receta } from '@/types/receta';

export const AGUA_MELON: Receta = {
  id: 'agua-melon',
  titulo: 'Agua fresca de melón',
  imagen: require('../../../../assets/images/recetas/bebidas/aguas/agua-melon.webp'),
  descripcion: 'Suave, dulce y muy elegante. Aprende a elegir un melón en su punto exacto y a lograr una bebida que se sienta como seda en el paladar.',
  cocina: 'mexicana',
  tecnicaPrincipal: 'licuado y ajuste de dulzor',
  categoria: 'bebida',
  rolCulinario: 'bebida',
  porciones: 4,
  tiempoMinutos: 10,
  dificultad: 'facil',
  nivelChef: 1,
  aprendizajes: ['selección de fruta madura', 'textura de bebida', 'ahorro de azúcar'],
  ingredientes: [
    { id: 'melon', cantidad: 0.800, unidad: 'kg' },
    { id: 'azucar', cantidad: 0.020, unidad: 'kg' },
    { id: 'limon', cantidad: 1, unidad: 'pieza' },
    { id: 'agua', cantidad: 0.500, unidad: 'litro' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Pela y corta',
      descripcion: 'Pela el melón y retira las semillas. Corta en cubos.',
      tiempo: '3 minutos',
      consejo: 'Un melón maduro olerá dulce en la base y cederá un poco al presionarlo con el pulgar.',
    },
    {
      numero: 2,
      titulo: 'Licua con agua',
      descripcion: 'Licúa el melón con el agua y el azúcar. Si queda muy espeso, agrega un poco más de agua.',
      tiempo: '2 minutos',
      porQue: 'El melón tiene mucha pulpa, así que puedes ajustar la densidad a tu gusto.',
    },
    {
      numero: 3,
      titulo: 'El toque final',
      descripcion: 'Agrega el jugo de limón y sirve. El limón corta el exceso de dulzor y hace que la bebida sea más refrescante.',
      tiempo: '1 minuto',
      chefPregunta: '¿Qué pasa si el melón no está maduro?',
      respuestaEsperada: 'El agua no tendrá dulzor y necesitarás agregar más azúcar, además de que la textura será más dura.',
    }
  ],
  tip: 'Unas hojas de menta al momento de servir le dan un perfume increíble.',
  ahorro: 'En temporada, el melón es de las frutas más económicas y rendidoras.',
  errorComun: 'No colarla si el melón estaba muy maduro; la pulpa se sentirá granulosa.',
  popularidad: 85,
  tags: ['bebida', 'melon', 'verano', 'dulce'],
  tipoComida: 'barata',
  historiaChef: 'El melón proviene de Asia y África y llegó a América con los españoles. En México se adaptó perfectamente al clima y se volvió un clásico de las aguas frescas.',
  chefInicio: 'Hoy vamos a preparar la reina de la suavidad. El melón es dulce por naturaleza.',
  chefFinal: '¡Listo! Una bebida que se desliza sola.',
  señalesExito: { vista: 'Color naranja pálido.', olor: 'Aroma dulce de melón.', textura: 'Sedosa y ligeramente espesa.' },
  rescates: [{ problema: 'Sabe muy simple', solucion: 'Exprime un limón más o agrega un poquito de sal para resaltar el dulzor.' }]
};