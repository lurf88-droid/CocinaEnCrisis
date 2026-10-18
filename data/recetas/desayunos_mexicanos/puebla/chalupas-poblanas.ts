import type { Receta } from '@/types/receta';

export const CHALUPAS_POBLANAS: Receta = {

  id:'chalupas-poblanas',

  titulo:'Chalupas poblanas',

  imagen: require(
    '../../../../assets/images/recetas/desayunos_mexicanos/puebla/chalupas-poblanas.webp'
  ),

  descripcion:
    'Antojito tradicional poblano elaborado con pequeñas tortillas de maíz ligeramente fritas en manteca, cubiertas con salsa verde o roja, cebolla y carne deshebrada.',


  // 🌎 IDENTIDAD CULINARIA

  cocina:'mexicana',

  identidadRegional:{

    region:'Valle de Puebla',

    estadoOrigen:'Puebla',

    ciudadOrigen:'Puebla',

    tradicion:
      'cocina poblana tradicional de antojitos elaborados con maíz, salsa, manteca y carne deshebrada'

  },

  tecnicaPrincipal:
    'cocción en comal, elaboración de salsa y fritura ligera en manteca',


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
      cantidad:0.500,
      unidad:'kg'
    },

    {
      id:'carne_cerdo',
      cantidad:0.250,
      unidad:'kg'
    },

    {
      id:'tomate_verde',
      cantidad:0.350,
      unidad:'kg'
    },

    {
      id:'chile_serrano',
      cantidad:3,
      unidad:'pieza'
    },

    {
      id:'ajo',
      cantidad:1,
      unidad:'pieza'
    },

    {
      id:'cebolla_blanca',
      cantidad:0.120,
      unidad:'kg'
    },

    {
      id:'manteca_cerdo',
      cantidad:0.120,
      unidad:'kg'
    },

    {
      id:'sal',
      cantidad:0.006,
      unidad:'kg'
    }

  ],


  // 🎓 FORMACIÓN CHEF LUNA

  aprendizajes:[

    'formación y cocción de tortillas pequeñas de maíz',

    'preparación de una salsa verde tradicional',

    'control de fritura ligera con manteca',

    'equilibrio entre salsa, grasa, carne y cebolla',

    'identidad culinaria de los antojitos poblanos'

  ],


  // 👨‍🍳 PASOS

  pasos:[

    {

      numero:1,

      titulo:'Prepara la carne',

      descripcion:
        'Cuece la carne de cerdo hasta que esté suave. Déjala reposar ligeramente y deshébrala en fibras pequeñas.',

      tiempo:'15 minutos',

      consejo:
        'La carne debe quedar suficientemente suave para separarse fácilmente sin convertirse en una pasta.',

      porQue:
        'La carne deshebrada aporta sabor y textura sin cubrir por completo la tortilla.',

      mensajeChef:
        'En un antojito pequeño, cada ingrediente debe tener una función clara.',

      objetivo:
        'Obtener carne tierna y fácil de distribuir.',

      nivelImportancia:'clave',

      señalCorrecta:
        'La carne se separa fácilmente y conserva humedad.',

      errorEvitar:
        'Secar demasiado la carne durante la cocción.'

    },


    {

      numero:2,

      titulo:'Prepara la salsa verde',

      descripcion:
        'Cocina o asa ligeramente el tomate verde y el chile serrano. Muélelos con ajo y sal hasta obtener una salsa uniforme.',

      tiempo:'8 minutos',

      consejo:
        'Evita agregar demasiada agua; necesitamos una salsa capaz de permanecer sobre la chalupa.',

      porQue:
        'Una salsa demasiado líquida ablanda rápidamente la tortilla y diluye el sabor.',

      mensajeChef:
        'Una buena salsa no solamente aporta picante: aporta estructura al platillo.',

      objetivo:
        'Conseguir una salsa intensa y con cuerpo.',

      nivelImportancia:'clave',

      señalCorrecta:
        'La salsa cubre una cuchara sin parecer aguada.',

      errorEvitar:
        'Diluir demasiado la salsa.'

    },


    {

      numero:3,

      titulo:'Forma las chalupas',

      descripcion:
        'Forma pequeñas porciones de masa y aplánalas hasta obtener tortillas delgadas y pequeñas. Cuécelas brevemente sobre un comal caliente.',

      tiempo:'7 minutos',

      consejo:
        'Procura que tengan un tamaño similar para que la cocción sea uniforme.',

      porQue:
        'El tamaño pequeño y la tortilla delgada son características importantes de la chalupa poblana.',

      mensajeChef:
        'La identidad de un platillo también está en su forma y proporción.',

      objetivo:
        'Crear la base tradicional de la chalupa.',

      nivelImportancia:'critico',

      chefPregunta:
        '¿Por qué buscamos tortillas pequeñas y relativamente delgadas?',

      respuestaEsperada:
        'Porque permiten una fritura ligera y mantienen el equilibrio con la salsa y la carne.',

      señalCorrecta:
        'Las tortillas mantienen su forma y están cocidas sin quedar completamente duras.',

      errorEvitar:
        'Hacer tortillas demasiado gruesas.'

    },


    {

      numero:4,

      titulo:'Pasa las chalupas por la manteca',

      descripcion:
        'Calienta la manteca y pasa las tortillas brevemente por ella, permitiendo que se impregnen y doren ligeramente sin convertirlas en tostadas.',

      tiempo:'5 minutos',

      consejo:
        'La chalupa debe permanecer flexible; no buscamos una tortilla completamente crujiente.',

      porQue:
        'La manteca aporta uno de los sabores característicos del antojito poblano y modifica la textura de la tortilla.',

      mensajeChef:
        'Freír correctamente también significa saber cuándo detenerse.',

      objetivo:
        'Aportar sabor y una textura ligeramente dorada.',

      nivelImportancia:'critico',

      señalCorrecta:
        'La tortilla tiene brillo, bordes ligeramente dorados y todavía puede doblarse.',

      errorEvitar:
        'Freír hasta convertir la chalupa en una tostada rígida.'

    },


    {

      numero:5,

      titulo:'Monta y termina las chalupas',

      descripcion:
        'Coloca salsa sobre cada tortilla caliente y termina con carne de cerdo deshebrada y cebolla finamente picada. Sirve inmediatamente.',

      tiempo:'5 minutos',

      consejo:
        'Monta las chalupas justo antes de servir para conservar mejor su textura.',

      porQue:
        'El equilibrio entre tortilla, manteca, salsa, carne y cebolla define el carácter sencillo de este antojito.',

      mensajeChef:
        'Pocos ingredientes exigen más precisión, no menos.',

      objetivo:
        'Conseguir una chalupa equilibrada y reconocible.',

      nivelImportancia:'clave',

      señalCorrecta:
        'La tortilla permanece flexible, la salsa se mantiene encima y ninguno de los ingredientes domina completamente.',

      errorEvitar:
        'Sobrecargar la chalupa con carne o salsa.'

    }

  ],


  // 💡 INFORMACIÓN EXTRA

  tip:
    'Puedes preparar parte de las chalupas con salsa verde y parte con salsa roja para reproducir una presentación poblana muy característica.',

  ahorro:
    'La carne cocida de otra preparación puede aprovecharse para las chalupas siempre que conserve buen sabor y textura.',

  errorComun:
    'Freír demasiado la tortilla y convertir una chalupa flexible en una tostada rígida.',


  tags:[

    'puebla',

    'desayuno_mexicano',

    'antojito_mexicano',

    'maiz',

    'tradicional',

    'chalupas'

  ],


  tipoComida:'barata',

  popularidad:92,


  historiaChef:
    'Las chalupas forman parte de la tradición de antojitos de Puebla y se caracterizan por sus pequeñas tortillas de maíz acompañadas de salsa, cebolla y carne deshebrada.',


  trucoChef:
    'Controla el tiempo en la manteca: queremos una tortilla ligeramente dorada y sabrosa, pero todavía flexible.',


  momento:'diario',


  ocasion:[

    'diario',

    'familia',

    'especial'

  ],


  sustituciones:[

    {
      falta:'carne_cerdo',
      reemplazo:'carne de res cocida y deshebrada'
    },

    {
      falta:'manteca_cerdo',
      reemplazo:'aceite vegetal, aunque cambia el sabor tradicional'
    },

    {
      falta:'chile_serrano',
      reemplazo:'otro chile verde disponible ajustando el picante'
    }

  ],


  chefInicio:
    'Hoy viajamos a Puebla para aprender cómo maíz, salsa, manteca, cebolla y carne pueden convertirse en uno de sus antojitos más reconocibles.',


  chefFinal:
    'Aprendiste que una chalupa poblana no necesita muchos ingredientes: necesita controlar la tortilla, la grasa, la salsa y las proporciones.',


  señalesExito:{

    vista:
      'Tortillas pequeñas cubiertas de salsa, cebolla y pequeñas porciones de carne deshebrada.',

    olor:
      'Aroma de maíz caliente, manteca, salsa y carne cocida.',

    textura:
      'Tortilla suave y flexible con ligero dorado, salsa con cuerpo y carne tierna.'

  },


  rescates:[

    {

      problema:'Las chalupas quedaron demasiado duras',

      solucion:
        'Reduce el tiempo de fritura; deben pasar brevemente por la manteca y conservar flexibilidad.'

    },

    {

      problema:'La salsa aguó las tortillas',

      solucion:
        'Cocina unos minutos más la salsa para concentrarla y monta las chalupas justo antes de servir.'

    }

  ]

};