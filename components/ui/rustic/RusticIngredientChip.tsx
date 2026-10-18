import { Pressable, StyleSheet, View } from 'react-native';

import { AppText } from '../AppText';
import { Rustic } from '../../../constants/design-system';

type Props = {
  emoji: string;
  titulo: string;
  subtitulo?: string;
  onPress?: () => void;
  agregar?: boolean;
};

export function RusticIngredientChip({
  emoji,
  titulo,
  subtitulo,
  onPress,
  agregar = false,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.card,
        agregar && styles.addCard,
      ]}
    >
      <View style={styles.iconContainer}>
        <AppText style={styles.icon}>
          {emoji}
        </AppText>
      </View>

      <AppText style={styles.title}>
        {titulo}
      </AppText>

      {subtitulo && (
        <AppText style={styles.subtitle}>
          {subtitulo}
        </AppText>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 92,
    height: 120,
    borderRadius: 20,
    backgroundColor: Rustic.colors.card,
    borderWidth: 1,
    borderColor: Rustic.colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Rustic.spacing.md,
  },

  addCard: {
    borderStyle: 'dashed',
    borderColor: Rustic.colors.gold,
  },

  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: Rustic.colors.woodDark,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Rustic.spacing.sm,
  },

  icon: {
    fontSize: 28,
  },

  title: {
    color: Rustic.colors.cream,
    fontWeight: '800',
    textAlign: 'center',
    fontSize: 14,
  },

  subtitle: {
    color: Rustic.colors.textMuted,
    fontSize: 11,
    marginTop: 2,
  },
});