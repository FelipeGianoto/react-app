import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, Platform } from 'react-native';
import styles from './estilo';
import { Feather } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types/navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { getLembreteByStaus } from '../../../services/requisicoes/lembrete';
import { StatusTarefa, Lembrete } from '../../../interfaces'
import DateTimePicker from '@react-native-community/datetimepicker';

type HomeScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'ListLembrete'
>;

type Props = {
    navigation: HomeScreenNavigationProp;
};

interface LembretePorData {
    [data: string]: Lembrete[];
}

const ListLembreteScreen = ({ navigation }: Props) => {

    const [lembrete, setLembrete] = useState<LembretePorData>({});
    const [data, setData] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [textTitulo, setTextTitulo] = useState('');

    useEffect(() => {
        async function listTarefas() {
            const response = await getLembreteByStaus(StatusTarefa.PENDENTE);
            setLembrete(response);
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

            <TouchableOpacity style={styles.containerData} onPress={exibirPicker}>
                <TextInput
                    style={styles.inputData}
                    placeholder="Digite o titulo"
                    numberOfLines={1}
                    value={data.toLocaleDateString()}
                    defaultValue={textTitulo}
                    onChangeText={setTextTitulo}
                    onPressIn={exibirPicker}
                />
            </TouchableOpacity>
            {
                showPicker && (
                    <DateTimePicker
                        style={styles.datePicker}
                        value={data}
                        mode="date"
                        display="calendar"
                        onChange={handleDataChange}

                    />
                )
            }

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonConcluidoText}>Filtrar</Text>
            </TouchableOpacity>

            <ScrollView style={{ marginLeft: 20, marginRight: 20, width: '100%' }}>
                {Object.keys(lembrete).map((data) => (
                    <View key={data} >

                        <Text style={styles.buttonData}>{formatData(data)}</Text>


                        {lembrete[data].map((lembrete: Lembrete) => (

                            <View key={Math.random() * 1000000} style={{ marginLeft: 30 }}>
                                <TouchableOpacity onPress={() => console.log("clicado")}>
                                    <View style={styles.itemContainer}>
                                        <Text style={styles.itemTitulo}>{lembrete.titulo}</Text>
                                        <View style={{ borderBottomWidth: 1, borderBottomColor: 'grey' }} />
                                        <Text style={styles.itemData}>{formatData(lembrete.data.toDateString())}</Text>
                                        <Text style={styles.itemDescricao} numberOfLines={3} ellipsizeMode='tail'>{lembrete.descricao}</Text>
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


export default ListLembreteScreen;