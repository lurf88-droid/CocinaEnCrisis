import type { Receta } from '@/types/receta';


export const TAMALES_FRIJOL_POBLANOS: Receta = {


id:'tamales-frijol-poblanos',


titulo:'Tamales poblanos de frijol',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/puebla/tamales-frijol-poblanos.webp'
),


descripcion:

'Tamales tradicionales de masa de maíz rellenos de frijol, envueltos en hoja de maíz y cocidos al vapor. Una preparación sencilla, rendidora y profundamente ligada a la cocina cotidiana poblana.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Puebla',

estadoOrigen:'Puebla',

tradicion:'cocina poblana tradicional de maíz, frijol y cocción al vapor'

},


tecnicaPrincipal:

'batido de masa, preparación de relleno, envoltura en hoja de maíz y cocción al vapor',



// 🎯 CLASIFICACIÓN

categoria:'desayuno',

rolCulinario: 'plato_principal',
porciones:6,


tiempoMinutos:90,


dificultad:'media',


nivelChef:3,



// 🧺 INGREDIENTES

ingredientes:[


{

id:'masa_maiz',

cantidad:1,

unidad:'kg'

},


{

id:'frijol_bayo',

cantidad:0.500,

unidad:'kg'

},


{

id:'manteca_cerdo',

cantidad:0.220,

unidad:'kg'

},


{

id:'hoja_maiz',

cantidad:20,

unidad:'pieza'

},


{

id:'sal',

cantidad:0.012,

unidad:'kg'

}


],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'preparación de masa para tamal',

'control de humedad en un relleno de frijol',

'técnica de envoltura con hoja de maíz',

'organización de piezas para cocción al vapor',

'reconocimiento del punto correcto de cocción de un tamal',

'identidad culinaria del maíz y frijol en Puebla'

],



// 👨‍🍳 PASOS

pasos:[


{

numero:1,

titulo:'Prepara las hojas de maíz',

descripcion:

'Coloca las hojas de maíz en agua tibia hasta que se vuelvan flexibles. Escúrrelas antes de utilizarlas.',

tiempo:'15 minutos',

consejo:

'Separa algunas hojas adicionales por si alguna se rompe durante el armado.',

porQue:

'Una hoja flexible puede doblarse alrededor de la masa sin quebrarse.',

mensajeChef:

'Preparar correctamente la envoltura facilita todo el trabajo que viene después.',

objetivo:

'Obtener hojas suaves y fáciles de manejar.',

nivelImportancia:'clave',

señalCorrecta:

'La hoja puede doblarse sin romperse.',

errorEvitar:

'Usar hojas completamente secas porque se quiebran al cerrar el tamal.'

},



{

numero:2,

titulo:'Prepara el relleno de frijol',

descripcion:

'Calienta los frijoles y machácalos hasta obtener una pasta espesa. Cocina unos minutos adicionales si tienen demasiada humedad.',

tiempo:'10 minutos',

consejo:

'El relleno debe ser más espeso que unos frijoles servidos como acompañamiento.',

porQue:

'Un relleno firme permanece dentro de la masa y evita humedecerla en exceso.',

mensajeChef:

'En los alimentos rellenos, la humedad siempre debe estar bajo control.',

objetivo:

'Crear un relleno de frijol compacto y fácil de distribuir.',

nivelImportancia:'clave',

señalCorrecta:

'El frijol permanece sobre una cuchara sin escurrirse.',

errorEvitar:

'Utilizar frijoles demasiado líquidos.'

},



{

numero:3,

titulo:'Trabaja la manteca',

descripcion:

'Bate la manteca hasta que tenga una textura más ligera y suave antes de incorporarla a la masa.',

tiempo:'8 minutos',

consejo:

'Trabájala a temperatura ambiente para facilitar el batido.',

porQue:

'Distribuir correctamente la grasa mejora la textura de la masa durante la cocción.',

mensajeChef:

'La textura final empieza mucho antes de entrar a la vaporera.',

objetivo:

'Preparar la grasa para integrarla uniformemente.',

nivelImportancia:'clave',

señalCorrecta:

'La manteca está suave, uniforme y fácil de mezclar.',

errorEvitar:

'Intentar incorporarla completamente fría y dura.'

},



{

numero:4,

titulo:'Prepara la masa del tamal',

descripcion:

'Incorpora gradualmente la manteca batida a la masa de maíz y agrega sal. Amasa hasta obtener una mezcla suave, uniforme y fácil de extender.',

tiempo:'12 minutos',

consejo:

'La masa debe poder extenderse sobre la hoja sin escurrir ni desmoronarse.',

porQue:

'Una masa correctamente trabajada permite que el tamal conserve humedad y estructura durante la cocción.',

mensajeChef:

'Aprende a reconocer una masa por su comportamiento, no solamente por una medida.',

objetivo:

'Conseguir una masa suave y manejable.',

nivelImportancia:'critico',

chefPregunta:

'¿Cómo sabemos que la masa tiene una textura adecuada para formar tamales?',

respuestaEsperada:

'Cuando puede extenderse fácilmente sobre la hoja y conserva su forma sin quedar líquida ni quebradiza.',

señalCorrecta:

'La masa se extiende sin pegarse excesivamente ni formar grietas profundas.',

errorEvitar:

'Dejar la masa demasiado seca.'

},



{

numero:5,

titulo:'Arma los tamales',

descripcion:

'Extiende una porción de masa sobre la parte central de cada hoja. Coloca una pequeña cantidad de frijol en el centro y dobla la hoja para envolver completamente la preparación.',

tiempo:'20 minutos',

consejo:

'No llenes demasiado el tamal; la masa necesita espacio para expandirse durante la cocción.',

porQue:

'Una proporción correcta entre masa y relleno facilita el cierre y permite una cocción uniforme.',

mensajeChef:

'En cocina, más relleno no siempre significa mejor resultado.',

objetivo:

'Formar tamales uniformes y correctamente cerrados.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué debemos dejar espacio dentro de la hoja?',

respuestaEsperada:

'Porque la masa aumenta ligeramente su volumen durante la cocción al vapor.',

señalCorrecta:

'La hoja queda cerrada y mantiene la masa en el interior.',

errorEvitar:

'Colocar demasiado relleno y dificultar el cierre.'

},



{

numero:6,

titulo:'Acomoda la vaporera',

descripcion:

'Coloca los tamales de manera vertical dentro de la vaporera, procurando dejar espacio para que circule el vapor.',

tiempo:'5 minutos',

consejo:

'Evita comprimirlos excesivamente unos contra otros.',

porQue:

'El vapor necesita circular alrededor de las piezas para cocinar la masa de manera uniforme.',

mensajeChef:

'La organización dentro de la olla también forma parte de la técnica.',

objetivo:

'Preparar una cocción uniforme al vapor.',

nivelImportancia:'clave',

señalCorrecta:

'Los tamales permanecen estables pero no están completamente comprimidos.',

errorEvitar:

'Saturar la vaporera sin permitir circulación de vapor.'

},



{

numero:7,

titulo:'Cocina al vapor',

descripcion:

'Cocina los tamales al vapor hasta que la masa esté firme y pueda separarse fácilmente de la hoja.',

tiempo:'40 minutos',

consejo:

'Evita abrir constantemente la vaporera porque pierdes temperatura y vapor.',

porQue:

'El vapor cocina lentamente la masa y permite conservar humedad sin contacto directo con el agua.',

mensajeChef:

'La paciencia también es una herramienta del cocinero.',

objetivo:

'Cocinar completamente la masa sin resecarla.',

nivelImportancia:'critico',

señalCorrecta:

'La masa se desprende limpiamente de la hoja.',

errorEvitar:

'Retirar los tamales únicamente por tiempo sin revisar su punto de cocción.'

},



{

numero:8,

titulo:'Deja reposar y sirve',

descripcion:

'Retira los tamales de la vaporera y déjalos reposar unos minutos antes de abrirlos y servirlos calientes.',

tiempo:'5 minutos',

consejo:

'Un pequeño reposo ayuda a estabilizar la textura de la masa.',

porQue:

'La masa termina de asentarse mientras disminuye ligeramente la temperatura.',

mensajeChef:

'No todo termina cuando apagamos el fuego.',

objetivo:

'Servir tamales con buena estructura y temperatura.',

nivelImportancia:'normal',

señalCorrecta:

'El tamal conserva su forma al retirarlo de la hoja.',

errorEvitar:

'Abrir todos los tamales inmediatamente al salir de la vaporera.'

}

],



