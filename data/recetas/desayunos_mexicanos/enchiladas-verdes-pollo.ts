import type { Receta } from '@/types/receta';


export const ENCHILADAS_VERDES_POLLO: Receta = {


id:'enchiladas-verdes-pollo',


titulo:'Enchiladas verdes con pollo',


imagen: require(
'../../../assets/images/recetas/enchiladas-verdes-pollo.webp'
),


descripcion:

'Platillo tradicional mexicano elaborado con tortillas de maíz bañadas en salsa verde, rellenas con pollo deshebrado y acompañadas con crema y queso fresco. Una receta que representa la importancia de las salsas dentro de la cocina mexicana.',


// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Centro de México',

estadoOrigen:'Ciudad de México',

tradicion:'cocina mexicana tradicional'

},


tecnicaPrincipal:

'elaboración de salsa verde, fritura ligera y montaje de tortilla',



nivelChef:3,


categoria:'comida',
rolCulinario: 'plato_principal',


porciones:4,


tiempoMinutos:50,


dificultad:'media',



ingredientes:[


{

id:'tortilla_maiz',

cantidad:12,

unidad:'pieza'

},


{

id:'pollo_deshebrado',

cantidad:0.500,

unidad:'kg'

},


{

id:'tomate_verde',

cantidad:0.800,

unidad:'kg'

},


{

id:'chile_serrano',

cantidad:5,

unidad:'pieza'

},


{

id:'cebolla_blanca',

cantidad:0.120,

unidad:'kg'

},


{

id:'ajo',

cantidad:2,

unidad:'pieza'

},


{

id:'cilantro',

cantidad:0.050,

unidad:'kg'

},


{

id:'queso_fresco',

cantidad:0.200,

unidad:'kg'

},


{

id:'crema',

cantidad:0.200,

unidad:'litro'

},


{

id:'aceite_vegetal',

cantidad:0.060,

unidad:'litro'

},


{

id:'sal',

cantidad:0.008,

unidad:'kg'

}

],



aprendizajes:[

'preparación de una salsa verde tradicional',

'equilibrio entre acidez, picante y sal',

'técnica de fritura ligera de tortilla',

'uso de salsas como elemento principal',

'orden y montaje de un plato mexicano'

],



