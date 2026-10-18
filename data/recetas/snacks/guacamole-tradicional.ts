import type { Receta } from '@/types/receta';

export const GUACAMOLE_TRADICIONAL: Receta = {
  id: 'guacamole-tradicional',
  titulo: 'Guacamole tradicional',
imagen: require('../../../assets/images/recetas/snacks/guacamole-tradicional.webp'),
  descripcion: 'El rey de las botanas mexicanas. Un dip cremoso, fresco y con el balance perfecto de acidez y picante, listo en minutos.',

  categoria: 'snack',
  rolCulinario: 'acompanamiento',
  
  porciones: 4,
  tiempoMinutos: 10,
  dificultad: 'facil',
  
  cocina: 'mexicana',
  tecnicaPrincipal: 'machacado y mezcla en frío',
  aprendizajes: ['punto de sazón', 'picado fino'],

  ingredientes: [
    { id: 'aguacate', cantidad: 2, unidad: 'pieza' },
    { id: 'jitomate', cantidad: 1, unidad: 'pieza' },
    { id: 'cebolla_blanca', cantidad: 0.05, unidad: 'kg' },
    { id: 'limon', cantidad: 1, unidad: 'pieza' },
    { id: 'cilantro', cantidad: 0.02, unidad: 'kg' },
    { id: 'chile_serrano', cantidad: 1, unidad: 'pieza' },
    { id: 'sal', cantidad: 0.005, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Pica los vegetales',
      descripcion: 'Pica finamente el jitomate, la cebolla, el cilantro y el chile. Procura que los trozos sean muy pequeños para que se integren bien.',
      tiempo: '5 minutos',
      consejo: 'Entre más fino el picado, mejor textura tendrá el dip.',
    },
    {
      numero: 2,
      titulo: 'Machaca el aguacate',
      descripcion: 'Parte los aguacates por la mitad, retira el hueso y la pulpa. Colócalos en un tazón y machácalos con un tenedor hasta obtener una pasta rústica.',
      tiempo: '2 minutos',
    },
    {
      numero: 3,
      titulo: 'Integra y sazona',
      descripcion: 'Agrega los vegetales picados al aguacate. Exprime el jugo de limón, agrega sal al gusto y mezcla suavemente.',
      tiempo: '2 minutos',
    }
  ],

  tip: 'Deja el hueso del aguacate dentro del tazón si no lo vas a comer todo de inmediato.',
  nivelChef: 1,
  tags: ['botana', 'antojito', 'rapida', 'mexicana', 'vegetariana'],
  tipoComida: 'barata',
  popularidad: 95,
};