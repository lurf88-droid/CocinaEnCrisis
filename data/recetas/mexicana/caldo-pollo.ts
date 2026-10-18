import type { Receta } from '@/types/receta';


export const CALDO_POLLO: Receta = {


id:'caldo-pollo',


titulo:'Caldo de pollo mexicano',


imagen: require(
'../../../assets/images/recetas/caldo-de-pollo.webp'
),


descripcion:
'Un clásico de la cocina mexicana basado en un caldo profundo, pollo suave y verduras frescas. Una receta que enseña los fundamentos de los fondos, la paciencia y la extracción de sabor.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


tecnicaPrincipal:
'construcción de fondo, cocción lenta y extracción de sabor',


nivelChef:2,



categoria:'comida',



porciones:6,


tiempoMinutos:120,


dificultad:'media',



ingredientes:[


{
id:'pollo_entero',
cantidad:1,
unidad:'kg'
},


{
id:'zanahoria',
cantidad:0.300,
unidad:'kg'
},


{
id:'calabaza_italiana',
cantidad:0.300,
unidad:'kg'
},


{
id:'papa',
cantidad:0.300,
unidad:'kg'
},


{
id:'chayote',
cantidad:1,
unidad:'pieza'
},


{
id:'cebolla_blanca',
cantidad:0.150,
unidad:'kg'
},


{
id:'ajo',
cantidad:3,
unidad:'pieza'
},


{
id:'cilantro',
cantidad:0.050,
unidad:'kg'
},


{
id:'sal',
cantidad:0.015,
unidad:'kg'
},


{
id:'limon',
cantidad:4,
unidad:'pieza'
}


],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'preparación de fondos',

'extracción de sabor',

'control de tiempos de cocción',

'uso de vegetales aromáticos',

'equilibrio de sazón'

],



pasos:[


{

numero:1,

titulo:'Prepara y organiza los ingredientes',

descripcion:
'Lava el pollo y las verduras. Corta los vegetales en tamaños similares para lograr una cocción uniforme.',

tiempo:'15 minutos',

consejo:
'La organización es una herramienta del cocinero profesional.',

porQue:
'Tener todo listo permite controlar mejor cada etapa de la receta.',

mensajeChef:
'Antes del fuego existe una parte invisible llamada preparación.',

señalCorrecta:
'Todos los ingredientes están limpios y listos para cocinar.',

errorEvitar:
'Empezar la cocción sin tener los ingredientes preparados.'

},



{

numero:2,

titulo:'Construye el fondo del caldo',

descripcion:
'Coloca el pollo en una olla con agua fría, cebolla y ajo. Cocina lentamente retirando la espuma que aparece en la superficie.',

tiempo:'60 minutos',

consejo:
'El caldo no debe hervir agresivamente; necesita una cocción tranquila.',

porQue:
'La temperatura moderada permite extraer sabor y mantener un caldo limpio.',

mensajeChef:
'La paciencia también es una técnica culinaria.',

señalCorrecta:
'El caldo comienza a tomar aroma profundo y apariencia limpia.',

errorEvitar:
'Cocinar a fuego demasiado alto y obtener un caldo turbio.'

},



{

numero:3,

titulo:'Integra las verduras',

descripcion:
'Agrega las verduras considerando sus tiempos de cocción para que todas lleguen al punto correcto.',

tiempo:'25 minutos',

consejo:
'No todos los ingredientes necesitan el mismo tiempo.',

porQue:
'Cada vegetal tiene una estructura diferente y responde distinto al calor.',

mensajeChef:
'Un buen cocinero aprende a respetar el ingrediente.',

señalCorrecta:
'Las verduras están suaves pero conservan su forma.',

errorEvitar:
'Agregar todas las verduras al mismo tiempo.'

},



{

numero:4,

titulo:'Ajusta el sabor final',

descripcion:
'Agrega cilantro y corrige la sal al final de la cocción.',

tiempo:'5 minutos',

consejo:
'El sazón se construye poco a poco.',

porQue:
'Agregar sal al final permite controlar mejor la concentración del caldo.',

mensajeChef:
'El equilibrio nace de pequeños ajustes.',

señalCorrecta:
'El caldo tiene sabor completo sin dominar ningún ingrediente.',

errorEvitar:
'Corregir con demasiada sal de golpe.'

},



{

numero:5,

titulo:'Sirve como plato completo',

descripcion:
'Sirve caliente acompañado de limón, tortillas, chile o arroz según la tradición mexicana.',

tiempo:'5 minutos',

consejo:
'Los acompañamientos convierten una receta en una experiencia.',

porQue:
'Permiten adaptar el plato al gusto de cada persona.',

mensajeChef:
'La cocina también es compartir.',

señalCorrecta:
'El plato tiene caldo caliente, proteína y verduras equilibradas.',

errorEvitar:
'Servir sin cuidar temperatura y presentación.'

}

],



// 🌎 HISTORIA

historiaChef:
'El caldo de pollo mexicano representa una de las expresiones más importantes de la cocina casera. Es una preparación relacionada con cuidado, familia y recuperación.',



trucoChef:
'Retirar la espuma durante la primera cocción ayuda a conseguir un caldo más limpio.',



tip:
'Puedes aprovechar el caldo sobrante como base para arroz, sopas o guisos.',



// 🔄 SUSTITUCIONES

sustituciones:[


{
falta:'pollo',

reemplazo:'verduras, hongos o carne disponible'
},


{
falta:'chayote',

reemplazo:'otra verdura firme de temporada'
},


{
falta:'cilantro',

reemplazo:'perejil u otra hierba fresca'
}


],



chefInicio:
'Hoy aprenderás una de las bases más importantes de cualquier cocina: construir sabor desde un buen fondo.',



chefFinal:
'Excelente trabajo. Ahora entiendes que un caldo sencillo puede tener técnica, historia y profundidad.',



erroresComunes:[

'Usar fuego demasiado alto.',

'No retirar impurezas del caldo.',

'Cocinar demasiado las verduras.',

'Agregar demasiada sal al inicio.'

],



señalesExito:{


vista:
'Caldo limpio con verduras completas y pollo suave.',


olor:
'Aroma profundo de pollo, vegetales y hierbas frescas.',


textura:
'Carne tierna y verduras cocidas pero firmes.'

},



rescates:[


{
problema:'El caldo quedó sin mucho sabor',

solucion:
'Continúa la cocción unos minutos más y ajusta sal poco a poco.'
},


{
problema:'Las verduras quedaron demasiado suaves',

solucion:
'En futuras preparaciones agrégalas más tarde según su tiempo de cocción.'
}


],



tags:[

'mexicana',

'caldo',

'familia',

'economica',

'base-chef'

],



popularidad:98,


};