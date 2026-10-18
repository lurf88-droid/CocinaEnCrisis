import type { Receta } from '@/types/receta';
export const SINCRONIZADAS: Receta = {
    
  id: 'sincronizadas',
  titulo: 'Sincronizadas de jamón y queso',
  imagen: require('../../assets/images/recetas/sincronizadas.webp'),
  descripcion:
    'Cena rápida, económica y rendidora. Perfecta cuando tienes pocos ingredientes y quieres algo caliente en minutos.',

  categoria: 'cena',
  rolCulinario: 'plato_principal',
  porciones: 2,
  tiempoMinutos: 10,
  dificultad: 'facil',

  ingredientes: [
    { id:'tortilla_maiz', cantidad: 4, unidad: 'pieza' },
    { id:'jamon_cocido', cantidad: 0.08, unidad: 'kg' },
    { id:'queso_oaxaca', cantidad: 0.1, unidad: 'kg' },
    { id: 'jitomate', cantidad: 0.08, unidad: 'kg' },
    { id:'aceite_vegetal', cantidad: 0.01, unidad: 'litro' },
  ],

pasos: [

{
  numero:1,

  titulo:'Prepara los ingredientes',

  descripcion:
  'Lava el jitomate y córtalo en rebanadas delgadas. Ten listas las tortillas y el queso antes de comenzar.',

  tiempo:'3 minutos',

  consejo:
  'Preparar todo antes de cocinar hace que el proceso sea más rápido y ordenado.',

  porQue:
  'Una buena organización evita errores y ayuda a controlar mejor los tiempos.',

  mensajeChef:
  'Incluso una receta rápida comienza con una buena preparación.',

  objetivo:
  'Tener todos los ingredientes listos antes de usar el fuego.',

  nivelImportancia:
  'clave',

  chefPregunta:
  '¿Por qué un cocinero prepara todo antes de cocinar?',

  respuestaEsperada:
  'Porque puede concentrarse en la cocción y evitar interrupciones.',

  señalCorrecta:
  'Todos los ingredientes están cortados y disponibles.',

  errorEvitar:
  'Buscar ingredientes mientras la tortilla ya está calentándose.'
},


{
  numero:2,

  titulo:'Forma la sincronizada',

  descripcion:
  'Coloca una tortilla en una superficie limpia. Agrega queso distribuido uniformemente y después coloca el jitomate.',

  tiempo:'2 minutos',

  consejo:
  'No coloques demasiado relleno porque será difícil cerrar y voltear.',

  porQue:
  'Una cantidad equilibrada permite que el queso se derrita y la tortilla conserve su forma.',

  mensajeChef:
  'La técnica está en encontrar el equilibrio entre cantidad y control.',

  señalCorrecta:
  'El relleno está distribuido sin salir de los bordes.',

  errorEvitar:
  'Poner demasiado queso o ingredientes hasta dificultar el manejo.'
},


{
  numero:3,

  titulo:'Cierra y prepara para cocinar',

  descripcion:
  'Cubre con otra tortilla formando un sándwich plano listo para pasar al comal.',

  tiempo:'1 minuto',

  consejo:
  'Presiona ligeramente para que las tortillas se mantengan juntas.',

  porQue:
  'Cerrar correctamente ayuda a conservar el relleno durante la cocción.',

  mensajeChef:
  'Un buen cocinero piensa también en cómo se moverá el alimento.',

  señalCorrecta:
  'La sincronizada está cerrada y estable.',

  errorEvitar:
  'Dejar espacios abiertos donde pueda escapar el queso.'
},


{
  numero:4,

  titulo:'Cocina en el comal',

  descripcion:
  'Calienta un comal o sartén a fuego medio con unas gotas de aceite. Coloca la sincronizada y cocina ambos lados.',

  tiempo:'5 minutos',

  consejo:
  'El fuego medio es mejor que intentar hacerlo rápido.',

  porQue:
  'El calor moderado permite dorar la tortilla mientras derrite el queso.',

  mensajeChef:
  'Aquí está el secreto: paciencia con el fuego.',

  objetivo:
  'Lograr una tortilla dorada con queso completamente derretido.',

  nivelImportancia:
  'critico',

  chefPregunta:
  '¿Qué pasa si usamos fuego demasiado alto?',

  respuestaEsperada:
  'La tortilla puede quemarse antes de que el queso alcance su punto correcto.',

  señalCorrecta:
  'La tortilla está dorada y el queso suave por dentro.',

  errorEvitar:
  'Cocinar demasiado rápido aumentando la temperatura.'
},


{
  numero:5,

  titulo:'Voltea con cuidado',

  descripcion:
  'Voltea la sincronizada utilizando una espátula para cocinar el otro lado sin perder el relleno.',

  tiempo:'2 minutos',

  consejo:
  'Haz movimientos firmes pero suaves.',

  porQue:
  'El cuidado al voltear mantiene la presentación y evita desperdicios.',

  mensajeChef:
  'Los pequeños movimientos hacen la diferencia.',

  señalCorrecta:
  'Ambos lados tienen color uniforme.',

  errorEvitar:
  'Voltear varias veces porque puede romperse la tortilla.'
},


{
  numero:6,

  titulo:'Sirve y disfruta',

  descripcion:
  'Retira del fuego, corta en triángulos y sirve caliente.',

  tiempo:'1 minuto',

  consejo:
  'Puedes acompañar con salsa, frijoles o chile para hacerla más completa.',

  porQue:
  'Una buena presentación también forma parte de la experiencia de cocinar.',

  mensajeChef:
  'Excelente trabajo. Una receta sencilla puede resolver una comida deliciosa.',

  señalCorrecta:
  'La tortilla está dorada, el queso derretido y el relleno caliente.',

  errorEvitar:
  'Esperar demasiado tiempo porque pierde textura y temperatura.'
}

],

  tip:
    'Si quieres más sabor, puedes agregar frijoles o chile en salsa dentro de la sincronizada.',

  ahorro:
    'Es una de las comidas más baratas por porción porque usa ingredientes básicos que rinden mucho.',

  errorComun:
    'Subir demasiado el fuego, lo que quema la tortilla antes de que el queso se derrita correctamente.',
};