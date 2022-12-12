import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import users from "../../../userList.json";

import IconButton from "../../components/IconButton";
import { UserItem } from "../../components/UserItem";

import { Container } from "./style";
import { Alert } from "react-native";

export function Details(){
	const navigation = useNavigation();

	const	handleNewUser = () => {
		navigation.navigate("new");
	};

	const handleEditUser = (id: number) => {
		navigation.navigate("edit", { id });
	};

	const handleDeleteUser = (id: number) => {
		Alert.alert("Excluir Usuário", `Tem certeza que deseja excluir o usuário ${id}?`,
			[
				{
					text: "Sim",
					onPress: () => Alert.alert("Usuário Excluído")
				},
				{
					text: "Não"
				},
			] );
	};

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<IconButton
					icon={{
						name: "add",
						size: 32,
						color: "#FFF"
					}}
					onPress={handleNewUser} />
			)
		});
	}, [navigation]);

	return (
		<Container>
			<UserItem
				users={users}
				onEdit={handleEditUser}
				onDelete={handleDeleteUser}
			/>
		</Container>
	);
}
