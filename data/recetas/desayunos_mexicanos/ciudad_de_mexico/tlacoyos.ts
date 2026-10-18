import type { Receta } from '@/types/receta';


export const TLACOYOS: Receta = {


id:'tlacoyos-cdmx',


titulo:'Tlacoyos estilo CDMX',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/ciudad_de_mexico/tlacoyos.webp'
),


descripcion:

'Antojito tradicional de la Ciudad de México preparado con masa de maíz rellena de frijol y cocida al comal. Una receta con raíces prehispánicas que permanece viva en mercados y cocinas tradicionales capitalinas.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Ciudad de México',

estadoOrigen:'Ciudad de México',

tradicion:'antojito de raíz prehispánica conservado en mercados y cocinas tradicionales capitalinas'

},


tecnicaPrincipal:

'trabajo de masa nixtamalizada, relleno tradicional y cocción al comal',



// 🎯 CLASIFICACIÓN

categoria:'desayuno',


porciones:4,


tiempoMinutos:40,


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

id:'frijol_negro',

cantidad:0.300,

unidad:'kg'

},


{

id:'queso_fresco',

cantidad:0.150,

unidad:'kg'

},


{

id:'sal',

cantidad:0.008,

unidad:'kg'

}

],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'control de textura de masa de maíz',

'técnica de relleno y sellado',

'importancia del comal en la cocina mexicana',

'equilibrio entre maíz y legumbre',

'identidad gastronómica de los mercados capitalinos'

],



// 👨‍🍳 PASOS


pasos:[


{

numero:1,

titulo:'Prepara el relleno de frijol',

descripcion:

'Calienta los frijoles negros y machácalos hasta formar una pasta espesa que pueda colocarse dentro de la masa.',

tiempo:'10 minutos',

consejo:

'El relleno debe tener poca humedad para evitar que el tlacoyo se abra.',

porQue:

'Una consistencia correcta permite mantener la forma durante la cocción.',

mensajeChef:

'La técnica está en respetar la textura de cada ingrediente.',

objetivo:

'Crear un relleno firme y sabroso.',

nivelImportancia:'clave',

señalCorrecta:

'El frijol tiene textura cremosa y puede manejarse fácilmente.',

errorEvitar:

'Usar frijoles demasiado líquidos.'

},



{

numero:2,

titulo:'Prepara la masa',

descripcion:

'Amasa la masa de maíz hasta obtener una textura suave y flexible.',

tiempo:'8 minutos',

consejo:

'La masa debe estar húmeda pero no pegajosa.',

porQue:

'Una buena masa permite formar el tlacoyo sin grietas.',

mensajeChef:

'El maíz ha acompañado la historia de México durante siglos.',

objetivo:

'Conseguir una masa lista para rellenar.',

nivelImportancia:'critico',

señalCorrecta:

'La masa puede moldearse sin romperse.',

errorEvitar:

'Trabajar una masa seca porque se abrirá durante la cocción.'

},



{

numero:3,

titulo:'Rellena y forma los tlacoyos',

descripcion:

'Forma una pieza ovalada de masa, coloca el frijol en el centro, cierra y aplana ligeramente conservando la forma característica.',

tiempo:'12 minutos',

consejo:

'El relleno debe estar distribuido para que cada bocado tenga equilibrio.',

porQue:

'La forma tradicional permite una cocción uniforme en el comal.',

mensajeChef:

'Las manos del cocinero conservan la tradición.',

objetivo:

'Crear tlacoyos uniformes.',

nivelImportancia:'clave',

chefPregunta:

'¿Por qué el tlacoyo tiene forma ovalada?',

respuestaEsperada:

'Porque esa forma permite contener el relleno y cocinarlo correctamente.',

señalCorrecta:

'La pieza mantiene su forma sin grietas.',

errorEvitar:

'Exceder la cantidad de relleno.'

},



{

numero:4,

titulo:'Cocina en comal',

descripcion:

'Coloca los tlacoyos en un comal caliente y cocina ambos lados hasta que estén cocidos y ligeramente dorados.',

tiempo:'10 minutos',

consejo:

'Usa fuego medio para cocinar el interior sin quemar la superficie.',

porQue:

'El comal aporta aromas y textura característica.',

mensajeChef:

'El fuego transforma una masa sencilla en un platillo con identidad.',

objetivo:

'Lograr una cocción uniforme.',

nivelImportancia:'critico',

señalCorrecta:

'Presenta manchas doradas y aroma de maíz tostado.',

errorEvitar:

'Usar fuego demasiado alto.'

},



{

numero:5,

titulo:'Termina y sirve',

descripcion:

'Sirve caliente y agrega queso fresco como acompañamiento.',

tiempo:'5 minutos',

consejo:

'Los complementos deben acompañar el sabor principal del maíz.',

porQue:

'El equilibrio mantiene la esencia tradicional.',

mensajeChef:

'Un platillo sencillo puede contar una historia completa.',

señalCorrecta:

'El tlacoyo tiene masa suave, relleno cremoso y queso fresco.',

errorEvitar:

'Cubrir completamente el sabor del maíz con demasiados ingredientes.'

}

],



// 💡 INFORMACIÓN EXTRA


tip:

'Los tlacoyos tradicionales pueden llevar rellenos como frijol, haba o requesón y suelen acompañarse con nopales, salsa y queso.',


ahorro:

'Es una receta económica porque combina ingredientes básicos de gran rendimiento como maíz y frijol.',


errorComun:

'Preparar la masa demasiado seca o colocar demasiado relleno.',



tags:[

'ciudad_de_mexico',

'cdmx',

'desayuno_mexicano',

'maiz',

'prehispanico',

'mercado'

],



tipoComida:'barata',


popularidad:95,



historiaChef:

'Los tlacoyos son una preparación con raíces antiguas que sobrevivieron en la cocina mexicana. En la Ciudad de México continúan presentes en mercados y puestos tradicionales como símbolo del maíz y la memoria culinaria.',



trucoChef:

'Dejar reposar la masa unos minutos antes de formar ayuda a mejorar la textura final.',



ocasion:[

'diario',


'familia'

],



sustituciones:[

{

falta:'frijol_negro',

reemplazo:'frijol bayo o frijol pinto'

},


{

falta:'queso_fresco',

reemplazo:'queso panela'

}

],



chefInicio:

'Hoy vamos a preparar un platillo donde el maíz conecta la historia antigua de México con la cocina actual de la Ciudad de México.',



chefFinal:

'Preparaste un desayuno tradicional donde la técnica del comal y el maíz son los verdaderos protagonistas.',



señalesExito:{

vista:

'Pieza ovalada ligeramente dorada con relleno de frijol.',

olor:

'Aroma de maíz tostado y frijol cocido.',

textura:

'Exterior firme e interior suave.'

},



rescates:[

{

problema:'El tlacoyo se rompe',

solucion:'Agrega un poco de humedad a la masa y reduce el relleno.'

},


{

problema:'Quedó seco',

solucion:'Reduce tiempo de cocción o mejora la hidratación de la masa.'

}

]


};