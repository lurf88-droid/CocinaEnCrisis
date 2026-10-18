import type { ResultadoBusqueda } from '@/types/receta';

import { RecomendacionCard } from './RecomendacionCard';

type Props = {
  receta: ResultadoBusqueda | null;
};

export function RecommendationSection({
  receta,
}: Props) {

  if (!receta) {
    return null;
  }

  return (
    <RecomendacionCard receta={receta} />
  );
}