import type { Receta } from '@/types/receta';


export const TAMAL_JUACANE_CHIAPANECO: Receta = {


id:'tamal-juacane-chiapaneco',


titulo:'Tamal de juacané',


imagen: require(

'../../../../assets/images/recetas/desayunos_mexicanos/chiapas/tamal-juacane-chiapaneco.webp'

),


descripcion:

'Tamal tradicional chiapaneco elaborado con masa de maíz y un relleno de frijol negro, pepita de calabaza y cabeza de camarón seco, aromatizado con hierba santa y chile Simojovel. Se envuelve en hoja de plátano y se cocina al vapor.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Chiapa de Corzo y región Central de Chiapas',

estadoOrigen:'Chiapas',

tradicion:'cocina tradicional chiapaneca y zoque basada en maíz, frijol, pepita, productos secos y hierbas aromáticas locales'

},


tecnicaPrincipal:

'tostado y molienda, preparación de relleno de frijol y pepita, trabajo de masa, aromatización con hierba santa, envoltura en hoja de plátano y cocción al vapor',



// 🎯 CLASIFICACIÓN

nivelChef:4,


categoria:'desayuno',


porciones:6,


tiempoMinutos:95,


dificultad:'avanzada',



// 🧺 INGREDIENTES

ingredientes:[


{

id:'masa_maiz',

cantidad:0.600,

unidad:'kg'

},


{

id:'frijol_negro',

cantidad:0.250,

unidad:'kg'

},


{

id:'pepita_calabaza',

cantidad:0.150,

unidad:'kg'

},


{

id:'cabeza_camaron_seco',

cantidad:0.150,

unidad:'kg'

},


{

id:'hierba_santa',

cantidad:6,

unidad:'pieza'

},


{

id:'chile_simojovel',

cantidad:0.030,

unidad:'kg'

},


{

id:'manteca_cerdo',

cantidad:0.100,

unidad:'kg'

},


{

id:'sal',

cantidad:0.006,

unidad:'kg'

},


{

id:'hoja_platano',

cantidad:6,

unidad:'pieza'

}


],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'tostado controlado de semillas e ingredientes secos',

'uso de cabeza de camarón seco como concentrador de sabor',

'manejo culinario de pepita de calabaza',

'control de humedad en un relleno de frijol',

'uso aromático de hierba santa',

'uso regional del chile Simojovel',

'equilibrio entre sabores terrosos, marinos y herbales',

'acondicionamiento de hoja de plátano',

'formado de tamales rellenos',

'control de cocción al vapor',

'identidad culinaria tradicional de Chiapas'

],



// 👨‍🍳 PASOS

