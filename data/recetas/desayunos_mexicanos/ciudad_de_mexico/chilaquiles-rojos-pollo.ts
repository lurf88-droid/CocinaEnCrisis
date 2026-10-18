import type { Receta } from '@/types/receta';


export const CHILAQUILES_ROJOS_POLLO: Receta = {


id:'chilaquiles-rojos-pollo',


titulo:'Chilaquiles rojos con pollo estilo CDMX',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/ciudad_de_mexico/chilaquiles-rojos-pollo.webp'
),


descripcion:

'Desayuno clásico de la Ciudad de México preparado con totopos de maíz bañados en salsa roja, pollo deshebrado, crema y queso. Un platillo de fonda que representa la cocina urbana capitalina.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Ciudad de México',

estadoOrigen:'Ciudad de México',

tradicion:'desayuno de fonda y cocina urbana capitalina basado en tortilla de maíz, salsa roja, pollo y lácteos'

},


tecnicaPrincipal:

'preparación de salsa roja, integración de tortilla y equilibrio entre texturas crujientes y suaves',



// 🎯 CLASIFICACIÓN

categoria:'desayuno',


porciones:4,


tiempoMinutos:35,


dificultad:'facil',


nivelChef:2,



// 🧺 INGREDIENTES


ingredientes:[


{

id:'tortilla_maiz',

cantidad:0.500,

unidad:'kg'

},


{

id:'pollo_deshebrado',

cantidad:0.400,

unidad:'kg'

},


{

id:'jitomate',

cantidad:0.500,

unidad:'kg'

},


{

id:'chile_guajillo',

cantidad:4,

unidad:'pieza'

},


{

id:'ajo',

cantidad:2,

unidad:'pieza'

},


{

id:'cebolla_blanca',

cantidad:0.100,

unidad:'kg'

},


{

id:'aceite_vegetal',

cantidad:0.080,

unidad:'litro'

},


{

id:'crema',

cantidad:0.150,

unidad:'litro'

},


{

id:'queso_fresco',

cantidad:0.150,

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

'preparación de salsa roja mexicana',

'equilibrio entre textura crujiente y suave',

'aprovechamiento de tortilla de maíz',

'construcción de sabor mediante salsa',

'identidad gastronómica de la Ciudad de México'

],



// 👨‍🍳 PASOS


pasos:[


{

numero:1,

titulo:'Prepara la salsa roja',

descripcion:

'Cuece el jitomate con los chiles guajillos. Licúa con ajo, cebolla y un poco de agua hasta obtener una salsa uniforme.',

tiempo:'12 minutos',

consejo:

'Retira semillas y venas del chile si buscas una salsa menos picante.',

porQue:

'La salsa será la base principal del sabor del platillo.',

mensajeChef:

'Una buena salsa puede transformar ingredientes sencillos.',

objetivo:

'Crear una salsa roja equilibrada.',

nivelImportancia:'clave',

señalCorrecta:

'La salsa tiene color intenso y aroma agradable.',

errorEvitar:

'Usar jitomate crudo sin desarrollar sabor.'

},



{

numero:2,

titulo:'Cocina la salsa',

descripcion:

'Calienta un poco de aceite y cocina la salsa roja durante unos minutos hasta que cambie de color y concentre sabor.',

tiempo:'8 minutos',

consejo:

'No apresures este paso; aquí se desarrolla profundidad.',

porQue:

'La cocción elimina sabores crudos y mejora la salsa.',

mensajeChef:

'El sabor se construye con tiempo y temperatura.',

objetivo:

'Lograr una salsa lista para integrar los totopos.',

nivelImportancia:'critico',

señalCorrecta:

'La salsa tiene aroma cocinado y textura ligeramente espesa.',

errorEvitar:

'Usarla inmediatamente después de licuar.'

},



{

numero:3,

titulo:'Prepara los totopos',

descripcion:

'Corta las tortillas y fríelas o utiliza tortillas tostadas hasta obtener una textura crujiente.',

tiempo:'8 minutos',

consejo:

'El punto ideal es que tengan suficiente firmeza para absorber salsa sin deshacerse completamente.',

porQue:

'El contraste entre crujiente y suave es parte de la identidad del chilaquil.',

mensajeChef:

'La textura también cuenta una historia.',

objetivo:

'Crear la base crujiente del platillo.',

nivelImportancia:'clave',

señalCorrecta:

'Los totopos conservan estructura.',

errorEvitar:

'Dejarlos demasiado suaves antes de servir.'

},



{

numero:4,

titulo:'Integra los chilaquiles',

descripcion:

'Agrega los totopos a la salsa caliente y mezcla rápidamente para conservar parte de la textura.',

tiempo:'3 minutos',

consejo:

'El tiempo en salsa define si quedan crujientes o demasiado suaves.',

porQue:

'El control de humedad es la clave del platillo.',

mensajeChef:

'Un buen cocinero controla incluso los segundos.',

objetivo:

'Conseguir equilibrio entre salsa y tortilla.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué no debemos dejar demasiado tiempo los totopos en la salsa?',

respuestaEsperada:

'Porque pierden textura y pueden volverse demasiado blandos.',

señalCorrecta:

'Hay partes suaves y algunas con ligera firmeza.',

errorEvitar:

'Remojarlos demasiado tiempo.'

},



{

numero:5,

titulo:'Agrega pollo y termina',

descripcion:

'Sirve con pollo deshebrado encima y termina con crema, queso fresco y cebolla si está disponible.',

tiempo:'4 minutos',

consejo:

'Los acompañamientos deben complementar la salsa, no esconderla.',

porQue:

'La presentación forma parte de la experiencia.',

mensajeChef:

'Una receta popular también merece técnica.',

señalCorrecta:

'El plato tiene equilibrio entre salsa, pollo, crema y queso.',

errorEvitar:

'Exceder los acompañamientos y perder el sabor principal.'

}

],



// 💡 INFORMACIÓN EXTRA


tip:

'En la Ciudad de México los chilaquiles son un desayuno clásico de fondas y pueden prepararse con salsa verde o roja, acompañados de huevo, pollo o carne.',


ahorro:

'Es una receta ideal para aprovechar tortillas del día anterior y convertirlas en un desayuno completo.',


errorComun:

'Dejar demasiado tiempo los totopos en salsa y perder la textura característica.',



tags:[

'ciudad_de_mexico',

'cdmx',

'desayuno_mexicano',

'fonda',

'economica',

'tortilla'

],





popularidad:98,



historiaChef:

'Los chilaquiles forman parte de la cultura del desayuno mexicano y en la Ciudad de México encontraron un lugar especial dentro de fondas, mercados y cocinas familiares.',



trucoChef:

'La clave está en encontrar el punto exacto entre salsa y textura: suaves pero no completamente deshechos.',



ocasion:[


'familia',

'diario'

],



sustituciones:[

{

falta:'pollo_deshebrado',

reemplazo:'huevo estrellado o frijoles'

},


{

falta:'queso fresco',

reemplazo:'queso panela'

},


{

falta:'chile guajillo',

reemplazo:'chile seco disponible ajustando picante'

}

],



chefInicio:

'Hoy vamos a preparar uno de los desayunos más representativos de la Ciudad de México: un plato sencillo que convirtió la tortilla en tradición.',



chefFinal:

'Preparaste un desayuno de fonda mexicana aplicando técnicas de salsa, textura y equilibrio.',



señalesExito:{

vista:

'Totopos bañados en salsa roja con pollo, crema y queso.',

olor:

'Aroma de chile cocido, jitomate y maíz tostado.',

textura:

'Tortilla suave con zonas ligeramente firmes.'

},



rescates:[

{

problema:'Los chilaquiles quedaron aguados',

solucion:'Reduce el tiempo dentro de la salsa y usa totopos más firmes.'

},


{

problema:'La salsa quedó ácida',

solucion:'Cocina más tiempo y ajusta con sal.'

}

]


};