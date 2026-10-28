import type { Receta } from '@/types/receta';

export const TARTA_CEBOLLA_QUESO: Receta = {
  id: 'tarta-cebolla-queso',
  titulo: 'Tarta de Cebolla Caramelizada y Queso',
  imagen: require('../../../assets/images/recetas/vegetarianos/tarta-cebolla-queso.webp'),
  descripcion: 'Una tarta francesa (Tarte Tatin salada) que parece de pastelería. Aprende a caramelizar cebolla a fuego lento y a hornear una masa crujiente.',
  cocina: 'francesa',
  tecnicaPrincipal: 'caramelización lenta y horneado de masa',
  categoria: 'cena',
  rolCulinario: 'plato_principal',
  porciones: 4,
  tiempoMinutos: 60,
  dificultad: 'avanzada',
  nivelChef: 3,
  aprendizajes: ['caramelización de cebolla', 'manejo de masa', 'tarta invertida'],
  ingredientes: [
    { id: 'cebolla_blanca', cantidad: 0.600, unidad: 'kg' },
    { id: 'mantequilla', cantidad: 0.050, unidad: 'kg' },
    { id: 'harina', cantidad: 0.200, unidad: 'kg' },
    { id: 'huevo', cantidad: 1, unidad: 'pieza' },
    { id: 'leche', cantidad: 0.050, unidad: 'litro' },
    { id: 'queso_fresco', cantidad: 0.150, unidad: 'kg' },
    { id: 'azucar', cantidad: 0.010, unidad: 'kg' },
    { id: 'sal', cantidad: 0.005, unidad: 'kg' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Carameliza la cebolla',
      descripcion: 'Corta la cebolla en juliana. Cocínala en mantequilla a fuego MUY bajo por 30 minutos, moviendo ocasionalmente hasta que esté dorada y dulce.',
      tiempo: '30 minutos',
      porQue: 'El calor lento rompe los azúcares de la cebolla y los transforma en caramelo natural.',
      mensajeChef: 'La cebolla caramelizada no se apresura. Es pura paciencia.',
      nivelImportancia: 'critico',
    },
    {
      numero: 2,
      titulo: 'Haz la masa',
      descripcion: 'Mezcla la harina, el huevo, la leche, una pizca de sal y una cucharadita de azúcar. Amasa hasta formar una bola.',
      tiempo: '5 minutos',
    },
    {
      numero: 3,
      titulo: 'Ensambla',
      descripcion: 'En un molde para tarta, extiende la cebolla caramelizada. Cubre con el queso desmoronado. Estira la masa y colócala encima, metiendo los bordes.',
      tiempo: '5 minutos',
    },
    {
      numero: 4,
      titulo: 'Hornea',
      descripcion: 'Hornea a 180°C por 25 minutos hasta que la masa esté dorada. Deja reposar 5 minutos y voltea la tarta como un pastel.',
      tiempo: '30 minutos',
      chefPregunta: '¿Qué es una Tarte Tatin?',
      respuestaEsperada: 'Es una tarta francesa que se cocina con la fruta (o verdura) abajo y la masa arriba, y se voltea al servir.',
      señalCorrecta: 'Masa dorada y cebolla brillante y caramelizada.',
    }
  ],
  tip: 'Si no tienes molde para tarta, usa un sartén que pueda ir al horno.',
  popularidad: 85,
  tags: ['vegetariano', 'frances', 'tarta', 'premium', 'cebolla'],
  tipoComida: 'familia',
  historiaChef: 'La Tarte Tatin nació en Francia por accidente en el siglo XIX, cuando las hermanas Tatin voltearon una tarta de manzanas. Esta versión salada es una evolución moderna.',
  trucoChef: 'Un toque de tomillo fresco en la cebolla caramelizada le da un aroma increíble.',
  chefInicio: 'Hoy vamos a hacer una tarta francesa. La cebolla caramelizada es la estrella.',
  chefFinal: '¡Brutal! Tienes una tarta elegante con un sabor dulce y salado perfecto.',
  señalesExito: {
    vista: 'Tarta con masa dorada y cebolla caramelizada visible.',
    olor: 'Aroma dulce a cebolla y queso horneado.',
    textura: 'Masa crujiente y relleno suave.',
  },
  rescates: [
    { problema: 'La masa se rompió', solucion: 'Puedes parchar los huecos con un poco de la misma masa antes de hornear.' }
  ]
};