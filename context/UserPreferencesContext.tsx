import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Preferences = {
  vegetariano: boolean;
  vegano: boolean;
  sinGluten: boolean;
  sinLacteos: boolean;
};

type UserPreferencesType = {
  preferences: Preferences;
  togglePreference: (key: keyof Preferences) => void;
  isLoaded: boolean;
};

const defaultPreferences: Preferences = {
  vegetariano: false,
  vegano: false,
  sinGluten: false,
  sinLacteos: false,
};

const UserPreferencesContext = createContext<UserPreferencesType | undefined>(undefined);

export function UserPreferencesProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<Preferences>(defaultPreferences);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('@chef_luna_preferences').then((data) => {
      if (data) {
        setPreferences(JSON.parse(data));
      }
      setIsLoaded(true);
    });
  }, []);

  const togglePreference = (key: keyof Preferences) => {
    const updated = { ...preferences, [key]: !preferences[key] };
    setPreferences(updated);
    AsyncStorage.setItem('@chef_luna_preferences', JSON.stringify(updated));
  };

  return (
    <UserPreferencesContext.Provider value={{ preferences, togglePreference, isLoaded }}>
      {children}
    </UserPreferencesContext.Provider>
  );
}

export function useUserPreferences() {
  const context = useContext(UserPreferencesContext);
  if (!context) throw new Error('useUserPreferences debe usarse dentro de UserPreferencesProvider');
  return context;
}