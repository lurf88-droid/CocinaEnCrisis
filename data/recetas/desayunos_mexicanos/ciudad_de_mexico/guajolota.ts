import type { Receta } from '@/types/receta';


export const GUAJOLOTA: Receta = {


id:'guajolota',


titulo:'Guajolota chilanga (torta de tamal)',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/ciudad_de_mexico/guajolota.webp'
),


descripcion:

'Desayuno callejero tradicional de la Ciudad de México preparado con un bolillo relleno de tamal caliente. Una combinación sencilla, económica y representativa de la vida cotidiana capitalina.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Ciudad de México',

estadoOrigen:'Ciudad de México',

tradicion:'desayuno callejero chilango basado en pan de trigo y tamal tradicional'

},


tecnicaPrincipal:

'calentado del tamal, montaje dentro del bolillo y equilibrio entre pan y relleno',



// 🎯 CLASIFICACIÓN

categoria:'desayuno',


porciones:1,


tiempoMinutos:10,


dificultad:'facil',


nivelChef:1,



// 🧺 INGREDIENTES


ingredientes:[


{

id:'bolillo',

cantidad:1,

unidad:'pieza'

},


{

id:'tamal_verde_pollo',

cantidad:1,

unidad:'pieza'

}

],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'importancia de la cocina urbana mexicana',

'aprovechamiento de preparaciones existentes',

'equilibrio entre pan y relleno',

'identidad gastronómica de la Ciudad de México'

],



// 👨‍🍳 PASOS


pasos:[


{

numero:1,

titulo:'Prepara el tamal',

descripcion:

'Calienta el tamal hasta que recupere suavidad y temperatura antes de colocarlo dentro del bolillo.',

tiempo:'5 minutos',

consejo:

'El tamal debe estar caliente para integrarse correctamente con el pan.',

porQue:

'La temperatura cambia la textura y la experiencia del desayuno.',

mensajeChef:

'Incluso una preparación sencilla tiene técnica.',

objetivo:

'Conseguir un tamal suave y listo para servir.',

nivelImportancia:'clave',

señalCorrecta:

'La masa está caliente y conserva humedad.',

errorEvitar:

'Usar un tamal frío porque la textura será más pesada.'

},



{

numero:2,

titulo:'Prepara el bolillo',

descripcion:

'Abre el bolillo por la mitad sin separarlo completamente para formar la base de la torta.',

tiempo:'2 minutos',

consejo:

'El pan debe mantener estructura para sostener el tamal.',

porQue:

'Un buen montaje evita que la preparación se desarme.',

mensajeChef:

'La cocina callejera también necesita precisión.',

objetivo:

'Crear un soporte adecuado para el relleno.',

nivelImportancia:'normal',

señalCorrecta:

'El bolillo puede contener el tamal sin romperse.',

errorEvitar:

'Usar pan demasiado suave que no soporte el peso.'

},



{

numero:3,

titulo:'Monta la guajolota',

descripcion:

'Coloca el tamal caliente dentro del bolillo y acomoda la preparación para servir.',

tiempo:'2 minutos',

consejo:

'La proporción entre pan y tamal debe mantenerse equilibrada.',

porQue:

'La guajolota busca combinar ambas texturas en un solo bocado.',

mensajeChef:

'La creatividad también nace de combinar lo cotidiano.',

objetivo:

'Integrar los dos elementos principales.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué la guajolota es considerada un desayuno representativo de CDMX?',

respuestaEsperada:

'Porque forma parte de la cultura de puestos callejeros y desayunos rápidos de la ciudad.',

señalCorrecta:

'El tamal queda contenido dentro del bolillo.',

errorEvitar:

'Agregar demasiados elementos y perder la esencia original.'

},



{

numero:4,

titulo:'Sirve caliente',

descripcion:

'Consume inmediatamente para disfrutar la combinación de pan suave y tamal caliente.',

tiempo:'1 minuto',

consejo:

'La temperatura es parte de la experiencia tradicional.',

porQue:

'Una guajolota destaca por su sencillez y su consumo al momento.',

mensajeChef:

'La tradición también vive en los pequeños momentos.',

señalCorrecta:

'El pan está suave y el tamal conserva humedad.',

errorEvitar:

'Dejar reposar demasiado tiempo antes de comer.'

}

],



// 💡 INFORMACIÓN EXTRA


tip:

'En la Ciudad de México suele acompañarse con atole, especialmente en mañanas frías, aunque la base tradicional es el bolillo con tamal.',


ahorro:

'Es una receta de alto rendimiento porque aprovecha un tamal preparado y un pan económico para crear un desayuno completo.',


errorComun:

'Usar un bolillo demasiado pequeño o un tamal frío.',



tags:[

'ciudad_de_mexico',

'cdmx',

'desayuno_mexicano',

'callejero',

'economica'

],



tipoComida:'llenadora',


popularidad:100,



historiaChef:

'La guajolota es uno de los símbolos del desayuno popular de la Ciudad de México. Su presencia en puestos callejeros la convirtió en una preparación ligada al ritmo de vida de la capital.',



trucoChef:

'Calentar correctamente el tamal antes de montarlo mejora mucho la textura final.',



ocasion:[

'diario',



],



sustituciones:[

{

falta:'bolillo',

reemplazo:'pan similar de trigo'

},


{

falta:'tamal_verde_pollo',

reemplazo:'otro tamal disponible'

}

],



chefInicio:

'Hoy vamos a preparar un desayuno que representa la energía y movimiento de la Ciudad de México.',



chefFinal:

'Preparaste una receta sencilla que cuenta una historia completa de la cultura chilanga.',



señalesExito:{

vista:

'Bolillo relleno con tamal caliente visible.',

olor:

'Aroma de pan recién calentado y maíz cocido.',

textura:

'Pan suave y tamal húmedo.'

},



rescates:[

{

problema:'El pan se rompe',

solucion:'Utiliza un bolillo con mejor estructura o caliéntalo ligeramente.'

},


{

problema:'La guajolota quedó seca',

solucion:'Revisa que el tamal conserve humedad antes del montaje.'

}

]


};