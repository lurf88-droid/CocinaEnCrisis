import type { Receta } from '@/types/receta';


export const CARNITAS_TRADICIONALES: Receta = {


id:'carnitas-tradicionales',


titulo:'Carnitas tradicionales estilo Michoacán',


imagen: require(
'../../../assets/images/recetas/carnitas-tradicionales.webp'
),



descripcion:
'Una preparación mexicana donde la carne de cerdo se cocina lentamente hasta lograr una textura suave por dentro y dorada por fuera. Una receta que enseña paciencia, control de temperatura y transformación del ingrediente.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


tecnicaPrincipal:
'cocción lenta en grasa y dorado final',


nivelChef:3,



categoria:'comida',
rolCulinario: 'plato_principal',



// 👥 DATOS RECETA

porciones:6,


tiempoMinutos:180,


dificultad:'media',



ingredientes:[


{
id:'espaldilla_cerdo',
cantidad:1.500,
unidad:'kg'
},


{
id:'manteca_cerdo',
cantidad:0.800,
unidad:'kg'
},


{
id:'naranja',
cantidad:2,
unidad:'pieza'
},


{
id:'cebolla_blanca',
cantidad:0.150,
unidad:'kg'
},


{
id:'ajo',
cantidad:5,
unidad:'pieza'
},


{
id:'laurel',
cantidad:3,
unidad:'pieza'
},


{
id:'sal',
cantidad:0.025,
unidad:'kg'
},


{
id:'pimienta_negra',
cantidad:0.005,
unidad:'kg'
}


],



aprendizajes:[

'cocción lenta',

'control de temperatura',

'uso de grasa culinaria',

'transformación de textura',

'equilibrio de sabores'

],



pasos:[


{

numero:1,

titulo:'Prepara la carne',

descripcion:
'Corta la carne de cerdo en trozos medianos. Retira exceso de humedad con papel de cocina y sazona ligeramente con sal.',

tiempo:'15 minutos',

consejo:
'Los cortes similares ayudan a que toda la carne se cocine de manera uniforme.',

porQue:
'La preparación previa permite controlar mejor la cocción y el resultado final.',

mensajeChef:
'Antes del fuego está la técnica.',

señalCorrecta:
'Los trozos tienen tamaños similares y están bien sazonados.',

errorEvitar:
'Cortar piezas demasiado grandes porque tardarán más en suavizarse.'

},


{

numero:2,

titulo:'Inicia la cocción lenta',

descripcion:
'Coloca la manteca en una olla amplia y cocina la carne a fuego bajo junto con ajo, cebolla, laurel y jugo de naranja.',

tiempo:'120 minutos',

consejo:
'La temperatura baja es la clave. Las carnitas no se apresuran.',

porQue:
'La cocción lenta permite que el colágeno se transforme y la carne quede suave.',

mensajeChef:
'La paciencia también es un ingrediente.',

señalCorrecta:
'La carne empieza a separarse fácilmente y conserva humedad.',

errorEvitar:
'Subir demasiado el fuego buscando terminar rápido.'

},


{

numero:3,

titulo:'Controla la textura',

descripcion:
'Revisa la carne durante la cocción. Debe estar suave antes de buscar el dorado exterior.',

tiempo:'30 minutos',

consejo:
'Primero buscamos suavidad, después color.',

porQue:
'Intentar dorar antes de tiempo puede dejar una carne dura.',

mensajeChef:
'Cada etapa tiene un propósito.',

señalCorrecta:
'Un tenedor entra fácilmente en la carne.',

errorEvitar:
'Buscar solamente apariencia sin cuidar textura.'

},


{

numero:4,

titulo:'Dora las carnitas',

descripcion:
'Incrementa ligeramente el calor al final para desarrollar zonas doradas y sabores más profundos.',

tiempo:'15 minutos',

consejo:
'El dorado final debe aportar sabor, no quemar la preparación.',

porQue:
'La reacción de Maillard genera aromas y sabores complejos.',

mensajeChef:
'Aquí aparece la magia del contraste: suave por dentro, dorado por fuera.',

señalCorrecta:
'La carne tiene partes doradas y aroma tostado.',

errorEvitar:
'Quemar la superficie buscando demasiado color.'

},


{

numero:5,

titulo:'Sirve y transforma',

descripcion:
'Sirve en tacos con tortilla de maíz, cebolla, cilantro y salsa. También puedes utilizar la preparación en otras recetas.',

tiempo:'10 minutos',

consejo:
'Una buena preparación base puede crear muchos platos diferentes.',

porQue:
'La cocina inteligente busca aprovechar al máximo cada elaboración.',

mensajeChef:
'Una receta puede convertirse en muchas historias.',

señalCorrecta:
'La carne se deshace fácilmente y tiene equilibrio entre grasa, sal y frescura.',

errorEvitar:
'Acompañar con demasiados elementos que oculten el sabor principal.'

}

],



historiaChef:
'Las carnitas son uno de los símbolos más reconocidos de la cocina mexicana. Su preparación tradicional destaca por la cocción lenta del cerdo hasta lograr una combinación única de suavidad y sabor.',



trucoChef:
'El toque cítrico de la naranja ayuda a equilibrar la riqueza de la grasa y aporta aroma.',



tip:
'Las carnitas del día siguiente pueden ganar sabor porque los jugos continúan integrándose.',



sustituciones:[


{
falta:'manteca de cerdo',
reemplazo:'aceite vegetal neutro, aunque cambiará el sabor tradicional'
},


{
falta:'naranja',
reemplazo:'una combinación de jugo cítrico disponible'
}


],



chefInicio:
'Hoy aprenderás una de las grandes lecciones de la cocina: algunos sabores necesitan tiempo para desarrollarse.',



chefFinal:
'Excelente trabajo. Ahora conoces una técnica fundamental: transformar un ingrediente mediante temperatura, paciencia y control.',



erroresComunes:[

'Cocinar con temperatura demasiado alta.',

'No dar tiempo suficiente para suavizar la carne.',

'Buscar dorado antes de lograr textura.'

],



señalesExito:{


vista:
'La carne presenta zonas doradas y una textura jugosa.',


olor:
'Debe tener aroma profundo de cerdo cocido, cítricos y especias.',


textura:
'Debe poder separarse fácilmente con un tenedor.'


},



rescates:[


{
problema:'La carne quedó dura',

solucion:'Continúa la cocción a fuego bajo agregando un poco de líquido si es necesario.'
},


{
problema:'Quedó demasiado grasosa',

solucion:'Retira parte del exceso de grasa y acompaña con elementos frescos como cebolla, cilantro y salsa.'
}


],



tags:[

'mexicana',

'cerdo',

'tacos',

'tradicional',

'coccion-lenta',

'nivel-intermedio'

],



popularidad:100,


};