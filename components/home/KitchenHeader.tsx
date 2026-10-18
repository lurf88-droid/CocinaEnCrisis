import { View, StyleSheet } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { Spacing } from '@/constants/theme';

type Props = {
  nombre?: string;
};

export function KitchenHeader({
  nombre = 'Fernando',
}: Props) {
  const hora = new Date().getHours();

  let saludo = 'Buenas noches 🌙';

  if (hora >= 6 && hora < 12) {
    saludo = 'Buenos días ☀️';
  } else if (hora >= 12 && hora < 19) {
    saludo = 'Buenas tardes ☕';
  }

  return (
    <View style={styles.container}>
      <AppText style={styles.saludo}>
        {saludo}, {nombre}
      </AppText>

      <AppText style={styles.titulo}>
        ¿Qué cocinamos hoy?
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.xl,
  },

  saludo: {
    fontSize: 18,
    fontWeight: '700',
    color: '#A66A3F',
  },

  titulo: {
    marginTop: Spacing.sm,
    fontSize: 34,
    fontWeight: '900',
    color: '#2C1E16',
    lineHeight: 40,
  },
});