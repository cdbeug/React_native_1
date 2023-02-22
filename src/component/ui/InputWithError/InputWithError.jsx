import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { useState } from 'react';

export default function InputWithError({
	holder,
	valeur,
	action,
	errorMessage,
	type,
	isPassword
}) {
	const [eye_eye_off, setEye_eye_off] = useState("eye");


	const [showPassword, setShowPassword] = useState(isPassword)

	const couleurBordure =
		errorMessage == ""
			? "green"
			: errorMessage == undefined
				? colors.primaryColor
				: "red";

	function togglePassword() {
		setShowPassword(!showPassword)
		setEye_eye_off((!showPassword) ? "eye" : "eye-off");
	}
	return (
		<View style={styles.container}>
			<View style={[styles.inputContainer, { borderBottomColor: couleurBordure }]}>
				<TextInput
					style={[styles.input]}
					placeholder={holder}
					onChangeText={action}
					value={valeur}
					keyboardType={type}
					secureTextEntry={showPassword}
				/>
				{isPassword && (
					<TouchableOpacity onPress={togglePassword}>
						<Feather name={eye_eye_off} size={24} color="black" />
					</TouchableOpacity>
				)}
			</View>
			<Text style={styles.error}>{errorMessage}</Text>
		</View>
	);
}

// define your styles
const styles = StyleSheet.create({
	container: {
	},
	input: {
		width: "100%",
		outlineStyle: "none",
		backgroundColor: "transparent",
	},
	error: {
		color: "red",
		margin: 5,
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
	inputContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 10,
		margin: 5,
		backgroundColor: "white",
		borderRadius: 5,
	},
});