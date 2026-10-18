import type { Receta } from '@/types/receta';


export const TAMAL_BOLA_CHIAPANECO: Receta = {


id:'tamal-bola-chiapaneco',


titulo:'Tamal de bola chiapaneco',


imagen: require(

'../../../../assets/images/recetas/desayunos_mexicanos/chiapas/tamal-bola-chiapaneco.webp'

),


descripcion:

'Tamal tradicional de Chiapas elaborado con masa de maíz, manteca y chicharrón, relleno con carne de cerdo y un recado aromático de jitomate, chile Simojovel y especias. Su característica forma compacta y redondeada le da el nombre de tamal de bola.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Chiapa de Corzo, Valles Centrales y Comitán',

estadoOrigen:'Chiapas',

tradicion:'cocina tamalera chiapaneca basada en maíz, cerdo, chile regional y cocción al vapor'

},


tecnicaPrincipal:

'preparación de recado, cocción de cerdo, trabajo de masa, formado redondeado, envoltura y cocción al vapor',



// 🎯 CLASIFICACIÓN

nivelChef:4,


categoria:'desayuno',


porciones:6,


tiempoMinutos:110,


dificultad:'avanzada',



// 🧺 INGREDIENTES

ingredientes:[


{

id:'masa_maiz',

cantidad:0.550,

unidad:'kg'

},


{

id:'costilla_cerdo',

cantidad:0.250,

unidad:'kg'

},


{

id:'manteca_cerdo',

cantidad:0.200,

unidad:'kg'

},


{

id:'chicharron_cerdo',

cantidad:0.125,

unidad:'kg'

},


{

id:'jitomate',

cantidad:0.125,

unidad:'kg'

},


{

id:'chile_simojovel',

cantidad:0.015,

unidad:'kg'

},


{

id:'tomillo',

cantidad:0.002,

unidad:'kg'

},


{

id:'oregano',

cantidad:0.002,

unidad:'kg'

},


{

id:'comino',

cantidad:0.001,

unidad:'kg'

},


{

id:'sal',

cantidad:0.008,

unidad:'kg'

},


{

id:'hoja_maiz',

cantidad:8,

unidad:'pieza'

}


],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'preparación de un recado regional para tamal',

'control de cocción de carne de cerdo',

'uso del chicharrón como elemento de sabor y grasa en una masa',

'control de consistencia de una masa para tamal',

'formado compacto y redondeado de un tamal',

'control de una cocción prolongada al vapor',

'uso culinario del chile Simojovel',

'identidad tamalera tradicional de Chiapas'

],



// 👨‍🍳 PASOS

