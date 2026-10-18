import { Platform } from 'react-native';

export const CabinColors = {
  wood: '#6B3F2A',
  darkWood: '#3A2418',
  coffee: '#2A1A12',
  brick: '#A65335',
  fire: '#E88A2E',
  amber: '#F2B35B',
  cream: '#FFF3E2',
  softCream: '#F8E4C8',
  paper: '#FFF9F0',
  sage: '#7A9B76',
  olive: '#556B45',
  smoke: '#8A7A6A',
  charcoal: '#1E1713',
  white: '#FFFFFF',
};

export const Colors = {
  light: {
    background: CabinColors.cream,
    surface: CabinColors.paper,
    card: CabinColors.white,
    white: CabinColors.white,

    text: CabinColors.coffee,
    textMuted: CabinColors.smoke,

    primary: CabinColors.fire,
    primaryDark: CabinColors.brick,

    success: CabinColors.sage,
    warning: CabinColors.amber,

    border: '#E6D4BD',

    icon: CabinColors.wood,
    tint: CabinColors.fire,

    tabIconDefault: CabinColors.smoke,
    tabIconSelected: CabinColors.fire,
  },

  dark: {
    background: CabinColors.charcoal,
    surface: CabinColors.darkWood,
    card: '#2B201A',

    text: CabinColors.cream,
    textMuted: '#C2AA91',

    primary: CabinColors.fire,
    primaryDark: CabinColors.brick,

    success: CabinColors.sage,
    warning: CabinColors.amber,

    border: '#4A382E',

    icon: CabinColors.softCream,
    tint: CabinColors.amber,

    tabIconDefault: '#B59A80',
    tabIconSelected: CabinColors.amber,
  },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const Radius = {
  sm: 8,
  md: 12,
  lg: 18,
  xl: 24,
  pill: 999,
};

export const Typography = {
  title: 30,
  subtitle: 22,
  body: 16,
  small: 14,
  caption: 12,
};

export const Shadows = {
  card: Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.08,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 6 },
    },
    android: {
      elevation: 3,
    },
    default: {},
  }),
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },

});
 export const KitchenColors = {
  background: '#1B130F',

  surface: '#241812',
  card: '#2B1E18',
  cardSoft: 'rgba(43, 30, 24, 0.86)',

  primary: '#E89A2F',
  primaryDark: '#D88518',
  primarySoft: '#F4D7A1',

  text: '#F8E7C8',
  textMuted: '#CFA870',
  textSoft: '#A9875F',

  border: '#5B3A22',
  divider: '#6E4A2A',

  success: '#7C9A43',
  warning: '#E8C35A',
  danger: '#C75B39',

  overlay: 'rgba(0, 0, 0, 0.35)',
  overlaySoft: 'rgba(0, 0, 0, 0.18)',
  shadow: 'rgba(0,0,0,0.35)',
highlight: '#FFF3DD',
};
