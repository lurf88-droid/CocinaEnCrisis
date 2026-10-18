import { TextInput, StyleSheet } from 'react-native';

import { Colors, Radius, Spacing } from '@/constants/theme';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onSubmitEditing?: () => void;
  keyboardType?: 'default' | 'numeric';
};

export function AppInput({
  value,
  onChangeText,
  placeholder,
  onSubmitEditing,
  keyboardType = 'default',
}: Props) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    placeholderTextColor="#C79D6C"
      keyboardType={keyboardType}
      onSubmitEditing={onSubmitEditing}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#2A1B15',

    color: '#FFF3DD',

    paddingHorizontal: 20,

    paddingVertical: 16,

    borderRadius: 22,

    borderWidth: 1,

    borderColor: '#8A5A32',

    fontSize: 16,

    fontWeight: '700',

    marginTop: Spacing.md,
  },
});