pasos:[


{

numero:1,

titulo:'Cuece los frijoles',

descripcion:

'Cuece los frijoles negros previamente remojados hasta que estén completamente suaves. Escúrrelos reservando una pequeña cantidad del líquido de cocción.',

tiempo:'35 minutos',

consejo:

'Necesitamos frijoles muy suaves porque posteriormente formarán parte de un relleno espeso.',

porQue:

'Una leguminosa completamente cocida puede triturarse hasta formar una textura uniforme sin dejar partículas duras.',

mensajeChef:

'Antes de transformar un ingrediente debemos llevarlo al punto adecuado para la técnica que sigue.',

objetivo:

'Obtener frijoles suaves y preparados para formar el relleno.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué reservamos un poco del líquido de cocción?',

respuestaEsperada:

'Para poder ajustar posteriormente la consistencia del relleno sin agregar agua sin sabor.',

señalCorrecta:

'El frijol se aplasta fácilmente entre los dedos o con una cuchara.',

errorEvitar:

'Intentar moler frijoles todavía firmes.'

},



{

numero:2,

titulo:'Acondiciona las hojas de plátano',

descripcion:

'Limpia las hojas de plátano y pásalas brevemente sobre un comal o superficie caliente, moviéndolas continuamente hasta que se vuelvan flexibles. Córtalas en secciones adecuadas para envolver los tamales.',

tiempo:'7 minutos',

consejo:

'El cambio ocurre rápidamente; no dejes la hoja inmóvil sobre el calor.',

porQue:

'El calor suaviza las fibras de la hoja y permite doblarla sin que se quiebre.',

mensajeChef:

'La envoltura también es un ingrediente técnico: debemos prepararla antes de utilizarla.',

objetivo:

'Conseguir hojas flexibles, limpias y resistentes.',

nivelImportancia:'clave',

señalCorrecta:

'La hoja cambia ligeramente de tono y puede doblarse sin romperse.',

errorEvitar:

'Quemar o resecar la hoja.'

},



{

numero:3,

titulo:'Tuesta la pepita',

descripcion:

'Coloca la pepita de calabaza en un comal o sartén seco a fuego medio-bajo. Muévela constantemente hasta que desprenda aroma y presente un tostado ligero.',

tiempo:'4 minutos',

consejo:

'Retírala en cuanto desarrolle aroma; el calor residual continuará actuando algunos instantes.',

porQue:

'El tostado desarrolla aromas y sabores que permanecen menos evidentes en la semilla cruda.',

mensajeChef:

'Tostar no significa quemar: buscamos despertar aromas, no producir amargor.',

objetivo:

'Desarrollar el carácter tostado de la pepita sin quemarla.',

nivelImportancia:'critico',

chefPregunta:

'¿Qué sucede si llevamos demasiado lejos el tostado?',

respuestaEsperada:

'La pepita puede desarrollar sabores amargos y quemados.',

señalCorrecta:

'La pepita desprende aroma tostado agradable sin presentar zonas negras.',

errorEvitar:

'Utilizar fuego muy alto.'

},



{

numero:4,

titulo:'Tuesta la cabeza de camarón',

descripcion:

'Tuesta brevemente la cabeza de camarón seco sobre un comal limpio a fuego bajo, moviéndola continuamente hasta intensificar su aroma.',

tiempo:'3 minutos',

consejo:

'Este ingrediente ya está seco, por lo que necesita muy poco tiempo sobre el calor.',

porQue:

'Un tostado breve intensifica sus compuestos aromáticos y facilita posteriormente su molienda.',

mensajeChef:

'Los ingredientes secos concentran sabor; debemos trabajar con ellos con precisión.',

objetivo:

'Intensificar el aroma del camarón sin quemarlo.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué usamos un tostado breve?',

respuestaEsperada:

'Porque el ingrediente ya tiene poca humedad y puede quemarse rápidamente.',

señalCorrecta:

'El aroma marino se vuelve más intenso sin olor a quemado.',

errorEvitar:

'Dejar la cabeza de camarón demasiado tiempo sobre el comal.'

},



{

numero:5,

titulo:'Muele pepita, camarón y chile',

descripcion:

'Muele la pepita tostada junto con la cabeza de camarón seco y el chile Simojovel hasta obtener una mezcla fina y aromática.',

tiempo:'5 minutos',

consejo:

'Busca una molienda uniforme para que ningún ingrediente aparezca en concentraciones excesivas dentro del relleno.',

porQue:

'La molienda distribuye sabores intensos entre toda la preparación y facilita su integración con el frijol.',

mensajeChef:

'Aquí estamos construyendo concentración: semilla, mar y chile convertidos en una sola base.',

objetivo:

'Crear una mezcla seca, fina y aromática para enriquecer el relleno.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué buscamos una molienda relativamente fina?',

respuestaEsperada:

'Para distribuir uniformemente los sabores dentro del relleno.',

señalCorrecta:

'La mezcla presenta partículas pequeñas y un aroma tostado, marino y ligeramente picante.',

errorEvitar:

'Dejar fragmentos grandes de cabeza de camarón.'

},



{

numero:6,

titulo:'Prepara el relleno',

descripcion:

'Machaca o muele los frijoles cocidos hasta obtener una pasta espesa. Incorpora gradualmente la mezcla de pepita, camarón y chile. Ajusta la consistencia con una pequeña cantidad del líquido reservado solamente si es necesario.',

tiempo:'8 minutos',

consejo:

'El relleno debe poder mantenerse sobre una cuchara sin escurrir.',

porQue:

'Una preparación demasiado húmeda puede escapar de la masa o afectar la estructura del tamal.',

mensajeChef:

'En rellenos para masa, controlar humedad es controlar estructura.',

objetivo:

'Conseguir un relleno espeso donde frijol, pepita y camarón formen una mezcla equilibrada.',

nivelImportancia:'critico',

chefPregunta:

'¿Qué textura buscamos antes de rellenar?',

respuestaEsperada:

'Una pasta espesa, húmeda pero sin líquido libre.',

señalCorrecta:

'Una porción mantiene su forma al colocarla sobre una superficie.',

errorEvitar:

'Agregar demasiado líquido de cocción.'

},



{

numero:7,

titulo:'Trabaja la masa',

descripcion:

'Coloca la masa de maíz en un recipiente amplio. Incorpora gradualmente la manteca y la sal y amasa hasta obtener una textura suave, uniforme y fácil de extender.',

tiempo:'7 minutos',

consejo:

'Si la masa presenta grietas profundas, incorpora una cantidad mínima de agua y vuelve a trabajarla.',

porQue:

'La masa necesita suficiente flexibilidad para contener el relleno sin romperse.',

mensajeChef:

'La masa se evalúa con las manos: textura, humedad y resistencia nos dicen cuándo está preparada.',

objetivo:

'Conseguir una masa flexible y uniforme.',

nivelImportancia:'critico',

chefPregunta:

'¿Qué indican grietas profundas al extender la masa?',

respuestaEsperada:

'Que probablemente necesita un pequeño ajuste de hidratación.',

señalCorrecta:

'La masa se extiende sin romperse y mantiene su forma.',

errorEvitar:

'Agregar demasiada agua de una sola vez.'

},



{

numero:8,

titulo:'Incorpora la hierba santa',

descripcion:

'Coloca una hoja de hierba santa limpia sobre cada sección de hoja de plátano. Sobre ella extiende una porción de masa de maíz dejando espacio alrededor para realizar el cierre.',

tiempo:'5 minutos',

consejo:

'Si la hoja de hierba santa es muy grande, utiliza una sección suficiente para aromatizar cada pieza.',

porQue:

'Durante la cocción al vapor, el calor libera los compuestos aromáticos de la hierba santa y los transmite a la masa y al relleno.',

mensajeChef:

'Una hierba aromática puede trabajar sin desaparecer dentro de una salsa: aquí el vapor transportará su perfume.',

objetivo:

'Construir una capa aromática entre la envoltura y el tamal.',

nivelImportancia:'clave',

chefPregunta:

'¿Cómo llega el aroma de la hierba santa al tamal?',

respuestaEsperada:

'El calor y el vapor liberan y transportan sus compuestos aromáticos.',

señalCorrecta:

'La hoja queda extendida debajo de la masa sin impedir el cierre.',

errorEvitar:

'Utilizar hojas dañadas, sucias o en cantidad excesiva.'

},



{

numero:9,

titulo:'Rellena el juacané',

descripcion:

'Coloca una porción moderada del relleno de frijol, pepita y camarón en el centro de la masa. Distribúyelo sin llevarlo hasta los bordes.',

tiempo:'5 minutos',

consejo:

'Deja suficiente masa libre alrededor para poder contener completamente el relleno.',

porQue:

'Una proporción adecuada facilita el cierre y evita que el relleno escape durante la cocción.',

mensajeChef:

'Más relleno no siempre significa mejor tamal; primero debe funcionar la estructura.',

objetivo:

'Distribuir uniformemente el relleno dentro de cada pieza.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué evitamos llevar el relleno hasta los bordes?',

respuestaEsperada:

'Porque necesitamos espacio para cerrar la masa y contenerlo.',

señalCorrecta:

'El relleno permanece concentrado en el centro con masa suficiente alrededor.',

errorEvitar:

'Sobrecargar las piezas.'

},



{

numero:10,

titulo:'Envuelve los tamales',

descripcion:

'Dobla cuidadosamente la masa alrededor del relleno y después cierra la hoja de plátano formando un paquete compacto. Coloca cada tamal con el cierre hacia abajo.',

tiempo:'8 minutos',

consejo:

'La envoltura debe sostener la preparación sin comprimirla excesivamente.',

porQue:

'El paquete mantiene unidos masa, relleno y hierba aromática durante la cocción.',

mensajeChef:

'La estructura exterior protege todo el trabajo que construimos dentro.',

objetivo:

'Formar paquetes cerrados y estables.',

nivelImportancia:'critico',

señalCorrecta:

'El paquete conserva su forma al colocarlo sobre una superficie.',

errorEvitar:

'Dejar extremos abiertos por donde pueda salir la masa.'

},



{

numero:11,

titulo:'Cocina al vapor',

descripcion:

'Acomoda los tamales dentro de una vaporera, manteniendo el agua debajo de la rejilla. Tapa y cocina con vapor constante hasta que la masa esté completamente cocida.',

tiempo:'40 minutos',

consejo:

'Evita abrir constantemente la vaporera y vigila que nunca se quede sin agua.',

porQue:

'El vapor proporciona una cocción húmeda y uniforme mientras concentra dentro de la hoja los aromas de la hierba santa y el relleno.',

mensajeChef:

'Ahora dejamos que vapor, hoja y tiempo terminen el trabajo.',

objetivo:

'Cocinar completamente la masa y desarrollar la integración aromática del tamal.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué mantenemos los tamales separados del agua?',

respuestaEsperada:

'Porque buscamos cocinarlos mediante vapor, no hervirlos.',

señalCorrecta:

'Existe producción constante de vapor y los paquetes mantienen su estructura.',

errorEvitar:

'Permitir que el agua toque directamente los tamales.'

},



{

numero:12,

titulo:'Comprueba y reposa',

descripcion:

'Abre cuidadosamente un tamal de prueba. Cuando la masa esté firme, cocida y se separe de la envoltura, retira los tamales y déjalos reposar unos minutos antes de servir.',

tiempo:'5 minutos',

consejo:

'Observa la textura además del reloj; el tamaño de las piezas modifica ligeramente el tiempo de cocción.',

porQue:

'El reposo ayuda a estabilizar la estructura de la masa después de salir del ambiente húmedo de la vaporera.',

mensajeChef:

'El reloj nos orienta; la textura nos confirma.',

objetivo:

'Verificar una cocción completa y estabilizar la estructura antes de servir.',

nivelImportancia:'clave',

chefPregunta:

'¿Qué señal confirma que nuestra masa está cocida?',

respuestaEsperada:

'Se mantiene formada y se separa con facilidad de la envoltura.',

señalCorrecta:

'Al abrir el tamal se distingue una masa cocida, la hierba santa y el relleno oscuro de frijol y pepita.',

errorEvitar:

'Servir una pieza cuya masa todavía esté pegajosa o cruda.'

}

],



