import type { Receta } from '@/types/receta';


export const MOLOTES_POBLANOS: Receta = {


id:'molotes-poblanos',


titulo:'Molotes poblanos de papa con queso',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/puebla/molotes-poblanos.webp'
),


descripcion:

'Antojito tradicional poblano preparado con masa de maíz rellena de papa y queso, formado en piezas alargadas y frito hasta obtener una superficie dorada y crujiente.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Valle de Puebla',

estadoOrigen:'Puebla',

ciudadOrigen:'Puebla',

tradicion:'antojitos poblanos de masa rellena y fritura tradicional'

},


tecnicaPrincipal:

'preparación de masa, elaboración de relleno, formado, sellado y fritura controlada',



// 🎯 CLASIFICACIÓN

categoria:'desayuno',

rolCulinario: 'plato_principal',
porciones:4,


tiempoMinutos:50,


dificultad:'media',


nivelChef:2,



// 🧺 INGREDIENTES

ingredientes:[


{

id:'masa_maiz',

cantidad:0.600,

unidad:'kg'

},


{

id:'papa',

cantidad:0.500,

unidad:'kg'

},


{

id:'queso_fresco',

cantidad:0.180,

unidad:'kg'

},


{

id:'aceite_vegetal',

cantidad:0.250,

unidad:'litro'

},


{

id:'sal',

cantidad:0.008,

unidad:'kg'

}


],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'control de humedad en rellenos',

'formado y sellado de masa',

'fritura a temperatura correcta',

'equilibrio entre exterior crujiente e interior suave',

'identidad gastronómica de los antojitos poblanos'

],



// 👨‍🍳 PASOS

pasos:[


{

numero:1,

titulo:'Cuece y prepara la papa',

descripcion:

'Lava las papas y cuécelas hasta que estén completamente suaves. Pela y machaca hasta obtener un puré firme.',

tiempo:'18 minutos',

consejo:

'Evita agregar agua o leche al puré; el relleno necesita mantenerse firme.',

porQue:

'Un relleno con demasiada humedad puede romper la masa durante la fritura.',

mensajeChef:

'Controlar la humedad es una de las claves de cualquier preparación rellena.',

objetivo:

'Crear una base de papa firme y manejable.',

nivelImportancia:'clave',

señalCorrecta:

'La papa se aplasta fácilmente pero mantiene una textura espesa.',

errorEvitar:

'Dejar el puré demasiado húmedo.'

},



{

numero:2,

titulo:'Prepara el relleno',

descripcion:

'Mezcla la papa machacada con el queso fresco desmoronado y ajusta ligeramente con sal.',

tiempo:'5 minutos',

consejo:

'Prueba el relleno antes de formar los molotes.',

porQue:

'El interior debe quedar correctamente sazonado antes de encerrarlo dentro de la masa.',

mensajeChef:

'Un buen relleno debe saber bien por sí mismo.',

objetivo:

'Conseguir un relleno equilibrado y compacto.',

nivelImportancia:'clave',

señalCorrecta:

'La mezcla mantiene su forma al tomar una pequeña porción.',

errorEvitar:

'Agregar demasiado queso húmedo y aflojar el relleno.'

},



{

numero:3,

titulo:'Prepara la masa',

descripcion:

'Amasa la masa de maíz hasta que esté suave, uniforme y suficientemente flexible para poder formar y cerrar cada molote.',

tiempo:'7 minutos',

consejo:

'Si la masa presenta grietas al presionarla, necesita un poco más de humedad.',

porQue:

'Una masa flexible permite envolver el relleno sin romperse.',

mensajeChef:

'Antes de pensar en la fritura, primero debemos dominar la estructura.',

objetivo:

'Obtener una masa moldeable y sin grietas.',

nivelImportancia:'critico',

señalCorrecta:

'La masa puede estirarse ligeramente sin quebrarse.',

errorEvitar:

'Trabajar con una masa demasiado seca.'

},



{

numero:4,

titulo:'Forma y rellena los molotes',

descripcion:

'Divide la masa en porciones. Aplana cada una, coloca una pequeña cantidad de relleno en el centro, cierra completamente y forma una pieza alargada.',

tiempo:'12 minutos',

consejo:

'No sobrecargues el molote; un relleno excesivo dificulta el sellado.',

porQue:

'El sellado correcto evita que el relleno salga y que entre aceite durante la fritura.',

mensajeChef:

'La mano del cocinero convierte masa y relleno en una estructura estable.',

objetivo:

'Formar molotes uniformes, bien cerrados y sin grietas.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué es importante que el molote quede completamente sellado?',

respuestaEsperada:

'Porque así evitamos que el relleno salga y que absorba demasiado aceite.',

señalCorrecta:

'La superficie está cerrada y no se observa relleno.',

errorEvitar:

'Dejar pequeñas grietas o costuras abiertas.'

},



{

numero:5,

titulo:'Fríe hasta obtener un dorado uniforme',

descripcion:

'Calienta el aceite a temperatura media-alta y fríe los molotes en pequeñas tandas hasta que estén dorados por todos lados.',

tiempo:'8 minutos',

consejo:

'No llenes demasiado el recipiente porque la temperatura del aceite puede bajar.',

porQue:

'Una temperatura estable permite crear una capa exterior crujiente sin absorber grasa en exceso.',

mensajeChef:

'Freír bien no significa usar más aceite; significa controlar la temperatura.',

objetivo:

'Conseguir exterior dorado e interior caliente.',

nivelImportancia:'critico',

señalCorrecta:

'Los molotes presentan un color dorado uniforme y superficie firme.',

errorEvitar:

'Freír con aceite frío porque quedarán grasosos.'

},



{

numero:6,

titulo:'Escurre y sirve',

descripcion:

'Retira los molotes del aceite y colócalos sobre una superficie absorbente durante unos minutos antes de servir.',

tiempo:'3 minutos',

consejo:

'Déjalos reposar brevemente para eliminar el exceso de grasa sin dejar que se enfríen.',

porQue:

'El reposo mejora la sensación crujiente y hace el platillo más agradable.',

mensajeChef:

'El último minuto de una receta también cuenta.',

objetivo:

'Servir molotes calientes, crujientes y sin exceso de grasa.',

nivelImportancia:'normal',

señalCorrecta:

'El exterior está seco al tacto y el interior permanece caliente.',

errorEvitar:

'Servirlos directamente del aceite sin escurrir.'

}

],



