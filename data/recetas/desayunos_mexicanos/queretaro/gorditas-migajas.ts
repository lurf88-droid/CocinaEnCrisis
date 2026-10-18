import type { Receta } from '@/types/receta';

export const GORDITAS_DE_MIGAJAS: Receta = {
  id: 'gorditas-migajas-queretaro',
  titulo: 'Gorditas de Migajas',
  imagen: require(
    '../../../../assets/images/desayunos_mexicanos/queretaro/gorditas-migajas.webp'
  ),
  descripcion:
    'Gorditas de maíz quebrado rellenas de migajas de chicharrón, el antojito callejero más representativo de Querétaro. Si nunca has cocinado, no te preocupes: te llevaré de la mano en cada paso, desde amasar hasta freír.',

  // 🌎 IDENTIDAD CULINARIA
  cocina: 'mexicana',
  identidadRegional: {
    region: 'Centro Histórico de Santiago de Querétaro',
    estadoOrigen: 'Querétaro',
    tradicion:
      'Las gorditas de migajas son comida callejera queretana por excelencia, vendidas en mercados y puestos del centro histórico desde hace generaciones. Nacieron como una forma de aprovechar las "migajas" (los pedacitos crujientes que quedan al freír chicharrón o carnitas), transformando un sobrante en uno de los antojitos más queridos del Bajío.'
  },
  tecnicaPrincipal:
    'Elaboración de masa de maíz quebrado, formado a mano tipo "concha" para rellenar, y fritura en manteca o aceite hasta dorar',

  // 🎯 CLASIFICACIÓN
  nivelChef: 1,
  categoria: 'desayuno',
  rolCulinario: 'plato_principal',
  porciones: 4,
  tiempoMinutos: 60,
  dificultad: 'facil',

  // 🧺 INGREDIENTES
  ingredientes:[
  { id: 'masa_maiz', cantidad: 0.500, unidad: 'kg' },

  { id: 'migajas_chicharron', cantidad: 0.200, unidad: 'kg' },

  { id: 'manteca_cerdo', cantidad: 0.060, unidad: 'kg' },

  { id: 'sal', cantidad: 0.005, unidad: 'kg' },



  { id: 'aceite_vegetal', cantidad: 0.250, unidad: 'litro' },

  { id: 'lechuga', cantidad: 0.100, unidad: 'kg' },

  { id: 'queso_fresco', cantidad: 0.100, unidad: 'kg' },

  { id: 'salsa_roja', cantidad: 0.150, unidad: 'litro' }
],

  // 🎓 FORMACIÓN CHEF LUNA
  aprendizajes: [
    'Cómo saber si una masa está en el punto correcto solo con las manos',
    'Cómo sellar un relleno sin que se escape al cocinar',
    'Cómo freír con seguridad y reconocer cuándo algo ya está listo'
  ],

  // 👨‍🍳 PASOS
  pasos: [
    {
      numero: 1,
      titulo: 'Prepara tu área de trabajo',
      descripcion:
        'Antes de empezar, junta todo en la mesa: la masa de maíz, la manteca, la sal, un vaso con agua tibia, y un plato hondo grande para mezclar. Tener todo listo antes de ensuciarte las manos te va a ahorrar mucho estrés.',
      tiempo: '5 minutos',
      consejo: 'Ten un trapo o servitoallas cerca, vas a necesitarlos.',
      porQue:
        'Cuando tienes las manos llenas de masa no puedes andar buscando cosas en la alacena. Organizarte primero es la mitad del trabajo.',
      mensajeChef:
        'Todo buen cocinero, sin importar su experiencia, empieza organizando su mesa. Esto se llama "mise en place" y te va a salvar en cada receta que hagas.',
      objetivo: 'Tener todos los ingredientes y utensilios a la mano antes de cocinar',
     
      chefPregunta: '¿Por qué es buena idea juntar todo antes de empezar?',
      respuestaEsperada: 'Porque así no interrumpes la receta a mitad de camino buscando algo',
      señalCorrecta: 'Tienes todos los ingredientes visibles y a tu alcance en la mesa',
      errorEvitar: 'Empezar a cocinar sin medir o sacar antes los ingredientes'
    },
    {
      numero: 2,
      titulo: 'Mezcla la masa',
      descripcion:
        'En el plato hondo, pon la masa de maíz. Agrégale la manteca y la sal. Con tus manos limpias, empieza a mezclar apretando y doblando la masa, como si estuvieras amasando pan, durante unos 3-4 minutos.',
      tiempo: '5 minutos',
      consejo:
        'No importa si al principio se ve desigual, con el amasado se va integrando todo.',
      porQue:
        'La manteca hace que la masa quede más suave y flexible, para que no se rompa cuando la rellenes y la frías.',
      mensajeChef:
        'Amasar no tiene ciencia secreta: es apretar, doblar y girar. Tus manos son tu mejor herramienta.',
      objetivo: 'Que la manteca y la sal queden bien integradas en toda la masa',
      nivelImportancia: 'clave',
      chefPregunta: '¿Cómo sabes que ya integraste bien la manteca?',
      respuestaEsperada: 'Cuando ya no ves grumos blancos de manteca y la masa tiene un color uniforme',
      señalCorrecta: 'La masa tiene un color parejo, sin manchitas blancas de manteca',
      errorEvitar: 'Dejar de amasar antes de tiempo, dejando la manteca sin integrar'
    },
    {
      numero: 3,
      titulo: 'Ajusta la humedad de la masa',
      descripcion:
        'Toma un poquito de masa (como del tamaño de una canica) y apriétala en tu puño. Si se agrieta o se desmorona, ve agregando agua tibia poquito a poco (una cucharada a la vez) hasta que la masa quede suave, como plastilina, y no se te pegue en los dedos.',
      tiempo: '5 minutos',
      consejo:
        'Agrega el agua de poquito en poquito. Es más fácil agregar más agua que quitarla si te pasaste.',
      porQue:
        'Una masa demasiado seca se cuartea al freír y el relleno se sale; una masa muy húmeda se pega y no se puede formar.',
      mensajeChef:
        'Este es el paso que más se salta la gente con prisa, y es justo el que determina si tus gorditas quedan perfectas o se abren en el aceite.',
      objetivo: 'Masa con textura de plastilina: suave, moldeable, que no se pega ni se cuartea',
      nivelImportancia: 'clave',
      chefPregunta: '¿Qué prueba puedes hacer para saber si la masa ya está lista?',
      respuestaEsperada: 'Apretar una bolita en el puño: si no se agrieta y no se pega, está lista',
      señalCorrecta: 'La bolita de prueba se mantiene unida, sin grietas, y no se pega en los dedos',
      errorEvitar: 'Agregar toda el agua de golpe, lo que deja la masa aguada y difícil de manejar'
    },
    {
      numero: 4,
      titulo: 'Forma las bolitas',
      descripcion:
        'Con tus manos, toma un poco de masa (más o menos del tamaño de una pelota de golf) y rueda entre tus palmas hasta hacer una bola lisa. Repite hasta usar toda la masa; te deben salir entre 8 y 10 bolitas.',
      tiempo: '10 minutos',
      consejo: 'Si una bolita se agrieta al rodarla, humedécete un poquito las manos con agua y sigue rodando.',
      porQue:
        'Bolitas del mismo tamaño hacen que todas las gorditas se cocinen en el mismo tiempo, así ninguna queda cruda o quemada.',
      mensajeChef:
        'No te preocupes por la perfección, con la práctica las bolitas te van a salir cada vez más parejas.',
      objetivo: 'Bolitas lisas y del mismo tamaño entre sí',
   
      chefPregunta: '¿Por qué conviene que todas las bolitas sean del mismo tamaño?',
      respuestaEsperada: 'Para que todas se cocinen al mismo tiempo y ninguna quede cruda o quemada',
      señalCorrecta: 'Todas las bolitas se ven de un tamaño similar',
      errorEvitar: 'Hacer unas muy grandes y otras muy chicas, lo que complica calcular el tiempo de fritura'
    },
    {
      numero: 5,
      titulo: 'Rellena y sella',
      descripcion:
        'Toma una bolita y con tu dedo pulgar haz un hueco en el centro, como si fuera un pocito, sin llegar hasta el fondo. Pon ahí una cucharadita de migajas de chicharrón. Junta la masa de los bordes hacia el centro para tapar el relleno, como si cerraras una bolsita, y presiona bien para que quede sellado.',
      tiempo: '15 minutos',
      consejo: 'No le pongas demasiado relleno, es mejor poco y bien cerrado que mucho y que se salga.',
      porQue:
        'Si la masa no queda bien cerrada, el relleno se sale en el aceite caliente y puede provocar salpicaduras.',
      mensajeChef:
        'Este es el paso donde más se equivoca alguien que empieza, así que tómate tu tiempo: mejor lento y bien sellado que rápido y roto.',
      objetivo: 'Bolita rellena, completamente cerrada, sin que se vea el relleno por fuera',
      nivelImportancia: 'clave',
      chefPregunta: '¿Qué pasa si la gordita no queda bien sellada?',
      respuestaEsperada: 'El relleno se sale durante la fritura y puede salpicar aceite caliente',
      señalCorrecta: 'Al voltear la bolita entre tus manos, no se ve el relleno por ningún lado',
      errorEvitar: 'Poner demasiado relleno, lo que hace casi imposible cerrar bien la masa'
    },
    {
      numero: 6,
      titulo: 'Aplana la gordita',
      descripcion:
        'Coloca la bolita rellena entre tus dos palmas y presiona con cuidado, girándola un poco, hasta que quede como una tortilla gruesa (más o menos 1.5 cm, el grosor de tu dedo meñique).',
      tiempo: '5 minutos',
      consejo: 'Presiona parejo por todos lados, no solo del centro, para que no quede más delgada de un lado.',
      porQue:
        'Si la aplanas demasiado, el relleno se puede reventar hacia afuera; si queda muy gruesa, no se cocerá bien por dentro.',
      mensajeChef: 'Piensa en esto como hacer una tortilla, pero gruesa: no buscamos que sea delgada.',
      objetivo: 'Gordita con forma redonda y grosor parejo en toda su superficie',
    
      chefPregunta: '¿Por qué la gordita debe quedar más gruesa que una tortilla normal?',
      respuestaEsperada: 'Porque necesita espacio para el relleno y tiempo para que la masa se cueza por dentro',
      señalCorrecta: 'Todas las gorditas tienen un grosor similar entre sí, como tu dedo meñique',
      errorEvitar: 'Aplanar solo del centro, dejando los bordes más gruesos que el medio'
    },
    {
      numero: 7,
      titulo: 'Calienta el aceite',
      descripcion:
        'Pon una sartén en la estufa a fuego medio y agrega el aceite. Espera unos 3-4 minutos a que caliente. Para saber si ya está listo, mete la punta de un palillo de madera: si salen burbujitas alrededor, ya puedes freír.',
      tiempo: '5 minutos',
      consejo: 'Nunca dejes la sartén con aceite sola en la estufa, ni te alejes de la cocina mientras calienta.',
      porQue:
        'Si el aceite está muy frío, la gordita absorbe grasa y queda aguada; si está muy caliente, se quema por fuera y queda cruda por dentro.',
      mensajeChef:
        'La paciencia con el aceite es la que separa una gordita crujiente de una gordita grasosa. Vale la pena esperar el punto correcto.',
      objetivo: 'Aceite a temperatura media, ni frío ni humeante',
      nivelImportancia: 'clave',
      chefPregunta: '¿Cómo sabes si el aceite ya está listo para freír, sin usar termómetro?',
      respuestaEsperada: 'Metiendo la punta de un palillo de madera: si burbujea alrededor, está listo',
      señalCorrecta: 'Salen burbujas pequeñas y constantes alrededor del palillo',
      errorEvitar: 'Poner las gorditas cuando el aceite todavía está frío, o cuando ya está echando humo'
    },
    {
      numero: 8,
      titulo: 'Fríe con cuidado',
      descripcion:
        'Con mucho cuidado, coloca las gorditas en el aceite caliente usando una espátula o pinzas, alejando tus manos del aceite. Déjalas 3-4 minutos de un lado sin moverlas, luego voltéalas con la espátula y cocina otros 3-4 minutos del otro lado, hasta que ambos lados estén dorados.',
      tiempo: '15 minutos',
      consejo: 'Fríe de 3 a 4 gorditas a la vez, no llenes toda la sartén para que tengan espacio de voltearse.',
      porQue:
        'Mover la gordita antes de tiempo puede romper la costra que se está formando y hacer que se pegue o se abra.',
      mensajeChef:
        'El aceite caliente puede salpicar, así que siempre coloca los alimentos alejando tu cuerpo de la sartén, nunca hacia ti.',
      objetivo: 'Gorditas doradas parejo por ambos lados, cocidas por dentro',
      nivelImportancia: 'clave',
      chefPregunta: '¿Por qué es importante no mover la gordita en los primeros minutos?',
      respuestaEsperada: 'Porque necesita tiempo para formar una costra dorada antes de poder voltearse sin romperse',
      señalCorrecta: 'Al levantar la gordita con la espátula, se ve dorada y se despega fácil de la sartén',
      errorEvitar: 'Voltear la gordita muy pronto o varias veces, lo que puede romperla'
    },
    {
      numero: 9,
      titulo: 'Escurre y sirve',
      descripcion:
        'Con la espátula, saca las gorditas del aceite y ponlas sobre un plato con papel absorbente para quitar el exceso de grasa. Espera 2 minutos a que no estén tan calientes, luego con un cuchillo abre una ranura por un lado y rellena con lechuga, queso fresco y salsa roja al gusto.',
      tiempo: '5 minutos',
      consejo: 'Prueba primero la salsa si nunca la has probado, algunas salsas rojas pueden picar más de lo que esperas.',
      porQue:
        'El papel absorbente quita el exceso de aceite para que la gordita no quede grasosa. Rellenarla ya fría por dentro evita que la lechuga se marchite con el calor.',
      mensajeChef:
        '¡Felicidades! Así se sirven en los puestos del centro histórico de Querétaro: recién salidas del aceite y armadas al momento.',
      objetivo: 'Gordita lista para comer, crujiente por fuera y con relleno fresco',
    
      chefPregunta: '¿Por qué esperamos unos minutos antes de rellenar con lechuga y queso?',
      respuestaEsperada: 'Para que el calor de la gordita recién frita no marchite la lechuga ni derrita el queso',
      señalCorrecta: 'La lechuga se ve fresca y crujiente, no aguada',
      errorEvitar: 'Rellenar la gordita apenas sale del aceite, mientras está hirviendo por dentro'
    }
  ],

  // 💡 INFORMACIÓN EXTRA
  tip:
    'Si es tu primera vez friendo algo, practica primero con una sola gordita para agarrarle el tiempo a tu estufa antes de freír el resto.',
  ahorro:
    'Las migajas son en sí mismas un ingrediente de aprovechamiento: los sobrantes crujientes de freír chicharrón o carnitas, ideales para no desperdiciar nada.',
  errorComun:
    'Rellenar demasiado la gordita, lo que provoca que se abra durante la fritura.',
  tags: ['queretano', 'antojito', 'masa de maíz', 'chicharron', 'callejero', 'principiantes'],
  tipoComida: 'llenadora',
  popularidad: 88,
  historiaChef:
    'En el centro histórico de Santiago de Querétaro, las gorditas de migajas se venden desde temprano en mercados y puestos callejeros, herederas de una tradición del Bajío que convierte los sobrantes de la matanza de cerdo en un platillo con identidad propia.',
  trucoChef:
    'Un puñito de manteca extra en la masa, además de la que ya lleva, hace que quede más suave y menos propensa a agrietarse al freír.',
  momento: 'aprender',
  ocasion: ['diario', 'familia'],
  sustituciones: [
    { falta: 'Migajas de chicharrón', reemplazo: 'Chicharrón prensado picado finamente' },
    { falta: 'Manteca de cerdo', reemplazo: 'Aceite vegetal (cambia ligeramente la textura)' }
  ],
  chefInicio:
    'No importa si nunca has tocado una estufa: hoy vas a hacer, paso a paso, uno de los antojitos más queridos de Querétaro. Yo te acompaño en cada momento.',
  chefFinal:
    'Lo lograste. Aprendiste a amasar, sellar un relleno y freír con seguridad. Ya tienes las bases para cualquier gordita que se te ocurra hacer después.',
  señalesExito: {
    vista: 'Superficie dorada pareja, sin zonas pálidas ni quemadas',
    olor: 'Aroma tostado de masa de maíz frita, con notas del chicharrón',
    textura: 'Corteza crujiente por fuera, masa suave y esponjosa por dentro'
  },
  rescates: [
    { problema: 'La gordita se abrió en el aceite', solucion: 'Sácala con cuidado, deja que se enfríe un par de minutos, y con un poco de masa fresca tapa la abertura antes de volver a freír' },
    { problema: 'Quedó cruda por dentro', solucion: 'Baja el fuego a medio-bajo y déjala un par de minutos más de cada lado; si se dora muy rápido por fuera, tapa la sartén para que el calor penetre sin quemarla' },
    { problema: 'No sé si ya está lista', solucion: 'Corta una a la mitad para revisar: el centro debe verse cocido, sin masa cruda ni pegajosa' }
  ]
};