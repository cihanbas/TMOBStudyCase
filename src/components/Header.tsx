import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from 'hooks/redux';
import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {appPadding, colors, isIOS, normalize, spacing} from 'utils/constants';
type HeaderType = {
  title: string;
};
const HEADER_HEIGHT = isIOS ? 44 : 56;
export function Header({title}: HeaderType) {
  const pending = useAppSelector(state => state.youtube.pending);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View
      style={StyleSheet.flatten([styles.container, {paddingTop: insets.top}])}>
      <View style={styles.header}>
        <Pressable onPress={goBack} style={styles.iconButton}>
          <Text style={styles.close}>X</Text>
        </Pressable>

        <Text style={[styles.text]}>{title.toLocaleUpperCase('en')}</Text>

        <View style={styles.defaultIcon}>
          {pending && (
            <ActivityIndicator color={colors.primary} size={'large'} />
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: appPadding / 2,
  },
  text: {
    textAlign: 'center',
    fontSize: normalize(15),
    fontWeight: '600',

    flex: 1,
  },
  iconButton: {
    justifyContent: 'center',
    width: HEADER_HEIGHT,
    height: HEADER_HEIGHT,
  },
  header: {
    height: HEADER_HEIGHT,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: normalize(spacing[3]),
    alignItems: 'center',
  },
  close: {
    fontSize: normalize(23),
    color: colors.primary,
    fontWeight: 'bold',
  },
  defaultIcon: {
    width: HEADER_HEIGHT,
    height: HEADER_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
