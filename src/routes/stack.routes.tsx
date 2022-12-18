import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "../context/ThemeContext";

import { Details } from "../screens/Details";
import { Settings } from "../screens/Settings";
import { Edit } from "../screens/Edit";
import { New } from "../screens/New";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
	const { theme } = useTheme();
	return (
		<Navigator
			screenOptions={{
				headerTitleAlign: "center",
				headerBackTitleVisible: false,
				headerTintColor: theme.colors.text,
				headerTitleStyle: {
					fontWeight: "bold"
				}
			}}
		>
			<Screen
				name="home"
				component={Details}
				options={() => ({
					title: "Lista de Usuários"
				})}
			/>
			<Screen
				name="settings"
				component={Settings}
				options={{
					title: "Configurações"
				}}
			/>
			<Screen
				name="new"
				component={New}
				options={{
					title: "Inserir Usuário"
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
