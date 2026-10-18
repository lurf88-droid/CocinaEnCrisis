import type { Receta } from '@/types/receta';


export const MACHACA_HUEVO_CHIAPACORCENA: Receta = {


id:'machaca-huevo-chiapacorcena',


titulo:'Machaca con huevo chiapacorceña',


imagen: require(

'../../../../assets/images/recetas/desayunos_mexicanos/chiapas/machaca-huevo-chiapacorcena.webp'

),


descripcion:

'Desayuno tradicional asociado con Chiapa de Corzo preparado con carne seca de res deshebrada o machacada y huevo. La carne se saltea con ingredientes frescos antes de incorporar el huevo, creando una preparación sustanciosa que se sirve caliente con tortillas de maíz.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Chiapa de Corzo',

estadoOrigen:'Chiapas',

tradicion:'cocina tradicional chiapacorceña de mercado y desayunos a base de carne seca y huevo'

},


tecnicaPrincipal:

'deshebrado de carne seca, salteado, control de humedad y coagulación de huevo',



// 🎯 CLASIFICACIÓN

nivelChef:2,


categoria:'desayuno',


porciones:4,


tiempoMinutos:25,


dificultad:'facil',



// 🧺 INGREDIENTES

ingredientes:[


{

id:'carne_seca_res',

cantidad:0.180,

unidad:'kg'

},


{

id:'huevo',

cantidad:6,

unidad:'pieza'

},


{

id:'cebolla_blanca',

cantidad:0.080,

unidad:'kg'

},


{

id:'jitomate',

cantidad:0.180,

unidad:'kg'

},


{

id:'chile_serrano',

cantidad:1,

unidad:'pieza'

},


{

id:'aceite_vegetal',

cantidad:0.020,

unidad:'litro'

},


{

id:'sal',

cantidad:0.002,

unidad:'kg'

},


{

id:'tortilla_maiz',

cantidad:8,

unidad:'pieza'

}


],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'manejo culinario de carne seca de res',

'control del contenido de sal antes de sazonar',

'orden correcto de incorporación durante un salteado',

'control de humedad del jitomate',

'coagulación correcta del huevo',

'equilibrio entre carne y huevo',

'identidad culinaria tradicional de Chiapa de Corzo'

],



// 👨‍🍳 PASOS

