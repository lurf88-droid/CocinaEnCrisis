import type { Receta } from '@/types/receta';

export const LASAGNA_CASERA: Receta = {

  id:'lasagna-casera',

  titulo:'Lasaña casera del Chef Luna',

 imagen: require('../../assets/images/recetas/lasagna-casera.webp'),

  descripcion:
  'Una receta especial para compartir en familia. Capas de pasta, salsa y queso explicadas paso a paso para que cualquiera pueda prepararla.',


  categoria:'comida',
rolCulinario: 'plato_principal',
  porciones:6,

  tiempoMinutos:90,

  dificultad:'chef',


  ingredientes:[

    {
    id:'pasta_lasagna',
      cantidad:12,
      unidad:'pieza'
    },

    {
    id:'carne_molida_res',
      cantidad:0.5,
      unidad:'kg'
    },

    {
      id:'jitomate',
      cantidad:0.5,
      unidad:'kg'
    },

    {
      id:'cebolla_blanca',
      cantidad:0.1,
      unidad:'kg'
    },

    {
      id:'ajo',
      cantidad:2,
      unidad:'pieza'
    },

    {
    id:'queso_mozzarella',
      cantidad:0.3,
      unidad:'kg'
    },

    {
      id:'leche_entera',
      cantidad:0.5,
      unidad:'litro'
    },

    {
      id:'harina',
      cantidad:0.04,
      unidad:'kg'
    },

    {
      id:'mantequilla',
      cantidad:0.04,
      unidad:'kg'
    },

  {
id:'sal',
cantidad:0.005,
unidad:'kg'
},

  ],



pasos:[


{
numero:1,

titulo:'Prepara la estación y organiza los ingredientes',

descripcion:
'Antes de cocinar prepara todos los ingredientes. Pica la cebolla y el ajo, mide la carne, prepara los quesos, la leche, la harina y la mantequilla. Ten listo el recipiente donde montarás la lasaña.',

tiempo:'15 minutos',

consejo:
'Una lasaña tiene varias preparaciones al mismo tiempo. Tener todo organizado evita errores y permite concentrarte en cocinar.',

porQue:
'La mise en place es una técnica fundamental de cocina profesional. Cuando todos los ingredientes están preparados puedes controlar mejor los tiempos y temperaturas.',

mensajeChef:
'Una receta compleja se vuelve sencilla cuando divides el trabajo correctamente.',

objetivo:
'Crear una estación organizada antes de iniciar la cocción.',

nivelImportancia:
'critico',

chefPregunta:
'¿Por qué los chefs preparan todos los ingredientes antes de cocinar?',

respuestaEsperada:
'Porque mejora la organización, evita errores y permite controlar mejor cada etapa.',

señalCorrecta:
'Todos los ingredientes están medidos, cortados y listos para utilizar.',

errorEvitar:
'Empezar la receta sin preparar ingredientes y detener la cocción para buscar cosas.'
},

{
numero:2,

titulo:'Construye una salsa de carne profunda',

descripcion:
'Calienta una olla amplia con un poco de aceite. Cocina primero la cebolla hasta que esté transparente, agrega el ajo y después incorpora la carne molida. Cocina hasta que pierda el color rosado y comience a dorarse. Agrega el jitomate y deja reducir lentamente hasta obtener una salsa espesa.',

tiempo:'35 minutos',

consejo:
'No agregues el jitomate demasiado rápido. Primero desarrolla sabor en la carne mediante el dorado.',

porQue:
'El dorado de la carne crea sabores más complejos. La reducción concentra los aromas y evita una lasaña aguada.',

mensajeChef:
'La diferencia entre una salsa normal y una gran salsa está en darle tiempo.',

objetivo:
'Crear una salsa con sabor profundo y textura adecuada para las capas.',

nivelImportancia:
'critico',

chefPregunta:
'¿Por qué debemos reducir la salsa antes de montar la lasaña?',

respuestaEsperada:
'Porque una salsa con exceso de líquido puede hacer que las capas pierdan estructura.',

señalCorrecta:
'La salsa es espesa, tiene color intenso y al moverla deja ver ligeramente el fondo de la olla.',

errorEvitar:
'Usar una salsa demasiado líquida porque la lasaña quedará aguada.'
},

{
numero:3,

titulo:'Prepara la salsa bechamel',

descripcion:
'Derrite la mantequilla a fuego medio. Agrega la harina y mezcla durante unos minutos para formar un roux. Incorpora la leche poco a poco mientras mezclas constantemente hasta obtener una salsa cremosa y sin grumos.',

tiempo:'20 minutos',

consejo:
'La leche debe agregarse lentamente para que el roux pueda absorberla correctamente.',

porQue:
'El roux permite espesar la salsa y crear una textura cremosa que aporta equilibrio al tomate y la carne.',

mensajeChef:
'Las grandes recetas se construyen con pequeñas técnicas dominadas.',

objetivo:
'Crear una salsa cremosa que cubra ligeramente la cuchara.',

nivelImportancia:
'critico',

chefPregunta:
'¿Qué función tiene el roux en la bechamel?',

respuestaEsperada:
'Unir mantequilla y harina para espesar la leche y crear una salsa cremosa.',

señalCorrecta:
'La salsa es suave, cremosa y no tiene grumos.',

errorEvitar:
'Agregar toda la leche de golpe o cocinar a fuego demasiado alto.'
},


{
numero:4,

titulo:'Construye las capas de la lasaña',

descripcion:
'Coloca primero una pequeña cantidad de salsa en el recipiente para evitar que la pasta se pegue. Después agrega pasta, salsa de carne, bechamel y queso. Repite las capas terminando con queso en la superficie.',

tiempo:'20 minutos',

consejo:
'Busca equilibrio. Una buena lasaña no es exceso de relleno, es armonía entre capas.',

porQue:
'La distribución correcta permite que cada porción tenga pasta, salsa, carne y queso.',

mensajeChef:
'La lasaña es una construcción culinaria: cada capa tiene una función.',

objetivo:
'Crear capas uniformes y estables.',

nivelImportancia:
'clave',

señalCorrecta:
'Las capas están distribuidas y no hay zonas completamente secas.',

errorEvitar:
'Poner demasiada salsa en una sola capa.'
},
{
numero:5,

titulo:'Hornea y desarrolla la corteza final',

descripcion:
'Cubre la lasaña inicialmente para conservar humedad. Después termina la cocción descubierta para permitir que el queso se gratine y forme una capa dorada.',

tiempo:'35 minutos',

consejo:
'La temperatura constante es más importante que intentar cocinar más rápido.',

porQue:
'El horno permite que las capas se integren, derrite los quesos y desarrolla aromas finales.',

mensajeChef:
'El horno no solo calienta: transforma.',

objetivo:
'Conseguir una lasaña caliente, estable y gratinada.',

nivelImportancia:
'critico',

señalCorrecta:
'El queso está dorado y al cortar las capas mantienen su forma.',

errorEvitar:
'Cortar inmediatamente al salir del horno.'
},

{
numero:6,

titulo:'Deja reposar antes de servir',

descripcion:
'Retira la lasaña del horno y espera unos minutos antes de cortar las porciones. Esto permite que las capas se estabilicen.',

tiempo:'10 minutos',

consejo:
'El reposo es parte de la receta, no un tiempo perdido.',

porQue:
'Cuando está demasiado caliente las capas todavía están líquidas y pueden separarse.',

mensajeChef:
'La paciencia también termina los platos.',

señalCorrecta:
'Cada porción mantiene sus capas y se puede servir fácilmente.',

errorEvitar:
'Cortar inmediatamente y perder la estructura.'
}
],



tip:
'Puedes preparar la salsa un día antes y la lasaña tendrá todavía más sabor.',


ahorro:
'Comprar ingredientes en temporada y preparar salsa casera ayuda a reducir costos.',


errorComun:
'No dejar suficiente tiempo de cocción o usar demasiado líquido.',





tags:[
'especial',
'familia',
'cumpleaños',
'romantica'
],


tipoComida:'familia',


popularidad:100,


historiaChef:
'Las recetas especiales tienen algo diferente: no solo alimentan, también reúnen personas alrededor de la mesa.',


trucoChef:
'Dejar reposar antes de cortar ayuda a obtener porciones más bonitas.',


momento:'celebrar',


ocasion:[
'especial',
'familia',
'cumpleaños'
]

};