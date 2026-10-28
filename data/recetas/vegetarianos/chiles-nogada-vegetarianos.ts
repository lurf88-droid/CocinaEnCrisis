import type { Receta } from '@/types/receta';

export const CHILES_NOGADA_VEGETARIANOS: Receta = {
  id: 'chiles-nogada-vegetarianos',
  titulo: 'Chiles en Nogada Vegetarianos',
  imagen: require('../../../assets/images/recetas/vegetarianos/chiles-nogada-vegetarianos.webp'),
  descripcion: 'El platillo más emblemático de México, en versión vegetariana. Aprende a hacer el picadillo de frutas y la cremosa nogada de nuez.',
  cocina: 'mexicana',
  tecnicaPrincipal: 'relleno de frutas, tatemado de chile y salsa de nuez',
  categoria: 'comida',
  rolCulinario: 'plato_principal',
  porciones: 4,
  tiempoMinutos: 50,
  dificultad: 'avanzada',
  nivelChef: 4,
  aprendizajes: ['picadillo de frutas', 'pelado de chiles', 'salsa de nuez para nogada'],
  ingredientes: [
    { id: 'chile_poblano', cantidad: 4, unidad: 'pieza' },
    { id: 'manzana', cantidad: 1, unidad: 'pieza' },
    { id: 'platano', cantidad: 1, unidad: 'pieza' },
    { id: 'jitomate', cantidad: 0.200, unidad: 'kg' },
    { id: 'cebolla_blanca', cantidad: 0.050, unidad: 'kg' },
    { id: 'nuez', cantidad: 0.100, unidad: 'kg' },
    { id: 'crema', cantidad: 0.200, unidad: 'litro' },
    { id: 'queso_fresco', cantidad: 0.100, unidad: 'kg' },
    { id: 'granada', cantidad: 1, unidad: 'pieza' },
    { id: 'perejil', cantidad: 0.010, unidad: 'kg' },
    { id: 'sal', cantidad: 0.005, unidad: 'kg' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Prepara los chiles',
      descripcion: 'Tatema los chiles poblanos, mételos en una bolsa 10 minutos y pélalos. Haz una abertura y retira las semillas.',
      tiempo: '20 minutos',
      nivelImportancia: 'critico',
    },
    {
      numero: 2,
      titulo: 'Haz el picadillo',
      descripcion: 'Pica finamente la manzana, el plátano, el jitomate y la cebolla. Sofríe la cebolla, agrega el jitomate, la fruta y una pizca de sal. Cocina 10 minutos.',
      tiempo: '12 minutos',
      mensajeChef: 'El picadillo debe estar dulce y ligeramente ácido.',
    },
    {
      numero: 3,
      titulo: 'La nogada',
      descripcion: 'Licúa la nuez con la crema y un poco de queso fresco. Cuela si deseas una textura más fina. Sazona ligeramente.',
      tiempo: '5 minutos',
      porQue: 'La nuez y la crema crean una salsa blanca y espesa que es el alma del plato.',
    },
    {
      numero: 4,
      titulo: 'Rellena y sirve',
      descripcion: 'Rellena los chiles con el picadillo. Báñalos con la nogada. Decora con granos de granada y perejil picado.',
      tiempo: '5 minutos',
      chefPregunta: '¿Qué representan los colores del chile en nogada?',
      respuestaEsperada: 'El verde del chile, el blanco de la nogada y el rojo de la granada son los colores de la bandera mexicana.',
      señalCorrecta: 'Chiles bañados en salsa blanca con toques rojos de granada.',
    }
  ],
  tip: 'Puedes preparar la nogada con anticipación y guardarla en el refri.',
  popularidad: 98,
  tags: ['vegetariano', 'mexicano', 'premium', 'tradicional', 'gourmet'],
  tipoComida: 'familia',
  historiaChef: 'Los chiles en nogada fueron creados en Puebla en 1821 para celebrar la independencia de México. Su versión original lleva carne, pero esta adaptación vegetariana conserva toda la esencia.',
  trucoChef: 'Si no encuentras granada, puedes usar un poco de jugo de granada o frambuesas para el toque rojo.',
  chefInicio: 'Hoy vamos a preparar el plato más emblemático de México. Un reto de sabores y colores.',
  chefFinal: '¡Espectacular! Has logrado un plato lleno de historia y sabor.',
  señalesExito: {
    vista: 'Chiles verdes bañados en salsa blanca, granada roja y perejil verde.',
    olor: 'Aroma a nuez, frutas y chile asado.',
    textura: 'Chile suave, relleno dulce y salsa cremosa.',
  },
  rescates: [
    { problema: 'La nogada quedó muy líquida', solucion: 'Agrega más nuez molida o un poco de queso fresco para espesarla.' }
  ]
};