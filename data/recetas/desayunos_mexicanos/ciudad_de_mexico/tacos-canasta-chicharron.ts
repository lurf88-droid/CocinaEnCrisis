import type { Receta } from '@/types/receta';


export const TACOS_CANASTA_CHICHARRON: Receta = {


id:'tacos-canasta-chicharron-cdmx',


titulo:'Tacos de canasta de chicharrón estilo CDMX',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/ciudad_de_mexico/tacos-canasta-chicharron.webp'
),


descripcion:

'Tacos tradicionales de canasta preparados con tortilla de maíz y relleno de chicharrón prensado. Un desayuno callejero chilango reconocido por su sabor, economía y tradición urbana.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Ciudad de México',

estadoOrigen:'Ciudad de México',

tradicion:'comida callejera chilanga preparada en canasta y popularizada por vendedores ambulantes'

},


tecnicaPrincipal:

'preparación de relleno, armado de tacos, bañado con aceite y reposo para integrar sabores',



// 🎯 CLASIFICACIÓN

categoria:'desayuno',


porciones:4,


tiempoMinutos:45,


dificultad:'media',


nivelChef:2,



// 🧺 INGREDIENTES


ingredientes:[


{

id:'tortilla_maiz',

cantidad:16,

unidad:'pieza'

},


{

id:'chicharron_prensado',

cantidad:0.400,

unidad:'kg'

},


{

id:'aceite_vegetal',

cantidad:0.100,

unidad:'litro'

},


{

id:'sal',

cantidad:0.008,

unidad:'kg'

}

],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'control de rellenos para tacos tradicionales',

'técnica de tacos sudados',

'aprovechamiento de ingredientes económicos',

'importancia de la comida callejera mexicana',

'identidad gastronómica de la Ciudad de México'

],



// 👨‍🍳 PASOS


pasos:[


{

numero:1,

titulo:'Prepara el chicharrón',

descripcion:

'Calienta el chicharrón prensado y ajusta su textura hasta obtener un relleno suave y fácil de colocar dentro de la tortilla.',

tiempo:'10 minutos',

consejo:

'El relleno debe estar húmedo pero no líquido.',

porQue:

'Una buena textura evita que el taco se rompa.',

mensajeChef:

'Los grandes antojitos dependen de controlar detalles pequeños.',

objetivo:

'Crear un relleno uniforme.',

nivelImportancia:'clave',

señalCorrecta:

'El chicharrón tiene textura suave y sabor concentrado.',

errorEvitar:

'Usar relleno demasiado seco.'

},



{

numero:2,

titulo:'Arma los tacos',

descripcion:

'Calienta las tortillas ligeramente, coloca el relleno y dobla formando los tacos.',

tiempo:'15 minutos',

consejo:

'No coloques demasiado relleno para mantener la forma.',

porQue:

'El tamaño uniforme permite una mejor integración de sabores.',

mensajeChef:

'La comida callejera también tiene técnica.',

objetivo:

'Crear tacos resistentes y uniformes.',

nivelImportancia:'clave',

señalCorrecta:

'Los tacos permanecen cerrados.',

errorEvitar:

'Usar tortillas frías porque pueden romperse.'

},



{

numero:3,

titulo:'Prepara el baño de aceite',

descripcion:

'Calienta ligeramente aceite y úsalo para humectar los tacos antes del reposo.',

tiempo:'5 minutos',

consejo:

'No debe estar excesivamente caliente; buscamos integrar sabor.',

porQue:

'El aceite ayuda a crear la textura característica del taco de canasta.',

mensajeChef:

'La técnica transforma una tortilla sencilla.',

objetivo:

'Conseguir tacos suaves y jugosos.',

nivelImportancia:'critico',

señalCorrecta:

'Los tacos tienen textura suave y aroma agradable.',

errorEvitar:

'Freír completamente como un taco dorado.'

},



{

numero:4,

titulo:'Deja reposar en canasta',

descripcion:

'Coloca los tacos juntos y deja que el vapor y el calor integren las texturas.',

tiempo:'15 minutos',

consejo:

'El reposo es parte de la identidad del taco de canasta.',

porQue:

'La humedad permite que los sabores se mezclen.',

mensajeChef:

'La paciencia también cocina.',

objetivo:

'Lograr la textura tradicional.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué se llaman tacos de canasta?',

respuestaEsperada:

'Porque tradicionalmente se transportan y reposan dentro de una canasta cubierta.',

señalCorrecta:

'La tortilla está suave y el relleno integrado.',

errorEvitar:

'Servir inmediatamente sin permitir reposo.'

},



{

numero:5,

titulo:'Sirve los tacos',

descripcion:

'Sirve calientes y acompaña con salsa disponible al gusto.',

tiempo:'5 minutos',

consejo:

'La sencillez es parte del encanto de esta preparación.',

porQue:

'Los tacos de canasta destacan por su practicidad.',

mensajeChef:

'La cocina popular también es patrimonio.',

señalCorrecta:

'El taco está suave, lleno y bien formado.',

errorEvitar:

'Agregar demasiados elementos y perder su esencia.'

}

],



tip:

'Los tacos de canasta son conocidos por su textura suave y por mejorar después de un tiempo de reposo dentro de la canasta.',


ahorro:

'Es una preparación económica y de alto rendimiento ideal para venta o alimentación diaria.',


errorComun:

'Confundirlos con tacos dorados; su característica principal es que son suaves y sudados.',



tags:[

'ciudad_de_mexico',

'cdmx',

'tacos_de_canasta',

'callejero',

'economico',

'tradicional'

],



tipoComida:'barata',


popularidad:98,



historiaChef:

'Los tacos de canasta forman parte de la identidad urbana de la Ciudad de México. Su venta en bicicleta y su preparación práctica los convirtieron en uno de los símbolos de la comida popular mexicana.',



trucoChef:

'El reposo después de armarlos es fundamental para lograr la textura característica.',



ocasion:[

'diario',


],



sustituciones:[

{

falta:'chicharron_prensado',

reemplazo:'papa o frijol'

}

],



chefInicio:

'Hoy vamos a preparar uno de los desayunos callejeros más representativos de la Ciudad de México.',



chefFinal:

'Preparaste una receta donde la tradición, economía y técnica se encuentran en un solo taco.',



señalesExito:{

vista:

'Tacos pequeños, uniformes y suaves.',

olor:

'Aroma de tortilla, aceite y chicharrón.',

textura:

'Tortilla suave con relleno jugoso.'

},



rescates:[

{

problema:'Los tacos quedaron secos',

solucion:'Ajusta humedad del relleno antes de armarlos.'

},


{

problema:'La tortilla se rompe',

solucion:'Calienta ligeramente las tortillas antes de rellenar.'

}

]


};