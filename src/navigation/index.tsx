import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigationType} from 'navigation/model';
import {QOne, QTwo, QThree} from 'questions';
import * as React from 'react';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator<TabNavigationType>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarIcon: () => undefined,
          tabBarLabelStyle: styles.labelStyles,
        }}>
        <Tab.Screen name="QOne" component={QOne} />
        <Tab.Screen name="QTwo" component={QTwo} />
        <Tab.Screen name="QThree" component={QThree} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  labelStyles: {
    color: 'red',
    fontSize: 18,
  },
});
