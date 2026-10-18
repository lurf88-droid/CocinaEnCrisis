import type { Receta } from '@/types/receta';


export const CAFE_LECHERO_VERACRUZANO: Receta = {


id:'cafe-lechero-veracruzano',


titulo:'Café lechero veracruzano',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/veracruz/cafe-lechero-veracruzano.webp'
),


descripcion:

'Bebida tradicional del Puerto de Veracruz preparada con café fuerte y leche caliente. Representa la cultura cafetera veracruzana y la tradición de desayunar en cafeterías del puerto.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Puerto de Veracruz',

estadoOrigen:'Veracruz',

tradicion:'cultura cafetera veracruzana y tradición de cafeterías del puerto'

},


tecnicaPrincipal:

'extracción de café fuerte y mezcla con leche caliente mediante vertido tradicional',



// 🎯 CLASIFICACIÓN

categoria:'desayuno',
rolCulinario: 'bebida',




porciones:2,


tiempoMinutos:10,


dificultad:'facil',


nivelChef:1,



// 🧺 INGREDIENTES


ingredientes:[


{

id:'cafe_molido',

cantidad:0.030,

unidad:'kg'

},


{

id:'leche_entera',

cantidad:0.300,

unidad:'litro'

},


{

id:'azucar',

cantidad:0.010,

unidad:'kg'

}


],



// 🎓 FORMACIÓN CHEF LUNA


aprendizajes:[

'importancia de una buena extracción de café',

'equilibrio entre intensidad y suavidad',

'control de temperatura de la leche',

'identidad gastronómica del Puerto de Veracruz'

],



// 👨‍🍳 PASOS


pasos:[


{

numero:1,

titulo:'Prepara un café concentrado',

descripcion:

'Realiza una extracción de café fuerte utilizando café molido. La bebida debe tener aroma intenso y sabor marcado.',

tiempo:'5 minutos',

consejo:

'El café debe ser más concentrado que un café americano porque después se mezclará con leche.',

porQue:

'Una base fuerte permite que el sabor del café permanezca después de agregar leche.',

mensajeChef:

'Una gran bebida comienza con respetar su ingrediente principal.',

objetivo:

'Crear una base aromática y con intensidad.',

nivelImportancia:'clave',

señalCorrecta:

'El café tiene aroma tostado y color profundo.',

errorEvitar:

'Preparar un café demasiado ligero porque desaparecerá al mezclarlo.'


},



{

numero:2,

titulo:'Calienta la leche correctamente',

descripcion:

'Calienta la leche hasta que esté caliente pero sin llegar a hervir.',

tiempo:'3 minutos',

consejo:

'La leche debe conservar dulzor natural y textura agradable.',

porQue:

'Una temperatura excesiva puede cambiar el sabor y quemar la leche.',

mensajeChef:

'Controlar la temperatura es una técnica fundamental.',

objetivo:

'Conseguir leche caliente y equilibrada.',

nivelImportancia:'clave',

señalCorrecta:

'La leche tiene vapor ligero pero no hierve.',

errorEvitar:

'Hervir demasiado la leche porque pierde calidad.'


},



{

numero:3,

titulo:'Combina café y leche',

descripcion:

'Agrega el café concentrado y después incorpora la leche caliente hasta lograr el equilibrio tradicional.',

tiempo:'2 minutos',

consejo:

'La proporción puede ajustarse según la intensidad deseada.',

porQue:

'El café lechero busca equilibrio entre fuerza del café y suavidad de la leche.',

mensajeChef:

'La sencillez también necesita precisión.',

objetivo:

'Crear una bebida balanceada.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué el café debe ser fuerte antes de agregar leche?',

respuestaEsperada:

'Porque la leche suaviza la intensidad y necesitamos conservar el sabor del café.',

señalCorrecta:

'El café mantiene presencia sin ser demasiado fuerte.',

errorEvitar:

'Usar demasiado café o demasiada leche sin equilibrio.'


},



{

numero:4,

titulo:'Endulza y sirve',

descripcion:

'Agrega azúcar al gusto y sirve caliente inmediatamente.',

tiempo:'1 minuto',

consejo:

'Prueba antes de agregar demasiada azúcar para respetar el sabor del café.',

porQue:

'El azúcar debe complementar, no cubrir el aroma del café.',

mensajeChef:

'Una bebida tradicional se disfruta por su equilibrio.',

señalCorrecta:

'La bebida está caliente, aromática y balanceada.',

errorEvitar:

'Exceso de azúcar que oculte el café.'

}

],



// 💡 INFORMACIÓN EXTRA


tip:

'En Veracruz tradicionalmente se sirve con un espectáculo de altura al mezclar café y leche, creando espuma y una experiencia característica.',


ahorro:

'Preparar café en casa puede ser más económico que comprar bebidas preparadas y permite controlar la calidad de los ingredientes.',


errorComun:

'Usar café demasiado débil o hervir la leche perdiendo textura y sabor.',



tags:[

'veracruz',

'puerto_de_veracruz',

'cafe',

'desayuno_mexicano',

'bebida_tradicional'

],






popularidad:95,



historiaChef:

'El café lechero es uno de los símbolos gastronómicos del Puerto de Veracruz. Su presencia en cafeterías tradicionales convirtió una bebida sencilla en parte de la identidad cultural del estado.',



trucoChef:

'La clave está en lograr que el café tenga suficiente carácter para mantenerse presente después de mezclarlo con leche.',







sustituciones:[

{

falta:'cafe_molido',

reemplazo:'cafe soluble de buena calidad'

},


{

falta:'leche_entera',

reemplazo:'leche evaporada mezclada con agua'

}

],



chefInicio:

'Hoy no solo prepararemos café; conoceremos una tradición que forma parte de la historia del Puerto de Veracruz.',



chefFinal:

'Preparaste una bebida sencilla pero llena de identidad mexicana.',



señalesExito:{

vista:

'Color café claro con textura cremosa.',

olor:

'Aroma intenso de café tostado.',

textura:

'Suave, caliente y equilibrada.'

},



rescates:[

{

problema:'El café perdió intensidad',

solucion:'Usa una extracción más concentrada o aumenta ligeramente la cantidad de café.'

},


{

problema:'La leche sabe quemada',

solucion:'Reduce la temperatura y evita que llegue a hervir.'

}

]


};