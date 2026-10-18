import type { ComponentProps } from 'react';
import { Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { getEmojiIngrediente } from '@/constants/emoji-ingredientes';
import { obtenerIngrediente } from '@/data/catalogo-ingredientes';

type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

type IngredienteIconoInput = {
  id?: string;
  nombre?: string;
  categoria?: string;
  subcategoria?: string;
  familias?: string[];
  tags?: string[];
};

type IngredientIconProps = {
  id?: string;
  ingrediente?: IngredienteIconoInput | string;
  size?: number;
  color?: string;
};

// ======================================================
// 🎨 COLORES COCINA EN CRISIS
// ======================================================

export const INGREDIENTE_ICON_COLORS = {
  principal: '#E77924',
  secundario: '#F2B35B',
  oscuro: '#1D1410',
  claro: '#FFF3DD',
} as const;

// ======================================================
// 🥕 COMPONENTE INGREDIENT ICON → EMOJI
// ======================================================

export function IngredientIcon({
  id,
  ingrediente,
  size = 32,
}: IngredientIconProps) {
  const valor =
    typeof ingrediente === 'string'
      ? ingrediente
      : ingrediente?.id ??
        ingrediente?.nombre ??
        id ??
        '';

  // Intentamos obtener la categoría directamente del objeto o del catálogo
  const categoria =
    typeof ingrediente === 'object' && ingrediente !== null
      ? ingrediente.categoria
      : obtenerIngrediente(valor)?.categoria;

  const emoji = getEmojiIngrediente(valor, categoria);

  return (
    <Text
      style={[
        styles.emoji,
        {
          fontSize: size * 1.05,
          lineHeight: size * 1.15,
        },
      ]}
    >
      {emoji}
    </Text>
  );
}

const styles = StyleSheet.create({
  emoji: {
    textAlign: 'center',
    textAlignVertical: 'center',
    includeFontPadding: false,
    textShadowColor: 'rgba(242, 179, 91, 0.35)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
});