import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNavigationType} from './model';

import * as React from 'react';
import {QOne, QTwoThree} from 'screens';
import {StyleSheet} from 'react-native';
const Tab = createBottomTabNavigator<TabNavigationType>();
function TabView() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIcon: () => undefined,
        tabBarLabelStyle: styles.labelStyles,
      }}>
      <Tab.Screen name="QOne" component={QOne} />
      <Tab.Screen name="QTwo" component={QTwoThree} />
    </Tab.Navigator>
  );
}
export {TabView};
const styles = StyleSheet.create({
  labelStyles: {
    color: 'red',
    fontSize: 18,
  },
});
