import React, { useEffect, useRef, useState } from 'react';

import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { router } from 'expo-router';

import {
  CameraType,
  CameraView,
  useCameraPermissions,
} from 'expo-camera';

import * as Haptics from 'expo-haptics';

import { useIngredientes } from '@/context/IngredientesContext';
import { useCiudad } from '@/hooks/use-ciudad';

import { ChefEngine } from '@/services/chef-engine';

import {
  CATALOGO_INGREDIENTES,
} from '@/data/catalogo-ingredientes';

import {
  analyzeFoodImage,
} from '../../services/visionservice';


// ======================================================
// 🧩 TIPOS
// ======================================================

type ScannerStep =
  | 'camera'
  | 'preview'
  | 'ingredients';


// ======================================================
// 🧠 TEXTOS CHEF LUNA
// ======================================================

const LOADING_TEXTS = [
  '🔍 Detectando ingredientes...',
  '🥗 Identificando alimentos...',
  '🧠 Chef Luna está analizando...',
  '🍳 Revisando qué podemos cocinar...',
];


// ======================================================
// 🔤 NORMALIZACIÓN BÁSICA
// ======================================================

function normalizeIngredient(
  value: string
) {

  return value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(
      /[\u0300-\u036f]/g,
      ''
    )
    .replace(
      /\s+/g,
      ' '
    );

}


// ======================================================
// 🔎 NORMALIZACIÓN PARA CATÁLOGO
// ======================================================

function normalizarBusqueda(
  valor: string
) {

  return valor
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(
      /[\u0300-\u036f]/g,
      ''
    )
    .replace(
      /[_-]+/g,
      ' '
    )
    .replace(
      /[^a-z0-9ñ\s]/g,
      ''
    )
    .replace(
      /\s+/g,
      ' '
    )
    .trim();

}


// ======================================================
// 🔎 RESOLVER INGREDIENTE CONTRA CATÁLOGO
// ======================================================

function resolverIngredienteCatalogo(
  valor: string
): string | null {

  const consulta =
    normalizarBusqueda(
      valor
    );


  if (!consulta) {
    return null;
  }


  // ====================================================
  // 1. ID EXACTO
  // ====================================================

  const porId =
    CATALOGO_INGREDIENTES.find(
      item =>
        normalizarBusqueda(
          item.id
        ) === consulta
    );


  if (porId) {
    return porId.id;
  }


  // ====================================================
  // 2. NOMBRE EXACTO
  // ====================================================

  const porNombre =
    CATALOGO_INGREDIENTES.find(
      item =>
        normalizarBusqueda(
          item.nombre
        ) === consulta
    );


  if (porNombre) {
    return porNombre.id;
  }


  // ====================================================
  // 3. ALIAS EXACTO
  // ====================================================

  const porAlias =
    CATALOGO_INGREDIENTES.find(
      item =>
        item.aliases?.some(
          alias =>
            normalizarBusqueda(
              alias
            ) === consulta
        )
    );


  if (porAlias) {
    return porAlias.id;
  }


  return null;

}


// ======================================================
// 🧹 LIMPIAR DUPLICADOS
// ======================================================

function cleanIngredients(
  values: string[]
) {

  const map =
    new Map<
      string,
      string
    >();


  values.forEach(
    value => {

      if (
        typeof value !==
        'string'
      ) {
        return;
      }


      const clean =
        value.trim();


      if (!clean) {
        return;
      }


      const normalized =
        normalizeIngredient(
          clean
        );


      if (
        !map.has(
          normalized
        )
      ) {

        map.set(
          normalized,
          clean
        );

      }

    }
  );


  return Array.from(
    map.values()
  );

}


// ======================================================
// 🌙 SCANNER SCREEN
// ======================================================

