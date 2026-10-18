import { ReactNode } from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';

import { Radius, Shadows, Spacing } from '@/constants/theme';
import { Rustic } from '@/constants/design-system';

type AppCardProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function AppCard({ children, style }: AppCardProps) {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
card: {
  backgroundColor: Rustic.card.background,

  borderRadius: Rustic.radius.card,

  padding: Rustic.card.padding,

  borderWidth: 1,
  borderColor: Rustic.card.border,

  ...Rustic.shadow.card,

  marginBottom: Rustic.spacing.md,

  overflow: 'hidden',
},
});