pasos:[


{

numero:1,

titulo:'Suaviza las hojas de maíz',

descripcion:

'Coloca las hojas de maíz en agua caliente hasta que pierdan rigidez. Escúrrelas y mantenlas cubiertas mientras preparas los demás elementos.',

tiempo:'10 minutos',

consejo:

'Selecciona hojas suficientemente anchas para contener la forma compacta del tamal.',

porQue:

'Una hoja flexible puede doblarse alrededor de la masa sin quebrarse durante el formado.',

mensajeChef:

'La envoltura también forma parte de la técnica: primero debemos hacerla flexible.',

objetivo:

'Obtener hojas suaves y resistentes para envolver los tamales.',

nivelImportancia:'clave',

chefPregunta:

'¿Qué señal indica que la hoja está suficientemente hidratada?',

respuestaEsperada:

'Puede doblarse fácilmente sin quebrarse.',

señalCorrecta:

'La hoja se siente flexible y puede plegarse sobre sí misma.',

errorEvitar:

'Trabajar con hojas todavía secas y quebradizas.'

},



{

numero:2,

titulo:'Prepara el recado chiapaneco',

descripcion:

'Cocina el jitomate hasta que se suavice. Tritúralo con chile Simojovel, tomillo, orégano, comino y una pequeña cantidad de sal hasta obtener una mezcla espesa y aromática.',

tiempo:'12 minutos',

consejo:

'Comienza con una cantidad moderada de chile Simojovel; su función es aportar carácter sin ocultar los demás aromas.',

porQue:

'El recado concentra los sabores que acompañarán la carne y aportarán identidad al interior del tamal.',

mensajeChef:

'Un buen recado no es una colección de especias: es equilibrio entre aroma, picante y profundidad.',

objetivo:

'Obtener una salsa espesa y aromática que pueda adherirse a la carne.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué queremos un recado espeso y no demasiado líquido?',

respuestaEsperada:

'Porque un relleno con exceso de líquido puede humedecer demasiado la masa y dificultar el formado.',

señalCorrecta:

'El recado cubre una cuchara sin escurrir inmediatamente como agua.',

errorEvitar:

'Agregar demasiado líquido durante el molido.'

},



{

numero:3,

titulo:'Cocina la carne con el recado',

descripcion:

'Coloca la costilla de cerdo en una olla y cocina hasta que comience a suavizarse. Incorpora el recado y continúa la cocción hasta que la carne esté cocida y cubierta por una salsa concentrada.',

tiempo:'25 minutos',

consejo:

'Si el líquido disminuye demasiado antes de que la carne esté suave, incorpora pequeñas cantidades de agua caliente.',

porQue:

'La carne necesita desarrollar suavidad mientras absorbe los aromas del recado sin convertir el relleno en una preparación aguada.',

mensajeChef:

'Reducir una salsa significa concentrar sabor, pero siempre debemos proteger la textura del ingrediente principal.',

objetivo:

'Conseguir carne cocida y sabrosa con un recado concentrado.',

nivelImportancia:'critico',

chefPregunta:

'¿Qué buscamos antes de utilizar la carne como relleno?',

respuestaEsperada:

'Que esté cocida y que el recado tenga poca humedad libre.',

señalCorrecta:

'La carne está cocida y cubierta por una capa de recado espeso.',

errorEvitar:

'Usar un relleno excesivamente líquido.'

},



{

numero:4,

titulo:'Integra el chicharrón a la masa',

descripcion:

'Tritura finamente el chicharrón de cerdo. Coloca la masa de maíz en un recipiente amplio e incorpora gradualmente la manteca, el chicharrón triturado y la sal hasta obtener una masa uniforme.',

tiempo:'10 minutos',

consejo:

'El chicharrón debe quedar bien triturado para distribuirse por toda la masa.',

porQue:

'El chicharrón aporta sabor, grasa y profundidad, mientras que una distribución uniforme evita zonas con texturas demasiado diferentes.',

mensajeChef:

'Cuando incorporamos grasa y sabor directamente a una masa, cada bocado debe recibir una parte de ellos.',

objetivo:

'Crear una masa homogénea, sabrosa y suficientemente flexible para formar.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué trituramos el chicharrón antes de incorporarlo?',

respuestaEsperada:

'Para distribuirlo uniformemente y evitar trozos grandes que dificulten el formado.',

señalCorrecta:

'La masa tiene una textura uniforme y puede moldearse sin desmoronarse.',

errorEvitar:

'Dejar grandes pedazos de chicharrón dentro de la masa.'

},



{

numero:5,

titulo:'Comprueba la consistencia de la masa',

descripcion:

'Toma una pequeña porción de masa y presiónala entre las manos. Debe conservar su forma, sentirse suave y poder extenderse sin presentar grietas profundas.',

tiempo:'3 minutos',

consejo:

'Si está demasiado seca, incorpora muy poca agua y vuelve a amasar antes de agregar más.',

porQue:

'La masa debe ser suficientemente flexible para contener el relleno y soportar el formado característico del tamal.',

mensajeChef:

'Antes de formar todas las piezas, hacemos una prueba pequeña. Eso evita repetir un error seis veces.',

objetivo:

'Confirmar que la masa está preparada para rellenar y envolver.',

nivelImportancia:'critico',

señalCorrecta:

'La masa conserva su forma y sus bordes no se rompen profundamente al presionarla.',

errorEvitar:

'Corregir la hidratación agregando demasiada agua de una sola vez.'

},



{

numero:6,

titulo:'Forma el tamal de bola',

descripcion:

'Coloca una porción de masa sobre una hoja de maíz y acomoda una porción de carne con recado en el centro. Cubre el relleno con la masa y moldea cuidadosamente hasta conseguir una pieza compacta y redondeada.',

tiempo:'12 minutos',

consejo:

'Utiliza una cantidad moderada de relleno para que la masa pueda rodearlo completamente.',

porQue:

'La relación entre masa y relleno determina si el tamal conservará su estructura durante la cocción.',

mensajeChef:

'La forma de este tamal no es decoración: es parte de su identidad culinaria.',

objetivo:

'Conseguir una pieza compacta con el relleno completamente encerrado.',

nivelImportancia:'critico',

chefPregunta:

'¿Qué sucede si colocamos demasiado relleno?',

respuestaEsperada:

'Será difícil cubrirlo completamente y el tamal puede abrirse durante la cocción.',

señalCorrecta:

'La masa rodea completamente el relleno y mantiene una forma compacta.',

errorEvitar:

'Sobrecargar el centro con carne y recado.'

},



{

numero:7,

titulo:'Envuelve y asegura',

descripcion:

'Envuelve firmemente cada pieza con la hoja de maíz, adaptándola a la forma redondeada del tamal. Dobla o asegura los extremos para mantener la estructura durante la cocción.',

tiempo:'8 minutos',

consejo:

'La envoltura debe sostener el tamal sin comprimir excesivamente la masa.',

porQue:

'La hoja funciona como soporte mientras el vapor cocina y estabiliza la estructura de la masa.',

mensajeChef:

'Envolver correctamente significa contener, no aplastar.',

objetivo:

'Mantener la forma característica del tamal durante la cocción.',

nivelImportancia:'clave',

señalCorrecta:

'La pieza queda cerrada, estable y conserva su forma dentro de la hoja.',

errorEvitar:

'Dejar la envoltura demasiado floja o comprimir excesivamente el tamal.'

},



{

numero:8,

titulo:'Cocina al vapor',

descripcion:

'Acomoda los tamales en una vaporera con suficiente agua debajo de la rejilla. Tapa y cocina a fuego medio manteniendo vapor constante hasta que la masa esté completamente cocida.',

tiempo:'45 minutos',

consejo:

'Evita abrir continuamente la vaporera; cada vez que lo haces pierdes temperatura y humedad.',

porQue:

'El vapor transmite calor alrededor de la pieza y permite cocinar gradualmente una masa gruesa y rellena.',

mensajeChef:

'Una pieza gruesa necesita tiempo: subir el fuego no sustituye una cocción uniforme.',

objetivo:

'Cocinar completamente la masa y calentar el relleno sin resecar el tamal.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué mantener vapor constante es más importante que usar fuego muy alto?',

respuestaEsperada:

'Porque necesitamos una transferencia de calor uniforme durante toda la cocción.',

señalCorrecta:

'La masa está firme y comienza a separarse limpiamente de la hoja.',

errorEvitar:

'Dejar que la vaporera se quede sin agua.'

},



{

numero:9,

titulo:'Comprueba y deja reposar',

descripcion:

'Abre cuidadosamente un tamal de prueba. Cuando la masa se desprenda de la hoja, mantenga su estructura y no presente zonas crudas, retira los tamales y déjalos reposar unos minutos antes de servir.',

tiempo:'5 minutos',

consejo:

'Utiliza las señales de la masa además del tiempo indicado; el tamaño de cada tamal puede modificar ligeramente la cocción.',

porQue:

'El reposo permite que la masa termine de estabilizar su estructura después de abandonar el ambiente húmedo de la vaporera.',

mensajeChef:

'El reloj orienta; la textura confirma.',

objetivo:

'Verificar una cocción completa y permitir que el tamal estabilice su textura.',

nivelImportancia:'clave',

chefPregunta:

'¿Cuál es nuestra principal señal de que la masa está cocida?',

respuestaEsperada:

'Se mantiene firme y se desprende con facilidad de la hoja.',

señalCorrecta:

'Al abrir el tamal se distingue una masa cocida alrededor del relleno de cerdo y recado.',

errorEvitar:

'Servir inmediatamente una pieza cuya masa todavía se observa pegajosa o cruda.'

}

],



