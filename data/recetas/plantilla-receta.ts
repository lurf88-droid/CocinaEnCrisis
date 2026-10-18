import type { Receta } from '@/types/receta';

export const NUEVA_RECETA: Receta = {


id:'',


titulo:'',


imagen:'',


descripcion:'',


// 🌎 Identidad culinaria

cocina:'',

tecnicaPrincipal:'',

nivelChef:1,


categoria:'comida',


// 👥 Datos receta

porciones:2,

tiempoMinutos:30,

dificultad:'facil',


ingredientes:[],


pasos:[],



// 🧠 Enseñanza Chef Luna

historiaChef:'',

trucoChef:'',

chefInicio:'',

chefFinal:'',
tip:'',

aprendizajes:[
''
],


// 🔥 Inteligencia

sustituciones:[],


erroresComunes:[],


rescates:[],



// 👁️ Evaluación

señalesExito:{

vista:'',

olor:'',

textura:''

},



// 🏷️ Descubrimiento

tags:[],

popularidad:0,


};