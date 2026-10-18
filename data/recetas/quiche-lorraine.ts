import type { Receta } from '@/types/receta';


export const QUICHE_LORRAINE: Receta = {

id:'quiche-lorraine',

titulo:'Quiche Lorraine',

imagen:
require('../../assets/images/recetas/quiche-lorraine.webp'),


descripcion:
'Una receta clásica francesa que demuestra cómo ingredientes sencillos como huevo, queso y mantequilla pueden convertirse en un platillo elegante y lleno de sabor.',


categoria:'comida',
rolCulinario: 'plato_principal',


porciones:6,


tiempoMinutos:70,


dificultad:'chef',



ingredientes:[

{
 id:'harina',
 cantidad:0.25,
 unidad:'kg'
},

{
 id:'mantequilla',
 cantidad:0.12,
 unidad:'kg'
},

{
 id:'huevo',
 cantidad:4,
 unidad:'pieza'
},

{
 id:'crema',
 cantidad:0.3,
 unidad:'litro'
},

{
id:'queso_manchego',
 cantidad:0.15,
 unidad:'kg'
},

{
 id:'tocino',
 cantidad:0.15,
 unidad:'kg'
},

{
id:'pimienta_negra',
cantidad:0.001,
unidad:'kg'
},

{
id:'nuez_moscada',
cantidad:0.001,
unidad:'kg'
}

],



pasos:[


{
numero:1,

titulo:'Construye la masa quebrada',

descripcion:
'Coloca la harina en una mesa limpia formando una especie de volcán. Agrega la mantequilla fría en cubos pequeños y mezcla con las puntas de los dedos hasta obtener una textura parecida a arena húmeda. Incorpora agua fría poco a poco hasta que la masa pueda unirse. Forma un disco, envuelve y deja reposar en refrigeración.',

tiempo:'25 minutos',

consejo:
'Evita calentar la mantequilla con las manos. La masa quebrada necesita mantenerse fría para lograr una textura crujiente.',

porQue:
'La mantequilla fría crea pequeñas capas de grasa dentro de la masa. Durante el horneado esas capas generan una textura más delicada y quebradiza.',

mensajeChef:
'La técnica empieza antes del horno. La temperatura también es un ingrediente.',

objetivo:
'Crear una base firme, crujiente y capaz de sostener el relleno.',

nivelImportancia:
'critico',

chefPregunta:
'¿Por qué no debemos amasar demasiado la masa quebrada?',

respuestaEsperada:
'Porque desarrolla gluten y puede volver la masa dura.',

señalCorrecta:
'La masa se une, es suave al tacto y no está pegajosa.',

errorEvitar:
'Trabajar demasiado la masa o usar mantequilla caliente.'
},


{
numero:2,

titulo:'Desarrolla el sabor del relleno',

descripcion:
'Corta el tocino en piezas pequeñas y cocínalo en sartén hasta que libere grasa y tome un color dorado. Retira el exceso de grasa si es necesario. En un recipiente mezcla huevos, crema, queso, pimienta y nuez moscada hasta integrar completamente.',

tiempo:'20 minutos',

consejo:
'El tocino debe aportar sabor, no dominar toda la preparación.',

porQue:
'El dorado del tocino genera aromas más profundos y la mezcla de huevo con crema crea la textura característica del quiche.',

mensajeChef:
'Una receta elegante depende del equilibrio, no de tener muchos ingredientes.',

objetivo:
'Crear un relleno cremoso y equilibrado.',

nivelImportancia:
'clave',

chefPregunta:
'¿Qué función tiene la mezcla de huevo y crema?',

respuestaEsperada:
'Dar estructura y una textura cremosa al interior del quiche.',

señalCorrecta:
'La mezcla es uniforme y tiene textura líquida cremosa.',

errorEvitar:
'Agregar demasiado líquido o no mezclar correctamente.'
},


{
numero:3,

titulo:'Forma correctamente la base',

descripcion:
'Saca la masa fría del refrigerador. Extiéndela con rodillo hasta obtener un grosor uniforme. Colócala dentro del molde presionando suavemente las esquinas y retira el exceso de los bordes.',

tiempo:'15 minutos',

consejo:
'Trabaja rápido para evitar que la mantequilla se caliente.',

porQue:
'Una masa uniforme permite una cocción pareja y evita partes crudas o demasiado doradas.',

mensajeChef:
'La precisión en la preparación mejora el resultado final.',

objetivo:
'Crear una base estable para recibir el relleno.',

nivelImportancia:
'clave',

señalCorrecta:
'La masa cubre todo el molde sin grietas importantes.',

errorEvitar:
'Estirar demasiado delgada la masa porque puede romperse.'
},

{
numero:4,

titulo:'Prehornea la base',

descripcion:
'Pincha la masa con un tenedor y coloca peso encima para evitar que suba. Hornea unos minutos hasta que comience a tomar firmeza antes de agregar el relleno.',

tiempo:'12 minutos',

consejo:
'Este paso evita una base húmeda cuando agregamos la mezcla líquida.',

porQue:
'El prehorneado crea una barrera entre la masa y el relleno.',

mensajeChef:
'Controlar la humedad es una de las grandes diferencias en cocina profesional.',

objetivo:
'Conseguir una base firme antes de agregar líquidos.',

nivelImportancia:
'critico',

chefPregunta:
'¿Por qué prehorneamos la masa?',

respuestaEsperada:
'Para evitar que absorba demasiado líquido y quede blanda.',

señalCorrecta:
'La masa mantiene su forma y empieza a dorarse.',

errorEvitar:
'Agregar el relleno sobre una masa completamente cruda.'
},

{
numero:5,

titulo:'Cocina el quiche lentamente',

descripcion:
'Agrega el relleno sobre la base prehorneada y lleva al horno hasta que el centro esté cocido pero conserve una textura cremosa.',

tiempo:'35 minutos',

consejo:
'El centro debe moverse ligeramente al salir del horno; terminará de asentarse durante el reposo.',

porQue:
'Una temperatura controlada permite que el huevo cuaje sin volverse seco.',

mensajeChef:
'El punto perfecto está entre firmeza y suavidad.',

objetivo:
'Lograr un relleno cremoso con superficie dorada.',

nivelImportancia:
'critico',

señalCorrecta:
'La superficie tiene color dorado y el centro conserva humedad.',

errorEvitar:
'Sobre cocinar hasta resecar el relleno.'
},
{
numero:6,

titulo:'Reposa y presenta',

descripcion:
'Retira del horno y deja reposar antes de cortar. Sirve en porciones acompañadas de ensalada fresca o vegetales.',

tiempo:'10 minutos',

consejo:
'El reposo permite que la estructura interna se estabilice.',

porQue:
'Un corte inmediato puede hacer que el relleno pierda forma.',

mensajeChef:
'La paciencia también forma parte del plato terminado.',

señalCorrecta:
'Las porciones mantienen su forma y muestran capas definidas.',

errorEvitar:
'Cortar recién salido del horno.'
},
],



tip:
'Puedes cambiar el tocino por espinaca, champiñones o pollo para crear nuevas versiones.',



ahorro:
'Si no tienes queso especial, usa queso Oaxaca o manchego y mantén la esencia de la receta.',



errorComun:
'Usar demasiado relleno líquido sin controlar la cocción.',






tags:[

'francesa',
'horno',
'chef',
'aprendizaje',
'familia',
'especial'

],



historiaChef:
'El quiche nació como una preparación práctica que evolucionó hasta convertirse en un clásico de la cocina francesa.',



trucoChef:
'El secreto está en la proporción entre huevo, crema y los ingredientes del relleno.',



chefInicio:
'Hoy aprenderás algo importante: una cocina sencilla puede convertirse en una experiencia especial cuando entiendes la técnica.',



chefFinal:
'Excelente trabajo. Ya no solo seguiste una receta: aprendiste cómo construir una preparación desde cero.',



señalesExito:{

vista:
'Superficie dorada con relleno firme y cremoso.',

olor:
'Aroma de mantequilla, queso y especias suaves.',

textura:
'Base crujiente y centro suave.'

}


};