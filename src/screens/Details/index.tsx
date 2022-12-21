import React, { useEffect } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { User } from "../../database/model/User";
import { useTheme } from "../../context/ThemeContext";

import IconButton from "../../components/IconButton";
import UserList from "../../components/UserList";

import { Container } from "./style";
import { deleteUser } from "../../database/helpers";

export function Details() {
	const navigation = useNavigation();
	const { theme } = useTheme();

	const handleNewUser = () => {
		navigation.navigate("new");
	};

	const handleSettins = () => {
		navigation.navigate("settings");
	};

	const handleEditUser = (userId: string) => {
		navigation.navigate("edit", { userId });
	};

	const handleDeleteUser = (user: User) => {
		Alert.alert(
			"Excluir Usuário",
			`Tem certeza que deseja excluir permanentemente o usuário ${user.name}?`,
			[
				{
					text: "Sim",
					onPress: async () => {
						try {
							await deleteUser(user);

							Alert.alert("Sucesso", "Usuário excluído com sucesso!");
						} catch (error) {
							Alert.alert(
								"Erro",
								`Não foi possível excluir o usuário. ${error}`
							);
						}
					}
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
			<UserList onEdit={handleEditUser} onDelete={handleDeleteUser} />
		</Container>
	);
}
