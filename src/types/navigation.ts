import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Configuracao: undefined;
  DetalheAnotacao: undefined;
  CriarAnotacao: undefined;
};

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type ConfigScreenRouteProp = RouteProp<RootStackParamList, 'Configuracao'>;

type AnotacaoScreenRouteProp = RouteProp<RootStackParamList, 'DetalheAnotacao'>;

type AnotacaoPostScreenProp = RouteProp<RootStackParamList, 'CriarAnotacao'>;


export type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  route: HomeScreenRouteProp;
};

export type ConfigScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Configuracao'>;
  route: ConfigScreenRouteProp;
};

export type AnotacaoScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'DetalheAnotacao'>;
  route: AnotacaoScreenRouteProp;
};

export type AnotacaoPostScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'CriarAnotacao'>;
  route: AnotacaoPostScreenProp;
};

