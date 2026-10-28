import React, {
  useMemo,
  useState,
} from 'react';

import {
  FlatList,
  ScrollView,
  StyleSheet,
  Switch,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { CiudadSelector } from '@/components/ciudad-selector';
import { RecetaCard } from '@/components/receta-card';
import { AppText } from '@/components/ui/AppText';

import { formatearPrecio } from '@/data/recetas';
import { useCiudad } from '@/hooks/use-ciudad';
import { useIngredientes } from '@/context/IngredientesContext';
import { useUserPreferences } from '@/context/UserPreferencesContext'; // 👈 NUEVO
import { evaluarReceta } from '@/services/recetas.service';

import {
  KitchenColors,
  Radius,
  Spacing,
} from '@/constants/theme';


// ======================================================
// 🔎 FILTROS Y ORDEN
// ======================================================

type Filtro = 'todas' | 'desayuno' | 'comida' | 'cena' | 'snack';

const FILTROS: {
  id: Filtro;
  label: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
}[] = [
  { id: 'todas', label: 'Todas', icon: 'silverware-fork-knife' },
  { id: 'desayuno', label: 'Desayuno', icon: 'coffee-outline' },
  { id: 'comida', label: 'Comida', icon: 'food-outline' },
  { id: 'cena', label: 'Cena', icon: 'weather-night' },
  { id: 'snack', label: 'Snack', icon: 'food-apple-outline' },
];

type Orden = 'recomendado' | 'precio' | 'tiempo' | 'compatibilidad';

const ORDENES: { id: Orden; label: string; icon: React.ComponentProps<typeof MaterialCommunityIcons>['name'] }[] = [
  { id: 'recomendado', label: 'Recomendado', icon: 'star-outline' },
  { id: 'precio', label: 'Más barato', icon: 'cash' },
  { id: 'tiempo', label: 'Más rápido', icon: 'clock-fast' },
  { id: 'compatibilidad', label: 'Mejor match', icon: 'target' },
];


// ======================================================
// 🍳 RECETAS
// ======================================================

export default function RecetasScreen() {

  const { recetasConCosto, fuentePrecios, region, regionId } = useCiudad();
  const { ingredientes, presupuesto } = useIngredientes();
  
  // 👇 1. EXTRAEMOS LAS PREFERENCIAS
  const { preferences } = useUserPreferences();

  const [filtro, setFiltro] = useState<Filtro>('todas');
  const [busqueda, setBusqueda] = useState('');
  const [soloPuedoCocinar, setSoloPuedoCocinar] = useState(false);
  const [orden, setOrden] = useState<Orden>('recomendado');

  // ====================================================
  // 🧠 EVALUACIÓN Y FILTRADO PRO (CON PREFERENCIAS)
  // ====================================================

  const recetasFiltradas = useMemo(() => {
    const texto = busqueda.trim().toLowerCase();

    // 1. Evaluamos cada receta contra la despensa
    const evaluadas = recetasConCosto.map(receta => {
      const resultado = evaluarReceta(receta, ingredientes, presupuesto, regionId);
      return {
        receta,
        puedeCocinar: resultado?.puedeCocinar ?? false,
        compatibilidad: resultado?.compatibilidad ?? 0,
      };
    });

    // 2. Filtramos
    let lista = evaluadas.filter(({ receta, puedeCocinar }) => {
      // Filtro de despensa
      if (soloPuedoCocinar && !puedeCocinar) return false;

      // Filtro de categoría
      const coincideCategoria = filtro === 'todas' ? true : receta.categoria === filtro;

      // 🚨 FILTRO DE PREFERENCIAS
      if (preferences.vegetariano || preferences.vegano) {
        const esVeggie = receta.tags?.includes('vegetariano') || 
                         receta.tags?.includes('vegano') || 
                         receta.tags?.includes('vegetariana');
        if (!esVeggie) return false;
      }

      if (preferences.sinLacteos) {
        const tieneLacteos = receta.ingredientes.some(i => 
          i.id.includes('leche') || 
          i.id.includes('queso') || 
          i.id.includes('crema') || 
          i.id.includes('mantequilla') ||
          i.id.includes('yogurt')
        );
        if (tieneLacteos) return false;
      }

      if (preferences.sinGluten) {
        const tieneGluten = receta.ingredientes.some(i => 
          i.id.includes('harina') || 
          i.id.includes('pan') || 
          i.id.includes('pasta') ||
          i.id.includes('trigo')
        );
        if (tieneGluten) return false;
      }

      // Filtro de búsqueda
      const coincideBusqueda = texto.length === 0 ? true : (
        receta.titulo.toLowerCase().includes(texto) ||
        receta.descripcion?.toLowerCase().includes(texto) ||
        receta.cocina?.toLowerCase().includes(texto) ||
        receta.ingredientes.some(
          ing => ing.id.replace(/_/g, ' ').toLowerCase().includes(texto)
        )
      );

      return coincideCategoria && coincideBusqueda;
    });

    // 3. Ordenamos
    lista.sort((a, b) => {
      switch (orden) {
        case 'precio':
          return a.receta.costoTotal - b.receta.costoTotal;
        case 'tiempo':
          return a.receta.tiempoMinutos - b.receta.tiempoMinutos;
        case 'compatibilidad':
          return b.compatibilidad - a.compatibilidad;
        default:
          const popA = a.receta.popularidad ?? 0;
          const popB = b.receta.popularidad ?? 0;
          if (popB !== popA) return popB - popA;
          return a.receta.tiempoMinutos - b.receta.tiempoMinutos;
      }
    });

    return lista;
  }, [recetasConCosto, ingredientes, presupuesto, regionId, filtro, busqueda, soloPuedoCocinar, orden, preferences]); // 👈 preferences en las dependencias

  const recetas = recetasFiltradas.map(item => item.receta);

  // ====================================================
  // 📊 ESTADÍSTICAS
  // ====================================================

  const estadisticas = useMemo(() => {
    if (recetas.length === 0) {
      return { masBarata: null, promedio: 0, masRapida: null };
    }

    const masBarata = [...recetas].sort((a, b) => a.costoTotal - b.costoTotal)[0];
    const masRapida = [...recetas].sort((a, b) => a.tiempoMinutos - b.tiempoMinutos)[0];
    const total = recetas.reduce((sum, receta) => sum + receta.costoTotal, 0);

    return {
      masBarata,
      promedio: total / recetas.length,
      masRapida,
    };
  }, [recetas]);

  // ====================================================
  // ⭐ DESTACADA
  // ====================================================

  const recetaDestacada = useMemo(() => {
    if (recetas.length === 0) return null;
    return recetasFiltradas[0]?.receta ?? null;
  }, [recetasFiltradas, recetas.length]);


  // ====================================================
  // 🧱 HEADER
  // ====================================================

  const header = (
    <View>
      {/* HERO */}
      <View style={styles.hero}>
        <View style={styles.heroTop}>
          <View style={styles.heroIcon}>
            <MaterialCommunityIcons name="chef-hat" size={29} color="#F2B35B" />
          </View>
          <View style={styles.heroTitleWrap}>
            <AppText style={styles.eyebrow}>EXPLORA</AppText>
            <AppText style={styles.heroTitle}>Recetas</AppText>
          </View>
          <View style={styles.totalBadge}>
            <AppText style={styles.totalValue}>{recetasConCosto.length}</AppText>
            <AppText style={styles.totalLabel}>TOTAL</AppText>
          </View>
        </View>

        <AppText style={styles.heroDescription}>
          Explora recetas, compara costos y encuentra algo que realmente se te antoje cocinar.
        </AppText>

        <View style={styles.regionRow}>
          <CiudadSelector />
        </View>
      </View>

      {/* BUSCADOR */}
      <View style={styles.searchSection}>
        <AppText style={styles.sectionEyebrow}>ENCUENTRA ALGO RICO</AppText>
        <AppText style={styles.sectionTitle}>¿Qué quieres cocinar?</AppText>

        <View style={styles.searchBox}>
          <MaterialCommunityIcons name="magnify" size={22} color="#A98A72" />
          <TextInput
            value={busqueda}
            onChangeText={setBusqueda}
            placeholder="Buscar receta, cocina o ingrediente..."
            placeholderTextColor="#765F4D"
            style={styles.searchInput}
          />
          {busqueda.length > 0 && (
            <TouchableOpacity onPress={() => setBusqueda('')}>
              <MaterialCommunityIcons name="close-circle" size={20} color="#9A7962" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* FILTROS DE CATEGORÍA */}
      <View style={styles.filterSection}>
        <View style={styles.filterHeader}>
          <AppText style={styles.sectionEyebrow}>MOMENTO DEL DÍA</AppText>
          <AppText style={styles.filterCount}>{recetas.length} resultados</AppText>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersContent}>
          {FILTROS.map(item => {
            const activo = filtro === item.id;
            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.84}
                style={[styles.filterChip, activo && styles.filterChipActive]}
                onPress={() => setFiltro(item.id)}
              >
                <MaterialCommunityIcons name={item.icon} size={18} color={activo ? '#27160B' : '#C09A79'} />
                <AppText style={[styles.filterText, activo && styles.filterTextActive]}>{item.label}</AppText>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* CONTROLES: Toggle y Orden */}
      <View style={styles.controlsSection}>
        <View style={styles.toggleRow}>
          <View style={styles.toggleTextWrap}>
            <MaterialCommunityIcons name="basket-check-outline" size={20} color="#8FB276" />
            <AppText style={styles.toggleLabel}>Solo lo que puedo cocinar</AppText>
          </View>
          <Switch
            value={soloPuedoCocinar}
            onValueChange={setSoloPuedoCocinar}
            trackColor={{ false: '#4A3226', true: '#8FB276' }}
            thumbColor={soloPuedoCocinar ? '#20311F' : '#F2B35B'}
          />
        </View>

        <AppText style={[styles.sectionEyebrow, { marginTop: 16, marginBottom: 8 }]}>ORDENAR POR</AppText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filtersContent}>
          {ORDENES.map(item => {
            const activo = orden === item.id;
            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.84}
                style={[styles.sortChip, activo && styles.sortChipActive]}
                onPress={() => setOrden(item.id)}
              >
                <MaterialCommunityIcons name={item.icon} size={14} color={activo ? '#F2B35B' : '#8D725E'} />
                <AppText style={[styles.sortText, activo && styles.sortTextActive]}>{item.label}</AppText>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* STATS */}
      {recetas.length > 0 && (
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <MaterialCommunityIcons name="cash" size={20} color="#8FB276" />
            </View>
            <AppText style={styles.statLabel}>MÁS BARATA</AppText>
            <AppText style={styles.statValue}>
              {estadisticas.masBarata ? formatearPrecio(estadisticas.masBarata.costoTotal) : '—'}
            </AppText>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <MaterialCommunityIcons name="chart-line" size={20} color="#F2B35B" />
            </View>
            <AppText style={styles.statLabel}>PROMEDIO</AppText>
            <AppText style={styles.statValue}>{formatearPrecio(estadisticas.promedio)}</AppText>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <MaterialCommunityIcons name="clock-fast" size={20} color="#D7A86E" />
            </View>
            <AppText style={styles.statLabel}>MÁS RÁPIDA</AppText>
            <AppText style={styles.statValue}>
              {estadisticas.masRapida ? `${estadisticas.masRapida.tiempoMinutos} min` : '—'}
            </AppText>
          </View>
        </View>
      )}

      {/* DESTACADA */}
      {recetaDestacada && (
        <View style={styles.featuredSection}>
          <View style={styles.featuredHeader}>
            <View>
              <AppText style={styles.sectionEyebrow}>DESCUBRE</AppText>
              <AppText style={styles.sectionTitle}>Una buena opción para empezar</AppText>
            </View>
            <View style={styles.featuredBadge}>
              <MaterialCommunityIcons name="star-four-points" size={13} color="#F2B35B" />
              <AppText style={styles.featuredBadgeText}>DESTACADA</AppText>
            </View>
          </View>

          <View style={styles.featuredCard}>
            <AppText style={styles.featuredTitle}>{recetaDestacada.titulo}</AppText>
            <View style={styles.featuredMeta}>
              <View style={styles.featuredMetaItem}>
                <MaterialCommunityIcons name="cash" size={16} color="#8FB276" />
                <AppText style={styles.featuredMetaText}>{formatearPrecio(recetaDestacada.costoTotal)}</AppText>
              </View>
              <View style={styles.featuredMetaItem}>
                <MaterialCommunityIcons name="clock-outline" size={16} color="#D7A86E" />
                <AppText style={styles.featuredMetaText}>{recetaDestacada.tiempoMinutos} min</AppText>
              </View>
              <View style={styles.featuredMetaItem}>
                <MaterialCommunityIcons name="account-group-outline" size={16} color="#C69270" />
                <AppText style={styles.featuredMetaText}>{recetaDestacada.porciones} porciones</AppText>
              </View>
            </View>
          </View>
        </View>
      )}

      {/* LIST HEADER */}
      <View style={styles.listHeader}>
        <View>
          <AppText style={styles.sectionEyebrow}>CATÁLOGO</AppText>
          <AppText style={styles.sectionTitle}>Todas las recetas</AppText>
        </View>
        <View style={styles.listCountBadge}>
          <AppText style={styles.listCountText}>{recetas.length}</AppText>
        </View>
      </View>

      {/* SOURCE */}
      <View style={styles.sourceRow}>
        <MaterialCommunityIcons name="information-outline" size={15} color="#806A59" />
        <AppText style={styles.sourceText}>{fuentePrecios}</AppText>
      </View>
    </View>
  );

  // ====================================================
  // UI
  // ====================================================

  return (
    <FlatList
      data={recetas}
      keyExtractor={receta => receta.id}
      renderItem={({ item }) => (
        <View style={styles.recipeWrapper}>
          <RecetaCard receta={item} />
        </View>
      )}
      ListHeaderComponent={header}
      ListEmptyComponent={
        <View style={styles.emptyState}>
          <View style={styles.emptyIcon}>
            <MaterialCommunityIcons name="silverware-clean" size={34} color="#F2B35B" />
          </View>
          <AppText style={styles.emptyTitle}>No encontramos recetas</AppText>
          <AppText style={styles.emptyText}>
            Prueba con otra búsqueda, cambia el filtro o desactiva "Solo lo que puedo cocinar".
          </AppText>
          <TouchableOpacity
            style={styles.emptyButton}
            onPress={() => {
              setBusqueda('');
              setFiltro('todas');
              setSoloPuedoCocinar(false);
            }}
          >
            <AppText style={styles.emptyButtonText}>Limpiar filtros</AppText>
          </TouchableOpacity>
        </View>
      }
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      initialNumToRender={5}
      maxToRenderPerBatch={5}
      windowSize={7}
      updateCellsBatchingPeriod={50}
    />
  );
}


// ======================================================
// 🎨 STYLES
// ======================================================

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: KitchenColors.background,
    paddingHorizontal: Spacing.xl,
    paddingTop: 28,
    paddingBottom: 140,
  },

  // HERO
  hero: {
    backgroundColor: '#211510',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#65452F',
    padding: 22,
    shadowColor: '#000',
    shadowOpacity: 0.34,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 9,
  },
  heroTop: { flexDirection: 'row', alignItems: 'center' },
  heroIcon: {
    width: 54, height: 54, borderRadius: 18, backgroundColor: '#382319',
    borderWidth: 1, borderColor: '#8A5A35', alignItems: 'center', justifyContent: 'center', marginRight: 13,
  },
  heroTitleWrap: { flex: 1 },
  eyebrow: { color: '#D68A45', fontSize: 10, fontWeight: '900', letterSpacing: 1.8 },
  heroTitle: { color: '#FFF3DD', fontSize: 29, fontWeight: '900', marginTop: 3 },
  totalBadge: {
    minWidth: 55, height: 55, borderRadius: 17, backgroundColor: '#19100C',
    borderWidth: 1, borderColor: '#4A3326', alignItems: 'center', justifyContent: 'center',
  },
  totalValue: { color: '#F2B35B', fontSize: 20, fontWeight: '900' },
  totalLabel: { color: '#8E735F', fontSize: 7, fontWeight: '900', letterSpacing: 1, marginTop: 1 },
  heroDescription: { color: '#D4BCA3', fontSize: 15, lineHeight: 23, marginTop: 18 },
  regionRow: { marginTop: 20, backgroundColor: '#19100C', borderRadius: 17, borderWidth: 1, borderColor: '#3C2920', padding: 12 },

  // SEARCH
  searchSection: { marginTop: 28 },
  sectionEyebrow: { color: '#C17D48', fontSize: 9, fontWeight: '900', letterSpacing: 1.6 },
  sectionTitle: { color: '#FFF3DD', fontSize: 23, fontWeight: '900', marginTop: 3 },
  searchBox: {
    marginTop: 13, height: 54, flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#201610', borderRadius: 17, borderWidth: 1, borderColor: '#4A3226', paddingHorizontal: 15, gap: 10,
  },
  searchInput: { flex: 1, color: '#FFF3DD', fontSize: 14, paddingVertical: 0 },

  // FILTERS
  filterSection: { marginTop: 24 },
  filterHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  filterCount: { color: '#9B7D68', fontSize: 10, fontWeight: '800' },
  filtersContent: { paddingTop: 13, paddingRight: 12, gap: 9 },
  filterChip: {
    height: 43, flexDirection: 'row', alignItems: 'center', gap: 7, paddingHorizontal: 14,
    backgroundColor: '#241A14', borderRadius: 999, borderWidth: 1, borderColor: '#4C3529',
  },
  filterChipActive: { backgroundColor: '#F2B35B', borderColor: '#F2B35B' },
  filterText: { color: '#D4BBA2', fontSize: 12, fontWeight: '800' },
  filterTextActive: { color: '#27160B', fontWeight: '900' },

  // CONTROLES
  controlsSection: { marginTop: 22, marginBottom: 4 },
  toggleRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: '#1D1511', padding: 14, borderRadius: 16, borderWidth: 1, borderColor: '#3D2B22',
  },
  toggleTextWrap: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  toggleLabel: { color: '#E8D3BE', fontSize: 13, fontWeight: '800' },
  sortChip: {
    flexDirection: 'row', alignItems: 'center', gap: 6, paddingHorizontal: 12, paddingVertical: 8,
    backgroundColor: '#1B130F', borderRadius: 999, borderWidth: 1, borderColor: '#34241C',
  },
  sortChipActive: { backgroundColor: '#2E1D15', borderColor: '#6B4227' },
  sortText: { color: '#8D725E', fontSize: 11, fontWeight: '800' },
  sortTextActive: { color: '#F2B35B' },

  // STATS
  statsRow: { flexDirection: 'row', gap: 9, marginTop: 24 },
  statCard: {
    flex: 1, backgroundColor: '#201610', borderRadius: 17, borderWidth: 1, borderColor: '#443027', padding: 13,
  },
  statIcon: {
    width: 34, height: 34, borderRadius: 11, backgroundColor: '#302119',
    alignItems: 'center', justifyContent: 'center', marginBottom: 9,
  },
  statLabel: { color: '#8D725E', fontSize: 7, fontWeight: '900', letterSpacing: 1 },
  statValue: { color: '#F4DEC7', fontSize: 14, fontWeight: '900', marginTop: 3 },

  // FEATURED
  featuredSection: { marginTop: 30 },
  featuredHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 12 },
  featuredBadge: {
    flexDirection: 'row', alignItems: 'center', gap: 5, paddingHorizontal: 9, paddingVertical: 5,
    borderRadius: 999, backgroundColor: '#382419',
  },
  featuredBadgeText: { color: '#F2B35B', fontSize: 7, fontWeight: '900', letterSpacing: 1 },
  featuredCard: { backgroundColor: '#251A14', borderRadius: 22, borderWidth: 1, borderColor: '#6B4934', padding: 18 },
  featuredTitle: { color: '#FFF3DD', fontSize: 20, fontWeight: '900' },
  featuredMeta: { flexDirection: 'row', flexWrap: 'wrap', gap: 13, marginTop: 13 },
  featuredMetaItem: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  featuredMetaText: { color: '#B99D84', fontSize: 11, fontWeight: '700' },

  // LIST
  listHeader: {
    flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: 32, marginBottom: 5,
  },
  listCountBadge: {
    minWidth: 36, height: 30, borderRadius: 999, backgroundColor: '#342219',
    borderWidth: 1, borderColor: '#6D4933', alignItems: 'center', justifyContent: 'center',
  },
  listCountText: { color: '#F2B35B', fontSize: 11, fontWeight: '900' },
  sourceRow: { flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 7, marginBottom: 16 },
  sourceText: { color: '#806A59', fontSize: 9 },
  recipeWrapper: { marginBottom: 14 },

  // EMPTY
  emptyState: {
    marginTop: 25, backgroundColor: '#211712', borderRadius: 24, borderWidth: 1,
    borderColor: '#493226', padding: 27, alignItems: 'center',
  },
  emptyIcon: { width: 64, height: 64, borderRadius: 21, backgroundColor: '#342319', alignItems: 'center', justifyContent: 'center' },
  emptyTitle: { color: '#FFF3DD', fontSize: 19, fontWeight: '900', marginTop: 15 },
  emptyText: { color: '#A98D76', fontSize: 13, marginTop: 6, textAlign: 'center' },
  emptyButton: { marginTop: 18, paddingHorizontal: 18, paddingVertical: 11, borderRadius: 999, backgroundColor: '#F2B35B' },
  emptyButtonText: { color: '#25140A', fontSize: 11, fontWeight: '900' },
});