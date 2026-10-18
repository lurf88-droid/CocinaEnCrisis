import { View, StyleSheet } from 'react-native';

import { AppText } from '@/components/ui/AppText';
import { Radius, Spacing, KitchenColors } from '@/constants/theme';

const FRASES = [
  'La mejor comida empieza con lo que ya tienes.',
  'No hace falta gastar más para comer bien.',
  'Cada ingrediente cuenta.',
  'La cocina también puede ser un refugio.',
  'Hoy cocinamos con inteligencia, no con dinero.',
];

type Props = {
  nombre?: string;
};

export function CabinHeader({ nombre = 'Fernando' }: Props) {
  const hora = new Date().getHours();

  let saludo = 'Buenas noches';
  let icono = '🪵';

  if (hora >= 6 && hora < 12) {
    saludo = 'Buenos días';
    icono = '☀️';
  } else if (hora >= 12 && hora < 19) {
    saludo = 'Buenas tardes';
    icono = '☕';
  }

  const frase = FRASES[new Date().getDate() % FRASES.length];

  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <AppText variant="caption" style={styles.badgeText}>
          {icono} {saludo}, {nombre}
        </AppText>
      </View>

      <AppText variant="title" style={styles.title}>
        Cocina en Crisis
      </AppText>

      <AppText muted style={styles.subtitle}>
        {frase}
      </AppText>

      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  marginBottom: Spacing.xl,
  padding: Spacing.lg,
  borderRadius: Radius.xl,
  backgroundColor: KitchenColors.card,
  borderWidth: 1,
  borderColor: KitchenColors.border,
},

  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: Radius.pill,
    backgroundColor: '#34231B',
    borderWidth: 1,
  borderColor: KitchenColors.border,
  },

  badgeText: {
   color: KitchenColors.primary,
    fontWeight: '800',
  },

  title: {
    marginTop: Spacing.md,
  },

  subtitle: {
    marginTop: Spacing.sm,
    lineHeight: 22,
  },

  line: {
    marginTop: Spacing.lg,
    height: 3,
    width: 72,
    borderRadius: Radius.pill,
  backgroundColor: KitchenColors.primary,
  },
});