import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type TabNavigationType = {
  QOne: undefined;
  QTwo: undefined;
};
export type NavigationStackProps = NativeStackScreenProps<
  StackNavigationType,
  'Tabs'
>;
export type NavigationProps = {
  navigation: NavigationStackProps['navigation'];
};
export type StackNavigationType = {
  VideoList: undefined;
  Tabs: TabNavigationType;
};
