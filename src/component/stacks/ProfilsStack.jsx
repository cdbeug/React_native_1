import { View, Text } from 'react-native';

const Pile = createStackNavigator();

// create a component
const ProfilsStacks = () => {
	return (
		<Pile.Navigator>
			<Pile.screen name="profil" component={Profil}></Pile.screen>
			<Pile.screen name="camera" component={Cam}></Pile.screen>
		</Pile.Navigator>
	);
};

export default ProfilsStacks;
