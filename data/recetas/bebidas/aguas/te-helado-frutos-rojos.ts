import type { Receta } from '@/types/receta';

export const TE_HELADO_FRUTOS_ROJOS: Receta = {
  id: 'te-helado-frutos-rojos',
  titulo: 'Té helado de frutos rojos',
 imagen: require('../../../../assets/images/recetas/bebidas/aguas/te-helado-frutos-rojos.webp'),
  descripcion: 'Un té helado premium con un color rojo profundo y un sabor afrutado. Aprende a combinar té negro con frutos rojos para crear una bebida refrescante y elegante.',
  cocina: 'internacional',
  tecnicaPrincipal: 'infusión de té y maceración de frutos',
  categoria: 'bebida',
  rolCulinario: 'bebida',
  porciones: 4,
  tiempoMinutos: 20,
  dificultad: 'facil',
  nivelChef: 2,
  aprendizajes: ['infusión de té sin amargor', 'maceración de frutos rojos', 'balance tánico-afrutado'],
  ingredientes: [
    { id: 'te_negro', cantidad: 0.010, unidad: 'kg' }, // 4 bolsitas aprox
    { id: 'fresa', cantidad: 0.200, unidad: 'kg' },
    { id: 'arandano', cantidad: 0.100, unidad: 'kg' },
    { id: 'limon', cantidad: 1, unidad: 'pieza' },
    { id: 'azucar', cantidad: 0.060, unidad: 'kg' },
    { id: 'agua', cantidad: 1.500, unidad: 'litro' },
  ],
  pasos: [
    {
      numero: 1,
      titulo: 'Prepara el té',
      descripcion: 'Hierve 1 litro de agua. Apaga el fuego, agrega el té negro y tapa por 5 minutos. Cuela y deja enfriar.',
      tiempo: '10 minutos',
      consejo: 'No dejes el té más de 5 minutos o se amarga.',
      porQue: 'El té negro libera taninos que se vuelven amargos si se sobreextraen.',
      nivelImportancia: 'critico',
    },
    {
      numero: 2,
      titulo: 'Macera los frutos rojos',
      descripcion: 'Corta las fresas y los arándanos en trozos. En un tazón, mézclalos con el azúcar y déjalos reposar 10 minutos.',
      tiempo: '10 minutos',
      porQue: 'El azúcar extrae el jugo de las frutas, creando un almíbar natural con su color rojo.',
      nivelImportancia: 'clave',
    },
    {
      numero: 3,
      titulo: 'Mezcla y enfría',
      descripcion: 'Agrega el té frío a los frutos macerados, añade el jugo de limón y el agua restante. Sirve con hielo.',
      tiempo: '2 minutos',
      chefPregunta: '¿Por qué el té negro combina tan bien con los frutos rojos?',
      respuestaEsperada: 'Porque los taninos del té equilibran el dulzor de la fruta, creando un sabor complejo.',
    }
  ],
  tip: 'Puedes congelar algunos arándanos y usarlos como hielos decorativos.',
  ahorro: 'Los frutos rojos congelados son más baratos y funcionan perfecto.',
  errorComun: 'Hervir el té con la fruta, se amarga y pierde el color.',
  popularidad: 88,
  tags: ['bebida', 'te', 'frutos_rojos', 'premium', 'helado'],
  tipoComida: 'familia',
  historiaChef: 'El té helado se popularizó en Estados Unidos a principios del siglo XX. En la cocina moderna, se combina con frutas para crear bebidas sofisticadas y refrescantes.',
  chefInicio: 'Hoy vamos a preparar un té helado que parece de cafetería. Los frutos rojos son el toque brillante.',
  chefFinal: '¡Excelente! Tienes un té helado premium de color espectacular.',
  señalesExito: { vista: 'Líquido rojo oscuro con frutas flotando.', olor: 'Aroma a té y frutos rojos.', textura: 'Líquida y refrescante.' },
  rescates: [{ problema: 'El té quedó amargo', solucion: 'Agrega un poco más de azúcar y limón para compensar.' }]
};