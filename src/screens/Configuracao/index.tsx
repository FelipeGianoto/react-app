import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  return (
    <View style={[styles.container]}>
      <Text style={[styles.title]}>Configurações</Text>
      <View style={styles.switchContainer}>
        <Text style={[styles.label]}>Modo escuro</Text>
        <Switch
        trackColor={{false: '#767577', true: '#00000'}}
        thumbColor={isEnabled ? '#ffffff' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
  },
  label: {
    marginVertical: 14,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;