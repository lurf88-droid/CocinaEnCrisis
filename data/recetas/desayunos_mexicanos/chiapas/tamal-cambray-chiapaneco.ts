import type { Receta } from '@/types/receta';


export const TAMAL_CAMBRAY_CHIAPANECO: Receta = {


id:'tamal-cambray-chiapaneco',


titulo:'Tamal de cambray chiapaneco',


imagen: require(

'../../../../assets/images/recetas/desayunos_mexicanos/chiapas/tamal-cambray-chiapaneco.webp'

),


descripcion:

'Tamal tradicional chiapaneco de perfil dulce-salado elaborado con masa de maíz y un relleno de carne de cerdo acompañado de plátano macho, pasas, almendras y notas de canela. Se envuelve en hoja de plátano y se cocina lentamente al vapor.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Chiapa de Corzo y regiones de la Costa de Chiapas',

estadoOrigen:'Chiapas',

tradicion:'cocina tamalera chiapaneca de perfil dulce-salado, con carne, frutas, especias y cocción al vapor'

},


tecnicaPrincipal:

'preparación de relleno dulce-salado, acondicionamiento de hoja de plátano, trabajo de masa, envoltura y cocción al vapor',



// 🎯 CLASIFICACIÓN

nivelChef:4,


categoria:'desayuno',


porciones:6,


tiempoMinutos:105,


dificultad:'avanzada',



// 🧺 INGREDIENTES

