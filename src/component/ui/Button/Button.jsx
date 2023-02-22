//import liraries
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const Button = ({ action, children, label }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={action}>
			<Text style={styles.button_text}>
				<View style={styles.icone}>{children}</View>
				<Text style={styles.button_text}>{label}</Text>
			</Text>
		</TouchableOpacity>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
	},

	button: {
		display: "flex",
		flexDirection: "row",
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
	icone: {
	},
	button_text: {
		display: "flex",
		flexDirection: "row",
		justifyContent: 'center',
		textAlign: 'center',
		alignItems: 'center',
		color: 'white',
		marginLeft: '5%',
	}
});

//make this component available to the app
export default Button;
