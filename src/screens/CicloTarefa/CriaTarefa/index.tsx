import React, { useState, useEffect, } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, TextInput, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types/navigation';
import { Feather } from '@expo/vector-icons';
import styles from './estilo';
import { Tarefa, StatusTarefa } from '../../../interfaces';
import { salvaTarefa } from '../../../services/requisicoes/tarefas';

type AnotacaoPostScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CriarTarefa'
>;

type Props = {
  navigation: AnotacaoPostScreenNavigationProp;
};

interface RouteParams {
  item: Tarefa;
}

const TarefaPostScreen = ({ navigation }: Props) => {

  const [textTitulo, setTextTitulo] = useState('');
  const [textDescricao, setTextDescricao] = useState('');
  const [data, setData] = useState(new Date());
  const [anotacaoCriada, setAnotacaoCriada] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  const handleDataChange = (evento: any, novaData?: Date) => {
    setShowPicker(Platform.OS === 'ios');
    if (novaData) {
      setData(novaData);
      setShowPicker(false);
    }
  };

  const exibirPicker = () => {
    if (!showPicker) {
      setShowPicker(true);
    } else {
      setShowPicker(false);
    }

  };

  function salvar() {

    const tarefa: Tarefa = {
      titulo: textTitulo,
      descricao: textDescricao,
      data: data.toString(),
      usersId: 2,
      status: StatusTarefa.PENDENTE,
    };

    salvaTarefa(tarefa).then(() => {
      setAnotacaoCriada(true);
    }).catch(() => {
      setAnotacaoCriada(false);
    });

    setTextTitulo('')
    setTextDescricao('')
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

      <Text style={{
        color: 'white', marginVertical: 15, fontSize: 16, fontWeight: 'bold'
      }}>Criar tarefa</Text>
      {anotacaoCriada && 
        <Text style={styles.succes}>Tarefa Criada</Text>
      }
      <TouchableOpacity style={styles.buttonData} onPress={exibirPicker}>
        <TextInput
          style={styles.inputTitulo}
          placeholder="Digite o titulo"
          numberOfLines={1}
          value={data.toLocaleDateString()}
          defaultValue={textTitulo}
          onChangeText={setTextTitulo}
          onPressIn={exibirPicker}
        />
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          style={{ backgroundColor: "white", marginVertical: 10 }}
          value={data}
          mode="date"
          display="calendar"
          onChange={handleDataChange}

        />
      )}
      <TextInput
        style={styles.inputTitulo}
        placeholder="Digite o titulo"
        numberOfLines={1}
        value={textTitulo}
        defaultValue={textTitulo}
        onChangeText={setTextTitulo}
      />

      <TextInput
        placeholder="Digite sua anotação aqui"
        multiline
        style={styles.input}
        value={textDescricao}
        defaultValue={textDescricao}
        onChangeText={setTextDescricao}
      />

      <TouchableOpacity style={styles.button} onPress={() => salvar()}>
        <Text style={styles.buttonText}><Feather name="edit" size={16}></Feather> Salvar</Text>
      </TouchableOpacity>

    </View>
  );
};

export default TarefaPostScreen;
