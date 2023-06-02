import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Link } from "expo-router";
import { Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
     <Image source={require('../src/img/imagemaleatoria.png')}/>
      <Text style={styles.titulo}>APP ZAQUE</Text>
      <StatusBar style="auto" />
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
  }
});