pasos:[


{

numero:1,

titulo:'Prepara los ingredientes de la salsa',

descripcion:

'Lava los tomates verdes, chiles, cebolla, ajo y cilantro. Organiza todos los ingredientes antes de comenzar.',

tiempo:'5 minutos',

consejo:

'La organización permite controlar mejor los tiempos de cocina.',

porQue:

'Una buena preparación previa evita errores durante la cocción.',

mensajeChef:

'La cocina profesional empieza con orden.',

objetivo:

'Preparar correctamente la base de sabor.',

nivelImportancia:

'normal',

señalCorrecta:

'Los ingredientes están limpios y listos.',

errorEvitar:

'Empezar sin tener todos los ingredientes preparados.'

},



{

numero:2,

titulo:'Cocina la salsa verde',

descripcion:

'Hierve o asa los tomates verdes junto con los chiles, cebolla y ajo. Después licúa con cilantro hasta obtener una salsa uniforme.',

tiempo:'15 minutos',

consejo:

'Asar los ingredientes aporta notas más profundas de sabor.',

porQue:

'La cocción transforma la acidez del tomate verde y desarrolla aromas.',

mensajeChef:

'Una gran salsa define la personalidad del plato.',

objetivo:

'Crear una salsa verde equilibrada.',

nivelImportancia:

'critico',

chefPregunta:

'¿Por qué no usamos directamente el tomate verde crudo?',

respuestaEsperada:

'Porque la cocción suaviza la acidez y desarrolla sabor.',

señalCorrecta:

'La salsa tiene color verde vivo y aroma fresco.',

errorEvitar:

'Dejar una salsa con sabor demasiado ácido o crudo.'

},



{

numero:3,

titulo:'Cocina y ajusta la salsa',

descripcion:

'Calienta un poco de aceite y cocina la salsa verde. Ajusta la sal y revisa el nivel de picante.',

tiempo:'10 minutos',

consejo:

'La salsa debe tener equilibrio, no solamente picor.',

porQue:

'La cocción integra los sabores y mejora la textura.',

mensajeChef:

'El equilibrio separa una salsa común de una gran salsa.',

objetivo:

'Conseguir una salsa lista para bañar las tortillas.',

nivelImportancia:

'clave',

señalCorrecta:

'La salsa tiene aroma cocido y textura ligeramente espesa.',

errorEvitar:

'Usar la salsa inmediatamente después de licuar.'

},



{

numero:4,

titulo:'Prepara las tortillas',

descripcion:

'Pasa ligeramente las tortillas por aceite caliente para suavizarlas y evitar que se rompan al enrollarlas.',

tiempo:'8 minutos',

consejo:

'No frías demasiado; solo buscamos flexibilidad.',

porQue:

'La tortilla debe poder absorber salsa sin romperse.',

mensajeChef:

'La técnica está en controlar, no en exagerar.',

objetivo:

'Mantener tortillas resistentes y manejables.',

nivelImportancia:

'clave',

señalCorrecta:

'La tortilla está flexible pero conserva estructura.',

errorEvitar:

'Usar tortillas frías porque se rompen.'

},



{

numero:5,

titulo:'Rellena las enchiladas',

descripcion:

'Coloca pollo deshebrado dentro de cada tortilla, enrolla y acomoda en el plato.',

tiempo:'7 minutos',

consejo:

'Distribuye el relleno para que todas las porciones tengan equilibrio.',

porQue:

'El relleno debe complementar la salsa, no competir con ella.',

mensajeChef:

'Cada elemento tiene una función dentro del plato.',

objetivo:

'Formar enchiladas uniformes.',

nivelImportancia:

'clave',

señalCorrecta:

'Las enchiladas mantienen forma y tienen relleno equilibrado.',

errorEvitar:

'Poner demasiado relleno y romper la tortilla.'

},



{

numero:6,

titulo:'Baña y monta el plato',

descripcion:

'Cubre las enchiladas con salsa verde, agrega crema, queso fresco y un poco de cebolla si deseas.',

tiempo:'5 minutos',

consejo:

'El montaje debe mostrar colores y texturas diferentes.',

porQue:

'La presentación forma parte de la experiencia culinaria.',

mensajeChef:

'Una receta tradicional también merece cuidado profesional.',

objetivo:

'Crear un plato completo y visualmente equilibrado.',

nivelImportancia:

'critico',

señalCorrecta:

'La salsa cubre las enchiladas y los complementos están equilibrados.',

errorEvitar:

'Cubrir completamente con crema y perder el sabor de la salsa.'

}

],



tip:

'Puedes cambiar el pollo por queso, huevo o verduras para crear diferentes versiones tradicionales.',



ahorro:

'Es una receta de gran rendimiento porque utiliza tortilla y salsa como base principal.',



errorComun:

'No cocinar correctamente la salsa verde y obtener un sabor ácido o poco desarrollado.',



tags:[

'mexicana',

'desayuno_mexicano',

'salsa_verde',

'tradicional'

],



tipoComida:'llenadora',


popularidad:98,



historiaChef:

'Las enchiladas son uno de los platillos más representativos de México. Su esencia está en transformar una tortilla mediante una salsa llena de identidad regional.',



trucoChef:

'Dejar reposar la salsa unos minutos antes del montaje permite que los sabores se integren mejor.',



momento:

'diario',



ocasion:[

'diario',

'familia',

'especial'

],



sustituciones:[

{

falta:'pollo_deshebrado',

reemplazo:'queso, huevo o verduras cocidas'

}

],



chefInicio:

'Hoy aprenderemos una de las técnicas más importantes de México: convertir una tortilla en un plato completo mediante una gran salsa.',



chefFinal:

'Has preparado una receta donde la técnica transforma ingredientes sencillos en una preparación con identidad.',



señalesExito:{

vista:

'Enchiladas cubiertas con salsa verde, crema y queso fresco.',

olor:

'Aroma fresco de tomate verde, cilantro y chile.',

textura:

'Tortilla suave, relleno jugoso y salsa equilibrada.'

},



rescates:[

{

problema:'La salsa quedó muy ácida',

solucion:

'Cocina más tiempo la salsa y ajusta sal para equilibrar.'

},

{

problema:'Las tortillas se rompieron',

solucion:

'Calienta ligeramente las tortillas antes de rellenarlas.'

}

]


};