// 💡 INFORMACIÓN EXTRA

tip:

'Deja que el relleno pierda parte de su calor antes de formar los tamales. Un relleno espeso y templado es mucho más fácil de encerrar dentro de la masa.',


ahorro:

'El chicharrón aporta sabor intenso a toda la masa, mientras una cantidad moderada de carne de cerdo permite repartir el relleno entre varias piezas.',


errorComun:

'Preparar un recado demasiado líquido o colocar demasiado relleno, haciendo difícil conservar la forma compacta del tamal.',



tags:[

'chiapas',

'chiapa_de_corzo',

'valles_centrales',

'comitan',

'tamal_chiapaneco',

'tamal_de_bola',

'desayuno_mexicano',

'maiz',

'cerdo',

'chile_simojovel',

'tradicional'

],


tipoComida:'llenadora',


popularidad:92,


historiaChef:

'El tamal de bola pertenece a la amplia tradición tamalera de Chiapas. Su identidad se reconoce tanto por el uso de ingredientes regionales como el chile Simojovel como por su formado compacto, que lo diferencia visualmente de numerosos tamales alargados de otras regiones de México.',


trucoChef:

'Prepara primero una sola pieza y comprueba que la masa pueda rodear completamente el relleno. Si se rompe, corrige la humedad de la masa o reduce la cantidad de relleno antes de formar el resto.',


