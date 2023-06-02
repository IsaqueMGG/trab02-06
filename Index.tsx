import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Link } from "expo-router";
import { Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../src/img/imagemaleatoria.png')}/>
      <Text style={styles.titulo}>APP ZAQUE</Text>
      <Text>Um dia, um gato azul encontrou um unicórnio rosa. 
      Eles decidiram ser amigos e explorar o mundo juntos. 
      No caminho, eles viram uma nuvem de algodão doce e uma cachoeira de chocolate. 
      Eles se divertiram muito e viveram felizes para sempre.Um dia, um gato azul encontrou um unicórnio rosa. 
      Eles decidiram ser amigos e explorar o mundo juntos. 
      No caminho, eles viram uma nuvem de algodão doce e uma cachoeira de chocolate. 
      Eles se divertiram muito e viveram felizes para sempre.</Text>
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
    fontSize: 36,
    fontWeight: 'bold',
  },
  Text: {
    fontSize: 2
  }
});
