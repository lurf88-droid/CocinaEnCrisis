import type { Receta } from '@/types/receta';


export const HUEVOS_MOTULENOS: Receta = {


id:'huevos-motulenos',


titulo:'Huevos motuleños',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/yucatan/huevos-motulenos.webp'
),



descripcion:

'Desayuno tradicional de Motul, Yucatán. Una preparación que combina tortillas fritas, frijoles, huevo, salsa de jitomate, jamón, queso y plátano frito, creando un equilibrio entre sabores salados, dulces y ácidos.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',
identidadRegional:{

region:'Península de Yucatán',

estadoOrigen:'Yucatán',

ciudadOrigen:'Motul',

tradicion:'cocina yucateca'

},


tecnicaPrincipal:

'fritura, elaboración de salsa y montaje de sabores',



nivelChef:3,



categoria:'desayuno',
rolCulinario: 'plato_principal',

porciones:2,


tiempoMinutos:45,


dificultad:'media',



ingredientes:[


{

id:'huevo',

cantidad:4,

unidad:'pieza'

},


{

id:'tortilla_maiz',

cantidad:4,

unidad:'pieza'

},


{

id:'frijol_bayo',

cantidad:0.300,

unidad:'kg'

},


{

id:'jitomate',

cantidad:0.400,

unidad:'kg'

},


{

id:'cebolla_blanca',

cantidad:0.100,

unidad:'kg'

},


{

id:'ajo',

cantidad:2,

unidad:'pieza'

},


{

id:'chile_serrano',

cantidad:2,

unidad:'pieza'

},


{

id:'jamon_cocido',

cantidad:0.080,

unidad:'kg'

},


{

id:'queso_fresco',

cantidad:0.100,

unidad:'kg'

},


{

id:'platano',

cantidad:1,

unidad:'pieza'

},


{

id:'aceite_vegetal',

cantidad:0.080,

unidad:'litro'

},


{

id:'sal',

cantidad:0.005,

unidad:'kg'

}


],



aprendizajes:[

'preparación de una salsa mexicana tradicional',

'equilibrio entre sabores dulces, salados y ácidos',

'control de diferentes texturas dentro de un plato',

'organización de varias preparaciones al mismo tiempo',

'identidad regional de la cocina mexicana'

],



