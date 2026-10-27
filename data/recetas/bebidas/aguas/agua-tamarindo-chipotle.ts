import type { Receta } from '@/types/receta';

export const AGUA_TAMARINDO_CHIPOTLE: Receta = {
  id: 'agua-tamarindo-chipotle',
  titulo: 'Agua de tamarindo con chipotle',
 imagen: require('../../../../assets/images/recetas/bebidas/aguas/agua-tamarindo-chipotle.webp'),
  descripcion: 'Una bebida atrevida y sofisticada. El dulzor del tamarindo se fusiona con el ahumado del chipotle para crear una experiencia de sabor intensa y adictiva.',
  cocina: 'mexicana',
  tecnicaPrincipal: 'extracción de pulpa y equilibrio ahumado-dulce',
  categoria: 'bebida',
  rolCulinario: 'bebida',
  porciones: 4,
  tiempoMinutos: 20,
  dificultad: 'media',
  nivelChef: 3,
  aprendizajes: ['uso de chiles ahumados en bebidas', 'balance picante-dulce', 'extracción de pulpa de tamarindo'],
  ingredientes: [
    { id: 'tamarindo', cantidad: 0.200, unidad: 'kg' },
   { id: 'chile_chipotle_seco', cantidad: 0.010, unidad: 'kg' }, // 10g = 1 chile aprox
    { id: 'azucar', cantidad: 0.100, unidad: 'kg' },
    { id: 'agua', cantidad: 1.500, unidad: 'litro' },
    { id: 'limon', cantidad: 1, unidad: 'pieza' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Extrae la pulpa del tamarindo',
      descripcion: 'Hierve el tamarindo en 1 litro de agua por 10 minutos. Machaca, cuela y reserva la pulpa.',
      tiempo: '15 minutos',
      consejo: 'Presiona bien la pulpa en el colador para extraer todo el sabor.',
      nivelImportancia: 'clave',
    },
    {
      numero: 2,
      titulo: 'Agrega el chipotle',
      descripcion: 'En la licuadora, mezcla la pulpa de tamarindo con el chile chipotle (solo 1, es muy potente) y un poco de agua. Licúa bien.',
      tiempo: '2 minutos',
      porQue: 'El chipotle aporta un sabor ahumado que contrasta con la acidez del tamarindo.',
      mensajeChef: 'El chipotle es un toque de humo que cambia todo el juego.',
      nivelImportancia: 'critico',
    },
    {
      numero: 3,
      titulo: 'Ajusta y sirve',
      descripcion: 'Cuela la mezcla (para quitar cualquier resto de chile), agrega el azúcar y el agua restante. Exprime el limón, mezcla y sirve con hielo.',
      tiempo: '3 minutos',
      chefPregunta: '¿Por qué el chipotle se llama así?',
      respuestaEsperada: 'Porque es un jalapeño ahumado y secado, proceso que le da su sabor ahumado característico.',
    }
  ],
  tip: 'Moja el borde del vaso con limón y escarcha con sal y chile en polvo, como si fuera una michelada sin alcohol.',
  ahorro: 'Un solo chile chipotle le da sabor a toda la jarra.',
  errorComun: 'Agregar demasiado chipotle; el picante y el humo pueden opacar el tamarindo.',
  popularidad: 85,
  tags: ['bebida', 'tamarindo', 'chipotle', 'picante', 'premium', 'mexicana'],
  tipoComida: 'familia',
  historiaChef: 'Esta bebida nace de la tradición mexicana de mezclar dulce y picante. Es una reinterpretación de las aguas frescas tradicionales con un toque de cocina de autor.',
  chefInicio: 'Hoy vamos a jugar con el fuego y el dulce. Esta bebida no es para cualquiera.',
  chefFinal: '¡Impresionante! Tienes una bebida de nivel mixológico sin una gota de alcohol.',
  señalesExito: { vista: 'Color marrón rojizo oscuro.', olor: 'Aroma a tamarindo con un toque ahumado.', textura: 'Líquida y refrescante.' },
  rescates: [{ problema: 'Quedó muy picante', solucion: 'Agrega más agua y azúcar; el dulzor calma el picante.' }]
};