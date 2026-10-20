import type { Receta } from '@/types/receta';

export const TORTITAS_BROCOLI: Receta = {

  id: 'tortitas-brocoli',

  titulo: 'Tortitas de brócoli',

  imagen: require('../../../assets/images/recetas/vegetarianos/tortitas-brocoli.webp'), 

  descripcion: 'Una alternativa vegetariana que demuestra que lo saludable también puede ser crujiente y lleno de sabor. Ideal para aprender a dar estructura a preparaciones sin carne.',

  cocina: 'mexicana',

  tecnicaPrincipal: 'blanqueado, formación y sellado en sartén',

  categoria: 'cena',

  rolCulinario: 'plato_principal',

  porciones: 3,

  tiempoMinutos: 25,

  dificultad: 'facil',

  nivelChef: 2,

  aprendizajes: [
    'blanqueado de vegetales verdes',
    'control de humedad en masas',
    'técnica de sellado y dorado',
  ],

  ingredientes: [
{ id: 'brocoli', cantidad: 0.300, unidad: 'kg' },
    { id: 'huevo', cantidad: 2, unidad: 'pieza' },
    { id: 'harina', cantidad: 0.1, unidad: 'kg' },
    { id: 'queso_fresco', cantidad: 0.1, unidad: 'kg' },
    { id: 'aceite_vegetal', cantidad: 0.05, unidad: 'litro' },
    { id: 'sal', cantidad: 0.005, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Blanquea el brócoli',
      descripcion: 'Hierve agua con sal. Sumerge los floretes de brócoli por 4 minutos, escúrrelos y pásalos por agua fría para cortar la cocción.',
      tiempo: '6 minutos',
      consejo: 'El choque térmico mantiene el color verde brillante y la textura firme.',
      porQue: 'El blanqueado ablanda la fibra del brócoli sin deshacerlo.',
      mensajeChef: 'El color también se come con los ojos.',
      objetivo: 'Suavizar el brócoli sin perder su estructura.',
      nivelImportancia: 'clave',
      señalCorrecta: 'El brócoli está tierno pero firme, y de color verde intenso.',
      errorEvitar: 'Cocerlo demasiado tiempo y dejarlo aguado.',
    },
    {
      numero: 2,
      titulo: 'Seca y pica',
      descripcion: 'Pica el brócoli muy finamente. Exprime con un paño limpio o papel para retirar el exceso de agua.',
      tiempo: '4 minutos',
      consejo: 'Si la mezcla tiene agua, las tortitas se deshacen en el sartén.',
      nivelImportancia: 'critico',
      señalCorrecta: 'El brócoli picado se siente húmedo, pero no gotea.',
    },
    {
      numero: 3,
      titulo: 'Integra la mezcla',
      descripcion: 'En un bowl, mezcla el brócoli, los huevos, el queso desmoronado y la harina. Sazona con sal. Deja reposar 5 minutos.',
      tiempo: '5 minutos',
      porQue: 'La harina absorberá la humedad restante y el huevo actuará como aglutinante.',
      nivelImportancia: 'clave',
    },
    {
      numero: 4,
      titulo: 'Forma y sella',
      descripcion: 'Calienta aceite a fuego medio. Forma tortitas con las manos húmedas y fríelas 3 minutos por lado.',
      tiempo: '10 minutos',
      consejo: 'No muevas las tortitas hasta que se despeguen solas del sartén.',
      mensajeChef: 'La paciencia es un ingrediente invisible.',
      chefPregunta: '¿Qué pasa si usamos fuego alto desde el principio?',
      respuestaEsperada: 'Se doran por fuera, pero quedan crudas por dentro.',
      nivelImportancia: 'critico',
      señalCorrecta: 'Doradas, firmes y crujientes.',
    }
  ],

  tip: 'Puedes sustituir la harina de trigo por avena molida o fécula de maíz para una versión sin gluten.',

  ahorro: 'Aprovecha el brócoli que esté a punto de madurar.',

  errorComun: 'No escurrir el brócoli y terminar con una mezcla aguada.',

  popularidad: 80,

  tags: ['vegetariano', 'economico', 'saludable', 'cena'],

  tipoComida: 'barata',

  historiaChef: 'Las tortitas son una técnica versátil que nos permite convertir casi cualquier vegetal en un plato principal, aprovechando la herencia de la cocina de aprovechamiento.',

  trucoChef: 'Aplasta un poco la tortita con la pala al voltearla para asegurar que el centro se cocine.',

  sustituciones: [
    { falta: 'queso_fresco', reemplazo: 'queso panela' },
    { falta: 'harina', reemplazo: 'avena molida' },
  ],

  chefInicio: 'Hoy vamos a demostrar que un vegetal puede ser el protagonista indiscutible de la mesa.',

  chefFinal: 'Has creado una estructura perfecta. Dominaste el control de humedad y el sellado.',

  señalesExito: {
    vista: 'Tortitas doradas con puntos verdes brillantes.',
    olor: 'Aroma a queso fundido y vegetal tostado.',
    textura: 'Crujiente por fuera y suave por dentro.',
  },

  rescates: [
    { problema: 'Se deshacen en el sartén', solucion: 'Agrega 1 cucharada más de harina a la mezcla para darle más cuerpo.' },
    { problema: 'Quedaron crudas por dentro', solucion: 'Baja el fuego y tapa el sartén por 2 minutos para que se cocinen con el vapor.' }
  ]
};