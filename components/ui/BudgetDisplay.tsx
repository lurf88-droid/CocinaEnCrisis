import { TextStyle } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

import { useEffect } from 'react';

type Props = {
  value: number;
  style?: TextStyle;
};

export function BudgetDisplay({ value, style }: Props) {
  const animatedValue = useSharedValue(value);

  useEffect(() => {
    animatedValue.value = withSpring(value);
  }, [value]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(1) }],
    };
  });

  return (
    <Animated.Text style={[style, animatedStyle]}>
      ${Math.round(value)}
    </Animated.Text>
  );
}