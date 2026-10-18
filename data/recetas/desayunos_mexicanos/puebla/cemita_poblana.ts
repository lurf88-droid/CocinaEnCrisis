import type { Receta } from '@/types/receta';


export const CEMITA_POBLANA: Receta = {


id:'cemita-poblana',


titulo:'Cemita poblana de milanesa',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/puebla/cemita-poblana.webp'
),


descripcion:

'Emblemática preparación poblana elaborada con pan de cemita con ajonjolí, milanesa empanizada, quesillo, aguacate, pápalo y chile. Una combinación abundante donde el pan, la carne y los ingredientes frescos crean contrastes de sabor y textura.',


// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Valle de Puebla',

estadoOrigen:'Puebla',

ciudadOrigen:'Puebla',

tradicion:
'antojito poblano preparado con pan de cemita y diversos rellenos, reconocido como parte de la cocina popular de Puebla'

},


tecnicaPrincipal:

'empanizado, fritura controlada de milanesa, preparación de ingredientes frescos y montaje por capas',


// 🎯 CLASIFICACIÓN

categoria:'desayuno',
rolCulinario: 'plato_principal',

porciones:4,


tiempoMinutos:40,


dificultad:'media',


nivelChef:3,


// 🧺 INGREDIENTES

ingredientes:[


{

id:'pan_cemita',

cantidad:4,

unidad:'pieza'

},


{

id:'carne_cerdo',

cantidad:0.500,

unidad:'kg'

},


{

id:'huevo',

cantidad:2,

unidad:'pieza'

},


{

id:'pan_molido',

cantidad:0.180,

unidad:'kg'

},


{

id:'aceite_vegetal',

cantidad:0.250,

unidad:'litro'

},


{

id:'quesillo',

cantidad:0.200,

unidad:'kg'

},


{

id:'aguacate',

cantidad:2,

unidad:'pieza'

},


{

id:'papalo',

cantidad:0.040,

unidad:'kg'

},


{

id:'chipotle_adobado_lata',

cantidad:0.060,

unidad:'kg'

},


{

id:'sal',

cantidad:0.006,

unidad:'kg'

}


],


// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'empanizado uniforme de una pieza de carne',

'control de temperatura durante la fritura',

'organización previa de ingredientes para montaje',

'construcción de un emparedado por capas',

'equilibrio entre grasa, frescura, picante y aromas',

'identidad culinaria de la cemita poblana'

],


// 👨‍🍳 PASOS

