import type { Receta } from '@/types/receta';



export const TACOS_AL_PASTOR: Receta = {


id:'tacos-al-pastor',



titulo:'Tacos al pastor tradicionales',



imagen: require(
'../../../assets/images/recetas/tacos-al-pastor.webp'
),



descripcion:
'Uno de los tacos más representativos de México. Carne marinada con chiles secos, achiote y especias, cocinada hasta lograr un sabor profundo y acompañada con piña, cebolla y cilantro.',




// 🌎 IDENTIDAD CULINARIA


cocina:'mexicana',



tecnicaPrincipal:
'marinado, cocción a alta temperatura y equilibrio de sabores',



nivelChef:3,





categoria:'comida',
rolCulinario: 'plato_principal',




porciones:5,



tiempoMinutos:180,



dificultad:'media',





ingredientes:[



{
id:'carne_cerdo',
cantidad:1,
unidad:'kg'
},



{
id:'chile_guajillo',
cantidad:6,
unidad:'pieza'
},



{
id:'chile_ancho',
cantidad:2,
unidad:'pieza'
},



{
id:'achiote',
cantidad:0.080,
unidad:'kg'
},



{
id:'ajo',
cantidad:4,
unidad:'pieza'
},



{
id:'vinagre_blanco',
cantidad:0.100,
unidad:'litro'
},



{
id:'pina',
cantidad:0.300,
unidad:'kg'
},



{
id:'tortilla_maiz',
cantidad:20,
unidad:'pieza'
},



{
id:'cebolla_blanca',
cantidad:0.150,
unidad:'kg'
},



{
id:'cilantro',
cantidad:0.050,
unidad:'kg'
},



{
id:'limon',
cantidad:6,
unidad:'pieza'
},



{
id:'sal',
cantidad:0.010,
unidad:'kg'
}


],




// 🎓 FORMACIÓN CHEF LUNA


aprendizajes:[


'preparación de marinados',


'manejo de chiles secos',


'equilibrio ácido-dulce-picante',


'cocción de proteínas',


'construcción de tacos mexicanos'


],





pasos:[



{

numero:1,


titulo:'Prepara los chiles secos',


descripcion:
'Limpia los chiles guajillo y ancho retirando semillas y venas. Después hidrátalos en agua caliente hasta suavizarlos.',


tiempo:
'15 minutos',


consejo:
'El chile debe aportar aroma y profundidad, no solamente picante.',


porQue:
'Los chiles secos contienen sabores concentrados que forman la identidad del adobo.',


mensajeChef:
'Un chef aprende a despertar el sabor antes de cocinar.',


señalCorrecta:
'Los chiles están suaves y tienen aroma intenso.',


errorEvitar:
'Quemar los chiles porque pueden aportar amargor.'


},




{

numero:2,


titulo:'Construye el adobo al pastor',


descripcion:
'Licúa los chiles hidratados con ajo, achiote, vinagre y sal hasta obtener una mezcla uniforme.',


tiempo:
'15 minutos',


consejo:
'Busca equilibrio: el adobo debe tener aroma, color y profundidad.',


porQue:
'El adobo es la base que define el carácter del taco.',


mensajeChef:
'Antes del fuego existe una etapa donde se crea la identidad del plato.',


señalCorrecta:
'El adobo tiene color rojo intenso y textura uniforme.',


errorEvitar:
'Hacer un adobo demasiado ácido o salado.'


},




{

numero:3,


titulo:'Marina la carne',


descripcion:
'Cubre la carne con el adobo y deja reposar para que absorba todos los sabores.',


tiempo:
'2 horas mínimo',


consejo:
'El tiempo trabaja a favor del cocinero.',


porQue:
'El marinado permite que los sabores penetren en la proteína.',


mensajeChef:
'La paciencia también cocina.',


señalCorrecta:
'La carne está completamente cubierta por el adobo.',


errorEvitar:
'Cocinar inmediatamente sin permitir integración de sabores.'


},




{

numero:4,


titulo:'Cocina buscando el dorado',


descripcion:
'Cocina la carne a fuego alto hasta obtener zonas doradas y ligeramente caramelizadas.',


tiempo:
'20 minutos',


consejo:
'El color dorado significa sabor desarrollado.',


porQue:
'La reacción de Maillard crea aromas y sabores más complejos.',


mensajeChef:
'El fuego bien controlado convierte ingredientes simples en algo extraordinario.',


señalCorrecta:
'La carne está jugosa con bordes dorados.',


errorEvitar:
'Cocinar demasiado y secar la carne.'


},




{

numero:5,


titulo:'Prepara los tacos',


descripcion:
'Calienta las tortillas y coloca la carne con cebolla, cilantro, piña y limón.',


tiempo:
'10 minutos',


consejo:
'El taco necesita contraste entre intensidad y frescura.',


porQue:
'Los acompañamientos equilibran la grasa, especias y sabor de la carne.',


mensajeChef:
'Un gran taco es equilibrio en una pequeña porción.',


señalCorrecta:
'El taco tiene buena proporción entre tortilla, carne y complementos.',


errorEvitar:
'Excederse con ingredientes y esconder el sabor principal.'


}


],





// 🌎 HISTORIA CHEF LUNA


historiaChef:
'Los tacos al pastor nacieron de la mezcla cultural y la adaptación de técnicas de cocción de carne marinada. Con ingredientes mexicanos como el chile, achiote y tortilla se transformaron en uno de los símbolos gastronómicos del país.',




trucoChef:
'Agregar la piña al final conserva mejor su frescura y aporta contraste con la carne especiada.',




tip:
'El adobo sobrante puede utilizarse para marinar pollo, verduras o preparar nuevas versiones del platillo.',





sustituciones:[



{
falta:'carne de cerdo',

reemplazo:
'pollo, setas o proteína vegetal marinada'
},



{
falta:'achiote',

reemplazo:
'mezcla de chiles secos con especias'
}


],





chefInicio:
'Hoy aprenderás que un taco memorable no nace solamente de la carne, sino del equilibrio entre ingredientes, técnica y tiempo.',




chefFinal:
'Excelente trabajo. Ahora conoces una técnica fundamental de la cocina mexicana: crear sabor antes de encender el fuego.',





erroresComunes:[


'No dejar marinar suficiente tiempo.',


'Quemar el adobo.',


'No buscar caramelización en la carne.',


'Usar tortillas frías.'


],





señalesExito:{



vista:
'Carne roja dorada con tacos bien montados y acompañamientos frescos.',



olor:
'Aroma de chile, especias, carne asada y piña.',



textura:
'Carne jugosa con bordes ligeramente caramelizados y tortilla suave.'


},





rescates:[



{
problema:
'La carne quedó seca',


solucion:
'Agregar un poco de caldo o salsa y controlar mejor la cocción en futuras preparaciones.'
},



{
problema:
'El adobo quedó muy fuerte',


solucion:
'Equilibrar con más carne o ajustar con ingredientes suaves.'
}


],





tags:[



'mexicana',


'tacos',


'callejera',


'marinado',


'tradicional'


],





popularidad:100,



};