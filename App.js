import { StatusBar } from 'expo-status-bar';
import { ScrollView, Button, StyleSheet, Text, View } from 'react-native';
import { useState } from "react";
import Auth from './src/component/screens/Auth/Auth';
import Profil from './src/component/screens/Profil/Profil';
import { UserContext } from './src/component/contexts/UserContext';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ utilisateur: user, setUtilisateur: setUser, prenom: "samy" }}>
      <ScrollView style={classes.container}>
        {(user === null) ? <Auth /> : <Profil />}
        <StatusBar style="auto" />
      </ScrollView>
    </UserContext.Provider>
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
    width: "100%",
  },

  texte: {
    color: "green",
  },
});
