import {
  obtenerIngrediente,
  type IngredienteCatalogo,
} from '@/data/catalogo-ingredientes';

export function agruparDespensa(
  ingredientes: string[]
) {
  const grupos: Partial<
    Record<IngredienteCatalogo['categoria'], string[]>
  > = {};

  ingredientes.forEach((id) => {
    const ingrediente = obtenerIngrediente(id);

    if (!ingrediente) return;

    const categoria = ingrediente.categoria;

    if (!grupos[categoria]) {
      grupos[categoria] = [];
    }

    grupos[categoria]!.push(ingrediente.id);
  });

  return grupos;
}