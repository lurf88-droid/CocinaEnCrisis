import type { Receta } from '@/types/receta';


export const ENCHILADAS_ROJAS_POLLO: Receta = {


id:'enchiladas-rojas-pollo',


titulo:'Enchiladas rojas con pollo',


imagen: require(
'../../../assets/images/recetas/enchiladas-rojas-pollo.webp'
),


descripcion:

'Platillo tradicional mexicano preparado con tortillas de maíz bañadas en una salsa roja elaborada con chiles secos, rellenas con pollo deshebrado y acompañadas con crema y queso fresco. Una receta que enseña la profundidad de sabor que pueden aportar los chiles mexicanos.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Centro de México',

estadoOrigen:'México',

tradicion:'cocina mexicana tradicional'

},



tecnicaPrincipal:

'limpieza, tostado, hidratación y cocción de chiles secos',



nivelChef:3,


categoria:'comida',
rolCulinario: 'plato_principal',


porciones:4,


tiempoMinutos:55,


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

id:'chile_guajillo',

cantidad:8,

unidad:'pieza'

},


{

id:'chile_ancho',

cantidad:3,

unidad:'pieza'

},


{

id:'cebolla_blanca',

cantidad:0.120,

unidad:'kg'

},


{

id:'ajo',

cantidad:3,

unidad:'pieza'

},


{

id:'oregano_seco',

cantidad:0.005,

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

'trabajo correcto con chiles secos',

'equilibrio entre tostado, picante y aroma',

'elaboración de una salsa mexicana profunda',

'importancia del tratamiento de ingredientes antes de cocinar',

'control de textura en tortillas bañadas'

],