ingredientes:[


{

id:'masa_maiz',

cantidad:0.600,

unidad:'kg'

},


{

id:'manteca_cerdo',

cantidad:0.120,

unidad:'kg'

},


{

id:'carne_cerdo',

cantidad:0.300,

unidad:'kg'

},


{

id:'jitomate',

cantidad:0.200,

unidad:'kg'

},


{

id:'cebolla_blanca',

cantidad:0.080,

unidad:'kg'

},


{

id:'platano_macho',

cantidad:0.250,

unidad:'kg'

},


{

id:'pasas',

cantidad:0.060,

unidad:'kg'

},


{

id:'almendra',

cantidad:0.050,

unidad:'kg'

},


{

id:'canela',

cantidad:0.003,

unidad:'kg'

},


{

id:'azucar',

cantidad:0.025,

unidad:'kg'

},


{

id:'sal',

cantidad:0.007,

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

'equilibrio entre sabores dulces y salados',

'preparación de un relleno complejo para tamal',

'control de humedad en rellenos',

'uso del plátano macho dentro de preparaciones saladas',

'integración de frutas secas y frutos secos en cocina tradicional',

'uso aromático de la canela fuera de la repostería',

'acondicionamiento de hoja de plátano',

'control de consistencia de masa para tamal',

'técnica de envoltura',

'cocción uniforme al vapor',

'identidad de la tradición tamalera chiapaneca'

],



// 👨‍🍳 PASOS

pasos:[


{

numero:1,

titulo:'Prepara las hojas de plátano',

descripcion:

'Limpia cuidadosamente las hojas de plátano y pásalas brevemente sobre una superficie caliente o comal, moviéndolas constantemente hasta que cambien ligeramente de tono y se vuelvan flexibles. Córtalas en secciones adecuadas para envolver los tamales.',

tiempo:'8 minutos',

consejo:

'El objetivo no es quemar la hoja; solamente queremos suavizar sus fibras.',

porQue:

'El calor vuelve flexible la hoja de plátano y reduce el riesgo de que se rompa al doblarla alrededor del tamal.',

mensajeChef:

'Una envoltura natural también necesita preparación antes de convertirse en parte de nuestra técnica.',

objetivo:

'Conseguir hojas limpias, flexibles y resistentes.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué pasamos la hoja por calor antes de envolver?',

respuestaEsperada:

'Para volverla flexible y evitar que se rompa al doblarla.',

señalCorrecta:

'La hoja cambia ligeramente de tono y puede doblarse sin quebrarse.',

errorEvitar:

'Dejar la hoja inmóvil sobre el calor hasta quemarla.'

},



{

numero:2,

titulo:'Prepara el plátano macho',

descripcion:

'Pela el plátano macho y córtalo en cubos pequeños. Cocínalo brevemente en una sartén hasta que comience a suavizarse y desarrolle zonas ligeramente doradas. Retira y reserva.',

tiempo:'8 minutos',

consejo:

'Busca piezas pequeñas pero visibles; no queremos convertir el plátano en puré.',

porQue:

'La cocción desarrolla sus azúcares y permite que mantenga una textura definida dentro del relleno.',

mensajeChef:

'El mismo ingrediente puede aportar sabor y textura cuando elegimos correctamente su punto de cocción.',

objetivo:

'Obtener plátano suave y ligeramente dorado que conserve su forma.',

nivelImportancia:'clave',

señalCorrecta:

'Los cubos están tiernos y presentan zonas doradas sin deshacerse.',

errorEvitar:

'Cocinar el plátano hasta convertirlo en una pasta.'

},



{

numero:3,

titulo:'Construye la base del relleno',

descripcion:

'Pica finamente la cebolla y el jitomate. Cocina primero la cebolla a fuego medio hasta que comience a suavizarse. Incorpora el jitomate y continúa cocinando hasta que pierda parte de su humedad.',

tiempo:'7 minutos',

consejo:

'Permite que el jitomate reduzca antes de incorporar la carne.',

porQue:

'Un relleno con exceso de agua puede afectar la consistencia de la masa y dificultar el formado del tamal.',

mensajeChef:

'En un relleno para masa, controlar humedad significa controlar estructura.',

objetivo:

'Crear una base concentrada de cebolla y jitomate.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué reducimos el jitomate antes de continuar?',

respuestaEsperada:

'Para concentrar el sabor y evitar exceso de líquido dentro del tamal.',

señalCorrecta:

'El jitomate está suave y no existe una cantidad abundante de líquido en el fondo.',

errorEvitar:

'Continuar mientras el jitomate todavía libera demasiada agua.'

},



{

numero:4,

titulo:'Cocina la carne de cerdo',

descripcion:

'Incorpora la carne de cerdo cortada en piezas pequeñas a la base de jitomate y cebolla. Cocina a fuego medio hasta que la carne esté completamente cocida y se impregne con los sabores del guiso.',

tiempo:'15 minutos',

consejo:

'Mantén las piezas relativamente pequeñas para repartir el relleno uniformemente entre los tamales.',

porQue:

'Un tamaño regular permite una cocción pareja y evita que una sola pieza de carne domine el interior del tamal.',

mensajeChef:

'El tamaño de un corte también determina cómo se distribuye un ingrediente dentro de una preparación.',

objetivo:

'Obtener carne cocida, tierna y bien integrada con la base.',

nivelImportancia:'critico',

señalCorrecta:

'La carne está completamente cocida y cubierta por el guiso concentrado.',

errorEvitar:

'Utilizar trozos demasiado grandes de carne.'

},



{

numero:5,

titulo:'Construye el contraste dulce-salado',

descripcion:

'Agrega al relleno el plátano previamente cocinado, las pasas, las almendras y la canela. Incorpora el azúcar gradualmente y mezcla con cuidado para no deshacer el plátano.',

tiempo:'5 minutos',

consejo:

'Agrega el azúcar poco a poco y prueba. El objetivo no es obtener un relleno de postre.',

porQue:

'El carácter del tamal surge del contraste entre carne, fruta, especias y un dulzor moderado.',

mensajeChef:

'Equilibrar sabores no significa que todos tengan la misma intensidad; significa que ninguno destruya a los demás.',

objetivo:

'Conseguir un relleno complejo donde convivan notas saladas, dulces y especiadas.',

nivelImportancia:'critico',

chefPregunta:

'¿Qué buscamos al agregar azúcar a una preparación que contiene carne?',

respuestaEsperada:

'Crear contraste y equilibrio, no convertir el relleno en una preparación completamente dulce.',

señalCorrecta:

'Se perciben claramente la carne, el plátano, la fruta seca y las especias sin que el azúcar domine.',

errorEvitar:

'Agregar demasiada azúcar y ocultar el sabor de la carne.'

},



{

numero:6,

titulo:'Reduce y enfría el relleno',

descripcion:

'Cocina el relleno unos minutos adicionales hasta que no exista exceso de líquido libre. Ajusta la sal únicamente después de probarlo y retíralo del fuego. Déjalo templar antes de formar los tamales.',

tiempo:'5 minutos',

consejo:

'El relleno debe sentirse húmedo y jugoso, pero no escurrir.',

porQue:

'Una mezcla espesa es más sencilla de contener y reduce el riesgo de humedecer excesivamente la masa.',

mensajeChef:

'Jugoso y aguado no significan lo mismo. El cocinero aprende a reconocer esa diferencia.',

objetivo:

'Obtener un relleno concentrado, equilibrado y manejable.',

nivelImportancia:'critico',

chefPregunta:

'¿Qué textura buscamos antes de rellenar?',

respuestaEsperada:

'Un relleno húmedo pero sin líquido libre abundante.',

señalCorrecta:

'Una cucharada de relleno conserva sus componentes unidos sin liberar líquido alrededor.',

errorEvitar:

'Formar los tamales con un relleno demasiado caliente o líquido.'

},



{

numero:7,

titulo:'Trabaja la masa',

descripcion:

'Coloca la masa de maíz en un recipiente amplio e incorpora gradualmente la manteca de cerdo y la sal. Amasa hasta obtener una preparación uniforme, suave y fácil de extender.',

tiempo:'8 minutos',

consejo:

'Si la masa presenta grietas profundas al extenderla, incorpora una pequeña cantidad de agua y vuelve a trabajarla.',

porQue:

'Una masa correctamente hidratada puede envolver y sostener un relleno sin romperse durante el formado.',

mensajeChef:

'La consistencia correcta no viene solamente de una cantidad escrita: también debemos aprender a reconocerla con las manos.',

objetivo:

'Obtener una masa suave, uniforme y manejable.',

nivelImportancia:'critico',

chefPregunta:

'¿Qué nos indican muchas grietas al extender la masa?',

respuestaEsperada:

'Que probablemente necesita un pequeño ajuste de hidratación.',

señalCorrecta:

'La masa se extiende con facilidad y conserva una superficie relativamente uniforme.',

errorEvitar:

'Agregar demasiada agua de una sola vez.'

},



{

numero:8,

titulo:'Forma los tamales',

descripcion:

'Extiende una porción de masa sobre el centro de cada hoja de plátano preparada. Coloca una cantidad moderada del relleno de cerdo, plátano, pasas y almendras en el centro.',

tiempo:'10 minutos',

consejo:

'Deja suficiente masa alrededor del relleno para facilitar el cierre.',

porQue:

'Una proporción adecuada entre masa y relleno permite que el tamal conserve su estructura durante la cocción.',

mensajeChef:

'Un relleno abundante puede parecer atractivo, pero un tamal que no puede cerrarse tiene un problema técnico.',

objetivo:

'Distribuir masa y relleno de manera uniforme entre todas las piezas.',

nivelImportancia:'critico',

chefPregunta:

'¿Qué sucede cuando colocamos demasiado relleno?',

respuestaEsperada:

'La masa y la hoja tendrán dificultad para contenerlo durante la cocción.',

señalCorrecta:

'El relleno permanece centrado y existe suficiente masa alrededor.',

errorEvitar:

'Sobrecargar cada tamal.'

},



{

numero:9,

titulo:'Envuelve correctamente',

descripcion:

'Dobla los lados de la hoja de plátano hacia el centro y después los extremos hasta formar un paquete bien cerrado. Acomoda cada pieza con el cierre hacia abajo mientras terminas las demás.',

tiempo:'7 minutos',

consejo:

'La hoja debe sujetar la preparación sin comprimir excesivamente la masa.',

porQue:

'Una envoltura estable mantiene la forma y conserva dentro del paquete los aromas generados durante la cocción.',

mensajeChef:

'La hoja no es solamente un recipiente; participa en el aroma y en la cocción.',

objetivo:

'Conseguir paquetes cerrados y uniformes.',

nivelImportancia:'clave',

señalCorrecta:

'El tamal conserva su forma y la hoja permanece cerrada al colocarlo sobre una superficie.',

errorEvitar:

'Dejar los extremos abiertos o envolver demasiado flojo.'

},



{

numero:10,

titulo:'Cocina al vapor',

descripcion:

'Acomoda los tamales dentro de una vaporera con agua debajo de la rejilla. Tapa y cocina manteniendo vapor constante hasta que la masa esté completamente cocida.',

tiempo:'45 minutos',

consejo:

'Vigila el nivel de agua sin abrir innecesariamente la vaporera.',

porQue:

'El vapor transmite calor húmedo alrededor de cada paquete y cocina gradualmente la masa sin contacto directo con el agua.',

mensajeChef:

'El vapor parece suave, pero es una herramienta poderosa cuando mantenemos temperatura y tiempo constantes.',

objetivo:

'Cocinar completamente la masa mientras los aromas del relleno permanecen contenidos por la hoja.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué los tamales no deben tocar directamente el agua?',

respuestaEsperada:

'Porque buscamos cocinarlos con vapor y no hervirlos.',

señalCorrecta:

'Existe vapor constante y los paquetes mantienen su estructura.',

errorEvitar:

'Permitir que la vaporera se quede sin agua.'

},



{

numero:11,

titulo:'Comprueba y deja reposar',

descripcion:

'Abre cuidadosamente un tamal de prueba. Si la masa está firme, cocida y se separa de la hoja, retira los tamales de la vaporera y déjalos reposar unos minutos antes de servir.',

tiempo:'5 minutos',

consejo:

'No evalúes únicamente el tiempo: observa la estructura de la masa.',

porQue:

'El tamaño de los tamales y la intensidad del vapor pueden modificar ligeramente el tiempo necesario de cocción.',

mensajeChef:

'El reloj orienta; el alimento confirma cuándo está listo.',

objetivo:

'Verificar la cocción y permitir que la estructura se estabilice.',

nivelImportancia:'clave',

chefPregunta:

'¿Cuál es una señal importante de que el tamal está cocido?',

respuestaEsperada:

'La masa mantiene su estructura y se separa de la hoja.',

señalCorrecta:

'Al abrir el paquete, la masa permanece formada y el relleno se distingue claramente en el centro.',

errorEvitar:

'Servir una pieza cuya masa todavía esté pegajosa o cruda.'

}

],



// 💡 INFORMACIÓN EXTRA

tip:

'Prepara el relleno antes que la masa y permite que pierda parte de su calor. Un relleno templado y con humedad controlada facilita mucho el formado.',


ahorro:

'Una cantidad moderada de carne puede rendir varias porciones al combinarse con masa, plátano y otros ingredientes del relleno.',


errorComun:

'Confundir el contraste dulce-salado con un sabor excesivamente dulce o utilizar un relleno demasiado húmedo.',



tags:[

'chiapas',

'chiapa_de_corzo',

'costa_chiapas',

'tamal_cambray',

'tamal_chiapaneco',

'platano_macho',

'pasas',

'almendra',

'cerdo',

'maiz',

'dulce_salado',

'desayuno_mexicano',

'tradicional'

],


tipoComida:'llenadora',


popularidad:89,


historiaChef:

'El tamal de cambray forma parte de la diversidad tamalera de Chiapas y destaca por una combinación que puede resultar sorprendente: carne, masa, frutas, frutos secos y especias dentro de una misma preparación. Sus variantes regionales muestran cómo la cocina chiapaneca utiliza el contraste dulce-salado como parte de su identidad culinaria.',


trucoChef:

'Antes de rellenar todos los tamales, prueba juntos una pequeña porción de carne, plátano, pasa y almendra. Si alguno domina completamente a los demás, corrige el equilibrio antes de formar la tanda.',


momento:'aprender',


ocasion:[

'familia',

'especial'

],


sustituciones:[

{

falta:'platano_macho',

reemplazo:'plátano común poco maduro, aunque su textura y comportamiento durante la cocción serán diferentes'

},

{

falta:'almendra',

reemplazo:'cacahuate tostado sin sal; modifica el perfil tradicional pero mantiene contraste y textura'

},

{

falta:'pasas',

reemplazo:'ciruela pasa picada en menor cantidad; cambia notablemente el sabor original'

},

{

falta:'carne_cerdo',

reemplazo:'pollo cocido en trozos pequeños, aunque cambia el carácter del relleno'

}

],


chefInicio:

'Hoy vamos a trabajar uno de los principios más interesantes de la cocina: el contraste. El tamal de cambray reúne maíz, cerdo, plátano, fruta seca, almendra y especias para demostrar que dulce y salado pueden convivir cuando aprendemos a equilibrarlos.',


chefFinal:

'Aprendiste a construir un relleno de varias capas, controlar su humedad, equilibrar dulce y salado, acondicionar una hoja de plátano y cocinar una preparación compleja mediante vapor. El tamal de cambray nos enseña que complejidad no significa agregar ingredientes sin control: significa lograr que todos tengan una función.',


señalesExito:{

vista:

'Paquete de hoja de plátano bien formado con masa cocida y un centro donde se distinguen carne, plátano, pasas y almendras.',

olor:

'Aroma de maíz cocido y hoja de plátano con notas de cerdo, fruta madura y canela.',

textura:

'Masa suave y estructurada, carne tierna, plátano suave, pasas jugosas y pequeños contrastes firmes de almendra.'

},


rescates:[

{

problema:'El relleno quedó demasiado dulce',

solucion:

'Incorpora una pequeña cantidad adicional de carne o base de jitomate sin azúcar y ajusta la sal gradualmente hasta recuperar el equilibrio.'

},

{

problema:'El relleno tiene demasiado líquido',

solucion:

'Cocínalo destapado a fuego medio-bajo hasta evaporar el exceso de humedad y déjalo templar antes de formar.'

},

{

problema:'La hoja de plátano se rompe al doblarla',

solucion:

'Pásala brevemente por calor hasta que se vuelva flexible. Si ya está rota, utiliza una segunda sección de hoja para reforzar el paquete.'

},

{

problema:'La masa se agrieta al extenderla',

solucion:

'Incorpora una cantidad pequeña de agua, amasa nuevamente y vuelve a comprobar antes de continuar.'

},

{

problema:'El tamal se abre durante la cocción',

solucion:

'Reduce el relleno de las siguientes piezas y realiza un doblez más firme en la hoja sin comprimir excesivamente la masa.'

},

{

problema:'La masa continúa pegándose mucho a la hoja',

solucion:

'Prolonga algunos minutos la cocción al vapor y vuelve a comprobar otra pieza antes de retirar toda la tanda.'

}

]


};