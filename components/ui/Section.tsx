import { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

import { AppText } from './AppText';
import { Colors, Radius, Spacing } from '@/constants/theme';

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText variant="subtitle" style={styles.title}>
          {title}
        </AppText>

        {subtitle && (
          <AppText
            muted
            style={styles.subtitle}
          >
            {subtitle}
          </AppText>
        )}
      </View>

      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.xxl,
  },

  header: {
    marginBottom: Spacing.md,
  },

  title: {
    color: Colors.light.text,
  },

  subtitle: {
    marginTop: 6,
    lineHeight: 20,
  },

  content: {
    gap: Spacing.md,
  },
});