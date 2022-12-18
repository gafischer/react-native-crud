import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { useTheme } from "../../context/ThemeContext";
import config from "../../../config.json";

import IconButton from "../../components/IconButton";
import { UserList } from "../../components/UserList";

import { Container } from "./style";
import { Alert } from "react-native";

export function Details() {
	const navigation = useNavigation();
	const { theme } = useTheme();

	const handleNewUser = () => {
		navigation.navigate("new");
	};

	const handleSettins = () => {
		navigation.navigate("settings");
	};

	const handleEditUser = (id: number) => {
		navigation.navigate("edit", { id });
	};

	const handleDeleteUser = (id: number) => {
		Alert.alert(
			"Excluir Usuário",
			`Tem certeza que deseja excluir o usuário ${id}?`,
			[
				{
					text: "Sim",
					onPress: () => Alert.alert("Usuário Excluído")
				},
				{
					text: "Não"
				}
			]
		);
	};

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton
					icon={{
						name: "add",
						size: 32,
						color: theme.colors.text
					}}
					onPress={handleNewUser}
				/>
			),
			headerLeft: () => (
				<IconButton
					icon={{
						name: "settings",
						size: 28,
						color: theme.colors.text
					}}
					onPress={handleSettins}
				/>
			)
		});
	}, [theme]);

	return (
		<Container>
			<UserList
				users={config.users}
				onEdit={handleEditUser}
				onDelete={handleDeleteUser}
			/>
		</Container>
	);
}
