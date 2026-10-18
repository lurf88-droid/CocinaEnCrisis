import type { Receta } from '@/types/receta';
export const SOPA_PASTA_JITOMATE: Receta = {
    
  id: 'sopa-pasta-jitomate',
  titulo: 'Sopa de pasta con jitomate',
  imagen: require('../../assets/images/recetas/sopa-pasta-jitomate.webp'),
  descripcion:
    'Caldo casero económico y reconfortante, ideal para la cena. Es fácil, rendidor y perfecto cuando quieres algo caliente y barato.',

  categoria: 'comida',
  rolCulinario: 'entrada',
  porciones: 3,
  tiempoMinutos: 20,
  dificultad: 'facil',

  ingredientes: [
    { id: 'pasta', cantidad: 0.12, unidad: 'kg' },
    { id: 'jitomate', cantidad: 0.3, unidad: 'kg' },
    {
id:'cebolla_blanca',
cantidad:0.040,
unidad:'kg'
},
   {
id:'aceite_vegetal',
cantidad:0.010,
unidad:'litro'
},
  {
id:'sal',
cantidad:0.005,
unidad:'kg'
}
  ],

pasos: [

{
  numero:1,

  titulo:'Prepara los ingredientes',

  descripcion:
  'Lava el jitomate y la cebolla. Córtalos en trozos medianos para facilitar la preparación de la salsa.',

  tiempo:'3 minutos',

  consejo:
  'Ten todos los ingredientes listos antes de encender la estufa.',

  porQue:
  'La organización ayuda a controlar mejor los tiempos de cocción.',

  mensajeChef:
  'Una buena sopa comienza antes de prender el fuego.',

  objetivo:
  'Preparar una estación de cocina ordenada.',

  nivelImportancia:
  'normal',

  señalCorrecta:
  'Los ingredientes están limpios y listos para cocinar.',

  errorEvitar:
  'Empezar la receta sin tener preparada la base de sabor.'
},


{
  numero:2,

  titulo:'Prepara la salsa de jitomate',

  descripcion:
  'Licúa el jitomate, la cebolla y media taza de agua hasta obtener una salsa uniforme.',

  tiempo:'5 minutos',

  consejo:
  'Busca una mezcla líquida sin trozos grandes para que la sopa tenga mejor textura.',

  porQue:
  'La salsa será la base del sabor principal de la sopa.',

  mensajeChef:
  'Los ingredientes sencillos pueden crear sabores profundos cuando se preparan correctamente.',

objetivo:
'Eliminar el sabor crudo del jitomate y concentrar aromas.',

  nivelImportancia:
  'clave',

  chefPregunta:
  '¿Por qué cocinamos la salsa antes de agregar el agua?',

  respuestaEsperada:
  'Porque así desarrollamos más sabor y eliminamos el sabor crudo del jitomate.',

  señalCorrecta:
  'La salsa tiene textura uniforme y color intenso.',

  errorEvitar:
  'Agregar la pasta sin haber desarrollado primero el sabor de la salsa.'
},


{
  numero:3,

  titulo:'Cocina la base de sabor',

  descripcion:
  'Calienta el aceite en una olla a fuego medio. Agrega la salsa con cuidado y cocina durante 5 a 7 minutos hasta que el jitomate pierda su color brillante y la salsa tenga aroma cocido.',

  tiempo:'7 minutos',

  consejo:
  'Mueve ocasionalmente para evitar que la salsa se pegue.',

  porQue:
  'La cocción concentra los sabores del jitomate y la cebolla.',

  mensajeChef:
  'Aquí se construye el corazón de la sopa.',

  nivelImportancia:
  'critico',

  señalCorrecta:
  'La salsa tiene un aroma agradable y un color más profundo.',

  errorEvitar:
  'Cocinar poco la salsa y terminar con una sopa sin sabor.'
},


{
  numero:4,

  titulo:'Forma el caldo',

  descripcion:
  'Agrega aproximadamente un litro de agua caliente y mezcla con la salsa de jitomate.',

  tiempo:'2 minutos',

  consejo:
  'Usar agua caliente ayuda a mantener el ritmo de cocción.',

  porQue:
  'La temperatura estable permite que la sopa cocine de manera uniforme.',

  mensajeChef:
  'Cada paso prepara el camino para el siguiente.',

  señalCorrecta:
  'El caldo tiene un color uniforme y comienza a calentarse.',

  errorEvitar:
  'Agregar agua fría y detener la cocción de la preparación.'
},


{
  numero:5,

  titulo:'Agrega la pasta',

  descripcion:
  'Cuando el caldo comience a hervir, añade la pasta y cocina a fuego medio durante 8 a 10 minutos.',

  tiempo:'10 minutos',

  consejo:
  'Revisa la pasta para evitar que se pase de cocción.',

  porQue:
  'La pasta necesita entrar cuando el caldo está listo para cocinarla correctamente.',

  mensajeChef:
  'El tiempo es uno de los ingredientes invisibles de la cocina.',

  objetivo:
  'Conseguir una pasta suave pero con buena textura.',

  nivelImportancia:
  'clave',

  chefPregunta:
  '¿Por qué esperamos a que hierva el caldo antes de poner la pasta?',

  respuestaEsperada:
  'Porque así la pasta empieza su cocción correctamente y no queda aguada.',

  señalCorrecta:
  'La pasta está suave pero mantiene su forma.',

  errorEvitar:
  'Cocinar demasiado tiempo porque la pasta puede deshacerse.'
},


{
  numero:6,

  titulo:'Ajusta el sabor y sirve',

  descripcion:
  'Prueba la sopa, agrega sal si es necesario y deja reposar unos minutos antes de servir.',

  tiempo:'3 minutos',

  consejo:
  'El reposo permite que los sabores se integren mejor.',

  porQue:
  'Una revisión final ayuda a corregir el punto de sabor.',

  mensajeChef:
  'Felicidades. Preparaste una sopa económica, rendidora y casera.',

  señalCorrecta:
  'El caldo tiene buen sabor, la pasta está cocida y la sopa está lista.',

  errorEvitar:
  'Servir inmediatamente sin revisar el sabor final.'
}

],

  tip:
    'Si quieres ahorrar más, puedes usar tomate verde (tomatillo) cuando el jitomate esté caro; cambia el sabor pero sigue funcionando bien.',

  ahorro:
    'La pasta es uno de los ingredientes más económicos por porción y rinde mucho en sopas familiares.',

  errorComun:
    'Agregar la pasta antes de que el agua hierva o no cocinar suficiente la salsa base, lo que deja la sopa sin sabor.',
};
    