momento:'aprender',


ocasion:[

'diario',

'familia',

'especial'

],


sustituciones:[

{

falta:'chile_simojovel',

reemplazo:'chile guajillo o chile ancho; cambia el perfil regional tradicional'

},

{

falta:'costilla_cerdo',

reemplazo:'carne de cerdo con algo de grasa, aunque cambia la textura del relleno'

},

{

falta:'chicharron_cerdo',

reemplazo:'puede omitirse ajustando ligeramente la grasa de la masa; cambia el sabor tradicional'

}

],


chefInicio:

'Hoy seguimos nuestro viaje por Chiapas con un tamal cuya identidad comienza desde su forma. Vamos a trabajar recado, carne, masa y vapor para entender cómo varias técnicas se unen dentro de una sola preparación.',


chefFinal:

'Aprendiste a preparar un recado regional, controlar la humedad de un relleno, incorporar chicharrón a una masa, formar una pieza rellena y cocinarla mediante vapor constante. El tamal de bola demuestra que incluso dentro de una misma familia culinaria, cada región puede desarrollar su propia técnica e identidad.',


señalesExito:{

vista:

'Tamal compacto y redondeado, bien contenido por la hoja, con masa cocida que rodea claramente el relleno de cerdo y recado.',

olor:

'Aroma de maíz cocido, cerdo, chile seco y especias cálidas del recado.',

textura:

'Masa suave pero estructurada, relleno jugoso sin exceso de líquido y carne de cerdo tierna.'

},


rescates:[

{

problema:'La masa se rompe al intentar cubrir el relleno',

solucion:

'Revisa su hidratación y agrega una cantidad mínima de agua si está seca. Si la masa está correcta, reduce la cantidad de relleno.'

},

{

problema:'El relleno quedó demasiado líquido',

solucion:

'Cocínalo destapado unos minutos adicionales para reducir el líquido y déjalo templar antes de formar los tamales.'

},

{

problema:'El tamal pierde su forma dentro de la hoja',

solucion:

'Forma una pieza más compacta y ajusta mejor la envoltura sin comprimir excesivamente la masa.'

},

{

problema:'La masa sigue pegándose a la hoja',

solucion:

'Continúa la cocción al vapor durante algunos minutos y vuelve a comprobar otra pieza.'

},

{

problema:'La vaporera comienza a quedarse sin agua',

solucion:

'Agrega cuidadosamente agua caliente para no interrumpir bruscamente la producción de vapor.'

}

]


};