pasos:[


{

numero:1,

titulo:'Prepara la milanesa',

descripcion:

'Divide la carne en cuatro porciones delgadas y de tamaño adecuado para el pan. Sazona ligeramente con sal.',

tiempo:'5 minutos',

consejo:

'Procura que todas las piezas tengan un grosor parecido para que se cocinen de manera uniforme.',

porQue:

'Una pieza demasiado gruesa puede dorarse por fuera antes de cocinarse correctamente en el centro.',

mensajeChef:

'La uniformidad antes de cocinar facilita el control durante la cocción.',

objetivo:

'Obtener piezas delgadas y uniformes listas para empanizar.',

nivelImportancia:'clave',

señalCorrecta:

'Las piezas tienen un grosor similar y caben dentro del pan.',

errorEvitar:

'Dejar partes demasiado gruesas o irregulares.'

},


{

numero:2,

titulo:'Empaniza la carne',

descripcion:

'Bate ligeramente los huevos. Pasa cada pieza de carne por huevo y después por pan molido, presionando suavemente para formar una cobertura uniforme.',

tiempo:'8 minutos',

consejo:

'Después de empanizar, sacude suavemente el exceso de pan molido.',

porQue:

'Una cobertura uniforme protege la carne y desarrolla una superficie crujiente durante la fritura.',

mensajeChef:

'Un buen empanizado debe adherirse a la carne, no convertirse en una capa separada.',

objetivo:

'Cubrir completamente las milanesas con una capa uniforme.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué presionamos ligeramente el pan molido contra la carne?',

respuestaEsperada:

'Para mejorar la adherencia y evitar que el empanizado se desprenda durante la fritura.',

señalCorrecta:

'La superficie está cubierta de manera uniforme y no presenta grandes acumulaciones de pan.',

errorEvitar:

'Dejar zonas de carne sin cubrir.'

},


{

numero:3,

titulo:'Fríe las milanesas',

descripcion:

'Calienta el aceite y fríe las milanesas en tandas hasta que el empanizado esté dorado y la carne completamente cocida. Retira y escurre el exceso de aceite.',

tiempo:'10 minutos',

consejo:

'No satures el recipiente. Freír demasiadas piezas juntas reduce la temperatura del aceite.',

porQue:

'Una temperatura estable permite dorar el empanizado rápidamente sin absorber grasa en exceso.',

mensajeChef:

'La fritura profesional depende más de controlar temperatura que de utilizar mucho aceite.',

objetivo:

'Obtener milanesas cocidas con una superficie dorada y crujiente.',

nivelImportancia:'critico',

señalCorrecta:

'El empanizado presenta un dorado uniforme y permanece adherido a la carne.',

errorEvitar:

'Freír con aceite poco caliente y obtener una milanesa grasosa.'

},


{

numero:4,

titulo:'Prepara los ingredientes frescos',

descripcion:

'Deshebra el quesillo, corta el aguacate en rebanadas, limpia las hojas de pápalo y prepara el chile chipotle.',

tiempo:'7 minutos',

consejo:

'Prepara estos ingredientes mientras las milanesas reposan brevemente después de la fritura.',

porQue:

'Tener todos los componentes listos permite montar la cemita rápidamente y servirla con la milanesa todavía caliente.',

mensajeChef:

'La organización también es una técnica de cocina.',

objetivo:

'Tener todos los ingredientes preparados antes del montaje.',

nivelImportancia:'clave',

señalCorrecta:

'Todos los componentes están listos y al alcance antes de abrir el pan.',

errorEvitar:

'Comenzar el montaje y después buscar o cortar ingredientes.'

},


{

numero:5,

titulo:'Prepara el pan de cemita',

descripcion:

'Corta cada pan de cemita horizontalmente sin destruir su estructura y abre cuidadosamente las dos mitades.',

tiempo:'3 minutos',

consejo:

'Utiliza un cuchillo de sierra y evita comprimir demasiado el pan.',

porQue:

'La estructura del pan debe soportar una cantidad considerable de ingredientes sin romperse.',

mensajeChef:

'El pan no es solamente un recipiente; forma parte de la textura y personalidad de la cemita.',

objetivo:

'Preparar una base resistente para el montaje.',

nivelImportancia:'clave',

señalCorrecta:

'El pan mantiene su forma y ambas mitades permanecen completas.',

errorEvitar:

'Aplastar la miga mientras cortas.'

},


{

numero:6,

titulo:'Construye la cemita',

descripcion:

'Coloca la milanesa caliente sobre la base del pan. Distribuye encima el quesillo, aguacate, pápalo y una cantidad moderada de chile chipotle.',

tiempo:'5 minutos',

consejo:

'Distribuye los ingredientes de borde a borde para que cada mordida tenga una proporción similar.',

porQue:

'La cemita depende del contraste entre la milanesa crujiente, el queso, la cremosidad del aguacate, el aroma del pápalo y el picante.',

mensajeChef:

'Montar correctamente significa diseñar cómo se experimentará cada mordida.',

objetivo:

'Crear capas equilibradas sin perder la estructura del pan.',

nivelImportancia:'critico',

chefPregunta:

'¿Qué ingrediente aporta uno de los aromas más característicos de esta cemita?',

respuestaEsperada:

'El pápalo.',

señalCorrecta:

'Los ingredientes están distribuidos uniformemente y el pan todavía puede cerrarse.',

errorEvitar:

'Concentrar todo el relleno en el centro.'

},


{

numero:7,

titulo:'Cierra y sirve',

descripcion:

'Coloca la tapa del pan, presiona solamente lo necesario para estabilizar el relleno y sirve inmediatamente.',

tiempo:'2 minutos',

consejo:

'No aplastes la cemita; queremos conservar tanto la estructura del pan como la textura de la milanesa.',

porQue:

'Servir inmediatamente conserva el contraste entre los componentes calientes, crujientes y frescos.',

mensajeChef:

'Una buena cemita debe sentirse abundante sin convertirse en un montón desordenado de ingredientes.',

objetivo:

'Servir una cemita estable, abundante y equilibrada.',

nivelImportancia:'normal',

señalCorrecta:

'La cemita puede sostenerse y conserva claramente sus diferentes capas.',

errorEvitar:

'Presionar demasiado el pan y compactar todo el relleno.'

}

],


