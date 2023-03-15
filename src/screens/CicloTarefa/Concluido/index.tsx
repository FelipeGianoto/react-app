import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Button, TextInput, Platform } from 'react-native';
import styles from './estilo';
import { Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types/navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { getTarefasByStaus } from '../../../services/requisicoes/tarefas';
import { StatusTarefa, Tarefa } from '../../../interfaces'
import { DatePicker, getData }  from '../../../components/DateTimePicker'


type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Concluido'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

interface TarefasPorData {
  [data: string]: Tarefa[];
}

const ConcluidoScreen = ({ navigation }: Props) => {

  
  const [tarefa, setTarefa] = useState<TarefasPorData>({});

  useEffect(() => {
    async function listTarefas() {
      try {
        const response = await getTarefasByStaus(StatusTarefa.CONCLUIDO);
        const tarefasPorData = response.reduce((acc: TarefasPorData, tarefa: Tarefa) => {
          if (!acc[tarefa.data]) {
            acc[tarefa.data] = [];
          }
          acc[tarefa.data].push(tarefa);
          return acc;
        }, {});
        setTarefa(tarefasPorData);
      } catch (error) {
        console.error(error);
      }
    }
    listTarefas();
  }, []);

  function formatData(data: string) {
    const dataAtual = new Date(data);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const diaSemana = dataAtual.toLocaleDateString('pt-BR', options as never);

    const dataFormatada = diaSemana;



    return dataFormatada
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

      <DatePicker/>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonConcluidoText}>Filtrar</Text>
      </TouchableOpacity>

      <ScrollView style={{ marginLeft: 20, marginRight: 20, width: '100%' }}>
        {Object.keys(tarefa).map((data) => (
          <View key={data} >

            <Text style={styles.buttonData}>{formatData(data)}</Text>


            {tarefa[data].map((tarefa: Tarefa) => (

              <View key={Math.random() * 1000000} style={{ marginLeft: 30 }}>
                <TouchableOpacity onPress={() => navigation.navigate('DetalheAnotacao', { tarefa } as never)}>
                  <View style={styles.itemContainer}>
                    <Text style={styles.itemTitulo}>{tarefa.titulo}</Text>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey' }} />
                    <Text style={styles.itemData}>{formatData(tarefa.data)}</Text>
                    <Text style={styles.itemDescricao} numberOfLines={3} ellipsizeMode='tail'>{tarefa.descricao}</Text>
                  </View>
                </TouchableOpacity>
              </View>

            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};


export default ConcluidoScreen;