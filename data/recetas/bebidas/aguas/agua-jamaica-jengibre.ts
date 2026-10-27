import type { Receta } from '@/types/receta';

export const AGUA_JAMAICA_JENGIBRE: Receta = {
  id: 'agua-jamaica-jengibre',
  titulo: 'Agua de jamaica con jengibre',
  imagen: require('../../../../assets/images/recetas/bebidas/aguas/agua-jamaica-jengibre.webp'),
  descripcion: 'Una versión premium del clásico. El jengibre le da un toque picante y medicinal que contrasta con la acidez de la jamaica, creando una bebida compleja y sofisticada.',
  cocina: 'mexicana',
  tecnicaPrincipal: 'infusión de flor seca y raíz fresca',
  categoria: 'bebida',
  rolCulinario: 'bebida',
  porciones: 4,
  tiempoMinutos: 15,
  dificultad: 'facil',
  nivelChef: 2,
  aprendizajes: ['infusión combinada', 'extracción de sabores en caliente', 'bebidas funcionales'],
  ingredientes: [
    { id: 'flor_jamaica', cantidad: 0.050, unidad: 'kg' },
    { id: 'jengibre', cantidad: 0.030, unidad: 'kg' },
    { id: 'canela', cantidad: 0.005, unidad: 'kg' }, // 1 raja
    { id: 'azucar', cantidad: 0.080, unidad: 'kg' },
    { id: 'agua', cantidad: 1.500, unidad: 'litro' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Hierve las especias',
      descripcion: 'En una olla, pon 1 litro de agua con el jengibre en rodajas y la canela. Hierve por 5 minutos.',
      tiempo: '5 minutos',
      porQue: 'El jengibre y la canela necesitan calor para liberar sus aceites esenciales.',
      nivelImportancia: 'clave',
    },
    {
      numero: 2,
      titulo: 'Infusiona la jamaica',
      descripcion: 'Apaga el fuego. Agrega la flor de jamaica y tapa la olla. Deja reposar 10 minutos.',
      tiempo: '10 minutos',
      consejo: 'No hiervas la jamaica, se amarga.',
      nivelImportancia: 'critico',
    },
    {
      numero: 3,
      titulo: 'Cuela y endulza',
      descripcion: 'Cuela la infusión. Agrega el azúcar y el medio litro de agua fría restante. Sirve muy frío.',
      tiempo: '2 minutos',
      chefPregunta: '¿Por qué hervir la jamaica le da un sabor amargo?',
      respuestaEsperada: 'Porque los taninos de la flor se liberan en exceso cuando se exponen a calor prolongado.',
    }
  ],
  tip: 'Si quieres un sabor más intenso, deja infusionar por 20 minutos en lugar de 10.',
  ahorro: 'La jamaica y el jengibre son económicos y rinden muchísimo.',
  errorComun: 'Hervir la jamaica y el jengibre por mucho tiempo.',
  popularidad: 88,
  tags: ['bebida', 'jamaica', 'jengibre', 'funcional', 'mexicana'],
  tipoComida: 'barata',
  historiaChef: 'La jamaica llegó a México desde África en la época colonial. La combinación con jengibre es una adaptación moderna que resalta sus propiedades medicinales.',
  chefInicio: 'Hoy vamos a darle un giro de 180 grados al agua de jamaica. El jengibre la convierte en una bebida de lujo.',
  chefFinal: '¡Excelente! Tienes un agua fresca con un toque picante y sofisticado.',
  señalesExito: { vista: 'Color rojo oscuro intenso.', olor: 'Aroma a jamaica con un toque fresco de jengibre.', textura: 'Líquida y refrescante.' },
  rescates: [{ problema: 'Sabe muy picante', solucion: 'Agrega más agua y un poco de azúcar para suavizar el jengibre.' }]
};