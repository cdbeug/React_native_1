import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { useEffect } from 'react';

const Cam = () => {
	const [permission, requestPermission] = Camera.useCameraPermissions();
	let size = Dimensions.get("window");
	const largeurCamera = size.width;
	const hauteurCamera = (size.width * 16) / 9;

	useEffect(() => {
		if (permission && permission.status != "granted") {
			requestPermission();
		}
	}, [permission]
	);


	console.log(permission);
	if (!permission) {
		return <Text>Veuillez  autoriser la camera</Text>
	}

	if (!permission.granted) {
		return <Text>Vous avez refusé l'utilisation de la caméra</Text>
	}

	return (
		<View style={styles.container}>
			<Camera ratio="16.9"
				style={{ width: largeurCamera, height: hauteurCamera }}
			></Camera>
		</View >
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%"
	},
});

export default Cam;
