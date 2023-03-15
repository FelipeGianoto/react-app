import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';
import styles from './estilo';
import { Feather } from '@expo/vector-icons';
import { getTopicos } from './../../services/requisicoes/anotacoes';
import { Anotacao } from '../../interfaces';

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
  const [tarefas, setTarefas] = useState<Anotacao[]>([]);


  useEffect(() => {
    async function Data() {
      const response = await getTopicos();
      setTarefas(response);

    }
    Data();

  }, []);

  const renderItem = ({ item }: { item: Anotacao }) => (
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
        <View style={styles.configArea}>
          <TouchableOpacity onPress={() => navigation.navigate('Configuracao')} style={styles.iconArea} >
            <Feather name="settings" size={30} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', marginVertical: 15 }}>Menu</Text>
        <View style={styles.menuContainer}>
          <View style={styles.column}>
            <TouchableOpacity style={styles.menuHome} onPress={() => navigation.navigate('CriarAnotacao')}>
              <Feather style={styles.menuHomeText} name="plus-square" size={25}></Feather>
              <Text style={styles.menuHomeText}> Criar Anotação</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuHome} onPress={() => navigation.navigate('Home')}>
              <Feather style={styles.menuHomeText} name="list" size={16}></Feather>
              <Text style={styles.menuHomeText}> Listar Anotações</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity style={styles.menuHome} onPress={() => navigation.navigate('CriarTarefa')}>
              <Feather style={styles.menuHomeText} name="plus-square" size={16}></Feather>
              <Text style={styles.menuHomeText}> Criar Tarefa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuHome} onPress={() => navigation.navigate('CicloTarefa')}>
              <Feather style={styles.menuHomeText} name="list" size={16}></Feather>
              <Text style={styles.menuHomeText}> Listar Tarefas</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity style={styles.menuHome} onPress={() => navigation.navigate('Home')}>
              <Feather style={styles.menuHomeText} name="settings" size={16}></Feather>
              <Text style={styles.menuHomeText}> Alguma Página</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuHome} onPress={() => navigation.navigate('Home')}>
              <Feather style={styles.menuHomeText} name="menu" size={16}></Feather>
              <Text style={styles.menuHomeText}> Criar lembrete</Text>
            </TouchableOpacity>
          </View>
        </View>
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
            <TouchableOpacity style={styles.button} onPress={() => { }}>
              <Text style={styles.buttonText}><Feather name="plus-circle" size={16}></Feather> Tarefa</Text>
            </TouchableOpacity>
          </>
        }
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', marginVertical: 15 }}>Ultimas Anotações</Text>
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