// 💡 INFORMACIÓN EXTRA

tip:

'Puedes preparar el relleno de frijol desde el día anterior y mantenerlo refrigerado para ahorrar tiempo durante el armado.',


ahorro:

'El maíz y el frijol ofrecen gran rendimiento y permiten preparar varias porciones con ingredientes económicos.',


errorComun:

'Usar un relleno demasiado húmedo, dejar la masa seca o saturar demasiado cada hoja.',



tags:[

'puebla',

'desayuno_mexicano',

'tamal',

'maiz',

'frijol',

'tradicional',

'economica'

],



tipoComida:'llenadora',


popularidad:88,



historiaChef:

'Los tamales forman parte de una tradición alimentaria profundamente ligada al maíz en México. En las cocinas poblanas, las versiones con frijol representan una combinación sencilla, rendidora y estrechamente relacionada con la cocina familiar.',



trucoChef:

'Para comprobar la cocción, abre únicamente un tamal de prueba: si la masa se desprende fácilmente de la hoja, el resto probablemente está cerca del punto correcto.',



momento:'diario',



ocasion:[



'familia',



],



sustituciones:[

{

falta:'frijol_bayo',

reemplazo:'frijol negro machacado'

},

{

falta:'manteca_cerdo',

reemplazo:'aceite vegetal, aunque cambiará textura y sabor'

}

],



chefInicio:

'Hoy aprenderemos una de las técnicas fundamentales de la cocina mexicana: transformar masa, relleno y una simple hoja de maíz mediante la cocción al vapor.',



chefFinal:

'Preparaste tamales controlando masa, humedad, envoltura y vapor. Esas cuatro habilidades son la verdadera técnica detrás de esta preparación.',



señalesExito:{

vista:

'Tamal firme que conserva su forma al retirar la hoja.',

olor:

'Aroma cálido de maíz cocido y frijol.',

textura:

'Masa suave y húmeda con relleno espeso de frijol.'

},



rescates:[

{

problema:'La masa permanece pegada a la hoja',

solucion:

'Cocina los tamales unos minutos adicionales y vuelve a probar una pieza.'

},

{

problema:'Los tamales quedaron secos',

solucion:

'Revisa la hidratación de la masa y evita prolongar innecesariamente la cocción.'

},

{

problema:'El relleno se salió',

solucion:

'Utiliza menos frijol y asegúrate de que tenga una consistencia más espesa.'

}

]


};