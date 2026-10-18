import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { AppText } from './AppText';

import {
  Spacing,
} from '@/constants/theme';


type Props = {
  title: string;
  subtitle?: string;

  iconName?: React.ComponentProps<
    typeof MaterialCommunityIcons
  >['name'];
};


export function AppSectionHeader({
  title,
  subtitle,
  iconName,
}: Props) {

  return (

    <View style={styles.container}>

      <View style={styles.headerLine} />


      <View style={styles.titleRow}>

        {iconName && (

          <View style={styles.iconContainer}>

            <MaterialCommunityIcons
              name={iconName}
              size={28}
              color="#F2B35B"
            />

          </View>

        )}


        <AppText style={styles.title}>
          {title}
        </AppText>

      </View>


      {subtitle ? (

        <AppText style={styles.subtitle}>
          {subtitle}
        </AppText>

      ) : null}

    </View>

  );

}


const styles = StyleSheet.create({

  container: {
    marginBottom: Spacing.lg,
  },


  headerLine: {
    width: 70,
    height: 4,

    borderRadius: 99,

    backgroundColor: '#E89A2E',

    marginBottom: Spacing.sm,
  },


  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 12,
  },


  iconContainer: {
    width: 44,
    height: 44,

    borderRadius: 14,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#3A2418',

    borderWidth: 1,
    borderColor: '#8A5A35',
  },


  title: {
    flex: 1,

    color: '#FFF3DD',

    fontSize: 26,

    fontWeight: '900',

    letterSpacing: 0.3,
  },


  subtitle: {
    marginTop: Spacing.xs,

    color: '#D7A86E',

    fontSize: 15,

    lineHeight: 22,
  },

});