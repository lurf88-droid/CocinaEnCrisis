import type { Receta } from '@/types/receta';

export const LIMONADA_COCO: Receta = {
  id: 'limonada-coco',
  titulo: 'Limonada cremosa de coco',
  imagen: require('../../../../assets/images/recetas/bebidas/aguas/limonada-coco.webp'),
  descripcion: 'La bebida más elegante del verano. El contraste entre la acidez del limón y la cremosidad del coco crea una experiencia tropical que parece sacada de una playa de lujo.',
  cocina: 'tropical',
  tecnicaPrincipal: 'emulsión de leche de coco y cítricos',
  categoria: 'bebida',
  rolCulinario: 'bebida',
  porciones: 4,
  tiempoMinutos: 10,
  dificultad: 'media',
  nivelChef: 2,
  aprendizajes: ['emulsión en frío', 'balance de cremosidad y acidez', 'bebidas tropicales premium'],
  ingredientes: [
    { id: 'leche_coco', cantidad: 0.400, unidad: 'litro' },
    { id: 'limon', cantidad: 4, unidad: 'pieza' },
    { id: 'agua', cantidad: 0.500, unidad: 'litro' },
    { id: 'azucar', cantidad: 0.080, unidad: 'kg' },
    { id: 'coco_rallado', cantidad: 0.020, unidad: 'kg' }, // Para decorar
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Prepara la base de limón',
      descripcion: 'Exprime los limones. En una jarra, mezcla el jugo de limón con el agua y el azúcar hasta disolver por completo.',
      tiempo: '3 minutos',
      consejo: 'Usa limones frescos, no jugo embotellado. La diferencia es abismal.',
      nivelImportancia: 'clave',
    },
    {
      numero: 2,
      titulo: 'La emulsión mágica',
      descripcion: 'Agrega la leche de coco muy fría poco a poco mientras revuelves constantemente con un batidor de globo o una cuchara.',
      tiempo: '3 minutos',
      porQue: 'Si agregas toda la leche de coco de golpe, se puede separar (cortar) por la acidez del limón. Al incorporarla poco a poco, se emulsiona y queda cremosa.',
      mensajeChef: 'La paciencia al mezclar es lo que separa una limonada normal de una premium.',
      nivelImportancia: 'critico',
      señalCorrecta: 'La bebida es homogénea, cremosa y sin grumos.',
    },
    {
      numero: 3,
      titulo: 'Sirve y decora',
      descripcion: 'Sirve con hielo y decora con un poco de coco rayado por encima.',
      tiempo: '2 minutos',
      chefPregunta: '¿Por qué la leche de coco se separa con el limón?',
      respuestaEsperada: 'Porque el ácido del limón "rompe" la emulsión de las grasas de la leche de coco y el agua.',
    }
  ],
  tip: 'Si tienes crema de coco (la espesa de lata), usa solo 2 cucharadas para darle un extra de cremosidad.',
  ahorro: 'La leche de coco de lata es más barata que la bebida de coco y rinde más.',
  errorComun: 'Agregar toda la leche de coco de golpe y que la bebida se corte.',
  popularidad: 92,
  tags: ['bebida', 'coco', 'limonada', 'premium', 'tropical'],
  tipoComida: 'familia',
  historiaChef: 'Las limonadas cremosas son una tendencia de coctelería sin alcohol que llegó a México desde las playas de Tulum y la Riviera Maya, donde el coco es el rey.',
  chefInicio: 'Hoy vamos a hacer una limonada de nivel restaurante. El secreto está en la paciencia.',
  chefFinal: '¡Perfecto! Tienes una bebida cremosa y elegante.',
  señalesExito: { vista: 'Color blanco cremoso con toques de coco rayado.', olor: 'Aroma tropical a limón y coco.', textura: 'Cremosa y suave.' },
  rescates: [{ problema: 'Se cortó la leche', solucion: 'No se puede deshacer, pero puedes licuar la mezcla con hielo para que quede como un frappé.' }]
};