import type { Receta } from '@/types/receta';


export const MEMELAS_OAXAQUENAS: Receta = {


id:'memelas-oaxaquenas',


titulo:'Memelas oaxaqueñas',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/oaxaca/memelas-oaxaquenas.webp'
),


descripcion:

'Preparación tradicional de Oaxaca elaborada con masa de maíz nixtamalizado, asiento de cerdo, frijol negro, salsa y queso regional. Un desayuno representativo de la cocina de comal oaxaqueña.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Valles Centrales de Oaxaca',

estadoOrigen:'Oaxaca',

tradicion:'cocina oaxaqueña de comal'

},


tecnicaPrincipal:

'formado de masa, cocción en comal y construcción de capas de sabor',


nivelChef:3,


categoria:'desayuno',
rolCulinario: 'plato_principal',


porciones:4,


tiempoMinutos:45,


dificultad:'media',



ingredientes:[


{
id:'masa_maiz',
cantidad:0.500,
unidad:'kg'
},


{
id:'asiento_cerdo',
cantidad:0.080,
unidad:'kg'
},


{
id:'frijol_negro',
cantidad:0.300,
unidad:'kg'
},


{
id:'queso_istmo',
cantidad:0.150,
unidad:'kg'
},


{
id:'salsa_roja',
cantidad:0.150,
unidad:'kg'
},


{
id:'cebolla_blanca',
cantidad:0.050,
unidad:'kg'
},


{
id:'sal',
cantidad:0.005,
unidad:'kg'
}

],



aprendizajes:[

'trabajo con masa de maíz',

'técnica tradicional de comal',

'construcción de capas de sabor',

'importancia de ingredientes regionales',

'equilibrio entre grasa, frijol, salsa y queso'

],



pasos:[


{

numero:1,

titulo:'Prepara la masa',

descripcion:

'Divide la masa de maíz en porciones iguales y forma pequeñas piezas ovaladas ligeramente gruesas.',

tiempo:'10 minutos',

consejo:

'Mantén la masa húmeda para evitar grietas durante el formado.',

porQue:

'La forma y grosor permiten que la memela tenga buena textura después de cocinarse.',

mensajeChef:

'La masa mexicana guarda siglos de conocimiento.',

objetivo:

'Crear una base uniforme para la preparación.',

nivelImportancia:

'clave',

señalCorrecta:

'Las piezas tienen grosor parejo y no presentan grietas.',

errorEvitar:

'Dejar la masa seca porque se puede romper.'

},



{

numero:2,

titulo:'Cocina en el comal',

descripcion:

'Coloca las memelas sobre un comal caliente y cocina por ambos lados hasta que tengan una ligera firmeza.',

tiempo:'10 minutos',

consejo:

'El comal debe estar caliente pero sin quemar la superficie.',

porQue:

'La cocción desarrolla aromas del maíz y crea la textura característica.',

mensajeChef:

'El comal es una herramienta que transmite tradición.',

objetivo:

'Crear una base cocida pero flexible.',

nivelImportancia:

'critico',

señalCorrecta:

'La memela tiene puntos dorados y conserva humedad interior.',

errorEvitar:

'Cocinar con fuego demasiado alto y quemar el maíz.'

},



{

numero:3,

titulo:'Agrega el asiento y frijol',

descripcion:

'Unta una capa ligera de asiento de cerdo y después agrega frijol negro sobre la superficie de la memela.',

tiempo:'8 minutos',

consejo:

'Las capas deben complementar, no cubrir completamente el sabor del maíz.',

porQue:

'El orden de los ingredientes construye profundidad de sabor.',

mensajeChef:

'La cocina tradicional también tiene técnica.',

objetivo:

'Crear la base característica de la memela oaxaqueña.',

nivelImportancia:

'clave',

chefPregunta:

'¿Por qué no ponemos todos los ingredientes juntos desde el inicio?',

respuestaEsperada:

'Porque cada ingrediente necesita aportar su sabor y textura.',

señalCorrecta:

'La capa de frijol está uniforme.',

errorEvitar:

'Agregar demasiado asiento y volver pesada la preparación.'

},



{

numero:4,

titulo:'Finaliza con salsa y queso',

descripcion:

'Agrega salsa roja y termina con queso del Istmo desmenuzado y cebolla blanca.',

tiempo:'7 minutos',

consejo:

'Busca equilibrio entre picante, salado y cremoso.',

porQue:

'Los complementos terminan de construir la identidad del plato.',

mensajeChef:

'Los ingredientes regionales cuentan una historia.',

objetivo:

'Completar la memela tradicional.',

nivelImportancia:

'critico',

señalCorrecta:

'Los ingredientes están distribuidos y la memela conserva su estructura.',

errorEvitar:

'Excederse con salsa y perder la textura del maíz.'

},



{

numero:5,

titulo:'Sirve caliente',

descripcion:

'Sirve inmediatamente para disfrutar el contraste entre la masa caliente, frijol, salsa y queso.',

tiempo:'5 minutos',

consejo:

'Las preparaciones de comal se disfrutan recién hechas.',

porQue:

'La temperatura influye en aroma y textura.',

mensajeChef:

'Hoy no preparaste solo un desayuno, preparaste una región de México.',

señalCorrecta:

'La memela está caliente, aromática y equilibrada.',

errorEvitar:

'Dejar enfriar demasiado antes de servir.'

}

],



tip:

'Puedes preparar varias memelas y calentarlas nuevamente en comal para conservar mejor su textura.',



ahorro:

'La masa y el frijol permiten crear un desayuno nutritivo y rendidor usando ingredientes accesibles.',



errorComun:

'Usar demasiado asiento o salsa y perder el equilibrio entre los ingredientes.',



tags:[

'oaxaca',

'desayuno_mexicano',

'maiz',

'tradicional'

],



tipoComida:'llenadora',


popularidad:92,



historiaChef:

'Las memelas forman parte de la cocina de comal oaxaqueña. Su base de maíz, frijol y salsas representa la importancia de los ingredientes originarios de México y la transmisión de técnicas tradicionales.',



trucoChef:

'El secreto está en una buena masa y en respetar cada capa de sabor.',



momento:

'diario',



ocasion:[

'diario',

'familia'

],



sustituciones:[

{

falta:'queso_istmo',

reemplazo:'queso fresco o queso regional disponible'

}

],



chefInicio:

'Hoy viajaremos a Oaxaca para aprender cómo una masa sencilla puede convertirse en un desayuno lleno de identidad.',



chefFinal:

'Has aprendido una preparación donde la técnica del comal transforma ingredientes básicos en cultura.',



señalesExito:{

vista:

'Memela ovalada con capas visibles de frijol, salsa y queso.',

olor:

'Aroma de maíz cocido, asiento y chile.',

textura:

'Exterior firme con interior suave y húmedo.'

},



rescates:[

{

problema:'La memela quedó seca',

solucion:

'Revisa la humedad de la masa y evita sobrecocinar en el comal.'

},

{

problema:'Quedó demasiado grasosa',

solucion:

'Reduce la cantidad de asiento y equilibra con más frijol o salsa.'

}

]


};