import type { Receta } from '@/types/receta';


export const ENFRIJOLADAS_OAXAQUENAS_TASAJO: Receta = {


id:'enfrijoladas-oaxaquenas-tasajo',


titulo:'Enfrijoladas oaxaqueñas con tasajo',


imagen: require(
'../../../../assets/images/recetas/desayunos_mexicanos/oaxaca/enfrijoladas-oaxaquenas-tasajo.webp'
),


descripcion:

'Desayuno tradicional oaxaqueño elaborado con tortillas de maíz bañadas en una salsa cremosa de frijol negro aromatizada con hoja de aguacate y acompañadas de tasajo asado, queso, cebolla y crema. Un platillo sencillo en apariencia, pero profundamente ligado al maíz, el frijol y las técnicas tradicionales de Oaxaca.',



// 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',


identidadRegional:{

region:'Valles Centrales de Oaxaca',

estadoOrigen:'Oaxaca, México',

tradicion:'Las enfrijoladas forman parte de la cocina cotidiana de Oaxaca y aprovechan dos pilares de la alimentación mesoamericana: maíz y frijol. En versiones oaxaqueñas es común utilizar frijol negro y aromatizarlo con hoja de aguacate. Cuando se acompañan con tasajo, quesillo o queso fresco se convierten en un desayuno abundante y representativo de los mercados y cocinas familiares de la región.'

},


tecnicaPrincipal:

'Cocción y molienda de frijol negro, aromatización con hoja de aguacate, ajuste de consistencia de salsa, calentado de tortillas y asado rápido de tasajo.',



// 🎯 CLASIFICACIÓN

nivelChef:3,

categoria:'desayuno',
rolCulinario: 'plato_principal',

porciones:4,

tiempoMinutos:50,

dificultad:'media',



// 🧺 INGREDIENTES

ingredientes:[

{

id:'frijol_negro',

cantidad:0.400,

unidad:'kg'

},

{

id:'tortilla_maiz',

cantidad:12,

unidad:'pieza'

},

{

id:'tasajo',

cantidad:0.400,

unidad:'kg'

},

{

id:'cebolla',

cantidad:0.120,

unidad:'kg'

},

{

id:'ajo',

cantidad:0.010,

unidad:'kg'

},

{
  id:'hoja_aguacate',
  cantidad:3,
  unidad:'kg'
},

{

id:'queso_fresco',

cantidad:0.150,

unidad:'kg'

},

{

id:'crema',

cantidad:0.150,

unidad:'litro'

},

{

id:'aceite_vegetal',

cantidad:0.030,

unidad:'litro'

},

{

id:'sal',

cantidad:0.010,

unidad:'kg'

}

],



// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[

'Preparar una salsa de frijol con textura adecuada para cubrir tortillas',

'Aprender a utilizar hoja de aguacate como elemento aromático',

'Controlar la consistencia mediante caldo de frijol',

'Asar tasajo sin resecarlo',

'Comprender el papel del maíz y el frijol dentro de la cocina tradicional oaxaqueña',

'Aprender una preparación útil para aprovechar frijoles cocidos del día anterior'

],



// 👨‍🍳 PASOS

