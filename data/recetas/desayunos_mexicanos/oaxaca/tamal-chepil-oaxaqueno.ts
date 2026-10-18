import type { Receta } from '@/types/receta';


export const TAMAL_CHEPIL_OAXAQUENO: Receta = {


id:'tamal-chepil-oaxaqueno',


titulo:'Tamal de chepil oaxaqueño',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/oaxaca/tamal-chepil-oaxaqueno.webp'
),


descripcion:

'Tamal tradicional oaxaqueño elaborado con masa de maíz mezclada con hojas de chepil, manteca y caldo. Una preparación donde una hierba regional transforma una masa sencilla en un desayuno lleno de identidad.',


// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Valles Centrales de Oaxaca',

estadoOrigen:'Oaxaca',

tradicion:'cocina oaxaqueña tradicional de maíz'

},


tecnicaPrincipal:

'preparación de masa, integración de hierbas y cocción al vapor',


nivelChef:3,


categoria:'desayuno',
rolCulinario: 'plato_principal',


porciones:6,


tiempoMinutos:120,


dificultad:'media',



ingredientes:[


{
id:'masa_maiz',
cantidad:0.800,
unidad:'kg'
},


{
id:'chepil',
cantidad:0.100,
unidad:'kg'
},


{
id:'manteca_cerdo',
cantidad:0.200,
unidad:'kg'
},


{
id:'caldo_pollo',
cantidad:0.500,
unidad:'litro'
},


{
id:'salsa_roja',
cantidad:0.300,
unidad:'kg'
},


{
id:'hoja_maiz',
cantidad:20,
unidad:'pieza'
},


{
id:'sal',
cantidad:0.010,
unidad:'kg'
}

],


aprendizajes:[

'preparación tradicional de masa para tamal',

'importancia de hierbas regionales',

'técnica de cocción al vapor',

'equilibrio entre grasa, maíz y aroma',

'identidad culinaria de Oaxaca'

],


pasos:[

{

numero:1,

titulo:'Prepara las hojas de maíz',

descripcion:

'Hidrata las hojas de maíz en agua caliente hasta que sean flexibles y puedan doblarse sin romperse.',

tiempo:'20 minutos',

consejo:

'Las hojas deben estar suaves antes de comenzar el armado.',

porQue:

'Una hoja flexible permite cerrar correctamente el tamal.',

mensajeChef:

'La envoltura también es parte de la técnica.',

señalCorrecta:

'La hoja puede doblarse fácilmente.',

errorEvitar:

'Usar hojas secas porque pueden romperse.'
},


{

numero:2,

titulo:'Prepara la masa con chepil',

descripcion:

'Mezcla la masa de maíz con manteca, caldo, sal y las hojas de chepil hasta integrar completamente.',

tiempo:'20 minutos',

consejo:

'La masa debe quedar suave y aireada.',

porQue:

'La textura final del tamal depende de una buena masa.',

mensajeChef:

'El secreto del tamal comienza antes del vapor.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué la manteca es importante en la masa?',

respuestaEsperada:

'Porque aporta suavidad, sabor y una textura más ligera.',

señalCorrecta:

'La masa es húmeda y fácil de extender.',

errorEvitar:

'Dejar una masa seca o demasiado dura.'
},


{

numero:3,

titulo:'Forma los tamales',

descripcion:

'Coloca una porción de masa sobre la hoja de maíz, cierra formando el tamal y acomoda para cocinar.',

tiempo:'25 minutos',

consejo:

'Procura que todos tengan tamaño parecido para una cocción uniforme.',

porQue:

'El tamaño influye directamente en el tiempo de cocción.',

mensajeChef:

'La uniformidad también es técnica profesional.',

señalCorrecta:

'Los tamales están bien cerrados.',

errorEvitar:

'Poner demasiada masa porque puede quedar cruda.'
},


{

numero:4,

titulo:'Cocina al vapor',

descripcion:

'Acomoda los tamales en una vaporera y cocina hasta que la masa se desprenda fácilmente de la hoja.',

tiempo:'45 minutos',

consejo:

'Evita abrir constantemente la vaporera porque pierde temperatura.',

porQue:

'El vapor transforma la masa y termina la cocción.',

mensajeChef:

'El tiempo también cocina.',

nivelImportancia:'critico',

señalCorrecta:

'La hoja se separa fácilmente del tamal.',

errorEvitar:

'Sacarlos antes de tiempo porque la masa queda pegajosa.'
},


{

numero:5,

titulo:'Sirve con salsa roja',

descripcion:

'Sirve los tamales calientes acompañados con salsa roja tradicional.',

tiempo:'10 minutos',

consejo:

'La salsa debe complementar el sabor del chepil, no cubrirlo.',

porQue:

'El ingrediente regional debe seguir siendo protagonista.',

mensajeChef:

'Hoy cocinaste una parte de la historia de Oaxaca.',

señalCorrecta:

'El tamal tiene aroma herbal, textura suave y sabor equilibrado.',

errorEvitar:

'Excederse con salsa y perder el sabor del chepil.'
}

],


tip:

'La masa puede reposar unos minutos antes de armar los tamales para mejorar la textura.',


ahorro:

'Los tamales permiten transformar ingredientes sencillos en varias porciones rendidoras.',


errorComun:

'No batir o hidratar correctamente la masa, provocando tamales pesados.',


tags:[

'oaxaca',

'desayuno_mexicano',

'tamal',

'tradicional'

],


tipoComida:'familia',


popularidad:88,


historiaChef:

'El tamal de chepil representa la relación entre la cocina oaxaqueña y sus ingredientes locales. El chepil aporta identidad, aroma y memoria culinaria a una preparación basada en maíz.',


trucoChef:

'Una buena masa debe sentirse suave y ligera antes de entrar a la vaporera.',


momento:'diario',


ocasion:[

'familia',

'diario'

],


sustituciones:[

{

falta:'chepil',

reemplazo:'otra hierba regional, aunque cambiará la identidad original'

}

],


chefInicio:

'Hoy aprenderemos cómo una hierba tradicional puede transformar una preparación milenaria de maíz.',


chefFinal:

'Has preparado un desayuno donde el ingrediente principal es la cultura de una región.',


señalesExito:{

vista:

'Tamal uniforme con hoja limpia y masa bien cocida.',

olor:

'Aroma de maíz cocido y hierba fresca.',

textura:

'Masa suave, húmeda y ligera.'

},


rescates:[

{

problema:'El tamal quedó seco',

solucion:

'Revisar la cantidad de grasa y caldo utilizado en la masa.'

},

{

problema:'La masa quedó cruda',

solucion:

'Necesita más tiempo de vapor; revisar que la vaporera mantenga temperatura.'
}

]


};