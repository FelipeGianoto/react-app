import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './../screens/Home';
import ConfigScreen from './../screens/Configuracao';
import AnotacaoScreen  from './../screens/DetalheAnotacao'
import AnotacaoPostScreen from './../screens/CriarAnotacao';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Configuracao" component={ConfigScreen} />
        <Stack.Screen name="DetalheAnotacao" component={AnotacaoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CriarAnotacao" component={AnotacaoPostScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
