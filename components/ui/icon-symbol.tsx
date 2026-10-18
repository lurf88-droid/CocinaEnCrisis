import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import type {
  ComponentProps,
} from 'react';

import type {
  StyleProp,
  TextStyle,
} from 'react-native';


// ======================================================
// 🎨 MAPEO DE SÍMBOLOS
// ======================================================

const MAPPING = {

  'house.fill':
    'home',

  'paperplane.fill':
    'send',

  'chevron.left.forwardslash.chevron.right':
    'code',

  'chevron.right':
    'chevron-right',

  'gearshape.fill':
    'settings',

  'person.fill':
    'person',

  'heart.fill':
    'favorite',

  'heart':
    'favorite-border',

  'cart.fill':
    'shopping-cart',

  'magnifyingglass':
    'search',

} as const satisfies Record<
  string,
  ComponentProps<
    typeof MaterialIcons
  >['name']
>;


// ======================================================
// 🧩 TIPOS
// ======================================================

export type IconSymbolName =
  keyof typeof MAPPING;


type IconSymbolProps = {

  name:
    IconSymbolName;

  size?:
    number;

  color:
    string;

  style?:
    StyleProp<TextStyle>;

};


// ======================================================
// ⭐ ICON SYMBOL
// ======================================================

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: IconSymbolProps) {

  return (

    <MaterialIcons
      name={
        MAPPING[name]
      }
      size={
        size
      }
      color={
        color
      }
      style={
        style
      }
    />

  );

}