export default function ScannerScreen() {

  // ====================================================
  // // 🧺 CONTEXTO REAL DE CHEF LUNA
  // ====================================================

  const {
    ingredientes:
      ingredientesDespensa,

    agregarIngrediente,

    presupuesto,
  } =
    useIngredientes();


  const {
    buscarRecetas,
  } =
    useCiudad();


  // ====================================================
  // 📷 CÁMARA
  // ====================================================

  const cameraRef =
    useRef<any>(
      null
    );


  const [
    permission,
    requestPermission,
  ] =
    useCameraPermissions();


  const [
    facing,
  ] =
    useState<CameraType>(
      'back'
    );


  // ====================================================
  // 📌 FLUJO
  // ====================================================

  const [
    step,
    setStep,
  ] =
    useState<ScannerStep>(
      'camera'
    );


  // ====================================================
  // 🖼 FOTO
  // ====================================================

  const [
    photoUri,
    setPhotoUri,
  ] =
    useState<
      string | null
    >(
      null
    );


  // ====================================================
  // 🧠 INGREDIENTES DETECTADOS
  // ====================================================

  const [
    ingredients,
    setIngredients,
  ] =
    useState<string[]>(
      []
    );


  // ====================================================
  // ➕ INGREDIENTE MANUAL
  // ====================================================

  const [
    newIngredient,
    setNewIngredient,
  ] =
    useState(
      ''
    );


  // ====================================================
  // ⏳ LOADERS
  // ====================================================

  const [
    loadingPhoto,
    setLoadingPhoto,
  ] =
    useState(
      false
    );


  const [
    loadingAI,
    setLoadingAI,
  ] =
    useState(
      false
    );


  const [
    scanning,
    setScanning,
  ] =
    useState(
      false
    );


  const [
    loadingText,
    setLoadingText,
  ] =
    useState(
      LOADING_TEXTS[0]
    );


  // ====================================================
  // ⚠️ ERROR
  // ====================================================

  const [
    errorMessage,
    setErrorMessage,
  ] =
    useState<
      string | null
    >(
      null
    );


  // ====================================================
  // 🔄 TEXTO DINÁMICO
  // ====================================================

  useEffect(() => {
  if (!loadingAI) {
    return;
  }

  let index = 0;

  const interval = setInterval(() => {
    index =
      (index + 1) %
      LOADING_TEXTS.length;

    setLoadingText(
      LOADING_TEXTS[index]
    );
  }, 1300);

  return () => {
    clearInterval(interval);
  };
}, [loadingAI]);

  // ====================================================
  // 📸 TOMAR FOTO
  // ====================================================

  const takePhoto =
    async () => {

      if (
        !cameraRef.current ||
        loadingPhoto
      ) {
        return;
      }


      try {

        setErrorMessage(
          null
        );

        setLoadingPhoto(
          true
        );

        setScanning(
          true
        );


        await Haptics
          .impactAsync(
            Haptics
              .ImpactFeedbackStyle
              .Medium
          );


        const photo =
          await cameraRef
            .current
            .takePictureAsync({
              quality: 0.8,
              skipProcessing:
                false,
            });


        if (
          !photo?.uri
        ) {

          throw new Error(
            'La cámara no devolvió una fotografía.'
          );

        }


        setPhotoUri(
          photo.uri
        );


        setIngredients(
          []
        );


        setNewIngredient(
          ''
        );


        setStep(
          'preview'
        );

      } catch (
        error
      ) {

        console.log(
          'Error tomando foto:',
          error
        );


        setErrorMessage(
          'No pude tomar la fotografía. Inténtalo otra vez.'
        );


        await Haptics
          .notificationAsync(
            Haptics
              .NotificationFeedbackType
              .Error
          );

      } finally {

        setLoadingPhoto(
          false
        );

        setScanning(
          false
        );

      }

    };


  // ====================================================
  // 🔄 REINICIAR ESCÁNER
  // ====================================================

  const reset =
    () => {

      setPhotoUri(
        null
      );


      setIngredients(
        []
      );


      setNewIngredient(
        ''
      );


      setErrorMessage(
        null
      );


      setLoadingAI(
        false
      );


      setLoadingPhoto(
        false
      );


      setScanning(
        false
      );


      setStep(
        'camera'
      );

    };


  // ====================================================
  // 🧠 ANALIZAR FOTO
  // ====================================================

  const analyzeImage =
    async () => {

      if (
        !photoUri ||
        loadingAI
      ) {
        return;
      }


      try {

        setErrorMessage(
          null
        );

setLoadingText(LOADING_TEXTS[0]);
        setLoadingAI(
          true
        );


        const result =
          await analyzeFoodImage(
            photoUri
          );


        const detected =
          cleanIngredients(
            Array.isArray(
              result?.ingredients
            )
              ? result.ingredients
              : []
          );


        setIngredients(
          detected
        );


        setStep(
          'ingredients'
        );


        if (
          detected.length === 0
        ) {

          setErrorMessage(
            'Chef Luna no pudo identificar ingredientes con claridad. Puedes agregarlos manualmente o tomar otra foto.'
          );


          await Haptics
            .notificationAsync(
              Haptics
                .NotificationFeedbackType
                .Warning
            );


          return;

        }


        await Haptics
          .notificationAsync(
            Haptics
              .NotificationFeedbackType
              .Success
          );

      } catch (
        error
      ) {

        console.log(
          'Error analizando imagen:',
          error
        );


        setStep(
          'preview'
        );


        setErrorMessage(
          'No pude analizar esta fotografía. Inténtalo nuevamente.'
        );


        await Haptics
          .notificationAsync(
            Haptics
              .NotificationFeedbackType
              .Error
          );

      } finally {

        setLoadingAI(
          false
        );

      }

    };


  // ====================================================
  // ➕ AGREGAR INGREDIENTE MANUAL
  // ====================================================

  const addIngredient =
    () => {

      const clean =
        newIngredient
          .trim();


      if (!clean) {
        return;
      }


      // ==================================================
      // 🔎 INTENTAR CONVERTIR A ID REAL
      // ==================================================

      const idCatalogo =
        resolverIngredienteCatalogo(
          clean
        );


      if (!idCatalogo) {

        setErrorMessage(
          `"${clean}" no coincide con un ingrediente del catálogo. Prueba otro nombre.`
        );

        return;

      }


      const alreadyExists =
        ingredients.some(
          item =>
            resolverIngredienteCatalogo(
              item
            ) ===
            idCatalogo
        );


      if (
        alreadyExists
      ) {

        setErrorMessage(
          'Ese ingrediente ya está en la lista.'
        );

        return;

      }


      setIngredients(
        current => [
          ...current,
          idCatalogo,
        ]
      );


      setNewIngredient(
        ''
      );


      setErrorMessage(
        null
      );


      void Haptics
        .impactAsync(
          Haptics
            .ImpactFeedbackStyle
            .Light
        );

    };


  // ====================================================
  // ❌ ELIMINAR INGREDIENTE
  // ====================================================

  const removeIngredient =
    (
      indexToRemove:
        number
    ) => {

      setIngredients(
        current =>
          current.filter(
            (
              _,
              index
            ) =>
              index !==
              indexToRemove
          )
      );


      void Haptics
        .impactAsync(
          Haptics
            .ImpactFeedbackStyle
            .Light
        );

    };


  // ====================================================
  // 🍳 CHEF LUNA DECIDE POR MÍ
  // ====================================================

  const cookWithIngredients =
    async () => {

      if (
        ingredients.length ===
          0 ||
        loadingAI
      ) {
        return;
      }


      try {

        setErrorMessage(
          null
        );


        setLoadingAI(
          true
        );


        // ==================================================
        // 🔎 CONVERTIR TODO A IDS REALES
        // ==================================================

        const idsDetectados =
          ingredients
            .map(
              item =>
                resolverIngredienteCatalogo(
                  item
                )
            )
            .filter(
              (
                id
              ): id is string =>
                Boolean(
                  id
                )
            );


        const idsUnicos =
          Array.from(
            new Set(
              idsDetectados
            )
          );


        if (
          idsUnicos.length ===
          0
        ) {

          setErrorMessage(
            'No encontré ingredientes válidos del catálogo para cocinar.'
          );


          await Haptics
            .notificationAsync(
              Haptics
                .NotificationFeedbackType
                .Warning
            );


          return;

        }


        // ==================================================
        // 🧺 DESPENSA FINAL
        // ==================================================

        const despensaFinal =
          Array.from(
            new Set([
              ...ingredientesDespensa,
              ...idsUnicos,
            ])
          );


        // ==================================================
        // 💾 GUARDAR EN LA DESPENSA REAL
        // ==================================================

        idsUnicos.forEach(
          id => {

            agregarIngrediente(
              id
            );

          }
        );


        // ==================================================
        // 🔎 BUSCAR RECETAS REALES
        // ==================================================

        const resultados =
          buscarRecetas(
            despensaFinal,
            presupuesto
          );


        // ==================================================
        // 🌙 CHEF ENGINE
        // ==================================================

        const receta =
          ChefEngine
            .salvameLaComida(
              resultados
            );


        if (!receta) {

          setErrorMessage(
            'Guardé los ingredientes en tu despensa, pero Chef Luna todavía no encontró una receta suficientemente compatible.'
          );


          await Haptics
            .notificationAsync(
              Haptics
                .NotificationFeedbackType
                .Warning
            );


          return;

        }


        // ==================================================
        // ✅ ÉXITO
        // ==================================================

        await Haptics
          .notificationAsync(
            Haptics
              .NotificationFeedbackType
              .Success
          );


        // ==================================================
        // 🍳 ABRIR RECETA REAL
        // ==================================================

        router.push({
          pathname:
            '/receta/[id]',

          params: {
            id:
              receta.id,
          },
        });

      } catch (
        error
      ) {

        console.log(
          'Error usando Chef Luna:',
          error
        );


        setErrorMessage(
          'Chef Luna tuvo un problema buscando una receta. Inténtalo otra vez.'
        );


        await Haptics
          .notificationAsync(
            Haptics
              .NotificationFeedbackType
              .Error
          );

      } finally {

        setLoadingAI(
          false
        );

      }

    };


  // ====================================================
  // ⏳ CARGANDO PERMISOS
  // ====================================================

  if (!permission) {

    return (

      <View
        style={
          styles.center
        }
      >

        <ActivityIndicator
          size="large"
          color="#E77924"
        />


        <Text
          style={
            styles.permissionTitle
          }
        >
          Chef Luna
        </Text>


        <Text
          style={
            styles.permissionText
          }
        >
          Comprobando acceso a la cámara...
        </Text>

      </View>

    );

  }


  // ====================================================
  // 🚫 SIN PERMISO
  // ====================================================

  if (
    !permission.granted
  ) {

    return (

      <View
        style={
          styles.center
        }
      >

        <Text
          style={
            styles.permissionIcon
          }
        >
          📷
        </Text>


        <Text
          style={
            styles.title
          }
        >
          Escáner Chef Luna
        </Text>


        <Text
          style={
            styles.permissionText
          }
        >
          Necesito acceso a tu cámara para descubrir qué ingredientes tienes.
        </Text>


        <TouchableOpacity
          style={
            styles.primaryButton
          }
          onPress={
            requestPermission
          }
        >

          <Text
            style={
              styles.primaryButtonText
            }
          >
            Permitir cámara
          </Text>

        </TouchableOpacity>

      </View>

    );

  }


  // ====================================================
  // 🎨 UI
  // ====================================================

  return (

    <View
      style={
        styles.root
      }
    >

      {scanning && (

        <View
          style={
            styles.scanOverlay
          }
        >

          <ActivityIndicator
            size="large"
            color="#F2B35B"
          />


          <Text
            style={
              styles.scanText
            }
          >
            Capturando...
          </Text>

        </View>

      )}


      <ScrollView
        style={
          styles.container
        }
        contentContainerStyle={
          styles.contentContainer
        }
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={
          false
        }
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <View
          style={
            styles.header
          }
        >

          <View>

            <Text
              style={
                styles.eyebrow
              }
            >
              CHEF LUNA
            </Text>


            <Text
              style={
                styles.headerTitle
              }
            >
              Escáner de ingredientes
            </Text>

          </View>


          <View
            style={
              styles.aiBadge
            }
          >

            <Text
              style={
                styles.aiBadgeText
              }
            >
              IA
            </Text>

          </View>

        </View>


        {/* =================================================
            CÁMARA
        ================================================= */}

        {step ===
          'camera' && (

          <View
            style={
              styles.cameraCard
            }
          >

            <CameraView
              ref={
                cameraRef
              }
              style={
                styles.camera
              }
              facing={
                facing
              }
            />


            <View
              style={
                styles.cameraGuide
              }
            >

              <View
                style={[
                  styles.corner,
                  styles.cornerTopLeft,
                ]}
              />


              <View
                style={[
                  styles.corner,
                  styles.cornerTopRight,
                ]}
              />


              <View
                style={[
                  styles.corner,
                  styles.cornerBottomLeft,
                ]}
              />


              <View
                style={[
                  styles.corner,
                  styles.cornerBottomRight,
                ]}
              />


              <View
                style={
                  styles.guideTextBox
                }
              >

                <Text
                  style={
                    styles.guideText
                  }
                >
                  Enfoca tus ingredientes
                </Text>


                <Text
                  style={
                    styles.guideSubtext
                  }
                >
                  Mejor luz = mejor detección
                </Text>

              </View>

            </View>

          </View>

        )}


        {/* =================================================
            FOTO
        ================================================= */}

        {step !==
          'camera' &&
          photoUri && (

          <View
            style={
              styles.cameraCard
            }
          >

            <Image
              source={{
                uri:
                  photoUri,
              }}
              style={
                styles.camera
              }
              resizeMode="cover"
            />


            {loadingAI && (

              <View
                style={
                  styles.analysisOverlay
                }
              >

                <ActivityIndicator
                  size="large"
                  color="#F2B35B"
                />


                <Text
                  style={
                    styles.analysisText
                  }
                >
                  {loadingText}
                </Text>

              </View>

            )}

          </View>

        )}


        {/* =================================================
            ERROR
        ================================================= */}

        {errorMessage && (

          <View
            style={
              styles.errorBox
            }
          >

            <Text
              style={
                styles.errorIcon
              }
            >
              ⚠️
            </Text>


            <Text
              style={
                styles.errorText
              }
            >
              {errorMessage}
            </Text>

          </View>

        )}


        {/* =================================================
            INGREDIENTES
        ================================================= */}

        {step ===
          'ingredients' && (

          <View
            style={
              styles.resultBox
            }
          >

            <View
              style={
                styles.resultHeaderRow
              }
            >

              <View>

                <Text
                  style={
                    styles.resultEyebrow
                  }
                >
                  RESULTADO
                </Text>


                <Text
                  style={
                    styles.resultTitle
                  }
                >
                  Ingredientes detectados
                </Text>

              </View>


              <View
                style={
                  styles.countBadge
                }
              >

                <Text
                  style={
                    styles.countText
                  }
                >
                  {ingredients.length}
                </Text>

              </View>

            </View>


            <Text
              style={
                styles.helperText
              }
            >
              Revisa la lista. Puedes eliminar errores o agregar algo que Chef Luna no haya visto.
            </Text>


            {ingredients.length >
            0 ? (

              <View
                style={
                  styles.ingredientsList
                }
              >

                {ingredients.map(
                  (
                    item,
                    index
                  ) => {

                    const ingrediente =
                      CATALOGO_INGREDIENTES.find(
                        catalogo =>
                          catalogo.id ===
                          item
                      );


                    return (

                      <View
                        key={`${item}-${index}`}
                        style={
                          styles.ingredientCard
                        }
                      >

                        <View
                          style={
                            styles.ingredientLeft
                          }
                        >

                          <View
                            style={
                              styles.ingredientDot
                            }
                          />


                          <View
                            style={
                              styles.ingredientTextWrap
                            }
                          >

                            <Text
                              style={
                                styles.ingredientText
                              }
                            >
                              {ingrediente?.nombre ??
                                item}
                            </Text>


                            <Text
                              style={
                                styles.ingredientId
                              }
                            >
                              {item}
                            </Text>

                          </View>

                        </View>


                        <TouchableOpacity
                          style={
                            styles.removeButton
                          }
                          onPress={() =>
                            removeIngredient(
                              index
                            )
                          }
                        >

                          <Text
                            style={
                              styles.removeText
                            }
                          >
                            ×
                          </Text>

                        </TouchableOpacity>

                      </View>

                    );

                  }
                )}

              </View>

            ) : (

              <View
                style={
                  styles.emptyBox
                }
              >

                <Text
                  style={
                    styles.emptyIcon
                  }
                >
                  🔎
                </Text>


                <Text
                  style={
                    styles.emptyTitle
                  }
                >
                  No encontré ingredientes
                </Text>


                <Text
                  style={
                    styles.emptyText
                  }
                >
                  Puedes agregarlos manualmente o intentar con otra fotografía.
                </Text>

              </View>

            )}


            {/* =================================================
                AGREGAR MANUAL
            ================================================= */}

            <View
              style={
                styles.addIngredientBox
              }
            >

              <TextInput
                value={
                  newIngredient
                }
                onChangeText={
                  setNewIngredient
                }
                placeholder="Agregar ingrediente..."
                placeholderTextColor="#806F64"
                style={
                  styles.input
                }
                returnKeyType="done"
                onSubmitEditing={
                  addIngredient
                }
              />


              <TouchableOpacity
                style={
                  styles.addButton
                }
                onPress={
                  addIngredient
                }
              >

                <Text
                  style={
                    styles.addButtonText
                  }
                >
                  +
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        )}


        {/* =================================================
            CONTROLES
        ================================================= */}

        <View
          style={
            styles.footer
          }
        >

          {/* ================= CAMERA ================= */}

          {step ===
            'camera' && (

            <TouchableOpacity
              style={[
                styles.primaryButton,

                loadingPhoto &&
                  styles.buttonDisabled,
              ]}
              onPress={
                takePhoto
              }
              disabled={
                loadingPhoto
              }
            >

              {loadingPhoto ? (

                <ActivityIndicator
                  color="#FFFFFF"
                />

              ) : (

                <Text
                  style={
                    styles.primaryButtonText
                  }
                >
                  📸 Escanear ingredientes
                </Text>

              )}

            </TouchableOpacity>

          )}


          {/* ================= PREVIEW ================= */}

          {step ===
            'preview' && (

            <>

              <TouchableOpacity
                style={[
                  styles.primaryButton,

                  loadingAI &&
                    styles.buttonDisabled,
                ]}
                onPress={
                  analyzeImage
                }
                disabled={
                  loadingAI
                }
              >

                {loadingAI ? (

                  <ActivityIndicator
                    color="#FFFFFF"
                  />

                ) : (

                  <Text
                    style={
                      styles.primaryButtonText
                    }
                  >
                    ✨ Analizar con Chef Luna
                  </Text>

                )}

              </TouchableOpacity>


              <TouchableOpacity
                style={
                  styles.secondaryButton
                }
                onPress={
                  reset
                }
                disabled={
                  loadingAI
                }
              >

                <Text
                  style={
                    styles.secondaryButtonText
                  }
                >
                  Tomar otra foto
                </Text>

              </TouchableOpacity>

            </>

          )}


          {/* ================= INGREDIENTES ================= */}

          {step ===
            'ingredients' && (

            <>

              <TouchableOpacity
                style={[
                  styles.primaryButton,

                  (
                    ingredients.length ===
                      0 ||
                    loadingAI
                  ) &&
                    styles.buttonDisabled,
                ]}
                onPress={
                  cookWithIngredients
                }
                disabled={
                  ingredients.length ===
                    0 ||
                  loadingAI
                }
              >

                {loadingAI ? (

                  <ActivityIndicator
                    color="#FFFFFF"
                  />

                ) : (

                  <Text
                    style={
                      styles.primaryButtonText
                    }
                  >
                    🍳 Chef Luna, decide por mí
                  </Text>

                )}

              </TouchableOpacity>


              <TouchableOpacity
                style={
                  styles.secondaryButton
                }
                onPress={
                  reset
                }
                disabled={
                  loadingAI
                }
              >

                <Text
                  style={
                    styles.secondaryButtonText
                  }
                >
                  Escanear otra foto
                </Text>

              </TouchableOpacity>

            </>

          )}

        </View>

      </ScrollView>

    </View>

  );

}


