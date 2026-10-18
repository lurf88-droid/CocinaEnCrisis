import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';
import Animated, { ZoomIn } from 'react-native-reanimated';
import { Image } from 'react-native';
import { INGREDIENT_IMAGES } from '@/constants/ingredientImages';

type Props = {
  label: string;
  selected?: boolean;
  onPress: () => void;
};

export function RusticChip({
  label,
  selected,
  onPress,
}: Props) {
  return (
    <Animated.View entering={ZoomIn.duration(180)}>
      <TouchableOpacity
        onPress={() => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          onPress();
        }}
        style={[
          styles.chip,
          selected && styles.chipActive,
        ]}
      >
       <Image
  source={INGREDIENT_IMAGES[label]}
  style={{
    width: 40,
    height: 40,
    marginBottom: 6,
  }}
  resizeMode="contain"
/>

<Text style={styles.text}>
  {label}
</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: '#2A2A35',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#6D472D',
  },

  chipActive: {
  shadowColor: '#E88A2E',
shadowOpacity: 0.4,
shadowRadius: 8,
elevation: 6,
  },

  text: {
    color: '#F4E9D8',
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'capitalize',
  },

  textActive: {
    color: '#000',
    fontWeight: '900',
  },
});