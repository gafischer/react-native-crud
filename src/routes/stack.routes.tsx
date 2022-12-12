import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Details } from "../screens/Details";
import { Edit } from "../screens/Edit";
import { New } from "../screens/New";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
	return (
		<Navigator
			screenOptions={{
				headerTitleAlign: "center",
				headerBackTitleVisible: false,
				headerStyle: {
					backgroundColor: "#1965bd"
				},
				headerTintColor: "#FFF",
				headerTitleStyle: {
					fontWeight: "bold"
				}
			}}>
			<Screen
				name="home"
				component={Details}
				options={() =>({
					title: "Lista de Usuários"
				})}
			/>
			<Screen
				name="new"
				component={New}
				options={{
					title: "Cadastrar Usuário"
				}}
			/>
			<Screen
				name="edit"
				component={Edit}
				options={{
					title: "Editar Usuário"
				}}
			/>
		</Navigator>
	);
}
