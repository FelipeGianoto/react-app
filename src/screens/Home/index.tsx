import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';
import styles from './estilo';
import { Feather } from '@expo/vector-icons';
import { getTopicos } from './../../services/requisicoes/topicos';
import { Tarefa } from '../../interfaces';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation }: Props) => {

  const [hideInput, setHideInput] = useState(true);
  const [textTitulo, setTextTitulo] = useState('');
  const [textDescricao, setTextDescricao] = useState('');
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);


  useEffect(() => {
    async function Data() {
      const response = await getTopicos();
      setTarefas(response);

    }
    Data();

  }, []);

  const renderItem = ({ item }: { item: Tarefa }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DetalheAnotacao', { item } as never)}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitulo}>{item.titulo}</Text>
        <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey' }} />
        <Text style={styles.itemData}>{item.data}</Text>
        <Text style={styles.itemDescricao} numberOfLines={3} ellipsizeMode='tail'>{item.descricao}</Text>
      </View>
    </TouchableOpacity>
  );
  async function verificaInput() {

    if (hideInput) {
      setHideInput(false)
    } else {
      setHideInput(true)
    }
  }

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
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CriarAnotacao')}>
          <Text style={styles.buttonText}><Feather name="plus-circle" size={16}></Feather> Criar Tarefa</Text>
        </TouchableOpacity>
        {!hideInput &&
          <>
            <Text style={{
              color: 'white', marginVertical: 15, fontSize: 16, fontWeight: 'bold'
            }}>Titulo</Text>
            <TextInput
              style={styles.inputTitulo}
              placeholder="Digite o titulo"
              numberOfLines={1}
              value={textTitulo}
              onChangeText={setTextTitulo}
            />
            <Text style={{
              color: 'white', marginVertical: 15, fontSize: 16, fontWeight: 'bold'
            }}>Descrição</Text>

            <TextInput
              placeholder="Digite sua anotação aqui"
              multiline
              numberOfLines={4}
              style={styles.input}
              value={textDescricao}
              onChangeText={setTextDescricao}
            />
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}><Feather name="plus-circle" size={16}></Feather> Tarefa</Text>
            </TouchableOpacity>
          </>
        }
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', marginVertical: 15 }}>Ultimas Tarefas</Text>
        <FlatList
          data={tarefas}
          renderItem={renderItem}
          keyExtractor={(item) => item.titulo}
          horizontal
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
