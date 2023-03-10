import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Platform, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons';



export const DatePicker = (onDataChange: any) => {

    const [data, setData] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [textTitulo, setTextTitulo] = useState('');

    const handleDataChange = (evento: any, novaData?: Date) => {
        setShowPicker(Platform.OS === 'ios');
        if (novaData) {
            setData(novaData);
            setShowPicker(false);
            onDataChange(novaData);
            getData(data)
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
        <>
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
        </>
    )
}

export const getData = (data : Date) => {
    return "data.toString()";
}

const styles = StyleSheet.create({

    inputTitulo: {
        backgroundColor: 'white',
        width: '90%',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },

    buttonData: {
        marginTop: 10,
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#1F1B24',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10
    },
    datePicker: {
        backgroundColor: "white",
        marginVertical: 10,

    }

});