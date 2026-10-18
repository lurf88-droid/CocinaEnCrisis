import { useEffect, useState } from 'react';
import { Redirect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';

export default function Index() {

  const [destino, setDestino] =
    useState<'/intro' | '/(tabs)' | null>(null);

  useEffect(() => {
    let activo = true;

    const revisarIntro = async () => {

      try {
        const introVista = await AsyncStorage.getItem('@cocina_intro_vista');
        if (activo) setDestino(introVista === 'true' ? '/(tabs)' : '/intro');
      } catch {
        if (activo) setDestino('/intro');
      }

    };

    revisarIntro();
    return () => { activo = false; };

  }, []);

  if (!destino) {
    return (
      <View style={{ flex: 1, backgroundColor: '#1D1410', alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color="#F2B35B" accessibilityLabel="Abriendo tu cocina" />
      </View>
    );
  }

  return <Redirect href={destino} />;
}
