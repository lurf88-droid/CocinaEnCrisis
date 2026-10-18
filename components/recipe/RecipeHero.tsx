import React from 'react';

import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';

import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { AppButton } from '@/components/ui/AppButton';
import { AppText } from '@/components/ui/AppText';

import {
  KitchenColors,
  Radius,
  Shadows,
  Spacing,
} from '@/constants/theme';

type Props = {
  titulo: string;
  descripcion: string;
  imagen?: any;
  tiempo: number;
  porciones: number;
  dificultad: string;
  esFavorito: boolean;
  onToggleFavorito: () => void;
  onCook: () => void;
  costoPorPorcion?: number;
};

// ======================================================
// 💰 NIVEL DE GASTO
// ======================================================

type NivelGasto = {
  label: string;
  color: string;
  bg: string;
  border: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
};

function getNivelGasto(costo: number): NivelGasto {
  if (costo <= 15) {
    return {
      label: 'Económica',
      color: '#9BC78A',
      bg: 'rgba(143, 178, 118, 0.20)',
      border: 'rgba(143, 178, 118, 0.55)',
      icon: 'piggy-bank-outline',
    };
  }

  if (costo <= 30) {
    return {
      label: 'Moderada',
      color: '#F2B35B',
      bg: 'rgba(242, 179, 91, 0.20)',
      border: 'rgba(242, 179, 91, 0.55)',
      icon: 'cash',
    };
  }

  return {
    label: 'Especial',
    color: '#EFA15F',
    bg: 'rgba(232, 138, 93, 0.22)',
    border: 'rgba(232, 138, 93, 0.60)',
    icon: 'star-four-points',
  };
}

// ======================================================
// 🌙 RECIPE HERO
// ======================================================

