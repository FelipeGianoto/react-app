import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import styles from './estilo';
import { Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types/navigation';
import { getTarefas } from '../../../services/requisicoes/tarefas';
import { StatusTarefa, Tarefa } from '../../../interfaces';
import { atualizaTarefa } from '../../../services/requisicoes/tarefas';

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
  const [tarefaAtualizada, setTarefaAtualizada] = useState<Tarefa | null>(null);

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
  }, [tarefaAtualizada]);

  async function alteraTarefa(tarefa: Tarefa, status: StatusTarefa) {
    tarefa.status = status;
    const tarefaAtualizada = await atualizaTarefa(tarefa); // aguarda a atualização da tarefa
    setTarefaAtualizada(tarefaAtualizada); // atualiza o estado da tarefa atualizada
  }



  return (

    <View style={styles.container}>
      <View style={styles.tituloArea}>
        <Text style={styles.titulo}>Olá, Felipe</Text>
        <View style={styles.carrinhoArea}>
          <TouchableOpacity onPress={() => navigation.navigate('Configuracao')} style={styles.iconArea} >
            <Feather name="settings" size={30} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ marginLeft: 50, width: '100%' }}>
        {Object.keys(tarefas).sort().reverse().map((status) => (
          <View key={status} >
            {status == "pendente" &&
              <TouchableOpacity style={styles.buttonPendente} onPress={() => navigation.navigate('Pendentes')}>
                <Text style={styles.buttonPendenteText}>{status}</Text>
              </TouchableOpacity>
            }
            {status == "em andamento" &&
              <TouchableOpacity style={styles.buttonEmAndamento} onPress={() => navigation.navigate('EmAndamento')}>
                <Text style={styles.buttonEmAndamentoText}>{status}</Text>
              </TouchableOpacity>
            }
            {status == "concluido" &&
              <TouchableOpacity style={styles.buttonConcluido} onPress={() => navigation.navigate('Concluido')}>
                <Text style={styles.buttonConcluidoText}>{status}</Text>
              </TouchableOpacity>
            }
            <ScrollView horizontal={true}>
              {tarefas[status].map((tarefa: Tarefa) => (
                <View key={Math.random() * 1000000} style={{ marginLeft: 15 }}>
                  <TouchableOpacity onPress={() => navigation.navigate('DetalheAnotacao', { tarefa } as never)}>
                    <View style={styles.itemContainer}>
                      <Text style={styles.itemTitulo}>{tarefa.titulo}</Text>
                      <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey' }} />
                      <Text style={styles.itemData}>{tarefa.data}</Text>
                      <Text style={styles.itemDescricao} numberOfLines={3} ellipsizeMode='tail'>{tarefa.descricao}</Text>
                      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15 }}>
                        {status != "pendente" && status != 'concluido' &&
                          <TouchableOpacity style={styles.buttonPendenteItem} onPress={() => alteraTarefa(tarefa, StatusTarefa.PENDENTE)}>
                            <Text style={styles.buttonPendenteTextItem}>{StatusTarefa.PENDENTE.toString()}</Text>
                          </TouchableOpacity>
                        }
                        {status != "em andamento" &&
                          <TouchableOpacity style={styles.buttonEmAndamentoItem} onPress={() => alteraTarefa(tarefa, StatusTarefa.EM_ANDAMENTO)}>
                            <Text style={styles.buttonEmAndamentoTextItem}>{StatusTarefa.EM_ANDAMENTO.toString()}</Text>
                          </TouchableOpacity>
                        }
                        {status != "concluido" && status != 'pendente' &&
                          <TouchableOpacity style={styles.buttonConcluidoItem} onPress={() => alteraTarefa(tarefa, StatusTarefa.CONCLUIDO)}>
                            <Text style={styles.buttonConcluidoTextItem}>{StatusTarefa.CONCLUIDO.toString()}</Text>
                          </TouchableOpacity>
                        }
                        {status == "concluido" &&
                          <TouchableOpacity style={styles.buttonConcluidoItem}>
                            <Text style={styles.buttonConcluidoTextItem}>Finalizar</Text>
                          </TouchableOpacity>
                        }
                      </View>
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