import type { Receta } from '@/types/receta';

export const AGUACATE_RELLENO_ATUN: Receta = {
  id: 'aguacate-relleno-atun',
  titulo: 'Aguacate relleno de atún',
 imagen: require('../../../assets/images/recetas/ensaladas/aguacate-relleno-atun.webp'), 
  descripcion: 'Una presentación elegante y rapidísima. Aprende a usar el aguacate como un tazón natural y a hacer una mezcla de atún fresca que no sepa a "lata".',
  
  cocina: 'internacional',
  tecnicaPrincipal: 'vaciado de aguacate y mezcla en frío',
  categoria: 'comida',
  rolCulinario: 'plato_principal',
  porciones: 2,
  tiempoMinutos: 15,
  dificultad: 'facil',
  nivelChef: 1,

  aprendizajes: [
    'técnica para abrir y vaciar un aguacate',
    'uso de cítricos para quitar el sabor a lata del atún',
    'emplatado rústico y elegante'
  ],

  ingredientes: [
    { id: 'aguacate', cantidad: 2, unidad: 'pieza' },
    { id: 'atun', cantidad: 1, unidad: 'pieza' },
    { id: 'jitomate', cantidad: 1, unidad: 'pieza' },
    { id: 'cebolla_blanca', cantidad: 0.030, unidad: 'kg' },
    { id: 'cilantro', cantidad: 0.015, unidad: 'kg' },
    { id: 'limon', cantidad: 1, unidad: 'pieza' },
    { id: 'mayonesa', cantidad: 0.030, unidad: 'kg' },
    { id: 'sal', cantidad: 0.002, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Prepara el atún',
      descripcion: 'Escurre muy bien el atún. En un tazón, mézclalo con el jitomate picado, la cebolla finamente picada, el cilantro picado y la mayonesa.',
      tiempo: '5 minutos',
      consejo: 'Exprime el limón sobre la mezcla. El limón quita el sabor metálico a la lata y refresca.',
      porQue: 'El ácido del limón neutraliza los compuestos que dan el sabor a "lata".',
      mensajeChef: 'El limón es el mejor amigo del atún enlatado.',
      nivelImportancia: 'critico',
    },
    {
      numero: 2,
      titulo: 'Prepara el aguacate',
      descripcion: 'Corta los aguacates por la mitad (a lo largo del hueso). Retira el hueso y, con una cuchara, saca un poco de la pulpa para hacer espacio (puedes picarla y agregarla a la mezcla de atún).',
      tiempo: '5 minutos',
      consejo: 'Pasa una cucharada de limón por el borde del aguacate para que no se oxide y se ponga negro.',
      nivelImportancia: 'clave',
    },
    {
      numero: 3,
      titulo: 'Rellena',
      descripcion: 'Con una cuchara, rellena cada mitad de aguacate con la mezcla de atún. Presiona ligeramente para que quede compacto.',
      tiempo: '2 minutos',
      señalCorrecta: 'El aguacate está lleno y la mezcla se ve colorida.',
    },
    {
      numero: 4,
      titulo: 'Sirve',
      descripcion: 'Coloca los aguacates rellenos en un plato y decora con un poco de cilantro fresco picado y una rodaja de limón.',
      tiempo: '1 minuto',
      mensajeChef: 'No necesitas ensalada de acompañamiento; el aguacate es el plato principal y el tazón.',
      chefPregunta: '¿Por qué el aguacate se pone negro después de cortarlo?',
      respuestaEsperada: 'Porque se oxida al contacto con el aire. El limón crea una barrera protectora.',
    }
  ],

  tip: 'Si quieres una versión más ligera, usa yogurt griego en lugar de mayonesa.',
  ahorro: 'El atún en lata es una proteína súper económica y el aguacate es una grasa saludable que te llena.',
  errorComun: 'No escurrir bien el atún y que la mezcla quede aguada.',
  popularidad: 90,
  tags: ['ensalada', 'atun', 'rapido', 'elegante', 'saludable'],
  tipoComida: 'barata',
  historiaChef: 'El aguacate relleno de atún es una receta muy popular en Latinoamérica. Se sirve como plato principal ligero o como entrada elegante.',
  trucoChef: 'Puedes agregar un poco de picante (chile serrano picado) a la mezcla de atún para darle un toque mexicano.',
  sustituciones: [
    { falta: 'atun', reemplazo: 'pollo deshebrado o salmón ahumado' }
  ],
  chefInicio: 'Hoy vamos a usar el aguacate como tazón. Una receta rápida, fresca y elegante.',
  chefFinal: '¡Listo! Tienes un plato principal que parece de restaurante en menos de 15 minutos.',
  señalesExito: {
    vista: 'Mitades de aguacate verde rellenas de una mezcla cremosa y colorida.',
    olor: 'Aroma fresco a limón, cilantro y atún.',
    textura: 'Cremosa del aguacate con el atún, crujiente del jitomate.',
  },
  rescates: [
    { problema: 'El aguacate se puso negro antes de rellenar', solucion: 'Corta una capa fina de la superficie y frótalo con limón de inmediato.' }
  ]
};