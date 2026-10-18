import { Pressable, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { AppText } from '../AppText';
import { Rustic } from '../../../constants/design-system';

type Props = {
  title: string;
  onPress: () => void;
};

export function CabinButton({ title, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.wrapper,
        pressed && styles.pressed,
      ]}
    >
      <LinearGradient
        colors={[
          '#A96736',
          '#6F3F22',
          '#3F2415',
        ]}
        locations={[0, 0.48, 1]}
        style={styles.button}
      >
        <View style={styles.innerBorder}>
          <View style={styles.woodLineTop} />
          <View style={styles.woodLineBottom} />

          <AppText style={styles.decor}>
            ❧
          </AppText>

          <AppText style={styles.title}>
            {title}
          </AppText>

          <AppText style={styles.decor}>
            ❧
          </AppText>
        </View>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 64,
    borderRadius: 32,
    shadowColor: Rustic.colors.shadow,
    shadowOpacity: 0.55,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 12,
  },

  button: {
    flex: 1,
    borderRadius: 32,
    padding: 4,
    borderWidth: 1,
    borderColor: '#C1844A',
    overflow: 'hidden',
  },

  innerBorder: {
    flex: 1,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(255, 218, 160, 0.55)',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 16,
    overflow: 'hidden',
  },

  woodLineTop: {
    position: 'absolute',
    top: 10,
    left: 22,
    right: 22,
    height: 1,
    backgroundColor: 'rgba(255, 218, 160, 0.35)',
  },

  woodLineBottom: {
    position: 'absolute',
    bottom: 10,
    left: 22,
    right: 22,
    height: 1,
    backgroundColor: 'rgba(42, 26, 18, 0.55)',
  },

  title: {
    color: '#FFF3DD',
    fontSize: 22,
    fontWeight: '900',
    letterSpacing: 0.4,
    textShadowColor: 'rgba(0,0,0,0.45)',
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 4,
  },

  decor: {
    color: '#D79A55',
    fontSize: 22,
    opacity: 0.9,
  },

  pressed: {
    transform: [
      {
        scale: 0.985,
      },
    ],
    opacity: 0.96,
  },
});