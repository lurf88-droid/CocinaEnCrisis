import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "expo-router/react-navigation";
import { validarCatalogo } from '@/data/validadores/validarCatalogo';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { CiudadProvider } from '@/hooks/use-ciudad';
import { IngredientesProvider } from '@/context/IngredientesContext';
import { useColorScheme } from '@/hooks/use-color-scheme';


export default function RootLayout() {

const colorScheme = useColorScheme();

if (__DEV__) {
  validarCatalogo();
}

return (
    <CiudadProvider>

      <IngredientesProvider>

        <ThemeProvider
          value={
            colorScheme === 'dark'
              ? DarkTheme
              : DefaultTheme
          }
        >

          <Stack>

            <Stack.Screen
              name="intro"
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="receta/[id]"
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="cooking/[id]"
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="modal"
              options={{
                presentation: 'modal',
                title: 'Modal',
              }}
            />

          </Stack>

          <StatusBar style="auto" />

        </ThemeProvider>

      </IngredientesProvider>

    </CiudadProvider>
  );
}