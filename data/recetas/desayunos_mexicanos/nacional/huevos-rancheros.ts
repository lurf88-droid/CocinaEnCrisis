import type { Receta } from '@/types/receta';


export const HUEVOS_RANCHEROS: Receta = {


id:'huevos-rancheros',


titulo:'Huevos rancheros',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/nacional/huevos-rancheros.webp'

),


descripcion:

'Uno de los desayunos más representativos de México. Combina tortillas de maíz, huevos fritos y una salsa ranchera de jitomate con chile que demuestra cómo ingredientes sencillos pueden crear un plato lleno de identidad y sabor.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


tecnicaPrincipal:

'elaboración de salsa, fritura y equilibrio de sabores',



nivelChef:2,



categoria:'desayuno',


porciones:2,


tiempoMinutos:25,


dificultad:'facil',



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

id:'chile_serrano',

cantidad:3,

unidad:'pieza'

},


{

id:'ajo',

cantidad:2,

unidad:'pieza'

},


{

id:'aceite_vegetal',

cantidad:0.050,

unidad:'litro'

},


{

id:'sal',

cantidad:0.005,

unidad:'kg'

}

],



aprendizajes:[

'preparación de una salsa mexicana base',

'equilibrio entre picante, acidez y sal',

'manejo correcto del huevo',

'importancia de la textura en un plato sencillo',

'presentación tradicional mexicana'

],



pasos:[


{

numero:1,

titulo:'Prepara los ingredientes',

descripcion:

'Lava los jitomates, chile serrano y cebolla. Corta los ingredientes para preparar la salsa ranchera.',

tiempo:'5 minutos',

consejo:

'Tener todos los ingredientes listos permite controlar mejor la cocción.',

porQue:

'La organización evita errores y permite concentrarse en desarrollar sabor.',

mensajeChef:

'Los grandes platos comienzan con orden, incluso los más sencillos.',

objetivo:

'Preparar una estación de trabajo limpia y organizada.',

nivelImportancia:

'normal',

señalCorrecta:

'Todos los ingredientes están limpios y listos para cocinar.',

errorEvitar:

'Empezar la preparación sin tener organizada la estación.'

},



{

numero:2,

titulo:'Construye la salsa ranchera',

descripcion:

'Cocina el jitomate, cebolla, ajo y chile hasta que los vegetales estén suaves. Después licúa hasta obtener una salsa uniforme.',

tiempo:'10 minutos',

consejo:

'Puedes asar ligeramente los ingredientes para obtener un sabor más profundo.',

porQue:

'La cocción transforma los sabores crudos en una salsa más equilibrada.',

mensajeChef:

'Una salsa sencilla puede convertirse en la identidad completa del plato.',

objetivo:

'Crear una salsa con sabor profundo y buena textura.',

nivelImportancia:

'clave',

chefPregunta:

'¿Por qué no usamos el jitomate crudo directamente?',

respuestaEsperada:

'Porque al cocinarlo desarrollamos más sabor y eliminamos notas vegetales crudas.',

señalCorrecta:

'La salsa tiene color intenso, aroma agradable y textura uniforme.',

errorEvitar:

'Dejar la salsa sin cocción porque tendrá sabor plano.'

},



{

numero:3,

titulo:'Cocina y ajusta la salsa',

descripcion:

'Regresa la salsa a la sartén con un poco de aceite y cocina unos minutos hasta que tome cuerpo.',

tiempo:'5 minutos',

consejo:

'La salsa debe tener una textura que pueda cubrir ligeramente el plato.',

porQue:

'Reducir la salsa concentra sabores y mejora su textura.',

mensajeChef:

'El tiempo también es un ingrediente.',

objetivo:

'Lograr una salsa lista para acompañar el huevo.',

nivelImportancia:

'clave',

señalCorrecta:

'La salsa tiene aroma cocido y consistencia ligeramente espesa.',

errorEvitar:

'Sirver una salsa demasiado líquida.'

},



{

numero:4,

titulo:'Fríe las tortillas y prepara los huevos',

descripcion:

'Calienta las tortillas ligeramente con aceite. Después cocina los huevos al punto deseado procurando mantener una textura agradable.',

tiempo:'5 minutos',

consejo:

'El huevo debe conservar una textura suave para combinar con la salsa.',

porQue:

'La diferencia entre un plato común y uno bien preparado está en respetar los puntos de cocción.',

mensajeChef:

'La sencillez exige precisión.',

objetivo:

'Crear contraste entre tortilla, huevo y salsa.',

nivelImportancia:

'critico',

señalCorrecta:

'La tortilla mantiene estructura y el huevo tiene buena textura.',

errorEvitar:

'Cocinar demasiado el huevo hasta dejarlo seco.'

},



{

numero:5,

titulo:'Monta los huevos rancheros',

descripcion:

'Coloca las tortillas como base, agrega los huevos y baña con la salsa ranchera caliente.',

tiempo:'3 minutos',

consejo:

'La presentación debe mostrar los colores de la cocina mexicana.',

porQue:

'El montaje también comunica la identidad del platillo.',

mensajeChef:

'Un plato tradicional también merece cuidado y respeto.',

objetivo:

'Crear un plato equilibrado visualmente y en sabor.',

nivelImportancia:

'clave',

señalCorrecta:

'La salsa acompaña al huevo sin cubrir completamente la textura.',

errorEvitar:

'Excederse con salsa y perder el equilibrio del plato.'

}

],



tip:

'Puedes acompañar con frijoles refritos, aguacate o queso fresco para crear una versión más completa.',



ahorro:

'Es una receta de alto rendimiento porque utiliza ingredientes básicos de la cocina mexicana con gran capacidad de combinación.',



errorComun:

'Preparar una salsa sin suficiente cocción o cocinar demasiado el huevo.',



tags:[

'mexicana',

'desayuno',

'tradicional',

'casera'

],



tipoComida:'barata',


popularidad:98,



historiaChef:

'Los huevos rancheros representan la cocina mexicana de campo: ingredientes sencillos transformados mediante técnica, sazón y aprovechamiento.',



trucoChef:

'Agregar un poco del aceite donde se cocinaron las tortillas puede aportar más sabor a la salsa.',



momento:

'diario',



ocasion:[

'diario',

'familia'

],



sustituciones:[

{

falta:'chile serrano',

reemplazo:'chile jalapeño o chile disponible ajustando el picante'

}

],



chefInicio:

'Hoy aprenderemos que un desayuno sencillo puede convertirse en una experiencia culinaria cuando cuidamos cada detalle.',



chefFinal:

'Has preparado un clásico mexicano dominando tres fundamentos: salsa, cocción y equilibrio.',



señalesExito:{

vista:

'Colores vivos con salsa roja acompañando el huevo y la tortilla.',

olor:

'Aroma de jitomate cocido, chile y especias frescas.',

textura:

'Tortilla firme, huevo suave y salsa con cuerpo.'

},



rescates:[

{

problema:'La salsa quedó muy ácida',

solucion:

'Permite más tiempo de cocción para concentrar sabores y ajustar sal.'

},

{

problema:'El huevo quedó seco',

solucion:

'Reduce el tiempo de cocción y busca una textura más suave.'

}

]


};