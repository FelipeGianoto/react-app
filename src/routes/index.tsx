import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './../screens/Home';
import ConfigScreen from './../screens/Configuracao';
import AnotacaoScreen  from '../screens/CicloAnotacao/DetalheAnotacao'
import AnotacaoPostScreen from '../screens/CicloAnotacao/CriarAnotacao';
import ConcluidoScreen from './../screens/CicloTarefa/Concluido'
import EmAndamentoScreen from '../screens/CicloTarefa/EmAndamento';
import PendenteScreen from '../screens/CicloTarefa/Pendentes';
import CicloScreen from '../screens/CicloTarefa';
import TarefaPostScreen from '../screens/CicloTarefa/CriaTarefa'

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Configuracao" component={ConfigScreen} />

        <Stack.Screen name="DetalheAnotacao" component={AnotacaoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CriarAnotacao" component={AnotacaoPostScreen} options={{ headerShown: false }} />

        <Stack.Screen name="CicloTarefa" component={CicloScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CriarTarefa" component={TarefaPostScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Concluido" component={ConcluidoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EmAndamento" component={EmAndamentoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Pendentes" component={PendenteScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
