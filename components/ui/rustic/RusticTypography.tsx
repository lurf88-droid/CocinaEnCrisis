import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';

import { AppText } from '../AppText';
import { Rustic } from '../../../constants/design-system';

type Props = {
  children: ReactNode;
};

export function RusticTitle({ children }: Props) {
  return (
    <AppText style={styles.title}>
      {children}
    </AppText>
  );
}

export function RusticSubtitle({ children }: Props) {
  return (
    <AppText style={styles.subtitle}>
      {children}
    </AppText>
  );
}

export function RusticBody({ children }: Props) {
  return (
    <AppText style={styles.body}>
      {children}
    </AppText>
  );
}

const styles = StyleSheet.create({
title: {
  color: Rustic.colors.cream,
  fontSize: 34,
  fontWeight: '900',
  lineHeight: 48,
  letterSpacing: 0.3,
  includeFontPadding: false,
},

  subtitle: {
    color: Rustic.colors.parchment,
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 30,
  },

  body: {
    color: Rustic.colors.text,
    fontSize: 16,
    lineHeight: 26,
  },
});