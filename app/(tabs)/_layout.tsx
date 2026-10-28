import React from 'react';

import {
  Tabs,
  router,
} from 'expo-router';

import {
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import {
  HapticTab,
} from '@/components/haptic-tab';

import {
  ChefButton,
} from '@/components/navigation/ChefButton';


export default function TabLayout() {

  return (

    <Tabs
      screenOptions={{

        headerShown: false,

        tabBarButton:
          HapticTab,

        tabBarHideOnKeyboard:
          true,


        // =================================================
        // COLORS
        // =================================================

        tabBarActiveTintColor:
          '#F2B35B',

        tabBarInactiveTintColor:
          '#8E7866',


        // =================================================
        // BAR
        // =================================================

        tabBarStyle: {

          position:
            'absolute',

          left:
            12,

          right:
            12,

          bottom:
            10,

          height:
            76,

          paddingTop:
            8,

          paddingBottom:
            10,

          paddingHorizontal:
            6,

          backgroundColor:
            '#1B120E',

          borderTopWidth:
            0,

          borderWidth:
            1,

          borderColor:
            '#4C3428',

          borderRadius:
            24,

          shadowColor:
            '#000',

          shadowOpacity:
            0.4,

          shadowRadius:
            18,

          shadowOffset: {
            width: 0,
            height: -6,
          },

          elevation:
            22,

        },


        // =================================================
        // LABEL
        // =================================================

        tabBarLabelStyle: {

          fontSize:
            9,

          fontWeight:
            '900',

          letterSpacing:
            0.3,

          marginTop:
            2,

        },


        // =================================================
        // ITEM
        // =================================================

        tabBarItemStyle: {

          borderRadius:
            18,

          marginHorizontal:
            2,

        },


        tabBarIconStyle: {

          marginBottom:
            1,

        },

      }}
    >


      {/* =================================================
          INICIO
      ================================================= */}


      <Tabs.Screen
        name="index"
        options={{

          title:
            'Inicio',

          tabBarLabel:
            'Inicio',

          tabBarIcon:
            ({
              color,
              focused,
            }) => (

              <MaterialCommunityIcons
                name={
                  focused
                    ? 'home-variant'
                    : 'home-variant-outline'
                }
                size={26}
                color={color as string}
              />

            ),

        }}
      />


      {/* =================================================
          DESPENSA
      ================================================= */}


      <Tabs.Screen
        name="despensa"
        options={{

          title:
            'Despensa',

          tabBarLabel:
            'Despensa',

          tabBarIcon:
            ({
              color,
              focused,
            }) => (

              <MaterialCommunityIcons
                name={
                  focused
                    ? 'basket'
                    : 'basket-outline'
                }
                size={26}
                color={color as string}
              />

            ),

        }}
      />


      {/* =================================================
          CHEF LUNA
      ================================================= */}


      <Tabs.Screen
        name="chef"
        options={{

          title:
            'Chef Luna',

          tabBarLabel:
            '',

          tabBarButton:
            () => (

              <ChefButton
                onPress={() => {

                  router.push(
                    '/chef'
                  );

                }}
              />

            ),

        }}
      />


      {/* =================================================
          RECETAS
      ================================================= */}


      <Tabs.Screen
        name="explore"
        options={{

          title:
            'Recetas',

          tabBarLabel:
            'Recetas',

          tabBarIcon:
            ({
              color,
              focused,
            }) => (

              <MaterialCommunityIcons
                name={
                  focused
                    ? 'book-open-variant'
                    : 'book-open-outline'
                }
                size={26}
                color={color as string}
              />

            ),

        }}
      />


      {/* =================================================
          FAVORITOS
      ================================================= */}


      <Tabs.Screen
        name="favoritos"
        options={{

          title:
            'Favoritos',

          tabBarLabel:
            'Favoritos',

          tabBarIcon:
            ({
              color,
              focused,
            }) => (

              <MaterialCommunityIcons
                name={
                  focused
                    ? 'heart'
                    : 'heart-outline'
                }
                size={26}
                color={color as string}
              />

            ),

        }}
      />


      {/* =================================================
          PERFIL
      ================================================= */}


      <Tabs.Screen
        name="perfil"
        options={{

          title:
            'Perfil',

          tabBarLabel:
            'Perfil',

          tabBarIcon:
            ({
              color,
              focused,
            }) => (

              <MaterialCommunityIcons
                name={
                  focused
                    ? 'account'
                    : 'account-outline'
                }
                size={26}
                color={color as string}
              />

            ),

        }}
      />


      {/* =================================================
          RUTAS OCULTAS
      ================================================= */}


      <Tabs.Screen
        name="carrito"
        options={{
          href:
            null,
        }}
      />


      <Tabs.Screen
        name="scanner"
        options={{
          href:
            null,
        }}
      />


    </Tabs>

  );

}