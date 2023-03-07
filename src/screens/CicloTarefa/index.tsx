import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from './estilo';
import { Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';
import { getTarefas } from '../../services/requisicoes/tarefas';
import { Tarefa } from '../../interfaces';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CicloTarefa'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

interface TarefasPorStatus {
  [status: string]: Tarefa[];
}

const CicloScreen = ({ navigation }: Props) => {

  const [tarefas, setTarefas] = useState<TarefasPorStatus>({});

  useEffect(() => {
    async function listTarefas() {
      try {
        const response = await getTarefas();
        const tarefasPorStatus = response.reduce((acc: TarefasPorStatus, tarefa: Tarefa) => {
          if (!acc[tarefa.status]) {
            acc[tarefa.status] = [];
          }
          acc[tarefa.status].push(tarefa);
          return acc;
        }, {});
        setTarefas(tarefasPorStatus);
      } catch (error) {
        console.error(error);
      }
    }
    listTarefas();
  }, []);


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
      <ScrollView style={{ marginLeft: 20, marginRight: 20, width: '100%' }}>
        {Object.keys(tarefas).map((status) => (
          <View key={status} >
            {status == "pendente" &&
              <TouchableOpacity style={styles.buttonPendente} onPress={() => navigation.navigate('Pendentes')}>
                <Text style={styles.buttonPendenteText}>{status}</Text>
              </TouchableOpacity>
            }
            {status == "concluido" &&
              <TouchableOpacity style={styles.buttonConcluido} onPress={() => navigation.navigate('Concluido')}>
                <Text style={styles.buttonConcluidoText}>{status}</Text>
              </TouchableOpacity>
            }
            {status == "em andamento" &&
              <TouchableOpacity style={styles.buttonEmAndamento} onPress={() => navigation.navigate('EmAndamento')}>
                <Text style={styles.buttonEmAndamentoText}>{status}</Text>
              </TouchableOpacity>
            }
            <ScrollView horizontal={true}>
              {tarefas[status].map((tarefa: Tarefa) => (

                <View key={Math.random() * 1000000} style={{ marginLeft: 20}}>
                  <TouchableOpacity onPress={() => navigation.navigate('DetalheAnotacao', { tarefa } as never)}>
                    <View style={styles.itemContainer}>
                      <Text style={styles.itemTitulo}>{tarefa.titulo}</Text>
                      <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey' }} />
                      <Text style={styles.itemData}>{tarefa.data}</Text>
                      <Text style={styles.itemDescricao} numberOfLines={3} ellipsizeMode='tail'>{tarefa.descricao}</Text>
                    </View>
                  </TouchableOpacity>
                </View>

              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};



export default CicloScreen;