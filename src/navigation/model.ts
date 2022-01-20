import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type TabNavigationType = {
  QOne: undefined;
  QTwo: undefined;
  QThree: undefined;
};
export type NavigationStackProps = NativeStackScreenProps<
  TabNavigationType,
  'QOne'
>;
export type NavigationProps = {
  navigation: NavigationStackProps['navigation'];
};