// 💡 INFORMACIÓN EXTRA

tip:

'Ten todos los ingredientes preparados antes de freír la última tanda de milanesas; así podrás montar las cemitas mientras la carne todavía está caliente.',


ahorro:

'Puedes ajustar la cantidad de carne y aumentar ligeramente aguacate o quesillo para preparar una cemita más económica sin perder su carácter.',


errorComun:

'Saturar la cemita con relleno hasta que el pan pierda estructura o utilizar demasiado chile y ocultar los demás sabores.',


tags:[

'puebla',

'cemita_poblana',

'desayuno_mexicano',

'antojito_poblano',

'milanesa',

'papalo',

'pan_cemita',

'tradicional'

],


tipoComida:'llenadora',


popularidad:96,


historiaChef:

'La cemita poblana es una de las preparaciones más reconocibles de Puebla. Su identidad no depende solamente del relleno: el pan con ajonjolí y el aroma particular del pápalo son elementos que ayudan a distinguirla de otros emparedados mexicanos.',


trucoChef:

'Escurre bien la milanesa antes de colocarla en el pan; así conservas mejor el contraste entre el empanizado crujiente y los ingredientes frescos.',


momento:'diario',


ocasion:[





'familia',



],


sustituciones:[

{

falta:'pan_cemita',

reemplazo:'bolillo, aunque deja de tener la estructura y carácter tradicional de una cemita poblana'

},

{

falta:'papalo',

reemplazo:'cilantro como alternativa aromática, aunque cambia considerablemente el perfil tradicional'

},

{

falta:'quesillo',

reemplazo:'queso Oaxaca'

}

],


chefInicio:

'Hoy cerramos Puebla preparando uno de sus grandes emblemas culinarios. Aquí no solamente aprenderás a freír una milanesa: aprenderás cómo construir capas de sabor, temperatura y textura.',


chefFinal:

'Terminaste Puebla dominando una preparación donde pan, fritura, ingredientes frescos y montaje trabajan juntos. Ahora puedes reconocer por qué una cemita poblana es mucho más que un emparedado.',


señalesExito:{

vista:

'Pan de cemita con ajonjolí bien estructurado y capas visibles de milanesa dorada, quesillo, aguacate, pápalo y chile.',

olor:

'Aroma de pan, milanesa recién frita y las notas herbales intensas del pápalo.',

textura:

'Pan firme, milanesa crujiente, quesillo fibroso y aguacate cremoso.'

},


rescates:[

{

problema:'El empanizado se desprende de la carne',

solucion:

'Presiona mejor el pan molido durante el empanizado y manipula la milanesa lo menos posible mientras se fríe.'

},

{

problema:'La milanesa quedó demasiado grasosa',

solucion:

'Aumenta ligeramente la temperatura del aceite y evita freír demasiadas piezas simultáneamente.'

},

{

problema:'La cemita se desarma al comerla',

solucion:

'Reduce ligeramente las cantidades del relleno y distribuye los ingredientes de manera uniforme sobre toda la superficie del pan.'

}

]


};