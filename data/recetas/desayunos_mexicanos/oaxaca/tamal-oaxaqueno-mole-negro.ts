import type { Receta } from '@/types/receta';


export const TAMAL_OAXAQUENO_MOLE_NEGRO: Receta = {


id:'tamal-oaxaqueno-mole-negro',


titulo:'Tamal oaxaqueño de mole negro con pollo',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/oaxaca/tamal-oaxaqueno-mole-negro.webp'
),


descripcion:

'Tamal tradicional oaxaqueño elaborado con masa de maíz suave, manteca, pollo y mole negro, envuelto en hoja de plátano y cocido al vapor. La hoja aporta un aroma vegetal característico mientras el mole negro impregna la masa y el pollo con sabores profundos, tostados y especiados.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Valles Centrales de Oaxaca',

estadoOrigen:'Oaxaca, México',

tradicion:'Los tamales envueltos en hoja de plátano forman parte de la cocina tradicional de Oaxaca y aparecen tanto en desayunos cotidianos como en celebraciones familiares y comunitarias. Una de sus versiones más emblemáticas combina masa de maíz con pollo y mole negro. Durante la cocción al vapor, la hoja de plátano conserva la humedad y aporta un aroma característico que distingue a este tamal de los preparados en hoja de maíz.'

},


tecnicaPrincipal:

'Batido y sazonado de masa de maíz con manteca y caldo, suavizado de hoja de plátano mediante calor, relleno con pollo y mole negro, envoltura y cocción prolongada al vapor.',



// 🎯 CLASIFICACIÓN

nivelChef:4,

categoria:'desayuno',
rolCulinario: 'plato_principal',

porciones:8,

tiempoMinutos:120,

dificultad:'media',



// 🧺 INGREDIENTES

ingredientes:[

{

id:'masa_maiz',

cantidad:1.000,

unidad:'kg'

},

{
id:'pechuga_pollo',
cantidad:0.500,
unidad:'kg'
},

{

id:'mole_negro',

cantidad:0.400,

unidad:'kg'

},

{

id:'manteca_cerdo',

cantidad:0.250,

unidad:'kg'

},

{

id:'caldo_pollo',

cantidad:0.600,

unidad:'litro'

},

{

id:'hoja_platano',

cantidad:8,

unidad:'pieza'

},

{

id:'sal',

cantidad:0.015,

unidad:'kg'

}

],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'Preparar masa para tamal controlando humedad y grasa',

'Aprender por qué la manteca aporta suavidad a la masa',

'Suavizar hoja de plátano mediante calor para poder doblarla',

'Controlar la cantidad de relleno dentro de un tamal',

'Aprender la técnica de cocción al vapor',

'Reconocer cuándo un tamal está completamente cocido',

'Comprender la importancia de la hoja de plátano dentro del tamal oaxaqueño'

],



// 👨‍🍳 PASOS

