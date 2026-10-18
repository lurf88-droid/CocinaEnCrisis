import React from 'react';

import {
  View,
  StyleSheet,
  Animated,
} from 'react-native';

import { AppBadge } from './AppBadge';
import { AppStat } from './AppStat';
import { AppCard } from './AppCard';
import { AppText } from './AppText';
import { AppButton } from './AppButton';

import {
  KitchenColors,
  Radius,
  Spacing,
} from '@/constants/theme';

type Props = {
  presupuesto: number;
  recetas: number;
  ingredientes: number;
  onPress: () => void;
  cambiarPresupuesto: (cantidad: number) => void;
};

export function BudgetHero({
  presupuesto,
  recetas,
  ingredientes,
  onPress,
  cambiarPresupuesto,
}: Props) {
const [fadeAnim] = React.useState(
  () => new Animated.Value(0)
);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const estado =
    presupuesto >= 300
      ? 'Hoy puedes cocinar tranquilo.'
      : presupuesto >= 100
        ? 'Conviene aprovechar lo que ya tienes.'
        : 'Hora de cocinar en modo ahorro.';

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [
          {
            translateY: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [25, 0],
            }),
          },
        ],
      }}
    >
      <AppCard style={styles.card}>
        <View style={styles.topRow}>
          <View>
            <AppText variant="caption" style={styles.kicker}>
              🍲 Mi Cocina
            </AppText>

            <AppText variant="title" style={styles.title}>
              Tu cocina está lista.
            </AppText>
          </View>

          <AppBadge text="🪵 Refugio" />
        </View>

        <AppText style={styles.subtitle}>
          {estado}
        </AppText>

        <View style={styles.moneyBox}>
          <AppText variant="caption" style={styles.moneyLabel}>
            Presupuesto disponible
          </AppText>
<View style={styles.moneyRow}>

  <AppButton
    onPress={() => cambiarPresupuesto(-20)}
  >
    -
  </AppButton>


  <AppText style={styles.money}>
    ${presupuesto}
  </AppText>


  <AppButton
    onPress={() => cambiarPresupuesto(20)}
  >
    +
  </AppButton>


  <AppText style={styles.currency}>
    MXN
  </AppText>

</View>

          <View style={styles.progressTrack}>
            <View
              style={[
                styles.progressFill,
                {
                  width: `${Math.min(100, presupuesto / 5)}%`,
                },
              ]}
            />
          </View>
        </View>

        <View style={styles.stats}>
          <AppStat
            icon="🍲"
            value={recetas}
            label="Recetas"
          />

          <View style={styles.divider} />

          <AppStat
            icon="🥚"
            value={ingredientes}
            label="Ingredientes"
          />
        </View>

        <AppButton style={styles.button} onPress={onPress}>
          🔥 Ver qué puedo cocinar
        </AppButton>
      </AppCard>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: Spacing.xl,
    backgroundColor: KitchenColors.card,
    borderWidth: 1,
    borderColor: KitchenColors.border,
    shadowColor: '#000',
    shadowOpacity: 0.45,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 16,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.md,
  },

  kicker: {
    color: KitchenColors.textMuted,
    fontWeight: '900',
    marginBottom: Spacing.sm,
  },

  title: {
    color: KitchenColors.text,
    fontSize: 30,
    lineHeight: 34,
  },

  subtitle: {
    color: KitchenColors.textSoft,
    marginTop: Spacing.md,
    fontSize: 16,
    lineHeight: 23,
  },

  moneyBox: {
    marginTop: Spacing.xl,
    padding: Spacing.lg,
    borderRadius: Radius.xl,
    backgroundColor: KitchenColors.surface,
    borderWidth: 1,
    borderColor: KitchenColors.border,
  },

  moneyLabel: {
    color: KitchenColors.textMuted,
    fontWeight: '800',
  },

  moneyRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: Spacing.xs,
  },

  money: {
    color: KitchenColors.primary,
    fontSize: 48,
    fontWeight: '900',
    lineHeight: 56,
  },

  currency: {
    color: KitchenColors.text,
    fontSize: 18,
    fontWeight: '800',
    marginLeft: Spacing.sm,
    marginBottom: 8,
  },

  progressTrack: {
    height: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.18)',
    overflow: 'hidden',
    marginTop: Spacing.md,
  },

  progressFill: {
    height: '100%',
    backgroundColor: KitchenColors.primary,
  },

  stats: {
    marginTop: Spacing.lg,
    marginBottom: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: KitchenColors.surface,
    borderRadius: Radius.xl,
    borderWidth: 1,
    borderColor: KitchenColors.border,
    padding: Spacing.lg,
  },

  divider: {
    width: 1,
    height: 48,
    backgroundColor: KitchenColors.border,
    marginHorizontal: Spacing.md,
  },

  button: {
    marginTop: Spacing.md,
  },
});