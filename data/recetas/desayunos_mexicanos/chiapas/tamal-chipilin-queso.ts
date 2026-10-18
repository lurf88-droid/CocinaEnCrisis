import type { Receta } from '@/types/receta';


export const TAMAL_CHIPILIN_QUESO: Receta = {


id:'tamal-chipilin-queso',


titulo:'Tamal de chipilín con queso',


imagen: require(

'../../../../assets/images/recetas/desayunos_mexicanos/chiapas/tamal-chipilin-queso.webp'

),


descripcion:

'Tamal tradicional chiapaneco elaborado con masa de maíz mezclada con hojas de chipilín y rellena de queso fresco. La cocción al vapor transforma la masa en una preparación suave, aromática y profundamente ligada a la cocina de Chiapas.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Tuxtla Gutiérrez, Chiapa de Corzo y región Central',

estadoOrigen:'Chiapas',

tradicion:'cocina chiapaneca de maíz, hojas regionales y cocción al vapor'

},


tecnicaPrincipal:

'preparación de masa, incorporación de chipilín, relleno, envoltura y cocción al vapor',



// 🎯 CLASIFICACIÓN

nivelChef:3,


categoria:'desayuno',


porciones:6,


tiempoMinutos:75,


dificultad:'media',



// 🧺 INGREDIENTES

ingredientes:[


{

id:'masa_maiz',

cantidad:0.600,

unidad:'kg'

},


{

id:'chipilin',

cantidad:0.080,

unidad:'kg'

},


{

id:'queso_fresco',

cantidad:0.180,

unidad:'kg'

},


{

id:'manteca_cerdo',

cantidad:0.120,

unidad:'kg'

},


{

id:'hoja_maiz',

cantidad:8,

unidad:'pieza'

},


{

id:'sal',

cantidad:0.008,

unidad:'kg'

}


],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'identificación y manejo de una hoja regional como el chipilín',

'control de hidratación y grasa en una masa para tamal',

'distribución uniforme de ingredientes dentro de una masa',

'técnica de relleno y envoltura de tamales',

'control de la cocción al vapor',

'identidad culinaria de la región Central de Chiapas'

],



// 👨‍🍳 PASOS

