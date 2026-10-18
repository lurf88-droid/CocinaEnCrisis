import type { Receta } from '@/types/receta';


export const CHILE_EN_NOGADA: Receta = {


id:'chile-en-nogada',


titulo:'Chile en nogada tradicional',


imagen: require(
'../../../assets/images/recetas/chile-en-nogada.webp'
),


descripcion:
'Un platillo mexicano emblemático que combina chile poblano relleno de carne, frutas, especias y una salsa cremosa de nuez. Representa el equilibrio entre sabores dulces, salados y frescos.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


tecnicaPrincipal:
'relleno, reducción y equilibrio de sabores',


nivelChef:4,



categoria:'comida',
rolCulinario: 'plato_principal',



porciones:6,


tiempoMinutos:120,


dificultad:'avanzada',



ingredientes:[


{
id:'chile_poblano',
cantidad:6,
unidad:'pieza'
},


{
id:'carne_molida_res',
cantidad:0.500,
unidad:'kg'
},


{
id:'carne_molida_cerdo',
cantidad:0.500,
unidad:'kg'
},


{
id:'manzana',
cantidad:2,
unidad:'pieza'
},


{
id:'pera',
cantidad:2,
unidad:'pieza'
},


{
id:'durazno',
cantidad:2,
unidad:'pieza'
},


{
id:'nuez',
cantidad:0.300,
unidad:'kg'
},


{
id:'granada',
cantidad:2,
unidad:'pieza'
},


{
id:'canela',
cantidad:0.005,
unidad:'kg'
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
id:'sal',
cantidad:0.010,
unidad:'kg'
}


],



aprendizajes:[


'preparación de rellenos',

'equilibrio dulce-salado',

'manejo de frutas en cocina salada',

'preparación de salsas frías',

'presentación gastronómica',

'historia gastronómica mexicana'



],



pasos:[


{

numero:1,

titulo:'Prepara los chiles poblanos',

descripcion:
'Asa los chiles directamente al fuego o comal hasta que la piel esté quemada. Después colócalos en una bolsa para que suden y puedas retirar la piel.',

tiempo:'20 minutos',

consejo:
'El asado aporta un aroma profundo que no se logra con una cocción normal.',

porQue:
'El contacto con el fuego desarrolla nuevos aromas y mejora la textura.',

mensajeChef:
'La primera transformación del ingrediente ocurre con el fuego.',

señalCorrecta:
'La piel se desprende fácilmente y el chile mantiene su forma.',

errorEvitar:
'Romper el chile porque después será difícil rellenarlo.'

},



{

numero:2,

titulo:'Construye el relleno',

descripcion:
'Cocina las carnes con cebolla, ajo y especias. Después incorpora las frutas picadas para crear contraste de sabores.',

tiempo:'35 minutos',

consejo:
'La fruta no debe convertir el relleno en postre. Solo debe aportar equilibrio.',

porQue:
'La cocina mexicana utiliza contrastes para crear profundidad.',

mensajeChef:
'El secreto está en encontrar armonía entre sabores opuestos.',

señalCorrecta:
'El relleno tiene aroma especiado y diferentes texturas.',

errorEvitar:
'Agregar demasiada fruta y perder el sabor de la carne.'

},



{

numero:3,

titulo:'Prepara la nogada',

descripcion:
'Licúa nuez con ingredientes cremosos hasta obtener una salsa blanca suave y equilibrada.',

tiempo:'20 minutos',

consejo:
'La nogada debe acompañar, no cubrir completamente el relleno.',

porQue:
'Una salsa bien equilibrada une todos los elementos del plato.',

mensajeChef:
'Las salsas cuentan la mitad de la historia.',

señalCorrecta:
'Debe ser cremosa, fresca y con sabor delicado a nuez.',

errorEvitar:
'Hacerla demasiado dulce.'

},



{

numero:4,

titulo:'Rellena y monta el plato',

descripcion:
'Rellena cuidadosamente los chiles con la mezcla de carne y frutas. Coloca la nogada encima y termina con granada.',

tiempo:'20 minutos',

consejo:
'La presentación forma parte de la experiencia.',

porQue:
'El chile en nogada representa los colores y la identidad de México.',

mensajeChef:
'Un plato también comunica una historia.',

señalCorrecta:
'Debe verse equilibrado entre verde, blanco y rojo.',

errorEvitar:
'Saturar el plato y perder elegancia.'

}


],



historiaChef:
'El chile en nogada es considerado uno de los grandes símbolos gastronómicos de México. Su combinación de colores y sabores lo relaciona con la identidad nacional.',



trucoChef:
'Preparar la nogada con anticipación puede ayudar a integrar mejor los sabores.',



tip:
'Es una receta ideal para aprender cómo ingredientes dulces pueden funcionar dentro de preparaciones saladas.',



sustituciones:[


{
falta:'nuez',

reemplazo:'almendra o una mezcla de frutos secos'
},


{
falta:'granada',

reemplazo:'fruta roja fresca disponible para aportar contraste'
}


],



chefInicio:
'Hoy aprenderás una de las grandes lecciones de la gastronomía: el equilibrio es más importante que la intensidad.',



chefFinal:
'Excelente trabajo. Has preparado una receta donde técnica, historia y sabor trabajan juntos.',



erroresComunes:[

'No controlar el dulzor del relleno.',

'Romper los chiles durante la preparación.',

'Hacer una nogada demasiado pesada.'

],



señalesExito:{


vista:
'Debe presentar los colores verde, blanco y rojo con una composición elegante.',


olor:
'Debe combinar aromas de chile asado, nuez, especias y fruta.',


textura:
'El relleno debe ser jugoso y la nogada cremosa.'


},



rescates:[


{
problema:'El relleno quedó muy dulce',

solucion:'Ajusta con más carne, sal o especias para recuperar equilibrio.'
},


{
problema:'La nogada quedó muy espesa',

solucion:'Ajusta con un poco de líquido hasta obtener textura cremosa.'
}


],



tags:[

'mexicana',

'historia',

'gourmet',

'tradicional',

'nivel-chef'

],



popularidad:100,


};