pasos:[


{

numero:1,

titulo:'Prepara la carne seca',

descripcion:

'Deshebra o machaca la carne seca hasta obtener fibras pequeñas y manejables. Prueba una pequeña porción para conocer su intensidad de sal antes de comenzar a cocinar.',

tiempo:'4 minutos',

consejo:

'No agregues sal a la preparación antes de probar la carne seca.',

porQue:

'La carne seca ya puede contener una cantidad considerable de sal debido a su proceso de conservación.',

mensajeChef:

'Antes de sazonar debemos conocer lo que cada ingrediente ya aporta.',

objetivo:

'Obtener carne en fibras pequeñas y conocer su nivel de salinidad.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué probamos la carne antes de agregar sal?',

respuestaEsperada:

'Porque la carne seca ya contiene sal y podríamos salar demasiado la preparación.',

señalCorrecta:

'La carne está separada en fibras pequeñas y puede distribuirse fácilmente durante el salteado.',

errorEvitar:

'Agregar sal automáticamente sin probar primero la carne.'

},



{

numero:2,

titulo:'Prepara los ingredientes frescos',

descripcion:

'Pica finamente la cebolla y el chile serrano. Corta el jitomate en cubos pequeños procurando conservar su pulpa y jugos.',

tiempo:'4 minutos',

consejo:

'Procura que los cortes tengan un tamaño similar para conseguir una cocción uniforme.',

porQue:

'Un corte regular permite que los ingredientes se cocinen de manera más pareja y se distribuyan mejor entre la carne y el huevo.',

mensajeChef:

'Un buen corte no es solamente presentación; también controla la cocción.',

objetivo:

'Tener todos los ingredientes preparados antes de comenzar el salteado.',

nivelImportancia:'clave',

señalCorrecta:

'La cebolla, el chile y el jitomate tienen cortes pequeños y relativamente uniformes.',

errorEvitar:

'Comenzar a cocinar mientras todavía faltan ingredientes por cortar.'

},



{

numero:3,

titulo:'Saltea la cebolla y el chile',

descripcion:

'Calienta el aceite en un sartén a fuego medio. Agrega la cebolla y el chile serrano y cocina brevemente hasta que la cebolla comience a suavizarse sin quemarse.',

tiempo:'3 minutos',

consejo:

'El fuego medio permite desarrollar aroma sin dorar demasiado rápido los ingredientes.',

porQue:

'El calor suaviza la cebolla y libera los compuestos aromáticos que formarán la primera capa de sabor.',

mensajeChef:

'Construir sabor significa incorporar cada ingrediente cuando el calor puede aprovecharlo mejor.',

objetivo:

'Crear una base aromática para recibir la carne seca.',

nivelImportancia:'clave',

chefPregunta:

'¿Qué buscamos en la cebolla antes de incorporar la carne?',

respuestaEsperada:

'Que comience a suavizarse y desarrollar aroma sin quemarse.',

señalCorrecta:

'La cebolla luce ligeramente translúcida y desprende un aroma dulce y vegetal.',

errorEvitar:

'Usar fuego excesivamente alto y quemar la cebolla o el chile.'

},



{

numero:4,

titulo:'Saltea la carne seca',

descripcion:

'Incorpora la carne seca deshebrada al sartén y mezcla con la cebolla y el chile. Cocina brevemente hasta que la carne se caliente y comience a desarrollar zonas ligeramente doradas.',

tiempo:'4 minutos',

consejo:

'No prolongues innecesariamente esta etapa; la carne seca puede endurecerse si pierde demasiada humedad.',

porQue:

'Un salteado breve intensifica el aroma de la carne y permite integrarla con la base sin resecar sus fibras.',

mensajeChef:

'Una carne ya procesada no necesita cocinarse como si estuviera cruda; debemos entender el ingrediente que tenemos delante.',

objetivo:

'Integrar y aromatizar la carne manteniendo una textura agradable.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué evitamos cocinar demasiado tiempo la carne seca?',

respuestaEsperada:

'Porque puede perder demasiada humedad y quedar dura.',

señalCorrecta:

'La carne está caliente, aromática y conserva fibras flexibles.',

errorEvitar:

'Freír la carne hasta dejarla excesivamente seca.'

},



{

numero:5,

titulo:'Incorpora el jitomate',

descripcion:

'Agrega el jitomate picado y cocina hasta que comience a suavizarse y libere parte de sus jugos. Continúa la cocción hasta que el exceso de líquido disminuya.',

tiempo:'4 minutos',

consejo:

'No necesitamos convertir el jitomate en una salsa completamente líquida.',

porQue:

'Reducir parte de su humedad concentra el sabor y evita que el huevo termine aguado.',

mensajeChef:

'Controlar el agua de los ingredientes es una de las habilidades más importantes de la cocina.',

objetivo:

'Conseguir jitomate cocido y jugoso sin exceso de líquido libre.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué dejamos reducir parte del líquido antes de agregar el huevo?',

respuestaEsperada:

'Para evitar que el exceso de agua interfiera con la textura del huevo.',

señalCorrecta:

'El jitomate está suave y el fondo del sartén no presenta una gran cantidad de líquido.',

errorEvitar:

'Agregar los huevos cuando el jitomate todavía está liberando demasiada agua.'

},



{

numero:6,

titulo:'Incorpora los huevos',

descripcion:

'Bate ligeramente los huevos en un recipiente y agrégalos al sartén. Mezcla suavemente para distribuirlos entre la carne y los vegetales.',

tiempo:'2 minutos',

consejo:

'Mantén el fuego medio o medio-bajo una vez incorporado el huevo.',

porQue:

'Una temperatura moderada permite controlar la coagulación y evita que el huevo se vuelva seco antes de terminar de cocinarse.',

mensajeChef:

'El huevo cambia rápidamente con el calor; aquí el control vale más que la velocidad.',

objetivo:

'Distribuir uniformemente el huevo alrededor de la carne y los vegetales.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué reducimos el control del fuego al trabajar con huevo?',

respuestaEsperada:

'Porque coagula rápidamente y demasiado calor puede dejarlo seco o gomoso.',

señalCorrecta:

'El huevo comienza a formar cuajos suaves distribuidos por todo el sartén.',

errorEvitar:

'Cocinar el huevo a fuego excesivamente alto.'

},



{

numero:7,

titulo:'Controla el punto del huevo',

descripcion:

'Continúa moviendo suavemente hasta que el huevo esté cocido pero conserve humedad y una textura tierna. Prueba la preparación y agrega sal únicamente si realmente es necesaria.',

tiempo:'2 minutos',

consejo:

'Retira el sartén del fuego ligeramente antes de que el huevo parezca completamente seco; el calor residual continuará cocinándolo.',

porQue:

'Los alimentos continúan recibiendo calor del recipiente incluso después de apagar el fuego.',

mensajeChef:

'Aprender a anticipar el punto final distingue cocinar por reloj de cocinar por observación.',

objetivo:

'Obtener huevo completamente coagulado pero suave y jugoso.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué retiramos el huevo antes de que parezca completamente seco?',

respuestaEsperada:

'Porque el calor residual continuará cocinándolo durante algunos instantes.',

señalCorrecta:

'El huevo está cuajado, brillante y húmedo, sin líquido crudo visible.',

errorEvitar:

'Esperar hasta que el huevo esté completamente seco dentro del sartén.'

},



{

numero:8,

titulo:'Calienta las tortillas y sirve',

descripcion:

'Calienta las tortillas de maíz sobre un comal y sirve inmediatamente la machaca con huevo acompañada de las tortillas calientes.',

tiempo:'2 minutos',

consejo:

'Sirve en cuanto el huevo alcance su punto para aprovechar su mejor textura.',

porQue:

'El huevo continúa perdiendo humedad conforme permanece caliente, mientras una tortilla recién calentada conserva mejor su flexibilidad y aroma.',

mensajeChef:

'Una preparación también tiene su momento correcto para llegar a la mesa.',

objetivo:

'Servir un desayuno caliente donde carne, huevo y tortilla mantengan sus mejores texturas.',

nivelImportancia:'normal',

señalCorrecta:

'La machaca permanece jugosa y las tortillas están calientes y flexibles.',

errorEvitar:

'Dejar reposar demasiado tiempo el huevo dentro del sartén caliente.'

}

],



