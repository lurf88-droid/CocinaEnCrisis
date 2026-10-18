import { View, StyleSheet } from 'react-native';

import { AppText } from './AppText';
import { Colors, Radius, Spacing } from '@/constants/theme';

type Props = {
  label: string;
};

export function AppChip({ label }: Props) {
  return (
    <View style={styles.chip}>
      <AppText
        variant="caption"
        style={styles.text}
      >
        {label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: Colors.light.surface,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.md,
    paddingVertical: 6,
  },

  text: {
    fontWeight: '700',
    color: Colors.light.text,
  },
});