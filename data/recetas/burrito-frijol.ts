import type {Receta}from '@/types/receta';
export const BURRITO_FRIJOL:Receta={

  id: 'burrito-frijol',
  titulo: 'Burrito de frijol y queso',
   imagen: require('../../assets/images/recetas/burrito-frijol.webp'),
  descripcion:
    'Comida rápida, económica y muy rendidora. Perfecta para llevar o comer en casa cuando quieres algo llenador con pocos ingredientes.',

  categoria: 'comida',
  rolCulinario: 'plato_principal',
  porciones: 2,
  tiempoMinutos: 12,
  dificultad: 'facil',

ingredientes:[
 {
 id:'tortilla_maiz',
  cantidad:2,
  unidad:'pieza'
 },

 {
  id:'frijol_bayo',
  cantidad:0.15,
  unidad:'kg'
 },

 {
 id:'queso_oaxaca',
  cantidad:0.05,
  unidad:'kg'
 },

 {
  id:'jitomate',
  cantidad:0.06,
  unidad:'kg'
 },

{
 id:'salsa_roja',
 cantidad:0.050,
 unidad:'kg'
}
],

pasos: [

{
  numero:1,

  titulo:'Prepara los frijoles',

  descripcion:
  'Calienta los frijoles en un sartén a fuego medio durante 2 a 3 minutos hasta que estén suaves y fáciles de untar.',

  tiempo:'3 minutos',

  consejo:
  'Si los frijoles están muy espesos puedes agregar una pequeña cantidad de agua para mejorar la textura.',

  porQue:
  'La textura de los frijoles será la base del burrito. Deben quedar cremosos para que se integren con la tortilla.',

  mensajeChef:
  'Un buen burrito empieza con una buena base. La sencillez también tiene técnica.',

  señalCorrecta:
  'Los frijoles están calientes, suaves y se pueden untar fácilmente.',

  errorEvitar:
  'Usar frijoles fríos porque pueden romper la tortilla al intentar enrollar.'
},


{
  numero:2,

  titulo:'Mejora la textura de los frijoles',

  descripcion:
  'Machaca ligeramente los frijoles mientras se calientan para obtener una textura más cremosa.',

  tiempo:'2 minutos',

  consejo:
  'No es necesario hacerlos puré completamente. Una textura con pequeños trozos aporta más sabor.',

  porQue:
  'Una textura cremosa ayuda a que todos los ingredientes se mantengan unidos dentro del burrito.',

  mensajeChef:
  'Aquí estás transformando un ingrediente sencillo en algo especial.',

  objetivo:
  'Conseguir una textura fácil de untar.',

  nivelImportancia:
  'clave',

  chefPregunta:
  '¿Por qué buscamos una textura cremosa en los frijoles?',

  respuestaEsperada:
  'Porque ayuda a unir los ingredientes y evita que el burrito se desarme.',

  señalCorrecta:
  'Los frijoles se pueden extender sin dificultad.',

  errorEvitar:
  'Dejar los frijoles demasiado secos.'
},


{
  numero:3,

  titulo:'Calienta las tortillas',

  descripcion:
  'Calienta las tortillas en un comal o sartén durante 30 a 60 segundos por lado para que sean flexibles.',

  tiempo:'2 minutos',

  consejo:
  'Una tortilla caliente será más fácil de doblar y tendrá mejor sabor.',

  porQue:
  'El calor permite que la tortilla sea más resistente al enrollar.',

  mensajeChef:
  'Los pequeños detalles hacen la diferencia entre un burrito que se rompe y uno perfecto.',

  señalCorrecta:
  'La tortilla está caliente y flexible.',

  errorEvitar:
  'Intentar enrollar una tortilla fría porque puede quebrarse.'
},


{
  numero:4,

  titulo:'Arma el relleno',

  descripcion:
  'Coloca la tortilla en una superficie limpia y agrega una capa uniforme de frijoles, queso, jitomate y salsa.',

  tiempo:'3 minutos',

  consejo:
  'No pongas demasiado relleno. Un burrito equilibrado se enrolla mejor.',

  porQue:
  'La distribución correcta permite que cada mordida tenga todos los sabores.',

  mensajeChef:
  'La cocina también es equilibrio. No se trata de llenar, sino de combinar.',

  objetivo:
  'Distribuir correctamente los ingredientes.',

  nivelImportancia:
  'clave',

  señalCorrecta:
  'Los ingredientes están centrados y tienen una cantidad equilibrada.',

  errorEvitar:
  'Poner demasiado relleno en los extremos.'
},


{
  numero:5,

  titulo:'Enrolla el burrito correctamente',

  descripcion:
  'Dobla primero los lados de la tortilla y después enrolla hacia adelante formando un paquete cerrado.',

  tiempo:'2 minutos',

  consejo:
  'Presiona ligeramente mientras enrollas para mantener la forma.',

  porQue:
  'La técnica de cerrado evita que los ingredientes se salgan al comer.',

  mensajeChef:
  'Este movimiento parece simple, pero es una habilidad básica de cocina.',

  nivelImportancia:
  'critico',

  chefPregunta:
  '¿Por qué doblamos primero los lados antes de enrollar?',

  respuestaEsperada:
  'Porque ayuda a contener el relleno y evita que salga por los extremos.',

  señalCorrecta:
  'El burrito mantiene su forma y está cerrado.',

  errorEvitar:
  'Enrollar sin doblar los lados.'
},


{
  numero:6,

  titulo:'Dora y sirve',

  descripcion:
  'Opcionalmente coloca el burrito en el comal durante 1 a 2 minutos por lado para dorarlo ligeramente. Sirve caliente.',

  tiempo:'3 minutos',

  consejo:
  'Dorar la tortilla agrega aroma y una textura más agradable.',

  porQue:
  'El calor exterior mejora la experiencia final del burrito.',

  mensajeChef:
  'Felicidades. Convertiste ingredientes económicos en una comida completa.',

  señalCorrecta:
  'La tortilla tiene un ligero dorado y el relleno está caliente.',

  errorEvitar:
  'Dejar demasiado tiempo porque la tortilla puede endurecerse.'
}

],

  tip:
    'Si usas frijoles del día anterior, ahorras gas y el sabor es incluso mejor.',

  ahorro:
    'Es una de las comidas más económicas porque combina proteína vegetal con ingredientes básicos de la canasta mexicana.',

  errorComun:
    'No calentar la tortilla antes de enrollar hace que se rompa fácilmente y el burrito se desarme.',
};
