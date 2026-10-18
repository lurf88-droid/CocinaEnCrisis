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
    white: CabinColors.white,

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