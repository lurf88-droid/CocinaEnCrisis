import type { ChefMode } from './chefMode';

export function generarConsejoChef(
  modo: ChefMode,
  presupuesto: number
) {

  if (modo === 'ahorro') {

    if (presupuesto <= 100) {
      return {
        titulo: '💰 Modo ahorro activado',
        mensaje:
          'El Chef buscará aprovechar al máximo tus ingredientes y evitar gastos innecesarios.',
      };
    }

    return {
      titulo: '🪙 Cocina inteligente',
      mensaje:
        'Tienes margen para mejorar tu despensa. El Chef priorizará recetas con buena relación costo-beneficio.',
    };
  }

  if (modo === 'rapido') {
    return {
      titulo: '⚡ Modo rápido activado',
      mensaje:
        'El Chef dará prioridad a recetas que puedas preparar en poco tiempo.',
    };
  }

  if (modo === 'antojo') {
    return {
      titulo: '🍽️ Modo antojo activado',
      mensaje:
        'Hoy el sabor manda. El Chef buscará opciones más especiales para disfrutar.',
    };
  }

  return {
    titulo: '👨‍🍳 El Chef analiza tu cocina',
    mensaje:
      'Estoy buscando la mejor opción con lo que tienes disponible.',
  };
}