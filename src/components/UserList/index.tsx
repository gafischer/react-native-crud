import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import { UserItem } from "./UserItem";

import { Container } from "./styles";

export interface IUserProps {
	id: number;
	name: string;
	email: string;
	github: string;
}

interface IUserListProps {
	users: IUserProps[];
	onEdit: (id: number) => void;
	onDelete: (id: number) => void;
}

export function UserList({ users, onEdit, onDelete }: IUserListProps) {
	const renderItem = ({ item: user }: ListRenderItemInfo<IUserProps>) => (
		<UserItem user={user} onEdit={onEdit} onDelete={onDelete} />
	);

	return (
		<Container>
			<FlatList
				scrollEnabled={false}
				keyExtractor={(user) => user.email}
				data={users}
				renderItem={renderItem}
			/>
		</Container>
	);
}
