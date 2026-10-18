import type { Receta } from '@/types/receta';


export const PAN_COMPUESTO_COMITECO: Receta = {


id:'pan-compuesto-comiteco',


titulo:'Pan compuesto comiteco',


imagen: require(

'../../../../assets/images/recetas/desayunos_mexicanos/chiapas/pan-compuesto-comiteco.webp'

),


descripcion:

'Emblema gastronómico de Comitán de Domínguez preparado con pan francés comiteco abierto y cubierto con frijol colorado, carne de cerdo, queso añejo, picles de zanahoria y una salsa agridulce de chiles secos. Su identidad está en la combinación de capas, contrastes y acompañamientos.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Comitán de Domínguez',

estadoOrigen:'Chiapas',

tradicion:'cocina comiteca de mercado basada en pan regional, frijol, carne, queso, encurtidos y salsas de chile seco'

},


tecnicaPrincipal:

'cocción de frijol, preparación de carne, encurtido rápido, elaboración de salsa agridulce de chiles secos y montaje por capas',



// 🎯 CLASIFICACIÓN

nivelChef:4,


categoria:'desayuno',


porciones:4,


tiempoMinutos:70,


dificultad:'avanzada',



// 🧺 INGREDIENTES

ingredientes:[


{

id:'pan_frances_comiteco',

cantidad:4,

unidad:'pieza'

},


{

id:'frijol_colorado',

cantidad:0.300,

unidad:'kg'

},


{

id:'carne_cerdo',

cantidad:0.350,

unidad:'kg'

},


{

id:'queso_anejo',

cantidad:0.120,

unidad:'kg'

},


{

id:'mayonesa',

cantidad:0.080,

unidad:'kg'

},


{

id:'zanahoria',

cantidad:0.180,

unidad:'kg'

},


{

id:'cebolla_blanca',

cantidad:0.120,

unidad:'kg'

},


{

id:'chile_serrano',

cantidad:1,

unidad:'pieza'

},


{

id:'chile_ancho',

cantidad:2,

unidad:'pieza'

},


{

id:'chile_guajillo',

cantidad:2,

unidad:'pieza'

},


{

id:'vinagre_blanco',

cantidad:0.120,

unidad:'litro'

},


{

id:'azucar',

cantidad:0.030,

unidad:'kg'

},


{

id:'ajo',

cantidad:2,

unidad:'pieza'

},


{

id:'laurel',

cantidad:1,

unidad:'pieza'

},


{

id:'oregano',

cantidad:0.002,

unidad:'kg'

},


{

id:'tomillo',

cantidad:0.002,

unidad:'kg'

},


{

id:'clavo',

cantidad:1,

unidad:'pieza'

},


{

id:'pimienta_negra',

cantidad:0.002,

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

'cocción correcta de una leguminosa',

'preparación de frijol para untar',

'cocción de carne de cerdo para relleno',

'encurtido rápido de vegetales',

'control de acidez y dulzor',

'rehidratación y molienda de chiles secos',

'preparación de una salsa agridulce',

'equilibrio entre grasa, acidez, salinidad, dulzor y picante',

'construcción de un alimento por capas',

'identidad culinaria de Comitán de Domínguez'

],



// 👨‍🍳 PASOS

pasos:[


{

numero:1,

titulo:'Cuece el frijol colorado',

descripcion:

'Cuece el frijol colorado previamente remojado en agua hasta que esté completamente suave. Escurre parte del líquido y conserva una pequeña cantidad para ajustar posteriormente su textura.',

tiempo:'35 minutos',

consejo:

'El frijol debe estar muy suave porque después lo convertiremos en una preparación fácil de untar sobre el pan.',

porQue:

'Una leguminosa completamente cocida desarrolla una textura cremosa y puede transformarse sin dejar partículas duras.',

mensajeChef:

'Antes de pensar en el montaje, debemos preparar correctamente cada capa.',

objetivo:

'Obtener frijoles suaves y listos para convertirse en una base cremosa.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué reservamos un poco del líquido de cocción?',

respuestaEsperada:

'Para poder ajustar la consistencia del frijol sin agregar agua sin sabor.',

señalCorrecta:

'El frijol se aplasta fácilmente al presionarlo.',

errorEvitar:

'Trabajar con frijoles todavía firmes.'

},



{

numero:2,

titulo:'Prepara el frijol para untar',

descripcion:

'Machaca los frijoles cocidos hasta obtener una pasta espesa y suave. Si es necesario, incorpora pequeñas cantidades del líquido reservado hasta conseguir una textura fácil de extender.',

tiempo:'5 minutos',

consejo:

'No queremos una sopa; la mezcla debe mantenerse sobre el pan.',

porQue:

'Una base demasiado líquida humedecería la miga y haría que el pan pierda estructura.',

mensajeChef:

'En un alimento armado por capas, la consistencia de cada componente determina si el conjunto funciona.',

objetivo:

'Conseguir un frijol cremoso, espeso y fácil de untar.',

nivelImportancia:'critico',

chefPregunta:

'¿Qué problema provocaría un frijol demasiado líquido?',

respuestaEsperada:

'Humedecería demasiado el pan y dificultaría mantener la estructura del platillo.',

señalCorrecta:

'La pasta puede extenderse con una cuchara sin escurrir.',

errorEvitar:

'Agregar demasiado líquido de cocción.'

},



{

numero:3,

titulo:'Cocina la carne de cerdo',

descripcion:

'Corta la carne de cerdo en piezas pequeñas y cocínala a fuego medio hasta que esté completamente cocida y tierna. Sazona ligeramente, recordando que el queso añejo aportará salinidad al montaje final.',

tiempo:'15 minutos',

consejo:

'Evita sazonar en exceso la carne antes de conocer la intensidad del queso.',

porQue:

'El pan compuesto reúne varios ingredientes salados; el equilibrio final depende de moderar cada capa.',

mensajeChef:

'Sazonar una preparación compleja significa pensar en el plato completo, no solamente en cada componente por separado.',

objetivo:

'Obtener carne tierna y sabrosa sin exceso de sal.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué no salamos agresivamente la carne?',

respuestaEsperada:

'Porque el queso añejo y otros componentes también aportan salinidad.',

señalCorrecta:

'La carne está completamente cocida, tierna y mantiene jugosidad.',

errorEvitar:

'Cocinar hasta resecar la carne.'

},



{

numero:4,

titulo:'Prepara los picles de zanahoria',

descripcion:

'Corta la zanahoria en tiras o rodajas delgadas y la cebolla en pluma fina. Colócalas en una olla con parte del vinagre blanco, azúcar, sal, laurel y chile serrano. Cocina brevemente hasta que los vegetales comiencen a suavizarse pero conserven firmeza.',

tiempo:'8 minutos',

consejo:

'No cocines los vegetales hasta volverlos completamente blandos; buscamos acidez y textura.',

porQue:

'El encurtido utiliza ácido, sal y azúcar para modificar rápidamente el sabor y la textura de los vegetales.',

mensajeChef:

'El ácido no solamente aporta sabor; también transforma la percepción de todo el platillo.',

objetivo:

'Crear un acompañamiento ácido, ligeramente dulce y todavía crujiente.',

nivelImportancia:'critico',

chefPregunta:

'¿Qué función cumplen los picles dentro de un pan con carne, frijol y queso?',

respuestaEsperada:

'Aportan acidez y frescura para contrastar con componentes más grasos y pesados.',

señalCorrecta:

'La zanahoria está ligeramente tierna pero todavía ofrece resistencia al morder.',

errorEvitar:

'Cocer los vegetales hasta perder toda su textura.'

},



{

numero:5,

titulo:'Prepara los chiles secos',

descripcion:

'Retira tallos y semillas de los chiles ancho y guajillo. Caliéntalos brevemente sobre un comal a fuego bajo y después hidrátalos en agua caliente hasta que estén suaves.',

tiempo:'8 minutos',

consejo:

'El calentamiento debe ser breve; los chiles secos se vuelven amargos cuando se queman.',

porQue:

'El calor desarrolla aromas mientras la hidratación devuelve flexibilidad y facilita la molienda.',

mensajeChef:

'Con un chile seco buscamos aroma tostado, nunca sabor quemado.',

objetivo:

'Preparar chiles aromáticos y suficientemente suaves para formar una salsa.',

nivelImportancia:'critico',

chefPregunta:

'¿Qué sucede si quemamos un chile seco?',

respuestaEsperada:

'Desarrolla sabores amargos que después pasan a toda la salsa.',

señalCorrecta:

'Los chiles desprenden aroma y después de hidratarse están suaves y flexibles.',

errorEvitar:

'Mantenerlos demasiado tiempo sobre el comal.'

},



{

numero:6,

titulo:'Muele la salsa agridulce',

descripcion:

'Muele los chiles hidratados con ajo, el resto de la cebolla, orégano, tomillo, clavo, pimienta negra, azúcar y parte del vinagre blanco hasta obtener una salsa uniforme.',

tiempo:'5 minutos',

consejo:

'Comienza con poco vinagre y ajusta después; retirar acidez excesiva es más difícil que agregarla.',

porQue:

'La salsa necesita equilibrar chile, especias, azúcar y acidez sin permitir que un solo elemento domine.',

mensajeChef:

'Una salsa compleja no se construye acumulando sabores; se construye equilibrándolos.',

objetivo:

'Obtener una salsa aromática de perfil dulce, ácido y ligeramente picante.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué agregamos el vinagre gradualmente?',

respuestaEsperada:

'Porque podemos aumentar la acidez después, pero corregir un exceso es más difícil.',

señalCorrecta:

'La salsa presenta equilibrio entre chile, dulzor, especias y acidez.',

errorEvitar:

'Agregar demasiado vinagre desde el principio.'

},



{

numero:7,

titulo:'Cocina y ajusta la salsa',

descripcion:

'Cocina la salsa a fuego medio-bajo durante algunos minutos hasta que pierda el sabor crudo de los ingredientes y espese ligeramente. Prueba y ajusta azúcar, vinagre o sal en cantidades pequeñas.',

tiempo:'6 minutos',

consejo:

'Haz los ajustes de uno en uno; si modificas tres sabores simultáneamente será difícil saber qué corrigió realmente la salsa.',

porQue:

'La cocción integra los sabores y permite que la salsa adquiera una textura adecuada para mantenerse sobre el pan.',

mensajeChef:

'Corregir una salsa es un ejercicio de precisión: cambia una variable y vuelve a probar.',

objetivo:

'Conseguir una salsa cocida, equilibrada y con cuerpo.',

nivelImportancia:'critico',

chefPregunta:

'¿Qué hacemos si la salsa está demasiado ácida?',

respuestaEsperada:

'Ajustamos gradualmente con una pequeña cantidad de azúcar y volvemos a probar.',

señalCorrecta:

'La salsa cubre una cuchara y no presenta sabor crudo de chile o ajo.',

errorEvitar:

'Intentar corregir un desequilibrio agregando grandes cantidades de ingredientes.'

},



{

numero:8,

titulo:'Prepara el pan',

descripcion:

'Abre cuidadosamente cada pan francés comiteco de manera horizontal. Conserva suficiente miga y estructura para soportar los ingredientes del montaje.',

tiempo:'3 minutos',

consejo:

'Utiliza un cuchillo de sierra y evita aplastar el pan mientras lo cortas.',

porQue:

'El pan será la estructura que sostendrá capas húmedas, grasas y ácidas.',

mensajeChef:

'El soporte también necesita técnica; un buen montaje comienza por una base estable.',

objetivo:

'Obtener panes abiertos y firmes listos para recibir el relleno.',

nivelImportancia:'clave',

señalCorrecta:

'El pan mantiene su forma y presenta una superficie amplia para montar.',

errorEvitar:

'Cortar o aplastar tanto el pan que pierda resistencia.'

},



{

numero:9,

titulo:'Construye la primera capa',

descripcion:

'Unta una capa moderada de frijol colorado sobre la superficie interna del pan y agrega una pequeña cantidad de mayonesa.',

tiempo:'3 minutos',

consejo:

'Distribuye hasta los bordes, pero evita una capa excesivamente gruesa.',

porQue:

'El frijol aporta cremosidad y cuerpo mientras la mayonesa añade grasa; ambas deben equilibrarse para no saturar el pan.',

mensajeChef:

'En una preparación por capas, cantidad y distribución son tan importantes como el ingrediente.',

objetivo:

'Crear una base cremosa y uniforme sin humedecer demasiado el pan.',

nivelImportancia:'clave',

señalCorrecta:

'La superficie queda cubierta pero el pan todavía conserva estructura.',

errorEvitar:

'Sobrecargar con frijol o mayonesa.'

},



{

numero:10,

titulo:'Agrega carne y queso',

descripcion:

'Distribuye la carne de cerdo caliente sobre el frijol y termina con queso añejo rallado o desmoronado.',

tiempo:'3 minutos',

consejo:

'Distribuye la carne en toda la superficie para que cada porción conserve una proporción similar.',

porQue:

'La carne aporta el componente principal de proteína mientras el queso añade intensidad, salinidad y umami.',

mensajeChef:

'Una buena capa debe sentirse en cada mordida, no solamente en el centro.',

objetivo:

'Construir la parte sustanciosa del pan compuesto.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué usamos con moderación un queso de sabor intenso?',

respuestaEsperada:

'Porque su salinidad y sabor pueden dominar rápidamente a los demás componentes.',

señalCorrecta:

'La carne y el queso están distribuidos uniformemente sobre el pan.',

errorEvitar:

'Concentrar toda la carne en una zona.'

},



{

numero:11,

titulo:'Agrega los picles',

descripcion:

'Escurre ligeramente los picles de zanahoria y cebolla y distribúyelos sobre la carne y el queso.',

tiempo:'2 minutos',

consejo:

'No agregues una gran cantidad del líquido de encurtido directamente sobre el pan.',

porQue:

'Queremos aprovechar la acidez de los vegetales sin destruir la estructura del pan con exceso de líquido.',

mensajeChef:

'El contraste debe llegar con sabor y textura, no con un charco de vinagre.',

objetivo:

'Agregar acidez, color y textura crujiente al conjunto.',

nivelImportancia:'clave',

señalCorrecta:

'Los picles permanecen visibles y el pan no está empapado.',

errorEvitar:

'Agregar los vegetales sin escurrir.'

},



{

numero:12,

titulo:'Termina con la salsa',

descripcion:

'Agrega una cantidad moderada de salsa agridulce de chile sobre cada pan compuesto y sirve inmediatamente.',

tiempo:'2 minutos',

consejo:

'Sirve salsa adicional aparte para que cada persona pueda ajustar su intensidad.',

porQue:

'La salsa conecta las capas mediante picante, dulzor, acidez y especias, pero una cantidad excesiva ocultaría los sabores individuales.',

mensajeChef:

'La última capa no debe borrar las anteriores; debe unirlas.',

objetivo:

'Terminar un pan compuesto equilibrado y estructurado.',

nivelImportancia:'critico',

chefPregunta:

'¿Qué debe lograr la salsa dentro del conjunto?',

respuestaEsperada:

'Unir y complementar los sabores sin dominar completamente el pan.',

señalCorrecta:

'Se distinguen visualmente pan, frijol, carne, queso, picles y salsa.',

errorEvitar:

'Bañar tanto el pan que pierda estructura y equilibrio.'

}

],



// 💡 INFORMACIÓN EXTRA

tip:

'Prepara los picles y la salsa antes de comenzar el montaje. Una vez abierto el pan, conviene trabajar rápidamente para conservar su estructura.',


ahorro:

'El frijol colorado aporta volumen y saciedad, permitiendo utilizar una cantidad moderada de carne por pieza sin perder el carácter sustancioso del platillo.',


errorComun:

'Agregar demasiada humedad durante el montaje y convertir un pan compuesto estructurado en una preparación difícil de comer.',



tags:[

'chiapas',

'comitan',

'comitan_de_dominguez',

'pan_compuesto',

'pan_frances_comiteco',

'frijol_colorado',

'carne_cerdo',

'queso_anejo',

'picles',

'chile_ancho',

'chile_guajillo',

'desayuno_mexicano',

'tradicional'

],


tipoComida:'llenadora',


popularidad:96,


historiaChef:

'El pan compuesto es uno de los emblemas culinarios de Comitán de Domínguez. Su personalidad surge de la combinación de un pan regional con frijol, carne, queso, encurtidos y salsa. Más que un simple pan relleno, es una preparación construida por capas donde cada componente aporta una función específica.',


trucoChef:

'Cuando montes el pan, piensa en cuatro fuerzas: cremosidad del frijol, intensidad de carne y queso, acidez de los picles y carácter de la salsa. Si una domina completamente, reduce esa capa antes de servir.',


momento:'aprender',


ocasion:[

'diario',

'familia',

'especial'

],


sustituciones:[

{

falta:'pan_frances_comiteco',

reemplazo:'bolillo de buena estructura; permite preparar el platillo pero cambia su identidad tradicional'

},

{

falta:'frijol_colorado',

reemplazo:'frijol bayo machacado; cambia el carácter regional de la base'

},

{

falta:'queso_anejo',

reemplazo:'queso cotija en menor cantidad por su intensidad'

},

{

falta:'chile_guajillo',

reemplazo:'aumentar ligeramente chile ancho; la salsa perderá parte de su perfil original'

}

],


chefInicio:

'Hoy llegamos a Comitán para aprender que montar también es cocinar. El pan compuesto reúne técnicas distintas dentro de una sola preparación: leguminosas, carne, encurtido, chiles secos, equilibrio agridulce y construcción por capas.',


chefFinal:

'Aprendiste a preparar frijol con textura adecuada para untar, controlar una carne de cerdo, crear un encurtido rápido, elaborar una salsa agridulce con chile seco y construir un plato por capas. El pan compuesto demuestra que una preparación aparentemente sencilla puede depender de muchas decisiones técnicas pequeñas.',


señalesExito:{

vista:

'Pan francés comiteco abierto con capas visibles de frijol colorado, carne de cerdo, queso añejo, picles de zanahoria y salsa rojiza de chiles secos.',

olor:

'Aroma de pan, carne caliente y frijol acompañado por chile seco, especias y notas ácidas del encurtido.',

textura:

'Pan firme, frijol cremoso, carne tierna, queso seco y desmoronable, picles ligeramente crujientes y salsa con cuerpo.'

},


rescates:[

{

problema:'El pan se humedeció demasiado',

solucion:

'Reduce la cantidad de frijol, mayonesa y salsa, y escurre mejor los picles antes de continuar con las siguientes piezas.'

},

{

problema:'Los picles quedaron demasiado ácidos',

solucion:

'Escúrrelos y mézclalos con una pequeña cantidad adicional de zanahoria cocida o una pizca de azúcar para moderar la acidez.'

},

{

problema:'La salsa quedó demasiado ácida',

solucion:

'Incorpora una pequeña cantidad de azúcar, mezcla, cocina brevemente y vuelve a probar antes de agregar más.'

},

{

problema:'La salsa quedó demasiado dulce',

solucion:

'Agrega vinagre blanco en cantidades muy pequeñas hasta recuperar equilibrio.'

},

{

problema:'La salsa quedó amarga',

solucion:

'Probablemente algún chile se quemó durante el tostado. Si el amargor es fuerte, prepara nuevamente esa base utilizando fuego más bajo.'

},

{

problema:'El conjunto quedó demasiado salado',

solucion:

'Reduce el queso añejo y evita agregar sal adicional a frijol, carne o picles hasta probar el montaje completo.'

}

]


};