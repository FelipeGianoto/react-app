import React, { useState, useEffect, } from 'react';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types/navigation';
import { Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import styles from './estilo';
import { Tarefa } from '../../../interfaces';

type AnotacaoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DetalheAnotacao'
>;

type Props = {
  navigation: AnotacaoScreenNavigationProp;
};

interface RouteParams {
  item: Tarefa;
}



const AnotacaoScreen = ({ navigation }: Props) => {

  const route = useRoute();
  const [tarefa, setTarefa] = useState<Tarefa>();
  const [textTitulo, setTextTitulo] = useState(tarefa?.titulo);
  const [textDescricao, setTextDescricao] = useState(tarefa?.descricao);


  useEffect(() => {
    const params = route.params as RouteParams;
    setTarefa(params.item);
  }, [route.params]);




  return (

    <View style={styles.container}>
      <View style={styles.tituloArea}>
        <Text style={styles.titulo}>Olá, Felipe</Text>
        <View style={styles.carrinhoArea}>
          <TouchableOpacity onPress={() => navigation.navigate('Configuracao')}>
            <Feather name="map" size={30} color="#fff" style={styles.carrinhoIcon} />
          </TouchableOpacity>
          <View style={styles.carrinhoQuantidadeArea}>
            <Text style={styles.carrinhoQuantidade}>3</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Configuracao')} style={styles.iconArea} >
            <Feather name="settings" size={30} color="#fff" style={styles.carrinhoIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={{
        color: 'white', marginVertical: 20, fontSize: 19,  fontWeight: 'bold'
      }}>{tarefa?.data}</Text>
      <TextInput
        style={styles.inputTitulo}
        placeholder="Digite o titulo"
        numberOfLines={1}
        value={textTitulo}
        defaultValue={tarefa?.titulo}
        onChangeText={setTextTitulo}
      />

      <TextInput
        placeholder="Digite sua anotação aqui"
        multiline
        style={styles.input}
        value={textDescricao}
        defaultValue={tarefa?.descricao}
        onChangeText={setTextDescricao}
      />

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}><Feather name="edit" size={16}></Feather> Atualizar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonDelete} >
        <Text style={styles.buttonText}><Feather name="trash-2" size={16}></Feather> Deletar</Text>
      </TouchableOpacity>

    </View>
  );
};

export default AnotacaoScreen;
