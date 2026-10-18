import type { Receta } from '@/types/receta';
export const CALDO_POLLO_VERDURAS: Receta = {
    
  id: 'caldo-pollo-verduras',
  titulo: 'Caldo de pollo con verduras',
    imagen: require('../../assets/images/recetas/caldo-pollo-verduras.webp'),
  descripcion:
    'Caldo casero rendidor, nutritivo y económico. Ideal para comer varias veces o guardar en el refrigerador o congelador.',

  categoria: 'comida',
  rolCulinario: 'plato_principal',
  porciones: 4,
  tiempoMinutos: 45,
  dificultad: 'media',

  ingredientes: [
   {
 id:'pollo_entero',
 cantidad:0.400,
 unidad:'kg'
},
    { id: 'papa', cantidad: 0.25, unidad: 'kg' },
    { id: 'zanahoria', cantidad: 0.12, unidad: 'kg' },
{
 id:'cebolla_blanca',
 cantidad:0.060,
 unidad:'kg'
},
    { id: 'jitomate', cantidad: 0.15, unidad: 'kg' },
  {
 id:'sal',
 cantidad:0.005,
 unidad:'kg'
}
  ],

 pasos: [

{
  numero:1,

  titulo:'Lava y prepara los ingredientes',

  descripcion:
  'Lava bien todas las verduras antes de comenzar para quitar tierra o impurezas. Organiza todos los ingredientes cerca de tu estación de cocina.',

  tiempo:'5 minutos',

  consejo:
  'Tener todo preparado antes de encender el fuego hace que cocinar sea más seguro y ordenado.',

  porQue:
  'La limpieza y organización son parte fundamental de una buena preparación.',

  mensajeChef:
  'Un buen caldo empieza mucho antes de poner la olla al fuego.',

  señalCorrecta:
  'Tienes las verduras limpias y todos los ingredientes listos.',

  errorEvitar:
  'Empezar a cocinar sin revisar los ingredientes necesarios.'
},


{
  numero:2,

  titulo:'Prepara la base del caldo',

  descripcion:
  'Corta la cebolla en trozos grandes. No es necesario picarla fina porque ayudará a darle sabor al caldo.',

  tiempo:'3 minutos',

  consejo:
  'Los cortes grandes funcionan mejor porque después puedes retirar la cebolla si lo deseas.',

  porQue:
  'La cebolla aporta aroma y sabor sin necesidad de formar parte del plato final.',

  mensajeChef:
  'Los ingredientes sencillos tienen mucho poder cuando se usan correctamente.',

  señalCorrecta:
  'La cebolla está lista para liberar su sabor durante la cocción.',

  errorEvitar:
  'Picar demasiado la cebolla si quieres un caldo limpio.'
},


{
  numero:3,

  titulo:'Cocina el pollo',

  descripcion:
  'Coloca el pollo en una olla grande con suficiente agua para cubrirlo completamente. Agrega cebolla y una pizca de sal. Cocina a fuego medio durante 20 a 25 minutos.',

  tiempo:'25 minutos',

  consejo:
  'Retira la espuma que pueda aparecer en la superficie para obtener un caldo más limpio.',

  porQue:
  'Una cocción lenta permite que el pollo suelte sabor y forme un caldo más rico.',

  mensajeChef:
  'Aquí se construye el corazón de la receta: el sabor del caldo.',

  objetivo:
  'Crear un caldo base con buen sabor.',

  nivelImportancia:
  'critico',

  chefPregunta:
  '¿Por qué no debemos cocinar el pollo con fuego demasiado alto?',

  respuestaEsperada:
  'Porque una cocción controlada ayuda a obtener un caldo con mejor sabor y textura.',

  señalCorrecta:
  'El pollo está suave y completamente cocido.',

  errorEvitar:
  'Cocinar con demasiada intensidad porque puede afectar la claridad del caldo.'
},


{
  numero:4,

  titulo:'Prepara las verduras',

  descripcion:
  'Mientras el pollo se cocina, pela las papas y zanahorias. Córtalas en cubos medianos y corta el jitomate en trozos pequeños.',

  tiempo:'10 minutos',

  consejo:
  'Busca tamaños parecidos para que todas las verduras se cocinen al mismo tiempo.',

  porQue:
  'Los cortes uniformes ayudan a controlar mejor la textura final.',

  mensajeChef:
  'La técnica de corte también es parte del sabor.',

  señalCorrecta:
  'Las verduras tienen tamaños similares y están listas para entrar al caldo.',

  errorEvitar:
  'Hacer cortes demasiado pequeños porque pueden deshacerse.'
},


{
  numero:5,

  titulo:'Integra las verduras al caldo',

  descripcion:
  'Cuando el pollo esté cocido, agrega las papas, zanahorias y jitomate al caldo caliente.',

  tiempo:'20 minutos',

  consejo:
  'Agrega primero las verduras que tardan más en cocinarse.',

  porQue:
  'Cada ingrediente tiene un tiempo diferente de cocción.',

  mensajeChef:
  'Ahora todos los sabores empiezan a trabajar juntos.',

  objetivo:
  'Lograr verduras suaves pero con buena textura.',

  nivelImportancia:
  'clave',

  señalCorrecta:
  'Las verduras están cocidas pero no deshechas.',

  errorEvitar:
  'Cocinar demasiado tiempo porque perderán textura.'
},


{
  numero:6,

  titulo:'Ajusta el sabor final',

  descripcion:
  'Prueba el caldo y ajusta la sal si es necesario. Apaga el fuego y deja reposar unos minutos.',

  tiempo:'5 minutos',

  consejo:
  'El reposo permite que los sabores se integren mejor.',

  porQue:
  'Un buen cocinero siempre prueba y ajusta antes de servir.',

  mensajeChef:
  'La última revisión es donde una receta pasa de buena a excelente.',

  señalCorrecta:
  'El caldo tiene buen sabor y aroma equilibrado.',

  errorEvitar:
  'Agregar demasiada sal sin probar primero.'
},


{
  numero:7,

  titulo:'Sirve y disfruta',

  descripcion:
  'Sirve caliente. Puedes acompañarlo con arroz, tortillas o disfrutarlo solo.',

  tiempo:'2 minutos',

  consejo:
  'Un plato sencillo también merece una buena presentación.',

  porQue:
  'Compartir comida preparada con cuidado también es parte de la experiencia.',

  mensajeChef:
  'Excelente trabajo. Preparaste un caldo casero lleno de sabor y técnica.',

  señalCorrecta:
  'El caldo está caliente, aromático y las verduras mantienen su forma.',

  errorEvitar:
  'Servir sin dejar reposar cuando todavía está demasiado caliente.'
}

],

  tip:
    'Puedes guardar el caldo en el refrigerador hasta 3 días o congelarlo en porciones para otra comida.',

  ahorro:
    'Es un platillo muy económico porque rinde varias porciones y permite reutilizar el caldo en otras comidas.',

  errorComun:
    'Cocinar demasiado las verduras hace que se deshagan y el caldo pierda textura y claridad.',
};