import React, { useState } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';

import { useIngredientes } from '@/context/IngredientesContext';
import { CATALOGO_INGREDIENTES } from '@/data/catalogo-ingredientes';
import { resolverIngredienteId } from '@/utils/resolverIngrediente'; // 👈 Tu función mágica

export default function ScannerScreen() {
  const { agregarIngrediente } = useIngredientes();
  const [permission, requestPermission] = useCameraPermissions();
  
  const [scanned, setScanned] = useState(false);
  const [loading, setLoading] = useState(false);
  const [producto, setProducto] = useState<{ id: string; nombre: string } | null>(null);

  if (!permission || !permission.granted) {
    return (
      <View style={styles.center}>
        <Text style={{ fontSize: 48, marginBottom: 14 }}>📷</Text>
        <Text style={styles.title}>Escáner Chef Luna</Text>
        <Text style={styles.permissionText}>
          Necesito acceso a tu cámara para escanear productos.
        </Text>
        <TouchableOpacity style={styles.primaryButton} onPress={requestPermission}>
          <Text style={styles.primaryButtonText}>Permitir cámara</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // ====================================================
  // 🚀 LÓGICA REAL CON API (Open Food Facts)
  // ====================================================
  const handleBarCodeScanned = async ({ data }: { data: string }) => {
    if (scanned || loading) return;

    setScanned(true);
    setLoading(true);
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    try {
      // 1. Consultamos la base de datos mundial gratis
      const response = await fetch(`https://world.openfoodfacts.org/api/v2/product/${data}.json`);
      const json = await response.json();

      // 2. Si el producto existe, sacamos su nombre
      if (json.status === 1 && json.product) {
        // Intentamos buscar el nombre en español, si no, en el genérico
        const nombreProducto = json.product.product_name_es || json.product.product_name || '';
        
        if (!nombreProducto) {
          throw new Error('El producto no tiene nombre');
        }

        // 3. Usamos tu base de datos para ver si tenemos ese ingrediente
        // Ejemplo: API dice "Atún en agua" -> Tu base dice "atun" -> ¡Match!
        const idCatalogo = resolverIngredienteId(nombreProducto);

        if (idCatalogo) {
          const info = CATALOGO_INGREDIENTES.find(item => item.id === idCatalogo);
          setProducto({
            id: idCatalogo,
            nombre: info?.nombre ?? idCatalogo,
          });
          void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        } else {
          Alert.alert(
            'Producto no empata con tu catálogo',
            `Encontré "${nombreProducto}" en internet, pero no es un ingrediente válido para Chef Luna.`,
            [{ text: 'Escanear otro', onPress: () => setScanned(false) }]
          );
        }
      } else {
        Alert.alert(
          'Producto no encontrado',
          'Este código no está registrado en la base de datos mundial.',
          [{ text: 'Intentar de nuevo', onPress: () => setScanned(false) }]
        );
      }
    } catch (error) {
      Alert.alert(
        'Error de conexión',
        'No pude consultar la base de datos. Revisa tu internet.',
        [{ text: 'Reintentar', onPress: () => setScanned(false) }]
      );
    } finally {
      setLoading(false);
    }
  };

  const agregarYVolver = () => {
    if (producto) {
      agregarIngrediente(producto.id);
      Alert.alert(
        '¡Agregado!',
        `${producto.nombre} ya está en tu despensa.`,
        [
          { text: 'Escanear otro', onPress: () => { setProducto(null); setScanned(false); } },
          { text: 'Ir al inicio', onPress: () => router.push('/(tabs)') }
        ]
      );
    }
  };

  return (
    <View style={styles.root}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>CHEF LUNA</Text>
            <Text style={styles.headerTitle}>Escáner de productos</Text>
          </View>
          <View style={styles.aiBadge}>
            <Text style={styles.aiBadgeText}>📦</Text>
          </View>
        </View>

        <View style={styles.cameraCard}>
          <CameraView
            style={styles.camera}
            facing="back"
            onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
            barcodeScannerSettings={{
              barcodeTypes: ['ean13', 'ean8', 'upc_a', 'upc_e', 'code128', 'code39', 'qr'],
            }}
          />
          
          {loading && (
            <View style={styles.loadingOverlay}>
              <ActivityIndicator size="large" color="#F2B35B" />
              <Text style={styles.loadingText}>Buscando producto...</Text>
            </View>
          )}

          <View style={styles.cameraGuide}>
            <View style={[styles.corner, styles.cornerTopLeft]} />
            <View style={[styles.corner, styles.cornerTopRight]} />
            <View style={[styles.corner, styles.cornerBottomLeft]} />
            <View style={[styles.corner, styles.cornerBottomRight]} />
            <View style={styles.guideTextBox}>
              <Text style={styles.guideText}>Apunta al código de barras</Text>
              <Text style={styles.guideSubtext}>Busca el recuadro de líneas negras</Text>
            </View>
          </View>
        </View>

        {producto && (
          <View style={styles.resultBox}>
            <View style={styles.resultHeaderRow}>
              <View>
                <Text style={styles.resultEyebrow}>PRODUCTO DETECTADO</Text>
                <Text style={styles.resultTitle}>{producto.nombre}</Text>
              </View>
              <View style={styles.countBadge}>
                <Text style={styles.countText}>✓</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.primaryButton} onPress={agregarYVolver}>
              <Text style={styles.primaryButtonText}>Agregar a mi despensa</Text>
            </TouchableOpacity>
          </View>
        )}

        {scanned && !producto && !loading && (
          <View style={styles.footer}>
            <TouchableOpacity style={styles.secondaryButton} onPress={() => setScanned(false)}>
              <Text style={styles.secondaryButtonText}>Escanear otro producto</Text>
            </TouchableOpacity>
          </View>
        )}

      </ScrollView>
    </View>
  );
}

// (Los estilos son los mismos que en el mensaje anterior, puedes dejarlos igual)
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#1D1410' },
  container: { flex: 1, backgroundColor: '#1D1410' },
  contentContainer: { paddingBottom: 34 },
  header: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  eyebrow: { color: '#E77924', fontSize: 11, fontWeight: '800', letterSpacing: 2, marginBottom: 4 },
  headerTitle: { color: '#FFF3DD', fontSize: 24, fontWeight: '800' },
  aiBadge: { width: 42, height: 42, borderRadius: 14, backgroundColor: '#2B1E18', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#503528' },
  aiBadgeText: { fontSize: 20 },
  cameraCard: { marginHorizontal: 16, borderRadius: 24, overflow: 'hidden', backgroundColor: '#0A0908', position: 'relative', borderWidth: 1, borderColor: '#3A281F' },
  camera: { width: '100%', height: 430 },
  cameraGuide: { ...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'center' },
  corner: { position: 'absolute', width: 42, height: 42, borderColor: '#F2B35B' },
  cornerTopLeft: { top: 34, left: 30, borderTopWidth: 3, borderLeftWidth: 3, borderTopLeftRadius: 12 },
  cornerTopRight: { top: 34, right: 30, borderTopWidth: 3, borderRightWidth: 3, borderTopRightRadius: 12 },
  cornerBottomLeft: { bottom: 34, left: 30, borderBottomWidth: 3, borderLeftWidth: 3, borderBottomLeftRadius: 12 },
  cornerBottomRight: { bottom: 34, right: 30, borderBottomWidth: 3, borderRightWidth: 3, borderBottomRightRadius: 12 },
  guideTextBox: { position: 'absolute', bottom: 28, backgroundColor: 'rgba(29,20,16,0.84)', paddingHorizontal: 18, paddingVertical: 10, borderRadius: 14, alignItems: 'center' },
  guideText: { color: '#FFF3DD', fontWeight: '700', fontSize: 14 },
  guideSubtext: { color: '#CBB7A8', fontSize: 11, marginTop: 2 },
  resultBox: { backgroundColor: '#271B16', marginHorizontal: 16, marginTop: 16, padding: 18, borderRadius: 22, borderWidth: 1, borderColor: '#3A281F' },
  resultHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  resultEyebrow: { color: '#E77924', fontWeight: '800', letterSpacing: 1.5, fontSize: 10, marginBottom: 4 },
  resultTitle: { color: '#FFF3DD', fontSize: 20, fontWeight: '800' },
  countBadge: { width: 38, height: 38, borderRadius: 19, backgroundColor: '#8FB276', alignItems: 'center', justifyContent: 'center' },
  countText: { color: '#1D1410', fontWeight: '900', fontSize: 18 },
  footer: { paddingHorizontal: 16, paddingTop: 18 },
  primaryButton: { minHeight: 58, backgroundColor: '#E77924', borderRadius: 18, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 18 },
  primaryButtonText: { color: '#FFFFFF', fontWeight: '900', fontSize: 16 },
  secondaryButton: { minHeight: 52, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginTop: 10, borderWidth: 1, borderColor: '#51372C', backgroundColor: '#271B16' },
  secondaryButtonText: { color: '#E5CBBB', fontWeight: '700' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1D1410', padding: 30 },
  title: { color: '#FFF3DD', fontSize: 28, fontWeight: '900', marginBottom: 12, textAlign: 'center' },
  permissionText: { color: '#BFA99A', textAlign: 'center', lineHeight: 21, marginBottom: 24 },
  loadingOverlay: { ...StyleSheet.absoluteFill, backgroundColor: 'rgba(15,10,8,0.8)', justifyContent: 'center', alignItems: 'center', zIndex: 10 },
  loadingText: { color: '#FFF3DD', marginTop: 12, fontSize: 16, fontWeight: '700' },
});