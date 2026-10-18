import type { Receta } from '@/types/receta';


export const TAMALES_VERACRUZANOS_FRIJOL: Receta = {


id:'tamales-veracruzanos-frijol',


titulo:'Tamales veracruzanos de frijol',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/veracruz/tamales-veracruzanos-frijol.webp'
),


descripcion:

'Tamales tradicionales veracruzanos preparados con masa de maíz, manteca y frijol, envueltos en hoja natural. Un desayuno lleno de tradición familiar y sabor mexicano.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Veracruz',

estadoOrigen:'Veracruz',

tradicion:'tamalería veracruzana tradicional basada en maíz, frijol y cocción al vapor'

},


tecnicaPrincipal:

'preparación de masa enriquecida, formado del tamal, envoltura en hoja y cocción al vapor',



// 🎯 CLASIFICACIÓN

categoria:'desayuno',
rolCulinario: 'plato_principal',

porciones:8,


tiempoMinutos:120,


dificultad:'media',


nivelChef:2,



// 🧺 INGREDIENTES


ingredientes:[


{

id:'masa_maiz',

cantidad:1,

unidad:'kg'

},


{

id:'manteca_cerdo',

cantidad:0.200,

unidad:'kg'

},


{

id:'frijol_negro',

cantidad:0.500,

unidad:'kg'

},


{

id:'hoja_platano',

cantidad:10,

unidad:'pieza'

},


{

id:'sal',

cantidad:0.015,

unidad:'kg'

}


],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'preparación correcta de masa para tamales',

'importancia de la grasa en la textura',

'técnica de envoltura tradicional',

'control de cocción al vapor',

'identidad culinaria veracruzana'

],



// 👨‍🍳 PASOS


pasos:[


{

numero:1,

titulo:'Prepara el relleno de frijol',

descripcion:

'Calienta los frijoles negros cocidos y machácalos hasta obtener una pasta espesa con buen sabor.',

tiempo:'15 minutos',

consejo:

'El relleno debe tener poca humedad para evitar que la masa quede aguada.',

porQue:

'Un relleno firme permite conservar la estructura del tamal.',

mensajeChef:

'La tradición comienza cuidando los detalles simples.',

objetivo:

'Crear un relleno estable y sabroso.',

nivelImportancia:'clave',

señalCorrecta:

'El frijol tiene textura cremosa y no es líquido.',

errorEvitar:

'Usar frijoles con demasiado caldo.'

},



{

numero:2,

titulo:'Prepara la masa',

descripcion:

'Mezcla la masa de maíz con manteca y sal hasta obtener una textura suave y aireada.',

tiempo:'20 minutos',

consejo:

'La masa debe sentirse ligera y poder untarse fácilmente.',

porQue:

'La manteca aporta suavidad y evita que el tamal quede seco.',

mensajeChef:

'Una buena masa es el alma del tamal.',

objetivo:

'Conseguir una masa con textura correcta.',

nivelImportancia:'critico',

señalCorrecta:

'La masa es suave y mantiene humedad.',

errorEvitar:

'Usar una masa seca porque dará un tamal pesado.'

},



{

numero:3,

titulo:'Prepara las hojas',

descripcion:

'Limpia y suaviza las hojas de plátano con calor para hacerlas flexibles.',

tiempo:'10 minutos',

consejo:

'La hoja debe doblarse sin romperse.',

porQue:

'Una buena envoltura protege el tamal durante la cocción.',

mensajeChef:

'La presentación también nace desde la preparación.',

objetivo:

'Tener hojas listas para envolver.',

nivelImportancia:'normal',

señalCorrecta:

'La hoja está flexible y limpia.',

errorEvitar:

'Usar hojas rígidas porque se romperán.'

},



{

numero:4,

titulo:'Forma los tamales',

descripcion:

'Extiende masa sobre la hoja, agrega frijol y cierra formando el tamal.',

tiempo:'25 minutos',

consejo:

'No pongas demasiado relleno para facilitar el cierre.',

porQue:

'La proporción correcta permite una cocción uniforme.',

mensajeChef:

'Cada tamal lleva un poco de paciencia y tradición.',

objetivo:

'Crear tamales uniformes.',

nivelImportancia:'clave',

señalCorrecta:

'El tamal queda bien cerrado.',

errorEvitar:

'Dejar espacios abiertos donde entre agua.'

},



{

numero:5,

titulo:'Cocina al vapor',

descripcion:

'Coloca los tamales en una vaporera y cocina hasta que la masa se despegue fácilmente de la hoja.',

tiempo:'50 minutos',

consejo:

'Revisa el nivel de agua durante la cocción.',

porQue:

'El vapor cocina lentamente la masa sin resecarla.',

mensajeChef:

'La paciencia también es una técnica culinaria.',

objetivo:

'Lograr una cocción completa.',

nivelImportancia:'critico',

señalCorrecta:

'La masa se separa fácilmente de la hoja.',

errorEvitar:

'Sacarlos antes de tiempo porque quedarán crudos.'

}

],



tip:

'En Veracruz existen muchas variantes de tamales con diferentes rellenos y tipos de hoja según la región.',


ahorro:

'Los tamales permiten transformar ingredientes económicos en varias porciones, ideales para familia o venta.',


errorComun:

'No batir correctamente la masa o usar poca grasa y obtener tamales secos.',



tags:[

'veracruz',

'desayuno_mexicano',

'tamal',

'maiz',

'frijol',

'tradicional'

],



tipoComida:'barata',


popularidad:95,



historiaChef:

'Los tamales forman parte de la memoria culinaria de Veracruz. Su preparación reúne maíz, técnicas ancestrales y tradición familiar transmitida durante generaciones.',



trucoChef:

'Una masa bien preparada debe sentirse ligera; algunos cocineros prueban la textura antes de armar todos los tamales.',



ocasion:[

'familia',


],



sustituciones:[

{

falta:'frijol negro',

reemplazo:'frijol bayo'

},

{

falta:'manteca de cerdo',

reemplazo:'aceite vegetal'

},

{

falta:'hoja de plátano',

reemplazo:'hoja de maíz'

}

],



chefInicio:

'Hoy vamos a preparar un desayuno que representa la unión entre maíz, tradición y familia mexicana.',



chefFinal:

'Terminaste una preparación donde la técnica y la paciencia son tan importantes como los ingredientes.',



señalesExito:{

vista:

'Tamal uniforme con hoja bien acomodada.',

olor:

'Aroma de maíz cocido y frijol.',

textura:

'Masa suave, húmeda y bien cocida.'

},



rescates:[

{

problema:'La masa quedó seca',

solucion:'Aumenta ligeramente la grasa o revisa el tiempo de cocción.'

},


{

problema:'El tamal quedó crudo',

solucion:'Regresa a vapor hasta que la masa se desprenda fácilmente.'

}

]


};