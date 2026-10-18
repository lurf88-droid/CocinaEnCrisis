import type { Receta } from '@/types/receta';


export const ENMOLADAS_OAXAQUENAS_MOLE_NEGRO_HUEVO: Receta = {


id:'enmoladas-oaxaquenas-mole-negro-huevo',


titulo:'Enmoladas oaxaqueñas de mole negro con huevo',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/oaxaca/enmoladas-oaxaquenas-mole-negro-huevo.webp'
),


descripcion:

'Desayuno oaxaqueño de tortillas de maíz bañadas en mole negro, acompañadas con huevo, queso fresco, crema, cebolla y ajonjolí. El carácter profundo del mole contrasta con la suavidad del huevo y convierte ingredientes cotidianos en un desayuno abundante con identidad regional.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Valles Centrales de Oaxaca',

estadoOrigen:'Oaxaca, México',

tradicion:'El mole negro es una de las preparaciones más reconocidas de la cocina oaxaqueña. Su elaboración reúne chiles secos, especias, semillas y otros ingredientes tostados y molidos hasta formar una salsa compleja. Las enmoladas trasladan ese mole a una preparación cotidiana: tortillas de maíz bañadas en salsa y acompañadas con queso, crema, cebolla y proteínas como pollo o huevo.'

},


tecnicaPrincipal:

'Reconstitución y cocción de mole negro, control de consistencia de salsa, calentado de tortillas, cocción del huevo y montaje de tortillas bañadas.',



// 🎯 CLASIFICACIÓN

nivelChef:3,

categoria:'desayuno',
rolCulinario: 'plato_principal',

porciones:4,

tiempoMinutos:40,

dificultad:'media',



// 🧺 INGREDIENTES

ingredientes:[

{

id:'tortilla_maiz',

cantidad:12,

unidad:'pieza'

},

{

id:'mole_negro',

cantidad:0.300,

unidad:'kg'

},

{

id:'caldo_pollo',

cantidad:0.500,

unidad:'litro'

},

{

id:'huevo',

cantidad:4,

unidad:'pieza'

},

{

id:'queso_fresco',

cantidad:0.150,

unidad:'kg'

},

{

id:'crema',

cantidad:0.120,

unidad:'litro'

},

{

id:'cebolla',

cantidad:0.100,

unidad:'kg'

},

{

id:'ajonjoli',

cantidad:0.020,

unidad:'kg'

},

{

id:'aceite_vegetal',

cantidad:0.030,

unidad:'litro'

},

{

id:'sal',

cantidad:0.005,

unidad:'kg'

}

],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'Aprender a controlar la consistencia de un mole para utilizarlo como salsa',

'Comprender por qué un mole concentrado debe diluirse gradualmente',

'Calentar tortillas sin endurecerlas',

'Cocer huevo conservando una yema agradable',

'Equilibrar una salsa intensa con ingredientes frescos y cremosos',

'Reconocer el mole negro como una preparación emblemática de Oaxaca'

],



// 👨‍🍳 PASOS

