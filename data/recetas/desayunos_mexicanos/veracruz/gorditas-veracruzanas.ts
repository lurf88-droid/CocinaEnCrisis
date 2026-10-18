import type { Receta } from '@/types/receta';


export const GORDITAS_VERACRUZANAS: Receta = {


id:'gorditas-veracruzanas',


titulo:'Gorditas veracruzanas',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/veracruz/gorditas-veracruzanas.webp'
),


descripcion:

'Desayuno tradicional veracruzano preparado con masa de maíz gruesa, relleno de frijol y terminado con queso fresco. Una receta económica, llenadora y representativa de la cocina casera mexicana.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Veracruz',

estadoOrigen:'Veracruz',

tradicion:'cocina veracruzana tradicional basada en masa de maíz, rellenos caseros y cocción al comal'

},


tecnicaPrincipal:

'formado de masa gruesa, relleno tradicional y cocción al comal',



// 🎯 CLASIFICACIÓN

categoria:'desayuno',
rolCulinario: 'plato_principal',

porciones:4,


tiempoMinutos:35,


dificultad:'facil',


nivelChef:1,



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

'control de textura de la masa',

'técnica de relleno sin romper la preparación',

'importancia del comal en la cocina mexicana',

'equilibrio entre maíz, frijol y queso',

'aprovechamiento de ingredientes económicos'

],



// 👨‍🍳 PASOS

pasos:[


{

numero:1,

titulo:'Prepara el relleno de frijol',

descripcion:

'Calienta los frijoles negros y machácalos hasta obtener una pasta espesa que pueda utilizarse como relleno.',

tiempo:'8 minutos',

consejo:

'El relleno debe estar seco para evitar que la gordita se abra.',

porQue:

'Una buena consistencia permite mantener la estructura durante la cocción.',

mensajeChef:

'La técnica está en controlar la humedad.',

objetivo:

'Crear un relleno firme y sabroso.',

nivelImportancia:'clave',

señalCorrecta:

'El frijol puede manejarse con una cuchara sin escurrir.',

errorEvitar:

'Usar frijoles demasiado líquidos.'

},



{

numero:2,

titulo:'Prepara la masa',

descripcion:

'Mezcla la masa de maíz con manteca y sal hasta obtener una textura suave y manejable.',

tiempo:'7 minutos',

consejo:

'La masa debe sentirse húmeda y flexible.',

porQue:

'La manteca aporta suavidad y sabor tradicional.',

mensajeChef:

'El maíz es la base de la cocina mexicana.',

objetivo:

'Conseguir una masa lista para trabajar.',

nivelImportancia:'clave',

señalCorrecta:

'La masa no presenta grietas al formar una bola.',

errorEvitar:

'Trabajar con masa seca.'

},



{

numero:3,

titulo:'Forma y rellena las gorditas',

descripcion:

'Forma discos gruesos de masa, coloca frijol en el centro, cierra y aplana ligeramente.',

tiempo:'10 minutos',

consejo:

'No coloques demasiado relleno porque puede romperse.',

porQue:

'El grosor permite que la gordita conserve una textura suave.',

mensajeChef:

'La mano del cocinero transforma ingredientes sencillos.',

objetivo:

'Crear una gordita uniforme y resistente.',

nivelImportancia:'critico',

chefPregunta:

'¿Por qué una gordita debe ser más gruesa que una tortilla?',

respuestaEsperada:

'Porque necesita contener relleno y mantener una textura más sustanciosa.',

señalCorrecta:

'La gordita mantiene su forma antes de cocinar.',

errorEvitar:

'Hacerla demasiado delgada.'

},



{

numero:4,

titulo:'Cocina en comal',

descripcion:

'Cocina las gorditas a fuego medio hasta que estén ligeramente doradas y cocidas por dentro.',

tiempo:'10 minutos',

consejo:

'El fuego medio permite cocinar el interior sin quemar la superficie.',

porQue:

'El comal desarrolla aromas y textura característica.',

mensajeChef:

'El fuego también es un ingrediente.',

objetivo:

'Lograr una cocción uniforme.',

nivelImportancia:'critico',

señalCorrecta:

'Presenta manchas doradas y aroma de maíz tostado.',

errorEvitar:

'Usar fuego alto y dejar el interior crudo.'

},



{

numero:5,

titulo:'Termina y sirve',

descripcion:

'Abre ligeramente la gordita y agrega queso fresco antes de servir.',

tiempo:'5 minutos',

consejo:

'Los acompañamientos deben respetar el sabor principal.',

porQue:

'El queso aporta frescura y contraste.',

mensajeChef:

'Una receta sencilla también puede tener equilibrio.',

señalCorrecta:

'La gordita tiene masa suave, frijol cremoso y queso fresco.',

errorEvitar:

'Agregar demasiados ingredientes y perder identidad.'

}

],



// 💡 INFORMACIÓN EXTRA

tip:

'Puedes prepararlas también con otros rellenos tradicionales como queso, huevo o chicharrón según disponibilidad.',


ahorro:

'La combinación de maíz y frijol proporciona una comida completa con bajo costo.',


errorComun:

'Usar demasiado relleno o cocinar con temperatura incorrecta.',



tags:[

'veracruz',

'desayuno_mexicano',

'masa',

'frijol',

'economica',

'tradicional'

],



tipoComida:'barata',


popularidad:88,



historiaChef:

'Las gorditas representan la cocina cotidiana mexicana: transformar ingredientes básicos como maíz y frijol en alimentos completos y llenadores. En Veracruz forman parte de los desayunos y preparaciones caseras tradicionales.',



trucoChef:

'Dejar reposar la masa unos minutos antes de formar mejora la textura final.',



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

'Hoy vamos a convertir ingredientes humildes en un desayuno lleno de tradición veracruzana.',



chefFinal:

'Preparaste una receta donde el maíz demuestra por qué es la base de la cocina mexicana.',



señalesExito:{

vista:

'Gordita dorada, gruesa y con relleno visible.',

olor:

'Aroma de maíz tostado y frijol.',

textura:

'Exterior firme e interior suave.'

},



rescates:[

{

problema:'La gordita se abre',

solucion:'Reduce relleno y mejora el sellado de la masa.'

},


{

problema:'Quedó seca',

solucion:'Aumenta ligeramente la grasa o reduce cocción.'

}

]


};