pasos:[

{

numero:1,

titulo:'Cocer y preparar el pollo',

descripcion:'Cuece el pollo en agua hasta que esté completamente cocido y suave. Retíralo, deja que enfríe ligeramente y deshébralo en piezas medianas. Reserva el caldo de cocción porque lo utilizaremos para hidratar la masa y ajustar el mole.',

tiempo:'25 minutos',

consejo:'No deshebres el pollo demasiado fino. Conviene encontrar pequeños trozos de carne dentro del tamal.',

porQue:'El caldo conserva sabor del pollo y permite hidratar la masa sin utilizar únicamente agua.',

mensajeChef:'En una cocina bien aprovechada, una cocción puede producir más de un ingrediente útil.',

objetivo:'Obtener pollo tierno y caldo con suficiente sabor para continuar la preparación.',

nivelImportancia:'clave',

chefPregunta:'¿Por qué reservamos el caldo del pollo?',

respuestaEsperada:'Porque aporta sabor y humedad a la masa y también puede utilizarse para ajustar el mole.',

señalCorrecta:'El pollo se separa fácilmente y el caldo presenta aroma intenso y limpio.',

errorEvitar:'Desechar el caldo después de cocer el pollo.'

},

{

numero:2,

titulo:'Preparar el mole negro',

descripcion:'Coloca el mole negro en una cazuela y agrega poco a poco parte del caldo caliente. Cocina a fuego bajo mientras mezclas hasta obtener una salsa espesa y uniforme. Para el tamal debe quedar más concentrada que una salsa destinada a enmoladas.',

tiempo:'10 minutos',

consejo:'El relleno necesita mole espeso. Si queda demasiado líquido puede humedecer excesivamente la masa.',

porQue:'Durante la cocción al vapor habrá humedad dentro del tamal, por lo que necesitamos un relleno que conserve estructura.',

mensajeChef:'La misma salsa puede necesitar distintas consistencias dependiendo de cómo la vamos a utilizar.',

objetivo:'Obtener mole negro concentrado y suficientemente espeso para funcionar como relleno.',

nivelImportancia:'critico',

chefPregunta:'¿Por qué el mole de un tamal debe ser más espeso que el de unas enmoladas?',

respuestaEsperada:'Porque debe permanecer dentro de la masa durante la cocción sin aportar exceso de líquido.',

señalCorrecta:'El mole cae lentamente de una cuchara y forma una capa gruesa.',

errorEvitar:'Diluir demasiado el mole.'

},

{

numero:3,

titulo:'Batir la manteca',

descripcion:'Coloca la manteca de cerdo en un recipiente amplio y bátela hasta que se vuelva más ligera, cremosa y ligeramente aireada.',

tiempo:'8 minutos',

consejo:'Trabaja con manteca a temperatura ambiente, no completamente derretida.',

porQue:'Incorporar aire en la grasa ayuda a producir una masa menos compacta después de la cocción.',

mensajeChef:'La textura del tamal comienza mucho antes de entrar a la vaporera.',

objetivo:'Obtener una manteca suave y aireada capaz de integrarse uniformemente con la masa.',

nivelImportancia:'clave',

chefPregunta:'¿Por qué batimos la manteca antes de agregarla a la masa?',

respuestaEsperada:'Para incorporar aire y ayudar a obtener una masa más suave y ligera.',

señalCorrecta:'La manteca se ve cremosa, uniforme y ligeramente más clara.',

errorEvitar:'Utilizar manteca demasiado caliente o completamente líquida.'

},

{

numero:4,

titulo:'Preparar la masa del tamal',

descripcion:'Agrega poco a poco la masa de maíz a la manteca batida mientras mezclas. Incorpora caldo de pollo gradualmente y añade sal. Continúa trabajando hasta obtener una masa suave, húmeda y fácil de extender.',

tiempo:'15 minutos',

consejo:'Agrega el caldo en pequeñas cantidades. La masa debe extenderse con facilidad, pero no debe escurrir.',

porQue:'La humedad controla la textura final del tamal. Una masa demasiado seca queda pesada y una demasiado líquida no mantiene su estructura.',

mensajeChef:'Aprender a sentir una masa con las manos es una habilidad que ninguna cantidad escrita puede sustituir completamente.',

objetivo:'Lograr una masa suave, homogénea y con humedad suficiente.',

nivelImportancia:'critico',

chefPregunta:'¿Cómo reconocemos una masa adecuada para tamal?',

respuestaEsperada:'Debe ser suave, húmeda y fácil de extender sin ser líquida ni pegajosa en exceso.',

señalCorrecta:'La masa puede extenderse sobre una hoja utilizando una cuchara sin romperse ni escurrirse.',

errorEvitar:'Agregar todo el caldo de una sola vez.'

},

{

numero:5,

titulo:'Suavizar las hojas de plátano',

descripcion:'Limpia cuidadosamente las hojas de plátano con un paño húmedo. Pásalas brevemente por un comal caliente o directamente sobre una fuente de calor, moviéndolas constantemente hasta que cambien ligeramente de color y se vuelvan flexibles.',

tiempo:'8 minutos',

consejo:'El objetivo es ablandarlas, no quemarlas.',

porQue:'La hoja fresca puede romperse fácilmente. El calor modifica su estructura y permite doblarla alrededor del tamal.',

mensajeChef:'La envoltura también es ingrediente: aporta aroma, humedad y personalidad.',

objetivo:'Obtener hojas limpias y flexibles que puedan doblarse sin romperse.',

nivelImportancia:'clave',

chefPregunta:'¿Para qué calentamos la hoja de plátano antes de envolver el tamal?',

respuestaEsperada:'Para hacerla flexible y evitar que se rompa al doblarla.',

señalCorrecta:'La hoja cambia a un verde más intenso y puede doblarse con facilidad.',

errorEvitar:'Mantener la hoja demasiado tiempo sobre el fuego hasta quemarla.'

},

{

numero:6,

titulo:'Rellenar los tamales',

descripcion:'Coloca una porción de masa en el centro de cada hoja y extiéndela formando un rectángulo. Añade una cantidad moderada de mole negro y coloca encima pollo deshebrado. Evita llevar el relleno hasta los bordes.',

tiempo:'15 minutos',

consejo:'No sobrecargues los tamales. Necesitas suficiente masa alrededor para contener el relleno.',

porQue:'Durante la cocción la masa aumenta ligeramente de volumen y necesita espacio dentro de la envoltura.',

mensajeChef:'Un buen tamal no es el que tiene más relleno: es el que mantiene equilibrio entre masa, salsa y proteína.',

objetivo:'Distribuir uniformemente masa, mole y pollo.',

nivelImportancia:'critico',

chefPregunta:'¿Qué ocurre cuando colocamos demasiado relleno?',

respuestaEsperada:'El tamal puede cerrar mal y el mole puede salir durante la cocción.',

señalCorrecta:'El relleno queda centrado y existe suficiente masa alrededor para cubrirlo.',

errorEvitar:'Colocar mole o pollo hasta los bordes de la hoja.'

},

{

numero:7,

titulo:'Envolver los tamales',

descripcion:'Dobla primero los lados largos de la hoja hacia el centro, haciendo que la masa rodee el relleno. Después dobla los extremos para formar un paquete rectangular compacto. Coloca los tamales con los dobleces hacia abajo.',

tiempo:'10 minutos',

consejo:'No necesitas apretar excesivamente. La masa necesita un poco de espacio para cocinarse.',

porQue:'Una envoltura correcta mantiene el vapor y la humedad alrededor de la masa mientras evita que el relleno escape.',

mensajeChef:'La forma tradicional del tamal oaxaqueño nace de la manera en que la hoja abraza la masa.',

objetivo:'Formar paquetes cerrados y uniformes.',

nivelImportancia:'clave',

chefPregunta:'¿Por qué no debemos apretar demasiado la hoja?',

respuestaEsperada:'Porque la masa necesita espacio para expandirse ligeramente durante la cocción.',

señalCorrecta:'El tamal mantiene una forma rectangular y la hoja permanece cerrada.',

errorEvitar:'Cerrar tan flojo que el paquete se abra o tan fuerte que comprima la masa.'

},

{

numero:8,

titulo:'Cocer al vapor',

descripcion:'Coloca agua en la parte inferior de una vaporera sin permitir que toque los tamales. Acomoda los paquetes y tapa bien. Cocina al vapor hasta que la masa esté firme y se desprenda fácilmente de la hoja.',

tiempo:'60 minutos',

consejo:'Vigila ocasionalmente el nivel de agua para que la vaporera nunca se quede seca.',

porQue:'El vapor transmite calor de manera uniforme mientras mantiene humedad alrededor del tamal.',

mensajeChef:'En esta etapa no necesitamos fuego agresivo; necesitamos vapor constante y paciencia.',

objetivo:'Cocer completamente la masa sin resecarla.',

nivelImportancia:'critico',

chefPregunta:'¿Cuál es una de las mejores señales de que el tamal ya está cocido?',

respuestaEsperada:'La masa se separa limpiamente de la hoja de plátano.',

señalCorrecta:'Al abrir un tamal de prueba, la masa está firme y se desprende de la hoja sin quedar pegada.',

errorEvitar:'Dejar que se termine el agua de la vaporera durante la cocción.'

},

{

numero:9,

titulo:'Reposar y servir',

descripcion:'Retira los tamales de la vaporera y déjalos reposar entre cinco y diez minutos antes de abrirlos. Sirve calientes directamente en su hoja.',

tiempo:'10 minutos',

consejo:'No abras todos inmediatamente. El breve reposo ayuda a que la masa termine de asentarse.',

porQue:'Al salir de la vaporera la masa todavía contiene mucho vapor y continúa estabilizando su estructura.',

mensajeChef:'A veces el último paso de una receta consiste simplemente en esperar.',

objetivo:'Conseguir un tamal firme pero húmedo y fácil de separar de su hoja.',

nivelImportancia:'normal',

chefPregunta:'¿Por qué conviene dejar reposar el tamal antes de abrirlo?',

respuestaEsperada:'Porque la masa termina de asentarse y adquiere una textura más estable.',

señalCorrecta:'La hoja puede retirarse con facilidad y el tamal conserva su forma.',

errorEvitar:'Abrirlo inmediatamente y confundir una masa todavía muy caliente con una masa cruda.'

}

],



