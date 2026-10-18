import type { Receta } from '@/types/receta';


export const POZOLE_ROJO: Receta = {


id:'pozole-rojo',


titulo:'Pozole rojo tradicional',


imagen: require(
'../../../assets/images/recetas/pozole-rojo.webp'
),


descripcion:
'Un platillo mexicano de celebración donde el maíz pozolero, la carne y una salsa de chiles secos crean un caldo profundo lleno de tradición. Una receta perfecta para aprender fondos, cocciones largas y equilibrio de sabores.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


tecnicaPrincipal:
'caldo base, cocción larga y salsa de chiles secos',


nivelChef:3,



categoria:'comida',
rolCulinario: 'plato_principal',



porciones:8,


tiempoMinutos:180,


dificultad:'media',



ingredientes:[


{
id:'maiz_pozolero',
cantidad:1,
unidad:'kg'
},


{
id:'carne_cerdo',
cantidad:1.5,
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
id:'oregano_seco',
cantidad:0.010,
unidad:'kg'
},


{
id:'lechuga',
cantidad:0.300,
unidad:'kg'
},


{
id:'rabano',
cantidad:0.200,
unidad:'kg'
},


{
id:'limon',
cantidad:8,
unidad:'pieza'
},


{
id:'sal',
cantidad:0.020,
unidad:'kg'
}


],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'preparación de fondos',

'cocción larga',

'manejo de chiles secos',

'equilibrio de sabores',

'terminación de platos tradicionales'

],



pasos:[


{

numero:1,

titulo:'Prepara el maíz y la carne',

descripcion:
'Lava el maíz pozolero y prepara la carne de cerdo en trozos medianos. Coloca ambos elementos en una olla amplia con agua, ajo y cebolla.',

tiempo:'15 minutos',

consejo:
'Una olla grande permite que los ingredientes tengan espacio para cocinarse correctamente.',

porQue:
'El inicio del caldo define la profundidad de sabor de toda la receta.',

mensajeChef:
'Los grandes platos empiezan construyendo una buena base.',

señalCorrecta:
'El caldo comienza limpio y los ingredientes están cubiertos de agua.',

errorEvitar:
'Cocinar con poca agua porque el caldo pierde concentración.'
},



{

numero:2,

titulo:'Construye el caldo lentamente',

descripcion:
'Cocina a fuego medio-bajo retirando impurezas que aparezcan en la superficie hasta que la carne esté suave.',

tiempo:'120 minutos',

consejo:
'Un buen caldo necesita tiempo, no velocidad.',

porQue:
'La cocción lenta permite extraer sabores y suavizar la carne.',

mensajeChef:
'La paciencia también es una herramienta de cocina.',

señalCorrecta:
'La carne comienza a separarse fácilmente.',

errorEvitar:
'Hervir demasiado fuerte y obtener un caldo turbio.'
},



{

numero:3,

titulo:'Prepara la salsa roja',

descripcion:
'Limpia los chiles guajillo, hidrátalos en agua caliente y licúalos con ajo y cebolla. Después cuela la salsa.',

tiempo:'25 minutos',

consejo:
'Colar la salsa crea una textura más elegante y tradicional.',

porQue:
'Retirar pieles y fibras permite obtener un caldo más limpio.',

mensajeChef:
'La técnica convierte ingredientes simples en algo especial.',

señalCorrecta:
'La salsa tiene color rojo intenso y textura uniforme.',

errorEvitar:
'Quemar los chiles porque aportarán amargor.'
},



{

numero:4,

titulo:'Integra la salsa al pozole',

descripcion:
'Agrega la salsa roja al caldo y cocina hasta que el maíz tome el color y sabor característico del pozole.',

tiempo:'30 minutos',

consejo:
'Deja que los sabores se unan antes de servir.',

porQue:
'La integración final permite que cada ingrediente forme parte del mismo plato.',

mensajeChef:
'Una receta no es una suma de ingredientes, es una unión de historias.',

señalCorrecta:
'El caldo tiene color rojo uniforme y aroma profundo.',

errorEvitar:
'Servir inmediatamente sin permitir integración.'
},



{

numero:5,

titulo:'Prepara la experiencia final',

descripcion:
'Sirve caliente y acompaña con lechuga, rábano, cebolla, orégano y limón.',

tiempo:'10 minutos',

consejo:
'Las guarniciones aportan frescura y contraste.',

porQue:
'Un plato completo necesita equilibrio entre intensidad y frescura.',

mensajeChef:
'El último detalle también cuenta.',

señalCorrecta:
'El plato tiene colores, aromas y texturas diferentes.',

errorEvitar:
'Agregar demasiadas guarniciones y perder la identidad del pozole.'
}


],



historiaChef:
'El pozole es una preparación mexicana con raíces prehispánicas. Su evolución a través del tiempo lo convirtió en uno de los platos más importantes de reuniones y celebraciones.',



trucoChef:
'Preparar el pozole con anticipación puede mejorar su sabor porque los ingredientes siguen integrándose.',



tip:
'El caldo sobrante puede convertirse en base para otras preparaciones.',



sustituciones:[


{
falta:'carne de cerdo',

reemplazo:'pollo o setas para una versión diferente'
},


{
falta:'chile guajillo',

reemplazo:'mezcla de chiles secos disponibles'
}


],



chefInicio:
'Hoy aprenderás una de las bases más importantes de la cocina: construir sabor desde un caldo.',



chefFinal:
'Excelente trabajo. Ahora entiendes que algunas recetas no se apresuran; se construyen con tiempo, técnica y paciencia.',



erroresComunes:[

'No retirar impurezas del caldo.',

'Quemar los chiles secos.',

'No dejar integrar los sabores finales.'

],



señalesExito:{


vista:
'El caldo debe tener un color rojo uniforme y maíz abierto.',


olor:
'Debe recordar a chile cocido, carne y especias mexicanas.',


textura:
'La carne debe estar suave y el maíz tierno.'


},



rescates:[


{
problema:'El caldo quedó muy fuerte',

solucion:'Agrega un poco de agua caliente y ajusta sal.'
},


{
problema:'La salsa quedó amarga',

solucion:'Equilibra agregando más caldo y ajustando ingredientes.'
}


],



tags:[

'mexicana',

'pozole',

'tradicional',

'caldo',

'celebracion'

],



popularidad:100,


};