pasos:[

{

numero:1,

titulo:'Preparar el mole negro',

descripcion:'Coloca el mole negro en una cazuela a fuego bajo y agrega aproximadamente la mitad del caldo de pollo. Mezcla constantemente hasta que la pasta se disuelva y comience a formar una salsa homogénea.',

tiempo:'8 minutos',

consejo:'Agrega el caldo poco a poco y no todo desde el principio.',

porQue:'El mole puede variar mucho de concentración. Incorporar el líquido gradualmente permite controlar su textura y evitar una salsa demasiado ligera.',

mensajeChef:'Una salsa se construye poco a poco. El líquido siempre es más fácil de agregar que de retirar.',

objetivo:'Transformar el mole concentrado en una salsa uniforme.',

nivelImportancia:'clave',

chefPregunta:'¿Por qué agregamos el caldo gradualmente?',

respuestaEsperada:'Para controlar la consistencia del mole y evitar diluirlo demasiado.',

señalCorrecta:'El mole queda completamente integrado, brillante y sin trozos de pasta sin disolver.',

errorEvitar:'Agregar todo el caldo de una sola vez.'

},

{

numero:2,

titulo:'Cocinar y ajustar la salsa',

descripcion:'Cocina el mole a fuego medio-bajo mientras mueves constantemente. Agrega más caldo según sea necesario hasta obtener una salsa que cubra fácilmente una tortilla pero que conserve cuerpo.',

tiempo:'10 minutos',

consejo:'El mole debe caer lentamente del cucharón formando una cinta gruesa.',

porQue:'Una salsa demasiado espesa puede romper las tortillas y una demasiado líquida no permanecerá sobre ellas.',

mensajeChef:'La consistencia correcta es parte esencial del sabor y de la experiencia del plato.',

objetivo:'Conseguir un mole fluido pero suficientemente espeso para envolver las tortillas.',

nivelImportancia:'critico',

chefPregunta:'¿Cómo sabemos que el mole tiene una textura adecuada para enmoladas?',

respuestaEsperada:'Cuando cubre la tortilla fácilmente sin quedar como pasta ni escurrirse como caldo.',

señalCorrecta:'El mole cubre el reverso de una cuchara y cae lentamente.',

errorEvitar:'Dejar hervir fuerte hasta que el mole se pegue o se queme.'

},

{

numero:3,

titulo:'Tostar el ajonjolí',

descripcion:'Coloca el ajonjolí en un comal o sartén seco a fuego bajo. Muévelo constantemente hasta que tome un ligero color dorado y desprenda aroma.',

tiempo:'3 minutos',

consejo:'Retíralo apenas se dore porque continúa tostándose con el calor residual.',

porQue:'El tostado desarrolla aromas a nuez y mejora el contraste aromático con el mole.',

mensajeChef:'Los ingredientes pequeños también pueden cambiar el resultado final.',

objetivo:'Obtener ajonjolí aromático y ligeramente dorado.',

nivelImportancia:'normal',

chefPregunta:'¿Por qué debemos mover constantemente el ajonjolí?',

respuestaEsperada:'Porque se quema rápidamente y necesitamos que se tueste de manera uniforme.',

señalCorrecta:'Los granos están ligeramente dorados y desprenden aroma tostado.',

errorEvitar:'Tostarlo hasta que se vuelva oscuro y amargo.'

},

{

numero:4,

titulo:'Cocinar los huevos',

descripcion:'Calienta una pequeña cantidad de aceite en una sartén y cocina los huevos al gusto. Para esta preparación funciona especialmente bien una clara completamente cocida con la yema todavía ligeramente cremosa.',

tiempo:'6 minutos',

consejo:'Cocina a fuego medio para evitar que la clara se queme antes de que termine de cuajar.',

porQue:'Una yema ligeramente cremosa aporta riqueza y se integra con el mole al momento de comer.',

mensajeChef:'El huevo parece sencillo, pero controlar su temperatura también es técnica.',

objetivo:'Obtener huevos cocidos con clara firme y yema agradable.',

nivelImportancia:'normal',

chefPregunta:'¿Qué ventaja tiene cocinar el huevo a fuego medio en lugar de muy alto?',

respuestaEsperada:'Permite cocinar la clara de manera uniforme sin quemarla.',

señalCorrecta:'La clara está completamente blanca y la yema conserva el punto deseado.',

errorEvitar:'Usar fuego excesivamente alto y quemar los bordes.'

},

{

numero:5,

titulo:'Calentar las tortillas',

descripcion:'Calienta las tortillas sobre un comal durante algunos segundos por cada lado hasta que estén suaves y flexibles.',

tiempo:'4 minutos',

consejo:'No busques tostarlas; únicamente devolverles humedad y flexibilidad.',

porQue:'Una tortilla caliente soporta mejor el contacto con la salsa y puede doblarse sin romperse.',

mensajeChef:'Antes de bañar una tortilla, asegúrate de que vuelva a ser flexible.',

objetivo:'Obtener tortillas calientes y fáciles de manipular.',

nivelImportancia:'clave',

chefPregunta:'¿Por qué no debemos dejar las tortillas crujientes?',

respuestaEsperada:'Porque necesitamos doblarlas después de bañarlas en mole.',

señalCorrecta:'La tortilla se dobla fácilmente sin agrietarse.',

errorEvitar:'Dejar las tortillas demasiado tiempo sobre el comal.'

},

{

numero:6,

titulo:'Bañar las tortillas en mole',

descripcion:'Introduce una tortilla caliente rápidamente en el mole o cúbrela completamente con ayuda de un cucharón. Retírala inmediatamente y colócala en el plato. Repite con las demás tortillas.',

tiempo:'5 minutos',

consejo:'No dejes las tortillas sumergidas durante mucho tiempo.',

porQue:'La tortilla absorbe humedad rápidamente y puede perder estructura si permanece demasiado tiempo dentro de la salsa.',

mensajeChef:'Buscamos que tortilla y mole se unan, no que la tortilla desaparezca dentro de la salsa.',

objetivo:'Cubrir completamente cada tortilla manteniéndola entera.',

nivelImportancia:'critico',

chefPregunta:'¿Qué sucede si dejamos demasiado tiempo la tortilla dentro del mole?',

respuestaEsperada:'Puede absorber demasiada salsa, ablandarse y romperse.',

señalCorrecta:'La tortilla queda completamente cubierta pero conserva su forma.',

errorEvitar:'Dejarla sumergida hasta que comience a deshacerse.'

},

{

numero:7,

titulo:'Doblar y acomodar las enmoladas',

descripcion:'Dobla cada tortilla por la mitad o en tres partes y coloca tres piezas en cada plato. Añade un poco más de mole caliente sobre la superficie.',

tiempo:'3 minutos',

consejo:'Monta el plato mientras todo está caliente para conservar una textura agradable.',

porQue:'El mole se espesa al enfriarse y cambia rápidamente la sensación del platillo.',

mensajeChef:'En platos con salsas densas, el tiempo de servicio también forma parte de la técnica.',

objetivo:'Presentar tortillas cubiertas y acomodadas uniformemente.',

nivelImportancia:'normal',

chefPregunta:'¿Por qué conviene servir las enmoladas inmediatamente?',

respuestaEsperada:'Porque el mole se espesa al enfriarse y las tortillas continúan absorbiendo humedad.',

señalCorrecta:'Las tortillas mantienen su forma y permanecen cubiertas por una capa brillante de mole.',

errorEvitar:'Dejar las enmoladas montadas durante demasiado tiempo antes de servir.'

},

{

numero:8,

titulo:'Terminar con huevo y guarniciones',

descripcion:'Coloca un huevo sobre cada porción. Agrega queso fresco desmoronado, crema, cebolla finamente rebanada y termina con ajonjolí tostado.',

tiempo:'3 minutos',

consejo:'No cubras completamente el mole con crema y queso; deja visible la salsa que identifica el platillo.',

porQue:'El queso, crema y cebolla aportan frescura, acidez, grasa y textura para equilibrar la intensidad del mole negro.',

mensajeChef:'El acabado no está ahí solamente para decorar: cada elemento debe aportar algo al equilibrio del plato.',

objetivo:'Crear un plato equilibrado donde el mole siga siendo protagonista.',

nivelImportancia:'normal',

chefPregunta:'¿Qué función cumplen la crema y el queso frente al mole negro?',

respuestaEsperada:'Aportan cremosidad y suavizan la intensidad del mole.',

señalCorrecta:'El mole sigue siendo visible y el huevo y las guarniciones están distribuidos de manera equilibrada.',

errorEvitar:'Agregar demasiadas guarniciones hasta ocultar completamente el mole.'

}

],



