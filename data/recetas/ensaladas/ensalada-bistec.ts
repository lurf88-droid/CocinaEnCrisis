import type { Receta } from '@/types/receta';

export const ENSALADA_BISTEC: Receta = {
  id: 'ensalada-bistec',
  titulo: 'Ensalada de bistec a la parrilla',
 imagen: require('../../../assets/images/recetas/ensaladas/ensalada-bistec'), 
  descripcion: 'Una ensalada contundente para los amantes de la carne. Aprende a cocinar el bistec en su punto exacto y a cortarlo en contra del grano para que quede súper suave.',
  
  cocina: 'internacional',
  tecnicaPrincipal: 'sellado de carne y corte contra el grano',
  categoria: 'comida',
  rolCulinario: 'plato_principal',
  porciones: 2,
  tiempoMinutos: 20,
  dificultad: 'media',
  nivelChef: 3,

  aprendizajes: [
    'punto de cocción de la carne',
    'corte contra el grano para suavizar',
    'ensamblaje de ensaladas tibias'
  ],

  ingredientes: [
    { id: 'bistec', cantidad: 0.250, unidad: 'kg' },
    { id: 'lechuga', cantidad: 0.150, unidad: 'kg' },
    { id: 'jitomate', cantidad: 1, unidad: 'pieza' },
    { id: 'cebolla_blanca', cantidad: 0.050, unidad: 'kg' },
    { id: 'limon', cantidad: 2, unidad: 'pieza' },
    { id: 'aceite_vegetal', cantidad: 0.020, unidad: 'litro' },
    { id: 'sal', cantidad: 0.005, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Sazona el bistec',
      descripcion: 'Saca el bistec del refrigerador 10 minutos antes (para que no esté helado). Sazónalo con sal de ambos lados.',
      tiempo: '10 minutos',
      consejo: 'Si lo cocinas directo del refri, se cuece de forma dispareja (frío por dentro, quemado por fuera).',
      nivelImportancia: 'clave',
    },
    {
      numero: 2,
      titulo: 'Sella la carne',
      descripcion: 'Calienta un sartén o comal a fuego muy alto con un poco de aceite. Cocina el bistec 3-4 minutos por lado para un término medio.',
      tiempo: '8 minutos',
      porQue: 'El fuego alto crea la costra de Maillard (la parte dorada) que le da todo el sabor a la carne.',
      mensajeChef: 'El fuego alto es tu mejor amigo para una carne deliciosa.',
      señalCorrecta: 'La carne está dorada por fuera y sonrosada por dentro.',
    },
    {
      numero: 3,
      titulo: 'Deja reposar la carne (Súper importante)',
      descripcion: 'Pasa el bistec a una tabla y déjalo reposar 5 minutos antes de cortarlo.',
      tiempo: '5 minutos',
      porQue: 'Si lo cortas de inmediato, todos los jugos se escapan. Al reposar, los jugos se redistribuyen y la carne queda más jugosa.',
      chefPregunta: '¿Qué pasa si cortas un bistec recién sacado del fuego?',
      respuestaEsperada: 'Pierde todos sus jugos y queda seco, aunque lo hayas cocinado bien.',
      nivelImportancia: 'critico',
    },
    {
      numero: 4,
      titulo: 'Corta y sirve',
      descripcion: 'Corta el bistec en tiras finas *en contra del grano* (perpendicular a las fibras de la carne). Sirve sobre la lechuga con jitomate y cebolla, aderezado con limón y sal.',
      tiempo: '3 minutos',
      consejo: 'Cortar contra el grano rompe las fibras de la carne, haciéndola mucho más suave al masticar.',
      señalCorrecta: 'Tiras de carne jugosas y tiernas.',
    }
  ],

  tip: 'Para un extra de sabor, agrega un poco de salsa inglesa al sartén mientras se cocina la carne.',
  ahorro: 'El bistec para deshebrar o milanesa es más barato y funciona perfecto para esta ensalada.',
  errorComun: 'Cortar la carne en el mismo sentido de las fibras, lo que la hace chiclosa.',
  popularidad: 90,
  tags: ['ensalada', 'bistec', 'parrilla', 'proteina', 'cena'],
  tipoComida: 'familia',
  historiaChef: 'Las ensaladas con carne a la parrilla se volvieron muy populares en los restaurantes de Estados Unidos en los años 80, como una forma de comer carne sin la culpa de los acompañamientos pesados.',
  trucoChef: 'Un toque de pimienta negra molida justo al momento de servir realza el sabor de la carne.',
  sustituciones: [
    { falta: 'bistec', reemplazo: 'pechuga de pollo a la plancha o portobello asado' }
  ],
  chefInicio: 'Hoy vamos a aprender a cocinar carne para ensalada. El truco está en el reposo y el corte.',
  chefFinal: '¡Excelente! Tienes una carne jugosa y una ensalada con proteína de calidad.',
  señalesExito: {
    vista: 'Tiras de carne dorada sobre vegetales frescos.',
    olor: 'Aroma potente a carne asada y limón.',
    textura: 'Carne suave y vegetales crujientes.',
  },
  rescates: [
    { problema: 'La carne quedó muy dura', solucion: 'Asegúrate de haberla cortado contra el grano. Si sigue dura, es porque el corte tenía mucho nervio.' }
  ]
};