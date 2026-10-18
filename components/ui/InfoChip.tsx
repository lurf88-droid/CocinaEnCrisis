import { StyleSheet, View } from 'react-native';

import { AppText } from './AppText';

import { Rustic } from '@/constants/design-system';

type Props = {
  icon: string;
  value: string;
};

export function InfoChip({
  icon,
  value,
}: Props) {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>
        {icon} {value}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(122,75,42,0.45)',

    borderWidth: 1,
    borderColor: Rustic.colors.border,

    borderRadius: 999,

    paddingHorizontal: 14,
    paddingVertical: 8,
  },

  text: {
    color: Rustic.colors.cream,
    fontSize: 13,
    fontWeight: '800',
  },
});