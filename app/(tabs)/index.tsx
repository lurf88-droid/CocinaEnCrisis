import React, {
  useMemo,
  useState,
} from 'react';

import {
  Alert,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { router } from 'expo-router';

import { useIngredientes } from '@/context/IngredientesContext';
import { useCiudad } from '@/hooks/use-ciudad';

import { PantryPreview } from '@/components/home/PantryPreview';
import { PantryStatusHero } from '@/components/home/PantryStatusHero';
import { ChefOpportunityCard } from '@/components/home/ChefOpportunityCard';
import { ChefRecommendationCard } from '@/components/chef/ChefRecommendationCard';

import { AppText } from '@/components/ui/AppText';
import { Screen } from '@/components/ui/Screen';

import {
  calcularEstadoDespensa,
} from '@/services/home/HomeDashboard';

import {
  ChefEngine,
} from '@/services/chef-engine';

import type {
  ChefMode,
} from '@/utils/chefMode';

import {
  KitchenColors,
  Radius,
  Spacing,
} from '@/constants/theme';


// ======================================================
// 🎛 MODOS DE CHEF LUNA
// ======================================================

type ModeOption = {
  id: ChefMode;
  icon: string;
  titulo: string;
  descripcion: string;
};


const MODOS: ModeOption[] = [
  { id: 'crisis', icon: '🔥', titulo: 'Crisis', descripcion: 'Decide por mí' },
  { id: 'ahorro', icon: '💰', titulo: 'Ahorro', descripcion: 'Gastar menos' },
  { id: 'rapido', icon: '⚡', titulo: 'Rápido', descripcion: 'Comer pronto' },
  { id: 'antojo', icon: '❤️', titulo: 'Antojo', descripcion: 'Algo especial' },
];


// ======================================================
// 🏠 HOME
// ======================================================

export default function HomeScreen() {

  const { buscarRecetas } = useCiudad();
  const { ingredientes, presupuesto: presupuestoNum } = useIngredientes();

  const [modo, setModo] = useState<ChefMode>('crisis');


  // ====================================================
  // 🔎 RESULTADOS
  // ====================================================

  const resultados = useMemo(() => {
    if (ingredientes.length === 0) return [];
    return buscarRecetas(ingredientes, presupuestoNum);
  }, [ingredientes, presupuestoNum, buscarRecetas]);


  // ====================================================
  // 🧠 DASHBOARD CHEF LUNA
  // ====================================================

  const dashboard = ChefEngine.dashboard({
    resultados,
    presupuesto: presupuestoNum,
    modo,
  });

  const {
    mejorReceta,
    recetasListas,
    razonesChef,
    desbloqueo,
    recomendacionPrincipal,
    personalidad,
    estadisticas,
  } = dashboard;


  // ====================================================
  // 🧺 ESTADO DESPENSA Y CONFIANZA
  // ====================================================

  const estadoDespensa = calcularEstadoDespensa(
    ingredientes.length,
    recetasListas.length,
    presupuestoNum
  );

  const confianzaChef = mejorReceta
    ? Math.max(0, Math.min(100, mejorReceta.compatibilidad))
    : 0;

  const mensajeChef = mejorReceta
    ? (personalidad ?? 'Chef Luna encontró una buena opción para hoy.')
    : ingredientes.length === 0
      ? 'Dime qué tienes en tu cocina y yo me encargo del resto.'
      : 'Estoy analizando tu despensa para encontrar la mejor salida.';


  // ====================================================
  // 🔓 RECETA OPORTUNIDAD Y COMPRA
  // ====================================================

  const recetaOportunidad = desbloqueo?.recetasNuevas?.length
    ? (resultados.find(
        receta => receta.titulo === desbloqueo.recetasNuevas[0]
      ) ?? null)
    : null;

  const compraSugerida = desbloqueo
    ? {
        ingrediente: desbloqueo.ingrediente,
        cantidad: desbloqueo.recetasDesbloqueadas,
        recetasNuevas: desbloqueo.recetasNuevas ?? [],
        costo: desbloqueo.costo,
        razon: desbloqueo.razon,
      }
    : null;


  // ====================================================
  // 💬 TEXTOS DINÁMICOS DEL BOTÓN PRINCIPAL (AQUÍ ESTÁ LA MAGIA)
  // ====================================================

  const textosBoton = {
    crisis: {
      eyebrow: 'CRISIS CULINARIA',
      title: 'Sálvame la comida',
      subtitle: 'Chef Luna decide qué cocinar por ti',
    },
    ahorro: {
      eyebrow: 'MODO AHORRO',
      title: 'Cocinar sin gastar',
      subtitle: 'Aprovecha tu despensa y presupuesto',
    },
    rapido: {
      eyebrow: 'MODO RÁPIDO',
      title: 'Comer en minutos',
      subtitle: 'Recetas veloces para hoy',
    },
    antojo: {
      eyebrow: 'MODO ANTOJO',
      title: 'Darte un gusto',
      subtitle: 'Lo que más se te antoja hoy',
    },
  };

  const botonActual = textosBoton[modo] || textosBoton.crisis;


  // ====================================================
  // 🔥 SALVAME LA COMIDA (AHORA RESPETA EL MODO ACTUAL)
  // ====================================================

  const salvarComida = () => {
    if (ingredientes.length === 0) {
      router.push('/(tabs)/despensa');
      return;
    }

    const receta = mejorReceta;

    if (!receta) {
      Alert.alert(
        'Chef Luna necesita un poco más',
        'Todavía no encuentro una receta suficientemente buena con tu despensa y presupuesto. Agrega uno o dos ingredientes más o ajusta tu presupuesto.'
      );
      return;
    }

    router.push({
      pathname: '/receta/[id]',
      params: {
        id: receta.id,
      },
    });
  };


  // ====================================================
  // 🎨 UI
  // ====================================================

  return (
    <Screen style={styles.container}>

      {/* HERO */}
      <View style={styles.hero}>
        <View style={styles.heroTop}>
          <View style={styles.chefBadge}>
            <AppText style={styles.chefBadgeIcon}>🌙</AppText>
          </View>
          <View style={styles.heroIdentity}>
            <AppText style={styles.eyebrow}>CHEF LUNA</AppText>
            <AppText style={styles.heroTitle}>¿Qué cocinamos hoy?</AppText>
          </View>
        </View>

        <AppText style={styles.heroMessage}>{mensajeChef}</AppText>

        <View style={styles.heroStats}>
          <View style={styles.heroStat}>
            <AppText style={styles.heroStatValue}>{ingredientes.length}</AppText>
            <AppText style={styles.heroStatLabel}>ingredientes</AppText>
          </View>
          <View style={styles.heroDivider} />
          <View style={styles.heroStat}>
            <AppText style={styles.heroStatValue}>{recetasListas.length}</AppText>
            <AppText style={styles.heroStatLabel}>listas</AppText>
          </View>
          <View style={styles.heroDivider} />
          <View style={styles.heroStat}>
            <AppText style={styles.heroStatValue}>${Math.round(presupuestoNum)}</AppText>
            <AppText style={styles.heroStatLabel}>presupuesto</AppText>
          </View>
        </View>
      </View>


      {/* MODOS */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View>
            <AppText style={styles.sectionEyebrow}>¿QUÉ NECESITAS HOY?</AppText>
            <AppText style={styles.sectionTitle}>Elige tu modo</AppText>
          </View>
        </View>

        <View style={styles.modeGrid}>
          {MODOS.map(opcion => {
            const activo = modo === opcion.id;
            return (
              <TouchableOpacity
                key={opcion.id}
                activeOpacity={0.85}
                style={[styles.modeCard, activo && styles.modeCardActive]}
                onPress={() => setModo(opcion.id)}
              >
                <View style={[styles.modeIconWrap, activo && styles.modeIconWrapActive]}>
                  <AppText style={styles.modeIcon}>{opcion.icon}</AppText>
                </View>
                <View style={styles.modeContent}>
                  <AppText style={[styles.modeTitle, activo && styles.modeTitleActive]}>
                    {opcion.titulo}
                  </AppText>
                  <AppText style={styles.modeDescription}>{opcion.descripcion}</AppText>
                </View>
                {activo && <View style={styles.activeDot} />}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>


      {/* CTA PRINCIPAL CON TEXTOS DINÁMICOS */}
      <TouchableOpacity
        activeOpacity={0.88}
        style={styles.crisisButton}
        onPress={salvarComida}
      >
        <View style={styles.crisisButtonIcon}>
          <AppText style={styles.crisisButtonEmoji}>
            {modo === 'crisis' ? '🔥' : modo === 'ahorro' ? '💰' : modo === 'rapido' ? '⚡' : '❤️'}
          </AppText>
        </View>

        <View style={styles.crisisButtonContent}>
          <AppText style={styles.crisisButtonEyebrow}>
            {ingredientes.length > 0 ? botonActual.eyebrow : 'PRIMER PASO'}
          </AppText>
          <AppText style={styles.crisisButtonTitle}>
            {ingredientes.length > 0 ? botonActual.title : 'Llenar mi despensa'}
          </AppText>
          <AppText style={styles.crisisButtonSubtitle}>
            {ingredientes.length > 0 ? botonActual.subtitle : 'Primero dime qué tienes en casa'}
          </AppText>
        </View>

        <View style={styles.crisisArrow}>
          <AppText style={styles.crisisArrowText}>→</AppText>
        </View>
      </TouchableOpacity>


      {/* DESPENSA */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View>
            <AppText style={styles.sectionEyebrow}>TU COCINA</AppText>
            <AppText style={styles.sectionTitle}>Despensa</AppText>
          </View>
          <View style={styles.sectionActions}>
            <TouchableOpacity activeOpacity={0.84} onPress={() => router.push('/(tabs)/scanner')}>
              <AppText style={styles.scanAction}>📷 Escanear</AppText>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.84} onPress={() => router.push('/(tabs)/despensa')}>
              <AppText style={styles.sectionAction}>Administrar →</AppText>
            </TouchableOpacity>
          </View>
        </View>

        <PantryPreview
          ingredientes={ingredientes}
          onAgregar={() => router.push('/(tabs)/despensa')}
        />

        <PantryStatusHero
          porcentaje={estadoDespensa.porcentaje}
          estado={estadoDespensa.estado}
        />
      </View>


      {/* ESTADO CHEF */}
      {ingredientes.length > 0 && (
        <View style={styles.intelligenceStrip}>
          <View style={styles.intelligenceItem}>
            <AppText style={styles.intelligenceNumber}>{estadisticas.total}</AppText>
            <AppText style={styles.intelligenceLabel}>coincidencias</AppText>
          </View>
          <View style={styles.intelligenceSeparator} />
          <View style={styles.intelligenceItem}>
            <AppText style={styles.intelligenceNumber}>{estadisticas.listas}</AppText>
            <AppText style={styles.intelligenceLabel}>para cocinar</AppText>
          </View>
          <View style={styles.intelligenceSeparator} />
          <View style={styles.intelligenceItem}>
            <AppText style={styles.intelligenceNumber}>{estadisticas.casiListas}</AppText>
            <AppText style={styles.intelligenceLabel}>a 1 ingrediente</AppText>
          </View>
        </View>
      )}


      {/* RECOMENDACIÓN PRINCIPAL */}
      {mejorReceta && (
        <View style={styles.section}>
          <View style={styles.recommendationHeader}>
            <View style={styles.recommendationBadge}>
              <AppText style={styles.recommendationBadgeText}>
                {modo === 'crisis' ? '🔥 CHEF LUNA DECIDIÓ' : '🌙 RECOMENDACIÓN CHEF'}
              </AppText>
            </View>
            <AppText style={styles.recommendationHeadline}>{recomendacionPrincipal.titulo}</AppText>
            <AppText style={styles.recommendationSubtitle}>{recomendacionPrincipal.subtitulo}</AppText>
          </View>

          <ChefRecommendationCard
            receta={mejorReceta}
            confianza={confianzaChef}
            razones={razonesChef}
            mensajeChef={mensajeChef}
            modo={modo}
            compraSugerida={compraSugerida}
            onCompraSugerida={() => {
              if (recetaOportunidad) {
                router.push({
                  pathname: '/receta/[id]',
                  params: {
                    id: recetaOportunidad.id,
                    modo: 'oportunidad',
                    ingrediente: desbloqueo?.ingrediente,
                  },
                });
              }
            }}
            onPreparar={() => {
              router.push({
                pathname: '/receta/[id]',
                params: { id: mejorReceta.id },
              });
            }}
          />
        </View>
      )}


      {/* OPORTUNIDAD */}
      {desbloqueo && recetaOportunidad && (
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View>
              <AppText style={styles.sectionEyebrow}>DESBLOQUEO INTELIGENTE</AppText>
              <AppText style={styles.sectionTitle}>Una compra, más opciones</AppText>
            </View>
          </View>
          <ChefOpportunityCard
            receta={recetaOportunidad}
            razones={[
              `🔥 Con ${desbloqueo.ingrediente} desbloqueas esta receta`,
              desbloqueo.razon,
            ]}
            onPress={() => {
              router.push({
                pathname: '/receta/[id]',
                params: {
                  id: recetaOportunidad.id,
                  modo: 'oportunidad',
                  ingrediente: desbloqueo.ingrediente,
                },
              });
            }}
          />
        </View>
      )}


      {/* EMPTY STATE */}
      {ingredientes.length === 0 && (
        <View style={styles.emptyCard}>
          <View style={styles.emptyIcon}>
            <AppText style={styles.emptyEmoji}>🧺</AppText>
          </View>
          <AppText style={styles.emptyTitle}>Tu despensa está esperando</AppText>
          <AppText style={styles.emptyText}>
            Agrega lo que tienes en casa y Chef Luna comenzará a encontrar recetas para ti.
          </AppText>
          <TouchableOpacity
            activeOpacity={0.86}
            style={styles.emptyButton}
            onPress={() => router.push('/(tabs)/despensa')}
          >
            <AppText style={styles.emptyButtonText}>Agregar ingredientes</AppText>
          </TouchableOpacity>
        </View>
      )}

    </Screen>
  );
}


// ======================================================
// 🎨 ESTILOS (Se mantienen exactamente igual)
// ======================================================

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.xl,
    paddingTop: 28,
    paddingBottom: 180,
    backgroundColor: KitchenColors.background,
  },
  hero: {
    backgroundColor: '#211510',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#66452F',
    padding: 22,
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 12 },
    elevation: 10,
  },
  heroTop: { flexDirection: 'row', alignItems: 'center' },
  chefBadge: {
    width: 54, height: 54, borderRadius: 18, backgroundColor: '#382319',
    borderWidth: 1, borderColor: '#A66A3C', alignItems: 'center', justifyContent: 'center', marginRight: 14,
  },
  chefBadgeIcon: { fontSize: 26 },
  heroIdentity: { flex: 1 },
  eyebrow: { color: '#E89A2E', fontSize: 11, fontWeight: '900', letterSpacing: 2 },
  heroTitle: { color: '#FFF3DD', fontSize: 29, fontWeight: '900', marginTop: 3, letterSpacing: -0.6 },
  heroMessage: { color: '#E7D0B6', fontSize: 16, lineHeight: 24, marginTop: 20 },
  heroStats: {
    flexDirection: 'row', alignItems: 'center', marginTop: 22, backgroundColor: '#19100C',
    borderRadius: 18, paddingVertical: 15, borderWidth: 1, borderColor: '#3D2A20',
  },
  heroStat: { flex: 1, alignItems: 'center' },
  heroStatValue: { color: '#F2B35B', fontSize: 18, fontWeight: '900' },
  heroStatLabel: { color: '#9E8068', fontSize: 10, fontWeight: '800', marginTop: 3, textTransform: 'uppercase' },
  heroDivider: { width: 1, height: 28, backgroundColor: '#493326' },
  section: { marginTop: 30 },
  sectionHeader: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 14,
  },
  sectionEyebrow: { color: '#C17D48', fontSize: 10, fontWeight: '900', letterSpacing: 1.7 },
  sectionTitle: { color: '#FFF3DD', fontSize: 23, fontWeight: '900', marginTop: 3 },
  sectionAction: { color: '#F2B35B', fontSize: 13, fontWeight: '900' },
  modeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  modeCard: {
    width: '48%', minHeight: 78, flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#211712', borderRadius: 18, borderWidth: 1, borderColor: '#473025', padding: 12, position: 'relative',
  },
  modeCardActive: {
    backgroundColor: '#362116', borderColor: '#E89A2E', shadowColor: '#E89A2E',
    shadowOpacity: 0.15, shadowRadius: 10, elevation: 4,
  },
  modeIconWrap: {
    width: 40, height: 40, borderRadius: 13, backgroundColor: '#17100C',
    alignItems: 'center', justifyContent: 'center', marginRight: 10,
  },
  modeIconWrapActive: { backgroundColor: '#51301B' },
  modeIcon: { fontSize: 20 },
  modeContent: { flex: 1 },
  modeTitle: { color: '#EAD9C6', fontSize: 14, fontWeight: '900' },
  modeTitleActive: { color: '#F2B35B' },
  modeDescription: { color: '#9D806B', fontSize: 10, marginTop: 3, fontWeight: '700' },
  activeDot: { position: 'absolute', top: 8, right: 8, width: 7, height: 7, borderRadius: 99, backgroundColor: '#F2B35B' },
  crisisButton: {
    marginTop: 22, minHeight: 98, flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#E77924', borderRadius: 24, padding: 16,
    shadowColor: '#E77924', shadowOpacity: 0.28, shadowRadius: 18, shadowOffset: { width: 0, height: 9 }, elevation: 9,
  },
  crisisButtonIcon: {
    width: 56, height: 56, borderRadius: 18, backgroundColor: 'rgba(0,0,0,0.16)',
    justifyContent: 'center', alignItems: 'center', marginRight: 14,
  },
  crisisButtonEmoji: { fontSize: 27 },
  crisisButtonContent: { flex: 1 },
  crisisButtonEyebrow: { color: '#3A1C08', fontSize: 9, fontWeight: '900', letterSpacing: 1.7 },
  crisisButtonTitle: { color: '#FFF8EE', fontSize: 21, fontWeight: '900', marginTop: 2 },
  crisisButtonSubtitle: { color: '#54270B', fontSize: 11, fontWeight: '800', marginTop: 4 },
  crisisArrow: {
    width: 38, height: 38, borderRadius: 99, backgroundColor: 'rgba(255,255,255,0.18)',
    alignItems: 'center', justifyContent: 'center', marginLeft: 8,
  },
  crisisArrowText: { color: '#FFF', fontSize: 23, fontWeight: '700' },
  intelligenceStrip: {
    marginTop: 24, flexDirection: 'row', backgroundColor: '#19110D',
    borderRadius: Radius.xl, borderWidth: 1, borderColor: '#3C2A21', paddingVertical: 15,
  },
  intelligenceItem: { flex: 1, alignItems: 'center' },
  intelligenceNumber: { color: '#F2B35B', fontWeight: '900', fontSize: 18 },
  intelligenceLabel: { marginTop: 3, color: '#9B7D68', fontSize: 9, fontWeight: '800', textTransform: 'uppercase', textAlign: 'center' },
  intelligenceSeparator: { width: 1, backgroundColor: '#3D2B22' },
  recommendationHeader: { marginBottom: 14 },
  recommendationBadge: {
    alignSelf: 'flex-start', backgroundColor: '#3A2418', borderWidth: 1,
    borderColor: '#A66A3C', borderRadius: 999, paddingHorizontal: 11, paddingVertical: 6,
  },
  recommendationBadgeText: { color: '#F2B35B', fontSize: 9, fontWeight: '900', letterSpacing: 1.4 },
  recommendationHeadline: { color: '#FFF3DD', fontSize: 24, fontWeight: '900', marginTop: 11, lineHeight: 29 },
  recommendationSubtitle: { color: '#B99D84', fontSize: 14, lineHeight: 21, marginTop: 5 },
  emptyCard: {
    marginTop: 28, backgroundColor: '#211712', borderRadius: 24, borderWidth: 1, borderColor: '#4C3428', padding: 24, alignItems: 'center',
  },
  emptyIcon: {
    width: 64, height: 64, borderRadius: 21, backgroundColor: '#352318',
    alignItems: 'center', justifyContent: 'center', marginBottom: 15,
  },
  emptyEmoji: { fontSize: 30 },
  emptyTitle: { color: '#FFF3DD', fontSize: 20, fontWeight: '900', textAlign: 'center' },
  emptyText: { marginTop: 8, color: '#B89980', lineHeight: 21, fontSize: 14, textAlign: 'center' },
  emptyButton: { marginTop: 20, paddingHorizontal: 22, paddingVertical: 13, backgroundColor: '#E89A2E', borderRadius: 999 },
  emptyButtonText: { color: '#24140A', fontSize: 13, fontWeight: '900' },
  sectionActions: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  scanAction: { color: '#D7A86E', fontSize: 13, fontWeight: '900' },
});