import type { Receta } from '@/types/receta';

export const AGUA_COCO_LIMON: Receta = {
  id: 'agua-coco-limon',
  titulo: 'Agua de coco y limón',
  imagen: require('../../../../assets/images/recetas/bebidas/aguas/agua-coco-limon.webp'),
  descripcion: 'La bebida más hidratante y tropical. Aprende a combinar el agua de coco natural con cítricos para crear una bebida isotónica natural sin azúcares añadidos.',
  cocina: 'tropical',
  tecnicaPrincipal: 'mezcla en frío y balance electrolítico',
  categoria: 'bebida',
  rolCulinario: 'bebida',
  porciones: 4,
  tiempoMinutos: 5,
  dificultad: 'facil',
  nivelChef: 1,
  aprendizajes: ['hidratación natural', 'uso de agua de coco', 'balance de sabores'],
  ingredientes: [
    { id: 'agua_de_coco', cantidad: 1.000, unidad: 'litro' },
    { id: 'limon', cantidad: 2, unidad: 'pieza' },
    { id: 'agua', cantidad: 0.500, unidad: 'litro' },
    { id: 'azucar', cantidad: 0.010, unidad: 'kg' }, // Opcional
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Prepara la base',
      descripcion: 'Si usas coco natural, abre el coco y extrae el agua. Si usas agua de coco embotellada, viértela en una jarra.',
      tiempo: '2 minutos',
      mensajeChef: 'El agua de coco es un regalo de la naturaleza.',
    },
    {
      numero: 2,
      titulo: 'Añade el limón',
      descripcion: 'Exprime el jugo de limón. Prueba y agrega azúcar solo si es necesario (el agua de coco ya es dulce).',
      tiempo: '1 minuto',
      porQue: 'El limón aporta vitamina C y realza el sabor tropical del coco.',
    },
    {
      numero: 3,
      titulo: 'Mezcla y sirve',
      descripcion: 'Agrega el agua y mezcla. Sirve con hielo y unas rodajas de limón flotando.',
      tiempo: '1 minuto',
      chefPregunta: '¿Por qué el agua de coco es tan buena para después de hacer ejercicio?',
      respuestaEsperada: 'Porque contiene electrolitos naturales como potasio, sodio y magnesio, que se pierden al sudar.',
      señalCorrecta: 'Bebida transparente y refrescante con un aroma cítrico.',
    }
  ],
  tip: 'Si tienes pulpa de coco, puedes licuar un poco y colarla para darle textura.',
  ahorro: 'En zonas tropicales, el coco es muy barato; fuera de ellas, el agua embotellada es una buena opción.',
  errorComun: 'Agregar azúcar de más; el agua de coco ya tiene azúcares naturales.',
  popularidad: 88,
  tags: ['bebida', 'coco', 'tropical', 'hidratante', 'isotonica'],
  tipoComida: 'familia',
  historiaChef: 'El agua de coco ha sido usada como bebida hidratante por siglos en las regiones tropicales. En los últimos años, se volvió tendencia mundial por sus propiedades isotónicas.',
  chefInicio: 'Hoy vamos a hacer una bebida que te hidrata de verdad. El coco y el limón son una pareja perfecta.',
  chefFinal: '¡Listo! Una bebida tropical y funcional.',
  señalesExito: { vista: 'Líquido transparente con rodajas de limón.', olor: 'Aroma dulce a coco.', textura: 'Ligera y refrescante.' },
  rescates: [{ problema: 'Sabe muy simple', solucion: 'Agrega una pizca de sal; el sodio resalta el sabor del coco.' }]
};