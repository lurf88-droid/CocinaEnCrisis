import { View, StyleSheet } from 'react-native';
import type { ReactNode } from 'react';

import { AppText } from './AppText';

import {
  KitchenColors,
  Spacing,
} from '@/constants/theme';

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function AppSection({
  title,
    subtitle,
  children,
}: Props) {
  return (
    <View style={styles.container}>
      <AppText
        variant="subtitle"
        style={styles.title}
      >
        {title}
      </AppText>
{subtitle && (
  <AppText style={styles.subtitle}>
    {subtitle}
  </AppText>
)}
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.xl,
  },

  title: {
    color: KitchenColors.text,
    marginBottom: Spacing.md,
  },
subtitle: {
 color: KitchenColors.primarySoft,
  marginBottom: Spacing.sm,
},
  content: {
    gap: Spacing.md,
  },
});