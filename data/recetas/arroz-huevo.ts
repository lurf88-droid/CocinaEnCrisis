import type { Receta } from '@/types/receta';

export const ARROZ_HUEVO: Receta = {

  id: 'arroz-huevo',

  titulo: 'Arroz con huevo',

  imagen: require('../../assets/images/recetas/arroz-huevo.webp'),

  descripcion:
    'Un plato casero y versátil ideal para aprender fundamentos importantes: lavado del arroz, sofrito, control de humedad y cocción del huevo. Perfecto para empezar a desarrollar criterio en la cocina.',

  categoria: 'comida',
  rolCulinario: 'plato_principal',

  porciones: 2,

  tiempoMinutos: 35,

  dificultad: 'facil',
  // 🌎 IDENTIDAD CULINARIA

cocina:'mexicana',

tecnicaPrincipal:'sofrito y cocción por absorción',


// 🎓 FORMACIÓN CHEF LUNA

aprendizajes:[
  'mise en place',
  'sofrito',
  'control del fuego',
  'cocción del arroz'
],

  ingredientes: [

    {
      id: 'arroz_blanco',
      cantidad: 0.16,
      unidad: 'kg',
    },

    {
      id: 'huevo',
      cantidad: 2,
      unidad: 'pieza',
    },

    {
      id: 'jitomate',
      cantidad: 0.08,
      unidad: 'kg',
    },

    {
      id: 'cebolla_blanca',
      cantidad: 0.03,
      unidad: 'kg',
    },

    {
      id: 'aceite_vegetal',
      cantidad: 0.015,
      unidad: 'litro',
    },

    {
      id: 'sal',
      cantidad: 0.001,
      unidad: 'kg',
    },

  ],

  pasos: [

    {
      numero: 1,

      titulo: 'Prepara tu estación',

      descripcion:
        'Coloca cerca el arroz, huevo, jitomate, cebolla, aceite y sal. Lava el jitomate y prepara una tabla, cuchillo, olla y sartén.',

      tiempo: '5 minutos',

      consejo:
        'Antes de encender el fuego deja todo preparado. Cocinar con orden te permitirá prestar atención a lo realmente importante.',

      porQue:
        'Esta organización previa se conoce como mise en place y es uno de los hábitos fundamentales de una cocina profesional.',

      mensajeChef:
        'Antes de cocinar, organiza. Una cocina ordenada también ayuda a pensar mejor.',

      señalCorrecta:
        'Todos los ingredientes y utensilios están listos antes de comenzar la cocción.',

      errorEvitar:
        'Empezar a cocinar mientras todavía buscas ingredientes o utensilios.',
    },

    {
      numero: 2,

      titulo: 'Lava el arroz',

      descripcion:
        'Coloca el arroz en un recipiente, cúbrelo con agua y muévelo suavemente con los dedos. Desecha el agua y repite varias veces hasta que salga considerablemente más clara.',

      tiempo: '3 minutos',

      consejo:
        'No frotes agresivamente los granos; queremos retirar almidón superficial sin romperlos.',

      porQue:
        'Reducir el exceso de almidón superficial ayuda a conseguir un arroz más suelto.',

      mensajeChef:
        'Los pequeños detalles empiezan a definir la textura final.',

      señalCorrecta:
        'El agua del último enjuague se observa mucho menos turbia que al principio.',

      errorEvitar:
        'Dejar el arroz mojado demasiado tiempo antes de sofreírlo. Escúrrelo bien.',
    },

    {
      numero: 3,

      titulo: 'Prepara el sofrito',

      descripcion:
        'Pica finamente la cebolla y el jitomate. Calienta el aceite a fuego medio, agrega la cebolla y cocina hasta que empiece a verse translúcida. Incorpora el jitomate y cocina unos minutos.',

      tiempo: '5 minutos',

      consejo:
        'No necesitas fuego alto. Buscamos desarrollar aroma y dulzor sin quemar los vegetales.',

      porQue:
        'El sofrito crea una base aromática que dará profundidad al arroz.',

      mensajeChef:
        'Aquí empezamos a construir capas de sabor.',

      señalCorrecta:
        'La cebolla está suave y el jitomate comienza a perder parte de su agua.',

      errorEvitar:
        'Quemar la cebolla o dejar completamente crudo el jitomate.',
    },

    {
      numero: 4,

    titulo:'Sofríe ligeramente el arroz',

     descripcion:
'Agrega el arroz bien escurrido al sofrito. Esta técnica, conocida como nacarar el arroz, ayuda a desarrollar sabor y mejorar la textura final.',
      tiempo: '3 minutos',

      consejo:
        'Muévelo constantemente durante esta etapa para evitar que el fondo de la olla se queme.',

      porQue:
        'Cubrir los granos con grasa y calentarlos antes de incorporar el líquido ayuda a desarrollar aroma y favorece una textura más definida.',

      mensajeChef:
        'Ya no estamos solamente hirviendo arroz: estamos construyendo sabor antes de hidratarlo.',

      señalCorrecta:
        'Los granos están brillantes, calientes y desprenden un ligero aroma tostado.',

      errorEvitar:
        'Esperar hasta que el arroz se vuelva café oscuro. Eso indicaría que se está quemando.',
    },

    {
      numero: 5,

      titulo: 'Cocina el arroz',

      descripcion:
        'Agrega aproximadamente 320 ml de agua caliente. Añade la sal, mezcla una sola vez y lleva a hervor suave. Baja el fuego, tapa y cocina aproximadamente 15 minutos o hasta que el líquido se absorba y el arroz esté tierno.',

      tiempo: '15 minutos',

      consejo:
        'Una vez tapado, evita estar moviendo el arroz. Déjalo cocinar con el vapor atrapado en la olla.',

      porQue:
        'El arroz absorbe agua mientras el calor transforma sus almidones. Mantener una cocción estable permite que los granos se hidraten de manera uniforme.',

      mensajeChef:
        'Parte de cocinar bien consiste en reconocer cuándo intervenir y cuándo dejar trabajar al ingrediente.',

      señalCorrecta:
        'No queda agua libre en el fondo y el arroz está cocido pero conserva su forma.',

      errorEvitar:
        'Destapar constantemente o cocinar todo el tiempo a fuego alto.',
    },

    {
      numero: 6,

      titulo: 'Deja reposar el arroz',

      descripcion:
        'Apaga el fuego y deja reposar el arroz tapado durante 5 minutos. Después sepáralo suavemente con un tenedor.',

      tiempo: '5 minutos',

      consejo:
        'No te saltes el reposo. Es una parte real de la cocción, no tiempo perdido.',

      porQue:
        'El reposo permite redistribuir la humedad y ayuda a que la textura sea más uniforme.',

      mensajeChef:
        'La paciencia también es una técnica.',

      señalCorrecta:
        'Los granos se separan fácilmente y no hay exceso de humedad en el fondo.',

      errorEvitar:
        'Remover agresivamente recién apagado el fuego y romper los granos.',
    },

    {
      numero: 7,

      titulo: 'Cocina el huevo',

      descripcion:
        'Mientras reposa el arroz, cocina los huevos en un sartén. Puedes prepararlos estrellados o revueltos según la experiencia que quieras practicar.',

      tiempo: '4 minutos',

      consejo:
        'Para huevo estrellado controla especialmente el fuego: buscamos clara cocida sin resecar todo el huevo.',

      porQue:
        'El huevo permite practicar control térmico. Pequeños cambios de temperatura modifican mucho su textura.',

      mensajeChef:
        'Una receta sencilla también puede enseñarte precisión.',

      señalCorrecta:
        'La clara está cocida y la textura del huevo corresponde al punto que buscabas.',

      errorEvitar:
        'Usar fuego excesivamente alto y resecar o quemar las proteínas.',
    },

    {
      numero: 8,

      titulo: 'Monta y prueba',

      descripcion:
        'Sirve el arroz y coloca el huevo encima o a un lado. Prueba antes de agregar más sal. Si tienes otros ingredientes disponibles, Chef Luna puede proponerte diferentes caminos para transformar el plato.',

      tiempo: '2 minutos',

      consejo:
        'Antes de añadir condimentos automáticamente, prueba. Un cocinero desarrolla criterio probando constantemente.',

      porQue:
        'Probar el resultado permite analizar equilibrio, textura y sazón, tres habilidades fundamentales para aprender a cocinar.',

      mensajeChef:
        'Hoy hiciste algo más importante que seguir una receta: observaste cómo cambian los ingredientes durante la cocción.',

      señalCorrecta:
        'El arroz está suelto y aromático, mientras el huevo conserva una textura agradable.',

      errorEvitar:
        'Servir sin probar y corregir la sazón.',
    },

  ],

  tip:
    'Esta receta es una base. Con ajo, chile, verduras, hierbas, queso, salsa de soya u otros ingredientes puedes llevarla hacia perfiles culinarios completamente distintos.',

nivelChef:1,

  tags: [
    'casera',
    'principiante',
    'arroz',
    'huevo',
    'tecnica basica',
    'versatil',
  ],

  tipoComida: 'familia',

  popularidad: 95,

  ahorro:
    'Es una preparación que aprovecha ingredientes habituales de despensa y permite incorporar pequeñas cantidades de otros alimentos que tengas disponibles.',

  errorComun:
    'Usar demasiado líquido, mover constantemente el arroz o cocinarlo siempre a fuego alto puede producir una textura pastosa.',

  chefInicio:
    'Hoy vamos a usar una preparación sencilla para aprender algo importante: incluso los ingredientes cotidianos cambian muchísimo cuando entiendes la técnica.',

  chefFinal:
    'Buen trabajo. Practicaste mise en place, sofrito, hidratación del arroz, control del fuego, reposo y cocción del huevo. Esa experiencia la podrás reutilizar en muchas otras recetas.',

  señalesExito: {

    vista:
      'Los granos de arroz conservan su forma y se separan con facilidad.',

    olor:
      'Debe percibirse el aroma del sofrito y un ligero fondo tostado del arroz.',

    textura:
      'El arroz está tierno sin sentirse pastoso y el huevo conserva el punto de cocción elegido.',

  },

  rescates: [

    {
      problema:
        'El arroz quedó demasiado húmedo',

      solucion:
        'Destapa la olla y déjalo reposar varios minutos. Si todavía tiene bastante líquido, cocina brevemente a fuego muy bajo y sin moverlo demasiado.',
    },

    {
      problema:
        'El arroz quedó duro',

      solucion:
        'Agrega una pequeña cantidad de agua caliente, tapa nuevamente y cocina unos minutos más a fuego bajo.',
    },

    {
      problema:
        'El arroz se pegó ligeramente al fondo',

      solucion:
        'No rasques inmediatamente la parte quemada. Retira con cuidado el arroz de la superficie hacia otro recipiente para evitar transferir sabor amargo.',
    },

  ],

};