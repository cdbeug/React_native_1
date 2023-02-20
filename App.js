import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from "react";
import Auth from './src/component/screens/Auth/Auth';
import Profil from './src/component/screens/Profil/Profil';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <View style={classes.container}>
      {(user === null) ? <Auth /> : <Profil />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({ // style par défaut
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const classes = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: 'white',
    width: "50%",
  },

  texte: {
    color: "green",
  },
});