// 💡 INFORMACIÓN EXTRA

tip:

'Prepara el relleno antes de trabajar la masa y déjalo templar. Un relleno espeso y frío o tibio resulta mucho más sencillo de contener.',


ahorro:

'El frijol y la masa proporcionan gran parte del volumen de la preparación, mientras ingredientes intensos como la pepita y la cabeza de camarón aportan mucho sabor con cantidades moderadas.',


errorComun:

'Quemar los ingredientes secos durante el tostado o preparar un relleno demasiado líquido.',



tags:[

'chiapas',

'chiapa_de_corzo',

'region_central_chiapas',

'juacane',

'jacuane',

'tamal_chiapaneco',

'hierba_santa',

'frijol_negro',

'pepita_calabaza',

'camaron_seco',

'chile_simojovel',

'maiz',

'tradicional',

'desayuno_mexicano'

],


tipoComida:'llenadora',


popularidad:90,


historiaChef:

'El juacané es una muestra de la profundidad de la tradición tamalera chiapaneca. Maíz y frijol se encuentran con pepita de calabaza, camarón seco y hierbas aromáticas, creando una preparación donde ingredientes terrestres, vegetales y marinos conviven dentro de una misma envoltura.',


trucoChef:

'Prueba una pequeña cantidad del relleno después de integrar la cabeza de camarón y antes de agregar más sal. Los productos marinos secos pueden aportar suficiente salinidad por sí mismos.',


