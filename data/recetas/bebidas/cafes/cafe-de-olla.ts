import type { Receta } from '@/types/receta';

export const CAFE_DE_OLLA: Receta = {
  id: 'cafe-de-olla',
  titulo: 'Café de olla tradicional',
  imagen: require('../../../../assets/images/recetas/bebidas/cafes/cafe-de-olla.webp'), 
  descripcion: 'El abrazo caliente de México. Aprende a infusionar las especias en el agua antes de agregar el café, para que el sabor sea profundo, dulce y aromático.',
  
  cocina: 'mexicana',
  tecnicaPrincipal: 'infusión de especias y extracción de café',
  categoria: 'bebida',
  rolCulinario: 'bebida',
  porciones: 4,
  tiempoMinutos: 15,
  dificultad: 'facil',
  nivelChef: 1,

  aprendizajes: [
    'infusión de especias enteras',
    'control de amargor del café',
    'uso del piloncillo o azúcar'
  ],

  ingredientes: [
    { id: 'cafe_molido', cantidad: 0.050, unidad: 'kg' },
    { id: 'canela', cantidad: 0.010, unidad: 'kg' }, // 2 rajas de canela
    { id: 'clavo', cantidad: 3, unidad: 'pieza' },
    { id: 'azucar', cantidad: 0.060, unidad: 'kg' }, // O piloncillo
    { id: 'agua', cantidad: 1.000, unidad: 'litro' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Infusiona las especias',
      descripcion: 'En una olla, pon el agua con la canela y los clavos. Hiérvelo por 5 minutos para que el agua absorba todos los aromas.',
      tiempo: '7 minutos',
      porQue: 'Si echas el café desde el principio, las especias no tendrán tiempo de soltar su sabor y el café se hervirá demasiado.',
      mensajeChef: 'El secreto del café de olla son las especias bien infusionadas.',
      nivelImportancia: 'critico',
      señalCorrecta: 'El agua huele delicioso a canela.',
    },
    {
      numero: 2,
      titulo: 'Agrega el café',
      descripcion: 'Baja el fuego. Agrega el café molido y el azúcar (o piloncillo). Mueve suavemente con una cuchara de madera y apaga el fuego.',
      tiempo: '2 minutos',
      consejo: 'Nunca dejes que el café hierva a borbotones, se pone amargo. Solo debe calentarse.',
      chefPregunta: '¿Por qué el café se pone amargo si se hierve?',
      respuestaEsperada: 'Porque los ácidos y compuestos amargos del grano se sobre-extraen a temperaturas muy altas.',
    },
    {
      numero: 3,
      titulo: 'Deja reposar y cuela',
      descripcion: 'Tapa la olla y deja reposar por 5 minutos. Cuela con un colador fino o manta de cielo antes de servir.',
      tiempo: '5 minutos',
      señalCorrecta: 'Café oscuro, aromático y sin sedimentos.',
    }
  ],

  tip: 'Si tienes piloncillo, úsalo en lugar del azúcar; le da un sabor a panela ahumado que es la tradición absoluta.',
  ahorro: 'Es la forma más elegante y barata de tomar café en casa.',
  errorComun: 'Hervir el café con las especias por mucho tiempo.',
  popularidad: 92,
  tags: ['bebida', 'cafe', 'caliente', 'tradicional', 'mexicana'],
  tipoComida: 'barata',
  historiaChef: 'El café de olla nació en la época de la Revolución Mexicana. Las soldaderas (mujeres en el ejército) preparaban café en ollas de barro con piloncillo y canela para dar energía a las tropas.',
  trucoChef: 'Si no tienes manta de cielo, puedes colar el café usando un filtro de tela para café o un colador muy fino.',
  sustituciones: [
    { falta: 'cafe_molido', reemplazo: 'café de grano molido en casa' },
    { falta: 'clavo', reemplazo: 'anís estrella o pimienta gorda' }
  ],
  chefInicio: 'Hoy vamos a preparar un café que reconforta el alma. El secreto está en las especias.',
  chefFinal: '¡Excelente! Has logrado un café con el balance perfecto de dulce y especiado.',
  señalesExito: {
    vista: 'Líquido oscuro y brillante.',
    olor: 'Aroma intenso a canela, clavo y café.',
    textura: 'Caliente y ligera.',
  },
  rescates: [
    { problema: 'El café quedó amargo', solucion: 'Agrega un poco más de leche caliente o azúcar para equilibrar el amargor.' }
  ]
};