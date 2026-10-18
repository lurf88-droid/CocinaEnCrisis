import type { Receta } from '@/types/receta';


export const CHILAQUILES_VERDES_POLLO: Receta = {


id:'chilaquiles-verdes-pollo',


titulo:'Chilaquiles verdes con pollo',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/ciudad_de_mexico/chilaquiles-verdes-pollo.webp'
),


descripcion:

'Desayuno tradicional mexicano elaborado con tortillas de maíz transformadas en totopos, bañadas en salsa verde y acompañadas con pollo deshebrado, crema y queso. Una receta que enseña el equilibrio entre textura, acidez y picante.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Centro de México',

estadoOrigen:'Ciudad de México',

tradicion:'cocina mexicana urbana'

},



tecnicaPrincipal:

'elaboración de salsa verde, fritura y montaje',



nivelChef:3,


categoria:'desayuno',


porciones:4,


tiempoMinutos:45,


dificultad:'media',



ingredientes:[


{

id:'tortilla_maiz',

cantidad:0.500,

unidad:'kg'

},


{

id:'pollo_deshebrado',

cantidad:0.500,

unidad:'kg'

},


{

id:'tomate_verde',

cantidad:0.700,

unidad:'kg'

},


{

id:'chile_serrano',

cantidad:4,

unidad:'pieza'

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

id:'cilantro',

cantidad:0.050,

unidad:'kg'

},


{

id:'queso_fresco',

cantidad:0.200,

unidad:'kg'

},


{

id:'crema',

cantidad:0.200,

unidad:'litro'

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

'preparación de salsa verde mexicana',

'equilibrio entre acidez, picante y sal',

'manejo de textura en tortillas',

'importancia del montaje tradicional',

'organización de varias preparaciones simultáneas'

],



pasos:[


{

numero:1,

titulo:'Prepara los ingredientes base',

descripcion:

'Lava los tomates verdes, chiles, cebolla y cilantro. Organiza todos los ingredientes antes de comenzar la preparación.',

tiempo:'5 minutos',

consejo:

'La preparación previa permite controlar mejor cada etapa.',

porQue:

'Una estación organizada reduce errores y mejora la calidad final.',

mensajeChef:

'Antes del fuego existe una etapa igual de importante: la preparación.',

objetivo:

'Crear una estación de trabajo lista para cocinar.',

nivelImportancia:

'normal',

señalCorrecta:

'Todos los ingredientes están limpios y separados.',

errorEvitar:

'Comenzar sin tener preparada la mise en place.'

},



{

numero:2,

titulo:'Construye la salsa verde',

descripcion:

'Cocina los tomates verdes, chile serrano, cebolla y ajo hasta suavizar. Después licúa con cilantro hasta obtener una salsa uniforme.',

tiempo:'15 minutos',

consejo:

'Puedes asar los ingredientes para obtener sabores más profundos.',

porQue:

'La cocción transforma la acidez del tomate verde y desarrolla nuevos aromas.',

mensajeChef:

'La salsa es el alma de los chilaquiles.',

objetivo:

'Crear una salsa equilibrada y con identidad mexicana.',

nivelImportancia:

'critico',

chefPregunta:

'¿Por qué cocinamos el tomate verde antes de licuarlo?',

respuestaEsperada:

'Porque suavizamos la acidez y desarrollamos más sabor.',

señalCorrecta:

'La salsa tiene color verde brillante, aroma fresco y textura uniforme.',

errorEvitar:

'Usar una salsa sin cocción porque tendrá sabor agresivo.'

},



{

numero:3,

titulo:'Prepara los totopos',

descripcion:

'Corta las tortillas y fríelas en aceite caliente hasta obtener una textura crujiente.',

tiempo:'10 minutos',

consejo:

'El aceite debe estar caliente para evitar que absorban demasiada grasa.',

porQue:

'La textura crujiente permite que la tortilla soporte la salsa.',

mensajeChef:

'Una tortilla puede convertirse en la base de un gran plato.',

objetivo:

'Conseguir tortillas crujientes y ligeras.',

nivelImportancia:

'clave',

señalCorrecta:

'Los totopos están dorados y firmes.',

errorEvitar:

'Freír con aceite frío porque quedan grasosos.'

},



{

numero:4,

titulo:'Integra salsa y tortilla',

descripcion:

'Calienta la salsa verde y agrega los totopos mezclando cuidadosamente para cubrirlos sin perder completamente su textura.',

tiempo:'5 minutos',

consejo:

'El tiempo de contacto entre salsa y tortilla define si serán crujientes o suaves.',

porQue:

'El punto ideal está entre absorber sabor y conservar estructura.',

mensajeChef:

'La textura también es una decisión del cocinero.',

objetivo:

'Lograr chilaquiles con equilibrio entre salsa y tortilla.',

nivelImportancia:

'critico',

chefPregunta:

'¿Por qué no dejamos demasiado tiempo los totopos en la salsa?',

respuestaEsperada:

'Porque pierden textura y se vuelven demasiado blandos.',

señalCorrecta:

'La tortilla está cubierta de salsa pero mantiene cierta firmeza.',

errorEvitar:

'Saturar de salsa hasta perder la textura.'

},



{

numero:5,

titulo:'Agrega el pollo y monta el plato',

descripcion:

'Coloca los chilaquiles en el plato, agrega pollo deshebrado, crema y queso fresco.',

tiempo:'5 minutos',

consejo:

'El montaje debe mostrar todos los elementos de la receta.',

porQue:

'La presentación comunica equilibrio y cuidado culinario.',

mensajeChef:

'La comida tradicional también merece una presentación profesional.',

objetivo:

'Crear un plato completo y equilibrado.',

nivelImportancia:

'clave',

señalCorrecta:

'Se distinguen salsa, tortilla, pollo y complementos.',

errorEvitar:

'Agregar demasiada crema o queso y esconder los sabores principales.'

}

],



tip:

'Los chilaquiles pueden prepararse rojos, verdes o con diferentes proteínas. La técnica principal siempre es controlar la textura de la tortilla.',



ahorro:

'Puedes aprovechar tortillas del día anterior, transformándolas en un desayuno completo.',



errorComun:

'Dejar demasiado tiempo los totopos dentro de la salsa y perder la textura característica.',



tags:[

'mexicana',

'desayuno_mexicano',

'salsa_verde',

'tradicional'

],



tipoComida:'llenadora',


popularidad:100,



historiaChef:

'Los chilaquiles forman parte de la cocina mexicana cotidiana. Su origen está ligado al aprovechamiento de la tortilla y a la creación de nuevos platillos a partir de ingredientes básicos.',



trucoChef:

'Preparar la salsa un día antes puede intensificar sus sabores.',



momento:

'diario',



ocasion:[

'diario',

'familia'

],



sustituciones:[

{

falta:'pollo_deshebrado',

reemplazo:'huevo, queso o frijoles según disponibilidad'

}

],



chefInicio:

'Hoy aprenderemos una receta donde una tortilla sencilla se transforma mediante técnica y sabor.',



chefFinal:

'Has dominado una de las bases de la cocina mexicana: convertir ingredientes simples en un plato lleno de identidad.',



señalesExito:{

vista:

'Salsa verde brillante cubriendo tortillas con pollo y queso.',

olor:

'Aroma fresco de tomate verde, cilantro y chile.',

textura:

'Tortilla con sabor a salsa pero conservando estructura.'

},



rescates:[

{

problema:'Los chilaquiles quedaron aguados',

solucion:

'Reduce el tiempo de contacto con la salsa y prepara los totopos más crujientes.'

},

{

problema:'La salsa quedó muy ácida',

solucion:

'Cocina más tiempo la salsa y ajusta la sal.'

}

]


};