import type { Receta } from '@/types/receta';


export const HUEVOS_MEXICANA: Receta = {


id:'huevos-mexicana',


titulo:'Huevos a la mexicana',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/nacional/huevos-mexicana.webp'
),



descripcion:
'Una receta mexicana clásica donde el huevo se combina con jitomate, cebolla y chile para crear un desayuno lleno de sabor. Ideal para aprender técnicas básicas que usarás durante toda tu vida en la cocina.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


tecnicaPrincipal:
'salteado y control de cocción',


nivelChef:1,



categoria:'desayuno',



// 👥 DATOS

porciones:2,


tiempoMinutos:15,


dificultad:'facil',



ingredientes:[


{
id:'huevo',
cantidad:4,
unidad:'pieza'
},


{
id:'jitomate',
cantidad:0.200,
unidad:'kg'
},


{
id:'cebolla_blanca',
cantidad:0.050,
unidad:'kg'
},


{
id:'chile_serrano',
cantidad:2,
unidad:'pieza'
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



pasos:[


{

numero:1,


titulo:'Prepara tu estación de cocina',


descripcion:
'Lava los vegetales, coloca los ingredientes cerca y prepara tabla, cuchillo y sartén antes de comenzar.',


tiempo:'3 minutos',


consejo:
'La organización es una de las diferencias entre cocinar con estrés y cocinar disfrutando.',


porQue:
'Los cocineros profesionales utilizan la mise en place para trabajar con orden y evitar errores.',


mensajeChef:
'Antes de crear sabor, crea orden.',


señalCorrecta:
'Todos los ingredientes están listos antes de encender el fuego.',


errorEvitar:
'Empezar a cocinar mientras todavía estás buscando ingredientes.'

},



{

numero:2,


titulo:'Corta los vegetales correctamente',


descripcion:
'Corta el jitomate en cubos pequeños, la cebolla finamente y el chile en rodajas o picado según el nivel de picante que busques.',


tiempo:'5 minutos',


consejo:
'Un corte uniforme ayuda a que los ingredientes se cocinen al mismo tiempo.',


porQue:
'El tamaño del corte cambia la textura final y la forma en que percibimos los sabores.',


mensajeChef:
'El cuchillo es una extensión del cocinero. Aprende a controlarlo.',


señalCorrecta:
'Los ingredientes tienen tamaños similares y cortes limpios.',


errorEvitar:
'Cortar todo de tamaños diferentes porque algunas partes quedarán crudas y otras demasiado cocidas.'

},



{

numero:3,


titulo:'Construye el sofrito mexicano',


descripcion:
'Calienta el aceite a fuego medio. Agrega primero la cebolla, después el chile y finalmente el jitomate. Cocina hasta que los vegetales estén suaves.',


tiempo:'5 minutos',


consejo:
'No busques quemar los ingredientes. Queremos desarrollar aroma y dulzor.',


porQue:
'El sofrito crea la base aromática que dará personalidad al platillo.',


mensajeChef:
'Aquí comienza realmente la receta.',


señalCorrecta:
'La cebolla está transparente y el jitomate ha soltado parte de su jugo.',


errorEvitar:
'Usar fuego demasiado alto y quemar el ajo o la cebolla si los agregas.'


},



{

numero:4,


titulo:'Agrega y cocina el huevo',


descripcion:
'Bate ligeramente los huevos, agrégalos al sofrito y cocina moviendo suavemente hasta obtener la textura deseada.',


tiempo:'4 minutos',


consejo:
'Retira del fuego cuando todavía tengan humedad. El calor restante terminará la cocción.',


porQue:
'El huevo cambia rápidamente de textura dependiendo de la temperatura.',


mensajeChef:
'Controlar el fuego es una de las primeras habilidades de un cocinero.',


señalCorrecta:
'El huevo está cocido, pero mantiene una textura suave.',


errorEvitar:
'Cocinar demasiado tiempo y dejarlo seco.'


}


],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'mise en place',

'corte básico',

'sofrito',

'control del fuego'

],



historiaChef:
'Los huevos a la mexicana representan una de las preparaciones más queridas del desayuno mexicano. Su fuerza está en transformar ingredientes sencillos en un plato lleno de identidad.',



trucoChef:
'Agregar el jitomate después de la cebolla permite desarrollar mejor el dulzor natural del sofrito.',



tip:
'Puedes agregar cilantro fresco al final para aportar aroma y frescura.',



sustituciones:[

{
falta:'chile serrano',

reemplazo:'jalapeño o chile verde disponible'
},


{
falta:'cebolla blanca',

reemplazo:'cebolla morada o cebollín'
}

],



chefInicio:
'Hoy aprenderás algo importante: una receta sencilla puede convertirse en una gran escuela de cocina cuando entiendes la técnica.',



chefFinal:
'Excelente trabajo. Ya practicaste organización, corte, sofrito y control de cocción. Estas habilidades aparecerán en cientos de recetas más.',



erroresComunes:[

'Agregar el huevo con el sartén demasiado frío.',

'Cocinar los vegetales a fuego demasiado alto.',

'Sobrecocinar el huevo.'

],



señalesExito:{


vista:
'El huevo debe verse húmedo y mezclado con los colores del jitomate, cebolla y chile.',


olor:
'Debe tener aroma fresco de vegetales cocinados y un fondo ligeramente dulce del sofrito.',


textura:
'El huevo debe ser suave y los vegetales conservar algo de textura.'


},



rescates:[


{
problema:
'El huevo quedó seco',


solucion:
'La próxima vez retíralo antes del fuego. En esta ocasión puedes acompañarlo con salsa o algún ingrediente húmedo.'
},


{
problema:
'Quedó muy picante',


solucion:
'Equilibra con más huevo, jitomate o algún elemento fresco.'
}


],



tags:[

'mexicana',

'desayuno',

'facil',

'principiante',

'tecnica-basica'

],



popularidad:95,


};