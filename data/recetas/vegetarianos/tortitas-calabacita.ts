import type { Receta } from '@/types/receta';

export const TORTITAS_CALABACITA: Receta = {
  id: 'tortitas-calabacita',
  titulo: 'Tortitas de calabacita y elote',
  imagen: require('../../../assets/images/recetas/vegetarianos/tortitas-calabacita.webp'),
  descripcion: 'El truco definitivo para que las tortitas de verdura no se deshagan. Dulces, crujientes y perfectas para una cena ligera.',
  cocina: 'mexicana',
  tecnicaPrincipal: 'deshidratación de vegetales y formación de masa',
  categoria: 'cena',
  rolCulinario: 'plato_principal',
  porciones: 3,
  tiempoMinutos: 25,
  dificultad: 'media',
  nivelChef: 2,
  aprendizajes: ['deshidratación de calabacita', 'aglutinantes sin harina', 'sellado'],
  ingredientes: [
    { id: 'calabacita', cantidad: 2, unidad: 'pieza' },
    { id: 'elote', cantidad: 0.100, unidad: 'kg' },
    { id: 'huevo', cantidad: 2, unidad: 'pieza' },
    { id: 'queso_fresco', cantidad: 0.100, unidad: 'kg' },
    { id: 'harina', cantidad: 0.030, unidad: 'kg' },
    { id: 'aceite_vegetal', cantidad: 0.050, unidad: 'litro' },
    { id: 'sal', cantidad: 0.003, unidad: 'kg' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Ralla y deshidrata',
      descripcion: 'Ralla la calabacita. Colócala en un paño limpio y exprime MUY bien para sacar toda el agua posible.',
      tiempo: '5 minutos',
      porQue: 'Si no quitas el agua, la tortita se deshace o queda aguada.',
      mensajeChef: 'La humedad es la enemiga de las tortitas.',
      nivelImportancia: 'critico',
    },
    {
      numero: 2,
      titulo: 'Mezcla',
      descripcion: 'En un bowl, mezcla la calabacita seca, el elote, los huevos, el queso desmoronado y la harina. Sazona.',
      tiempo: '3 minutos',
      porQue: 'La harina absorbe la humedad restante y el huevo actúa como pegamento.',
    },
    {
      numero: 3,
      titulo: 'Forma y fríe',
      descripcion: 'Calienta el aceite a fuego medio. Forma tortitas con una cuchara y fríe 3 minutos por lado.',
      tiempo: '8 minutos',
      señalCorrecta: 'Doradas, firmes y no se desmoronan.',
    }
  ],
  tip: 'Puedes agregar hojas de espinaca picadas para darles un color verde más intenso.',
  popularidad: 88,
  tags: ['vegetariano', 'tortitas', 'calabacita', 'cena'],
  tipoComida: 'barata',
  historiaChef: 'Las tortitas de verduras son un invento moderno para hacer más atractivos los vegetales. En México, la tradición de las tortitas de papa o de atún las hace un plato muy familiar.',
  trucoChef: 'Un poco de queso parmesano rallado en la mezcla les da un sabor increíble.',
  chefInicio: 'Hoy vamos a vencer el miedo a las tortitas que se deshacen. El secreto está en exprimir la calabacita.',
  chefFinal: '¡Perfectas! Doradas por fuera y jugosas por dentro.',
  señalesExito: {
    vista: 'Tortitas doradas con puntos verdes y amarillos.',
    olor: 'Aroma a elote y queso frito.',
    textura: 'Crujiente por fuera, suave por dentro.',
  },
  rescates: [
    { problema: 'Se deshacen', solucion: 'Agrega una cucharada más de harina y deja reposar la mezcla 5 minutos antes de freír.' }
  ]
};