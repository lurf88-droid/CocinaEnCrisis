import type { Receta } from '@/types/receta';

export const BERENJENAS_PARMESANA: Receta = {
  id: 'berenjenas-parmesana',
  titulo: 'Berenjenas a la Parmesana',
  imagen: require('../../../assets/images/recetas/vegetarianos/berenjenas-parmesana.webp'),
  descripcion: 'Un clásico italiano lleno de capas de sabor. Aprende a "llorar" las berenjenas para quitarles el amargor y a crear una salsa de tomate rústica.',
  cocina: 'italiana',
  tecnicaPrincipal: 'deshidratación de berenjena, fritura y horneado en capas',
  categoria: 'cena',
  rolCulinario: 'plato_principal',
  porciones: 4,
  tiempoMinutos: 45,
  dificultad: 'avanzada',
  nivelChef: 3,
  aprendizajes: ['control de humedad en berenjena', 'salsa de tomate rústica', 'ensamblaje de lasaña vegetal'],
  ingredientes: [
    { id: 'berenjena', cantidad: 0.800, unidad: 'kg' },
    { id: 'jitomate', cantidad: 0.600, unidad: 'kg' },
    { id: 'queso_fresco', cantidad: 0.200, unidad: 'kg' },
    { id: 'ajo', cantidad: 2, unidad: 'pieza' },
    { id: 'cebolla_blanca', cantidad: 0.050, unidad: 'kg' },
    { id: 'harina', cantidad: 0.050, unidad: 'kg' },
    { id: 'aceite_vegetal', cantidad: 0.100, unidad: 'litro' },
    { id: 'sal', cantidad: 0.005, unidad: 'kg' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Suda la berenjena',
      descripcion: 'Corta las berenjenas en rodajas de 1 cm. Sálalas y colócalas en un colador por 15 minutos. Seca el agua que suelten.',
      tiempo: '15 minutos',
      porQue: 'La sal extrae el agua y los compuestos amargos. Al secarlas, la fritura será crujiente y no se harán puré.',
      mensajeChef: 'La berenjena es una esponja; si no la secas, absorberá todo el aceite.',
      nivelImportancia: 'critico',
    },
    {
      numero: 2,
      titulo: 'Haz la salsa',
      descripcion: 'Sofríe la cebolla y el ajo picados. Agrega el jitomate picado y cocina a fuego bajo por 15 minutos. Sazona.',
      tiempo: '18 minutos',
    },
    {
      numero: 3,
      titulo: 'Fríe las berenjenas',
      descripcion: 'Pasa las rodajas por harina y fríelas en aceite caliente hasta que estén doradas. Escúrrelas en papel.',
      tiempo: '8 minutos',
    },
    {
      numero: 4,
      titulo: 'Ensambla y hornea',
      descripcion: 'En un refractario, pon una capa de salsa, luego berenjena, luego queso. Repite y termina con queso. Hornea a 180°C por 15 minutos.',
      tiempo: '15 minutos',
      chefPregunta: '¿Por qué es importante usar harina antes de freír la berenjena?',
      respuestaEsperada: 'Porque crea una barrera que evita que absorba demasiado aceite y ayuda a que se dore.',
      señalCorrecta: 'Queso derretido y berenjenas suaves.',
    }
  ],
  tip: 'Si no quieres freír, puedes asar las berenjenas al horno con un poco de aceite en aerosol.',
  popularidad: 90,
  tags: ['vegetariano', 'italiano', 'premium', 'horno'],
  tipoComida: 'familia',
  historiaChef: 'La Parmigiana es un plato tradicional del sur de Italia. Aunque a veces lleva carne, la versión de berenjena es la más famosa a nivel mundial.',
  trucoChef: 'Agrega un poco de albahaca fresca entre las capas para un aroma increíble.',
  chefInicio: 'Hoy vamos a hacer un clásico italiano. El secreto está en quitarle el agua a la berenjena.',
  chefFinal: '¡Delicioso! Tienes un plato lleno de capas de sabor y textura.',
  señalesExito: {
    vista: 'Capas de berenjena con salsa roja y queso derretido.',
    olor: 'Aroma a albahaca y jitomate.',
    textura: 'Berenjena suave y queso gratinado.',
  },
  rescates: [
    { problema: 'Quedó muy aceitosa', solucion: 'Déjala reposar en papel absorbente antes de hornear para quitar el exceso de grasa.' }
  ]
};