import type { Receta } from '@/types/receta';


export const PICTE_ELOTE_CHIAPANECO: Receta = {


id:'picte-elote-chiapaneco',


titulo:'Picte de elote',


imagen: require(

'../../../../assets/images/recetas/desayunos_mexicanos/chiapas/picte-elote-chiapaneco.webp'

),


descripcion:

'Tamal tradicional chiapaneco elaborado principalmente con granos de elote tierno molidos hasta formar una masa naturalmente dulce, envuelta en hoja de maíz y cocida al vapor. Puede servirse caliente acompañado de crema y queso fresco.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Chiapa de Corzo, Costa de Chiapas y Tonalá',

estadoOrigen:'Chiapas',

tradicion:'cocina chiapaneca de maíz tierno y preparaciones tradicionales al vapor'

},


tecnicaPrincipal:

'molienda de elote tierno, preparación de masa, envoltura en hoja de maíz y cocción al vapor',



// 🎯 CLASIFICACIÓN

nivelChef:3,


categoria:'desayuno',


porciones:6,


tiempoMinutos:65,


dificultad:'media',



// 🧺 INGREDIENTES

ingredientes:[


{

id:'elote',

cantidad:6,

unidad:'pieza'

},


{

id:'manteca_cerdo',

cantidad:0.080,

unidad:'kg'

},


{

id:'azucar',

cantidad:0.050,

unidad:'kg'

},


{

id:'sal',

cantidad:0.003,

unidad:'kg'

},


{

id:'hoja_maiz',

cantidad:8,

unidad:'pieza'

},


{

id:'crema',

cantidad:0.150,

unidad:'kg'

},


{

id:'queso_fresco',

cantidad:0.120,

unidad:'kg'

}


],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'reconocimiento del elote tierno como base de una masa',

'molienda y control de textura del maíz fresco',

'aprovechamiento de la humedad natural de un ingrediente',

'control de consistencia en una masa sin depender de masa nixtamalizada',

'técnica de envoltura en hoja de maíz',

'control de cocción al vapor',

'identidad culinaria de los pictes chiapanecos'

],



// 👨‍🍳 PASOS

