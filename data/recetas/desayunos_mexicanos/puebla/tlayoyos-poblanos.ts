import type { Receta } from '@/types/receta';


export const TLAYOYOS_POBLANOS: Receta = {


id:'tlayoyos-poblanos',


titulo:'Tlayoyos serranos de alberjón',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/puebla/tlayoyos-poblanos.webp'
),


descripcion:

'Antojito tradicional de la Sierra Norte de Puebla elaborado con masa de maíz rellena de alberjón y cocida sobre comal. Su preparación combina una masa suave con un relleno de sabor terroso y una cocción que desarrolla aromas tostados.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Sierra Norte de Puebla',

estadoOrigen:'Puebla',

tradicion:'cocina serrana poblana basada en maíz y leguminosas'

},


tecnicaPrincipal:

'cocción de leguminosa, preparación de relleno, formado de masa y cocción en comal',



// 🎯 CLASIFICACIÓN

nivelChef:3,


categoria:'desayuno',

rolCulinario: 'plato_principal',
porciones:4,


tiempoMinutos:65,


dificultad:'media',



// 🧺 INGREDIENTES

ingredientes:[


{

id:'masa_maiz',

cantidad:0.600,

unidad:'kg'

},


{

id:'alberjon',

cantidad:0.250,

unidad:'kg'

},


{

id:'cebolla_blanca',

cantidad:0.080,

unidad:'kg'

},


{

id:'chile_serrano',

cantidad:2,

unidad:'pieza'

},


{

id:'queso_fresco',

cantidad:0.120,

unidad:'kg'

},


{

id:'sal',

cantidad:0.006,

unidad:'kg'

}


],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'cocción correcta de una leguminosa seca',

'control de humedad en rellenos para masa',

'formado y sellado de una preparación rellena',

'cocción uniforme sobre comal',

'identidad culinaria de la Sierra Norte de Puebla'

],



// 👨‍🍳 PASOS

pasos:[


{

numero:1,

titulo:'Cuece el alberjón',

descripcion:

'Cuece el alberjón previamente remojado en agua hasta que esté completamente suave. Escurre bien antes de preparar el relleno.',

tiempo:'30 minutos',

consejo:

'El alberjón debe quedar suave antes de triturarlo, pero evita conservar exceso de agua.',

porQue:

'Una leguminosa bien cocida desarrolla una textura cremosa y permite formar un relleno uniforme.',

mensajeChef:

'Antes de transformar un ingrediente debemos entender su textura.',

objetivo:

'Obtener alberjón suave y preparado para convertirse en relleno.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué escurrimos bien el alberjón antes de triturarlo?',

respuestaEsperada:

'Para evitar un relleno demasiado húmedo que pueda romper la masa.',

señalCorrecta:

'El alberjón se aplasta fácilmente al presionarlo.',

errorEvitar:

'Intentar preparar el relleno cuando el alberjón todavía está duro.'

},



{

numero:2,

titulo:'Prepara el relleno',

descripcion:

'Machaca el alberjón cocido hasta obtener una pasta espesa. Incorpora cebolla finamente picada, chile serrano y sal.',

tiempo:'8 minutos',

consejo:

'La mezcla debe mantenerse compacta y no escurrir.',

porQue:

'Un relleno firme facilita el formado y evita que salga durante la cocción.',

mensajeChef:

'En una preparación rellena, controlar la humedad es controlar la estructura.',

objetivo:

'Conseguir un relleno sabroso, espeso y manejable.',

nivelImportancia:'clave',

señalCorrecta:

'Puedes tomar una pequeña porción del relleno y mantiene su forma.',

errorEvitar:

'Dejar trozos demasiado grandes o exceso de líquido.'

},



{

numero:3,

titulo:'Prepara la masa',

descripcion:

'Amasa la masa de maíz hasta obtener una textura suave y flexible. Divide en porciones de tamaño similar.',

tiempo:'5 minutos',

consejo:

'Si aparecen muchas grietas al presionar la masa, incorpora una pequeña cantidad de agua y vuelve a amasar.',

porQue:

'Una masa correctamente hidratada puede envolver el relleno sin romperse.',

mensajeChef:

'La masa te habla con su textura; aprende a observarla antes de continuar.',

objetivo:

'Conseguir una masa flexible y fácil de formar.',

nivelImportancia:'critico',

señalCorrecta:

'La masa se aplana sin formar grietas profundas.',

errorEvitar:

'Trabajar con masa demasiado seca.'

},



{

numero:4,

titulo:'Rellena y forma los tlayoyos',

descripcion:

'Aplana ligeramente cada porción de masa, coloca una cantidad moderada de relleno de alberjón en el centro y cierra completamente. Forma una pieza alargada y ligeramente ovalada.',

tiempo:'10 minutos',

consejo:

'Usa menos relleno del que creas necesario al principio; será más fácil conseguir un buen sellado.',

porQue:

'La forma y el sellado permiten que el relleno permanezca dentro mientras la masa se cocina.',

mensajeChef:

'La precisión de tus manos también forma parte de la técnica culinaria.',

objetivo:

'Crear piezas uniformes, rellenas y completamente cerradas.',

nivelImportancia:'critico',

chefPregunta:

'¿Qué ocurrirá si colocamos demasiado relleno?',

respuestaEsperada:

'La masa tendrá dificultad para cerrar y puede romperse durante la cocción.',

señalCorrecta:

'El relleno queda completamente encerrado y la superficie no presenta grietas grandes.',

errorEvitar:

'Sobrecargar la masa con relleno.'

},



{

numero:5,

titulo:'Cocina sobre el comal',

descripcion:

'Coloca los tlayoyos sobre un comal caliente a temperatura media. Cocina por ambos lados hasta que la masa esté completamente cocida y aparezcan zonas ligeramente doradas.',

tiempo:'10 minutos',

consejo:

'No aumentes demasiado el fuego para acelerar el proceso; necesitamos que el calor llegue hasta el centro.',

porQue:

'La masa rellena es más gruesa que una tortilla y necesita tiempo para cocinarse completamente.',

mensajeChef:

'Controlar el fuego es controlar lo que ocurre dentro del alimento.',

objetivo:

'Cocinar completamente la masa mientras desarrollamos aromas tostados.',

nivelImportancia:'critico',

señalCorrecta:

'La superficie presenta zonas doradas y la masa se siente firme y cocida.',

errorEvitar:

'Quemar el exterior dejando masa cruda cerca del relleno.'

},



{

numero:6,

titulo:'Termina y sirve',

descripcion:

'Sirve los tlayoyos calientes y termina con queso fresco desmoronado.',

tiempo:'2 minutos',

consejo:

'Agrega el queso justo antes de servir para conservar su textura.',

porQue:

'El queso aporta contraste de sabor y textura sin ocultar el carácter del maíz y el alberjón.',

mensajeChef:

'Un acompañamiento debe complementar al ingrediente principal, no esconderlo.',

objetivo:

'Presentar un antojito sencillo donde el maíz y el alberjón sigan siendo protagonistas.',

nivelImportancia:'normal',

señalCorrecta:

'El tlayoyo conserva su estructura y al abrirlo se distingue claramente el relleno.',

errorEvitar:

'Sobrecargarlo con acompañamientos.'

}

],



