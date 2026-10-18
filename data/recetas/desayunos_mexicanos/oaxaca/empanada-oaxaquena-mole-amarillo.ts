import type { Receta } from '@/types/receta';


export const EMPANADA_OAXAQUENA_MOLE_AMARILLO: Receta = {


id:'empanada-oaxaquena-mole-amarillo',


titulo:'Empanada oaxaqueña de mole amarillo',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/oaxaca/empanada-oaxaquena-mole-amarillo.webp'
),


descripcion:

'Antojito tradicional de los Valles Centrales de Oaxaca elaborado con una tortilla de maíz cocida al comal y rellena de pollo deshebrado, mole amarillo espeso y hierbas aromáticas. A diferencia de una empanada frita convencional, se dobla y termina directamente sobre el comal, logrando una masa suave por dentro, ligeramente tostada por fuera y un relleno intenso con chile, maíz y hoja santa.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Valles Centrales de Oaxaca',

estadoOrigen:'Oaxaca, México',

tradicion:'Las empanadas de amarillo forman parte de la cocina tradicional de los Valles Centrales de Oaxaca. Se preparan con tortillas grandes de masa de maíz que se rellenan mientras terminan de cocerse en el comal. El relleno característico combina carne, principalmente pollo, con mole amarillo espeso y hierbas aromáticas como cilantro o hoja santa. Son comunes en desayunos, mercados, fiestas y ferias populares de la región.'

},


tecnicaPrincipal:

'Cocción de tortilla de maíz en comal, preparación de mole mediante tostado y molienda de chiles, espesado con masa de maíz y sellado de la empanada directamente sobre el comal.',



// 🎯 CLASIFICACIÓN

nivelChef:4,

categoria:'desayuno',
rolCulinario: 'plato_principal',

porciones:4,

tiempoMinutos:75,

dificultad:'media',



// 🧺 INGREDIENTES

ingredientes:[

{

id:'masa_maiz',

cantidad:0.500,

unidad:'kg'

},

{
id:'pechuga_pollo',
cantidad:0.300,
unidad:'kg'
},

{

id:'chile_guajillo',

cantidad:0.040,

unidad:'kg'

},

{

id:'chile_chilhuacle_amarillo',

cantidad:0.020,

unidad:'kg'

},

{

id:'jitomate',

cantidad:0.250,

unidad:'kg'

},

{

id:'tomate',

cantidad:0.150,

unidad:'kg'

},

{

id:'cebolla',

cantidad:0.080,

unidad:'kg'

},

{

id:'ajo',

cantidad:0.010,

unidad:'kg'

},

{

id:'hoja_santa',

cantidad:4,

unidad:'pieza'

},

{

id:'cilantro',

cantidad:0.030,

unidad:'kg'

},

{

id:'manteca_cerdo',

cantidad:0.030,

unidad:'kg'

},

{

id:'oregano',

cantidad:0.005,

unidad:'kg'

},

{

id:'comino',

cantidad:0.002,

unidad:'kg'

},

{

id:'clavo',

cantidad:0.001,

unidad:'kg'

},

{

id:'pimienta_negra',

cantidad:0.002,

unidad:'kg'

},

{

id:'sal',

cantidad:0.010,

unidad:'kg'

}

],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'Preparar un mole amarillo oaxaqueño con una consistencia adecuada para utilizarlo como relleno',

'Aprender a espesar una salsa tradicional utilizando masa de maíz',

'Controlar la temperatura del comal para cocinar masa sin resecarla',

'Aprender a rellenar y cerrar una empanada mientras la tortilla todavía conserva flexibilidad',

'Reconocer el papel aromático de la hoja santa en la cocina oaxaqueña',

'Comprender la identidad de las empanadas de amarillo de los Valles Centrales de Oaxaca'

],



// 👨‍🍳 PASOS

