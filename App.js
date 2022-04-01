import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './src/Main/Main.Screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{
              title: 'My Emoji Animation',
              headerTitleAlign: 'center',
              gestureEnabled: true,
              gestureDirection: 'horizontal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}