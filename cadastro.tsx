import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";
import { Image } from 'react-native';
import { Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../src/img/imagemaleatoria.png')}/>
      <Text style={styles.titulo}>APP ZAQUE</Text>
      <TextInput placeholder='Nome'/>
      <TextInput placeholder='Email'/>
      <TextInput placeholder='Data de nascimento'/>
      <TextInput placeholder='CPF'/>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.salvar}>
        <Text style={styles.salvar}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 26,
    fontWeight: 'bold',
  },
  TextInput:{
    color: '#fff'
  }
});
