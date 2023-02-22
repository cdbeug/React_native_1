//import liraries
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import Button from '../../ui/Button/Button';
import InputWithError from "../../ui/InputWithError/InputWithError";
import { validationUsername, isEmailValid, isPasswordValid, isConfirmePasswordSameAsPassword } from '../../../Utils/validation';

// create a component
const SignUpForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPasswordPassword] = useState("");
	const [username, setUsername] = useState("");

	const [error_email, setError_email] = useState("");
	const [error_password, setError_password] = useState("");
	const [error_confirmPassword, setError_confirmPassword] = useState("");
	const [usernameError, setUsernameError] = useState("");

	function validate() {
		//Vider les messages d'erreurs
		setError_email(!isEmailValid(email) ? "Email incorrecte!" : "");
		setUsernameError(!validationUsername(username) ? "Username obligatoire!" : "");
		setError_password(!isPasswordValid(password) ? "Mot de passe trop court!" : "");
		setError_confirmPassword(
			isConfirmePasswordSameAsPassword(password, confirmPassword)
				? "Les mots de passes ne sont pas identiques!"
				: ""
		);

	}

	return (
		<View style={styles.container}>
			<InputWithError
				holder="Email"
				valeur={email}
				action={setEmail}
				errorMessage={error_email}
				type="email-adress"
			/>
			<InputWithError
				holder="Username"
				valeur={username}
				action={setUsername}
				errorMessage={usernameError}
				type="default"
			/>
			<InputWithError
				holder="Password"
				valeur={password}
				action={setPassword}
				errorMessage={error_password}
				type="default"
				isPassword={true}
			/>
			<InputWithError
				holder="Please, confirm your password"
				valeur={confirmPassword}
				action={setConfirmPasswordPassword}
				errorMessage={error_confirmPassword}
				type="default"
				isPassword={true}
			/>
			<Button action={validate} label="Connexion">
				<AntDesign name="login" size={24} color="whitesmoke" />
			</Button>
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
		textAlign: 'center',
		color: 'white',
		fontSize: 15,
		marginHorizontal: 10
	}
});

//make this component available to the app
export default SignUpForm;