pasos:[

{

numero:1,

titulo:'Cocer y deshebrar el pollo',

descripcion:'Coloca el pollo en una olla con agua suficiente, una parte de la cebolla, un diente de ajo y una pequeña cantidad de sal. Cocina hasta que esté completamente cocido y suave. Retira el pollo, deja que enfríe ligeramente y deshébralo. Conserva aproximadamente dos tazas del caldo porque servirá para darle cuerpo y sabor al mole.',

tiempo:'25 minutos',

consejo:'No tires el caldo de cocción. Es uno de los elementos que conecta el sabor del pollo con el mole.',

porQue:'El caldo contiene proteínas, grasa y compuestos aromáticos liberados durante la cocción del pollo. Utilizarlo en lugar de agua produce un mole con mayor profundidad de sabor.',

mensajeChef:'En cocina, aprovechar un líquido de cocción puede transformar un ingrediente que parecía un residuo en parte fundamental del platillo.',

objetivo:'Obtener pollo suave que pueda deshebrarse fácilmente y un caldo limpio para preparar el mole.',

nivelImportancia:'clave',

chefPregunta:'¿Por qué reservamos el caldo del pollo en lugar de utilizar agua para el mole?',

respuestaEsperada:'Porque el caldo aporta sabor y permite aprovechar completamente la cocción del pollo.',

señalCorrecta:'El pollo debe separarse fácilmente en fibras y el caldo debe tener aroma agradable a pollo, cebolla y ajo.',

errorEvitar:'Cocer demasiado el pollo hasta dejarlo seco o desechar el caldo.'

},

{

numero:2,

titulo:'Preparar los chiles',

descripcion:'Retira tallos y la mayor parte de las semillas de los chiles. Calienta un comal a fuego medio y pásalos rápidamente por la superficie caliente durante algunos segundos por cada lado. Después colócalos en agua caliente hasta que se suavicen.',

tiempo:'10 minutos',

consejo:'El chile solamente necesita calentarse y despertar sus aromas; no debe quedar negro.',

porQue:'El calor desarrolla los aromas del chile seco, pero un tostado excesivo quema sus aceites y genera sabores amargos.',

mensajeChef:'Cuando trabajas con chile seco, unos segundos pueden separar un sabor profundo de uno quemado.',

objetivo:'Suavizar los chiles y desarrollar su aroma sin quemarlos.',

nivelImportancia:'clave',

chefPregunta:'¿Qué ocurre si dejamos quemar los chiles secos?',

respuestaEsperada:'El mole puede adquirir un sabor amargo difícil de corregir.',

señalCorrecta:'Los chiles se vuelven ligeramente brillantes y desprenden aroma intenso sin presentar zonas negras.',

errorEvitar:'Quemar los chiles en el comal.'

},

{

numero:3,

titulo:'Asar los ingredientes del recaudo',

descripcion:'Coloca sobre el comal el jitomate, tomate verde, cebolla y ajo. Ásalos hasta que tengan zonas ligeramente doradas y estén suaves. Tuesta muy brevemente el clavo, comino y pimienta.',

tiempo:'10 minutos',

consejo:'Las especias necesitan mucho menos tiempo que los vegetales. Retíralas en cuanto desprendan aroma.',

porQue:'El asado concentra sabores y genera notas tostadas que dan profundidad al mole.',

mensajeChef:'Tatemar no significa quemar. Buscamos desarrollar sabor, no producir carbón.',

objetivo:'Concentrar el sabor de los vegetales y activar los aromas de las especias.',
nivelImportancia:'normal',

chefPregunta:'¿Qué diferencia existe entre tatemar y quemar un ingrediente?',

respuestaEsperada:'Tatemar desarrolla zonas tostadas y aroma; quemar produce sabores amargos y carbón.',

señalCorrecta:'Los vegetales están suaves y presentan manchas tostadas sin estar completamente negros.',

errorEvitar:'Quemar el ajo o las especias.'

},

{

numero:4,

titulo:'Moler la base del amarillo',

descripcion:'Licúa los chiles hidratados con jitomate, tomate verde, cebolla, ajo, orégano, clavo, pimienta y comino. Agrega poco a poco caldo de pollo hasta obtener una salsa uniforme. Si deseas una textura especialmente fina, pasa la mezcla por un colador.',

tiempo:'8 minutos',

consejo:'Agrega el caldo poco a poco. Siempre puedes adelgazar una molienda espesa, pero es más difícil recuperar una demasiado líquida.',

porQue:'Una molienda uniforme distribuye los sabores y evita fragmentos grandes de chile o especias dentro del relleno.',

mensajeChef:'La textura también forma parte del sabor. Un buen mole debe sentirse integrado, no como ingredientes separados.',

objetivo:'Obtener una salsa homogénea, aromática y sin trozos grandes.',

nivelImportancia:'clave',

chefPregunta:'¿Por qué añadimos el caldo poco a poco durante la molienda?',

respuestaEsperada:'Para controlar la consistencia y evitar que la salsa quede demasiado líquida.',

señalCorrecta:'La molienda cae de la cuchara como una salsa espesa y uniforme.',

errorEvitar:'Agregar demasiado líquido desde el principio.'

},

{

numero:5,

titulo:'Cocinar y espesar el mole amarillo',

descripcion:'Calienta la manteca en una cazuela y agrega cuidadosamente la molienda. Cocina a fuego medio mientras mueves. Toma una pequeña porción de la masa de maíz, disuélvela perfectamente en un poco de caldo y agrégala gradualmente al mole. Incorpora hoja santa y cocina hasta obtener una consistencia más espesa que la de un mole servido en plato.',

tiempo:'15 minutos',

consejo:'Para una empanada necesitamos un amarillo bastante espeso; si queda demasiado líquido escapará de la tortilla.',

porQue:'La masa contiene almidón. Al calentarse en presencia de líquido, ese almidón gelatiniza y aumenta la viscosidad del mole.',

mensajeChef:'Aquí estás utilizando una técnica tradicional y también un principio de cocina: controlar una salsa mediante el almidón del maíz.',

objetivo:'Conseguir un mole espeso que pueda permanecer dentro de la empanada.',

nivelImportancia:'clave',

chefPregunta:'¿Por qué el amarillo destinado a una empanada debe ser más espeso que el que serviríamos en un plato?',

respuestaEsperada:'Porque necesita permanecer dentro de la tortilla sin escurrirse mientras se cocina y se come.',

señalCorrecta:'Al pasar una cuchara por el fondo de la cazuela queda un camino visible durante uno o dos segundos antes de cerrarse.',

errorEvitar:'Añadir directamente un trozo de masa al mole sin disolverlo, porque puede formar grumos.'

},

{

numero:6,

titulo:'Integrar el pollo',

descripcion:'Agrega el pollo deshebrado al mole amarillo y mezcla hasta que quede bien cubierto. Cocina unos minutos más para que el pollo absorba parte del sabor. Prueba y rectifica únicamente al final la cantidad de sal.',

tiempo:'5 minutos',

consejo:'No satures el relleno de pollo. La salsa de amarillo debe seguir siendo protagonista.',

porQue:'Cocinar brevemente el pollo dentro del mole permite que las fibras absorban humedad y sabor.',

mensajeChef:'En esta preparación el pollo acompaña al mole; no debe ocultarlo.',

objetivo:'Obtener un relleno húmedo, intenso y suficientemente espeso.',

nivelImportancia:'normal',

chefPregunta:'¿Cuál debe ser el ingrediente dominante en sabor dentro de esta empanada?',

respuestaEsperada:'El mole amarillo, acompañado por el pollo y las hierbas aromáticas.',

señalCorrecta:'El pollo queda completamente cubierto por una capa gruesa de amarillo sin líquido acumulado en el fondo.',

errorEvitar:'Dejar el relleno demasiado seco o demasiado líquido.'

},

{

numero:7,

titulo:'Formar las tortillas',

descripcion:'Divide la masa en cuatro porciones grandes. Forma bolas y presiónalas hasta obtener tortillas ovaladas de aproximadamente 18 a 20 centímetros. Coloca una tortilla sobre un comal caliente y cocina primero uno de sus lados.',

tiempo:'8 minutos',

consejo:'No cocines completamente ambos lados antes de rellenarla. Necesitamos que la masa conserve humedad y flexibilidad.',

porQue:'Una tortilla completamente cocida pierde parte de su capacidad de doblarse y puede romperse al formar la empanada.',

mensajeChef:'Aquí la tortilla no es solo acompañamiento: se convierte en la estructura completa del platillo.',

objetivo:'Crear una tortilla suficientemente cocida para manipularla pero todavía flexible.',

nivelImportancia:'clave',

chefPregunta:'¿Por qué no terminamos de cocinar la tortilla antes de poner el relleno?',

respuestaEsperada:'Porque todavía necesitamos doblarla y sellarla sin que se rompa.',

señalCorrecta:'La tortilla puede levantarse del comal pero continúa suave y flexible.',

errorEvitar:'Dejar que la tortilla se vuelva seca o rígida antes de rellenarla.'

},

{

numero:8,

titulo:'Rellenar, doblar y terminar en el comal',

descripcion:'Voltea la tortilla. Coloca el relleno de pollo con amarillo sobre una mitad dejando libre el borde. Agrega un poco de cilantro y, si lo deseas, un pequeño trozo de hoja santa. Dobla inmediatamente formando una media luna y presiona cuidadosamente las orillas. Cocina por ambos lados hasta que la masa esté completamente cocida y aparezcan pequeñas zonas doradas.',

tiempo:'8 minutos',

consejo:'Menos relleno suele producir una mejor empanada. Si la llenas demasiado será difícil cerrarla y el mole terminará fuera del comal.',

porQue:'La masa todavía húmeda permite que los bordes se adhieran mientras el calor termina de fijar la estructura.',

mensajeChef:'La última parte combina tres habilidades: temperatura, cantidad de relleno y velocidad para trabajar la masa.',

objetivo:'Obtener una empanada cerrada, flexible y ligeramente tostada con el relleno caliente en su interior.',

nivelImportancia:'clave',

chefPregunta:'¿Cuál es una señal de que colocaste demasiado relleno?',

respuestaEsperada:'Los bordes no pueden juntarse correctamente o el mole comienza a salir al doblar la tortilla.',

señalCorrecta:'La empanada mantiene su forma de media luna, los bordes permanecen unidos y la superficie tiene pequeñas zonas tostadas.',

errorEvitar:'Presionar con demasiada fuerza y romper la tortilla o colocar el relleno hasta el borde.'

}

],