// 💡 INFORMACIÓN EXTRA

tip:

'Antes de cocinar toda la tanda, puedes hacer un pequeño tamal de prueba. Así verificas la sal, humedad de la masa y consistencia del mole antes de comprometer toda la preparación.',


ahorro:

'El tamal es perfecto para aprovechar pollo cocido y mole negro sobrante. También puedes preparar una tanda grande y congelar los tamales ya cocidos individualmente para tener desayunos listos posteriormente.',


errorComun:

'Preparar una masa demasiado seca. Aunque conserve su forma antes de cocinarse, después del vapor puede quedar pesada, quebradiza y absorber demasiado el relleno.',



tags:[

'oaxaca',

'tamal-oaxaqueno',

'mole-negro',

'pollo',

'hoja-platano',

'maiz',

'desayuno-regional',

'cocina-tradicional'

],


tipoComida:'llenadora',


popularidad:97,


historiaChef:

'El tamal es una preparación de raíces mesoamericanas basada en maíz y cocción mediante vapor. En Oaxaca, la hoja de plátano da origen a una presentación especialmente reconocible: un paquete rectangular que conserva humedad y aporta aromas vegetales durante la cocción. Cuando se combina con mole negro y pollo, reúne tres elementos fundamentales de la cocina regional: maíz, mole y técnicas tradicionales transmitidas dentro de familias y comunidades.',


