import type { Receta } from '@/types/receta';
export const QUESADILLAS_OAXACA: Receta = {
     
    id: 'quesadillas-oaxaca',
    titulo: 'Quesadillas de Oaxaca',
    imagen: require('../../assets/images/recetas/quesadillas-oaxaca.webp'),
    descripcion:
      'Comida rápida mexicana hecha con tortilla y queso derretido. Ideal cuando tienes pocos ingredientes y poco tiempo.',

    categoria: 'comida',
    rolCulinario: 'plato_principal',
    porciones: 2,
    tiempoMinutos: 8,
    dificultad: 'facil',

    ingredientes: [
      { id:'tortilla_maiz', cantidad: 4, unidad: 'pieza' },
  { id:'queso_oaxaca',cantidad: 0.10, unidad: 'kg' },
     { id:'aceite_vegetal', cantidad: 0.01, unidad: 'litro' },
     {
id:'salsa_roja',
cantidad:0.050,
unidad:'kg'
}
    ],

    pasos: [

{
  numero:1,

  titulo:'Prepara el comal',

  descripcion:
  'Calienta el comal o sartén a fuego medio antes de colocar la tortilla.',

  tiempo:'2 minutos',

  consejo:
  'El comal debe estar caliente pero no humeando.',

  porQue:
  'Una temperatura adecuada permite calentar la tortilla y derretir el queso sin quemarla.',

  mensajeChef:
  'Hasta una quesadilla tiene técnica. El secreto está en controlar el calor.',

  objetivo:
  'Crear una cocción uniforme desde el inicio.',

  nivelImportancia:
  'clave',

  chefPregunta:
  '¿Por qué no debemos usar fuego demasiado alto?',

  respuestaEsperada:
  'Porque la tortilla puede quemarse antes de que el queso logre derretirse.',

  señalCorrecta:
  'El comal está caliente pero la tortilla no se quema al contacto.',

  errorEvitar:
  'Cocinar con fuego muy fuerte intentando terminar más rápido.'
},


{
  numero:2,

  titulo:'Agrega el queso',

  descripcion:
  'Coloca una tortilla en el comal y agrega queso distribuido de manera uniforme.',

  tiempo:'2 minutos',

  consejo:
  'No pongas demasiado queso en el centro porque puede salir al calentarse.',

  porQue:
  'Una distribución pareja ayuda a que todo el queso se derrita al mismo tiempo.',

  mensajeChef:
  'La simplicidad también necesita equilibrio.',

  señalCorrecta:
  'El queso empieza a suavizarse sin salir de la tortilla.',

  errorEvitar:
  'Sobrecargar la quesadilla porque será difícil cerrarla.'
},


{
  numero:3,

  titulo:'Cierra la quesadilla',

  descripcion:
  'Dobla la tortilla por la mitad para encerrar el queso y conservar el calor.',

  tiempo:'1 minuto',

  consejo:
  'Presiona ligeramente para que mantenga su forma.',

  porQue:
  'Cerrar correctamente ayuda a que el queso se derrita en el interior.',

  mensajeChef:
  'Un movimiento sencillo puede cambiar el resultado final.',

  señalCorrecta:
  'La quesadilla está cerrada y mantiene el relleno dentro.',

  errorEvitar:
  'Doblarla demasiado pronto cuando el queso todavía está frío.'
},


{
  numero:4,

  titulo:'Cocina ambos lados',

  descripcion:
  'Cocina la quesadilla por ambos lados hasta que la tortilla esté ligeramente dorada y el queso completamente derretido.',

  tiempo:'3 minutos',

  consejo:
  'Voltea con cuidado para evitar que el queso se salga.',

  porQue:
  'El calor de ambos lados mejora la textura exterior y derrite mejor el queso.',

  mensajeChef:
  'Aquí se encuentra el punto perfecto entre crujiente y suave.',

  objetivo:
  'Lograr una tortilla dorada con queso fundido.',

  nivelImportancia:
  'critico',

  chefPregunta:
  '¿Cómo sabemos que la quesadilla está lista?',

  respuestaEsperada:
  'Cuando la tortilla tiene color dorado y el queso está completamente derretido.',

  señalCorrecta:
  'La tortilla está firme por fuera y suave por dentro.',

  errorEvitar:
  'Dejarla demasiado tiempo porque la tortilla se endurece.'
},


{
  numero:5,

  titulo:'Sirve y acompaña',

  descripcion:
  'Retira del fuego y sirve caliente con salsa u otros acompañamientos disponibles.',

  tiempo:'1 minuto',

  consejo:
  'Puedes agregar frijoles o rajas para convertirla en una comida más completa.',

  porQue:
  'Los acompañamientos pueden aumentar el valor nutricional y el sabor del platillo.',

  mensajeChef:
  'Excelente trabajo. Una receta sencilla puede resolver una comida completa.',

  señalCorrecta:
  'La quesadilla está caliente, el queso suave y lista para comer.',

  errorEvitar:
  'Esperar demasiado porque pierde textura y temperatura.'
}

],

    tip:
      'Si tienes rajas de chile o frijoles, agrégalos para hacerla más completa y rendidora.',

    ahorro:
      'Es una de las comidas más baratas porque solo requiere tortilla y queso, y rinde mucho con poco dinero.',

    errorComun:
      'Dejarla demasiado tiempo en el comal hace que la tortilla se endurezca y el queso pierda suavidad.',
  };