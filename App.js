import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Text style={{ fontsize: 35 }}>Bonjour !</Text>
      <Button onPress={() => alert("Clique !")} title="Cliques moi">Bonjour !</Button>
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
});

const classes = StyleSheet.create({
  container: {
    width: "50%",
    backgroundColor: "red",
  },

  texte: {
    color: "green",
  },
});
