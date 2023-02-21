import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from "react";

import Card from '../../HOC/Card/Card';
import LoginForm from '../../container/LoginForm/LoginForm';
import SignupForm from '../../container/SignupForm/SignupForm';

function Auth() {
	const [isLogin, setIsLogin] = useState(false);

	function inverse_isLogin() {
		setIsLogin(!isLogin);
	}
	let affiche_action_login = (isLogin) ? "Signup" : "Log in";

	return (
		<>
			<Card title="Bienvenue" content="Veuillez vous authentifier">
				{(isLogin) ? <LoginForm /> : <SignupForm />}
			</Card>
			<TouchableOpacity style={styles.touchableOpacity} onPress={inverse_isLogin}>{affiche_action_login}</TouchableOpacity>
		</>
	);
}

// define your styles
const styles = StyleSheet.create({
	container: {
	},
	touchableOpacity: {
		textDecorationLine: 'underline',
		color: 'blue'
	}
});


//make this component available to the app
export default Auth;