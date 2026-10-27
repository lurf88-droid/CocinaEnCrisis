import type { Receta } from '@/types/receta';

export const AGUA_MANGO_CHILE: Receta = {
  id: 'agua-mango-chile',
  titulo: 'Agua fresca de mango con chile',
  imagen: require('../../../../assets/images/recetas/bebidas/aguas/agua-mango-chile.webp'),
  descripcion: 'Un choque de sabores mexicanos: dulce, ácido y picante. Aprende a usar el chile en polvo no solo como decoración, sino para realzar el dulzor del mango.',
  cocina: 'mexicana',
  tecnicaPrincipal: 'licuado de pulpa y contraste de sabores',
  categoria: 'bebida',
  rolCulinario: 'bebida',
  porciones: 4,
  tiempoMinutos: 10,
  dificultad: 'facil',
  nivelChef: 2,
  aprendizajes: ['selección de mango maduro', 'contraste picante-dulce', 'uso de chile en polvo'],
  ingredientes: [
    { id: 'mango', cantidad: 0.600, unidad: 'kg' },
    { id: 'limon', cantidad: 1, unidad: 'pieza' },
    { id: 'azucar', cantidad: 0.020, unidad: 'kg' }, // Poco, el mango es dulce
    { id: 'chile_en_polvo', cantidad: 0.005, unidad: 'kg' }, // Para decorar
    { id: 'agua', cantidad: 1.000, unidad: 'litro' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Prepara el mango',
      descripcion: 'Pela el mango y corta la pulpa. Licúa con 1 litro de agua y el azúcar.',
      tiempo: '3 minutos',
      consejo: 'Usa mangos tipo Ataulfo o Manila; son los más dulces y menos fibrosos.',
      nivelImportancia: 'clave',
    },
    {
      numero: 2,
      titulo: 'Ajusta la acidez',
      descripcion: 'Agrega el jugo de limón. Prueba y ajusta el dulzor si es necesario.',
      tiempo: '1 minuto',
      porQue: 'El limón corta la pesadez del mango y hace que la bebida sea más refrescante.',
    },
    {
      numero: 3,
      titulo: 'El toque picante',
      descripcion: 'Sirve el agua en vasos. Moja el borde del vaso con limón y escarcha con chile en polvo. Espolvorea un poco de chile sobre el agua.',
      tiempo: '2 minutos',
      mensajeChef: 'El picante no debe dominar, solo despertar el paladar.',
      señalCorrecta: 'Bebida color naranja brillante con un toque de picante en el borde.',
    }
  ],
  tip: 'Si no tienes chile en polvo, puedes usar una rodaja de chile serrano dentro de la jarra.',
  ahorro: 'En temporada de mango, es una de las bebidas más económicas y rendidoras.',
  errorComun: 'Agregar demasiado chile y que no se pueda beber.',
  popularidad: 92,
  tags: ['bebida', 'mango', 'picante', 'exotica', 'mexicana'],
  tipoComida: 'barata',
  historiaChef: 'La combinación de mango con chile es una tradición mexicana que se remonta a los mercados prehispánicos, donde se vendían frutas con sal y chile.',
  chefInicio: 'Hoy vamos a jugar con el picante y el dulce. Una combinación que nos define como mexicanos.',
  chefFinal: '¡Listo! Una bebida intensa y sorprendente.',
  señalesExito: { vista: 'Color naranja intenso con borde escarchado de chile.', olor: 'Aroma dulce a mango.', textura: 'Ligeramente espesa por la pulpa.' },
  rescates: [{ problema: 'Quedó muy picante', solucion: 'Agrega más agua y azúcar para diluir el picante.' }]
};