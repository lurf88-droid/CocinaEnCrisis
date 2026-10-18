import type { Receta } from '@/types/receta';
export const SARDINAS_JITOMATE: Receta = {
     
      id: 'sardinas-jitomate',
      titulo: 'Sardinas en salsa de jitomate',
       imagen: require('../../assets/images/recetas/sardinas-jitomate.webp'),
      descripcion:
        'Cena económica, rápida y nutritiva. Alternativa más barata que el atún cuando el presupuesto es ajustado.',
    
      categoria: 'cena',
      porciones: 2,
      tiempoMinutos: 15,
      dificultad: 'facil',
    
      ingredientes: [
        { id: 'sardina_lata', cantidad: 2, unidad: 'lata' },
        { id: 'jitomate', cantidad: 0.2, unidad: 'kg' },
        {id:'cebolla_blanca',cantidad: 0.04, unidad: 'kg' },
        { id: 'tortilla_maiz', cantidad: 6, unidad: 'pieza' },
        { id: 'aceite_vegetal', cantidad: 0.01, unidad: 'litro' },
      ],
    
     pasos: [

{
  numero:1,

  titulo:'Lava y prepara los ingredientes',

  descripcion:
  'Lava el jitomate y la cebolla antes de comenzar. Organiza todos los ingredientes cerca de tu estación de cocina.',

  tiempo:'3 minutos',

  consejo:
  'Tener todo preparado evita interrupciones durante la cocción.',

  porQue:
  'La organización permite controlar mejor los tiempos y evitar errores.',

  mensajeChef:
  'Una receta económica también merece una buena preparación.',

  señalCorrecta:
  'Los ingredientes están limpios y listos para trabajar.',

  errorEvitar:
  'Empezar a cocinar sin tener preparados los ingredientes.'
},


{
  numero:2,

  titulo:'Prepara la salsa de jitomate',

  descripcion:
  'Corta el jitomate y la cebolla en trozos medianos. Licúalos con media taza de agua hasta obtener una salsa uniforme.',

  tiempo:'5 minutos',

  consejo:
  'No necesitas una salsa perfecta; busca una textura que pueda cocinarse fácilmente.',

  porQue:
  'La salsa será la base de sabor que acompañará a las sardinas.',

  mensajeChef:
  'Aquí comienza la transformación de ingredientes simples en una comida completa.',

  objetivo:
  'Crear una salsa equilibrada para integrar todos los sabores.',

  nivelImportancia:
  'clave',

  chefPregunta:
  '¿Por qué cocinamos la salsa antes de agregar las sardinas?',

  respuestaEsperada:
  'Porque así desarrollamos mejor el sabor del jitomate y la cebolla.',

  señalCorrecta:
  'La salsa tiene una textura uniforme y está lista para cocinar.',

  errorEvitar:
  'Agregar las sardinas desde el inicio porque pueden perder textura.'
},


{
  numero:3,

  titulo:'Cocina la salsa',

  descripcion:
  'Calienta el aceite en una sartén a fuego medio. Agrega la salsa con cuidado y cocina durante 6 a 8 minutos hasta que cambie de color y espese ligeramente.',

  tiempo:'8 minutos',

  consejo:
  'Ten cuidado al agregar la salsa porque puede salpicar con el aceite caliente.',

  porQue:
  'La cocción concentra los sabores y elimina el sabor crudo del jitomate.',

  mensajeChef:
  'La paciencia convierte una salsa sencilla en una buena base de cocina.',

  objetivo:
  'Desarrollar sabor antes de integrar la proteína.',

  nivelImportancia:
  'critico',

  señalCorrecta:
  'La salsa tiene un color más intenso y un aroma agradable.',

  errorEvitar:
  'Usar fuego demasiado alto porque puede quemar la salsa.'
},


{
  numero:4,

  titulo:'Integra las sardinas',

  descripcion:
  'Abre las latas de sardina y agrégalas cuidadosamente a la salsa para evitar romperlas demasiado.',

  tiempo:'3 minutos',

  consejo:
  'Mezcla con suavidad para conservar la textura de la sardina.',

  porQue:
  'La sardina ya está cocida, solo necesita calentarse y absorber sabor.',

  mensajeChef:
  'No todos los ingredientes se tratan igual. Aprende a respetar cada uno.',

  señalCorrecta:
  'Las sardinas están calientes y cubiertas por la salsa.',

  errorEvitar:
  'Mover demasiado fuerte porque pueden deshacerse.'
},


{
  numero:5,

  titulo:'Integra los sabores',

  descripcion:
  'Cocina todo junto durante 3 a 5 minutos para que la sardina tome el sabor de la salsa.',

  tiempo:'5 minutos',

  consejo:
  'Mantén fuego bajo para conservar mejor la textura.',

  porQue:
  'Un tiempo corto permite unir sabores sin sobrecocinar el ingrediente principal.',

  mensajeChef:
  'El equilibrio es una de las mayores habilidades de un cocinero.',

  señalCorrecta:
  'La salsa y la sardina tienen un sabor integrado.',

  errorEvitar:
  'Cocinar demasiado tiempo porque la sardina puede perder textura.'
},


{
  numero:6,

  titulo:'Ajusta y prepara las tortillas',

  descripcion:
  'Prueba el sabor y ajusta la sal si es necesario. Calienta las tortillas hasta que estén suaves.',

  tiempo:'3 minutos',

  consejo:
  'Recuerda que la sardina ya contiene sal, prueba antes de agregar más.',

  porQue:
  'Ajustar al final permite controlar mejor el sabor.',

  mensajeChef:
  'Un cocinero siempre prueba antes de servir.',

  señalCorrecta:
  'El sabor está equilibrado y las tortillas están calientes.',

  errorEvitar:
  'Agregar sal sin probar primero.'
},


{
  numero:7,

  titulo:'Sirve y disfruta',

  descripcion:
  'Sirve las sardinas en salsa acompañadas de tortillas recién calentadas. Puedes agregar chile o limón si deseas.',

  tiempo:'1 minuto',

  consejo:
  'Con arroz puedes convertirlo en una comida más completa.',

  porQue:
  'Los acompañamientos ayudan a adaptar una receta sencilla a diferentes necesidades.',

  mensajeChef:
  'Excelente trabajo. Preparaste una comida económica, nutritiva y llena de sabor.',

  señalCorrecta:
  'La salsa está caliente, la sardina conserva textura y el plato está listo.',

  errorEvitar:
  'Dejar reposar demasiado porque pierde temperatura y textura.'
}

],
    
      tip:
        'Si quieres más sabor, puedes agregar chile o limón al final. También puedes acompañar con arroz para hacerlo más rendidor.',
    
      ahorro:
        'La sardina suele ser más barata que el atún y tiene buena proteína por porción, ideal para presupuesto bajo.',
    
      errorComun:
        'Cocinar las sardinas demasiado tiempo puede hacer que se deshagan completamente y pierdan textura.',
    };