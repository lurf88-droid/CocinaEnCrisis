import type { Receta } from '@/types/receta';

export const AGUA_MANGO_MARACUYA: Receta = {
  id: 'agua-mango-maracuya',
  titulo: 'Agua fresca de mango y maracuyá',
  imagen: require('../../../../assets/images/recetas/bebidas/aguas/agua-mango-maracuya.webp'),
  descripcion: 'Un choque de sabores tropicales. El dulzor del mango y la acidez intensa de la maracuyá se equilibran en una bebida color naranja vibrante que es puro verano.',
  cocina: 'tropical',
  tecnicaPrincipal: 'licuado de pulpas y balance ácido-dulce',
  categoria: 'bebida',
  rolCulinario: 'bebida',
  porciones: 4,
  tiempoMinutos: 15,
  dificultad: 'facil',
  nivelChef: 2,
  aprendizajes: ['extracción de pulpa de maracuyá', 'balance de dulzor', 'mezcla de frutas tropicales'],
  ingredientes: [
    { id: 'mango', cantidad: 0.400, unidad: 'kg' },
    { id: 'maracuya', cantidad: 0.150, unidad: 'kg' },
    { id: 'azucar', cantidad: 0.050, unidad: 'kg' },
    { id: 'agua', cantidad: 1.500, unidad: 'litro' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Prepara el mango',
      descripcion: 'Pela el mango y licúalo con un poco de agua hasta obtener un jugo espeso.',
      tiempo: '3 minutos',
      consejo: 'Usa mango Ataulfo para un dulzor natural.',
    },
    {
      numero: 2,
      titulo: 'Extrae la maracuyá',
      descripcion: 'Corta la maracuyá y extrae su pulpa con una cuchara. Cuela la pulpa para quitar las semillas.',
      tiempo: '5 minutos',
      porQue: 'La maracuyá es muy ácida; el colado evita que las semillas amarguen la bebida.',
      nivelImportancia: 'clave',
    },
    {
      numero: 3,
      titulo: 'Mezcla y ajusta',
      descripcion: 'En una jarra, mezcla el jugo de mango, la pulpa de maracuyá, el azúcar y el agua restante. Sirve bien frío.',
      tiempo: '3 minutos',
      chefPregunta: '¿Qué fruta tiene más vitamina C, el mango o la maracuyá?',
      respuestaEsperada: 'La maracuyá tiene mucha más vitamina C que el mango.',
    }
  ],
  tip: 'Decora con una rodaja de mango y una hoja de menta.',
  ahorro: 'En temporada, el mango es una de las frutas más baratas.',
  errorComun: 'No colar la maracuyá y sentir las semillas duras.',
  popularidad: 90,
  tags: ['bebida', 'mango', 'maracuya', 'tropical', 'premium'],
  tipoComida: 'familia',
  historiaChef: 'La combinación de mango y maracuyá es muy popular en los jugos naturales de Brasil y México. Es una bebida que grita "vacaciones".',
  chefInicio: 'Hoy vamos a hacer una bebida tropical de restaurante de playa. El mango y la maracuyá son la pareja perfecta.',
  chefFinal: '¡Excelente! Tienes una bebida vibrante y refrescante.',
  señalesExito: { vista: 'Color naranja intenso con un tono opaco.', olor: 'Aroma tropical a mango y maracuyá.', textura: 'Líquida con un toque de pulpa.' },
  rescates: [{ problema: 'Sabe muy ácida', solucion: 'Agrega más azúcar o un poco de plátano para suavizar.' }]
};