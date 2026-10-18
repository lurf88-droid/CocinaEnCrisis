import type { Receta } from '@/types/receta';


export const TINGA_POLLO: Receta = {


id:'tinga-pollo',


titulo:'Tinga de pollo tradicional',


imagen: require(
'../../../assets/images/recetas/tinga-pollo.webp'
),


descripcion:
'Un clásico mexicano donde el pollo cocido se transforma con una salsa de jitomate, cebolla y chile chipotle. Una receta perfecta para aprender cocción de proteínas, reducción de sabores y equilibrio culinario.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


tecnicaPrincipal:
'cocción lenta y reducción de salsa',


nivelChef:2,



categoria:'comida',
rolCulinario: 'plato_principal',



// 👥 DATOS

porciones:4,


tiempoMinutos:50,


dificultad:'media',



ingredientes:[


{
id:'pechuga_pollo',
cantidad:0.500,
unidad:'kg'
},


{
id:'jitomate',
cantidad:0.500,
unidad:'kg'
},


{
id:'cebolla_blanca',
cantidad:0.200,
unidad:'kg'
},


{
id:'ajo',
cantidad:2,
unidad:'pieza'
},


{
 id:'chipotle_adobado_lata',
 cantidad:0.03,
 unidad:'kg'
},
{
id:'aceite_vegetal',
cantidad:0.030,
unidad:'litro'
},


{
id:'sal',
cantidad:0.005,
unidad:'kg'
}


],



aprendizajes:[

'cocción de proteína',

'deshebrado',

'reducción de salsa',

'equilibrio de sabores'

],



pasos:[

{

numero:1,

titulo:'Cocina el pollo correctamente',

descripcion:
'Coloca el pollo en una olla con agua, sal, ajo y un poco de cebolla. Cocina hasta que esté completamente suave y pueda separarse fácilmente.',

tiempo:'25 minutos',

consejo:
'No cocines el pollo a fuego excesivamente fuerte. Una cocción tranquila conserva mejor textura.',

porQue:
'Controlar la temperatura permite que las fibras del pollo se vuelvan suaves sin perder humedad.',

mensajeChef:
'Una proteína bien cocinada es una de las bases de cualquier cocina.',

señalCorrecta:
'El pollo se puede separar fácilmente con un tenedor.',

errorEvitar:
'Usar fuego demasiado alto y obtener un pollo seco.'

},


{

numero:2,

titulo:'Deshebra el pollo',

descripcion:
'Retira el pollo del caldo y deja que baje un poco la temperatura. Después desmenúzalo en tiras delgadas.',

tiempo:'5 minutos',

consejo:
'Busca tiras medianas; demasiado pequeño puede perder textura.',

porQue:
'El tamaño del deshebrado cambia cómo se percibe la salsa y la mordida final.',

mensajeChef:
'La textura también cuenta una historia.',

señalCorrecta:
'Las fibras están separadas pero conservan humedad.',

errorEvitar:
'Desmenuzar mientras está demasiado caliente y quemarte o romper demasiado la carne.'

},


{

numero:3,

titulo:'Construye la salsa de tinga',

descripcion:
'Licúa jitomate, ajo, chipotle y parte de la cebolla. Cocina la mezcla hasta que cambie de color y concentre sabor.',

tiempo:'10 minutos',

consejo:
'Una salsa recién licuada necesita cocción para perder sabores crudos.',

porQue:
'La reducción concentra aromas y crea una salsa más profunda.',

mensajeChef:
'La paciencia transforma ingredientes simples.',

señalCorrecta:
'La salsa tiene color intenso y aroma cocinado.',

errorEvitar:
'Agregar el pollo a una salsa sin cocinar.'

},


{

numero:4,

titulo:'Integra pollo y salsa',

descripcion:
'Agrega el pollo deshebrado a la salsa y cocina a fuego bajo hasta que todos los sabores se integren.',

tiempo:'10 minutos',

consejo:
'Este paso es donde la receta realmente se une.',

porQue:
'El tiempo permite que la proteína absorba los sabores del guiso.',

mensajeChef:
'Una buena receta no solo mezcla ingredientes: crea armonía.',

señalCorrecta:
'El pollo está cubierto por la salsa pero conserva textura.',

errorEvitar:
'Agregar demasiado líquido y perder intensidad de sabor.'

},


{

numero:5,

titulo:'Sirve y transforma',

descripcion:
'Sirve la tinga en tacos, tostadas o acompañada de arroz. Agrega crema, queso o aguacate si tienes disponibles.',

tiempo:'5 minutos',

consejo:
'La misma preparación puede convertirse en diferentes platillos.',

porQue:
'La cocina inteligente busca aprovechar una preparación base de varias formas.',

mensajeChef:
'Una receta puede ser el inicio de muchas posibilidades.',

señalCorrecta:
'El plato tiene equilibrio entre salsa, proteína y acompañamientos.',

errorEvitar:
'Pensar que una preparación solo tiene una forma de servirse.'

}

],



historiaChef:
'La tinga es una preparación mexicana con raíces en Puebla. Su característica principal es combinar pollo deshebrado con una salsa de jitomate, cebolla y chile chipotle.',



trucoChef:
'Agregar una pequeña cantidad del caldo donde se cocinó el pollo ayuda a crear una salsa más integrada.',



tip:
'La tinga del día siguiente suele tener incluso más sabor porque los ingredientes continúan integrándose.',



sustituciones:[

{
falta:'pollo',
reemplazo:'setas, champiñones o carne de cerdo deshebrada'
},

{
falta:'chipotle',
reemplazo:'chile ahumado disponible o mezcla de chile seco'
}

],



chefInicio:
'Hoy aprenderás una técnica fundamental: convertir una proteína sencilla en una preparación llena de identidad.',



chefFinal:
'Excelente trabajo. Ahora sabes que cocinar no es solamente seguir pasos: es entender cómo transformar ingredientes.',



erroresComunes:[

'No cocinar suficiente tiempo la salsa.',

'Secar demasiado el pollo.',

'Usar demasiado chipotle y perder equilibrio.'

],



señalesExito:{

vista:
'El pollo debe estar cubierto por una salsa roja brillante y uniforme.',

olor:
'Debe destacar el aroma del jitomate cocinado, cebolla y chile ahumado.',

textura:
'El pollo debe estar suave y la salsa debe adherirse sin ser líquida.'

},



rescates:[

{
problema:'La tinga quedó seca',

solucion:'Agrega un poco de caldo de pollo y deja integrar a fuego bajo.'
},


{
problema:'Quedó muy picante',

solucion:'Aumenta jitomate, pollo o agrega un elemento cremoso para equilibrar.'
}

],



tags:[

'mexicana',

'pollo',

'tacos',

'guiso',

'tradicional',

'nivel-intermedio'

],



popularidad:98,


};