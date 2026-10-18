import type { Receta } from '@/types/receta';


export const MEMELAS_POBLANAS: Receta = {


id:'memelas-poblanas',


titulo:'Memelas poblanas con frijol y queso',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/puebla/memelas-poblanas.webp'
),


descripcion:

'Antojito mexicano elaborado con masa de maíz formada en discos gruesos y cocida sobre comal, acompañada con frijoles, salsa y queso fresco. Una preparación sencilla, económica y muy ligada a la cocina cotidiana del centro de México.',


// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Puebla',

estadoOrigen:'Puebla',

ciudadOrigen:'Puebla',

tradicion:'cocina poblana de maíz y antojitos de comal'

},


tecnicaPrincipal:

'formado de masa, cocción en comal y montaje de ingredientes',


nivelChef:2,


categoria:'desayuno',
rolCulinario: 'plato_principal',

porciones:4,


tiempoMinutos:35,


dificultad:'facil',


// 🧺 INGREDIENTES

ingredientes:[


{

id:'masa_maiz',

cantidad:0.600,

unidad:'kg'

},


{

id:'frijol_bayo',

cantidad:0.300,

unidad:'kg'

},


{

id:'queso_fresco',

cantidad:0.150,

unidad:'kg'

},


{

id:'salsa_roja',

cantidad:0.150,

unidad:'kg'

},


{

id:'cebolla_blanca',

cantidad:0.080,

unidad:'kg'

},


{

id:'sal',

cantidad:0.005,

unidad:'kg'

}


],


// 🎓 APRENDIZAJES

aprendizajes:[

'control de humedad en masa de maíz',

'formado manual de antojitos',

'cocción correcta sobre comal',

'control del grosor de una preparación de masa',

'equilibrio entre masa, frijol, salsa y queso'

],


// 👨‍🍳 PASOS

pasos:[


{

numero:1,

titulo:'Prepara los frijoles',

descripcion:

'Calienta los frijoles y machácalos hasta conseguir una consistencia cremosa y suficientemente espesa para permanecer sobre la memela.',

tiempo:'7 minutos',

consejo:

'Evita dejarlos demasiado líquidos porque pueden humedecer excesivamente la masa.',

porQue:

'Una textura espesa permite distribuir los frijoles sin perder la estructura del antojito.',

mensajeChef:

'La consistencia de una preparación también determina cómo funciona dentro del plato.',

objetivo:

'Obtener frijoles cremosos y fáciles de distribuir.',

nivelImportancia:'clave',

señalCorrecta:

'Los frijoles se extienden fácilmente pero no escurren.',

errorEvitar:

'Utilizar frijoles demasiado líquidos.'

},


{

numero:2,

titulo:'Prepara la masa',

descripcion:

'Amasa la masa de maíz hasta que esté suave y flexible. Si está demasiado seca, incorpora una pequeña cantidad de agua y vuelve a amasar.',

tiempo:'5 minutos',

consejo:

'Presiona una pequeña porción entre los dedos; si los bordes se agrietan demasiado, falta humedad.',

porQue:

'La hidratación correcta evita que la memela se rompa durante el formado y la cocción.',

mensajeChef:

'Aprender a sentir una masa con las manos es una habilidad fundamental del cocinero.',

objetivo:

'Conseguir una masa suave, hidratada y moldeable.',

nivelImportancia:'critico',

chefPregunta:

'¿Qué nos indican las grietas excesivas en los bordes de la masa?',

respuestaEsperada:

'Que la masa está demasiado seca y necesita un poco más de humedad.',

señalCorrecta:

'La masa mantiene su forma sin romperse.',

errorEvitar:

'Agregar demasiada agua de una sola vez.'

},


{

numero:3,

titulo:'Forma las memelas',

descripcion:

'Divide la masa en porciones similares, forma bolas y aplánalas con las manos hasta obtener discos ovalados o redondos ligeramente más gruesos que una tortilla.',

tiempo:'8 minutos',

consejo:

'Busca un grosor uniforme para que todas las piezas se cocinen de manera similar.',

porQue:

'Una memela necesita suficiente grosor para mantener su estructura y soportar los ingredientes que colocaremos encima.',

mensajeChef:

'Forma, tamaño y grosor también forman parte de una receta.',

objetivo:

'Crear bases uniformes y resistentes.',

nivelImportancia:'clave',

señalCorrecta:

'Las piezas tienen grosor similar y bordes sin grandes grietas.',

errorEvitar:

'Hacerlas tan delgadas como una tortilla.'

},


{

numero:4,

titulo:'Cocina sobre el comal',

descripcion:

'Coloca las memelas sobre un comal caliente y cocínalas por ambos lados hasta que la masa esté cocida y aparezcan pequeñas zonas doradas.',

tiempo:'8 minutos',

consejo:

'Mantén una temperatura media para permitir que el interior se cocine antes de quemar la superficie.',

porQue:

'Al ser más gruesas que una tortilla necesitan una cocción controlada para que el calor llegue al centro.',

mensajeChef:

'Más calor no siempre significa cocinar mejor.',

objetivo:

'Cocinar completamente la masa conservando una superficie ligeramente dorada.',

nivelImportancia:'critico',

señalCorrecta:

'La superficie presenta zonas doradas y la masa ya no se siente cruda en el centro.',

errorEvitar:

'Usar un comal excesivamente caliente y quemar el exterior antes de cocinar el interior.'

},


{

numero:5,

titulo:'Agrega frijol, salsa y queso',

descripcion:

'Extiende una capa de frijoles sobre cada memela caliente. Añade salsa roja, queso fresco desmoronado y una pequeña cantidad de cebolla.',

tiempo:'5 minutos',

consejo:

'No cubras completamente la masa; todos los ingredientes deben mantener proporción.',

porQue:

'La sencillez del platillo depende del equilibrio entre maíz, frijol, salsa y queso.',

mensajeChef:

'Agregar más ingredientes no siempre mejora un plato; muchas veces lo mejora encontrar la proporción correcta.',

objetivo:

'Construir un antojito equilibrado en sabor y textura.',

nivelImportancia:'clave',

señalCorrecta:

'Se distinguen claramente la masa, los frijoles, la salsa y el queso.',

errorEvitar:

'Sobrecargar la memela hasta ocultar completamente la base.'

},


{

numero:6,

titulo:'Sirve inmediatamente',

descripcion:

'Sirve las memelas mientras la masa permanece caliente y conserva su mejor textura.',

tiempo:'2 minutos',

consejo:

'Prepara los acompañamientos antes de terminar la cocción para poder servirlas inmediatamente.',

porQue:

'La masa recién salida del comal conserva mejor aroma, humedad y textura.',

mensajeChef:

'En los antojitos de comal, servir a tiempo también forma parte de la técnica.',

objetivo:

'Disfrutar la memela en su mejor punto.',

nivelImportancia:'normal',

señalCorrecta:

'La memela llega caliente y conserva una base firme pero suave.',

errorEvitar:

'Dejarla reposar demasiado antes de servir.'

}

],