// 💡 INFORMACIÓN EXTRA

tip:

'Prepara el mole amarillo un poco más espeso de lo que prepararías para servirlo como guisado. Esa diferencia de textura permite que el relleno permanezca dentro de la tortilla cuando la empanada se dobla y termina de cocinarse.',


ahorro:

'Puedes aprovechar pollo cocido que haya sobrado de otra preparación y utilizar su propio caldo para elaborar el amarillo. Si el chilhuacle amarillo resulta difícil de conseguir o supera tu presupuesto, prepara una versión doméstica con chile guajillo y una pequeña cantidad de chile ancho; conservarás la técnica del platillo aunque cambiará parte de su perfil tradicional.',


errorComun:

'Preparar el mole demasiado líquido. Una salsa que sería correcta para servir en plato puede provocar que la empanada se abra, humedezca excesivamente la masa o pierda el relleno sobre el comal.',



tags:[

'oaxaca',

'valles-centrales',

'mole-amarillo',

'empanada-oaxaquena',

'maiz',

'pollo',

'comal',

'desayuno-regional',

'cocina-tradicional'

],


tipoComida:'llenadora',


popularidad:92,


historiaChef:

'En Oaxaca, una empanada de amarillo es muy distinta de la imagen habitual de una empanada de harina frita u horneada. En los Valles Centrales se prepara a partir de una tortilla grande de masa de maíz que comienza a cocinarse sobre el comal. Antes de terminar su cocción se rellena con mole amarillo espeso, tradicionalmente acompañado de carne y hierbas aromáticas, se dobla formando una media luna y se termina sobre el mismo comal. Las empanadas de amarillo se consumen como desayuno y también forman parte de puestos presentes en fiestas y ferias populares. Esta preparación reúne varios elementos esenciales de la cocina oaxaqueña: maíz, chile, comal, mole y hierbas regionales.',


