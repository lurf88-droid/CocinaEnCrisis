import { ReactNode } from 'react';

import {
  Text,
  StyleSheet,
  TextStyle,
  StyleProp,
  TextProps,
} from 'react-native';

import {
  Colors,
  Typography,
} from '@/constants/theme';


type AppTextVariant =
  | 'hero'
  | 'title'
  | 'subtitle'
  | 'body'
  | 'small'
  | 'caption'
  | 'overline';


type AppTextProps =
  Omit<TextProps, 'style' | 'children'> & {
    children: ReactNode;
    variant?: AppTextVariant;
    muted?: boolean;
    style?: StyleProp<TextStyle>;
  };


export function AppText({
  children,
  variant = 'body',
  muted = false,
  style,
  ...textProps
}: AppTextProps) {

  return (

    <Text
      {...textProps}
      style={[
        styles.base,
        styles[variant],
        muted && styles.muted,
        style,
      ]}
    >
      {children}
    </Text>

  );

}


const styles = StyleSheet.create({

  base: {
    color: Colors.light.text,
  },


  hero: {
    fontSize: 34,
    fontWeight: '900',
    lineHeight: 48,
    includeFontPadding: false,
  },


  title: {
    fontSize: Typography.title,
    fontWeight: '800',
    lineHeight: 42,
    includeFontPadding: false,
  },


  subtitle: {
    fontSize: Typography.subtitle,
    fontWeight: '700',
    lineHeight: 28,
  },


  body: {
    fontSize: Typography.body,
    fontWeight: '400',
    lineHeight: 24,
  },


  small: {
    fontSize: Typography.small,
    fontWeight: '500',
    lineHeight: 20,
  },


  caption: {
    fontSize: Typography.caption,
    fontWeight: '500',
    lineHeight: 16,
  },


  overline: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },


  muted: {
    color: Colors.light.textMuted,
  },

});