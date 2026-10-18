import { Pressable, StyleSheet } from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { AppText } from '@/components/ui/AppText';
import { Rustic } from '@/constants/design-system';

type Props = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
};

const AnimatedPressable =
  Animated.createAnimatedComponent(Pressable);

export function RusticButton({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
}: Props) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: scale.get(),
      },
    ],
  }));

  const handlePressIn = () => {
    if (disabled) return;

    scale.set(
      withSpring(0.97, {
        damping: 16,
        stiffness: 260,
      })
    );
  };

  const handlePressOut = () => {
    scale.set(
      withSpring(1, {
        damping: 16,
        stiffness: 260,
      })
    );
  };

  return (
    <AnimatedPressable
      disabled={disabled}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        styles.button,
        variant === 'primary'
          ? styles.primary
          : styles.secondary,
        disabled && styles.disabled,
        animatedStyle,
      ]}
    >
      <AppText style={styles.text}>
        {title}
      </AppText>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 58,

    paddingVertical: Rustic.spacing.lg,
    paddingHorizontal: Rustic.spacing.xl,

    borderRadius: Rustic.radius.button,

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: Rustic.spacing.md,

    ...Rustic.shadow.card,
  },

  primary: {
    backgroundColor: Rustic.button.background,
    borderWidth: 1,
    borderColor: Rustic.button.border,
  },

  secondary: {
    backgroundColor: Rustic.colors.card,
    borderWidth: 1,
    borderColor: Rustic.colors.border,
  },

  disabled: {
    opacity: 0.45,
  },

  text: {
    color: Rustic.button.text,
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
});