pasos:[

{

numero:1,

titulo:'Preparar el frijol',

descripcion:'Si utilizas frijoles ya cocidos, reserva aproximadamente dos tazas de su caldo. Si partes de frijol seco, cuécelo previamente hasta que esté completamente suave. El frijol debe poder aplastarse fácilmente entre los dedos.',

tiempo:'5 minutos si ya está cocido',

consejo:'Los frijoles del día anterior son excelentes para esta preparación porque su sabor suele estar más concentrado.',

porQue:'Un frijol completamente cocido produce una salsa más cremosa y evita una textura granulosa.',

mensajeChef:'Una buena cocina también consiste en saber transformar lo que ya tienes en una preparación diferente.',

objetivo:'Tener frijoles suaves y suficiente caldo para controlar posteriormente la salsa.',

nivelImportancia:'clave',

chefPregunta:'¿Por qué debemos reservar el caldo de los frijoles?',

respuestaEsperada:'Porque permite ajustar la consistencia de la salsa sin diluir su sabor con agua.',

señalCorrecta:'Los frijoles están suaves y el caldo tiene sabor concentrado.',

errorEvitar:'Desechar todo el caldo antes de preparar la salsa.'

},

{

numero:2,

titulo:'Tostar la hoja de aguacate',

descripcion:'Calienta un comal a fuego medio y coloca las hojas de aguacate durante algunos segundos por cada lado, solamente hasta que desprendan su aroma. Retíralas inmediatamente.',

tiempo:'2 minutos',

consejo:'La hoja debe calentarse y volverse aromática, no quemarse.',

porQue:'El calor ayuda a liberar los compuestos aromáticos de la hoja de aguacate.',

mensajeChef:'En Oaxaca, una hoja puede cambiar completamente la personalidad de una salsa sencilla.',

objetivo:'Desarrollar el aroma característico de la hoja de aguacate.',

nivelImportancia:'normal',

chefPregunta:'¿Qué buscamos al pasar la hoja de aguacate por el comal?',

respuestaEsperada:'Liberar y potenciar su aroma sin quemarla.',

señalCorrecta:'La hoja desprende un aroma intenso y agradable.',

errorEvitar:'Dejarla en el comal hasta que se vuelva negra.'

},

{

numero:3,

titulo:'Licuar la salsa de frijol',

descripcion:'Coloca en la licuadora los frijoles cocidos, aproximadamente una taza de caldo, ajo, una parte de la cebolla y las hojas de aguacate tostadas. Licúa hasta obtener una mezcla completamente uniforme.',

tiempo:'5 minutos',

consejo:'Empieza con poco caldo y agrega más únicamente cuando sea necesario.',

porQue:'Agregar demasiado líquido desde el principio puede producir una salsa muy ligera que no se adhiera correctamente a las tortillas.',

mensajeChef:'La enfrijolada necesita una salsa que cubra, no un caldo que simplemente moje.',

objetivo:'Obtener una salsa tersa y ligeramente espesa.',

nivelImportancia:'clave',

chefPregunta:'¿Cómo debe comportarse una buena salsa de frijol sobre una cuchara?',

respuestaEsperada:'Debe cubrirla formando una capa uniforme sin escurrirse como agua.',

señalCorrecta:'La salsa es cremosa, homogénea y puede cubrir el reverso de una cuchara.',

errorEvitar:'Agregar todo el caldo de una sola vez.'

},

{

numero:4,

titulo:'Cocinar la salsa',

descripcion:'Calienta el aceite en una cazuela. Agrega cuidadosamente la salsa de frijol y cocina a fuego medio durante varios minutos. Si comienza a espesar demasiado, añade poco a poco caldo de frijol. Ajusta la sal al final.',

tiempo:'10 minutos',

consejo:'Recuerda que la salsa continuará espesándose mientras permanece caliente.',

porQue:'La cocción integra los sabores del frijol, ajo, cebolla y hoja de aguacate y permite alcanzar una textura uniforme.',

mensajeChef:'Controlar una salsa significa observarla constantemente y corregir antes de que llegue al extremo.',

objetivo:'Obtener una salsa caliente, aromática y suficientemente fluida para bañar las tortillas.',

nivelImportancia:'clave',

chefPregunta:'¿Qué puedes utilizar si la salsa se vuelve demasiado espesa?',

respuestaEsperada:'Un poco del caldo de cocción de los frijoles.',

señalCorrecta:'La salsa cae lentamente del cucharón y cubre las tortillas sin formar grumos.',

errorEvitar:'Dejar hervir a fuego alto hasta que la salsa se pegue al fondo.'

},

{

numero:5,

titulo:'Asar el tasajo',

descripcion:'Calienta un comal o sartén amplio a temperatura alta. Coloca el tasajo extendido y cocina rápidamente por ambos lados hasta que cambie de color y presente pequeñas zonas doradas. Retíralo en cuanto esté cocido.',

tiempo:'6 minutos',

consejo:'El tasajo es delgado, por lo que necesita poca cocción.',

porQue:'Una cocción prolongada elimina demasiada humedad de la carne y puede volverla dura.',

mensajeChef:'Una carne delgada no necesita paciencia: necesita atención.',

objetivo:'Obtener tasajo cocido, ligeramente dorado y todavía jugoso.',

nivelImportancia:'clave',

chefPregunta:'¿Por qué el tasajo no debe permanecer demasiado tiempo en el comal?',

respuestaEsperada:'Porque al ser una carne delgada puede perder humedad rápidamente y quedar dura.',

señalCorrecta:'La carne presenta zonas doradas y continúa flexible al cortarla.',

errorEvitar:'Cocinarla durante demasiado tiempo hasta volverla seca.'

},

{

numero:6,

titulo:'Calentar las tortillas',

descripcion:'Pasa las tortillas por un comal caliente durante algunos segundos por cada lado hasta que estén suaves y flexibles.',

tiempo:'4 minutos',

consejo:'No necesitas freírlas completamente. Basta con calentarlas para recuperar flexibilidad.',

porQue:'Una tortilla flexible puede doblarse o enrollarse sin romperse cuando entre en contacto con la salsa.',

mensajeChef:'El calor devuelve vida a una tortilla que comenzó a enfriarse.',

objetivo:'Conseguir tortillas suaves y fáciles de doblar.',

nivelImportancia:'normal',

chefPregunta:'¿Qué característica debe tener la tortilla antes de bañarla en frijol?',

respuestaEsperada:'Debe estar caliente y flexible.',

señalCorrecta:'La tortilla puede doblarse sin agrietarse.',

errorEvitar:'Tostar demasiado las tortillas hasta que queden rígidas.'

},

{

numero:7,

titulo:'Bañar y doblar las enfrijoladas',

descripcion:'Introduce rápidamente cada tortilla caliente dentro de la salsa de frijol o báñala abundantemente utilizando un cucharón. Dóblala por la mitad o en tres partes y acomódala inmediatamente en el plato.',

tiempo:'6 minutos',

consejo:'Trabaja una tortilla a la vez para evitar que permanezca demasiado tiempo dentro de la salsa.',

porQue:'El contacto breve permite que la tortilla absorba sabor sin perder completamente su estructura.',

mensajeChef:'Una enfrijolada debe estar cubierta de salsa, pero todavía debemos reconocer la tortilla debajo de ella.',

objetivo:'Lograr tortillas suaves, completamente cubiertas y capaces de mantener su forma.',

nivelImportancia:'critico',

chefPregunta:'¿Qué pasa si dejamos demasiado tiempo una tortilla dentro de la salsa caliente?',

respuestaEsperada:'Puede absorber demasiada humedad y comenzar a romperse.',

señalCorrecta:'La tortilla permanece entera, flexible y completamente cubierta de frijol.',

errorEvitar:'Dejar las tortillas sumergidas hasta que se deshagan.'

},

{

numero:8,

titulo:'Terminar el plato',

descripcion:'Sirve tres enfrijoladas por persona. Coloca encima queso fresco desmoronado, crema y cebolla finamente rebanada. Añade el tasajo recién asado a un lado o sobre las enfrijoladas.',

tiempo:'5 minutos',

consejo:'Sirve inmediatamente. La salsa de frijol cambia rápidamente de textura al enfriarse.',

porQue:'Los elementos frescos y lácteos aportan contraste a una preparación dominada por el sabor profundo y terroso del frijol.',

mensajeChef:'Un platillo equilibrado no siempre necesita más ingredientes: a veces necesita contraste.',

objetivo:'Presentar unas enfrijoladas calientes, cremosas y equilibradas con el tasajo y las guarniciones.',

nivelImportancia:'normal',

chefPregunta:'¿Qué aportan la crema, queso y cebolla al plato?',

respuestaEsperada:'Contraste de sabor, textura, frescura y cremosidad frente al frijol.',

señalCorrecta:'Las enfrijoladas lucen cubiertas de salsa, el queso permanece visible y el tasajo conserva aspecto jugoso.',

errorEvitar:'Dejar reposar el plato demasiado tiempo antes de servir.'

}

],



