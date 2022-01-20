import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationType} from 'navigation/model';
import {TabView} from 'navigation/tabs';
import * as React from 'react';
import {VideoListScreen} from 'screens';

const Stack = createNativeStackNavigator<StackNavigationType>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="Tabs" component={TabView} />
        <Stack.Group
          screenOptions={{
            presentation: 'transparentModal',
            animation: 'slide_from_bottom',
          }}>
          <Stack.Screen name="VideoList" component={VideoListScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
