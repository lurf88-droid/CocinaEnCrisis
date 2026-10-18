import React, { useState } from 'react';

import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Radius, Spacing } from '@/constants/theme';
import { REGIONES, etiquetaRegion, type RegionId } from '@/data/regiones-mexico';
import { useCiudad } from '@/hooks/use-ciudad';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export function CiudadSelector() {
  const { region, regionId, setRegionId } = useCiudad();
  const [visible, setVisible] = useState(false);

  const elegir = async (id: RegionId) => {
    await setRegionId(id);
    setVisible(false);
  };

 return (
  <>
    <TouchableOpacity
      style={styles.selector}
      onPress={() => setVisible(true)}
      activeOpacity={0.8}
    >
      <MaterialCommunityIcons
        name="map-marker"
        size={20}
        color="#D7A86E"
        style={styles.selectorIcon}
      />
      <View style={styles.selectorTextos}>
        <Text style={styles.selectorLabel}>Tu ciudad</Text>
        <Text style={styles.selectorValor} numberOfLines={1}>
          {etiquetaRegion(region)}
        </Text>
      </View>
      <MaterialCommunityIcons
        name="chevron-down"
        size={20}
        color="#D7A86E"
      />
    </TouchableOpacity>

    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={() => setVisible(false)}
    >
      <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
        <Pressable style={styles.sheet} onPress={(e) => e.stopPropagation()}>
          <Text style={styles.sheetTitulo}>Elige tu ciudad</Text>
          <Text style={styles.sheetSubtitulo}>
            Los precios de tortilla, jitomate y canasta básica se ajustan por región.
          </Text>

          <ScrollView
            style={styles.lista}
            keyboardShouldPersistTaps="handled"
          >
            {REGIONES.map((item) => {
              const activo = item.id === regionId;
              return (
                <TouchableOpacity
                  key={item.id}
                  style={[styles.opcion, activo && styles.opcionActiva]}
                  onPress={() => elegir(item.id)}
                >
                  <View style={styles.opcionTextos}>
                    <Text
                      style={[
                        styles.opcionNombre,
                        activo && styles.opcionNombreActivo,
                      ]}
                    >
                      {item.nombre}
                    </Text>
                    <Text style={styles.opcionMeta}>
                      {item.estado} · {item.zona}
                    </Text>
                    <Text style={styles.opcionPrecios}>
                      Tortilla ${item.tortillaKg}/kg · Jitomate ~${item.jitomateKg}/kg
                    </Text>
                  </View>
                  {activo && <Text style={styles.check}>✓</Text>}
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <TouchableOpacity
            style={styles.cerrar}
            onPress={() => setVisible(false)}
          >
            <Text style={styles.cerrarTexto}>Cerrar</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  </>
);
}

const styles = StyleSheet.create({
selector: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'transparent',
  paddingVertical: 4,
  gap: 10,
},
 selectorIcon: {
  marginRight: 4,
},
  selectorTextos: {
    flex: 1,
  },
 selectorLabel: {
  color: '#D7A86E',
  fontSize: 11,
  fontWeight: '800',
  letterSpacing: 0.5,
},
  selectorValor: {
    color: '#FFF9F0',
    fontSize: 18,
    fontWeight: '900',
    marginTop: 3,
  },
  selectorChevron: {
    color: '#D7A86E',
    fontSize: 18,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(20, 12, 8, 0.72)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: '#2C1E16',
    borderTopLeftRadius: Radius.xl,
    borderTopRightRadius: Radius.xl,
    maxHeight: '85%',
    paddingTop: Spacing.xl,
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.xxl,
    borderWidth: 1,
    borderColor: 'rgba(255, 249, 240, 0.12)',
  },
  sheetTitulo: {
    color: '#FFF9F0',
    fontSize: 22,
    fontWeight: '900',
  },
  sheetSubtitulo: {
    color: '#D7A86E',
    fontSize: 13,
    marginTop: Spacing.sm,
    marginBottom: Spacing.lg,
    lineHeight: 19,
  },
  lista: {
    maxHeight: 420,
  },
  opcion: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 249, 240, 0.08)',
    borderRadius: Radius.lg,
    padding: Spacing.lg,
    marginBottom: Spacing.sm,
    borderWidth: 1,
    borderColor: 'rgba(255, 249, 240, 0.12)',
  },
  opcionActiva: {
    borderColor: '#E88A2E',
    backgroundColor: 'rgba(232, 138, 46, 0.16)',
  },
  opcionTextos: {
    flex: 1,
  },
  opcionNombre: {
    color: '#FFF9F0',
    fontSize: 16,
    fontWeight: '900',
  },
  opcionNombreActivo: {
    color: '#FFD79A',
  },
  opcionMeta: {
    color: '#D7A86E',
    fontSize: 12,
    marginTop: 2,
  },
  opcionPrecios: {
    color: '#F4E9D8',
    fontSize: 11,
    marginTop: 4,
  },
  check: {
    color: '#E88A2E',
    fontSize: 20,
    fontWeight: '900',
    marginLeft: Spacing.sm,
  },
  cerrar: {
    marginTop: Spacing.md,
    backgroundColor: '#E88A2E',
    padding: Spacing.lg,
    borderRadius: Radius.pill,
    alignItems: 'center',
  },
  cerrarTexto: {
    color: '#FFF9F0',
    fontWeight: '900',
  },
});