import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AppText } from '@/components/ui/AppText';
import type { ResultadoBusqueda } from '@/types/receta';

type Props = {
  receta: ResultadoBusqueda;
  onPress: () => void;
};

export function AlternativeRecipeCard({ receta, onPress }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.card} onPress={onPress}>
      <Image source={receta.imagen} style={styles.image} />
      
      <View style={styles.content}>
        <AppText numberOfLines={2} style={styles.title}>
          {receta.titulo}
        </AppText>

        <View style={styles.metaRow}>
          <View style={styles.metaItem}>
            <MaterialCommunityIcons name="clock-outline" size={12} color="#D7A86E" />
            <AppText style={styles.metaText}>{receta.tiempoMinutos} min</AppText>
          </View>

          <View style={styles.metaItem}>
            <MaterialCommunityIcons name="check-decagram-outline" size={12} color="#8FB276" />
            <AppText style={styles.metaText}>{receta.compatibilidad}%</AppText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    backgroundColor: '#211712',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#473025',
    marginRight: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 100,
    backgroundColor: '#19100C',
  },
  content: {
    padding: 12,
  },
  title: {
    color: '#FFF3DD',
    fontSize: 13,
    fontWeight: '900',
    lineHeight: 18,
    height: 36, // Altura fija para 2 líneas
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    color: '#B99D84',
    fontSize: 10,
    fontWeight: '700',
  },
});