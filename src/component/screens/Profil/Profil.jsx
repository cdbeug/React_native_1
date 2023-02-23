import Card from "../../HOC/Card/Card";

import { Text, View } from 'react-native';
import { UserContext } from '../../../component/contexts/UserContext';

import { useContext } from "react";


export default function Profil() {
	const { utilisateur } = useContext(UserContext);

	return (
		<View>
			<Card title={utilisateur.username} content={utilisateur.email}>
				<Text>
					{utilisateur.description ? utilisateur.description : "Veuillez entrer une description..."}
				</Text>
			</Card>
		</View>
	);
}