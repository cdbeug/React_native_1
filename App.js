import { StatusBar } from 'expo-status-bar';
import { ScrollView, Button, StyleSheet, Text, View } from 'react-native';
import { useState } from "react";
import Auth from './src/component/screens/Auth/Auth';
import Profil from './src/component/screens/Profil/Profil';
import { UserContext } from './src/component/contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import ProfilsStacks from './src/component/stacks/ProfilsStack';

export default function App() {
  const userFromDb = {
    id: 1,
    email: "sam.djm93@gmail.com",
    username: "Samy",
    avatar: null,
  };
  const [user, setUser] = useState(userFromDb);

  return (
    <UserContext.Provider value={{ avatar: null, utilisateur: user, setUtilisateur: setUser, prenom: "samy" }}>
      <View style={styles.container}>
        <NavigationContainer>
          {(user === null) ? <Auth /> : <ProfilsStacks />}
        </NavigationContainer>
        <StatusBar style="auto" />
      </View>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({ // style par défaut
  container: {
    paddingTop: 50,
    flex: 1,
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
