import type { Receta } from '@/types/receta';


export const BOCOLES_VERACRUZANOS: Receta = {


id:'bocoles-veracruzanos',


titulo:'Bocoles veracruzanos',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/veracruz/bocoles-veracruzanos.webp'
),


descripcion:

'Preparación tradicional de la Huasteca Veracruzana elaborada con masa de maíz, manteca y rellenos como frijol o queso. Un desayuno sencillo, nutritivo y lleno de identidad regional.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',





identidadRegional:{

region:'Huasteca Veracruzana',

estadoOrigen:'Veracruz',

tradicion:'cocina huasteca tradicional basada en maíz, frijol, manteca y cocción al comal'

},


tecnicaPrincipal:

'formado de masa rellena, cocción al comal y equilibrio entre textura y relleno',



// 🎯 CLASIFICACIÓN

categoria:'desayuno',
rolCulinario: 'plato_principal',

porciones:4,


tiempoMinutos:40,


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

id:'frijol_negro',

cantidad:0.300,

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

'técnica de cocción al comal',

'equilibrio entre grasa, masa y relleno',

'identidad gastronómica de la Huasteca Veracruzana'

],



// 👨‍🍳 PASOS


pasos:[


{

numero:1,

titulo:'Prepara el relleno de frijol',

descripcion:

'Calienta los frijoles negros cocidos y machácalos hasta obtener una pasta espesa que pueda integrarse dentro del bocol.',

tiempo:'10 minutos',

consejo:

'El relleno debe estar espeso para evitar que salga durante la cocción.',

porQue:

'Un relleno con buena textura mantiene la estructura del bocol.',

mensajeChef:

'La técnica está en controlar la humedad.',

objetivo:

'Crear un relleno firme y sabroso.',

nivelImportancia:'clave',

señalCorrecta:

'El frijol tiene textura cremosa pero consistente.',

errorEvitar:

'Usar frijoles demasiado líquidos.'

},



{

numero:2,

titulo:'Prepara la masa de maíz',

descripcion:

'Amasa la masa de maíz con la manteca y una pizca de sal hasta obtener una textura suave y manejable.',

tiempo:'8 minutos',

consejo:

'La masa debe sentirse húmeda y flexible, no seca.',

porQue:

'La manteca aporta suavidad y sabor tradicional.',

mensajeChef:

'El maíz es la base de muchas historias culinarias mexicanas.',

objetivo:

'Conseguir una masa lista para formar.',

nivelImportancia:'critico',

señalCorrecta:

'La masa puede moldearse sin agrietarse.',

errorEvitar:

'Trabajar una masa seca porque se romperá.'

},



{

numero:3,

titulo:'Forma los bocoles',

descripcion:

'Forma discos pequeños y gruesos de masa. Coloca relleno de frijol en el centro, cierra y aplana ligeramente.',

tiempo:'10 minutos',

consejo:

'No agregues demasiado relleno; debe quedar bien sellado.',

porQue:

'La forma correcta permite una cocción uniforme.',

mensajeChef:

'La mano del cocinero también es una herramienta.',

objetivo:

'Crear bocoles compactos y uniformes.',

nivelImportancia:'clave',

chefPregunta:

'¿Por qué el bocol debe ser más grueso que una tortilla?',

respuestaEsperada:

'Porque necesita contener relleno y conservar una textura suave.',

señalCorrecta:

'El bocol mantiene su forma antes de cocinar.',

errorEvitar:

'Hacerlos demasiado delgados porque se rompen.'

},



{

numero:4,

titulo:'Cocina al comal',

descripcion:

'Cocina los bocoles en un comal caliente hasta que estén cocidos y ligeramente dorados por ambos lados.',

tiempo:'12 minutos',

consejo:

'El fuego medio permite cocinar el interior sin quemar el exterior.',

porQue:

'El comal desarrolla aromas y sabores característicos.',

mensajeChef:

'El fuego tradicional también es una técnica.',

objetivo:

'Lograr una superficie dorada y un interior suave.',

nivelImportancia:'critico',

señalCorrecta:

'Presenta manchas doradas y aroma tostado.',

errorEvitar:

'Usar fuego demasiado alto porque quedará crudo por dentro.'

},



{

numero:5,

titulo:'Termina y sirve',

descripcion:

'Abre ligeramente el bocol y agrega queso fresco o acompaña con salsa si está disponible.',

tiempo:'5 minutos',

consejo:

'Los acompañamientos deben complementar, no cubrir el sabor del maíz.',

porQue:

'La cocina tradicional busca equilibrio.',

mensajeChef:

'Los ingredientes humildes pueden tener una gran historia.',

señalCorrecta:

'El bocol tiene contraste entre masa suave, frijol y queso.',

errorEvitar:

'Agregar demasiados acompañamientos y perder la identidad original.'

}

],



// 💡 INFORMACIÓN EXTRA


tip:

'Los bocoles pueden prepararse con diferentes rellenos como frijol, queso, huevo o carne, dependiendo de la región y disponibilidad.',


ahorro:

'Es una receta económica porque utiliza como base ingredientes accesibles como maíz y frijol.',


errorComun:

'Usar demasiado relleno o cocinar con fuego muy alto.',



tags:[

'veracruz',

'huasteca',

'desayuno_mexicano',

'maiz',

'frijol',

'economica',

'tradicional'

],



tipoComida:'barata',


popularidad:90,



historiaChef:

'Los bocoles forman parte de la identidad culinaria de la Huasteca. Son una muestra de cómo el maíz continúa siendo protagonista en la alimentación mexicana desde tiempos ancestrales.',



trucoChef:

'Dejar reposar la masa unos minutos antes de formar ayuda a mejorar la textura final.',



ocasion:[

'diario',

'familia',



],



sustituciones:[

{

falta:'frijol negro',

reemplazo:'frijol bayo o frijol pinto'

},


{

falta:'manteca de cerdo',

reemplazo:'aceite vegetal'

},


{

falta:'queso fresco',

reemplazo:'queso panela'

}

],



chefInicio:

'Hoy vamos a conocer un desayuno donde el maíz y el frijol cuentan la historia de la Huasteca Veracruzana.',



chefFinal:

'Preparaste un platillo tradicional donde la técnica del comal transforma ingredientes sencillos.',



señalesExito:{

vista:

'Bocol redondo, ligeramente dorado y con relleno integrado.',

olor:

'Aroma de maíz tostado y frijol cocinado.',

textura:

'Exterior firme, interior suave y húmedo.'

},



rescates:[

{

problema:'La masa se abre',

solucion:'Agrega un poco de humedad y reduce la cantidad de relleno.'

},


{

problema:'Quedaron secos',

solucion:'Reduce el tiempo de cocción o aumenta ligeramente la manteca.'

}

]


};