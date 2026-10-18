import type { Receta } from '@/types/receta';



export const BARBACOA_MEXICANA: Receta = {


id:'barbacoa-mexicana',



titulo:'Barbacoa mexicana tradicional',



imagen: require(
'../../../assets/images/recetas/barbacoa-mexicana.webp'
),



descripcion:
'Una preparación tradicional mexicana basada en carne cocida lentamente con adobo de chiles secos y aromáticos. La barbacoa representa una de las técnicas más antiguas donde el tiempo, la humedad y el calor transforman completamente la carne.',




// 🌎 IDENTIDAD CULINARIA


cocina:'mexicana',



tecnicaPrincipal:
'cocción lenta, vapor y preparación tradicional',



nivelChef:4,





categoria:'comida',
rolCulinario: 'plato_principal',




porciones:8,



tiempoMinutos:360,



dificultad:'avanzada',





ingredientes:[



{
id:'carne_borrego',
cantidad:2,
unidad:'kg'
},



{
id:'chile_guajillo',
cantidad:8,
unidad:'pieza'
},



{
id:'ajo',
cantidad:5,
unidad:'pieza'
},



{
id:'cebolla_blanca',
cantidad:0.200,
unidad:'kg'
},



{
id:'laurel',
cantidad:3,
unidad:'pieza'
},



{
  id:'oregano_seco',
  cantidad:0.010,
  unidad:'kg'
},



{
id:'hoja_maguey',
cantidad:6,
unidad:'pieza'
},



{
id:'garbanzo',
cantidad:0.300,
unidad:'kg'
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


'cocciones prolongadas',


'uso de hojas naturales',


'control de humedad',


'preparación de consomés',


'técnicas tradicionales mexicanas'


],





pasos:[



{

numero:1,


titulo:'Prepara el adobo tradicional',


descripcion:
'Limpia los chiles guajillo retirando semillas y venas. Hidrátalos y licúalos con ajo, especias y aromáticos hasta obtener una salsa profunda.',


tiempo:'25 minutos',


consejo:
'El adobo debe tener aroma y equilibrio antes de cocinar.',


porQue:
'Los chiles secos aportan color, profundidad y personalidad al platillo.',


mensajeChef:
'El sabor comienza mucho antes de encender el fuego.',


señalCorrecta:
'El adobo tiene color intenso y aroma especiado.',


errorEvitar:
'Quemar los chiles porque generan amargor.'


},




{

numero:2,


titulo:'Marina la carne',


descripcion:
'Cubre la carne completamente con el adobo preparado y deja reposar para integrar sabores.',


tiempo:'2 horas',


consejo:
'Una buena marinada necesita tiempo.',


porQue:
'La carne absorbe aromas y desarrolla mayor profundidad.',


mensajeChef:
'La paciencia también forma parte de la receta.',


señalCorrecta:
'La carne está cubierta uniformemente.',


errorEvitar:
'Cocinar la carne sin permitir reposo.'


},




{

numero:3,


titulo:'Prepara la cocción tradicional',


descripcion:
'Coloca la carne con hojas naturales y aromáticos creando un ambiente húmedo para la cocción lenta.',


tiempo:'4 a 6 horas',


consejo:
'La barbacoa no se acelera. Se respeta.',


porQue:
'La humedad y el tiempo permiten suavizar las fibras de la carne.',


mensajeChef:
'El calor transforma, pero el tiempo perfecciona.',


señalCorrecta:
'La carne comienza a separarse fácilmente.',


errorEvitar:
'Usar temperaturas demasiado altas.'


},




{

numero:4,


titulo:'Construye el consomé',


descripcion:
'Aprovecha los jugos de cocción para crear un caldo profundo acompañado con garbanzos y aromáticos.',


tiempo:'30 minutos',


consejo:
'El consomé es parte esencial de la experiencia.',


porQue:
'Los líquidos de cocción concentran todo el sabor desarrollado durante horas.',


mensajeChef:
'Nada se desperdicia cuando entiendes la cocina.',


señalCorrecta:
'El caldo tiene aroma intenso y cuerpo.',


errorEvitar:
'Desechar los jugos de cocción.'


},




{

numero:5,


titulo:'Sirve la barbacoa',


descripcion:
'Sirve la carne en tortillas calientes acompañada con cebolla, cilantro, limón y consomé.',


tiempo:'10 minutos',


consejo:
'La presentación tradicional también cuenta una historia.',


porQue:
'Los acompañamientos equilibran la intensidad de la carne.',


mensajeChef:
'Un plato tradicional conecta generaciones.',


señalCorrecta:
'Carne suave, consomé caliente y acompañamientos frescos.',


errorEvitar:
'Perder la temperatura del servicio.'


}


],





historiaChef:
'La barbacoa mexicana representa una de las técnicas tradicionales más importantes del país. Su preparación demuestra cómo el calor, la humedad y el tiempo pueden transformar ingredientes sencillos en una experiencia gastronómica profunda.',




trucoChef:
'Dejar reposar la carne después de la cocción permite que los jugos se distribuyan nuevamente.',





tip:
'El consomé puede utilizarse como base para otros guisos y sopas.',





sustituciones:[



{
falta:'carne de borrego',

reemplazo:'res o cabra adaptando tiempos de cocción'
},



{
falta:'hoja de maguey',

reemplazo:'hojas disponibles para conservar humedad'
}


],





chefInicio:
'Hoy aprenderás una de las mayores lecciones de la cocina tradicional: algunas recetas necesitan tiempo para revelar todo su sabor.',





chefFinal:
'Excelente trabajo. Ahora conoces una técnica donde paciencia, tradición y control del fuego crean un platillo único.',





erroresComunes:[


'No respetar el tiempo de cocción.',


'Secar la carne por exceso de temperatura.',


'Perder humedad durante el proceso.',


'No equilibrar el adobo.'


],





señalesExito:{



vista:
'Carne suave con color profundo acompañada de consomé.',



olor:
'Aroma de chiles secos, hierbas y cocción lenta.',



textura:
'Carne tierna que se separa fácilmente.'


},





rescates:[



{
problema:'La carne quedó dura',

solucion:
'Continúa la cocción lentamente hasta que las fibras se suavicen.'
},



{
problema:'El adobo quedó intenso',

solucion:
'Ajusta con caldo y equilibra sabores durante la cocción.'
}


],





tags:[


'mexicana',


'barbacoa',


'tradicional',


'consome',


'coccion-lenta'


],





popularidad:100,



};