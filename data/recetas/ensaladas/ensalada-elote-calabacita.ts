import type { Receta } from '@/types/receta';

export const ENSALADA_ELOTE_CALABACITA: Receta = {
  id: 'ensalada-elote-calabacita',
  titulo: 'Ensalada caliente de elote y calabacita',
  imagen: require('../../../assets/images/recetas/ensaladas/ensalada-elote-calabacita.webp'), 
  descripcion: 'Una ensalada diferente, servida caliente. El dulzor del elote se mezcla con la frescura de la calabacita y un toque de limón que despierta todos los sentidos.',
  
  cocina: 'mexicana',
  tecnicaPrincipal: 'salteado rápido y equilibrio de texturas',
  categoria: 'cena',
  rolCulinario: 'plato_principal',
  porciones: 2,
  tiempoMinutos: 15,
  dificultad: 'facil',
  nivelChef: 1,

  aprendizajes: [
    'salteado a fuego alto',
    'punto de cocción de la calabacita',
    'uso de elote en grano'
  ],

  ingredientes: [
    { id: 'elote', cantidad: 0.200, unidad: 'kg' }, // Granos
    { id: 'calabacita', cantidad: 2, unidad: 'pieza' },
    { id: 'jitomate', cantidad: 1, unidad: 'pieza' },
    { id: 'cebolla_blanca', cantidad: 0.050, unidad: 'kg' },
    { id: 'limon', cantidad: 1, unidad: 'pieza' },
    { id: 'aceite_vegetal', cantidad: 0.020, unidad: 'litro' },
    { id: 'sal', cantidad: 0.003, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Pica todo',
      descripcion: 'Pica la calabacita en cubos, el jitomate en cubos, la cebolla en tiras finas y desgrana el elote (si es fresco).',
      tiempo: '4 minutos',
      consejo: 'Corta la calabacita del mismo tamaño que los granos de elote para que quede uniforme.',
    },
    {
      numero: 2,
      titulo: 'Saltea la cebolla',
      descripcion: 'En un sartén con aceite a fuego medio-alto, acitrona la cebolla por 2 minutos.',
      tiempo: '2 minutos',
      porQue: 'El fuego alto sella la cebolla y la hace más dulce, sin quemarla.',
      nivelImportancia: 'clave',
    },
    {
      numero: 3,
      titulo: 'Agrega el elote y la calabacita',
      descripcion: 'Agrega el elote y la calabacita. Saltea por 5 minutos moviendo constantemente. La calabacita debe estar cocida pero firme.',
      tiempo: '5 minutos',
      consejo: 'No le pongas agua, se cocina con su propio vapor y el aceite.',
      chefPregunta: '¿Por qué no debemos dejar que la calabacita se pase de cocción?',
      respuestaEsperada: 'Porque libera mucha agua, se vuelve blanda y la ensalada quedará aguada.',
      nivelImportancia: 'critico',
    },
    {
      numero: 4,
      titulo: 'Termina con frescura',
      descripcion: 'Apaga el fuego. Agrega el jitomate, el jugo de limón y sal. Mezcla y sirve caliente.',
      tiempo: '2 minutos',
      mensajeChef: 'El jitomate se agrega al final para que no se deshaga.',
      señalCorrecta: 'Verduras brillantes y firmes, con aroma a limón.',
    }
  ],

  tip: 'Puedes agregar queso fresco desmoronado al servir para darle un toque fresco.',
  ahorro: 'Ideal para usar elotes que ya te sobraron del día anterior.',
  errorComun: 'Cocinar en exceso la calabacita.',
  popularidad: 80,
  tags: ['ensalada', 'caliente', 'vegetariano', 'rapido', 'saludable'],
  tipoComida: 'barata',
  historiaChef: 'Las ensaladas calientes son una tendencia moderna que rompe con la idea de que las ensaladas siempre deben ser frías. Esta receta combina dos cultivos básicos de Mesoamérica.',
  trucoChef: 'Un poco de chile en polvo o pimienta al final le da un contraste picante que resalta el dulzor del elote.',
  sustituciones: [
    { falta: 'elote fresco', reemplazo: 'elote en lata, bien escurrido' }
  ],
  chefInicio: 'Hoy rompemos las reglas: una ensalada caliente. La técnica está en el salteado rápido.',
  chefFinal: '¡Listo! Tienes una ensalada templada, dulce y ácida que reconforta.',
  señalesExito: {
    vista: 'Cubos verdes de calabacita, granos amarillos de elote y trozos rojos de jitomate.',
    olor: 'Aroma dulce y salteado.',
    textura: 'Tierna pero firme.',
  },
  rescates: [
    { problema: 'Sabe un poco sosa', solucion: 'Agrega un toque más de sal y limón; las verduras lo agradecen muchísimo.' }
  ]
};