import type { Receta } from '@/types/receta';


export const QUESADILLAS_HUITLACOCHE: Receta = {


id:'quesadillas-huitlacoche',


titulo:'Quesadillas de huitlacoche',


imagen: require(
'../../../assets/images/recetas/quesadillas-huitlacoche.webp'
),



descripcion:
'Una receta mexicana tradicional que combina tortilla de maíz, queso Oaxaca y huitlacoche. Una preparación perfecta para aprender cómo un ingrediente sencillo puede convertirse en un platillo con identidad y profundidad de sabor.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


tecnicaPrincipal:
'salteado de hongos y control de humedad',


nivelChef:2,



categoria:'comida',
rolCulinario: 'plato_principal',



// 👥 DATOS RECETA

porciones:4,


tiempoMinutos:30,


dificultad:'facil',



ingredientes:[


{
id:'tortilla_maiz',
cantidad:8,
unidad:'pieza'
},


{
id:'huitlacoche',
cantidad:0.300,
unidad:'kg'
},


{
id:'queso_oaxaca',
cantidad:0.300,
unidad:'kg'
},


{
id:'cebolla_blanca',
cantidad:0.050,
unidad:'kg'
},


{
id:'ajo',
cantidad:1,
unidad:'pieza'
},


{
id:'epazote',
cantidad:0.010,
unidad:'kg'
},


{
id:'aceite_vegetal',
cantidad:0.015,
unidad:'litro'
},


{
id:'sal',
cantidad:0.003,
unidad:'kg'
}


],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'control de humedad',

'salteado',

'desarrollo de umami',

'equilibrio de sabores',

'uso de hierbas aromáticas'

],



pasos:[


{

numero:1,

titulo:'Conoce y prepara el huitlacoche',

descripcion:
'Revisa el huitlacoche, limpia cualquier exceso de humedad y prepara todos los ingredientes antes de cocinar.',

tiempo:'5 minutos',

consejo:
'Los hongos contienen mucha agua. Entender ese detalle cambia completamente el resultado.',

porQue:
'Controlar la humedad permite concentrar sabores en lugar de obtener un relleno aguado.',

mensajeChef:
'Un cocinero primero observa el ingrediente antes de transformarlo.',

señalCorrecta:
'El huitlacoche tiene aroma fresco y textura suave.',

errorEvitar:
'Cocinarlo sin escurrir cuando tiene exceso de líquido.'

},



{

numero:2,

titulo:'Construye la base aromática',

descripcion:
'Sofríe cebolla y ajo con un poco de aceite hasta que estén suaves y aromáticos.',

tiempo:'5 minutos',

consejo:
'Mantén fuego medio. Queremos extraer aromas, no quemar ingredientes.',

porQue:
'La grasa ayuda a transportar compuestos aromáticos y crear una base de sabor.',

mensajeChef:
'Los grandes sabores empiezan con pequeños detalles.',

señalCorrecta:
'La cebolla está transparente y el aroma es dulce.',

errorEvitar:
'Quemar el ajo porque puede aportar amargor.'

},



{

numero:3,

titulo:'Concentra el sabor del huitlacoche',

descripcion:
'Agrega el huitlacoche y cocina hasta que parte de su humedad se evapore. Añade epazote al final para conservar mejor su aroma.',

tiempo:'10 minutos',

consejo:
'No busques secarlo completamente. Debe quedar jugoso pero concentrado.',

porQue:
'Reducir humedad intensifica los sabores naturales del ingrediente.',

mensajeChef:
'La paciencia revela sabores que estaban escondidos.',

señalCorrecta:
'El relleno tiene textura cremosa y aroma profundo.',

errorEvitar:
'Retirarlo demasiado pronto cuando todavía tiene exceso de agua.'

},



{

numero:4,

titulo:'Forma la quesadilla',

descripcion:
'Calienta una tortilla, agrega queso Oaxaca y el relleno de huitlacoche. Dobla y cocina hasta que el queso se funda.',

tiempo:'5 minutos',

consejo:
'La tortilla debe calentarse sin quemarse para conservar flexibilidad.',

porQue:
'La temperatura correcta permite unir texturas sin perder estructura.',

mensajeChef:
'Una preparación sencilla también necesita técnica.',

señalCorrecta:
'El queso está fundido y la tortilla dorada ligeramente.',

errorEvitar:
'Usar demasiado relleno porque dificulta la cocción.'

},



{

numero:5,

titulo:'Equilibra y sirve',

descripcion:
'Sirve con salsa, crema, cebolla o elementos frescos según disponibilidad.',

tiempo:'5 minutos',

consejo:
'Los acompañamientos deben complementar el ingrediente principal.',

porQue:
'El equilibrio entre grasa, acidez y frescura hace más completo un platillo.',

mensajeChef:
'La cocina no es llenar un plato, es crear armonía.',

señalCorrecta:
'El plato tiene contraste de sabores y texturas.',

errorEvitar:
'Cubrir completamente el sabor del huitlacoche con demasiados acompañamientos.'

}

],



historiaChef:
'El huitlacoche es uno de los ingredientes más representativos de la cocina mexicana. Su sabor profundo lo ha convertido de un ingrediente humilde a una preparación apreciada incluso en cocinas de alta gastronomía.',



trucoChef:
'Agregar epazote al final ayuda a conservar su aroma fresco y característico.',



tip:
'Si nunca has probado huitlacoche, esta preparación es una excelente forma de conocerlo porque combina su sabor con ingredientes familiares.',



sustituciones:[


{
falta:'huitlacoche',

reemplazo:'mezcla de champiñones y hongos disponibles'
},


{
falta:'queso Oaxaca',

reemplazo:'queso mozzarella o queso que funda bien'
}


],



chefInicio:
'Hoy conocerás una idea fundamental de la cocina: un ingrediente diferente puede convertirse en una experiencia nueva cuando entiendes la técnica.',



chefFinal:
'Excelente trabajo. Aprendiste a controlar humedad, desarrollar sabor y respetar un ingrediente tradicional mexicano.',



erroresComunes:[

'No controlar el exceso de agua del huitlacoche.',

'Quemar el ajo durante el sofrito.',

'Usar demasiado relleno en la tortilla.'

],



señalesExito:{


vista:
'La quesadilla debe verse dorada con queso fundido y relleno uniforme.',


olor:
'Debe destacar el aroma terroso del huitlacoche junto con epazote y queso.',


textura:
'La tortilla debe ser firme por fuera y cremosa por dentro.'


},



rescates:[


{
problema:'El relleno quedó muy líquido',

solucion:'Continúa cocinando unos minutos para evaporar humedad.'
},


{
problema:'El sabor es muy fuerte',

solucion:'Equilibra con queso, crema o elementos frescos.'
}


],



tags:[

'mexicana',

'huitlacoche',

'quesadilla',

'tradicional',

'umami',

'nivel-intermedio'

],



popularidad:90,


};