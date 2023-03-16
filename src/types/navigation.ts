import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Configuracao: undefined;

  DetalheAnotacao: undefined;
  CriarAnotacao: undefined;

  CicloTarefa: undefined;
  CriarTarefa: undefined;
  Concluido: undefined;
  EmAndamento: undefined;
  Pendentes: undefined;

  CriarLembrete: undefined;
  DetalheLembrete: undefined;
  ListLembrete: undefined;
};

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type ConfigScreenRouteProp = RouteProp<RootStackParamList, 'Configuracao'>;

type AnotacaoScreenRouteProp = RouteProp<RootStackParamList, 'DetalheAnotacao'>;

type AnotacaoPostScreenProp = RouteProp<RootStackParamList, 'CriarAnotacao'>;

type CicloScreenProp = RouteProp<RootStackParamList, 'CicloTarefa'>;

type TarefaPostScreenProp = RouteProp<RootStackParamList, 'CriarTarefa'>;

type ConcluidoScreenProp = RouteProp<RootStackParamList, 'Concluido'>;

type EmAndamentoScreenProp = RouteProp<RootStackParamList, 'EmAndamento'>;

type PendentesScreenProp = RouteProp<RootStackParamList, 'Pendentes'>;

type LembretePostScreenProp = RouteProp<RootStackParamList, 'CriarLembrete'>;

type DetalheLembretescreenPop = RouteProp<RootStackParamList, 'DetalheLembrete'>;

type ListLembretescreenProp = RouteProp<RootStackParamList, 'ListLembrete'>;


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

export type CicloScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'CicloTarefa'>;
  route: CicloScreenProp;
};

export type TarefaPostScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'CriarTarefa'>;
  route: TarefaPostScreenProp;
};

export type ConcluidoScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Concluido'>;
  route: ConcluidoScreenProp;
};

export type EmAndamentoScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'EmAndamento'>;
  route: EmAndamentoScreenProp;
};

export type PendentesScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Pendentes'>;
  route: PendentesScreenProp;
};

export type LembretePostScreenProps = { 
  navigation: StackNavigationProp<RootStackParamList, 'CriarLembrete'>;
  route: LembretePostScreenProp
}

export type DetalheLembretescreenPops = {
  navigation: StackNavigationProp<RootStackParamList, 'DetalheLembrete'>;
  route: DetalheLembretescreenPop
}

export type ListLembretescreenProps = {
  naigation: StackNavigationProp<RootStackParamList, 'ListLembrete'>;
  route: ListLembretescreenProp
} 