trucoChef:

'Reserva una pequeña cantidad de masa antes de formar las tortillas y úsala, perfectamente disuelta en caldo frío o tibio, para espesar el amarillo. Así el mismo maíz cumple dos funciones: forma la empanada y controla la textura de su relleno.',


momento:'aprender',



ocasion:[
  'diario',
  'familia',
  'especial'
],



sustituciones:[

{

falta:'Chile chilhuacle amarillo',

reemplazo:'Chile guajillo combinado con una pequeña cantidad de chile ancho. El sabor no será idéntico al tradicional, pero es una alternativa más accesible.'

},

{

falta:'Hoja santa',

reemplazo:'Cilantro fresco. Cambia el perfil aromático, pero mantiene una nota herbal adecuada para una versión casera.'

},

{

falta:'Pollo',

reemplazo:'Carne de cerdo cocida y deshebrada, o verduras cocidas para una versión económica sin carne.'

},

{

falta:'Manteca de cerdo',

reemplazo:'Aceite vegetal de sabor neutro.'

},

{

falta:'Masa de maíz fresca',

reemplazo:'Harina de maíz nixtamalizado hidratada siguiendo las indicaciones del fabricante.'

}

],



chefInicio:

'Hoy no vamos a preparar una empanada cualquiera. En Oaxaca, la masa, el comal y el mole amarillo trabajan juntos. Tu reto será controlar la textura: un buen relleno debe tener suficiente humedad para ser sabroso y suficiente cuerpo para quedarse dentro de la tortilla.',


