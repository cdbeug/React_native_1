import { View, Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"
import Profil from '../screens/Profil/Profil';
import Cam from '../screens/Cam/Cam';
import { colors } from '../../styles/colors';
const Pile = createStackNavigator();

// create a component
const ProfilsStacks = () => {
	return (
		<Pile.Navigator screenOptions={{
			headerStyle: { backgroundColor: colors.primaryColor },
			headerTitleStyle: { color: colors.lightColor },
		}}
		>
			<Pile.Screen
				name="profil"
				component={Profil}
				options={{
					title: "Votre page de profil",
				}}
			/>
			<Pile.Screen
				name="camera"
				component={Cam}
				options={{
					title: "Prenez une photo",
				}}
			/>
		</Pile.Navigator>
	);
};

export default ProfilsStacks;
