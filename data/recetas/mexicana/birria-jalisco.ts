import type { Receta } from '@/types/receta';



export const BIRRIA_JALISCO: Receta = {



id:'birria-jalisco',



titulo:'Birria estilo Jalisco',



imagen: require(
'../../../assets/images/recetas/birria-jalisco.webp'
),



descripcion:
'Una preparación tradicional mexicana basada en carne cocida lentamente dentro de un adobo de chiles secos y especias. La birria enseña cómo el tiempo, la paciencia y la técnica pueden transformar ingredientes sencillos en un platillo lleno de profundidad.',





// 🌎 IDENTIDAD CULINARIA


cocina:'mexicana',



tecnicaPrincipal:
'adobo, cocción lenta y preparación de consomé',



nivelChef:4,





categoria:'comida',
rolCulinario: 'plato_principal',





porciones:8,



tiempoMinutos:240,



dificultad:'avanzada',





ingredientes:[



{
id:'carne_res',
cantidad:2,
unidad:'kg'
},



{
id:'chile_guajillo',
cantidad:8,
unidad:'pieza'
},



{
id:'chile_ancho',
cantidad:4,
unidad:'pieza'
},



{
id:'chile_pasilla',
cantidad:3,
unidad:'pieza'
},



{
id:'ajo',
cantidad:6,
unidad:'pieza'
},



{
id:'cebolla_blanca',
cantidad:0.200,
unidad:'kg'
},



{
id:'vinagre',
cantidad:0.100,
unidad:'litro'
},



{
id:'comino',
cantidad:0.005,
unidad:'kg'
},



{
id:'clavo',
cantidad:4,
unidad:'pieza'
},



{
id:'canela',
cantidad:1,
unidad:'pieza'
},



{
  id:'oregano_seco',
  cantidad:0.010,
  unidad:'kg'
},



{
id:'tortilla_maiz',
cantidad:20,
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


'uso de chiles secos',


'construcción de adobos complejos',


'cocción prolongada de proteínas',


'equilibrio de especias',


'preparación de consomés'


],





pasos:[



{

numero:1,


titulo:'Prepara los chiles secos',


descripcion:
'Limpia los chiles retirando semillas y venas. Después hidrátalos en agua caliente hasta que estén suaves.',


tiempo:'15 minutos',


consejo:
'El chile debe aportar aroma y profundidad, no solamente picante.',


porQue:
'Los chiles secos contienen sabores concentrados que forman la identidad del adobo.',


mensajeChef:
'Un gran platillo comienza entendiendo sus ingredientes.',


señalCorrecta:
'Los chiles están suaves, flexibles y aromáticos.',


errorEvitar:
'Quemar los chiles porque aportan amargor.'


},




{

numero:2,


titulo:'Construye el adobo de birria',


descripcion:
'Licúa los chiles hidratados con ajo, vinagre y especias hasta obtener una salsa uniforme.',


tiempo:'20 minutos',


consejo:
'Busca equilibrio entre picante, aroma y acidez.',


porQue:
'El adobo será la personalidad principal del platillo.',


mensajeChef:
'Antes del fuego se construye la identidad del sabor.',


señalCorrecta:
'El adobo tiene color rojo intenso y textura uniforme.',


errorEvitar:
'Agregar demasiada especia sin equilibrio.'


},




{

numero:3,


titulo:'Marina la carne',


descripcion:
'Cubre completamente la carne con el adobo y deja reposar para que absorba los sabores.',


tiempo:'4 horas mínimo',


consejo:
'El tiempo permite que la carne desarrolle mayor profundidad.',


porQue:
'El marinado modifica aroma, sabor y textura.',


mensajeChef:
'La paciencia también es una técnica culinaria.',


señalCorrecta:
'La carne está cubierta completamente por el adobo.',


errorEvitar:
'Cocinar inmediatamente sin dejar integrar sabores.'


},




{

numero:4,


titulo:'Cocina lentamente la birria',


descripcion:
'Cocina la carne a fuego bajo hasta que esté suave y el caldo tenga un sabor profundo.',


tiempo:'3 horas',


consejo:
'No intentes acelerar esta etapa. La birria necesita tiempo.',


porQue:
'La cocción lenta transforma las fibras de la carne y desarrolla el consomé.',


mensajeChef:
'El tiempo es uno de los ingredientes más importantes de la cocina.',


señalCorrecta:
'La carne se separa fácilmente y el caldo tiene cuerpo.',


errorEvitar:
'Usar fuego demasiado alto para terminar rápido.'


},




{

numero:5,


titulo:'Termina y sirve la experiencia',


descripcion:
'Sirve la carne con tortillas calientes, cebolla, cilantro, limón y acompaña con el consomé.',


tiempo:'10 minutos',


consejo:
'La presentación también forma parte del sabor.',


porQue:
'Los acompañamientos crean contraste y completan la experiencia.',


mensajeChef:
'Un plato tradicional también cuenta una historia.',


señalCorrecta:
'Debe tener carne jugosa, consomé aromático y acompañamientos frescos.',


errorEvitar:
'Servir sin cuidar temperatura y presentación.'


}


],





// 🌎 HISTORIA CHEF LUNA


historiaChef:
'La birria es una preparación tradicional de Jalisco que combina técnicas de adobo y cocción lenta. Con el paso del tiempo se convirtió en uno de los símbolos gastronómicos más reconocidos de México.',





trucoChef:
'Dejar reposar la birria después de cocinar permite que los sabores del adobo se integren todavía más.',





tip:
'El consomé sobrante puede utilizarse como base para otras preparaciones.',





sustituciones:[



{
falta:'carne de res',

reemplazo:'borrego, cerdo o pollo'
},



{
falta:'chiles tradicionales',

reemplazo:'mezcla de chiles secos disponibles'
}


],





chefInicio:
'Hoy aprenderás que una gran receta no siempre depende de ingredientes caros, sino de técnica, tiempo y paciencia.',





chefFinal:
'Excelente trabajo. Ahora conoces una de las técnicas más importantes de la cocina mexicana: transformar una proteína mediante un buen adobo.',





erroresComunes:[


'Quemar los chiles del adobo.',


'No respetar el tiempo de cocción.',


'No equilibrar las especias.',


'Perder concentración del consomé.'


],





señalesExito:{



vista:
'Carne suave bañada con un consomé rojo profundo.',



olor:
'Aroma de chiles secos, especias y carne cocida lentamente.',



textura:
'Carne tierna que se separa fácilmente.'


},





rescates:[



{
problema:'La birria quedó sin suficiente sabor',


solucion:
'Reduce un poco más el consomé y ajusta especias poco a poco.'
},



{
problema:'La carne quedó dura',


solucion:
'Continúa la cocción a fuego bajo hasta que las fibras se suavicen.'
}


],





tags:[


'mexicana',


'birria',


'jalisco',


'consome',


'coccion-lenta'


],





popularidad:100,



};