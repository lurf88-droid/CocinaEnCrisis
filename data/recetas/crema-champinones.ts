import type { Receta } from '@/types/receta';


export const CREMA_CHAMPINONES: Receta = {

id:'crema-champinones',

titulo:'Crema de champiñones',

imagen:
require('../../assets/images/recetas/crema-champinones.webp'),


descripcion:
'Una crema elegante y reconfortante que demuestra que ingredientes sencillos pueden convertirse en un platillo especial cuando aplicas técnica y paciencia.',


categoria:'comida',


porciones:4,


tiempoMinutos:45,


dificultad:'media',



ingredientes:[

{
 id:'champiñon',
 cantidad:0.5,
 unidad:'kg'
},

{
 id:'mantequilla',
 cantidad:0.05,
 unidad:'kg'
},

{
 id:'cebolla_blanca',
 cantidad:0.1,
 unidad:'kg'
},

{
 id:'ajo',
 cantidad:0.01,
 unidad:'kg'
},

{
 id:'leche_entera',
 cantidad:0.5,
 unidad:'litro'
},

{
 id:'crema',
 cantidad:0.2,
 unidad:'litro'
},

{
 id:'pimienta_negra',
 cantidad:0.001,
 unidad:'kg'
},

{
 id:'tomillo',
 cantidad:0.001,
 unidad:'kg'
},

],



pasos:[


{
numero:1,

titulo:'Prepara tus ingredientes',

descripcion:
'Limpia los champiñones con cuidado, corta la cebolla finamente y prepara el ajo. Ten todos los ingredientes listos antes de comenzar.',

tiempo:'10 minutos',

consejo:
'La organización es una técnica de chef. Tener todo preparado te permite concentrarte en el sabor.',

porQue:
'La cocina profesional trabaja con una estación preparada porque evita errores y mejora el control de los tiempos.',

mensajeChef:
'Antes de cocinar, un chef observa y prepara. La paciencia comienza desde aquí.',

señalCorrecta:
'Todos los ingredientes están listos y separados antes de encender el fuego.',

errorEvitar:
'Empezar a cocinar y después detenerte a buscar ingredientes.'

},



{
numero:2,

titulo:'Construye la base de sabor',

descripcion:
'Calienta la mantequilla a fuego medio. Agrega la cebolla y cocina hasta que esté transparente. Añade el ajo durante unos segundos.',

tiempo:'8 minutos',

consejo:
'No apresures la cebolla. Ella será parte importante del sabor final.',

porQue:
'La cocción lenta permite liberar aromas y crear una base más profunda.',

mensajeChef:
'Los grandes sabores muchas veces empiezan con algo tan sencillo como una cebolla bien cocinada.',

señalCorrecta:
'La cebolla está suave y tiene un aroma dulce, no quemado.',

errorEvitar:
'Usar fuego alto y quemar el ajo.'

},



{
numero:3,

titulo:'Dora los champiñones',

descripcion:
'Agrega los champiñones y cocina hasta que reduzcan su tamaño y pierdan parte de su agua natural.',

tiempo:'12 minutos',

consejo:
'Deja que los champiñones tengan contacto con el sartén para desarrollar sabor.',

porQue:
'El dorado concentra sabores y crea notas más intensas.',

mensajeChef:
'Aquí ocurre la transformación. Un ingrediente sencillo empieza a volverse especial.',

señalCorrecta:
'Los champiñones tienen color ligeramente dorado y aroma intenso.',

errorEvitar:
'Llenar demasiado el sartén porque los champiñones pueden hervirse en lugar de dorarse.',

objetivo:
'Desarrollar profundidad de sabor antes de crear la crema.',

nivelImportancia:
'critico',

chefPregunta:
'¿Por qué doramos los champiñones antes de licuarlos?',

respuestaEsperada:
'Porque el dorado concentra sabores y mejora el resultado final.'

},



{
numero:4,

titulo:'Forma la crema',

descripcion:
'Agrega leche y parte de la preparación al sartén. Licúa hasta obtener una textura suave y regresa al fuego.',

tiempo:'10 minutos',

consejo:
'Ajusta la textura poco a poco. Un chef controla la consistencia.',

porQue:
'La cantidad de líquido define si la crema queda ligera o espesa.',

mensajeChef:
'La textura también cuenta una historia. Aprende a observarla.',

señalCorrecta:
'La crema cubre ligeramente la cuchara y tiene textura uniforme.',

errorEvitar:
'Agregar demasiado líquido sin probar la consistencia.'

},



{
numero:5,

titulo:'Finaliza y equilibra sabores',

descripcion:
'Agrega crema, pimienta y tomillo. Ajusta sal y deja cocinar unos minutos más.',

tiempo:'5 minutos',

consejo:
'Los condimentos deben acompañar al ingrediente principal, no esconderlo.',

porQue:
'El equilibrio entre grasa, aroma y sal crea una preparación más completa.',

mensajeChef:
'Un buen chef no busca complicar, busca equilibrar.',

señalCorrecta:
'La crema tiene aroma a champiñón, textura suave y sabor equilibrado.',

errorEvitar:
'Exceso de pimienta o condimentos que tapen el sabor del champiñón.'

}

],



tip:
'Puedes reservar algunos champiñones dorados para decorar y agregar textura al servir.',


ahorro:
'Si no tienes crema, puedes aumentar la leche y usar un poco más de mantequilla para mantener suavidad.',


errorComun:
'Licuar sin desarrollar primero el sabor de los ingredientes. La técnica importa más que la cantidad.',






tags:[
'chef',
'francesa',
'cremosa',
'aprendizaje',
'gourmet'
],



historiaChef:
'Las cremas son una muestra de cómo la cocina transforma ingredientes simples en experiencias reconfortantes.',



trucoChef:
'El secreto está en dorar bien los champiñones antes de convertirlos en crema.',



chefInicio:
'Hoy aprenderás una técnica fundamental: crear sabor antes de crear textura. Una crema excelente empieza mucho antes de usar la licuadora.',



chefFinal:
'Excelente trabajo. Acabas de aprender que la cocina no depende de ingredientes caros, sino de entender cómo transformar cada ingrediente.',



señalesExito:{

vista:
'Color crema uniforme con pequeños detalles de champiñón.',

olor:
'Aroma profundo de mantequilla, ajo y champiñones.',

textura:
'Suave, cremosa y con cuerpo, sin sentirse aguada.'

}

};