pasos:[


{

numero:1,

titulo:'Prepara las hojas de maíz',

descripcion:

'Coloca las hojas de maíz en agua caliente hasta que estén suaves y flexibles. Escúrrelas y mantenlas cubiertas para conservar su humedad mientras preparas la masa.',

tiempo:'10 minutos',

consejo:

'Selecciona las hojas más anchas y completas para envolver los pictes con facilidad.',

porQue:

'Las hojas secas son quebradizas; hidratarlas permite doblarlas alrededor de la masa sin romperlas.',

mensajeChef:

'Antes de cocinar con una envoltura natural debemos comprender cómo volverla flexible.',

objetivo:

'Obtener hojas suaves y resistentes para formar los pictes.',

nivelImportancia:'clave',

chefPregunta:

'¿Qué buscamos al hidratar una hoja de maíz?',

respuestaEsperada:

'Que recupere flexibilidad y pueda doblarse sin romperse.',

señalCorrecta:

'La hoja puede doblarse fácilmente y conserva su estructura.',

errorEvitar:

'Utilizar hojas todavía rígidas o quebradizas.'

},



{

numero:2,

titulo:'Desgrana los elotes',

descripcion:

'Retira las hojas y los cabellos de los elotes. Con un cuchillo, separa cuidadosamente los granos de la mazorca procurando aprovechar la mayor cantidad posible.',

tiempo:'8 minutos',

consejo:

'Trabaja sobre una tabla amplia y corta alejando el cuchillo de tus manos.',

porQue:

'Los granos tiernos contienen almidón, humedad y azúcares naturales que formarán la estructura y el sabor principal del picte.',

mensajeChef:

'Hoy el maíz no acompaña la receta: el maíz es la receta.',

objetivo:

'Obtener los granos frescos que formarán la base de la preparación.',

nivelImportancia:'clave',

señalCorrecta:

'Los granos se observan tiernos, húmedos y conservan su color característico.',

errorEvitar:

'Retirar únicamente la parte superficial del grano y desperdiciar demasiado elote adherido a la mazorca.'

},



{

numero:3,

titulo:'Muele el elote',

descripcion:

'Muele los granos de elote hasta obtener una mezcla espesa. Busca una textura fina pero con suficiente cuerpo para conservar el carácter del maíz fresco.',

tiempo:'7 minutos',

consejo:

'No agregues agua al comenzar. El elote tierno ya contiene una cantidad importante de humedad.',

porQue:

'Agregar líquido innecesario puede producir una mezcla demasiado fluida que después será difícil de envolver.',

mensajeChef:

'Antes de agregar líquido, observa cuánto trae naturalmente el ingrediente.',

objetivo:

'Transformar el elote en una masa húmeda, espesa y manejable.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué no agregamos agua automáticamente durante la molienda?',

respuestaEsperada:

'Porque el elote tierno ya contiene humedad y podríamos volver demasiado líquida la masa.',

señalCorrecta:

'La mezcla cae lentamente de una cuchara y mantiene cierto cuerpo.',

errorEvitar:

'Licuar el elote con demasiada agua.'

},



{

numero:4,

titulo:'Sazona y trabaja la masa',

descripcion:

'Incorpora gradualmente la manteca de cerdo, el azúcar y la sal al elote molido. Mezcla hasta conseguir una preparación uniforme, ligeramente aireada y suficientemente espesa para mantenerse sobre una hoja.',

tiempo:'7 minutos',

consejo:

'Prueba primero la dulzura natural del elote antes de aumentar la cantidad de azúcar.',

porQue:

'La manteca aporta suavidad mientras la pequeña cantidad de azúcar refuerza, sin dominar, el dulzor natural del maíz tierno.',

mensajeChef:

'Sazonar también significa saber cuándo detenerse para dejar hablar al ingrediente principal.',

objetivo:

'Conseguir una masa equilibrada donde siga predominando el sabor del elote.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué debemos probar el elote antes de agregar más azúcar?',

respuestaEsperada:

'Porque su dulzor natural cambia y podemos terminar ocultando el sabor propio del maíz.',

señalCorrecta:

'La mezcla permanece sobre la cuchara y tiene sabor evidente a elote fresco.',

errorEvitar:

'Sobrecargar la preparación con azúcar.'

},



{

numero:5,

titulo:'Comprueba la consistencia',

descripcion:

'Coloca una cucharada de masa sobre una hoja preparada. Debe extenderse ligeramente pero permanecer en su sitio sin escurrir rápidamente hacia los bordes.',

tiempo:'2 minutos',

consejo:

'Haz esta prueba antes de formar todas las piezas.',

porQue:

'Una prueba pequeña permite detectar un problema de consistencia antes de repetirlo en todos los pictes.',

mensajeChef:

'El cocinero profesional prueba el sistema antes de producir toda la tanda.',

objetivo:

'Confirmar que la masa puede envolverse correctamente.',

nivelImportancia:'critico',

chefPregunta:

'¿Qué nos indica que la mezcla tiene demasiada humedad?',

respuestaEsperada:

'Que se extiende rápidamente y escurre sobre la hoja.',

señalCorrecta:

'La porción conserva una forma suave y permanece contenida en el centro de la hoja.',

errorEvitar:

'Comenzar a formar toda la tanda sin comprobar primero la consistencia.'

},



{

numero:6,

titulo:'Forma los pictes',

descripcion:

'Coloca una porción de masa de elote en el centro de cada hoja. Dobla los laterales hacia el centro y después los extremos para contener completamente la preparación.',

tiempo:'10 minutos',

consejo:

'No llenes demasiado las hojas; una cantidad moderada permite cerrarlas con mayor facilidad.',

porQue:

'La envoltura mantiene la masa contenida mientras el calor transforma sus almidones durante la cocción.',

mensajeChef:

'Una buena envoltura debe proteger la preparación sin aplastarla.',

objetivo:

'Formar piezas uniformes y completamente cerradas.',

nivelImportancia:'critico',

chefPregunta:

'¿Qué problema provoca colocar demasiada masa dentro de una hoja?',

respuestaEsperada:

'Dificulta el cierre y la preparación puede salir durante la cocción.',

señalCorrecta:

'La hoja cierra sin ejercer presión excesiva y mantiene la masa en su interior.',

errorEvitar:

'Sobrecargar cada pieza.'

},



{

numero:7,

titulo:'Cocina al vapor',

descripcion:

'Acomoda los pictes dentro de una vaporera dejando el agua por debajo de la rejilla. Tapa y cocina a fuego medio manteniendo una producción constante de vapor.',

tiempo:'35 minutos',

consejo:

'Evita abrir continuamente la vaporera para revisar las piezas.',

porQue:

'El vapor proporciona calor húmedo y uniforme, permitiendo que los almidones del elote formen una estructura más firme.',

mensajeChef:

'Aquí puedes observar una transformación fundamental de la cocina: una mezcla húmeda adquiere estructura gracias al calor.',

objetivo:

'Cocinar completamente el elote y conseguir una masa tierna pero estable.',

nivelImportancia:'critico',

chefPregunta:

'¿Qué está transformando la mezcla de elote durante esta cocción?',

respuestaEsperada:

'El calor y el vapor permiten que los almidones se cocinen y la masa adquiera estructura.',

señalCorrecta:

'El picte se siente más firme y la preparación mantiene su forma al abrir la hoja.',

errorEvitar:

'Interrumpir constantemente la cocción abriendo la vaporera.'

},



{

numero:8,

titulo:'Comprueba la cocción y reposa',

descripcion:

'Abre cuidadosamente una pieza de prueba. Cuando la masa se observe cocida, mantenga su estructura y deje de parecer líquida en el centro, retira los pictes y déjalos reposar unos minutos.',

tiempo:'5 minutos',

consejo:

'La textura recién salida de la vaporera será más suave; permite un breve reposo antes de evaluarla definitivamente.',

porQue:

'Durante el reposo la temperatura disminuye y la estructura del picte termina de estabilizarse.',

mensajeChef:

'El tiempo de reposo también cocina de otra manera: permite que una estructura recién formada se estabilice.',

objetivo:

'Confirmar una cocción completa y estabilizar la masa antes de servir.',

nivelImportancia:'clave',

señalCorrecta:

'La preparación mantiene su forma, luce húmeda pero no líquida y se separa de la hoja.',

errorEvitar:

'Confundir una textura naturalmente tierna con una masa todavía cruda.'

},



{

numero:9,

titulo:'Sirve con crema y queso',

descripcion:

'Sirve los pictes calientes o tibios y acompaña con una pequeña cantidad de crema y queso fresco desmoronado.',

tiempo:'3 minutos',

consejo:

'Utiliza los acompañamientos con moderación para conservar el sabor del elote como protagonista.',

porQue:

'La acidez y cremosidad de los lácteos crean contraste con el carácter dulce y vegetal del maíz tierno.',

mensajeChef:

'Un acompañamiento funciona mejor cuando crea contraste sin borrar la identidad del plato.',

objetivo:

'Presentar el picte conservando al elote como sabor principal.',

nivelImportancia:'normal',

chefPregunta:

'¿Qué función cumplen aquí la crema y el queso?',

respuestaEsperada:

'Aportan contraste de sabor y textura al dulzor y suavidad del elote.',

señalCorrecta:

'Se distingue claramente el sabor del elote aunque la preparación esté acompañada.',

errorEvitar:

'Cubrir completamente el picte con crema y queso.'

}

],



