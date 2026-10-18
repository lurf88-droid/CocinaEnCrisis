import type { Receta } from '@/types/receta';


export const ENFRIJOLADAS_MEXICANAS: Receta = {


id:'enfrijoladas-mexicanas',


titulo:'Enfrijoladas mexicanas',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/nacional/enfrijoladas-mexicanas.webp'
),


descripcion:

'Platillo tradicional mexicano donde las tortillas de maíz son bañadas en una salsa cremosa de frijol y acompañadas con pollo, queso fresco y crema. Una receta que representa la importancia de las salsas como elemento principal de la cocina mexicana.',


// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Centro y Sur de México',

estadoOrigen:'México',

tradicion:'cocina mexicana tradicional'

},


tecnicaPrincipal:

'elaboración de salsa de frijol, manejo de tortilla y montaje tradicional',


nivelChef:3,


categoria:'desayuno',


porciones:4,


tiempoMinutos:40,


dificultad:'media',



ingredientes:[


{

id:'tortilla_maiz',

cantidad:12,

unidad:'pieza'

},


{

id:'frijol_bayo',

cantidad:0.500,

unidad:'kg'

},


{

id:'pollo_deshebrado',

cantidad:0.400,

unidad:'kg'

},


{

id:'cebolla_blanca',

cantidad:0.100,

unidad:'kg'

},


{

id:'ajo',

cantidad:2,

unidad:'pieza'

},


{

id:'queso_fresco',

cantidad:0.200,

unidad:'kg'

},


{

id:'crema',

cantidad:0.150,

unidad:'litro'

},


{

id:'chile_serrano',

cantidad:2,

unidad:'pieza'

},


{

id:'aceite_vegetal',

cantidad:0.050,

unidad:'litro'

},


{

id:'sal',

cantidad:0.008,

unidad:'kg'

}

],



aprendizajes:[

'transformación del frijol en una salsa principal',

'equilibrio de textura entre tortilla y salsa',

'importancia de las bases culinarias mexicanas',

'manejo correcto de ingredientes tradicionales',

'montaje de platos con identidad regional'

],



