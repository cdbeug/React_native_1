//import liraries
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const Button = ({ action, children, label }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={action}>
			<Text style={styles.button_text}>
				{children}
				{label}
			</Text>
		</TouchableOpacity>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
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
export default Button;
