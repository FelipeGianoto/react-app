import React, { useState, useEffect, } from 'react';
import { View, Text, TouchableOpacity, Platform, TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../types/navigation';
import { Feather } from '@expo/vector-icons';
import styles from './estilo';
import { Lembrete, StatusTarefa } from '../../../interfaces';
import { salvarLembrete } from '../../../services/requisicoes/lembrete';
import moment from 'moment';
import RNDateTimePicker from '@react-native-community/datetimepicker';

type LembretePostScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CriarLembrete'
>;

type Props = {
  navigation: LembretePostScreenNavigationProp;
};

interface RouteParams {
  item: Lembrete;
}

const LembretePostScreen = ({ navigation }: Props) => {

  const [textTitulo, setTextTitulo] = useState('');
  const [textDescricao, setTextDescricao] = useState('');
  const [data, setData] = useState(new Date());
  const [lembreteCriado, setLembreteCriado] = useState(false);
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

    const Lembrete: Lembrete = {
      titulo: textTitulo,
      descricao: textDescricao,
      data: data.toString(),
      usersId: 2,
      status: StatusTarefa.PENDENTE,
    };

    salvarLembrete(Lembrete).then(() => {
      setLembreteCriado(true);
    }).catch(() => {
      setLembreteCriado(false);
    });

    setTextTitulo('')
    setTextDescricao('')
  }

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleDateChange = (event: any, selectedDate: any) => {
    setShow(Platform.OS === 'ios');
    const dateString = selectedDate.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    
    setDate(dateString || dateString);
    console.log(date)
  };

  const handleTimeChange = (event: any, selectedTime: any) => {
    setShow(Platform.OS === 'ios');
    const dataFormated = moment(selectedTime).format('HH:mm');

    setTime(momento || time);
  };

  const handleButtonPress = () => {
    setShow(true);
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

      <Text style={{
        color: 'white', marginVertical: 15, fontSize: 16, fontWeight: 'bold'
      }}>Criar Lembrete</Text>
      {lembreteCriado &&
        <Text style={styles.succes}>Tarefa Criada</Text>
      }
      <View style={{ display: 'flex', flexDirection: 'row', width: '90%', marginLeft: '30%',marginVertical: 30 , padding: 0}}>
        <RNDateTimePicker
          style={{backgroundColor: '#fff'}}
          value={date}
          mode="date"
          display="calendar"
          onChange={handleDateChange}
        />
        <RNDateTimePicker
          style={{backgroundColor: '#fff'}}    
          value={time}
          mode="time"
          display="calendar"
          onChange={handleTimeChange}
        />
      </View>
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

export default LembretePostScreen;
