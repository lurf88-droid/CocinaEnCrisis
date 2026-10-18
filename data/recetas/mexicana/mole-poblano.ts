import type { Receta } from '@/types/receta';


export const MOLE_POBLANO: Receta = {


id:'mole-poblano',


titulo:'Mole poblano con pollo',


imagen: require(
'../../../assets/images/recetas/mole-poblano.webp'
),


descripcion:
'Una de las preparaciones más representativas de México. El mole poblano combina chiles, especias, semillas, frutos secos y chocolate para crear una salsa compleja llena de historia y técnica culinaria.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


tecnicaPrincipal:
'tostado, molienda, colado y cocción lenta',


nivelChef:4,



categoria:'comida',



porciones:6,


tiempoMinutos:180,


dificultad:'avanzada',



ingredientes:[


{
id:'pollo_entero',
cantidad:1,
unidad:'pieza'
},


{
id:'chile_mulato',
cantidad:4,
unidad:'pieza'
},


{
id:'chile_ancho',
cantidad:4,
unidad:'pieza'
},


{
id:'chile_pasilla',
cantidad:3,
unidad:'pieza'
},


{
id:'almendra',
cantidad:0.080,
unidad:'kg'
},


{
id:'cacahuate',
cantidad:0.080,
unidad:'kg'
},


{
id:'ajonjoli',
cantidad:0.050,
unidad:'kg'
},


{
id:'canela',
cantidad:1,
unidad:'pieza'
},


{
id:'clavo',
cantidad:3,
unidad:'pieza'
},
{
 id:'caldo_de_pollo',
 cantidad:1,
 unidad:'litro'
},

{
id:'chocolate_mesa',
cantidad:0.100,
unidad:'kg'
},


{
id:'cebolla_blanca',
cantidad:0.100,
unidad:'kg'
},


{
id:'ajo',
cantidad:3,
unidad:'pieza'
},


{
id:'sal',
cantidad:0.010,
unidad:'kg'
},


],



aprendizajes:[

' tostado de especias',

'desarrollo de capas de sabor',

'equilibrio dulce-amargo-picante',

'uso tradicional de chiles',

'paciencia culinaria'

],
pasos:[


{

numero:1,

titulo:'Prepara y organiza todos los ingredientes',

descripcion:
'Antes de comenzar, separa los chiles, semillas, especias, frutos secos y demás ingredientes. Retira semillas y venas de los chiles según el nivel de picante deseado.',

tiempo:'20 minutos',

consejo:
'El mole tiene muchas etapas. La organización evita errores y permite disfrutar el proceso.',

porQue:
'En cocina profesional esto se conoce como mise en place. Una preparación compleja necesita orden.',

mensajeChef:
'Los grandes platillos no empiezan con el fuego, empiezan con la preparación.',

señalCorrecta:
'Todos los ingredientes están identificados y listos para trabajar.',

errorEvitar:
'Empezar a cocinar sin tener todo preparado.'
},



{

numero:2,

titulo:'Tuesta los chiles correctamente',

descripcion:

'Calienta ligeramente los chiles secos en un comal o sartén. Retira tallos y semillas según el nivel de picante deseado. Después hidrátalos en agua caliente hasta que estén suaves y reserva parte del líquido de hidratación para ayudar a licuar la salsa.',

tiempo:'15 minutos',

consejo:
'El tostado debe ser rápido. Un chile quemado aporta amargor desagradable.',

porQue:
'El calor despierta aromas y desarrolla sabores más profundos.',

mensajeChef:
'El fuego puede crear sabor o destruirlo. La diferencia está en el control.',

señalCorrecta:

'Los chiles desprenden aroma tostado, están suaves después de hidratarse y conservan un color profundo sin notas quemadas.',

errorEvitar:
'Dejar los chiles demasiado tiempo y quemarlos.'
},



{

numero:3,

titulo:'Desarrolla las capas de sabor',

descripcion:
'Tosta por separado semillas, frutos secos, especias y otros ingredientes. Después licúa junto con los chiles hidratados hasta obtener una salsa uniforme.',

tiempo:'40 minutos',

consejo:
'Cada ingrediente tiene su propio punto de tostado.',

porQue:
'Separar procesos permite controlar mejor cada sabor.',

mensajeChef:
'La complejidad nace de pequeños detalles bien ejecutados.',

señalCorrecta:
'La mezcla tiene aroma profundo y textura espesa.',

errorEvitar:
'Tostar todo junto porque algunos ingredientes pueden quemarse antes que otros.'
},




{
numero:4,

titulo:'Cocina y transforma la salsa',

descripcion:

'Licúa la mezcla de chiles, semillas, frutos secos y especias hasta obtener una salsa uniforme. Cuela la preparación para eliminar fibras y obtener una textura fina. Después fríe la pasta de mole con grasa y cocina lentamente agregando caldo hasta lograr la consistencia deseada.',

tiempo:'90 minutos',

consejo:

'El colado mejora la textura del mole. La cocción lenta permite que los sabores se integren y desarrollen profundidad.',

porQue:

'Colar elimina partículas que pueden sentirse ásperas en boca. Freír la salsa concentra aromas y la cocción prolongada une todos los sabores.',

mensajeChef:
'La paciencia es una técnica culinaria.',

señalCorrecta:

'El mole tiene una textura sedosa, brillo natural y cubre ligeramente la cuchara sin sentirse pesado.',

errorEvitar:

'Servir el mole sin suficiente cocción o dejar una textura arenosa por no colarlo correctamente.',

},

{
numero:5,

titulo:'Equilibra el mole',

descripcion:
'Agrega chocolate y ajusta sal según sea necesario. El objetivo es lograr equilibrio entre chile, especias, dulzor y amargor.',

tiempo:'15 minutos',

consejo:
'El chocolate no debe dominar. Solo debe aportar profundidad.',

porQue:
'El equilibrio es una de las habilidades principales de un chef.',

mensajeChef:
'Un gran plato no tiene un solo sabor protagonista: tiene armonía.',

señalCorrecta:
'El mole tiene profundidad, pero ningún sabor sobresale demasiado.',

errorEvitar:
'Agregar demasiado chocolate pensando que debe quedar dulce.'
},



{

numero:6,

titulo:'Integra el pollo con el mole y presenta el plato',

descripcion:

'Integra el pollo cocido con el mole caliente dejando que la salsa cubra la proteína. Sirve acompañado de arroz, ajonjolí tostado o tortillas según la tradición mexicana.',

tiempo:'10 minutos',

consejo:

'No inundes el plato con mole. La salsa debe acompañar al pollo y permitir apreciar sus sabores.',

porQue:

'La proporción entre proteína y salsa determina el equilibrio final del plato. Una buena presentación permite disfrutar todas las capas de sabor.',

mensajeChef:

'El mole no es solamente una salsa; es una construcción de sabores donde cada ingrediente tiene una función.',

señalCorrecta:

'El pollo queda completamente integrado con el mole, la salsa tiene brillo y textura sedosa, y cada bocado mantiene equilibrio entre carne y salsa.',

errorEvitar:

'Servir demasiado mole o dejar la salsa demasiado espesa, ocultando la textura y sabor del pollo.'
},
],
historiaChef:
'El mole poblano es una de las expresiones más complejas de la cocina mexicana. Su preparación reúne ingredientes indígenas y técnicas desarrolladas durante siglos.',


trucoChef:
'Guardar el mole reposado unas horas o incluso un día puede mejorar la integración de sabores.',


tip:
'Si preparas una cantidad grande puedes congelarlo en porciones pequeñas y tener una base culinaria lista.',


sustituciones:[

{
falta:'chiles secos tradicionales',
reemplazo:'mezcla de chiles disponibles ajustando picor y sabor'
},

{
falta:'almendra',
reemplazo:'más cacahuate o semillas disponibles'
}

],
}