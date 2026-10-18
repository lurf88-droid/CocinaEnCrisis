import type { Receta } from '@/types/receta';


export const SOPA_TORTILLA: Receta = {


id:'sopa-tortilla',


titulo:'Sopa de tortilla tradicional',


imagen: require(
'../../../assets/images/recetas/sopa-tortilla.webp'
),


descripcion:
'Una sopa mexicana clásica elaborada con jitomate, chile pasilla y tortilla frita. Una receta que enseña cómo crear un caldo lleno de sabor utilizando ingredientes sencillos.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


tecnicaPrincipal:
'caldo base, licuado y fritura de ingredientes',


nivelChef:2,



categoria:'comida',
rolCulinario: 'entrada',



porciones:4,


tiempoMinutos:45,


dificultad:'media',



ingredientes:[


{
id:'tortilla_maiz',
cantidad:12,
unidad:'pieza'
},


{
id:'jitomate',
cantidad:0.600,
unidad:'kg'
},


{
id:'chile_pasilla',
cantidad:3,
unidad:'pieza'
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
id:'caldo_pollo',
cantidad:1,
unidad:'litro'
},


{
id:'queso_panela',
cantidad:0.200,
unidad:'kg'
},


{
id:'aguacate',
cantidad:2,
unidad:'pieza'
},


{
id:'crema',
cantidad:0.200,
unidad:'litro'
},


{
id:'aceite_vegetal',
cantidad:0.050,
unidad:'litro'
},


{
id:'sal',
cantidad:0.008,
unidad:'kg'
}


],



aprendizajes:[

'construcción de caldos',

'manejo de chiles secos',

'equilibrio de texturas',

'fritura controlada',

'montaje tradicional'

],



pasos:[


{

numero:1,

titulo:'Prepara los ingredientes',

descripcion:
'Corta las tortillas en tiras, limpia los chiles pasilla y prepara los vegetales antes de comenzar.',

tiempo:'10 minutos',

consejo:
'Una sopa bien hecha empieza con una buena organización.',

porQue:
'Tener todo listo permite controlar mejor cada etapa.',

mensajeChef:
'La tranquilidad en cocina nace de la preparación.',

señalCorrecta:
'Todos los ingredientes están listos antes del fuego.',

errorEvitar:
'Empezar a cocinar sin organizar ingredientes.'

},



{

numero:2,

titulo:'Construye la base del caldo',

descripcion:
'Asa ligeramente jitomate, cebolla, ajo y chile pasilla. Después licúa con caldo hasta obtener una mezcla uniforme.',

tiempo:'15 minutos',

consejo:
'El chile debe aportar aroma, no amargor.',

porQue:
'El asado desarrolla sabores más profundos.',

mensajeChef:
'El fuego transforma ingredientes simples en grandes sabores.',

señalCorrecta:
'La mezcla tiene aroma tostado y color intenso.',

errorEvitar:
'Quemar los chiles secos.'

},



{

numero:3,

titulo:'Cocina y desarrolla el caldo',

descripcion:
'Cuela la mezcla y cocina a fuego medio para integrar sabores y obtener una sopa equilibrada.',

tiempo:'15 minutos',

consejo:
'Una sopa necesita tiempo para que los sabores se unan.',

porQue:
'La cocción permite eliminar sabores crudos y concentrar aromas.',

mensajeChef:
'La paciencia también se sirve en un plato.',

señalCorrecta:
'El caldo tiene color rojo uniforme y aroma profundo.',

errorEvitar:
'Saltar la cocción después de licuar.'

},



{

numero:4,

titulo:'Prepara la textura crujiente',

descripcion:
'Fríe las tiras de tortilla hasta que estén doradas y crujientes.',

tiempo:'5 minutos',

consejo:
'La tortilla debe quedar dorada, no quemada.',

porQue:
'El contraste entre caldo suave y tortilla crujiente hace especial la receta.',

mensajeChef:
'Una gran receta piensa en todas las texturas.',

señalCorrecta:
'Las tiras mantienen estructura y tienen color dorado.',

errorEvitar:
'Freír con aceite demasiado frío.'

},



{

numero:5,

titulo:'Monta la sopa',

descripcion:
'Sirve el caldo caliente y agrega tortilla, queso, crema, aguacate y chile al gusto.',

tiempo:'5 minutos',

consejo:
'Los acompañamientos crean la experiencia final.',

porQue:
'Cada elemento aporta una dimensión diferente al plato.',

mensajeChef:
'El montaje también es parte de cocinar.',

señalCorrecta:
'El plato tiene contraste de colores y texturas.',

errorEvitar:
'Agregar demasiados ingredientes y esconder el sabor del caldo.'

}

],



historiaChef:
'La sopa de tortilla es una de las preparaciones más representativas de la cocina mexicana. Su combinación de tortilla, chile y caldo refleja la capacidad de transformar ingredientes básicos en un plato completo.',



trucoChef:
'Agregar un poco del aceite donde se frieron las tortillas puede aportar sabor al caldo.',



tip:
'El caldo base puede aprovecharse para otras sopas o preparaciones.',



sustituciones:[


{
falta:'chile pasilla',

reemplazo:'chile ancho o mezcla de chiles secos'
},


{
falta:'queso panela',

reemplazo:'queso fresco o queso que tengas disponible'
}

],



chefInicio:
'Hoy aprenderás una de las bases más importantes de la cocina: construir un caldo con profundidad.',



chefFinal:
'Excelente trabajo. Ahora entiendes que una sopa sencilla puede tener técnica, historia y mucha personalidad.',



erroresComunes:[

'Quemar los chiles.',

'No cocinar el caldo después de licuar.',

'Perder la textura crujiente de la tortilla.'

],



señalesExito:{


vista:
'Caldo rojo intenso con tortillas doradas y acompañamientos equilibrados.',


olor:
'Aroma de chile tostado, jitomate y tortilla recién frita.',


textura:
'Contraste entre caldo suave y elementos crujientes.'


},



rescates:[


{
problema:'El caldo quedó ácido',

solucion:'Cocina más tiempo y ajusta el equilibrio de sabores.'
},


{
problema:'La tortilla perdió textura',

solucion:'Agrega nuevas tiras crujientes justo antes de servir.'
}

],



tags:[

'mexicana',

'sopa',

'caldo',

'tortilla',

'tradicional'

],



popularidad:97,


};