import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Configuracao: undefined;
};

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type ConfigScreenRouteProp = RouteProp<RootStackParamList, 'Configuracao'>;

export type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  route: HomeScreenRouteProp;
};

export type ConfigScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Configuracao'>;
  route: ConfigScreenRouteProp;
};
