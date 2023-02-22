//import liraries
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Card = ({ title, content, children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.article}>{content}</Text>
			<View style={styles.children}>
				{children}
			</View>
		</View>
	);
};

// define your styles
const styles = StyleSheet.create({
	container: {
	},
	title: {
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		backgroundColor: '#4a6070',
		color: 'white',
		fontWeight: 'bold',
		fontSize: 30,
		width: '100%',
		textAlign: 'center'
	},
	article: {
		backgroundColor: '#4a6070',
		color: 'white',
		fontSize: 18,
		textAlign: 'center',
		paddingTop: 5,
		paddingBottom: 15
	},
	children: {
		backgroundColor: 'white',
		paddingTop: 15,
		paddingBottom: 15
	}
});

//make this component available to the app
export default Card;
