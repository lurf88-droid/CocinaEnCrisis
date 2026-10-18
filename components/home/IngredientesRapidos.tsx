import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { IngredientIcon } from '@/components/ingredients/IngredientIcon';
import * as Haptics from 'expo-haptics';
import Animated, { ZoomIn } from 'react-native-reanimated';

type Props = {
  ingredientesRapidos: string[];
  ingredientes: string[];
  agregarIngrediente: (ingrediente: string) => void;
};

export function IngredientesRapidos({
  ingredientesRapidos,
  ingredientes,
  agregarIngrediente,
}: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.chipsScroll}
    >
      {ingredientesRapidos.map((item) => (
        <TouchableOpacity
          key={item}
          style={[
            styles.chip,
            ingredientes.includes(item) &&
              styles.chipActivo,
          ]}
          onPress={() => agregarIngrediente(item)}
        >
          <Animated.View entering={ZoomIn.duration(180)}>
  <TouchableOpacity
    style={[
      styles.chipVisual,
      ingredientes.includes(item) && styles.chipActivoVisual,
    ]}
    onPress={() => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      agregarIngrediente(item);
    }}
  >
    <IngredientIcon id={item} size={26} />

    <Text
      style={[
        styles.chipTexto,
        ingredientes.includes(item) && styles.chipTextoActivo,
      ]}
    >
      {item}
    </Text>
  </TouchableOpacity>
</Animated.View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  chipsScroll: {
    marginBottom: 12,
    maxHeight: 44,
  },

  chip: {
    backgroundColor: '#2A2A35',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    marginRight: 8,
  },

  chipActivo: {
    backgroundColor: '#FF6B35',
  },

  chipTexto: {
    color: '#ccc',
    fontSize: 13,
    textTransform: 'capitalize',
  },

  chipTextoActivo: {
    color: 'black',
    fontWeight: 'bold',
  },
  chipVisual: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 8,
  backgroundColor: '#2A2A35',
  paddingHorizontal: 14,
  paddingVertical: 10,
  borderRadius: 999,
  marginRight: 8,
},

chipActivoVisual: {
  backgroundColor: '#FF6B35',
  transform: [{ scale: 1.05 }],
  shadowColor: '#FF6B35',
  shadowOpacity: 0.4,
  shadowRadius: 8,
  elevation: 6,
},
});