momento:'aprender',


ocasion:[

'familia',

'especial'

],


sustituciones:[

{

falta:'cabeza_camaron_seco',

reemplazo:'camarón seco molido en menor cantidad; conserva parte del carácter marino pero cambia la preparación tradicional'

},

{

falta:'chile_simojovel',

reemplazo:'chile seco de picor moderado; cambia el perfil regional del juacané'

},

{

falta:'hierba_santa',

reemplazo:'puede omitirse técnicamente, aunque se pierde uno de los aromas característicos de esta preparación'

},

{

falta:'pepita_calabaza',

reemplazo:'semilla de calabaza tostada equivalente sin sal'

}

],


chefInicio:

'Hoy vamos a descubrir cómo una receta puede reunir sabores que parecen pertenecer a mundos distintos: maíz, frijol, semilla, camarón seco, chile y una hoja profundamente aromática. El juacané nos enseñará a construir sabor por capas.',


chefFinal:

'Aprendiste a tostar ingredientes secos sin quemarlos, construir un relleno de frijol y pepita, utilizar camarón seco como concentrador de umami, trabajar con hierba santa y controlar una cocción al vapor. El juacané demuestra cómo la identidad de una cocina puede encontrarse tanto en sus ingredientes como en la manera de combinarlos.',


señalesExito:{

vista:

'Tamal bien formado dentro de hoja de plátano, con masa cocida y una capa aromática de hierba santa que rodea un relleno oscuro de frijol y pepita.',

olor:

'Aroma de maíz y hoja caliente con notas anisadas y herbales de hierba santa, tostado de pepita y profundidad marina del camarón seco.',

textura:

'Masa suave y estructurada, relleno espeso y cremoso con ligera textura de pepita molida.'

},


rescates:[

{

problema:'La cabeza de camarón desarrolló sabor amargo',

solucion:

'Probablemente se tostó demasiado. Retira las partículas quemadas y vuelve a preparar una cantidad menor utilizando fuego bajo.'

},

{

problema:'El relleno quedó demasiado salado',

solucion:

'Incorpora más frijol cocido sin sal para disminuir la concentración antes de formar los tamales.'

},

{

problema:'El relleno quedó demasiado líquido',

solucion:

'Cocínalo a fuego bajo unos minutos para evaporar humedad y déjalo templar antes de utilizarlo.'

},

{

problema:'La masa se rompe al extenderla',

solucion:

'Incorpora una pequeña cantidad de agua y vuelve a amasar hasta recuperar flexibilidad.'

},

{

problema:'La hoja de plátano se rompe',

solucion:

'Pásala brevemente por calor para aumentar su flexibilidad o refuerza el paquete con una segunda sección de hoja.'

},

{

problema:'La masa sigue pegándose después del tiempo indicado',

solucion:

'Continúa la cocción al vapor algunos minutos y comprueba otra pieza antes de retirar toda la tanda.'

}

]


};