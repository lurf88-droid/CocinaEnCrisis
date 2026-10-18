import { ImageBackground, StyleSheet, View } from 'react-native';

import { AppButton } from '@/components/ui/AppButton';
import { AppText } from '@/components/ui/AppText';
import { Radius, Spacing } from '@/constants/theme';

type Props = {
  nombre?: string;
  onStart?: () => void;
};

export function HeroBanner({
  nombre = 'Fernando',
  onStart = () => {},
}: Props) {
  return (
    <ImageBackground
    source={require('@/assets/images/cabin-home.png')}
      imageStyle={styles.image}
      style={styles.container}
    >
      <View style={styles.overlay}>

        <AppText
          variant="caption"
          style={styles.badge}
        >
          🏡 Bienvenido a casa
        </AppText>

        <AppText
          variant="title"
          style={styles.title}
        >
          Cocina en Crisis
        </AppText>

        <AppText style={styles.subtitle}>
          Hola, {nombre}.
        </AppText>
        <View style={styles.line} />

        <AppText style={styles.description}>
          La cocina está lista.
          Veamos qué podemos preparar hoy.
        </AppText>

        <AppButton onPress={onStart}>
          🔥 Entrar a mi cocina
        </AppButton>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 420,
    borderRadius: Radius.xl,
    overflow: 'hidden',
    marginBottom: Spacing.xl,
    shadowColor: '#000',
shadowOpacity: 0.35,
shadowRadius: 20,
shadowOffset: {
  width: 0,
  height: 10,
},
elevation: 8,
  },

  image: {
    borderRadius: Radius.xl,
  },

 overlay: {
  flex: 1,
  paddingTop: 40,
  justifyContent: 'flex-end',
  padding: Spacing.xl,
  backgroundColor: 'rgba(20, 12, 8, 0.58)',
},

  badge: {
    color: '#FFD79A',
    marginBottom: Spacing.sm,
    fontWeight: '800',
  },

title: {
  color: '#FFF9F0',
  fontSize: 42,
  fontWeight: '900',
  lineHeight: 46,
},

 subtitle: {
  color: '#FFE6BF',
  marginTop: Spacing.sm,
  fontSize: 20,
  fontWeight: '700',
},

description: {
  color: '#F5E8D8',
  marginTop: Spacing.md,
  marginBottom: Spacing.xl,
  lineHeight: 26,
  fontSize: 17,
},
line: {
  width: 80,
  height: 4,
  borderRadius: 999,
  backgroundColor: '#D78A3F',
  marginTop: Spacing.md,
  marginBottom: Spacing.md,
},
});