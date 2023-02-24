import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const Cam = () => {
	const [permission, requestPermission] = Camera.useCameraPermissions();
	const [cameraType, setCameraType] = useState(CameraType.back);

	let size = Dimensions.get("window");
	const largeurCamera = size.width;
	const hauteurCamera = (size.width * 16) / 9;

	useEffect(() => {
		if (permission && permission.status != "granted") {
			requestPermission();
		}
	}, [permission]
	);

	function toggleCameraType() {
		setCameraType(cameraType === CameraType.back ? CameraType.front : CameraType.back);
	}

	console.log(permission);
	if (!permission) {
		return <Text>Veuillez  autoriser la camera</Text>
	}

	if (!permission.granted) {
		return <Text>Vous avez refusé l'utilisation de la caméra</Text>
	}

	return (
		<View style={styles.container}>
			<Camera type={cameraType} ratio="16.9"
				style={{ width: largeurCamera, height: hauteurCamera }}
			>
				<View style={styles.buttons}>
					<TouchableOpacity onPress={toggleCameraType}>
						<MaterialIcons name="flip-camera-android" size={24} color="red" />
					</TouchableOpacity>
					<TouchableOpacity>
						<MaterialIcons name="camera" size={24} color="green" />
					</TouchableOpacity>
				</View>
			</Camera>
		</View >
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%"
	},
	buttons: {
		display: "flex",
		flexDirection: "row",
		width: "75%",
		alignSelf: "center",
		justifyContent: "space-around",
		alignItems: "center",
		position: "absolute",
		bottom: 100,
	}
});

export default Cam;
