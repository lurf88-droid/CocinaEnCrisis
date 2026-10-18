import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Alert,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';

import { router } from 'expo-router';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from 'react-native-reanimated';

import { LinearGradient } from 'expo-linear-gradient';

import { AppText } from '@/components/ui/AppText';
import { CabinButton } from '@/components/ui/rustic/CabinButton';

import {
  KitchenColors,
} from '@/constants/theme';


// ======================================================
// 🎬 ESCENAS
// ======================================================

const ESCENAS = [
  {
    imagen:
      require('@/assets/intro/scene1.webp'),

    texto:
      'En cada hogar hay posibilidades.',
  },

  {
    imagen:
      require('@/assets/intro/scene2.webp'),

    texto:
      'En tu cocina empiezan las mejores ideas.',
  },

  {
    imagen:
      require('@/assets/intro/scene3.webp'),

    texto:
      'Con lo que tienes, puedes crear algo increíble.',
  },

  {
    imagen:
      require('@/assets/intro/scene4.webp'),

    texto:
     'Chef Luna',
  },

  {
    imagen:
      require('@/assets/intro/scene5.webp'),

    texto:
      'Convierte lo que tienes en una gran comida.',
  },
];


// ======================================================
// 🌙 INTRO
// ======================================================

export default function IntroScreen() {
  const entrar = async () => {
    try {
      await AsyncStorage.setItem('@cocina_intro_vista', 'true');
    } catch {
      Alert.alert('No se guardó tu bienvenida', 'Puedes usar la app, pero la introducción podría aparecer de nuevo al abrirla.');
    }
    router.replace('/(tabs)');
  };

  const [
    scene,
    setScene,
  ] =
    useState(0);


  const scale =
    useSharedValue(
      1.08
    );


  const opacity =
    useSharedValue(
      0
    );


  const translateY =
    useSharedValue(
      30
    );


  const sceneOpacity =
    useSharedValue(
      1
    );


  // ====================================================
  // 🎞 ANIMACIÓN DE ENTRADA
  // ====================================================

  useEffect(() => {

    scale.value =
      1.08;


    opacity.value =
      0;


    translateY.value =
      30;


    sceneOpacity.value =
      1;


    scale.value =
      withTiming(
        1,
        {
          duration:
            4500,
        }
      );


    opacity.value =
      withDelay(
        500,
        withTiming(
          1,
          {
            duration:
              800,
          }
        )
      );


    translateY.value =
      withDelay(
        500,
        withTiming(
          0,
          {
            duration:
              800,
          }
        )
      );

  }, [
    scene,
    scale,
    opacity,
    translateY,
    sceneOpacity,
  ]);


  // ====================================================
  // ⏭ CAMBIO DE ESCENA
  // ====================================================

  useEffect(() => {

    if (
      scene >=
      ESCENAS.length - 1
    ) {
      return;
    }


    const timer =
      setTimeout(
        () => {

          sceneOpacity.value =
            withTiming(
              0,
              {
                duration:
                  500,
              }
            );


          opacity.value =
            withTiming(
              0,
              {
                duration:
                  300,
              }
            );


          translateY.value =
            withTiming(
              20,
              {
                duration:
                  300,
              }
            );


          setTimeout(
            () => {

              setScene(
                actual =>
                  actual + 1
              );

            },
            500
          );

        },
        4000
      );


    return () =>
      clearTimeout(
        timer
      );

  }, [
    scene,
    sceneOpacity,
    opacity,
    translateY,
  ]);


  // ====================================================
  // 🎨 ESTILOS ANIMADOS
  // ====================================================

  const imageStyle =
    useAnimatedStyle(
      () => ({
        transform: [
          {
            scale:
              scale.value,
          },
        ],
      })
    );


  const textStyle =
    useAnimatedStyle(
      () => ({
        opacity:
          opacity.value,

        transform: [
          {
            translateY:
              translateY.value,
          },
        ],
      })
    );


  const sceneStyle =
    useAnimatedStyle(
      () => ({
        opacity:
          sceneOpacity.value,
      })
    );


  // ====================================================
  // 🎨 UI
  // ====================================================

  return (

    <View
      style={
        styles.container
      }
    >

      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          imageStyle,
          sceneStyle,
        ]}
      >

        <ImageBackground
          source={
            ESCENAS[scene]
              .imagen
          }
          style={
            styles.image
          }
          resizeMode="cover"
        />

      </Animated.View>


      <View
        style={
          styles.overlay
        }
      >

        <LinearGradient
          colors={[
            'transparent',
            'rgba(27, 19, 15, 0.55)',
            'rgba(27, 19, 15, 0.92)',
          ]}
          locations={[
            0,
            0.45,
            1,
          ]}
          style={
            styles.bottomGradient
          }
        />


        <Animated.View
          style={[
            styles.content,
            textStyle,

            scene ===
              ESCENAS.length -
                1 &&
              styles.finalContent,
          ]}
        >

          <AppText
            style={[
              styles.title,

              scene ===
                ESCENAS.length -
                  1 &&
                styles.finalTitle,
            ]}
          >
            {
              ESCENAS[scene]
                .texto
            }
          </AppText>


          {scene ===
            ESCENAS.length -
              1 && (

            <CabinButton
              title="Entrar a mi cocina"
              onPress={entrar}
            />

          )}

        </Animated.View>

      </View>

    </View>

  );

}


// ======================================================
// 🎨 ESTILOS
// ======================================================

const styles =
  StyleSheet.create({

    container: {
      flex: 1,

      overflow:
        'hidden',

      backgroundColor:
        KitchenColors
          .background,
    },


    image: {
      flex: 1,
    },


    overlay: {
      flex: 1,

      justifyContent:
        'flex-end',

      paddingHorizontal:
        26,

      paddingBottom:
        42,
    },


    bottomGradient: {
      ...StyleSheet.absoluteFill,
    },


    content: {
      marginBottom:
        36,

      paddingHorizontal:
        6,
    },


    finalContent: {
      marginBottom:
        20,
    },


    title: {
      color:
        KitchenColors
          .primarySoft,

      fontSize:
        34,

      fontWeight:
        '900',

      lineHeight:
        42,

      textAlign:
        'center',

      marginBottom:
        24,

      textShadowColor:
        KitchenColors
          .shadow,

      textShadowOffset: {
        width: 0,
        height: 2,
      },

      textShadowRadius:
        10,
    },


    finalTitle: {
      color:
        KitchenColors
          .highlight,

      fontSize:
        28,

      lineHeight:
        36,
    },

  });
