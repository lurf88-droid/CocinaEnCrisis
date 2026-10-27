import type { Receta } from '@/types/receta';

export const AGUA_TUNA_ROJA: Receta = {
  id: 'agua-tuna-roja',
  titulo: 'Agua fresca de tuna roja',
  imagen: require('../../../../assets/images/recetas/bebidas/aguas/agua-tuna-roja.webp'),
  descripcion: 'La fruta del nopal en su máxima expresión. Una bebida exótica de un color rosa vibrante y un sabor dulce y fresco, con una textura que sorprende.',
  cocina: 'mexicana',
  tecnicaPrincipal: 'licuado y colado de fruta con semillas',
  categoria: 'bebida',
  rolCulinario: 'bebida',
  porciones: 4,
  tiempoMinutos: 15,
  dificultad: 'media',
  nivelChef: 2,
  aprendizajes: ['manejo de frutas con semillas pequeñas', 'extracción de color natural', 'uso de frutas endémicas'],
  ingredientes: [
    { id: 'tuna', cantidad: 0.500, unidad: 'kg' }, // Tuna roja de nopal
    { id: 'limon', cantidad: 1, unidad: 'pieza' },
    { id: 'azucar', cantidad: 0.060, unidad: 'kg' },
    { id: 'agua', cantidad: 1.500, unidad: 'litro' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Pela las tunas (Con cuidado)',
      descripcion: 'Usa guantes de látex o un trapo para pelar las tunas, evitando las espinitas finas (aguates). Retira la cáscara y corta en trozos.',
      tiempo: '5 minutos',
      consejo: 'Nunca peles las tunas con las manos desnudas; las micro-espinas se clavan y son difíciles de sacar.',
      mensajeChef: 'La tuna es una fruta que pide respeto, pero regala un color espectacular.',
      nivelImportancia: 'critico',
    },
    {
      numero: 2,
      titulo: 'Licúa y cuela',
      descripcion: 'Licúa la tuna con 1 litro de agua por 20 segundos. Cuela con un colador muy fino o una manta de cielo para atrapar las semillas.',
      tiempo: '4 minutos',
      porQue: 'Las semillas de la tuna son muy duras; colarlas bien es obligatorio para una textura agradable.',
      nivelImportancia: 'clave',
    },
    {
      numero: 3,
      titulo: 'Ajusta y sirve',
      descripcion: 'Agrega el azúcar y el jugo de limón al agua colada. Revuelve bien y sirve con hielo.',
      tiempo: '2 minutos',
      chefPregunta: '¿De qué planta proviene la tuna?',
      respuestaEsperada: 'Del nopal. La tuna es el fruto del cactus Opuntia.',
    }
  ],
  tip: 'La tuna blanca también funciona, pero la roja le da un color rosa espectacular a la bebida.',
  ahorro: 'En temporada (primavera-verano), la tuna es de las frutas más económicas del mercado.',
  errorComun: 'No colarla bien y sentir la arenilla de las semillas.',
  popularidad: 75,
  tags: ['bebida', 'tuna', 'exotica', 'mexicana', 'endemica'],
  tipoComida: 'barata',
  historiaChef: 'La tuna es un fruto prehispánico que ha sido consumido desde la época de los aztecas. Su color rojo intenso es uno de los más bellos de la naturaleza.',
  chefInicio: 'Hoy vamos a preparar una bebida que parece hecha de rubíes. La tuna roja es única.',
  chefFinal: '¡Perfecto! Tienes una bebida con un color natural impresionante.',
  señalesExito: { vista: 'Color rosa/fucsia intenso y opaco.', olor: 'Aroma frutal y fresco.', textura: 'Líquida y refrescante.' },
  rescates: [{ problema: 'Quedó muy pálida', solucion: 'Agrega otra tuna (pelada y licuada) para intensificar el color.' }]
};