// 💡 INFORMACIÓN EXTRA

tip:

'Prueba siempre la carne seca antes de cocinar. Dos productos aparentemente iguales pueden tener niveles de sal muy diferentes.',


ahorro:

'La carne seca tiene un sabor concentrado, por lo que una cantidad moderada puede distribuirse entre varios huevos y producir un desayuno abundante para varias personas.',


errorComun:

'Agregar sal desde el principio y cocinar demasiado la carne o el huevo, obteniendo una preparación salada y seca.',



tags:[

'chiapas',

'chiapa_de_corzo',

'chiapacorceno',

'machaca',

'carne_seca',

'huevo',

'desayuno_mexicano',

'mercado_tradicional',

'tradicional'

],


tipoComida:'llenadora',


popularidad:84,


historiaChef:

'La machaca con huevo forma parte del repertorio culinario tradicional documentado en Chiapa de Corzo. Su presencia dentro de la cocina local muestra cómo una técnica de conservación como el secado de la carne puede integrarse con un ingrediente cotidiano como el huevo para producir un desayuno sencillo, sustancioso y ligado a la vida de mercado.',


trucoChef:

'Cuando agregues el huevo, extiende primero la mezcla de carne y vegetales uniformemente por el sartén. Así el huevo encontrará carne en toda la superficie y no terminarás con zonas de puro huevo y otras demasiado cargadas.',


momento:'rapido',


ocasion:[

'diario',

'familia'

],


sustituciones:[

{

falta:'carne_seca_res',

reemplazo:'carne de res cocida y deshebrada; funciona técnicamente pero pierde el carácter salado y concentrado de la machaca tradicional'

},

{

falta:'chile_serrano',

reemplazo:'puede omitirse si se desea una preparación sin picante'

},

{

falta:'jitomate',

reemplazo:'puede prepararse sin jitomate, aunque cambia la humedad y el perfil de la versión propuesta'

}

],


chefInicio:

'Hoy viajamos a Chiapa de Corzo para trabajar con una técnica que nació mucho antes de la refrigeración moderna: conservar carne mediante secado. Vamos a descubrir cómo controlar su salinidad, devolverle protagonismo mediante un salteado y combinarla con huevo sin resecar ninguno de los dos.',


chefFinal:

'Aprendiste que cocinar carne seca no significa tratarla como carne fresca. Controlaste salinidad, humedad, temperatura y coagulación del huevo mientras conociste un desayuno asociado con la tradición culinaria de Chiapa de Corzo.',


señalesExito:{

vista:

'Huevo suavemente cuajado distribuido entre fibras visibles de carne seca, jitomate, cebolla y pequeños fragmentos de chile.',

olor:

'Aroma intenso de carne salteada acompañado por cebolla, jitomate cocido y maíz caliente de las tortillas.',

textura:

'Carne fibrosa pero agradable, huevo suave y húmedo, vegetales tiernos y tortillas calientes y flexibles.'

},


rescates:[

{

problema:'La carne seca está demasiado salada',

solucion:

'Reduce o elimina completamente la sal adicional. Si la intensidad sigue siendo excesiva, utiliza una menor proporción de carne y aumenta ligeramente el huevo o los vegetales.'

},

{

problema:'La carne quedó demasiado dura',

solucion:

'Agrega una pequeña cantidad de agua, tapa brevemente el sartén y cocina a fuego bajo para ayudar a suavizar las fibras antes de continuar.'

},

{

problema:'El jitomate dejó demasiado líquido',

solucion:

'Espera antes de incorporar el huevo y cocina destapado hasta evaporar parte del exceso de humedad.'

},

{

problema:'El huevo está comenzando a secarse',

solucion:

'Retira inmediatamente el sartén del fuego y transfiere la preparación a otro recipiente para detener la cocción residual.'

},

{

problema:'La preparación quedó demasiado picante',

solucion:

'Retira los fragmentos visibles de chile que puedas y acompaña con más tortilla. En la siguiente preparación reduce la cantidad de chile desde el inicio.'

}

]


};