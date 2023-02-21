//import liraries
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from "react";

function isEmailValid(email) {
	return email.includes("@") && email.includes(".");
}

function isPasswordValid(password) {
	return password.length >= 6;
}

// create a component
const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [error_email, setError_email] = useState("");
	const [error_password, setError_password] = useState("");

	function validate() {
		//Vider les messages d'erreurs
		setError_email(!isEmailValid(email) ? "Email incorrecte!" : "");
		setError_password(!isPasswordValid(password) ? "Mot de passe trop court!" : "");
	}

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Email"
				onChangeText={setEmail}
				value={email}
				keyboardType="text"
			/>
			<Text style={styles.error}>{error_email}</Text>
			<TextInput
				style={styles.input}
				placeholder="Mot de passe"
				onChangeText={setPassword}
				value={password}
				keyboardType="text"
			/>
			<Text style={styles.error}>{error_password}</Text>
			<TouchableOpacity style={styles.button} onPress={validate}>
				<Text style={styles.button_text}>
					Connexion
				</Text>
			</TouchableOpacity>
		</View >
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
	},
	input: {
		// border: 'solid',
	},
	error: {
		color: 'red'
	},
	button: {
		// marginLeft: 216,
		marginLeft: '35%',
		justifyContent: 'center',
		textAlign: 'center',
		alignItems: 'center',

		width: "25%",
		borderRadius: 6,
		backgroundColor: '#061c40',
		padding: 10,
	},
	button_text: {
		color: 'white'
	}
});

//make this component available to the app
export default LoginForm;
