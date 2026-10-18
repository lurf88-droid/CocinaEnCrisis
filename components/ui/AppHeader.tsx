import { View, StyleSheet } from 'react-native';

import { AppText } from './AppText';

import {
  KitchenColors,
  Spacing,
} from '@/constants/theme';

type Props = {
  emoji?: string;
  title: string;
  subtitle?: string;
};

export function AppHeader({
  emoji,
  title,
  subtitle,
}: Props) {
  return (
    <View style={styles.container}>
      <AppText
        variant="title"
        style={styles.title}
      >
        {emoji} {title}
      </AppText>

      {subtitle && (
        <AppText
          style={styles.subtitle}
        >
          {subtitle}
        </AppText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.xl,
  },

  title: {
    color: KitchenColors.text,
  },

  subtitle: {
    marginTop: Spacing.sm,
    color: KitchenColors.textMuted,
    lineHeight: 22,
  },
});