// 💡 INFORMACIÓN EXTRA

tip:

'La humedad del elote cambia según su madurez. Por eso la consistencia debe evaluarse con los ojos y las manos en lugar de depender únicamente de una cantidad fija de líquido.',


ahorro:

'Durante temporada de elote, esta preparación aprovecha prácticamente todo el ingrediente principal y requiere pocos elementos adicionales para producir varias porciones.',


errorComun:

'Agregar agua innecesariamente al moler el elote y terminar con una masa demasiado líquida para envolver.',



tags:[

'chiapas',

'chiapa_de_corzo',

'costa_chiapas',

'tonala',

'picte',

'elote',

'maiz_tierno',

'tamal',

'desayuno_mexicano',

'tradicional'

],


tipoComida:'llenadora',


popularidad:88,


historiaChef:

'El picte forma parte de las preparaciones chiapanecas que aprovechan el maíz cuando todavía está tierno. A diferencia de un tamal elaborado principalmente con masa nixtamalizada, aquí el propio grano fresco molido proporciona humedad, dulzor y estructura. En distintas zonas de Chiapas existen formas locales de consumir estas preparaciones de elote, incluyendo su acompañamiento con queso y crema.',


trucoChef:

'Antes de formar toda la tanda cocina una cucharadita de la mezcla durante unos minutos sobre una superficie caliente. Podrás comprobar rápidamente el equilibrio de sal y dulzor antes de envolver todos los pictes.',


