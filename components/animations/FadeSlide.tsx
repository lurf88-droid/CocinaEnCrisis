import { ReactNode, useEffect } from 'react';

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

import { Rustic } from '@/constants/design-system';

type Props = {
  children: ReactNode;
  delay?: number;
  distance?: number;
};

export function FadeSlide({
  children,
  delay = 0,
  distance = 20,
}: Props) {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(distance);

  useEffect(() => {
    opacity.value = withDelay(
      delay,
      withTiming(1, {
        duration: Rustic.animation.normal,
        easing: Easing.out(Easing.cubic),
      })
    );

    translateY.value = withDelay(
      delay,
      withTiming(0, {
        duration: Rustic.animation.slow,
        easing: Easing.out(Easing.cubic),
      })
    );
  }, [delay, distance, opacity, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      {
        translateY: translateY.value,
      },
    ],
  }));

  return (
    <Animated.View style={animatedStyle}>
      {children}
    </Animated.View>
  );
}