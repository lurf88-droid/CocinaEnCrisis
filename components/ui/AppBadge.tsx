import { View, StyleSheet } from 'react-native';

import { AppText } from './AppText';

import {
  KitchenColors,
  Radius,
  Spacing,
} from '@/constants/theme';

type Props = {
  text: string;
};

export function AppBadge({ text }: Props) {
  return (
    <View style={styles.badge}>
      <AppText style={styles.text}>
        {text}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.md,
    paddingVertical: 6,
    borderRadius: Radius.pill,

    backgroundColor: KitchenColors.surface,
    borderWidth: 1,
    borderColor: KitchenColors.border,
  },

  text: {
    color: KitchenColors.primarySoft,
    fontWeight: '900',
    fontSize: 13,
  },
});