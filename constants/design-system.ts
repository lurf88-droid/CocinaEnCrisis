import { KitchenColors, Radius, Spacing } from './theme';

const WOOD = '#7A4B2A';
const WOOD_DARK = '#60371F';
const WOOD_LIGHT = '#A66A3C';

const CREAM = '#FFF3DD';
const PARCHMENT = '#F8E7C8';

const GOLD = '#E89A2F';

export const Rustic = {
  colors: {
    wood: WOOD,
    woodDark: WOOD_DARK,
    woodLight: WOOD_LIGHT,

    cream: CREAM,
    parchment: PARCHMENT,

    gold: GOLD,

    text: KitchenColors.text,
    textMuted: KitchenColors.textMuted,

    background: KitchenColors.background,
    card: KitchenColors.card,
    border: KitchenColors.border,

    shadow: KitchenColors.shadow,
  },

  radius: {
    button: Radius.pill,
    card: Radius.xl,
    chip: Radius.lg,
  },

  spacing: {
    xs: Spacing.xs,
    sm: Spacing.sm,
    md: Spacing.md,
    lg: Spacing.lg,
    xl: Spacing.xl,
  },

  button: {
    height: 58,

    background: WOOD,
    pressed: WOOD_DARK,
    border: WOOD_LIGHT,
    text: CREAM,
  },

  card: {
    background: KitchenColors.card,
    border: KitchenColors.border,
    padding: Spacing.lg,
  },

  shadow: {
    card: {
      shadowColor: '#000',
      shadowOpacity: 0.18,
      shadowRadius: 10,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      elevation: 6,
    },

    floating: {
      shadowColor: '#000',
      shadowOpacity: 0.28,
      shadowRadius: 18,
      shadowOffset: {
        width: 0,
        height: 9,
      },
      elevation: 10,
    },
  },

  icons: {
    chef: '👨‍🍳',
    pantry: '🥫',
    recipe: '🍳',
    shopping: '🛒',
    money: '💰',
    time: '⏱',
    people: '👥',
    success: '⭐',
    warning: '⚠️',
    crisis: '🔥',
  },

  animation: {
    fast: 150,
    normal: 300,
    slow: 500,
  },
} as const;