// 💡 INFORMACIÓN EXTRA

tip:

'Prepara el relleno con anticipación y déjalo enfriar ligeramente; será más sencillo trabajar con él al momento de rellenar la masa.',


ahorro:

'El alberjón seco es rendidor y, combinado con masa de maíz, permite preparar un alimento completo con ingredientes sencillos.',


errorComun:

'Usar un relleno demasiado húmedo o colocar demasiado dentro de la masa, provocando que el tlayoyo se abra.',



tags:[

'puebla',

'sierra_norte_puebla',

'desayuno_mexicano',

'antojito_mexicano',

'maiz',

'alberjon',

'tradicional'

],


tipoComida:'llenadora',


popularidad:82,


historiaChef:

'Los tlayoyos forman parte de la cocina tradicional de la Sierra Norte de Puebla, donde el maíz y las leguminosas han dado origen a preparaciones sencillas, nutritivas y profundamente ligadas al territorio.',


trucoChef:

'Después de cerrar la masa, aplana el tlayoyo poco a poco en lugar de ejercer toda la presión de una sola vez; así reduces el riesgo de romperlo.',


momento:'diario',


ocasion:[

'diario',

'familia'

],


sustituciones:[

{

falta:'alberjon',

reemplazo:'frijol bayo machacado, aunque cambia el relleno tradicional'

},

{

falta:'queso_fresco',

reemplazo:'queso panela desmoronado'

},

{

falta:'chile_serrano',

reemplazo:'puede omitirse para reducir el picante'

}

],


chefInicio:

'Hoy viajamos a la Sierra Norte de Puebla para descubrir cómo dos ingredientes fundamentales, maíz y leguminosas, pueden convertirse en una preparación con identidad propia.',


chefFinal:

'Aprendiste a controlar un relleno, cerrar una masa y cocinar una pieza gruesa sobre el comal. Más importante todavía: conociste una preparación ligada al territorio poblano.',


señalesExito:{

vista:

'Pieza de masa alargada y ligeramente ovalada con zonas doradas de comal y queso fresco por encima.',

olor:

'Aroma de maíz tostado con notas suaves y terrosas del alberjón.',

textura:

'Masa cocida y suave con exterior ligeramente tostado y relleno espeso y cremoso.'

},


rescates:[

{

problema:'El tlayoyo se abre al formarlo',

solucion:

'Reduce la cantidad de relleno, cierra nuevamente la masa y humedece ligeramente los bordes si están secos.'

},

{

problema:'El exterior se quema antes de cocinar el centro',

solucion:

'Reduce la temperatura del comal y prolonga la cocción.'

},

{

problema:'El relleno quedó demasiado líquido',

solucion:

'Cocínalo unos minutos más para evaporar humedad y déjalo enfriar antes de rellenar la masa.'

}

]


};