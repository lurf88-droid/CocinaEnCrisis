import type { ReactNode } from 'react';
import { Pressable } from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type Props = {
  children: ReactNode;
  onPress?: () => void;
};

const AnimatedPressable =
  Animated.createAnimatedComponent(Pressable);

export function ScalePress({
  children,
  onPress,
}: Props) {

  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: scale.value,
      },
    ],
  }));

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={() => {
      scale.set(
  withSpring(0.97)
);
      }}
      onPressOut={() => {
       scale.set(
  withSpring(1)
);
      }}
      style={animatedStyle}
    >
      {children}
    </AnimatedPressable>
  );
}