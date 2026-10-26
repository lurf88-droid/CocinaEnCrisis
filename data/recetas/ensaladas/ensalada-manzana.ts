import type { Receta } from '@/types/receta';

export const ENSALADA_MANZANA: Receta = {
  id: 'ensalada-manzana',
  titulo: 'Ensalada de manzana y apio',
  imagen: require('../../../assets/images/recetas/arroz-huevo.webp'), // 👈 Cambia la foto después
  descripcion: 'Dulce, crujiente y cremosa. Una ensalada navideña clásica que te enseña a cortar en juliana y a mezclar texturas contrastantes sin que se oxiden.',
  
  cocina: 'internacional',
  tecnicaPrincipal: 'corte juliana y prevención de oxidación',
  categoria: 'cena',
  rolCulinario: 'acompanamiento',
  porciones: 4,
  tiempoMinutos: 15,
  dificultad: 'facil',
  nivelChef: 1,

  aprendizajes: [
    'corte en juliana (tiras finas)',
    'prevención de oxidación de frutas',
    'ensamblaje de ensaladas dulces'
  ],

  ingredientes: [
    { id: 'manzana', cantidad: 3, unidad: 'pieza' }, // Manzana roja o verde
    { id: 'apio', cantidad: 0.150, unidad: 'kg' },
    { id: 'nuez', cantidad: 0.050, unidad: 'kg' },
    { id: 'crema', cantidad: 0.150, unidad: 'litro' },
    { id: 'limon', cantidad: 1, unidad: 'pieza' },
    { id: 'azucar', cantidad: 0.020, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Corta el apio en juliana',
      descripcion: 'Lava los tallos de apio y córtalos en tiras finas (juliana) o en cuadritos muy pequeños. Retira las hebras si son muy gruesas.',
      tiempo: '4 minutos',
      consejo: 'Si el apio está muy fibroso, puedes pelarlo ligeramente con un pelador de verduras antes de cortarlo.',
      nivelImportancia: 'clave',
    },
    {
      numero: 2,
      titulo: 'Prepara la manzana',
      descripcion: 'Corta las manzanas en cuadritos (sin cáscara o con cáscara, a tu gusto). Inmediatamente rocíalas con jugo de limón.',
      tiempo: '5 minutos',
      porQue: 'El limón evita que la manzana se oxide y se ponga café.',
      mensajeChef: 'La manzana y el apio son el dúo dinámico de la textura crujiente.',
      nivelImportancia: 'critico',
    },
    {
      numero: 3,
      titulo: 'Tuesta la nuez',
      descripcion: 'Pica la nuez en trozos pequeños. Si puedes, tuéstala en un sartén seco por 2 minutos.',
      tiempo: '2 minutos',
      chefPregunta: '¿Por qué tostar las nueces les da más sabor?',
      respuestaEsperada: 'Porque el calor libera sus aceites esenciales, haciéndolas más aromáticas y crujientes.',
    },
    {
      numero: 4,
      titulo: 'Mezcla y sirve',
      descripcion: 'En un tazón, mezcla la manzana, el apio y la nuez. Agrega la crema y el azúcar (puedes ajustar el azúcar al gusto). Revuelve suavemente.',
      tiempo: '3 minutos',
      señalCorrecta: 'Textura crujiente, color blanco con toques rojos y verdes.',
    }
  ],

  tip: 'Si no tienes nuez, las almendras fileteadas o los cacahuates funcionan perfecto.',
  ahorro: 'Aprovecha las manzanas que estén un poco pasadas de madurez, son más dulces.',
  errorComun: 'Dejar la manzana sin limón por mucho tiempo antes de mezclar.',
  popularidad: 85,
  tags: ['ensalada', 'dulce', 'navidad', 'crujiente'],
  tipoComida: 'familia',
  historiaChef: 'Esta ensalada es un clásico de la mesa navideña estadounidense y europea, pero en México se adoptó rápidamente por su contraste de sabores dulces y frescos.',
  trucoChef: 'Agrega un poco de yogurt griego a la crema para hacerla más ligera y con un toque ácido.',
  sustituciones: [
    { falta: 'nuez', reemplazo: 'almendras o cacahuates tostados' },
    { falta: 'crema', reemplazo: 'yogurt griego natural' }
  ],
  chefInicio: 'Hoy vamos a preparar una ensalada que parece postre. El secreto está en el corte y el limón.',
  chefFinal: '¡Perfecto! Tienes una ensalada dulce, crujiente y muy elegante para acompañar cualquier comida.',
  señalesExito: {
    vista: 'Cubos de manzana brillantes, apio verde y nueces doradas cubiertos de crema.',
    olor: 'Aroma dulce a manzana y crema.',
    textura: 'Crujiente y muy jugosa.',
  },
  rescates: [
    { problema: 'La manzana se puso café', solucion: 'Mientras más rápido la mezcles con el limón, mejor. Si ya se oxidó, retira la capa superior que sí está sana.' }
  ]
};