trucoChef:

'Pasa cada hoja de plátano rápidamente por el calor hasta que cambie ligeramente de tono. Ese pequeño paso hace una enorme diferencia: la hoja se vuelve flexible, se rompe menos y libera mejor su aroma durante la cocción.',


momento:'aprender',



ocasion:[

'diario',

'familia',

'especial'

],



sustituciones:[

{

falta:'Pollo',

reemplazo:'Carne de cerdo cocida y deshebrada.'

},

{

falta:'Manteca de cerdo',

reemplazo:'Aceite vegetal de sabor neutro, aunque la textura y sabor tradicional cambiarán.'

},

{

falta:'Caldo de pollo',

reemplazo:'Caldo de verduras o agua caliente.'

},

{

falta:'Hoja de plátano',

reemplazo:'Hoja de maíz. La forma, aroma y textura serán diferentes y dejará de ser la presentación oaxaqueña característica.'

},

{

falta:'Mole negro',

reemplazo:'Mole coloradito o mole rojo como versión alternativa.'

}

],



chefInicio:

'Hoy vas a trabajar una de las preparaciones más reconocibles de Oaxaca. El secreto no está solamente en el mole: tendrás que equilibrar grasa, humedad, masa, relleno, hoja y vapor para lograr un tamal suave que se desprenda limpiamente al abrirlo.',


chefFinal:

'Acabas de practicar control de masas, emulsión de grasa, preparación de rellenos, manejo de hojas y cocción al vapor. Si tu tamal se desprende de la hoja, conserva humedad y mantiene el mole dentro, no solo seguiste una receta: entendiste la técnica detrás de un clásico oaxaqueño.',



señalesExito:{

vista:'Tamal rectangular envuelto en hoja de plátano verde oscuro, con masa clara y suave que al abrirse revela mole negro intenso y pollo en el centro.',

olor:'Aroma cálido a maíz cocido, hoja de plátano, mole tostado y especias.',

textura:'Masa suave, húmeda y esponjosa que se desprende limpiamente de la hoja, con pollo tierno y mole espeso en el interior.'

},



rescates:[

{

problema:'La masa quedó demasiado seca antes de formar los tamales.',

solucion:'Agrega caldo de pollo poco a poco mientras mezclas hasta recuperar una textura suave y fácil de extender.'

},

{

problema:'La masa quedó demasiado líquida.',

solucion:'Agrega pequeñas cantidades de masa de maíz y mezcla hasta recuperar suficiente cuerpo.'

},

{

problema:'Las hojas de plátano se rompen al doblarlas.',

solucion:'Pásalas brevemente por el comal o sobre una fuente de calor hasta que se vuelvan flexibles.'

},

{

problema:'El mole sale del tamal.',

solucion:'Utiliza menos relleno y asegúrate de que el mole tenga una consistencia más espesa.'

},

{

problema:'La masa sigue pegada a la hoja después de una hora.',

solucion:'Continúa la cocción al vapor durante 10 a 20 minutos y vuelve a revisar un tamal de prueba.'

},

{

problema:'La masa quedó pesada y compacta.',

solucion:'En la siguiente preparación bate mejor la manteca e incorpora suficiente caldo para obtener una masa más ligera antes de cocinarla.'

},

{

problema:'La vaporera se quedó sin agua.',

solucion:'Agrega cuidadosamente agua caliente para recuperar el vapor sin provocar un cambio brusco de temperatura.'

}

]


};