// 💡 INFORMACIÓN EXTRA

tip:

'Utiliza parte del caldo de cocción del frijol para ajustar la salsa. Tiene mucho más sabor que el agua y permite corregir la consistencia sin diluir la preparación.',


ahorro:

'Esta receta es ideal para aprovechar frijoles cocidos del día anterior. Si el tasajo está fuera del presupuesto, puedes servir las enfrijoladas con huevo, pollo deshebrado o incluso únicamente queso y cebolla.',


errorComun:

'Preparar una salsa de frijol demasiado espesa. Al enfriarse continuará espesando y puede convertirse en una pasta que rompe las tortillas en lugar de cubrirlas.',



tags:[

'oaxaca',

'enfrijoladas',

'tasajo',

'frijol-negro',

'maiz',

'hoja-de-aguacate',

'desayuno-regional',

'cocina-tradicional'

],


tipoComida:'llenadora',


popularidad:94,


historiaChef:

'Las enfrijoladas muestran cómo la cocina tradicional puede construir un plato completo a partir de ingredientes cotidianos. En Oaxaca, el frijol negro puede aromatizarse con hoja de aguacate antes de convertirse en una salsa que cubre tortillas de maíz. Acompañarlas con tasajo conecta esta preparación doméstica con otro ingrediente característico de la cocina oaxaqueña. Maíz, frijol y chile han formado parte de la alimentación mesoamericana durante siglos, y esta receta conserva esa lógica utilizando técnicas sencillas como cocción, molienda, comal y aprovechamiento.',