pasos:[


{

numero:1,

titulo:'Prepara la salsa de frijol',

descripcion:

'Licúa los frijoles con cebolla, ajo, chile serrano y un poco de caldo o agua hasta obtener una salsa uniforme.',

tiempo:'10 minutos',

consejo:

'Busca una textura cremosa, no demasiado líquida.',

porQue:

'La salsa será el elemento principal que dará identidad al plato.',

mensajeChef:

'Una gran cocina sabe convertir ingredientes sencillos en protagonistas.',

objetivo:

'Crear una salsa de frijol con cuerpo y sabor.',

nivelImportancia:

'critico',

chefPregunta:

'¿Por qué la textura de la salsa es tan importante?',

respuestaEsperada:

'Porque debe cubrir la tortilla sin hacer que el plato quede aguado.',

señalCorrecta:

'La salsa cubre la cuchara y tiene consistencia cremosa.',

errorEvitar:

'Dejar una salsa demasiado líquida.'

},



{

numero:2,

titulo:'Cocina y sazona la salsa',

descripcion:

'Calienta un poco de aceite y cocina la salsa de frijol durante unos minutos. Ajusta la sal hasta lograr el sabor correcto.',

tiempo:'10 minutos',

consejo:

'La cocción ayuda a integrar mejor los sabores.',

porQue:

'Los ingredientes necesitan tiempo para desarrollar profundidad.',

mensajeChef:

'La paciencia transforma una mezcla en una preparación.',

objetivo:

'Desarrollar una salsa equilibrada.',

nivelImportancia:

'clave',

señalCorrecta:

'La salsa tiene aroma cocido y sabor profundo.',

errorEvitar:

'Usar la salsa recién licuada sin cocinar.'

},



{

numero:3,

titulo:'Prepara las tortillas',

descripcion:

'Calienta ligeramente las tortillas y pásalas por la salsa de frijol hasta cubrirlas completamente.',

tiempo:'5 minutos',

consejo:

'Trabaja rápido para mantener la tortilla flexible.',

porQue:

'La tortilla debe absorber sabor sin romperse.',

mensajeChef:

'La tortilla mexicana es una herramienta culinaria, no solamente un acompañamiento.',

objetivo:

'Integrar la tortilla con la salsa.',

nivelImportancia:

'clave',

señalCorrecta:

'La tortilla está cubierta pero mantiene estructura.',

errorEvitar:

'Dejar demasiado tiempo la tortilla en la salsa.'

},



{

numero:4,

titulo:'Rellena y monta las enfrijoladas',

descripcion:

'Coloca pollo deshebrado dentro de las tortillas, dóblalas y acomoda en el plato. Agrega crema y queso fresco.',

tiempo:'10 minutos',

consejo:

'Distribuye bien el relleno para que cada porción tenga equilibrio.',

porQue:

'El montaje define la experiencia final del plato.',

mensajeChef:

'La presentación también es parte de la cocina.',

objetivo:

'Crear un plato completo y equilibrado.',

nivelImportancia:

'clave',

señalCorrecta:

'Las enfrijoladas tienen salsa uniforme y complementos bien distribuidos.',

errorEvitar:

'Excederse con crema o queso y perder el sabor del frijol.'

},



{

numero:5,

titulo:'Finaliza y sirve',

descripcion:

'Termina con queso fresco, crema y un poco de cebolla o chile si deseas. Sirve caliente.',

tiempo:'5 minutos',

consejo:

'La temperatura es importante para disfrutar mejor la textura.',

porQue:

'Las preparaciones con salsa se disfrutan mejor recién montadas.',

mensajeChef:

'Hoy convertiste un ingrediente humilde en una receta con historia.',

objetivo:

'Presentar un plato tradicional mexicano.',

nivelImportancia:

'normal',

señalCorrecta:

'El plato tiene textura cremosa y sabores equilibrados.',

errorEvitar:

'Servir frío porque cambia completamente la experiencia.'

}

],



tip:

'Puedes cambiar el pollo por huevo, queso o simplemente disfrutar la salsa de frijol como protagonista.',



ahorro:

'Los frijoles son uno de los ingredientes más importantes de la cocina mexicana por su rendimiento y valor nutritivo.',



errorComun:

'Preparar una salsa demasiado líquida que no logra cubrir correctamente la tortilla.',



tags:[

'mexicana',

'desayuno_mexicano',

'frijol',

'tradicional'

],



tipoComida:'llenadora',


popularidad:90,



historiaChef:

'Las enfrijoladas representan una de las grandes familias de la cocina mexicana donde una salsa transforma ingredientes básicos en un plato completo. Junto con enchiladas, entomatadas y enmoladas muestran la importancia de las salsas en México.',



trucoChef:

'Usar frijoles bien sazonados desde el inicio mejora considerablemente el sabor final.',



momento:

'diario',



ocasion:[

'diario',

'familia'

],



sustituciones:[

{

falta:'pollo_deshebrado',

reemplazo:'huevo, queso o verduras disponibles'

}

],



chefInicio:

'Hoy aprenderemos una de las ideas más importantes de la cocina mexicana: una salsa puede convertirse en el corazón completo de un plato.',



chefFinal:

'Has preparado una receta donde el ingrediente principal no es solo la proteína, sino la técnica detrás de una gran salsa.',



señalesExito:{

vista:

'Tortillas bañadas en salsa de frijol con queso y crema.',

olor:

'Aroma profundo de frijol cocido, ajo y chile.',

textura:

'Tortilla suave con salsa cremosa y complementos frescos.'

},



rescates:[

{

problema:'La salsa quedó muy espesa',

solucion:

'Agrega poco a poco caldo o agua caliente hasta ajustar textura.'

},

{

problema:'La tortilla se rompió',

solucion:

'Calienta mejor la tortilla antes de bañarla en salsa.'

}

]


};