import type { Receta } from '@/types/receta';



export const COCHINITA_PIBIL: Receta = {



id:'cochinita-pibil',



titulo:'Cochinita pibil tradicional',



imagen: require(
'../../../assets/images/recetas/cochinita-pibil.webp'
),



descripcion:
'Preparación tradicional de la cocina yucateca elaborada con carne de cerdo marinada con achiote y cítricos, cocinada lentamente hasta obtener una textura suave y llena de sabor.',




// 🌎 IDENTIDAD CULINARIA


cocina:'mexicana',



tecnicaPrincipal:
'adobo con achiote, cocción lenta y envoltura tradicional',



nivelChef:4,





categoria:'comida',
rolCulinario: 'plato_principal',





porciones:8,



tiempoMinutos:300,



dificultad:'avanzada',





ingredientes:[



{
id:'carne_cerdo',
cantidad:2,
unidad:'kg'
},



{
id:'achiote',
cantidad:0.120,
unidad:'kg'
},



{
id:'naranja_agria',
cantidad:5,
unidad:'pieza'
},



{
id:'ajo',
cantidad:6,
unidad:'pieza'
},



{
id:'comino',
cantidad:0.005,
unidad:'kg'
},



{
 id:'oregano_seco',
 cantidad:0.010,
 unidad:'kg'
},


{
id:'cebolla_morada',
cantidad:0.300,
unidad:'kg'
},



{
id:'hoja_platano',
cantidad:4,
unidad:'pieza'
},



{
id:'tortilla_maiz',
cantidad:30,
unidad:'pieza'
},



{
id:'limon',
cantidad:6,
unidad:'pieza'
}



],





// 🎓 FORMACIÓN CHEF LUNA


aprendizajes:[


'uso del achiote',


'equilibrio ácido-graso',


'cocciones prolongadas',


'técnicas tradicionales yucatecas',


'uso de hojas naturales'


],





pasos:[



{

numero:1,


titulo:'Prepara el adobo de achiote',


descripcion:
'Diluye el achiote con jugo de naranja agria, ajo y especias hasta obtener una mezcla uniforme.',


tiempo:'20 minutos',


consejo:
'El adobo debe tener equilibrio entre acidez, aroma y especias.',


porQue:
'El achiote aporta color, sabor y la identidad característica de la receta.',


mensajeChef:
'Cada región tiene una forma diferente de crear sabor.',


señalCorrecta:
'El adobo tiene color naranja intenso y aroma especiado.',


errorEvitar:
'Usar demasiado achiote sin equilibrar la acidez.'


},




{

numero:2,


titulo:'Marina la carne',


descripcion:
'Cubre la carne completamente con el adobo y deja reposar para que absorba los sabores.',


tiempo:'4 horas mínimo',


consejo:
'El tiempo permite que el sabor llegue al interior de la carne.',


porQue:
'El marinado transforma aroma, color y textura.',


mensajeChef:
'La paciencia empieza antes de cocinar.',


señalCorrecta:
'La carne está completamente impregnada.',


errorEvitar:
'Cocinar inmediatamente sin reposo.'


},




{

numero:3,


titulo:'Envuelve con hoja de plátano',


descripcion:
'Coloca la carne marinada dentro de hojas de plátano preparadas para conservar humedad durante la cocción.',


tiempo:'15 minutos',


consejo:
'La hoja funciona como una protección natural.',


porQue:
'Permite una cocción húmeda y aporta aromas tradicionales.',


mensajeChef:
'La naturaleza también es una herramienta de cocina.',


señalCorrecta:
'La carne queda completamente protegida.',


errorEvitar:
'Dejar espacios abiertos donde se pierda humedad.'


},




{

numero:4,


titulo:'Cocina lentamente la cochinita',


descripcion:
'Cocina a temperatura baja hasta que la carne quede suave y pueda separarse fácilmente.',


tiempo:'4 horas',


consejo:
'No intentes acelerar una receta basada en tiempo.',


porQue:
'La cocción lenta rompe las fibras y desarrolla profundidad.',


mensajeChef:
'El tiempo convierte ingredientes simples en recuerdos.',


señalCorrecta:
'La carne se deshace fácilmente.',


errorEvitar:
'Usar temperaturas demasiado altas.'


},




{

numero:5,


titulo:'Prepara el taco yucateco',


descripcion:
'Sirve la carne en tortillas calientes acompañada de cebolla morada encurtida y limón.',


tiempo:'10 minutos',


consejo:
'La cebolla aporta frescura y contraste.',


porQue:
'El ácido ayuda a equilibrar la intensidad de la carne.',


mensajeChef:
'Un gran plato busca equilibrio, no exceso.',


señalCorrecta:
'El taco tiene carne suave y acompañamientos frescos.',


errorEvitar:
'Cargar demasiado el taco y perder armonía.'


}


],





historiaChef:
'La cochinita pibil es una preparación tradicional de Yucatán con raíces mayas. Su técnica combina achiote, cítricos y cocción lenta para crear uno de los sabores más representativos del sureste mexicano.',





trucoChef:
'Preparar la cebolla morada con anticipación mejora su sabor y textura.',





tip:
'La carne sobrante puede utilizarse para tortas, tacos o nuevas preparaciones.',





sustituciones:[



{
falta:'naranja agria',

reemplazo:'mezcla de naranja dulce con limón'
},



{
falta:'hoja de plátano',

reemplazo:'papel para hornear o recipiente tapado conservando humedad'
}


],





chefInicio:
'Hoy aprenderás una técnica donde la acidez, el tiempo y la paciencia trabajan juntos para transformar una receta.',





chefFinal:
'Excelente trabajo. Ahora conoces una de las joyas de la cocina yucateca y una nueva forma de entender el sabor.',





erroresComunes:[


'No dejar marinar la carne.',


'Perder humedad durante la cocción.',


'No equilibrar la acidez.',


'Cocinar a temperatura demasiado alta.'


],





señalesExito:{



vista:
'Carne suave con color naranja rojizo y cebolla morada fresca.',



olor:
'Aroma de achiote, cítricos y especias.',



textura:
'Carne muy tierna que se separa fácilmente.'
},





rescates:[



{
problema:'La carne quedó seca',

solucion:
'Agregar un poco del jugo de cocción y controlar mejor la temperatura.'
},



{
problema:'El sabor quedó muy ácido',

solucion:
'Equilibrar con más tiempo de cocción y ajustar especias.'
}


],





tags:[


'mexicana',


'yucateca',


'achiote',


'tradicional',


'coccion-lenta'


],





popularidad:99,



};