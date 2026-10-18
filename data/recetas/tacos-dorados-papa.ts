import type { Receta } from '@/types/receta';


export const TACOS_DORADOS_PAPA: Receta = {

id:'tacos-dorados-papa',


titulo:'Tacos dorados de papa',


imagen: require(
'../../assets/images/recetas/tacos-dorados-papa.webp'
),


descripcion:
'Una receta económica, crujiente y llenadora. Ideal cuando tienes papas y tortillas pero quieres convertir ingredientes sencillos en una comida completa.',



categoria:'comida',
rolCulinario: 'plato_principal',


porciones:4,


tiempoMinutos:35,


dificultad:'facil',



ingredientes:[

{
 id:'papa',
 cantidad:0.8,
 unidad:'kg'
},

{
id:'tortilla_maiz',
cantidad:12,
unidad:'pieza'
},

{
id:'aceite_vegetal',
cantidad:0.150,
unidad:'litro'
},

{
id:'sal',
cantidad:0.005,
unidad:'kg'
},

{
id:'queso_fresco',
cantidad:0.150,
unidad:'kg'
}

],



pasos:[

{
numero:1,

titulo:'Prepara la papa',

descripcion:
'Lava las papas y cocínalas hasta que estén suaves. Después retira la cáscara y machácalas hasta formar un puré.',

tiempo:'15 minutos',

consejo:
'No busques que quede completamente líquido. Una textura ligeramente firme ayuda a que el taco conserve mejor su forma.',

porQue:
'La papa será el relleno principal. Cocinarla correctamente permite que absorba sabores y tenga buena textura.',

mensajeChef:
'Una buena receta comienza cuidando el ingrediente más sencillo.',

señalCorrecta:
'La papa debe poder aplastarse fácilmente con un tenedor.',

errorEvitar:
'Usar papa cruda dentro del taco porque no tendrá tiempo suficiente de cocinarse.'
},


{
numero:2,

titulo:'Sazona el relleno',

descripcion:
'Agrega sal al puré de papa y mezcla bien. Puedes agregar queso, cebolla o alguna especia si tienes disponible.',

tiempo:'3 minutos',

consejo:
'Prueba un poco del relleno antes de formar los tacos.',

porQue:
'El relleno debe tener sabor antes de entrar a la tortilla.',

mensajeChef:
'Los buenos cocineros prueban y ajustan antes de servir.',

señalCorrecta:
'El puré debe tener sabor equilibrado.',

errorEvitar:
'Esperar hasta el final para corregir la sal.'
},


{
numero:3,

titulo:'Forma los tacos',

descripcion:
'Calienta ligeramente las tortillas para evitar que se rompan. Coloca papa en el centro y enrolla formando los tacos.',

tiempo:'5 minutos',

consejo:
'No pongas demasiado relleno porque puede abrirse durante la fritura.',

porQue:
'Una buena forma permite que el taco quede cerrado y crujiente.',

mensajeChef:
'La técnica convierte ingredientes simples en algo especial.',

señalCorrecta:
'El taco debe mantenerse cerrado antes de cocinarlo.',

errorEvitar:
'Usar tortillas frías porque suelen romperse.'
},


{
numero:4,

titulo:'Fríe hasta dorar',

descripcion:
'Calienta aceite y cocina los tacos hasta que estén dorados y crujientes por ambos lados.',

tiempo:'8 minutos',

consejo:
'No llenes demasiado el sartén. Dale espacio para que se dore correctamente.',

porQue:
'La fritura crea una capa crujiente, concentra sabores y desarrolla aromas tostados.',

mensajeChef:
'Aquí sucede la magia: una tortilla sencilla se transforma.',

señalCorrecta:
'Debe verse dorado uniforme y sentirse crujiente.',

errorEvitar:
'Usar aceite frío porque absorberán demasiado aceite.'
},

],


tip:
'Puedes acompañarlos con salsa, crema, lechuga o lo que tengas disponible.',


ahorro:
'La papa es uno de los ingredientes con mejor rendimiento por peso. Compra por kilo para reducir costo.',


errorComun:
'Agregar demasiado relleno o freír con aceite poco caliente.',





tags:[
'barata',
'llenadora',
'economica',
'pocos ingredientes'
],


tipoComida:'llenadora',


popularidad:95,


historiaChef:
'Una receta creada para esos días donde parece que no hay mucho en la cocina, pero todavía puedes preparar algo delicioso.',


trucoChef:
'Dejar reposar el puré unos minutos antes de formar los tacos ayuda a manejarlos mejor.',





ocasion:[
'diario',
'familia',
'crisis'
],


sustituciones:[

{
falta:'queso',
reemplazo:'frijoles machacados o papa sola'
}

],


chefInicio:
'Hoy vamos a demostrar que con ingredientes sencillos también se puede cocinar algo increíble.',


chefFinal:
'Buen trabajo. Convertiste ingredientes básicos en una comida completa.',


señalesExito:{

vista:
'Los tacos deben verse dorados y crujientes.',

olor:
'Debe tener aroma tostado y casero.',

textura:
'Crujientes por fuera y suaves por dentro.'

},


rescates:[

{
problema:'Los tacos se abren',

solucion:
'Usa menos relleno y calienta mejor la tortilla antes de enrollar.'
},

{
problema:'Quedaron muy grasosos',

solucion:
'El aceite debe estar caliente antes de freír.'
}

]

};