pasos:[


{

numero:1,

titulo:'Limpia y prepara los chiles secos',

descripcion:

'Retira tallos y semillas de los chiles guajillo y ancho. Limpia cualquier residuo antes de continuar.',

tiempo:'10 minutos',

consejo:

'No elimines todas las semillas si buscas conservar un poco más de carácter en la salsa.',

porQue:

'La limpieza permite controlar sabor, textura y nivel de picante.',

mensajeChef:

'Antes de cocinar un ingrediente, primero debemos entenderlo.',

objetivo:

'Preparar correctamente la base de sabor.',

nivelImportancia:

'clave',

chefPregunta:

'¿Por qué debemos limpiar los chiles antes de hidratarlos?',

respuestaEsperada:

'Para retirar impurezas y controlar el resultado final de la salsa.',

señalCorrecta:

'Los chiles están limpios y listos para trabajar.',

errorEvitar:

'Usar chiles con semillas quemadas o residuos.'

},



{

numero:2,

titulo:'Tuesta e hidrata los chiles',

descripcion:

'Calienta ligeramente los chiles en un comal o sartén. Después hidrátalos en agua caliente hasta que estén suaves.',

tiempo:'15 minutos',

consejo:

'El tostado debe ser rápido. Un chile quemado arruina la salsa.',

porQue:

'El calor despierta aromas y desarrolla sabores más profundos.',

mensajeChef:

'El fuego bien controlado crea sabor.',

objetivo:

'Extraer el máximo sabor de los chiles secos.',

nivelImportancia:

'critico',

señalCorrecta:

'Los chiles tienen aroma tostado agradable y textura suave.',

errorEvitar:

'Quemarlos porque aportan amargor.'

},



{

numero:3,

titulo:'Prepara la salsa roja',

descripcion:

'Licúa los chiles hidratados con cebolla, ajo, orégano seco y un poco del agua de hidratación. Después cuela la salsa.',

tiempo:'10 minutos',

consejo:

'Colar la salsa ayuda a obtener una textura más fina.',

porQue:

'Una salsa uniforme mejora la experiencia final del platillo.',

mensajeChef:

'La textura también comunica técnica.',

objetivo:

'Crear una salsa roja profunda y equilibrada.',

nivelImportancia:

'critico',

chefPregunta:

'¿Por qué colamos una salsa de enchiladas?',

respuestaEsperada:

'Para retirar fibras y obtener una textura más profesional.',

señalCorrecta:

'La salsa es uniforme y tiene color rojo intenso.',

errorEvitar:

'Dejar una salsa con textura arenosa.'

},



{

numero:4,

titulo:'Cocina la salsa',

descripcion:

'Calienta aceite y cocina la salsa roja durante unos minutos. Ajusta sal y revisa el equilibrio de sabor.',

tiempo:'10 minutos',

consejo:

'La salsa debe perder el sabor crudo del chile.',

porQue:

'La cocción integra aromas y suaviza sabores intensos.',

mensajeChef:

'Una salsa excelente necesita tiempo.',

objetivo:

'Desarrollar profundidad en la salsa.',

nivelImportancia:

'clave',

señalCorrecta:

'La salsa tiene aroma cocido y textura ligeramente espesa.',

errorEvitar:

'Usarla directamente después de licuar.'

},



{

numero:5,

titulo:'Prepara las tortillas',

descripcion:

'Pasa las tortillas ligeramente por aceite caliente para suavizarlas y después báñalas en la salsa roja.',

tiempo:'8 minutos',

consejo:

'La tortilla debe absorber sabor pero conservar estructura.',

porQue:

'La técnica evita que se rompa durante el montaje.',

mensajeChef:

'La tortilla es la base que une todos los sabores.',

objetivo:

'Crear una tortilla flexible y llena de sabor.',

nivelImportancia:

'clave',

señalCorrecta:

'La tortilla mantiene forma después de bañarla.',

errorEvitar:

'Dejarla demasiado tiempo en la salsa.'

},



{

numero:6,

titulo:'Rellena y monta las enchiladas',

descripcion:

'Agrega pollo deshebrado, enrolla las tortillas y termina con crema y queso fresco.',

tiempo:'7 minutos',

consejo:

'Busca equilibrio entre salsa, relleno y complementos.',

porQue:

'Cada elemento debe aportar sin dominar el plato.',

mensajeChef:

'La cocina tradicional también necesita precisión.',

objetivo:

'Crear un plato completo y equilibrado.',

nivelImportancia:

'critico',

señalCorrecta:

'Las enchiladas tienen color uniforme, relleno y acompañamientos equilibrados.',

errorEvitar:

'Exceso de crema o queso que oculte la salsa.'

}

],



tip:

'Puedes preparar la salsa roja con anticipación. Después de reposar unas horas los sabores suelen integrarse mejor.',



ahorro:

'Los chiles secos rinden mucho porque con poca cantidad puedes crear una salsa para varias porciones.',



errorComun:

'Quemar los chiles durante el tostado y generar una salsa amarga.',



tags:[

'mexicana',

'desayuno_mexicano',

'chiles_secos',

'tradicional'

],



tipoComida:'llenadora',


popularidad:98,



historiaChef:

'Las enchiladas son uno de los platos más representativos de México. Su origen está ligado a la transformación de la tortilla mediante diferentes salsas regionales, creando cientos de variantes a lo largo del país.',



trucoChef:

'Combinar chile guajillo con chile ancho aporta color, aroma y profundidad sin depender solamente del picante.',



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

'Hoy aprenderemos una técnica esencial de la cocina mexicana: transformar chiles secos en una salsa llena de historia.',



chefFinal:

'Has preparado una receta donde la paciencia y el control del fuego construyen el sabor.',



señalesExito:{

vista:

'Enchiladas con salsa roja brillante, crema y queso fresco.',

olor:

'Aroma profundo de chile tostado, ajo y especias.',

textura:

'Tortilla suave, salsa integrada y relleno jugoso.'

},



rescates:[

{

problema:'La salsa quedó amarga',

solucion:

'El chile probablemente se quemó. Equilibra con más salsa fresca y evita recalentar demasiado.'

},

{

problema:'La salsa quedó muy espesa',

solucion:

'Agrega poco a poco agua caliente o caldo hasta ajustar textura.'

}

]


};