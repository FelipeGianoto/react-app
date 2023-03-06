import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './../screens/Home';
import ConfigScreen from './../screens/Configuracao';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Configuracao" component={ConfigScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
