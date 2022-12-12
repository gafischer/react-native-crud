import { Avatar, ListItem } from "@rneui/base";
import React from "react";

import IconButton from "../IconButton";

import { Container, UserEmail, UserName } from "./styles";

interface IUserItemProps {
  users: IUserProps[],
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

interface IUserProps {
    id: number,
    name: string,
    email: string,
    avatarUrl: string
}

export function UserItem({ users, onEdit, onDelete }: IUserItemProps ) {
	return (
		<Container>
			{users.map((user) => (
				<ListItem key={user.id} bottomDivider>
					<Avatar source={{uri: user.avatarUrl}} rounded />
					<ListItem.Content>
						<UserName>{user.name}</UserName>
						<UserEmail>{user.email}</UserEmail>
					</ListItem.Content>
					<IconButton
						icon={{
							name: "edit",
							size: 28,
							color: "#000000"
						}}
						onPress={() => onEdit(user.id)}
					/>
					<IconButton
						icon={{
							name: "delete",
							size: 28,
							color: "#FF0000"
						}}
						onPress={() => onDelete(user.id)} />
				</ListItem>
			))}
		</Container>
	);
}
