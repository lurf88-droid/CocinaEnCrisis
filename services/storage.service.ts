import AsyncStorage from '@react-native-async-storage/async-storage';

// Serializa las escrituras de cada clave para conservar el estado más reciente.
const pendientes = new Map<string, Promise<void>>();

export async function guardarDato<T>(
  clave: string,
  valor: T
): Promise<void> {

  const contenido = JSON.stringify(valor);
  const anterior = pendientes.get(clave) ?? Promise.resolve();
  const escritura = anterior.catch(() => {}).then(() => AsyncStorage.setItem(clave, contenido));
  pendientes.set(clave, escritura);
  try {
    await escritura;
  } finally {
    if (pendientes.get(clave) === escritura) pendientes.delete(clave);
  }
}

export async function cargarDato<T>(
  clave: string
): Promise<T | null> {

  const dato = await AsyncStorage.getItem(clave);
  // Un fallo de lectura no debe confundirse con una clave que todavía no existe.
  return dato === null ? null : JSON.parse(dato) as T;
}
