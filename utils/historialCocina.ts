export type Preparacion = {
  id: string;
  recetaId: string;
  preparadaEn: string | null;
};

/** Conserva el orden antiguo sin inventar fechas de preparación. */
export function cargarHistorial(preparaciones: unknown, anterior: unknown): Preparacion[] {
  if (preparaciones !== null) {
    if (!Array.isArray(preparaciones)) throw new Error('Historial de preparaciones inválido');
    const ids = new Set<string>();
    return preparaciones.map((item: unknown) => {
      if (!item || typeof item !== 'object') throw new Error('Preparación inválida');
      const { id, recetaId, preparadaEn } = item as Partial<Preparacion>;
      if (typeof id !== 'string' || !id || ids.has(id) ||
          typeof recetaId !== 'string' || !recetaId.trim() ||
          (preparadaEn !== null && (typeof preparadaEn !== 'string' || !Number.isFinite(Date.parse(preparadaEn))))) {
        throw new Error('Preparación inválida');
      }
      ids.add(id);
      return { id, recetaId, preparadaEn };
    });
  }
  if (anterior === null) return [];
  if (!Array.isArray(anterior) || anterior.some(id => typeof id !== 'string' || !id.trim())) {
    throw new Error('Historial anterior inválido');
  }
  return anterior.map((recetaId: string, index: number) => ({
    id: `anterior:${index}`, recetaId, preparadaEn: null,
  }));
}

export function registrarPreparacion(historial: Preparacion[], recetaId: string, fecha: string): Preparacion[] {
  if (!recetaId.trim() || !Number.isFinite(Date.parse(fecha))) throw new Error('Preparación inválida');
  return [...historial, { id: `${fecha}:${historial.length}`, recetaId, preparadaEn: fecha }];
}

export function fechaPreparacion(fecha: string | null): string {
  return fecha === null
    ? 'Preparación anterior · sin fecha registrada'
    : new Date(fecha).toLocaleString('es-MX', {
        day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
      });
}
