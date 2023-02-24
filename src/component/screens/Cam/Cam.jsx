import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { useContext, useState, useRef, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { UserContext } from '../../contexts/UserContext';

const Cam = (props) => {
	const context = useContext(UserContext);
	const [permission, requestPermission] = Camera.useCameraPermissions();
	const [cameraType, setCameraType] = useState(CameraType.back);

	let size = Dimensions.get("window");
	const largeurCamera = size.width;
	const hauteurCamera = (size.width * 16) / 9;
	const cameraRef = useRef();

	useEffect(() => {
		if (permission && permission.status != "granted") {
			requestPermission();
		}
	}, [permission]
	);

	function toggleCameraType() {
		setCameraType(cameraType === CameraType.back ? CameraType.front : CameraType.back);
	}

	async function takePick() {
		let image = await cameraRef.current.takePictureAsync();
		context.setUtilisateur({ ...context.utilisateur, avatar: image });
		props.navigation.pop();
	}

	if (!permission) {
		return <Text>Veuillez  autoriser la camera</Text>
	}

	if (!permission.granted) {
		return <Text>Vous avez refusé l'utilisation de la caméra</Text>
	}

	return (
		<View style={styles.container}>
			<Camera
				ref={cameraRef}
				type={cameraType}
				ratio="16:9"
				style={{ width: largeurCamera, height: hauteurCamera }}
			>
				<View style={styles.buttons}>
					<TouchableOpacity onPress={toggleCameraType}>
						<MaterialIcons name="flip-camera-android" size={24} color="red" />
					</TouchableOpacity>
					<TouchableOpacity onPress={takePick}>
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
