import type { Receta } from '@/types/receta';


export const TAMALES_MOLE: Receta = {


id:'tamales-mole',


titulo:'Tamales de mole con pollo',


imagen: require(
'../../../assets/images/recetas/tamales-mole.webp'
),


descripcion:
'Un clásico mexicano elaborado con masa de maíz, mole y pollo envuelto en hoja de maíz. Una receta que enseña el equilibrio entre textura, humedad y cocción al vapor.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


tecnicaPrincipal:
'preparación de masa y cocción al vapor',


nivelChef:3,



categoria:'comida',
rolCulinario: 'plato_principal',



porciones:12,


tiempoMinutos:150,


dificultad:'media',



ingredientes:[


{
id:'masa_maiz',
cantidad:1,
unidad:'kg'
},


{
id:'manteca_cerdo',
cantidad:0.300,
unidad:'kg'
},


{
id:'mole_poblano',
cantidad:0.500,
unidad:'kg'
},


{
id:'pollo_deshebrado',
cantidad:0.700,
unidad:'kg'
},


{
id:'hoja_maiz',
cantidad:30,
unidad:'pieza'
},


{
id:'caldo_pollo',
cantidad:0.500,
unidad:'litro'
},


{
id:'sal',
cantidad:0.015,
unidad:'kg'
}


],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'trabajo de masas',

'equilibrio de humedad',

'cocción al vapor',

'uso tradicional de hojas',

'preparaciones de gran volumen'

],



pasos:[


{

numero:1,

titulo:'Prepara las hojas de maíz',

descripcion:
'Coloca las hojas de maíz en agua caliente hasta que estén suaves y flexibles. Escúrrelas antes de utilizarlas.',

tiempo:'20 minutos',

consejo:
'Una hoja bien hidratada facilita el armado y evita que el tamal se rompa.',

porQue:
'La hoja funciona como envoltura y ayuda a conservar humedad durante la cocción.',

mensajeChef:
'Antes de construir un platillo, prepara correctamente tus herramientas.',

señalCorrecta:
'La hoja puede doblarse sin quebrarse.',

errorEvitar:
'Usar hojas secas porque se romperán al envolver.'
},



{

numero:2,

titulo:'Prepara una masa ligera',

descripcion:
'Integra la masa con manteca, caldo y sal hasta obtener una mezcla suave y aireada.',

tiempo:'25 minutos',

consejo:
'La masa debe sentirse húmeda pero no líquida.',

porQue:
'La grasa y el aire incorporado ayudan a lograr una textura más agradable.',

mensajeChef:
'La textura cuenta una historia antes del primer bocado.',

señalCorrecta:
'La masa es uniforme y fácil de untar.',

errorEvitar:
'Crear una masa demasiado seca que produzca tamales pesados.'
},



{

numero:3,

titulo:'Arma el tamal',

descripcion:
'Extiende una capa de masa sobre la hoja, agrega mole con pollo y cierra cuidadosamente formando el tamal.',

tiempo:'40 minutos',

consejo:
'La proporción entre masa y relleno es importante.',

porQue:
'Demasiado relleno dificulta la cocción y demasiado masa cambia el equilibrio.',

mensajeChef:
'Un buen cocinero piensa en cada capa del plato.',

señalCorrecta:
'El tamal queda cerrado y mantiene su forma.',

errorEvitar:
'Poner demasiado relleno y provocar fugas durante la cocción.'
},



{

numero:4,

titulo:'Cocina al vapor con paciencia',

descripcion:
'Coloca los tamales en una vaporera y cocina hasta que la masa se desprenda fácilmente de la hoja.',

tiempo:'60 minutos',

consejo:
'Evita abrir constantemente la vaporera porque pierdes temperatura.',

porQue:
'El vapor necesita tiempo para transformar la masa.',

mensajeChef:
'La paciencia es una técnica que todos los chefs deben dominar.',

señalCorrecta:
'La masa se separa de la hoja sin quedarse pegada.',

errorEvitar:
'Sacar los tamales antes de tiempo porque parecerán crudos.'
},



{

numero:5,

titulo:'Reposo y servicio',

descripcion:
'Deja reposar unos minutos antes de servir para que la textura termine de asentarse.',

tiempo:'10 minutos',

consejo:
'El reposo también forma parte de cocinar.',

porQue:
'Los ingredientes continúan estabilizando su humedad después del vapor.',

mensajeChef:
'El último paso también merece atención.',

señalCorrecta:
'El tamal mantiene forma y tiene textura suave.',

errorEvitar:
'Servir inmediatamente sin dejar estabilizar.'
}

],



historiaChef:
'Los tamales forman parte de la historia culinaria de México desde tiempos antiguos. Son una preparación ligada a celebraciones, reuniones familiares y tradiciones regionales.',



trucoChef:
'Batir bien la masa antes de armar los tamales ayuda a conseguir una textura más ligera.',



tip:
'Los tamales pueden congelarse y recuperan buena textura al calentarse nuevamente al vapor.',



sustituciones:[


{
falta:'pollo',

reemplazo:'cerdo, queso con chile o verduras'
},


{
falta:'manteca',

reemplazo:'aceite vegetal o grasa alternativa'
}

],



chefInicio:
'Hoy aprenderás que una receta tradicional también es una clase de técnica: cada detalle importa.',



chefFinal:
'Excelente trabajo. Ahora conoces una preparación donde paciencia, textura y tradición se unen.',



erroresComunes:[

'Usar demasiada masa.',

'No hidratar correctamente las hojas.',

'Cocinar con poco vapor.'

],



señalesExito:{


vista:
'El tamal debe mantener forma y mostrar una masa uniforme.',


olor:
'Debe recordar a maíz, mole y hojas cocidas.',


textura:
'Debe ser suave, húmedo y desprenderse fácilmente de la hoja.'

},



rescates:[


{
problema:'La masa quedó seca',

solucion:'Revisa hidratación y agrega un poco más de caldo antes de preparar nuevos tamales.'
},


{
problema:'La masa quedó cruda',

solucion:'Continúa la cocción al vapor hasta que cambie completamente la textura.'
}

],



tags:[

'mexicana',

'tamal',

'mole',

'tradicion',

'familia'

],



popularidad:100,


};