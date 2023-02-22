//import liraries
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

import Button from '../../ui/Button/Button';
import InputWithError from "../../ui/InputWithError/InputWithError";
import { isEmailValid, isPasswordValid, getEmailError, Error_password } from '../../../Utils/validation';

// create a component
const LoginForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [error_email, setError_email] = useState("");
	const [error_password, setError_password] = useState("");

	function validate() {
		//Vider les messages d'erreurs
		setError_email(getEmailError(email));
		setError_password(Error_password(password));
	}

	if (isEmailValid(email) && isPasswordValid(password)) {

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
				holder="Password"
				valeur={password}
				action={setPassword}
				errorMessage={error_password}
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
export default LoginForm;
