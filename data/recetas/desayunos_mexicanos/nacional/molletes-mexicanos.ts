import type { Receta } from '@/types/receta';


export const MOLLETES_MEXICANOS: Receta = {


id:'molletes-mexicanos',


titulo:'Molletes mexicanos',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/nacional/molletes-mexicanos.webp'
),


descripcion:

'Desayuno clásico mexicano preparado con bolillo, frijoles refritos y queso gratinado. Una receta sencilla que demuestra cómo ingredientes cotidianos pueden convertirse en un plato completo mediante técnica y equilibrio.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Centro de México',

estadoOrigen:'Ciudad de México',

tradicion:'desayuno urbano mexicano'

},


tecnicaPrincipal:

'gratinar, untar y equilibrio de texturas',



nivelChef:2,


categoria:'desayuno',


porciones:4,


tiempoMinutos:25,


dificultad:'facil',



ingredientes:[


{

id:'bolillo',

cantidad:4,

unidad:'pieza'

},


{

id:'frijol_bayo',

cantidad:0.400,

unidad:'kg'

},


{

id:'queso_oaxaca',

cantidad:0.200,

unidad:'kg'

},


{

id:'jitomate',

cantidad:0.300,

unidad:'kg'

},


{

id:'cebolla_blanca',

cantidad:0.100,

unidad:'kg'

},


{

id:'chile_serrano',

cantidad:2,

unidad:'pieza'

},


{

id:'cilantro',

cantidad:0.030,

unidad:'kg'

},


{

id:'sal',

cantidad:0.005,

unidad:'kg'

}

],



aprendizajes:[

'uso del gratinado como técnica culinaria',

'equilibrio entre pan, proteína vegetal y lácteos',

'transformación de ingredientes básicos',

'importancia de las texturas en un desayuno',

'creación de acompañamientos frescos'

],



pasos:[


{

numero:1,

titulo:'Prepara los frijoles',

descripcion:

'Calienta los frijoles y ajusta su textura hasta obtener una preparación cremosa que pueda untarse fácilmente sobre el bolillo.',

tiempo:'8 minutos',

consejo:

'Los frijoles deben quedar suaves pero con sabor concentrado.',

porQue:

'Funcionan como la base del mollete y aportan cuerpo al platillo.',

mensajeChef:

'Los ingredientes sencillos pueden convertirse en grandes bases culinarias.',

objetivo:

'Crear una base cremosa y equilibrada.',

nivelImportancia:

'clave',

señalCorrecta:

'Los frijoles tienen textura suave y fácil de untar.',

errorEvitar:

'Dejarlos demasiado secos porque dificultan el montaje.'

},



{

numero:2,

titulo:'Prepara el bolillo',

descripcion:

'Corta los bolillos por la mitad y retira ligeramente parte del exceso de migajón si es necesario.',

tiempo:'5 minutos',

consejo:

'Conservar parte de la miga ayuda a mantener una textura agradable.',

porQue:

'El pan debe soportar los ingredientes sin perder estructura.',

mensajeChef:

'La técnica está en respetar cada elemento del plato.',

objetivo:

'Crear una base firme para el gratinado.',

nivelImportancia:

'normal',

señalCorrecta:

'El bolillo mantiene forma y tiene superficie lista para rellenar.',

errorEvitar:

'Dejar un pan demasiado húmedo.'

},



{

numero:3,

titulo:'Monta los molletes',

descripcion:

'Unta una capa de frijoles sobre cada mitad de bolillo y agrega queso Oaxaca encima.',

tiempo:'5 minutos',

consejo:

'Distribuye bien los ingredientes para que cada parte tenga sabor.',

porQue:

'El equilibrio de proporciones mejora la experiencia del plato.',

mensajeChef:

'La cocina también es construir armonía.',

objetivo:

'Preparar un mollete equilibrado antes del gratinado.',

nivelImportancia:

'clave',

señalCorrecta:

'El frijol cubre el pan y el queso está bien distribuido.',

errorEvitar:

'Poner demasiado queso y perder el equilibrio.'

},



{

numero:4,

titulo:'Gratina el queso',

descripcion:

'Lleva los molletes al horno o sartén tapado hasta que el queso se funda y tome una textura cremosa.',

tiempo:'7 minutos',

consejo:

'Busca queso fundido, no quemado.',

porQue:

'El gratinado desarrolla aroma y transforma la textura del queso.',

mensajeChef:

'El fuego no solo cocina: transforma.',

objetivo:

'Lograr un gratinado correcto.',

nivelImportancia:

'critico',

chefPregunta:

'¿Por qué no debemos quemar el queso buscando más color?',

respuestaEsperada:

'Porque perderíamos sabor y textura cremosa.',

señalCorrecta:

'El queso está fundido y ligeramente dorado.',

errorEvitar:

'Usar temperatura demasiado alta.'

},



{

numero:5,

titulo:'Prepara y agrega el pico de gallo',

descripcion:

'Corta jitomate, cebolla y chile serrano. Mezcla con cilantro y sal para acompañar los molletes.',

tiempo:'5 minutos',

consejo:

'El acompañamiento fresco equilibra la parte cremosa del platillo.',

porQue:

'Los contrastes hacen que una preparación sencilla sea más completa.',

mensajeChef:

'El equilibrio es una de las mayores técnicas culinarias.',

objetivo:

'Agregar frescura y contraste al plato.',

nivelImportancia:

'clave',

señalCorrecta:

'El acompañamiento tiene colores vivos y sabor fresco.',

errorEvitar:

'Prepararlo con demasiada anticipación porque pierde frescura.'

}

],



tip:

'Puedes agregar chorizo, aguacate o diferentes salsas para crear nuevas versiones sin perder la esencia del mollete tradicional.',



ahorro:

'Es una receta de alto rendimiento porque utiliza pan, frijoles y queso como ingredientes principales.',



errorComun:

'No equilibrar la cantidad de frijol y queso, haciendo que un sabor domine demasiado.',



tags:[

'mexicana',

'desayuno_mexicano',

'tradicional',

'urbana'

],



tipoComida:'llenadora',


popularidad:95,



historiaChef:

'Los molletes forman parte de los desayunos urbanos mexicanos. Su combinación de pan, frijoles y queso representa la creatividad de adaptar ingredientes sencillos en preparaciones completas.',



trucoChef:

'Usar frijoles preparados del día anterior puede mejorar el sabor porque ya tienen sabores integrados.',



momento:

'diario',



ocasion:[

'diario',

'familia'

],



sustituciones:[

{

falta:'queso_oaxaca',

reemplazo:'queso manchego u otro queso que funda correctamente'

},

{

falta:'bolillo',

reemplazo:'pan similar con buena estructura'

}

],



chefInicio:

'Hoy aprenderemos cómo una combinación sencilla puede convertirse en un desayuno mexicano lleno de técnica y sabor.',



chefFinal:

'Has preparado un clásico mexicano donde cada ingrediente cumple una función dentro del plato.',



señalesExito:{

vista:

'Bolillo dorado con frijoles, queso fundido y acompañamiento fresco.',

olor:

'Aroma de pan tostado, frijoles y queso gratinado.',

textura:

'Pan firme, frijol cremoso y queso fundido.'

},



rescates:[

{

problema:'El mollete quedó seco',

solucion:

'Agrega una capa más uniforme de frijol antes del gratinado.'

},

{

problema:'El queso no funde correctamente',

solucion:

'Usa menor temperatura y más tiempo de calentamiento.'

}

]


};