import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Config"
        onPress={() => navigation.navigate('Config')}
      />
    </View>
  );
};

export default HomeScreen;