// 💡 INFORMACIÓN EXTRA

tip:

'Cuando prepares mole para enmoladas déjalo ligeramente más fluido que un mole servido con carne. Las tortillas absorben parte de la humedad y la salsa seguirá espesándose mientras permanece caliente.',


ahorro:

'Utiliza mole negro que haya sobrado de otra comida. Con tortillas y huevo puedes transformarlo en un desayuno completo sin necesitar una nueva porción de carne.',


errorComun:

'Utilizar mole demasiado espeso directamente sobre tortillas frías. Esto dificulta cubrirlas y provoca que se rompan al intentar doblarlas.',



tags:[

'oaxaca',

'mole-negro',

'enmoladas',

'huevo',

'tortilla-maiz',

'desayuno-regional',

'valles-centrales',

'cocina-tradicional'

],


tipoComida:'llenadora',


popularidad:94,


historiaChef:

'El mole negro representa una de las expresiones más complejas de la cocina oaxaqueña. Su personalidad nace del tostado, molienda y cocción prolongada de distintos ingredientes que producen una salsa oscura, aromática y profunda. Las enmoladas muestran otra cara de esa tradición: aprovechar el mole dentro de una preparación cotidiana. Una tortilla caliente cubierta con esta salsa puede convertirse en desayuno al acompañarse con huevo, queso, crema y cebolla.',


