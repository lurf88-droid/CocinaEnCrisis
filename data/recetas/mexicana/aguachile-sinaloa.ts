import type { Receta } from '@/types/receta';



export const AGUACHILE_SINALOA: Receta = {



id:'aguachile-sinaloa',



titulo:'Aguachile sinaloense tradicional',



imagen: require(
'../../../assets/images/recetas/aguachile-sinaloa.webp'
),



descripcion:
'Preparación fresca del Pacífico mexicano donde camarón, limón, chile y hierbas crean un platillo intenso y refrescante. Una receta que enseña cómo el ácido puede transformar ingredientes sin necesidad de fuego.',




// 🌎 IDENTIDAD CULINARIA


cocina:'mexicana',



tecnicaPrincipal:
'curado en ácido, equilibrio fresco y preparación en frío',



nivelChef:3,





categoria:'comida',
rolCulinario: 'plato_principal',





porciones:4,



tiempoMinutos:30,



dificultad:'media',





ingredientes:[



{
id:'camaron_mediano',
cantidad:0.800,
unidad:'kg'
},



{
id:'limon',
cantidad:12,
unidad:'pieza'
},



{
id:'pepino',
cantidad:0.300,
unidad:'kg'
},



{
id:'cebolla_morada',
cantidad:0.200,
unidad:'kg'
},



{
id:'chile_serrano',
cantidad:6,
unidad:'pieza'
},



{
id:'cilantro',
cantidad:0.050,
unidad:'kg'
},



{
id:'sal',
cantidad:0.010,
unidad:'kg'
},



{
id:'tostada_maiz',
cantidad:12,
unidad:'pieza'
}



],





// 🎓 FORMACIÓN CHEF LUNA


aprendizajes:[


'uso del ácido en cocina',


'manejo de mariscos',


'equilibrio picante-fresco',


'preparaciones en frío',


'identidad gastronómica del Pacífico mexicano'


],





pasos:[



{

numero:1,


titulo:'Prepara correctamente el camarón',


descripcion:
'Limpia los camarones retirando cáscara e intestino. Mantén el producto frío durante toda la preparación.',


tiempo:'10 minutos',


consejo:
'La frescura es la base de un buen aguachile.',


porQue:
'Los mariscos requieren cuidado para conservar textura y sabor.',


mensajeChef:
'Antes de cocinar, un chef aprende a respetar el ingrediente.',


señalCorrecta:
'El camarón está limpio, firme y fresco.',


errorEvitar:
'Trabajar con producto sin buena conservación.'


},




{

numero:2,


titulo:'Crea la salsa de aguachile',


descripcion:
'Licúa limón, chile serrano, cilantro y sal hasta obtener una mezcla fresca e intensa.',


tiempo:'10 minutos',


consejo:
'El picante debe complementar, no dominar.',


porQue:
'La salsa define el equilibrio entre acidez, frescura e intensidad.',


mensajeChef:
'El sabor no siempre necesita fuego para transformarse.',


señalCorrecta:
'La mezcla tiene color verde fresco y aroma herbal.',


errorEvitar:
'Usar demasiado chile sin equilibrio.'


},




{

numero:3,


titulo:'Cura el camarón con limón',


descripcion:
'Integra la salsa con el camarón y deja que el ácido modifique ligeramente su textura.',


tiempo:'5 a 10 minutos',


consejo:
'El tiempo de curado debe controlarse.',


porQue:
'El ácido cambia la estructura del alimento y desarrolla nuevos sabores.',


mensajeChef:
'La precisión también es una técnica culinaria.',


señalCorrecta:
'El camarón cambia ligeramente de color y mantiene firmeza.',


errorEvitar:
'Dejar demasiado tiempo porque puede afectar la textura.'


},




{

numero:4,


titulo:'Agrega frescura y contraste',


descripcion:
'Incorpora pepino y cebolla morada para aportar textura, color y frescura.',


tiempo:'5 minutos',


consejo:
'Una receta memorable necesita diferentes sensaciones.',


porQue:
'Los contrastes hacen más interesante cada bocado.',


mensajeChef:
'La cocina también se trata de crear experiencias.',


señalCorrecta:
'El plato tiene variedad de colores y texturas.',


errorEvitar:
'Agregar ingredientes que escondan el sabor principal.'


},




{

numero:5,


titulo:'Sirve el aguachile',


descripcion:
'Sirve frío acompañado de tostadas de maíz y disfruta inmediatamente.',


tiempo:'5 minutos',


consejo:
'Los platos frescos deben llegar rápido a la mesa.',


porQue:
'La temperatura forma parte de la experiencia gastronómica.',


mensajeChef:
'Cada plato tiene su momento perfecto.',


señalCorrecta:
'Debe sentirse fresco, equilibrado y lleno de aroma.',


errorEvitar:
'Dejar reposar demasiado tiempo antes de servir.'


}


],





historiaChef:
'El aguachile es una preparación tradicional del noroeste de México, especialmente relacionada con Sinaloa. Su esencia está en respetar la frescura del marisco y combinar chile, limón y elementos frescos.',





trucoChef:
'Mantener los ingredientes fríos y preparar la salsa justo antes de servir ayuda a conservar mejor la textura.',





tip:
'Puedes ajustar el nivel de picante modificando la cantidad de chile serrano.',





sustituciones:[



{
falta:'camarón',

reemplazo:'pescado fresco firme o champiñones para versión vegetal'
},



{
falta:'chile serrano',

reemplazo:'otro chile fresco disponible ajustando intensidad'
}


],





chefInicio:
'Hoy aprenderás una técnica diferente: transformar un ingrediente usando precisión, frío y equilibrio.',





chefFinal:
'Excelente trabajo. Ahora conoces una preparación donde la frescura y la técnica son los protagonistas.',





erroresComunes:[


'No cuidar la frescura del marisco.',


'Exceder el tiempo con limón.',


'Usar demasiado picante.',


'No mantener temperatura fría.'


],





señalesExito:{



vista:
'Camarón firme con colores frescos de chile, pepino y cebolla.',



olor:
'Aroma cítrico, herbal y limpio de mar.',



textura:
'Camarón firme con vegetales crujientes.'
},





rescates:[



{
problema:'Quedó demasiado ácido',

solucion:
'Ajustar con más ingredientes frescos y equilibrar sabores.'
},



{
problema:'Quedó demasiado picante',

solucion:
'Agregar más pepino, cebolla o elementos suaves.'
}


],





tags:[


'mexicana',


'sinaloa',


'mariscos',


'fresco',


'pacifico'


],





popularidad:95,



};