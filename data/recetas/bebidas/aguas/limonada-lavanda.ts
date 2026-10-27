import type { Receta } from '@/types/receta';

export const LIMONADA_LAVANDA: Receta = {
  id: 'limonada-lavanda',
  titulo: 'Limonada gourmet de lavanda',
 imagen: require('../../../../assets/images/recetas/bebidas/aguas/limonada-lavanda.webp'),
  descripcion: 'Una bebida con un aroma floral único, típica de los cafés de especialidad. Aprende a infusionar la lavanda sin que amargue y a hacer un jarabe simple (sirope) con ella.',
  cocina: 'internacional',
  tecnicaPrincipal: 'jarabe simple con flores',
  categoria: 'bebida',
  rolCulinario: 'bebida',
  porciones: 4,
  tiempoMinutos: 20,
  dificultad: 'media',
  nivelChef: 3,
  aprendizajes: ['elaboración de jarabe simple', 'infusión de flores comestibles', 'balance floral-ácido'],
  ingredientes: [
    { id: 'lavanda', cantidad: 0.015, unidad: 'kg' }, // 15g de flores secas
    { id: 'limon', cantidad: 5, unidad: 'pieza' },
    { id: 'agua', cantidad: 1.500, unidad: 'litro' },
    { id: 'azucar', cantidad: 0.150, unidad: 'kg' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Haz el jarabe de lavanda',
      descripcion: 'En una olla, pon 0.5 litros de agua con el azúcar. Calienta sin llegar a hervir hasta que el azúcar se disuelva. Apaga el fuego, agrega la lavanda y tapa por 10 minutos.',
      tiempo: '15 minutos',
      consejo: 'No hiervas la lavanda, se pone amarga y sabe a jabón.',
      porQue: 'Al infusionar en caliente pero sin hervor, extraes el aroma floral sin los compuestos amargos.',
      nivelImportancia: 'critico',
      señalCorrecta: 'El jarabe huele intensamente a lavanda y es transparente.',
    },
    {
      numero: 2,
      titulo: 'Cuela y enfría',
      descripcion: 'Cuela el jarabe y déjalo enfriar completamente.',
      tiempo: '5 minutos',
      mensajeChef: 'El jarabe de lavanda es la base de muchas bebidas gourmet.',
    },
    {
      numero: 3,
      titulo: 'Arma la limonada',
      descripcion: 'En una jarra, mezcla el jugo de los limones, el jarabe de lavanda y el litro de agua restante. Ajusta el dulzor.',
      tiempo: '3 minutos',
      chefPregunta: '¿Por qué la lavanda no es una especia común en la cocina?',
      respuestaEsperada: 'Porque su sabor es muy potente y puede saber a jabón si se usa en exceso.',
    }
  ],
  tip: 'Decora con unas flores de lavanda frescas o secas al servir para un look de restaurante.',
  ahorro: 'La lavanda seca rinde muchísimo y es más barata de lo que parece.',
  errorComun: 'Usar demasiada lavanda; la bebida sabrá a perfume.',
  popularidad: 82,
  tags: ['bebida', 'gourmet', 'lavanda', 'floral', 'premium'],
  tipoComida: 'familia',
  historiaChef: 'La lavanda se usa en la cocina provenzal desde hace siglos. En la coctelería moderna, se volvió tendencia por su aroma relajante y su color morado elegante.',
  chefInicio: 'Hoy vamos a preparar una limonada de otro planeta. La lavanda es el toque mágico.',
  chefFinal: '¡Espectacular! Tienes una limonada que parece de un café de especialidad.',
  señalesExito: { vista: 'Color amarillo pálido con un toque violeta.', olor: 'Aroma floral intenso a lavanda.', textura: 'Líquida y refrescante.' },
  rescates: [{ problema: 'Sabe a jabón', solucion: 'Diluye con más agua y jugo de limón; la lavanda era demasiada.' }]
};