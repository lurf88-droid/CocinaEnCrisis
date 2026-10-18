import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Rustic } from '@/constants/design-system';

type Props = {
  progress: number;
  autoColor?: boolean;
};

function obtenerColor(progress: number) {
  if (progress >= 80) {
    return '#8FB276';
  }

  if (progress >= 50) {
    return '#F2B35B';
  }

  return '#D96C5F';
}

export function AnimatedProgress({
  progress,
  autoColor = true,
}: Props) {
  const progresoSeguro = Math.max(
    0,
    Math.min(progress, 100)
  );

  const width = useSharedValue(0);

  useEffect(() => {
    width.value = withTiming(progresoSeguro, {
      duration: Rustic.animation.slow,
      easing: Easing.out(Easing.cubic),
    });
  }, [progresoSeguro, width]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${width.value}%`,
  }));

  const color = autoColor
    ? obtenerColor(progresoSeguro)
    : Rustic.colors.gold;

  return (
    <View style={styles.track}>
      <Animated.View
        style={[
          styles.fill,
          {
            backgroundColor: color,
          },
          animatedStyle,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: '100%',
    height: 10,
    overflow: 'hidden',
    borderRadius: Rustic.radius.button,
    backgroundColor: Rustic.colors.border,
  },

  fill: {
    height: '100%',
    borderRadius: Rustic.radius.button,
  },
});