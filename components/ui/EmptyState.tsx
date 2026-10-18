import { StyleSheet, View } from 'react-native';

import { AppCard } from './AppCard';
import { AppText } from './AppText';
import { Colors, Radius, Spacing } from '@/constants/theme';

type Props = {
  emoji?: string;
  titulo: string;
  descripcion: string;
};

export function EmptyState({
  emoji = '🏡',
  titulo,
  descripcion,
}: Props) {
  return (
    <AppCard style={styles.card}>
      <AppText style={styles.emoji}>
        {emoji}
      </AppText>

      <AppText variant="subtitle" style={styles.title}>
        {titulo}
      </AppText>

      <AppText muted style={styles.description}>
        {descripcion}
      </AppText>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    paddingVertical: 40,
    marginTop: Spacing.xl,
  },

  emoji: {
    fontSize: 54,
    marginBottom: Spacing.md,
  },

  title: {
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },

  description: {
    width: '90%',
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 300,
  },
});