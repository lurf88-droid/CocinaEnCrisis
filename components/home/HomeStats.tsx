import { StyleSheet, View } from 'react-native';

import { StatCard } from '@/components/ui/StatCard';
import { AppSection } from '@/components/ui/AppSection';

type Props = {
  recetas: number;
  ingredientes: number;
  ahorro: number;
};

export function HomeStats({
  recetas,
  ingredientes,
  ahorro,
}: Props) {
  return (
    <AppSection
      title="Tu cocina hoy"
      subtitle="Resumen de tu despensa"
    >
      <View style={styles.row}>
        <StatCard
          icon="🍳"
          value={recetas}
          label="Recetas"
        />

        <StatCard
          icon="🥫"
          value={ingredientes}
          label="Ingredientes"
        />

        <StatCard
          icon="💰"
          value={`$${Math.round(ahorro)}`}
          label="Ahorro"
        />
      </View>
    </AppSection>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 12,
  },
});