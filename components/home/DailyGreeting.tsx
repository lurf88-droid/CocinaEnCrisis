import { View, StyleSheet } from 'react-native';

import { AppText } from '@/components/ui/AppText';

import { Spacing } from '@/constants/theme';

const mensajes = [
  'Hoy es un buen día para cocinar algo rico.',
  'Tu cocina ya está lista.',
  'Con pocos ingredientes también salen grandes comidas.',
  'Veamos qué podemos preparar hoy.',
  'Bienvenido de nuevo a tu cocina.',
];

const mensaje =
  mensajes[new Date().getDate() % mensajes.length];

export function DailyGreeting() {
  return (
    <View style={styles.container}>
      <AppText style={styles.day}>
        ☀ Buenos días, Fernando
      </AppText>

      <AppText style={styles.title}>
        🏡 Mi Cocina
      </AppText>

      <AppText style={styles.subtitle}>
        {mensaje}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing.xl,
  },

  day: {
    color: '#D7A86E',
    fontSize: 15,
    fontWeight: '700',
  },

  title: {
    color: '#FFF9F0',
    fontSize: 34,
    fontWeight: '900',
    marginTop: 6,
  },

  subtitle: {
    color: '#BFA98B',
    marginTop: 8,
    lineHeight: 24,
    fontSize: 16,
  },
});