// 💡 INFORMACIÓN EXTRA

tip:

'Trabaja con las manos ligeramente húmedas si la masa comienza a pegarse durante el formado.',


ahorro:

'Puedes aprovechar frijoles cocidos del día anterior para preparar un desayuno completo con muy pocos ingredientes adicionales.',


errorComun:

'Hacer las memelas demasiado delgadas o cocinar el comal a una temperatura excesiva.',


tags:[

'puebla',

'mexicana',

'desayuno_mexicano',

'antojito_mexicano',

'maiz',

'frijol',

'economica'

],


tipoComida:'barata',


popularidad:86,


historiaChef:

'Las preparaciones de masa cocidas sobre comal forman parte de una larga tradición culinaria mexicana. En Puebla, los antojitos de maíz siguen presentes en mercados, cocinas familiares y puestos tradicionales.',


trucoChef:

'Forma todas las porciones antes de comenzar la cocción; así podrás concentrarte únicamente en controlar el comal.',


momento:'diario',


ocasion:[

'diario',

'familia'

],


sustituciones:[

{

falta:'frijol_bayo',

reemplazo:'frijol negro machacado'

},

{

falta:'queso_fresco',

reemplazo:'queso panela desmoronado'

},

{

falta:'salsa_roja',

reemplazo:'salsa verde disponible'

}

],


chefInicio:

'Hoy trabajaremos uno de los pilares de la cocina mexicana: aprender a controlar una preparación de masa directamente sobre el comal.',


chefFinal:

'Con pocos ingredientes aprendiste a controlar hidratación, grosor y temperatura. Esa técnica puede servirte para muchas otras preparaciones mexicanas.',


señalesExito:{

vista:

'Base de maíz ligeramente dorada cubierta con frijoles, salsa roja, queso fresco y cebolla.',

olor:

'Aroma de maíz recién cocido, frijoles calientes y salsa.',

textura:

'Masa firme por fuera y suave en el interior, con frijoles cremosos y queso desmoronado.'

},


rescates:[

{

problema:'La masa se agrieta al formar',

solucion:

'Agrega muy poca agua y vuelve a amasar hasta recuperar flexibilidad.'

},

{

problema:'El exterior se quema pero el centro sigue crudo',

solucion:

'Reduce la temperatura del comal y prolonga ligeramente la cocción.'

},

{

problema:'Los frijoles se escurren de la memela',

solucion:

'Cocínalos unos minutos más para reducir humedad antes de utilizarlos.'

}

]


};