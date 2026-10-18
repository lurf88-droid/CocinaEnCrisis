import type { Receta } from '@/types/receta';


export const PICADAS_VERACRUZANAS: Receta = {


id:'picadas-veracruzanas',


titulo:'Picadas veracruzanas',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/veracruz/picadas-veracruzanas.webp'
),



descripcion:

'Antojito tradicional veracruzano preparado con masa de maíz gruesa, salsa, manteca, cebolla y queso. Un desayuno lleno de identidad que representa la cocina cotidiana del Sotavento Veracruzano.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Sotavento Veracruzano',

estadoOrigen:'Veracruz',

tradicion:'cocina veracruzana tradicional basada en masa de maíz, salsa, manteca y queso'

},


tecnicaPrincipal:

'formado de masa, pellizcado tradicional y equilibrio de salsa',



// 🎯 CLASIFICACIÓN

categoria:'desayuno',

rolCulinario: 'plato_principal',
porciones:4,


tiempoMinutos:35,


dificultad:'media',


nivelChef:2,



// 🧺 INGREDIENTES


ingredientes:[


{

id:'masa_maiz',

cantidad:0.600,

unidad:'kg'

},


{

id:'manteca_cerdo',

cantidad:0.080,

unidad:'kg'

},


{

id:'salsa_roja_veracruzana',

cantidad:0.400,

unidad:'kg'

},


{

id:'cebolla_blanca',

cantidad:0.100,

unidad:'kg'

},


{

id:'queso_fresco',

cantidad:0.150,

unidad:'kg'

},


{

id:'sal',

cantidad:0.008,

unidad:'kg'

}


],



// 🎓 FORMACIÓN CHEF LUNA


aprendizajes:[

'trabajo correcto de masa de maíz',

'control de humedad y textura',

'importancia del pellizcado tradicional',

'equilibrio entre masa, salsa y grasa',

'identidad regional de la cocina veracruzana'

],



// 👨‍🍳 PASOS


pasos:[


{

numero:1,

titulo:'Prepara la masa de maíz',

descripcion:

'Ajusta la masa agregando un poco de agua si es necesario hasta obtener una textura suave, húmeda y fácil de trabajar.',

tiempo:'8 minutos',

consejo:

'La masa debe sentirse flexible, no seca ni pegajosa.',

porQue:

'Una buena masa determina la textura final de la picada.',

mensajeChef:

'La cocina mexicana comienza con aprender a escuchar la masa.',

objetivo:

'Conseguir una masa lista para formar las picadas.',

nivelImportancia:'clave',

señalCorrecta:

'La masa puede formar una bolita sin romperse.',

errorEvitar:

'Usar masa demasiado seca porque se abrirá al cocinar.'

},



{

numero:2,

titulo:'Forma las picadas tradicionales',

descripcion:

'Forma discos gruesos de masa y cocina en comal. Cuando estén firmes, pellizca las orillas para crear el borde característico.',

tiempo:'12 minutos',

consejo:

'El pellizcado debe hacerse cuando la masa todavía está caliente para evitar que se rompa.',

porQue:

'La orilla levantada permite contener la salsa y es la característica principal del platillo.',

mensajeChef:

'La técnica convierte una tortilla en una preparación con identidad.',

objetivo:

'Crear la forma tradicional de la picada veracruzana.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué las picadas tienen la orilla pellizcada?',

respuestaEsperada:

'Para formar un borde que retenga la salsa y mantener su identidad tradicional.',

señalCorrecta:

'La picada tiene borde marcado y superficie firme.',

errorEvitar:

'Hacerlas demasiado delgadas porque pierden su característica.'

},



{

numero:3,

titulo:'Agrega la manteca y la salsa',

descripcion:

'Unta una pequeña cantidad de manteca sobre la picada caliente y agrega salsa roja veracruzana encima.',

tiempo:'5 minutos',

consejo:

'No exageres con la grasa; debe complementar el sabor de la masa.',

porQue:

'La manteca aporta profundidad y la salsa agrega humedad y sabor.',

mensajeChef:

'El equilibrio es lo que transforma una receta sencilla.',

objetivo:

'Construir las capas tradicionales de sabor.',

nivelImportancia:'clave',

señalCorrecta:

'La salsa cubre la superficie sin escurrir demasiado.',

errorEvitar:

'Agregar demasiada salsa y perder la textura de la masa.'

},



{

numero:4,

titulo:'Termina con cebolla y queso',

descripcion:

'Agrega cebolla picada y queso fresco antes de servir.',

tiempo:'5 minutos',

consejo:

'El queso fresco aporta contraste y la cebolla frescura.',

porQue:

'Los ingredientes finales equilibran grasa, acidez y textura.',

mensajeChef:

'Una receta tradicional se construye capa por capa.',

señalCorrecta:

'La picada tiene contraste entre masa suave, salsa y queso.',

errorEvitar:

'Cargar demasiado la preparación y ocultar el sabor de la masa.'

}

],



// 💡 INFORMACIÓN EXTRA


tip:

'Puedes agregar huevo, pollo o frijoles para convertirla en un desayuno más completo, pero la versión tradicional destaca por su sencillez.',



ahorro:

'La masa de maíz es un ingrediente económico y rendidor que permite alimentar a varias personas con bajo costo.',



errorComun:

'Preparar la masa demasiado seca o no respetar el grosor tradicional.',



tags:[

'veracruz',

'sotavento',

'desayuno_mexicano',

'masa_maiz',

'economica',

'tradicional'

],



tipoComida:'barata',



popularidad:90,



historiaChef:

'Las picadas veracruzanas forman parte de la cocina cotidiana del estado de Veracruz. Representan la importancia del maíz en México y la capacidad de transformar ingredientes sencillos en preparaciones llenas de sabor.',



trucoChef:

'La clave está en la textura de la masa y en no perder el equilibrio entre salsa, grasa y queso.',



ocasion:[

'diario',

'familia',

'crisis'

],



sustituciones:[

{

falta:'manteca de cerdo',

reemplazo:'aceite vegetal'

},


{

falta:'queso fresco',

reemplazo:'queso panela o queso disponible'

},


{

falta:'salsa roja veracruzana',

reemplazo:'salsa roja casera'

}

],



chefInicio:

'Hoy aprenderás que una preparación humilde de maíz puede convertirse en un símbolo de toda una región.',



chefFinal:

'Preparaste una receta veracruzana donde la técnica y la tradición son los ingredientes principales.',



señalesExito:{

vista:

'Picada gruesa con borde pellizcado, salsa encima y queso fresco.',

olor:

'Aroma de maíz caliente, salsa y manteca.',

textura:

'Masa suave por dentro, firme por fuera y salsa integrada.'

},



rescates:[

{

problema:'La masa se rompe al formar',

solucion:'Agrega pequeñas cantidades de agua hasta recuperar elasticidad.'

},


{

problema:'La picada queda seca',

solucion:'Aumenta ligeramente la salsa o reduce el tiempo de cocción.'

},


{

problema:'La salsa domina demasiado',

solucion:'Reduce cantidad y permite que la masa siga siendo protagonista.'

}

]



};