trucoChef:

'Tosta brevemente la hoja de aguacate antes de molerla con los frijoles. El calor intensifica su aroma y permite que una salsa sencilla desarrolle una personalidad claramente distinta.',


momento:'aprender',



ocasion:[

'diario',

'familia',

'especial'

],



sustituciones:[

{

falta:'Tasajo',

reemplazo:'Huevo estrellado, pollo deshebrado o carne de res asada.'

},

{

falta:'Hoja de aguacate',

reemplazo:'Puede omitirse. La salsa seguirá funcionando, aunque perderá parte de su aroma tradicional oaxaqueño.'

},

{

falta:'Queso fresco',

reemplazo:'Quesillo, panela o queso cotija en menor cantidad.'

},

{

falta:'Crema',

reemplazo:'Yogur natural sin azúcar ligeramente diluido o simplemente omitirla.'

},

{

falta:'Frijol negro',

reemplazo:'Frijol bayo o peruano. El sabor y color cambiarán, pero se conserva la técnica de la enfrijolada.'

}

],



chefInicio:

'Hoy vamos a transformar frijoles y tortillas en un desayuno profundamente oaxaqueño. El reto no será usar muchos ingredientes, sino conseguir una salsa de frijol suficientemente cremosa para envolver la tortilla sin destruirla.',


chefFinal:

'Aprendiste a controlar una salsa de frijol, utilizar un ingrediente aromático regional, manejar tortillas calientes y cocinar una carne delgada sin resecarla. Más importante todavía: viste cómo ingredientes cotidianos pueden convertirse en un platillo con identidad cuando entendemos la técnica detrás de ellos.',



señalesExito:{

vista:'Tortillas completamente cubiertas por una salsa de frijol negro brillante, coronadas con queso, crema y cebolla, acompañadas de tasajo ligeramente dorado.',

olor:'Aroma profundo a frijol cocido con notas tostadas y anisadas de hoja de aguacate, acompañado del aroma de carne recién asada.',

textura:'Tortillas suaves pero enteras, salsa cremosa y tersa, queso ligeramente firme y tasajo tierno.'

},



rescates:[

{

problema:'La salsa de frijol quedó demasiado espesa.',

solucion:'Agrega caldo de frijol caliente poco a poco mientras mezclas hasta recuperar una consistencia cremosa.'

},

{

problema:'La salsa quedó demasiado líquida.',

solucion:'Cocínala algunos minutos más a fuego medio y mueve constantemente hasta reducir parte del líquido.'

},

{

problema:'La salsa tiene textura granulosa.',

solucion:'Licúa nuevamente con una pequeña cantidad de caldo caliente hasta obtener una mezcla más fina.'

},

{

problema:'Las tortillas se rompen al doblarlas.',

solucion:'Caliéntalas primero en el comal hasta recuperar flexibilidad y no las dejes demasiado tiempo sumergidas en la salsa.'

},

{

problema:'El tasajo quedó duro.',

solucion:'En la siguiente porción utiliza un comal bien caliente y reduce considerablemente el tiempo de cocción.'

},

{

problema:'Las enfrijoladas quedaron secas después de servirlas.',

solucion:'Agrega encima un poco más de salsa de frijol caliente justo antes de colocar el queso y la crema.'

}

]


};