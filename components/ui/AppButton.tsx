import { ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {
  KitchenColors,
  Radius,
  Spacing,
} from '@/constants/theme';
import { AppText } from './AppText';

type AppButtonVariant = 'primary' | 'secondary' | 'ghost'   | 'rustic';
type AppButtonProps = {
  children: ReactNode;
  onPress: () => void;
  variant?: AppButtonVariant;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};


export function AppButton({
  children,
  onPress,
  variant = 'primary',
  style,
  disabled = false,
}: AppButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        pressed && styles.pressed,
        style,
        disabled && { opacity: 0.5 },
      ]}
    >
      <AppText
        variant="small"
        style={[
          styles.text,
          variant === 'secondary' && styles.secondaryText,
       variant === 'ghost' && styles.ghostText,
variant === 'rustic' && styles.rusticText,
        ]}
      >
        {children}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
base: {
  minHeight: 56,
  paddingHorizontal: Spacing.xl,
  borderRadius: Radius.pill,

  alignItems: 'center',
  justifyContent: 'center',

  overflow: 'hidden',
},

primary: {
  backgroundColor: '#8B4A27',

  borderWidth: 1,
  borderColor: '#D49A55',

  borderRadius: 28,

  minHeight: 58,

  shadowColor: '#160B06',

  shadowOpacity: 0.6,

  shadowRadius: 16,

  shadowOffset: {
    width: 0,
    height: 8,
  },

  elevation: 12,
},
 secondary: {
  backgroundColor: KitchenColors.card,

  borderWidth: 1,

  borderColor: KitchenColors.border,
},

  ghost: {
    backgroundColor: 'transparent',
  },

text: {
   color: '#FFF0D5',

  fontWeight: '900',

  fontSize: 17,

  letterSpacing: 0.8,
},
 secondaryText: {
  color: KitchenColors.text,
},
 ghostText: {
  color: KitchenColors.primary,
},

pressed: {
  opacity: 0.96,
  transform: [
    {
      scale: 0.985,
    },
  ],
},
rustic:{
 backgroundColor:'#6D472D',

  borderWidth:1,
borderColor:'#C08A52',

  shadowColor:'#000',
  shadowOpacity:0.25,
  shadowRadius:8,
  shadowOffset:{
    width:0,
    height:4,
  },

  elevation:5,
},
rusticText:{
  color:'#FFF3DD',
},
});
