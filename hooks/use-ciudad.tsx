import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

import { RECETAS } from '@/data/recetas';
import {
  REGION_NACIONAL_ID,
  STORAGE_KEY_REGION,
  ajustarPrecioRegional,
  etiquetaRegion,
  obtenerRegion,
  type RegionConfig,
  type RegionId,
} from '@/data/regiones-mexico';
import { obtenerRecetasConCosto } from '@/services/costos.service';
import { buscarRecetas as buscarRecetasEnCatalogo } from '@/services/recetas.service';
import type { RecetaConCosto, ResultadoBusqueda } from '@/types/receta';

type CiudadContextValue = {
  region: RegionConfig;
  regionId: RegionId;
  setRegionId: (id: RegionId) => Promise<void>;
  recetasConCosto: RecetaConCosto[];
  buscarRecetas: (ingredientes: string[], presupuesto?: number) => ResultadoBusqueda[];
  fuentePrecios: string;
};

const CiudadContext = createContext<CiudadContextValue | null>(null);

export function CiudadProvider({ children }: React.PropsWithChildren) {
  const [regionId, setRegionIdState] = useState<RegionId>(REGION_NACIONAL_ID);

  useEffect(() => {
    let activo = true;
    AsyncStorage.getItem(STORAGE_KEY_REGION)
      .then((guardado) => {
        if (activo && guardado) {
          try {
            setRegionIdState(obtenerRegion(guardado as RegionId).id);
          } catch {
            setRegionIdState(REGION_NACIONAL_ID);
          }
        }
      })
      .catch(() => undefined);
    return () => {
      activo = false;
    };
  }, []);

  const setRegionId = async (id: RegionId) => {
    const regionValida = obtenerRegion(id).id;
    setRegionIdState(regionValida);
    try {
      await AsyncStorage.setItem(STORAGE_KEY_REGION, regionValida);
    } catch {
      // Keep the selection in memory if device storage is unavailable.
    }
  };

  const value = useMemo<CiudadContextValue>(() => {
    const region = obtenerRegion(regionId);
    const recetasConCosto = obtenerRecetasConCosto(regionId);
    return {
      region,
      regionId,
      setRegionId,
      recetasConCosto,
      buscarRecetas: (ingredientes, presupuesto = 0) => {
        const costos = obtenerRecetasConCosto(regionId);
        return buscarRecetasEnCatalogo(ingredientes, presupuesto, costos, regionId);
      },
      fuentePrecios: `Precios estimados para ${etiquetaRegion(region)}`,
    };
  }, [regionId]);

  return <CiudadContext.Provider value={value}>{children}</CiudadContext.Provider>;
}

export function useCiudad() {
  const context = useContext(CiudadContext);
  if (!context) throw new Error('useCiudad debe usarse dentro de CiudadProvider');
  return context;
}