momento:'aprender',


ocasion:[

'diario',

'familia'

],


sustituciones:[

{

falta:'manteca_cerdo',

reemplazo:'aceite vegetal en menor cantidad, aunque cambia la textura y el carácter tradicional'

},

{

falta:'crema',

reemplazo:'puede servirse sin crema; el acompañamiento no es necesario para cocinar el picte'

},

{

falta:'queso_fresco',

reemplazo:'queso panela desmoronado como acompañamiento'

}

],


chefInicio:

'Hoy vamos a conocer otra cara del maíz chiapaneco. En lugar de comenzar con masa preparada, trabajaremos directamente con el elote tierno y aprenderemos cómo su propia humedad, azúcar y almidón pueden convertirse en la estructura de un tamal.',


chefFinal:

'Aprendiste a transformar elote fresco en una masa, controlar su humedad sin depender de cantidades rígidas, envolverla y cocinarla mediante vapor. El picte demuestra que comprender un ingrediente es más importante que limitarse a seguir una receta.',


señalesExito:{

vista:

'Picte bien formado, de tono amarillo suave, húmedo y uniforme, servido dentro de su hoja con crema y queso fresco como acompañamiento.',

olor:

'Aroma dulce y vegetal de elote cocido con notas cálidas de maíz y un ligero carácter lácteo al servir.',

textura:

'Masa tierna, húmeda y suave, pero suficientemente estructurada para conservar su forma al abrir la hoja.'

},


rescates:[

{

problema:'La mezcla de elote quedó demasiado líquida',

solucion:

'Evita agregar más líquido. Déjala reposar unos minutos y, si sigue demasiado fluida, incorpora una pequeña cantidad de masa de maíz hasta recuperar una consistencia manejable; la textura final cambiará ligeramente.'

},

{

problema:'La mezcla quedó demasiado espesa',

solucion:

'Incorpora muy poca agua o leche, una cucharada a la vez, mezclando y comprobando la consistencia después de cada adición.'

},

{

problema:'La masa sale de la hoja durante la cocción',

solucion:

'Reduce la cantidad utilizada por pieza y asegúrate de doblar correctamente los laterales y extremos de la hoja.'

},

{

problema:'El centro continúa demasiado húmedo y sin estructura',

solucion:

'Continúa la cocción al vapor algunos minutos más y comprueba nuevamente una pieza.'

},

{

problema:'El picte quedó poco dulce',

solucion:

'No es necesario modificar las piezas ya cocidas; sírvelas aprovechando el dulzor natural del elote y ajusta el azúcar de la siguiente tanda.'

}

]


};