pasos:[


{

numero:1,

titulo:'Prepara la salsa y la base de sabor',

descripcion:

'Cocina el jitomate, cebolla, ajo y chile serrano hasta suavizar. Licúa y regresa la salsa al fuego para desarrollar sabor.',

tiempo:'15 minutos',

consejo:

'Una salsa bien cocinada es la diferencia entre un desayuno común y uno memorable.',

porQue:

'La cocción elimina sabores crudos y concentra los aromas de los ingredientes.',

mensajeChef:

'Las grandes cocinas respetan sus bases.',

objetivo:

'Crear una salsa con identidad y profundidad.',

nivelImportancia:

'clave',

chefPregunta:

'¿Por qué cocinamos la salsa después de licuarla?',

respuestaEsperada:

'Para integrar sabores, eliminar notas crudas y mejorar la textura.',

señalCorrecta:

'La salsa tiene color intenso, aroma cocido y textura ligeramente espesa.',

errorEvitar:

'Usar una salsa cruda sin desarrollar sabor.'

},



{

numero:2,

titulo:'Prepara los frijoles',

descripcion:

'Calienta los frijoles y ajusta su textura hasta obtener una consistencia cremosa que pueda acompañar las tortillas.',

tiempo:'10 minutos',

consejo:

'Los frijoles deben aportar sabor, no dominar todo el plato.',

porQue:

'Funcionan como una base que une todos los elementos del desayuno.',

mensajeChef:

'Un ingrediente humilde puede convertirse en parte de un gran plato.',

objetivo:

'Conseguir una base cremosa y equilibrada.',

nivelImportancia:

'clave',

señalCorrecta:

'Los frijoles tienen textura suave y sabor concentrado.',

errorEvitar:

'Dejarlos demasiado secos o líquidos.'

},



{

numero:3,

titulo:'Fríe las tortillas y el plátano',

descripcion:

'Fríe ligeramente las tortillas hasta obtener una textura firme. Después cocina el plátano hasta que tome color dorado.',

tiempo:'10 minutos',

consejo:

'Controla la temperatura del aceite para evitar exceso de grasa.',

porQue:

'La fritura crea contraste de texturas y aporta sabor.',

mensajeChef:

'La textura también cuenta una historia.',

objetivo:

'Crear contraste entre crujiente y suave.',

nivelImportancia:

'clave',

señalCorrecta:

'La tortilla mantiene estructura y el plátano tiene color dorado.',

errorEvitar:

'Usar aceite frío porque absorbe demasiada grasa.'

},



{

numero:4,

titulo:'Cocina los huevos',

descripcion:

'Prepara los huevos al gusto, buscando una textura suave que combine con la salsa y los demás ingredientes.',

tiempo:'5 minutos',

consejo:

'Evita cocinar demasiado el huevo para conservar humedad.',

porQue:

'El huevo aporta la parte principal de proteína y textura del plato.',

mensajeChef:

'La sencillez necesita precisión.',

objetivo:

'Lograr un huevo perfectamente integrado al plato.',

nivelImportancia:

'critico',

señalCorrecta:

'El huevo está cocido pero mantiene suavidad.',

errorEvitar:

'Dejarlo seco.'

},



{

numero:5,

titulo:'Monta los huevos motuleños',

descripcion:

'Coloca la tortilla con frijoles, agrega el huevo, baña con salsa, añade jamón, queso y acompaña con plátano frito.',

tiempo:'5 minutos',

consejo:

'El montaje debe mostrar todos los elementos tradicionales.',

porQue:

'La presentación refleja la identidad de la receta.',

mensajeChef:

'No solo servimos comida, contamos una historia.',

objetivo:

'Crear un plato equilibrado visualmente y en sabor.',

nivelImportancia:

'critico',

señalCorrecta:

'Se distinguen los colores y texturas de cada elemento.',

errorEvitar:

'Mezclar todo sin cuidar la presentación.'

}

],



tip:

'El contraste del plátano dulce con la salsa y los ingredientes salados es una de las características más especiales del platillo.',



ahorro:

'Puedes aprovechar frijoles cocidos del día anterior y convertirlos en una nueva preparación.',



errorComun:

'No controlar la fritura y terminar con un plato demasiado grasoso.',



tags:[

'mexicana',

'yucateca',

'desayuno_mexicano',

'tradicional'

],



tipoComida:'llenadora',


popularidad:95,



historiaChef:

'Los huevos motuleños son originarios de Motul, Yucatán. Representan la riqueza de la cocina yucateca al combinar ingredientes cotidianos en una preparación completa y llena de identidad.',



trucoChef:

'Preparar la salsa con anticipación permite que los sabores tengan más tiempo para integrarse.',



momento:

'diario',



ocasion:[

'diario',

'familia',

'especial'

],



sustituciones:[

{

falta:'jamón_cocido',

reemplazo:'otro embutido disponible o eliminarlo manteniendo la esencia del plato'

},

{

falta:'plátano',

reemplazo:'puede omitirse aunque se pierde el contraste tradicional dulce'

}

],



chefInicio:

'Hoy viajaremos hasta Yucatán para conocer un desayuno que demuestra cómo la tradición transforma ingredientes sencillos.',



chefFinal:

'Has preparado una receta con historia, territorio y técnica. Eso es cocinar con identidad.',



señalesExito:{

vista:

'Plato colorido con salsa roja, huevo, frijoles y plátano dorado.',

olor:

'Aroma de jitomate cocido, frijoles y fritura ligera.',

textura:

'Tortilla firme, huevo suave, frijoles cremosos y plátano tierno.'

},



rescates:[

{

problema:'La salsa quedó muy ácida',

solucion:

'Permite más cocción y ajusta con sal para equilibrar sabores.'

},

{

problema:'El plato quedó muy pesado',

solucion:

'Reduce la cantidad de aceite y controla las porciones de fritura.'

}

]


};