import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from "react";

import Card from '../../HOC/Card/Card';
import LoginForm from '../../container/LoginForm/LoginForm';
import SignupForm from '../../container/SignupForm/SignupForm';

function Auth() {
	const [isLogin, setIsLogin] = useState(true);

	function inverse_isLogin() {
		setIsLogin(!isLogin);
	}
	let affiche_action_login = (isLogin) ? "Pas encore inscrit ? Inscrivez-vous !" : "Se connecter";
	let affiche_titre_login = (isLogin) ? "Connexion" : "Inscription";
	let affiche_message_login = (isLogin) ? "authentifier" : "inscrire";

	return (
		<>
			<Card title={affiche_titre_login} content={"Veuillez vous " + affiche_message_login}>
				{(isLogin) ? <LoginForm /> : <SignupForm />}
			</Card>
			<TouchableOpacity style={styles.touchableOpacity} onPress={inverse_isLogin}>
				<Text>
					{affiche_action_login}
				</Text>
			</TouchableOpacity>
		</>
	);
}

// define your styles
const styles = StyleSheet.create({
	container: {
	},
	touchableOpacity: {
		textDecorationLine: 'underline',
		color: 'royalblue'
	}
});


//make this component available to the app
export default Auth;