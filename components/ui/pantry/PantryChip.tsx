import {
  Pressable,
  StyleSheet,
  View,
} from 'react-native';

import { AppText } from '../AppText';
import { Rustic } from '../../../constants/design-system';

// 👇 IMPORTACIÓN CON LLAVES
import { IngredientIcon } from '@/components/ingredients/IngredientIcon';

type PantryChipProps = {
  id: string;
  emoji?: string;
  nombre: string;
  cantidad?: string;
  agregar?: boolean;
  onPress?: () => void;
};

export function PantryChip({
  id,
  emoji,
  nombre,
  cantidad,
  onPress,
  agregar = false,
}: PantryChipProps) {

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.card,
        agregar && styles.addCard,
      ]}
    >
      <View style={styles.imageCircle}>
        {agregar ? (
          <AppText style={styles.icon}>
            {emoji ?? '+'}
          </AppText>
        ) : (
          <IngredientIcon
            id={id}
            size={42}
          />
        )}
      </View>

      <AppText style={styles.name}>
        {nombre}
      </AppText>

      {cantidad && (
        <AppText style={styles.amount}>
          {cantidad}
        </AppText>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 125,
    height: 135,
    borderRadius: 26,
    overflow: 'hidden',
    backgroundColor: '#24160F',
    borderWidth: 1,
    borderColor: '#A66A3C',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 10,
  },
  addCard: {
    borderStyle: 'dashed',
    borderColor: Rustic.colors.gold,
  },
  name: {
    color: '#FFF3DD',
    fontWeight: '900',
    fontSize: 12,
    textAlign: 'center',
    paddingHorizontal: 6,
  },
  amount: {
    marginTop: 6,
    color: '#8FB276',
    fontSize: 11,
    fontWeight: '900',
  },
  imageCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#3A2418',
    borderColor: '#C07A35',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  icon: {
    fontSize: 30,
  },
});