import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { AppCard } from '@/components/ui/AppCard';
import { AppText } from '@/components/ui/AppText';
import { Colors, Spacing } from '@/constants/theme';

type Props = {
  ingredientes: string[];
  eliminarIngrediente: (ingrediente: string) => void;
};

export function IngredientesList({
  ingredientes,
  eliminarIngrediente,
}: Props) {
  if (ingredientes.length === 0) {
    return null;
  }

return (
  <View style={styles.listaIngredientes}>
    {ingredientes.map((item) => (
      <AppCard key={item} style={styles.ingredienteItem}>
        <AppText style={styles.ingredienteTexto}>
          {item}
        </AppText>

        <TouchableOpacity onPress={() => eliminarIngrediente(item)}>
          <Text style={styles.eliminarTexto}>✕</Text>
        </TouchableOpacity>
      </AppCard>
    ))}
  </View>
);
}
const styles = StyleSheet.create({
  listaIngredientes: {
    marginBottom: Spacing.sm,
  },

  ingredienteItem: {
    marginBottom: Spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  ingredienteTexto: {
    textTransform: 'capitalize',
  },

  eliminarTexto: {
    color: Colors.light.primary,
    fontSize: 22,
    fontWeight: '900',
  },
});