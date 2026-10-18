import { StyleSheet, View } from 'react-native';

import { AppText } from './AppText';

import { Rustic } from '@/constants/design-system';

type Props = {
  icon: string;
  value: string | number;
  label: string;
};

export function StatCard({
  icon,
  value,
  label,
}: Props) {
  return (
    <View style={styles.card}>
      <AppText style={styles.icon}>
        {icon}
      </AppText>

      <AppText style={styles.value}>
        {value}
      </AppText>

      <AppText style={styles.label}>
        {label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,

    minHeight: 120,

    padding: Rustic.spacing.lg,

    borderRadius: Rustic.radius.card,

    backgroundColor: Rustic.colors.card,

    borderWidth: 1,
    borderColor: Rustic.colors.border,

    justifyContent: 'center',
    alignItems: 'center',

    ...Rustic.shadow.card,
  },

  icon: {
    fontSize: 28,
    marginBottom: Rustic.spacing.sm,
  },

  value: {
    color: Rustic.colors.cream,
    fontSize: 26,
    fontWeight: '900',
  },

  label: {
    marginTop: 4,
    color: Rustic.colors.textMuted,
    fontSize: 13,
    textAlign: 'center',
  },
});