pasos:[


{

numero:1,

titulo:'Prepara las hojas',

descripcion:

'Coloca las hojas de maíz en agua caliente hasta que estén suaves y flexibles. Escúrrelas y reserva cubiertas para evitar que vuelvan a secarse.',

tiempo:'10 minutos',

consejo:

'Las hojas deben doblarse fácilmente sin quebrarse.',

porQue:

'La hidratación devuelve flexibilidad a la hoja seca y permite envolver la masa sin romperla.',

mensajeChef:

'Antes de envolver, debemos transformar una hoja rígida en una herramienta flexible.',

objetivo:

'Obtener hojas suaves y resistentes para formar los tamales.',

nivelImportancia:'clave',

chefPregunta:

'¿Cómo sabemos que una hoja de maíz está lista para utilizarse?',

respuestaEsperada:

'Cuando puede doblarse y manipularse sin romperse.',

señalCorrecta:

'La hoja está flexible, húmeda y puede doblarse sobre sí misma.',

errorEvitar:

'Intentar envolver el tamal con hojas todavía rígidas.'

},



{

numero:2,

titulo:'Prepara el chipilín',

descripcion:

'Lava y desinfecta el chipilín. Separa las hojas tiernas de los tallos gruesos y escúrrelas muy bien antes de incorporarlas a la masa.',

tiempo:'8 minutos',

consejo:

'Evita incorporar demasiada agua junto con las hojas.',

porQue:

'El exceso de humedad puede modificar la consistencia de la masa y dificultar el formado del tamal.',

mensajeChef:

'Los ingredientes frescos también aportan agua; un cocinero aprende a considerarla.',

objetivo:

'Obtener hojas limpias, tiernas y con poca humedad superficial.',

nivelImportancia:'clave',

señalCorrecta:

'Las hojas están limpias, verdes y sin exceso de agua.',

errorEvitar:

'Incorporar tallos gruesos o chipilín empapado.'

},



{

numero:3,

titulo:'Trabaja la masa',

descripcion:

'Coloca la masa de maíz en un recipiente amplio. Incorpora poco a poco la manteca de cerdo y la sal mientras amasas hasta obtener una mezcla suave, uniforme y fácil de extender.',

tiempo:'8 minutos',

consejo:

'No agregues toda la grasa de golpe; intégrala gradualmente para observar cómo cambia la textura.',

porQue:

'La grasa ayuda a suavizar la masa y contribuye a que el tamal tenga una textura tierna después de la cocción.',

mensajeChef:

'Una buena masa no depende solo de cantidades; depende de aprender a reconocer su textura.',

objetivo:

'Conseguir una masa homogénea, suave y manejable.',

nivelImportancia:'critico',

chefPregunta:

'¿Qué buscamos al incorporar la manteca a la masa?',

respuestaEsperada:

'Una masa más suave, uniforme y adecuada para la cocción al vapor.',

señalCorrecta:

'La masa puede extenderse sobre una hoja sin desmoronarse ni escurrir.',

errorEvitar:

'Dejar partes con exceso de grasa y otras sin integrar.'

},



{

numero:4,

titulo:'Incorpora el chipilín',

descripcion:

'Agrega las hojas de chipilín preparadas a la masa y mezcla suavemente hasta distribuirlas de manera uniforme.',

tiempo:'4 minutos',

consejo:

'Distribuye las hojas por toda la masa en lugar de concentrarlas en una sola zona.',

porQue:

'Una distribución uniforme permite que cada tamal conserve el aroma y carácter vegetal del chipilín.',

mensajeChef:

'Cuando un ingrediente define la identidad de un plato, debe sentirse de principio a fin.',

objetivo:

'Crear una masa donde el chipilín esté distribuido uniformemente.',

nivelImportancia:'critico',

señalCorrecta:

'Se observan hojas de chipilín repartidas por toda la masa.',

errorEvitar:

'Amasar agresivamente hasta triturar completamente las hojas.'

},



{

numero:5,

titulo:'Rellena y envuelve',

descripcion:

'Extiende una porción de masa con chipilín sobre el centro de cada hoja de maíz. Coloca queso fresco en el centro y dobla la masa ligeramente sobre el relleno antes de cerrar la hoja.',

tiempo:'12 minutos',

consejo:

'Deja espacio alrededor de la masa para poder cerrar cómodamente la hoja.',

porQue:

'El tamal necesita espacio para mantener su estructura mientras la masa se cocina y se expande ligeramente.',

mensajeChef:

'Rellenar bien no significa rellenar mucho; significa encontrar equilibrio.',

objetivo:

'Formar tamales uniformes con el queso completamente contenido.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué no debemos llenar completamente la hoja con masa?',

respuestaEsperada:

'Porque necesitamos espacio para cerrar el tamal y permitir que conserve su forma durante la cocción.',

señalCorrecta:

'La hoja cierra sin presión excesiva y el relleno permanece cubierto por la masa.',

errorEvitar:

'Colocar demasiado queso o masa y dificultar el cierre.'

},



{

numero:6,

titulo:'Acomoda la vaporera',

descripcion:

'Coloca agua en la parte inferior de la vaporera sin permitir que toque directamente los tamales. Acomoda los tamales procurando mantenerlos estables y cubre la vaporera.',

tiempo:'5 minutos',

consejo:

'Comprueba el nivel de agua antes de comenzar; quedarse sin agua durante la cocción puede dañar la vaporera y los tamales.',

porQue:

'El tamal se cocina mediante vapor, no por contacto directo con el agua.',

mensajeChef:

'Entender cómo viaja el calor es parte de aprender a cocinar.',

objetivo:

'Preparar un ambiente constante de vapor para cocinar uniformemente los tamales.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué el agua no debe tocar directamente los tamales?',

respuestaEsperada:

'Porque buscamos cocinarlos con vapor y no hervirlos en agua.',

señalCorrecta:

'Los tamales están acomodados sobre la rejilla y el agua permanece debajo de ella.',

errorEvitar:

'Agregar tanta agua que alcance directamente las hojas.'

},



{

numero:7,

titulo:'Cocina al vapor',

descripcion:

'Cocina los tamales con la vaporera tapada a fuego medio durante aproximadamente 40 minutos. Mantén una producción constante de vapor y revisa el agua únicamente si es necesario.',

tiempo:'40 minutos',

consejo:

'Evita abrir constantemente la vaporera porque cada apertura libera calor y vapor.',

porQue:

'Una temperatura estable permite que la masa gelatinice y se cocine de manera uniforme.',

mensajeChef:

'En una cocción al vapor, la paciencia también es una técnica.',

objetivo:

'Cocinar completamente la masa sin resecar el tamal.',

nivelImportancia:'critico',

señalCorrecta:

'La masa se observa firme y comienza a separarse con facilidad de la hoja.',

errorEvitar:

'Abrir repetidamente la vaporera y prolongar innecesariamente la cocción.'

},



{

numero:8,

titulo:'Comprueba y deja reposar',

descripcion:

'Retira un tamal y abre ligeramente la hoja. Si la masa se desprende con facilidad y conserva su forma, retira los tamales del fuego y déjalos reposar unos minutos antes de servir.',

tiempo:'5 minutos',

consejo:

'No juzgues la textura inmediatamente al apagar el fuego; el breve reposo ayuda a estabilizar la masa.',

porQue:

'La masa termina de asentarse mientras disminuye ligeramente su temperatura.',

mensajeChef:

'Aprender a reconocer cuándo una preparación está lista vale más que depender únicamente del reloj.',

objetivo:

'Confirmar la cocción mediante señales físicas y estabilizar la textura antes de servir.',

nivelImportancia:'clave',

chefPregunta:

'¿Cuál es una mejor señal de cocción que mirar solamente el reloj?',

respuestaEsperada:

'Que la masa esté firme y se desprenda fácilmente de la hoja.',

señalCorrecta:

'El tamal mantiene su forma y la masa se separa de la hoja sin quedar pegajosa.',

errorEvitar:

'Continuar cocinando únicamente porque todavía no se cumplió un tiempo exacto.'

}

],



