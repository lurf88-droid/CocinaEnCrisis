import React from 'react';
import { ScrollView, StyleSheet, Switch, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AppText } from '@/components/ui/AppText';
import { useUserPreferences } from '@/context/UserPreferencesContext';
import { KitchenColors, Spacing } from '@/constants/theme';

type PreferenceKey = 'vegetariano' | 'vegano' | 'sinGluten' | 'sinLacteos';

export default function PerfilScreen() {
  const { preferences, togglePreference } = useUserPreferences();

  const prefs: { key: PreferenceKey; title: string; desc: string; icon: any }[] = [
    { key: 'vegetariano', title: 'Vegetariano', desc: 'No carnes ni pescados', icon: 'leaf' },
    { key: 'vegano', title: 'Vegano', desc: 'Sin productos de origen animal', icon: 'sprout' },
    { key: 'sinGluten', title: 'Sin Gluten', desc: 'Sin trigo, cebada ni centeno', icon: 'barley-off' },
    { key: 'sinLacteos', title: 'Sin Lácteos', desc: 'Sin leche ni queso', icon: 'cup-off' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <MaterialCommunityIcons name="account" size={40} color="#F2B35B" />
        </View>
        <AppText style={styles.title}>Mi Perfil</AppText>
        <AppText style={styles.subtitle}>Chef Luna usará esto para personalizar tus recetas.</AppText>
      </View>

      <View style={styles.section}>
        <AppText style={styles.sectionTitle}>Preferencias Alimenticias</AppText>
        
        {prefs.map((pref) => (
          <View key={pref.key} style={styles.card}>
            <View style={styles.cardIcon}>
              <MaterialCommunityIcons name={pref.icon} size={24} color="#F2B35B" />
            </View>
            <View style={styles.cardContent}>
              <AppText style={styles.cardTitle}>{pref.title}</AppText>
              <AppText style={styles.cardDesc}>{pref.desc}</AppText>
            </View>
            <Switch
              value={preferences[pref.key]}
              onValueChange={() => togglePreference(pref.key)}
              trackColor={{ false: '#4A3226', true: '#8FB276' }}
              thumbColor={preferences[pref.key] ? '#20311F' : '#F2B35B'}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: KitchenColors.background, padding: Spacing.xl },
  header: { alignItems: 'center', marginTop: 40, marginBottom: 30 },
  avatar: {
    width: 80, height: 80, borderRadius: 40, backgroundColor: '#211510',
    alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#F2B35B', marginBottom: 15,
  },
  title: { color: '#FFF3DD', fontSize: 26, fontWeight: '900' },
  subtitle: { color: '#A98A72', fontSize: 14, textAlign: 'center', marginTop: 8 },
  section: { marginTop: 10 },
  sectionTitle: { color: '#C17D48', fontSize: 12, fontWeight: '900', letterSpacing: 1.5, marginBottom: 15, textTransform: 'uppercase' },
  card: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#211510',
    padding: 16, borderRadius: 18, marginBottom: 12, borderWidth: 1, borderColor: '#443027',
  },
  cardIcon: { width: 44, height: 44, borderRadius: 14, backgroundColor: '#382319', alignItems: 'center', justifyContent: 'center', marginRight: 14 },
  cardContent: { flex: 1 },
  cardTitle: { color: '#FFF3DD', fontSize: 16, fontWeight: '900' },
  cardDesc: { color: '#9D806B', fontSize: 12, marginTop: 2 },
});