export function RecipeHero({
  titulo,
  descripcion,
  imagen,
  tiempo,
  porciones,
  dificultad,
  esFavorito,
  onToggleFavorito,
  onCook,
  costoPorPorcion,
}: Props) {

  const [scale] = React.useState(
    () => new Animated.Value(1)
  );

  const animarFavorito = () => {

    Animated.sequence([

      Animated.timing(
        scale,
        {
          toValue: 1.22,
          duration: 120,
          useNativeDriver: true,
        }
      ),

      Animated.timing(
        scale,
        {
          toValue: 1,
          duration: 140,
          useNativeDriver: true,
        }
      ),

    ]).start();

    onToggleFavorito();

  };

  const dificultadLabel =
    dificultad === 'facil'
      ? 'Fácil'
      : dificultad === 'media'
        ? 'Media'
        : dificultad === 'avanzada'
          ? 'Avanzada'
          : dificultad === 'chef'
            ? 'Chef'
            : dificultad;

  const dificultadIcon:
    React.ComponentProps<
      typeof MaterialCommunityIcons
    >['name'] =
    dificultad === 'facil'
      ? 'chef-hat'
      : dificultad === 'media'
        ? 'silverware-fork-knife'
        : dificultad === 'avanzada'
          ? 'fire'
          : 'star-four-points';

  const nivelGasto =
    typeof costoPorPorcion === 'number' &&
    costoPorPorcion > 0
      ? getNivelGasto(costoPorPorcion)
      : null;

  return (

    <View style={styles.card}>

      {/* =================================================
          IMAGE
      ================================================= */}

      <View style={styles.imageWrap}>

        {imagen ? (

          <Image
            source={imagen}
            style={styles.image}
            resizeMode="cover"
          />

        ) : (

          <View style={styles.placeholder}>

            <MaterialCommunityIcons
              name="food-outline"
              size={70}
              color="#F2B35B"
            />

            <AppText style={styles.placeholderText}>
              Chef Luna
            </AppText>

          </View>

        )}

        <View style={styles.imageOverlay} />

        {/* =================================================
            BACK
        ================================================= */}

        <TouchableOpacity
          activeOpacity={0.84}
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <MaterialCommunityIcons
            name="arrow-left"
            size={23}
            color="#FFF3DD"
          />
        </TouchableOpacity>

        {/* =================================================
            FAVORITE
        ================================================= */}

        <TouchableOpacity
          activeOpacity={0.84}
          style={[
            styles.favoriteButton,
            esFavorito && styles.favoriteButtonActive,
          ]}
          onPress={animarFavorito}
        >
          <Animated.View
            style={{
              transform: [{ scale }],
            }}
          >
            <MaterialCommunityIcons
              name={esFavorito ? 'heart' : 'heart-outline'}
              size={23}
              color={esFavorito ? '#F2B35B' : '#FFF3DD'}
            />
          </Animated.View>
        </TouchableOpacity>

        {/* =================================================
            BADGE CHEF LUNA
        ================================================= */}

        <View style={styles.chefBadge}>

          <MaterialCommunityIcons
            name="chef-hat"
            size={14}
            color="#F2B35B"
          />

          <AppText style={styles.chefBadgeText}>
            CHEF LUNA
          </AppText>

        </View>

        {/* =================================================
            TITLE OVER IMAGE
        ================================================= */}

        <View style={styles.imageContent}>

          {/* Eyebrow + Badge de gasto */}
          <View style={styles.imageTopRow}>

            <AppText style={styles.imageEyebrow}>
              RECETA SELECCIONADA
            </AppText>

            {nivelGasto && (
              <View
                style={[
                  styles.gastoBadge,
                  {
                    backgroundColor: nivelGasto.bg,
                    borderColor: nivelGasto.border,
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name={nivelGasto.icon}
                  size={11}
                  color={nivelGasto.color}
                />

                <AppText
                  style={[
                    styles.gastoBadgeText,
                    { color: nivelGasto.color },
                  ]}
                >
                  {nivelGasto.label}
                </AppText>

              </View>
            )}

          </View>

          <AppText style={styles.title}>
            {titulo}
          </AppText>

        </View>

      </View>

      {/* =================================================
          CONTENT
      ================================================= */}

      <View style={styles.content}>

        <AppText style={styles.descripcion}>
          {descripcion}
        </AppText>

        {/* INFO */}
        <View style={styles.infoCard}>

          <InfoItem
            icon="clock-outline"
            label="TIEMPO"
            value={`${tiempo} min`}
          />

          <View style={styles.infoDivider} />

          <InfoItem
            icon="account-group-outline"
            label="PORCIONES"
            value={`${porciones}`}
          />

          <View style={styles.infoDivider} />

          <InfoItem
            icon={dificultadIcon}
            label="NIVEL"
            value={dificultadLabel}
          />

        </View>

        {/* READY STRIP */}
        <View style={styles.readyStrip}>

          <View style={styles.readyIcon}>

            <MaterialCommunityIcons
              name="fire"
              size={19}
              color="#F2B35B"
            />

          </View>

          <View style={styles.readyContent}>

            <AppText style={styles.readyEyebrow}>
              SIGUIENTE PASO
            </AppText>

            <AppText style={styles.readyTitle}>
              Cocina acompañado por Chef Luna
            </AppText>

          </View>

          <MaterialCommunityIcons
            name="chevron-right"
            size={23}
            color="#9D7256"
          />

        </View>

        {/* CTA */}
        <AppButton
          style={styles.button}
          onPress={onCook}
        >
          Empezar a cocinar
        </AppButton>

      </View>

    </View>

  );

}

// ======================================================
// 🧩 INFO ITEM
// ======================================================

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ComponentProps<
    typeof MaterialCommunityIcons
  >['name'];
  label: string;
  value: string;
}) {

  return (

    <View style={styles.info}>

      <View style={styles.infoIcon}>

        <MaterialCommunityIcons
          name={icon}
          size={18}
          color="#D7A86E"
        />

      </View>

      <AppText style={styles.infoValue}>
        {value}
      </AppText>

      <AppText style={styles.infoLabel}>
        {label}
      </AppText>

    </View>

  );

}

// ======================================================
// 🎨 STYLES
// ======================================================

const styles = StyleSheet.create({

  card: {
    marginBottom: Spacing.lg,
    backgroundColor: '#17100C',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#5C3D2D',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.38,
    shadowRadius: 22,
    shadowOffset: { width: 0, height: 12 },
    elevation: 10,
  },

  // ==================================================
  // IMAGE
  // ==================================================

  imageWrap: {
    position: 'relative',
    height: 390,
    backgroundColor: '#20150F',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  imageOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(10, 6, 4, 0.24)',
  },

  placeholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2A1B14',
  },

  placeholderText: {
    marginTop: 10,
    color: '#D7A86E',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1,
  },

  // ==================================================
  // TOP ACTIONS
  // ==================================================

  backButton: {
    position: 'absolute',
    top: 18,
    left: 18,
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: 'rgba(35, 21, 14, 0.90)',
    borderWidth: 1,
    borderColor: '#8A5A35',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    ...Shadows.card,
  },

  favoriteButton: {
    position: 'absolute',
    top: 18,
    right: 18,
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: 'rgba(35, 21, 14, 0.90)',
    borderWidth: 1,
    borderColor: '#8A5A35',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    ...Shadows.card,
  },

  favoriteButtonActive: {
    backgroundColor: '#3B2518',
    borderColor: '#F2B35B',
  },

  // ==================================================
  // BADGE CHEF LUNA
  // ==================================================

  chefBadge: {
    position: 'absolute',
    top: 78,
    left: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: 'rgba(30, 18, 12, 0.88)',
    borderWidth: 1,
    borderColor: '#6F4932',
  },

  chefBadgeText: {
    color: '#F2B35B',
    fontSize: 8,
    fontWeight: '900',
    letterSpacing: 1.4,
  },

  // ==================================================
  // IMAGE CONTENT
  // ==================================================

  imageContent: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 24,
  },

  imageTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },

  imageEyebrow: {
    color: '#F2B35B',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.8,
  },

  gastoBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 999,
    borderWidth: 1,
  },

  gastoBadgeText: {
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },

  title: {
    color: '#FFF7EB',
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 38,
    marginTop: 6,
    textShadowColor: 'rgba(0,0,0,0.65)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },

  // ==================================================
  // CONTENT
  // ==================================================

  content: {
    padding: 20,
  },

  descripcion: {
    color: '#D8BFA8',
    fontSize: 15,
    lineHeight: 23,
  },

  // ==================================================
  // INFO
  // ==================================================

  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#211610',
    borderRadius: Radius.xl,
    borderWidth: 1,
    borderColor: '#4B3326',
    marginTop: 20,
    paddingVertical: 14,
    paddingHorizontal: 8,
  },

  info: {
    flex: 1,
    alignItems: 'center',
  },

  infoIcon: {
    width: 32,
    height: 32,
    borderRadius: 11,
    backgroundColor: '#332219',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 7,
  },

  infoValue: {
    color: '#FFF3DD',
    fontSize: 13,
    fontWeight: '900',
  },

  infoLabel: {
    color: '#8F745F',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1,
    marginTop: 3,
  },

  infoDivider: {
    width: 1,
    height: 50,
    backgroundColor: '#473126',
  },

  // ==================================================
  // READY STRIP
  // ==================================================

  readyStrip: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#201610',
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#443027',
    padding: 12,
  },

  readyIcon: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: '#392319',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  readyContent: {
    flex: 1,
  },

  readyEyebrow: {
    color: '#9D7256',
    fontSize: 7,
    fontWeight: '900',
    letterSpacing: 1.2,
  },

  readyTitle: {
    color: '#F2DFCA',
    fontSize: 12,
    fontWeight: '900',
    marginTop: 2,
  },

  // ==================================================
  // BUTTON
  // ==================================================

  button: {
    marginTop: 16,
  },

});