import Card from "../../HOC/Card/Card";

import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, } from 'react-native';
import { UserContext } from '../../../component/contexts/UserContext';
import defaultImage from '../../../../assets/default_avatar.png'
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../../styles/colors';
import * as ImagePicker from "expo-image-picker";
import { useContext } from "react";

export default function Profil(props) {
	const { utilisateur, setUtilisateur } = useContext(UserContext);

	async function openLibrary() {
		let resultat = await ImagePicker.launchImageLibraryAsync();
		if (!resultat.canceled) {
			setUtilisateur({ ...utilisateur, avatar: resultat.assets[0] });
		}
	}

	function goToCamera() {
		props.navigation.push('camera');
	}

	return (
		<ScrollView>
			<Card title={utilisateur.username} content={utilisateur.email}>
				<View style={styles.imagesContainer}>
					<Image
						style={{ width: 300, height: 300 }}
						source={utilisateur.avatar ? utilisateur.avatar : defaultImage}
					/>
					<View style={styles.buttonContainer}>
						<TouchableOpacity onPress={openLibrary}>
							<MaterialIcons name="photo-library" size={50} color={colors.primaryColor} />
						</TouchableOpacity>
						<TouchableOpacity onPress={goToCamera}>
							<MaterialIcons name="photo-camera" size={50} color={colors.primaryColor} />
						</TouchableOpacity>
					</View>
				</View>
				<Text>
					{utilisateur.description ? utilisateur.description : "Veuillez entrer une description..."}
				</Text>
			</Card>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	imageContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	buttonContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: "hsl(0, 0%, 85%)",
		width: 300,
		paddingVertical: 10,
		marginVertical: 10,
		borderRadius: 10,
	},
	image: {
		borderRadius: 150,
	},
});