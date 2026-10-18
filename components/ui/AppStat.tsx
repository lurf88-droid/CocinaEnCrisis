import { View, StyleSheet } from 'react-native';

import { AppText } from './AppText';

import { Spacing } from '@/constants/theme';

type Props = {
  icon: string;
  value: string | number;
  label: string;
};

export function AppStat({
  icon,
  value,
  label,
}: Props) {
  return (
    <View style={styles.container}>
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
  container: {
    flex: 1,
    alignItems: 'center',
  },

  icon: {
    fontSize: 24,
    marginBottom: 6,
  },

  value: {
    color: '#FFF9F0',
    fontSize: 34,
    fontWeight: '900',
  },

  label: {
    color: '#D7A86E',
    fontSize: 13,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 4,
  },
});