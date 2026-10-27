import type { Receta } from '@/types/receta';

export const LICUADO_AVENA_PLATANO: Receta = {
  id: 'licuado-avena-platano',
  titulo: 'Licuado energético de avena y plátano',
  imagen: require('../../../../assets/images/recetas/bebidas/licuados/licuado-avena-platano.webp'),
  descripcion: 'El desayuno de los campeones en 5 minutos. Aprende a moler la avena correctamente para evitar esa textura arenosa y lograr un licuado ultra cremoso.',
  
  cocina: 'internacional',
  tecnicaPrincipal: 'molienda de granos y emulsión en frío',
  categoria: 'bebida',
  rolCulinario: 'bebida',
  porciones: 2,
  tiempoMinutos: 5,
  dificultad: 'facil',
  nivelChef: 1,

  aprendizajes: [
    'molienda de avena para textura',
    'balance de dulzor natural',
    'licuado de alta potencia'
  ],

  ingredientes: [
    { id: 'platano', cantidad: 2, unidad: 'pieza' },
    { id: 'leche', cantidad: 0.500, unidad: 'litro' },
    { id: 'avena', cantidad: 0.050, unidad: 'kg' },
    { id: 'canela', cantidad: 0.005, unidad: 'kg' },
    { id: 'azucar', cantidad: 0.020, unidad: 'kg' }, // Opcional
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Muele la avena (Súper truco)',
      descripcion: 'Si tienes licuadora, agrega la avena sola y muele por 20 segundos hasta hacer una harina fina antes de agregar el líquido.',
      tiempo: '1 minuto',
      porQue: 'Si echas la avena entera con la leche, las hojuelas no se muelen bien y el licuado queda con textura "arenosa" y grumos.',
      mensajeChef: 'La avena molida es el secreto para un licuado sedoso.',
      nivelImportancia: 'critico',
      señalCorrecta: 'La avena se ve como polvo fino.',
    },
    {
      numero: 2,
      titulo: 'Agrega los ingredientes',
      descripcion: 'Corta el plátano en trozos. Agrégalo a la licuadora junto con la leche, la canela y el azúcar (si la usas).',
      tiempo: '2 minutos',
      consejo: 'Entre más maduro esté el plátano, más dulce y cremoso quedará.',
    },
    {
      numero: 3,
      titulo: 'Licúa y sirve',
      descripcion: 'Licúa a velocidad alta por 1 minuto hasta que no queden grumos. Sirve inmediatamente.',
      tiempo: '1 minuto',
      chefPregunta: '¿Por qué el plátano hace que el licuado sea más espeso?',
      respuestaEsperada: 'Porque contiene almidones y fibra que, al romperse con la licuadora, forman una pasta cremosa.',
      señalCorrecta: 'Bebida espesa, sin grumos y con color crema claro.',
    }
  ],

  tip: 'Puedes agregar 1 cucharada de crema de cacahuate o mantequilla de maní para más proteína.',
  ahorro: 'Es un desayuno completo mucho más económico que comprar en la calle.',
  errorComun: 'No moler la avena primero y sentir los grumos.',
  popularidad: 90,
  tags: ['bebida', 'desayuno', 'saludable', 'rapido', 'energetico'],
  tipoComida: 'barata',
  historiaChef: 'Los licuados son una tradición mexicana moderna. A diferencia de los smoothies, en México se les agrega avena y leche para hacerlos más llenadores y convertirlos en un desayuno completo.',
  trucoChef: 'Puedes usar plátano congelado en lugar de fresco para darle una textura tipo frappé sin necesidad de hielo.',
  sustituciones: [
    { falta: 'leche', reemplazo: 'agua, leche de almendra o leche de soya' }
  ],
  chefInicio: 'Hoy vamos a hacer un licuado que sí llena. El truco está en la avena.',
  chefFinal: '¡Perfecto! Tienes una bebida llena de energía y con textura profesional.',
  señalesExito: {
    vista: 'Color crema pálido, textura homogénea.',
    olor: 'Aroma dulce a plátano y canela.',
    textura: 'Cremosa y espesa.',
  },
  rescates: [
    { problema: 'Quedó muy espeso', solucion: 'Agrega un chorrito más de leche y licúa de nuevo por 10 segundos.' }
  ]
};