import { ReactNode, Ref } from 'react';

import {
  ScrollView,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { Spacing } from '@/constants/theme';


type ScreenProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  scrollRef?: Ref<ScrollView>;
};


export function Screen({
  children,
  style,
  scrollRef,
}: ScreenProps) {

  return (
    <SafeAreaView style={styles.safe}>

      <ScrollView
        ref={scrollRef}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          styles.container,
          style,
        ]}
      >

        {children}

      </ScrollView>

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  safe: {
    flex: 1,
    backgroundColor: '#1C1512',
  },


  container: {
    flexGrow: 1,
    paddingHorizontal: Spacing.xl,
    paddingTop: 0,
    paddingBottom: 80,
  },

});