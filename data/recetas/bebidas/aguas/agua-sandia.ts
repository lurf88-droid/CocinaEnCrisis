import type { Receta } from '@/types/receta';

export const AGUA_SANDIA: Receta = {
  id: 'agua-sandia',
  titulo: 'Agua fresca de sandía',
  imagen: require('../../../../assets/images/recetas/bebidas/aguas/agua-sandia.webp'),
  descripcion: 'La bebida más refrescante del verano. Aprende por qué la sandía no necesita mucha azúcar y cómo colarla para que quede como un néctar sedoso.',
  cocina: 'mexicana',
  tecnicaPrincipal: 'licuado y colado fino',
  categoria: 'bebida',
  rolCulinario: 'bebida',
  porciones: 4,
  tiempoMinutos: 10,
  dificultad: 'facil',
  nivelChef: 1,
  aprendizajes: ['licuado de frutas', 'balance dulzor natural', 'colado de néctar'],
  ingredientes: [
    { id: 'sandia', cantidad: 0.800, unidad: 'kg' },
    { id: 'azucar', cantidad: 0.030, unidad: 'kg' },
    { id: 'limon', cantidad: 1, unidad: 'pieza' },
    { id: 'agua', cantidad: 0.500, unidad: 'litro' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Corta la sandía',
      descripcion: 'Corta la sandía en cubos y retira las semillas. Pésala para asegurarte de tener los 800g.',
      tiempo: '3 minutos',
      porQue: 'La sandía tiene muchísima agua. No necesita demasiado líquido para hacerse bebida.',
    },
    {
      numero: 2,
      titulo: 'Licúa y cuela',
      descripcion: 'Licúa la sandía con el agua y el azúcar. Cuela con un colador fino para quitar los restos de pulpa dura.',
      tiempo: '3 minutos',
      consejo: 'El jugo de limón realza el sabor natural de la sandía.',
      chefPregunta: '¿Por qué la sandía es roja por dentro?',
      respuestaEsperada: 'Por el pigmento licopeno, el mismo que tiene el jitomate.',
    },
    {
      numero: 3,
      titulo: 'Sirve helada',
      descripcion: 'Exprime el limón, mezcla bien y sirve con hielo.',
      tiempo: '1 minuto',
      mensajeChef: 'El color rojo rosado significa que está lista.',
    }
  ],
  tip: 'Si no quieres colarla, puedes dejar la pulpa y tendrás una textura tipo smoothie.',
  ahorro: 'En temporada, la sandía es una de las frutas más baratas.',
  errorComun: 'Agregar demasiada agua y perder el sabor de la fruta.',
  popularidad: 95,
  tags: ['bebida', 'verano', 'sandia', 'rapido'],
  tipoComida: 'barata',
  historiaChef: 'La sandía es originaria de África y ha sido cultivada durante más de 5,000 años. Es el símbolo del verano en México.',
  chefInicio: 'Hoy vamos a hacer la bebida más veraniega del mundo. Solo necesitas sandía y un buen limón.',
  chefFinal: '¡Listo! Un agua fresca que parece jugo de la frutería.',
  señalesExito: { vista: 'Color rosa vibrante.', olor: 'Aroma fresco y dulce.', textura: 'Líquida y suave.' },
  rescates: [{ problema: 'Quedó muy aguada', solucion: 'Agrega otra taza de sandía y vuelve a licuar.' }]
};