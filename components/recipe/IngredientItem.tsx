import { View, StyleSheet } from 'react-native';
import { AppText } from '@/components/ui/AppText';
import {
  KitchenColors,
  Radius,
  Spacing,
} from '@/constants/theme';
import { getEmojiIngrediente } from '@/constants/emoji-ingredientes';

type Props = {
  nombre: string;
  cantidad: string;
};

export function IngredientItem({
  nombre,
  cantidad,
}: Props) {

  const emoji = getEmojiIngrediente(nombre);

  return (
    <View style={styles.container}>

      <View style={styles.left}>

        <View style={styles.imageCircle}>
          <AppText style={styles.image}>
            {emoji}
          </AppText>
        </View>

        <AppText style={styles.name}>
          {nombre}
        </AppText>

      </View>

      <AppText style={styles.amount}>
        {cantidad}
      </AppText>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: '#34231B',
    borderRadius: Radius.lg,
    padding: Spacing.md,
    marginBottom: Spacing.sm,

    borderWidth: 1,
    borderColor: '#6D472D',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

imageCircle: {
  width: 48,
  height: 48,
  borderRadius: 24,
  backgroundColor: '#33231A',
  borderWidth: 1.5,
  borderColor: '#6B4935',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: Spacing.md,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 4,
  elevation: 2,
},
 image: {
  fontSize: 26,
  lineHeight: 32,
  textAlign: 'center',
  includeFontPadding: false,
  textShadowColor: 'rgba(242, 179, 91, 0.30)',
  textShadowOffset: { width: 0, height: 2 },
  textShadowRadius: 5,
},

  name: {
    color: KitchenColors.text,
    fontSize: 16,
    fontWeight: '900',
    textTransform: 'capitalize',
    flex: 1,
  },

  amount: {
    color: KitchenColors.primarySoft,
    fontWeight: '900',
    marginLeft: Spacing.md,
    fontSize: 14,
  },
});