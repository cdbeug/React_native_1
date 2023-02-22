import eyeSlash from "../../../../assets/eye-slash-solid.svg";
import eye from "../../../../assets/eye-solid.svg";

import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function InputWithError({
	holder,
	valeur,
	action,
	errorMessage,
	type,
	isPassword
}) {
	const [showPassword, setShowPassword] = useState(isPassword)

	function togglePassword() {
		setShowPassword(!showPassword)
	}
	return (
		<View style={styles.container}>
			<TextInput
				placeholder={holder}
				onChangeText={action}
				value={valeur}
				keyboardType={type}
				secureTextEntry={showPassword}
			/>
			<Text style={styles.error}>{errorMessage}</Text>
		</View>
	);
}

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