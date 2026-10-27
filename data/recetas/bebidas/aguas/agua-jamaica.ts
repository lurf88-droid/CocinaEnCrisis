import type { Receta } from '@/types/receta';

export const AGUA_JAMAICA: Receta = {
  id: 'agua-jamaica',
  titulo: 'Agua fresca de Jamaica',
  imagen: require('../../../../assets/images/recetas/bebidas/aguas/agua-jamaica.webp'), 
  descripcion: 'La reina de las aguas frescas. Aprende la diferencia entre hervir y remojar la flor de jamaica para lograr un color rojo vibrante sin amargor.',
  
  cocina: 'mexicana',
  tecnicaPrincipal: 'infusión y extracción de color',
  categoria: 'bebida',
  rolCulinario: 'bebida',
  porciones: 4,
  tiempoMinutos: 15,
  dificultad: 'facil',
  nivelChef: 1,

  aprendizajes: [
    'control de temperatura en infusiones',
    'balance ácido-dulce',
    'extracción de pigmentos naturales'
  ],

  ingredientes: [
    { id: 'flor_jamaica', cantidad: 0.050, unidad: 'kg' }, // Aprox 1 taza
    { id: 'agua', cantidad: 1.500, unidad: 'litro' },
    { id: 'azucar', cantidad: 0.080, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Lava la flor',
      descripcion: 'Enjuaga la flor de jamaica con agua fría para quitarle el polvo.',
      tiempo: '2 minutos',
      consejo: 'No la talles, solo déjala reposar en el agua y escúrrela.',
    },
    {
      numero: 2,
      titulo: 'La infusión',
      descripcion: 'Hierve 1 litro de agua. Apaga el fuego, agrega la flor de jamaica y tapa. Deja reposar por 10 minutos.',
      tiempo: '12 minutos',
      porQue: 'Si hierves la jamaica por mucho tiempo, suelta sabores amargos. Al apagar el fuego, extraes el color y el sabor dulce.',
      mensajeChef: 'El color rojo intenso es señal de que la infusión fue perfecta.',
      nivelImportancia: 'critico',
      señalCorrecta: 'El agua toma un color rojo oscuro brillante.',
    },
    {
      numero: 3,
      titulo: 'Cuela y endulza',
      descripcion: 'Cuela la infusión. Agrega el azúcar y el medio litro de agua fría restante. Mezcla bien hasta disolver.',
      tiempo: '3 minutos',
      consejo: 'Al agregar agua fría, detienes la extracción y enfrías la bebida de inmediato.',
      chefPregunta: '¿Por qué la jamaica se pone amarga si la hierves demasiado?',
      respuestaEsperada: 'Porque los compuestos de la flor se sobre-extraen y liberan taninos amargos.',
    }
  ],

  tip: 'Puedes agregar una ramita de canela o unas rodajas de jengibre durante el reposo para darle un toque diferente.',
  ahorro: 'La flor de jamaica rinde muchísimo y es muy económica.',
  errorComun: 'Hervirla por 30 minutos; la bebida quedará negra y con sabor a medicina.',
  popularidad: 95,
  tags: ['bebida', 'tradicional', 'mexicana', 'economica', 'saludable'],
  tipoComida: 'barata',
  historiaChef: 'La flor de jamaica llegó a México desde África y Asia. Los mexicanos la adoptaron como agua fresca, convirtiéndola en una de las bebidas más populares del país.',
  trucoChef: 'Si quieres un sabor más intenso, deja la jamaica reposando en el agua caliente por 30 minutos en lugar de 10.',
  sustituciones: [
    { falta: 'azucar', reemplazo: 'miel o piloncillo rallado' }
  ],
  chefInicio: 'Hoy vamos a preparar la bebida más refrescante de México. El secreto está en no hervirla.',
  chefFinal: '¡Listo! Tienes un agua fresca con el color perfecto y sin amargor.',
  señalesExito: {
    vista: 'Color rojo rubí brillante.',
    olor: 'Aroma floral suave.',
    textura: 'Líquida y refrescante.',
  },
  rescates: [
    { problema: 'Quedó muy amarga', solucion: 'Agrega más agua y azúcar para diluir el sabor.' }
  ]
};