trucoChef:

'Antes de decidir que tu mole está demasiado líquido, baña una tortilla de prueba. La tortilla absorberá parte de la humedad y puede revelar que la consistencia ya era la correcta.',


momento:'aprender',



ocasion:[

'diario',

'familia',

'especial'

],



sustituciones:[

{

falta:'Huevo',

reemplazo:'Pollo cocido y deshebrado.'

},

{

falta:'Queso fresco',

reemplazo:'Quesillo o queso panela desmoronado.'

},

{

falta:'Crema',

reemplazo:'Puede omitirse o sustituirse por yogur natural sin azúcar.'

},

{

falta:'Caldo de pollo',

reemplazo:'Agua caliente o caldo de verduras.'

},

{

falta:'Ajonjolí',

reemplazo:'Puede omitirse sin afectar la estructura principal de la receta.'

}

],



chefInicio:

'Hoy vamos a trabajar con uno de los sabores más representativos de Oaxaca: el mole negro. Tu verdadero reto será aprender a controlar su consistencia para que pueda abrazar una tortilla sin convertirla en una pasta ni destruirla.',


chefFinal:

'Aprendiste a adaptar un mole concentrado para convertirlo en salsa, controlar su textura, manejar tortillas calientes y equilibrar sabores intensos con ingredientes frescos. Esa capacidad de adaptar una preparación base a distintos platos es una habilidad fundamental en cocina.',



señalesExito:{

vista:'Tortillas completamente cubiertas por mole negro brillante, dobladas sin romperse, acompañadas de huevo, queso blanco, crema, cebolla y ajonjolí tostado.',

olor:'Aroma profundo a mole especiado y tostado, acompañado por maíz caliente y notas suaves de ajonjolí.',

textura:'Tortillas suaves pero enteras, mole cremoso y terso, huevo tierno y contraste entre queso, cebolla y ajonjolí.'

},



rescates:[

{

problema:'El mole quedó demasiado espeso.',

solucion:'Agrega caldo caliente poco a poco mientras mezclas hasta que pueda cubrir fácilmente una tortilla.'

},

{

problema:'El mole quedó demasiado líquido.',

solucion:'Cocínalo a fuego bajo durante algunos minutos mientras mueves hasta que reduzca y recupere cuerpo.'

},

{

problema:'El mole comenzó a pegarse al fondo.',

solucion:'Reduce inmediatamente el fuego, cambia la preparación a otra cazuela sin raspar la parte quemada y ajusta con un poco de caldo.'

},

{

problema:'Las tortillas se rompen al bañarlas.',

solucion:'Caliéntalas primero hasta que estén flexibles y reduce el tiempo que permanecen dentro del mole.'

},

{

problema:'Las enmoladas quedaron secas.',

solucion:'Añade mole caliente ligeramente diluido justo antes de servir.'

},

{

problema:'El mole domina demasiado el plato.',

solucion:'Añade moderadamente queso, crema y cebolla para aportar contraste sin ocultar el sabor principal.'

}

]


};