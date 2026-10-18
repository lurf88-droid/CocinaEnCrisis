import type { Receta } from '@/types/receta';

export const PLATANOS_FRITOS_CREMA: Receta = {
  id: 'platanos-fritos-crema',
  titulo: 'Plátanos fritos con crema',
imagen: require('../../../assets/images/recetas/postres/platanos-fritos-crema.webp'),
  descripcion: 'Un postre caliente, dulce y reconfortante. La caramelización natural del plátano se combina perfecto con la crema fresca.',

  categoria: 'postre',
  rolCulinario: 'postre',
  
  porciones: 2,
  tiempoMinutos: 15,
  dificultad: 'facil',
  
  cocina: 'mexicana',
  tecnicaPrincipal: 'caramelización en sartén',
  aprendizajes: ['control de temperatura en sartén', 'caramelización de azúcares'],

  ingredientes: [
    { id: 'platano', cantidad: 3, unidad: 'pieza' },
    { id: 'mantequilla', cantidad: 0.03, unidad: 'kg' },
    { id: 'crema', cantidad: 0.1, unidad: 'litro' },
    { id: 'azucar', cantidad: 0.02, unidad: 'kg' },
    { id: 'canela', cantidad: 0.005, unidad: 'kg' },
  ],

  pasos: [
    {
      numero: 1,
      titulo: 'Prepara el plátano',
      descripcion: 'Pela los plátanos y córtalos en rodajas gruesas (de aproximadamente 1 cm de grosor).',
      tiempo: '3 minutos',
    },
    {
      numero: 2,
      titulo: 'Derrite la mantequilla',
      descripcion: 'En un sartén antiadherente, derrite la mantequilla a fuego medio. No dejes que se queme o se ponga café.',
      tiempo: '1 minuto',
    },
    {
      numero: 3,
      titulo: 'Dora los plátanos',
      descripcion: 'Coloca las rodajas de plátano en el sartén. Déjalas cocinar sin moverlas durante 2 a 3 minutos por cada lado, hasta que estén doradas.',
      tiempo: '6 minutos',
    },
    {
      numero: 4,
      titulo: 'Sirve y decora',
      descripcion: 'Retira los plátanos del fuego. Sirve en un plato, baña generosamente con crema y espolvorea un poco de azúcar y canela.',
      tiempo: '2 minutos',
    }
  ],

  tip: 'Si usas plátano macho, asegúrate de cocinarlo bien hasta que esté suave.',
  nivelChef: 1,
  tags: ['postre', 'dulce', 'frito', 'rapida', 'mexicana'],
  tipoComida: 'familia',
  popularidad: 88,
};