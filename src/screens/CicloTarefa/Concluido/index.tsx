import React, { useState, useEffect } from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import styles from './estilo';
import { Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types/navigation';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Concluido'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const ConcluidoScreen = ({ navigation }: Props) => {

  return (
    <View style={styles.container}>
       <View style={styles.tituloArea}>
        <Text style={styles.titulo}>Olá, Felipe</Text>
        <View style={styles.carrinhoArea}>
          <TouchableOpacity onPress={() => navigation.navigate('Configuracao')}>
            <Feather name="map" size={30} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <View style={styles.quantidadeArea}>
            <Text style={styles.quantidade}>3</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Configuracao')} style={styles.iconArea} >
            <Feather name="settings" size={30} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View >
        <Text >ConcluidoScreen</Text>
      </View>
    </View>
  );
};


export default ConcluidoScreen;