// 💡 INFORMACIÓN EXTRA

tip:

'Escurre muy bien el chipilín antes de incorporarlo. Una pequeña cantidad de agua parece insignificante, pero puede modificar notablemente una masa para tamal.',


ahorro:

'El maíz constituye la mayor parte de la preparación; una cantidad moderada de queso permite aportar sabor y relleno sin elevar demasiado el costo por pieza.',


errorComun:

'Trabajar con una masa demasiado húmeda o colocar demasiado relleno, provocando tamales difíciles de cerrar y con estructura irregular.',



tags:[

'chiapas',

'tuxtla_gutierrez',

'chiapa_de_corzo',

'region_central_chiapas',

'desayuno_mexicano',

'tamal',

'chipilin',

'maiz',

'queso',

'tradicional'

],


tipoComida:'llenadora',


popularidad:95,


historiaChef:

'El chipilín es una hoja estrechamente ligada a la cocina del sureste mexicano y tiene una presencia especialmente importante en Chiapas. Al incorporarlo directamente a la masa, el tamal adquiere un carácter vegetal y aromático que lo distingue de muchas otras familias de tamales mexicanos.',


trucoChef:

'Antes de preparar todos los tamales, extiende una pequeña cantidad de masa sobre una hoja. Si puedes distribuirla fácilmente sin que se desmorone ni escurra, tienes una buena consistencia para comenzar a formar.',


momento:'diario',


ocasion:[

'diario',

'familia',



],


sustituciones:[

{

falta:'queso_fresco',

reemplazo:'queso panela, aunque cambia ligeramente la textura del relleno'

},

{

falta:'manteca_cerdo',

reemplazo:'aceite vegetal en menor cantidad, aunque modifica la textura y el carácter tradicional'

}

],


chefInicio:

'Hoy viajamos al corazón de Chiapas para trabajar con uno de sus ingredientes vegetales más característicos: el chipilín. Aprenderás que un tamal no es solamente masa y relleno; también es hidratación, estructura, envoltura y control del vapor.',


chefFinal:

'Aprendiste a preparar una masa aromatizada con una hoja regional, controlar su consistencia, envolver un relleno y reconocer una cocción correcta al vapor. También conociste una de las expresiones más representativas de la cocina chiapaneca.',


señalesExito:{

vista:

'Tamal bien formado con masa clara salpicada por hojas verdes de chipilín y queso visible al abrir el centro.',

olor:

'Aroma cálido de maíz cocido acompañado por notas herbales del chipilín.',

textura:

'Masa suave, húmeda pero firme, que se desprende de la hoja y contrasta con el queso del interior.'

},


rescates:[

{

problema:'La masa queda demasiado seca y se agrieta al extenderla',

solucion:

'Incorpora una pequeña cantidad de agua o caldo, mezcla nuevamente y comprueba la consistencia antes de continuar.'

},

{

problema:'La masa está demasiado húmeda y no mantiene su forma',

solucion:

'Agrega una pequeña cantidad adicional de masa de maíz y mezcla hasta recuperar una consistencia manejable.'

},

{

problema:'El tamal sigue pegándose a la hoja después del tiempo estimado',

solucion:

'Continúa la cocción al vapor durante algunos minutos más y vuelve a comprobar una pieza.'

},

{

problema:'El queso comienza a salir durante el formado',

solucion:

'Reduce la cantidad de relleno y asegúrate de cubrirlo completamente con masa antes de cerrar la hoja.'

}

]


};