// 💡 INFORMACIÓN EXTRA

tip:

'Los molotes poblanos pueden llevar diferentes rellenos. Papa con queso es una versión económica y fácil de reproducir en casa.',


ahorro:

'La papa aumenta mucho el rendimiento del relleno y permite preparar varias piezas con pocos ingredientes.',


errorComun:

'Usar relleno húmedo, sellar mal la masa o freír con aceite a baja temperatura.',



tags:[

'puebla',

'desayuno_mexicano',

'antojito_poblano',

'masa_maiz',

'papa',

'economica',

'fritura'

],



tipoComida:'llenadora',


popularidad:90,



historiaChef:

'Los molotes forman parte de la tradición de antojitos poblanos. Su preparación demuestra cómo una masa sencilla puede transformarse mediante relleno, formado y fritura en un alimento completo y de gran rendimiento.',



trucoChef:

'Después de formar cada molote, pasa suavemente los dedos sobre la unión de la masa; si no puedes identificar fácilmente dónde cerró, el sellado está bien hecho.',



momento:'diario',



ocasion:[

'diario',

'familia',


],



sustituciones:[

{

falta:'queso_fresco',

reemplazo:'queso panela desmoronado'

},

{

falta:'papa',

reemplazo:'frijol machacado como relleno alternativo'

}

],



chefInicio:

'Hoy vamos a trabajar una técnica fundamental de los antojitos mexicanos: rellenar y freír masa sin perder estructura ni textura.',



chefFinal:

'Preparaste un antojito poblano donde el éxito depende del control de humedad, sellado y temperatura del aceite.',



señalesExito:{

vista:

'Molotes alargados con color dorado uniforme y superficie cerrada.',

olor:

'Aroma de maíz frito, papa caliente y queso.',

textura:

'Exterior crujiente, masa suave e interior cremoso.'

},



rescates:[

{

problema:'Los molotes se abren al freír',

solucion:

'Reduce la cantidad de relleno y asegúrate de cerrar completamente cualquier grieta antes de colocarlos en el aceite.'

},

{

problema:'Quedaron demasiado grasosos',

solucion:

'Aumenta ligeramente la temperatura del aceite y fríe en tandas pequeñas.'

},

{

problema:'La masa se rompe al formar',

solucion:

'Agrega una pequeña cantidad de agua a la masa y amasa nuevamente hasta recuperar flexibilidad.'

}

]


};