chefFinal:

'Acabas de practicar mucho más que una receta: tostaste chiles, construiste un recaudo, utilizaste masa como espesante, controlaste una salsa y trabajaste una tortilla mientras todavía era flexible. Si entendiste por qué cada uno de esos pasos funciona, ya aprendiste parte de la lógica que sostiene la cocina tradicional oaxaqueña.',



señalesExito:{

vista:'Empanada grande en forma de media luna, con superficie de maíz ligeramente tostada, bordes cerrados y mole amarillo visible al abrirla sin escurrirse excesivamente.',

olor:'Aroma predominante a maíz recién cocido, chile tostado, mole especiado y notas frescas de hoja santa o cilantro.',

textura:'Masa suave y flexible con pequeñas zonas tostadas; relleno cremoso y espeso con pollo tierno y húmedo.'

},



rescates:[

{

problema:'El mole amarillo quedó demasiado líquido.',

solucion:'Disuelve una pequeña cantidad de masa de maíz en caldo frío o tibio, incorpórala poco a poco y cocina unos minutos mientras mueves hasta recuperar una consistencia espesa.'

},

{

problema:'El mole quedó demasiado espeso.',

solucion:'Agrega caldo de pollo caliente poco a poco mientras mezclas hasta conseguir una textura cremosa que todavía pueda mantenerse dentro de la empanada.'

},

{

problema:'El mole quedó ligeramente amargo.',

solucion:'Revisa primero la sal y agrega una pequeña cantidad de jitomate cocido y molido. Si el amargor proviene de chiles completamente quemados, lo más recomendable es rehacer esa parte de la molienda.'

},

{

problema:'La tortilla se rompe al doblarla.',

solucion:'La masa puede estar demasiado seca o la tortilla se cocinó demasiado antes de rellenarla. Humedece ligeramente la siguiente porción de masa y dóblala mientras todavía esté flexible.'

},

{

problema:'La empanada se abre en el comal.',

solucion:'Reduce la cantidad de relleno, deja libre aproximadamente un centímetro alrededor del borde y presiona la masa mientras todavía conserve humedad.'

},

{

problema:'La tortilla se pega al comal.',

solucion:'Permite que el comal alcance una temperatura media estable antes de colocar la masa y espera a que la tortilla forme estructura antes de intentar moverla.'

}

]


};