// ======================================================
// 🎨 ESTILOS
// ======================================================

const styles =
  StyleSheet.create({

    root: {
      flex: 1,
      backgroundColor:
        '#1D1410',
    },


    container: {
      flex: 1,
      backgroundColor:
        '#1D1410',
    },


    contentContainer: {
      paddingBottom:
        34,
    },


    // ==================================================
    // HEADER
    // ==================================================

    header: {

      paddingHorizontal:
        20,

      paddingTop:
        20,

      paddingBottom:
        14,

      flexDirection:
        'row',

      alignItems:
        'center',

      justifyContent:
        'space-between',

    },


    eyebrow: {

      color:
        '#E77924',

      fontSize:
        11,

      fontWeight:
        '800',

      letterSpacing:
        2,

      marginBottom:
        4,

    },


    headerTitle: {

      color:
        '#FFF3DD',

      fontSize:
        24,

      fontWeight:
        '800',

    },


    aiBadge: {

      width:
        42,

      height:
        42,

      borderRadius:
        14,

      backgroundColor:
        '#2B1E18',

      alignItems:
        'center',

      justifyContent:
        'center',

      borderWidth:
        1,

      borderColor:
        '#503528',

    },


    aiBadgeText: {

      color:
        '#F2B35B',

      fontWeight:
        '900',

      fontSize:
        13,

    },


    // ==================================================
    // CÁMARA
    // ==================================================

    cameraCard: {

      marginHorizontal:
        16,

      borderRadius:
        24,

      overflow:
        'hidden',

      backgroundColor:
        '#0A0908',

      position:
        'relative',

      borderWidth:
        1,

      borderColor:
        '#3A281F',

    },


    camera: {

      width:
        '100%',

      height:
        430,

    },


    cameraGuide: {

      ...StyleSheet.absoluteFill,

      alignItems:
        'center',

      justifyContent:
        'center',

    },


    corner: {

      position:
        'absolute',

      width:
        42,

      height:
        42,

      borderColor:
        '#F2B35B',

    },


    cornerTopLeft: {

      top:
        34,

      left:
        30,

      borderTopWidth:
        3,

      borderLeftWidth:
        3,

      borderTopLeftRadius:
        12,

    },


    cornerTopRight: {

      top:
        34,

      right:
        30,

      borderTopWidth:
        3,

      borderRightWidth:
        3,

      borderTopRightRadius:
        12,

    },


    cornerBottomLeft: {

      bottom:
        34,

      left:
        30,

      borderBottomWidth:
        3,

      borderLeftWidth:
        3,

      borderBottomLeftRadius:
        12,

    },


    cornerBottomRight: {

      bottom:
        34,

      right:
        30,

      borderBottomWidth:
        3,

      borderRightWidth:
        3,

      borderBottomRightRadius:
        12,

    },


    guideTextBox: {

      position:
        'absolute',

      bottom:
        28,

      backgroundColor:
        'rgba(29,20,16,0.84)',

      paddingHorizontal:
        18,

      paddingVertical:
        10,

      borderRadius:
        14,

      alignItems:
        'center',

    },


    guideText: {

      color:
        '#FFF3DD',

      fontWeight:
        '700',

      fontSize:
        14,

    },


    guideSubtext: {

      color:
        '#CBB7A8',

      fontSize:
        11,

      marginTop:
        2,

    },


    // ==================================================
    // ANÁLISIS
    // ==================================================

    analysisOverlay: {

      ...StyleSheet.absoluteFill,

      backgroundColor:
        'rgba(15,10,8,0.78)',

      alignItems:
        'center',

      justifyContent:
        'center',

      padding:
        30,

    },


    analysisText: {

      color:
        '#FFF3DD',

      marginTop:
        18,

      fontWeight:
        '700',

      fontSize:
        16,

      textAlign:
        'center',

    },


    // ==================================================
    // RESULTADOS
    // ==================================================

    resultBox: {

      backgroundColor:
        '#271B16',

      marginHorizontal:
        16,

      marginTop:
        16,

      padding:
        18,

      borderRadius:
        22,

      borderWidth:
        1,

      borderColor:
        '#3A281F',

    },


    resultHeaderRow: {

      flexDirection:
        'row',

      justifyContent:
        'space-between',

      alignItems:
        'center',

    },


    resultEyebrow: {

      color:
        '#E77924',

      fontWeight:
        '800',

      letterSpacing:
        1.5,

      fontSize:
        10,

      marginBottom:
        4,

    },


    resultTitle: {

      color:
        '#FFF3DD',

      fontSize:
        20,

      fontWeight:
        '800',

    },


    countBadge: {

      minWidth:
        38,

      height:
        38,

      borderRadius:
        19,

      paddingHorizontal:
        10,

      backgroundColor:
        '#E77924',

      alignItems:
        'center',

      justifyContent:
        'center',

    },


    countText: {

      color:
        '#FFFFFF',

      fontWeight:
        '900',

    },


    helperText: {

      color:
        '#BFA99A',

      fontSize:
        13,

      lineHeight:
        19,

      marginTop:
        10,

      marginBottom:
        14,

    },


    ingredientsList: {

      gap:
        8,

    },


    ingredientCard: {

      minHeight:
        58,

      borderRadius:
        15,

      backgroundColor:
        '#33231C',

      paddingLeft:
        14,

      paddingRight:
        10,

      flexDirection:
        'row',

      alignItems:
        'center',

      justifyContent:
        'space-between',

    },


    ingredientLeft: {

      flexDirection:
        'row',

      alignItems:
        'center',

      flex:
        1,

    },


    ingredientDot: {

      width:
        8,

      height:
        8,

      borderRadius:
        4,

      backgroundColor:
        '#F2B35B',

      marginRight:
        12,

    },


    ingredientTextWrap: {

      flex:
        1,

    },


    ingredientText: {

      color:
        '#FFF3DD',

      fontSize:
        15,

      fontWeight:
        '700',

    },


    ingredientId: {

      color:
        '#8F7869',

      fontSize:
        10,

      marginTop:
        2,

    },


    removeButton: {

      width:
        34,

      height:
        34,

      borderRadius:
        17,

      alignItems:
        'center',

      justifyContent:
        'center',

      backgroundColor:
        '#472A22',

      marginLeft:
        10,

    },


    removeText: {

      color:
        '#F4A28C',

      fontSize:
        22,

      lineHeight:
        24,

    },


    // ==================================================
    // AGREGAR MANUAL
    // ==================================================

    addIngredientBox: {

      flexDirection:
        'row',

      marginTop:
        14,

      gap:
        8,

    },


    input: {

      flex:
        1,

      minHeight:
        50,

      borderRadius:
        15,

      paddingHorizontal:
        15,

      color:
        '#FFF3DD',

      backgroundColor:
        '#1D1410',

      borderWidth:
        1,

      borderColor:
        '#4A3329',

    },


    addButton: {

      width:
        50,

      height:
        50,

      borderRadius:
        15,

      backgroundColor:
        '#F2B35B',

      alignItems:
        'center',

      justifyContent:
        'center',

    },


    addButtonText: {

      color:
        '#1D1410',

      fontSize:
        27,

      fontWeight:
        '700',

    },


    // ==================================================
    // EMPTY
    // ==================================================

    emptyBox: {

      backgroundColor:
        '#1D1410',

      padding:
        20,

      borderRadius:
        16,

      alignItems:
        'center',

    },


    emptyIcon: {

      fontSize:
        30,

      marginBottom:
        8,

    },


    emptyTitle: {

      color:
        '#FFF3DD',

      fontWeight:
        '800',

      fontSize:
        16,

    },


    emptyText: {

      color:
        '#A99283',

      textAlign:
        'center',

      marginTop:
        5,

      lineHeight:
        18,

    },


    // ==================================================
    // ERROR
    // ==================================================

    errorBox: {

      flexDirection:
        'row',

      backgroundColor:
        '#42231E',

      marginHorizontal:
        16,

      marginTop:
        14,

      padding:
        14,

      borderRadius:
        15,

      borderWidth:
        1,

      borderColor:
        '#704036',

    },


    errorIcon: {

      marginRight:
        9,

    },


    errorText: {

      color:
        '#F4C1B5',

      flex:
        1,

      lineHeight:
        19,

      fontSize:
        13,

    },


    // ==================================================
    // BOTONES
    // ==================================================

    footer: {

      paddingHorizontal:
        16,

      paddingTop:
        18,

    },


    primaryButton: {

      minHeight:
        58,

      backgroundColor:
        '#E77924',

      borderRadius:
        18,

      alignItems:
        'center',

      justifyContent:
        'center',

      paddingHorizontal:
        18,

    },


    primaryButtonText: {

      color:
        '#FFFFFF',

      fontWeight:
        '900',

      fontSize:
        16,

    },


    secondaryButton: {

      minHeight:
        52,

      borderRadius:
        16,

      alignItems:
        'center',

      justifyContent:
        'center',

      marginTop:
        10,

      borderWidth:
        1,

      borderColor:
        '#51372C',

      backgroundColor:
        '#271B16',

    },


    secondaryButtonText: {

      color:
        '#E5CBBB',

      fontWeight:
        '700',

    },


    buttonDisabled: {

      opacity:
        0.45,

    },


    // ==================================================
    // OVERLAY
    // ==================================================

    scanOverlay: {

      ...StyleSheet.absoluteFill,

      backgroundColor:
        'rgba(15,10,8,0.72)',

      justifyContent:
        'center',

      alignItems:
        'center',

      zIndex:
        100,

    },


    scanText: {

      color:
        '#FFF3DD',

      fontSize:
        17,

      fontWeight:
        '800',

      marginTop:
        14,

    },


    // ==================================================
    // PERMISOS
    // ==================================================

    center: {

      flex:
        1,

      justifyContent:
        'center',

      alignItems:
        'center',

      backgroundColor:
        '#1D1410',

      padding:
        30,

    },


    permissionIcon: {

      fontSize:
        48,

      marginBottom:
        14,

    },


    permissionTitle: {

      color:
        '#FFF3DD',

      fontSize:
        24,

      fontWeight:
        '900',

      marginTop:
        15,

      marginBottom:
        8,

    },


    title: {

      color:
        '#FFF3DD',

      fontSize:
        28,

      fontWeight:
        '900',

      marginBottom:
        12,

      textAlign:
        'center',

    },


    permissionText: {

      color:
        '#BFA99A',

      textAlign:
        'center',

      lineHeight:
        21,

      marginBottom:
        24,

    },

  });