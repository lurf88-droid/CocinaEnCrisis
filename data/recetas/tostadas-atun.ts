import type { Receta } from '@/types/receta';
export const TOSTADAS_ATUN: Receta = {
    
  id: 'tostadas-atun',
  titulo: 'Tostadas de atún',
  imagen: require('../../assets/images/recetas/tostadas-de-atun.webp'),
  descripcion:
    'Cena rápida, fresca y alta en proteína. Ideal cuando no quieres cocinar y necesitas algo nutritivo en minutos.',

  categoria: 'cena',
  rolCulinario: 'plato_principal',
  porciones: 2,
  tiempoMinutos: 8,
  dificultad: 'facil',

  ingredientes: [
    {
id:'atun_lata',
cantidad:1,
unidad:'pieza'
},
  {
id:'tostada_maiz',
cantidad:6,
unidad:'pieza'
},
    { id: 'jitomate', cantidad: 0.1, unidad: 'kg' },
  {
id:'cebolla_blanca',
cantidad:0.030,
unidad:'kg'
},
{ id: 'limon', cantidad: 0.06, unidad: 'kg' },
  {
id:'sal',
cantidad:0.003,
unidad:'kg'
}
  ],

pasos: [

{
  numero:1,

  titulo:'Prepara el atún',

  descripcion:
  'Abre la lata de atún y escúrrelo bien para retirar el exceso de líquido o aceite.',

  tiempo:'2 minutos',

  consejo:
  'Escurrir correctamente evita que la mezcla quede aguada.',

  porQue:
  'Una buena textura comienza eliminando el exceso de humedad.',

  mensajeChef:
  'Incluso una receta rápida necesita atención a los detalles.',

  objetivo:
  'Conseguir una base de atún con buena textura.',

  nivelImportancia:
  'normal',

  señalCorrecta:
  'El atún está separado y no tiene exceso de líquido.',

  errorEvitar:
  'Mezclar el atún sin escurrir porque puede arruinar la consistencia.'
},


{
  numero:2,

  titulo:'Corta los ingredientes frescos',

  descripcion:
  'Pica finamente el jitomate y la cebolla en cubos pequeños para que se mezclen mejor con el atún.',

  tiempo:'3 minutos',

  consejo:
  'Los cortes pequeños ayudan a que todos los sabores aparezcan en cada bocado.',

  porQue:
  'Los ingredientes tienen mejor distribución dentro de la mezcla.',

  mensajeChef:
  'La frescura también se construye con técnica.',

  señalCorrecta:
  'El jitomate y la cebolla tienen tamaños similares.',

  errorEvitar:
  'Cortar trozos demasiado grandes porque se separan de la mezcla.'
},


{
  numero:3,

  titulo:'Mezcla la preparación',

  descripcion:
  'Agrega el jitomate y la cebolla al atún. Añade limón y una pizca de sal.',

  tiempo:'2 minutos',

  consejo:
  'Agrega el limón poco a poco para controlar la acidez.',

  porQue:
  'El equilibrio entre sal, limón y vegetales define el sabor final.',

  mensajeChef:
  'Una receta sencilla también necesita equilibrio.',

  objetivo:
  'Crear una mezcla fresca y balanceada.',

  nivelImportancia:
  'clave',

  chefPregunta:
  '¿Por qué es mejor agregar el limón poco a poco?',

  respuestaEsperada:
  'Porque así podemos controlar el sabor y evitar que quede demasiado ácido.',

  señalCorrecta:
  'La mezcla tiene buen color y todos los ingredientes están integrados.',

  errorEvitar:
  'Agregar demasiado limón desde el inicio sin probar.'
},


{
  numero:4,

  titulo:'Ajusta el sabor',

  descripcion:
  'Prueba la mezcla y corrige sal o limón según sea necesario.',

  tiempo:'1 minuto',

  consejo:
  'Un cocinero siempre prueba antes de servir.',

  porQue:
  'La revisión final permite adaptar la receta al gusto personal.',

  mensajeChef:
  'Probar también es parte de cocinar.',

  señalCorrecta:
  'El sabor está equilibrado entre fresco, ácido y salado.',

  errorEvitar:
  'Agregar más ingredientes sin haber probado primero.'
},


{
  numero:5,

  titulo:'Monta las tostadas',

  descripcion:
  'Coloca la mezcla de atún sobre las tostadas justo antes de comer para conservar lo crujiente.',

  tiempo:'1 minuto',

  consejo:
  'La tostada debe entrar en contacto con la mezcla el menor tiempo posible.',

  porQue:
  'La humedad puede suavizar la tostada y cambiar la textura.',

  mensajeChef:
  'La textura también forma parte del sabor.',

  objetivo:
  'Mantener el contraste entre fresco y crujiente.',

  nivelImportancia:
  'clave',

  chefPregunta:
  '¿Por qué no debemos preparar las tostadas mucho tiempo antes?',

  respuestaEsperada:
  'Porque absorben humedad y pierden su textura crujiente.',

  señalCorrecta:
  'La tostada está firme y la mezcla fresca.',

  errorEvitar:
  'Dejar las tostadas montadas durante mucho tiempo.'
},


{
  numero:6,

  titulo:'Sirve y disfruta',

  descripcion:
  'Sirve inmediatamente. Puedes acompañar con aguacate, chile, pepino o ingredientes disponibles.',

  tiempo:'1 minuto',

  consejo:
  'Aprovecha lo que tengas en casa para adaptar la receta.',

  porQue:
  'La cocina económica consiste en saber aprovechar los recursos disponibles.',

  mensajeChef:
  'Excelente trabajo. Preparaste una comida rápida, fresca y nutritiva.',

  señalCorrecta:
  'La tostada está crujiente y la mezcla tiene buen sabor.',

  errorEvitar:
  'Esperar demasiado después de montarlas.'
}

],

  tip:
    'Si quieres más sabor, puedes agregar aguacate o chile picado. También puedes preparar la mezcla y guardarla en refrigeración, pero siempre monta las tostadas al momento.',

  ahorro:
    'El atún en lata es una de las proteínas más económicas por porción cuando está en oferta.',

  errorComun:
    'Montar las tostadas con anticipación, lo que hace que se ablanden y pierdan textura crujiente.',
};
