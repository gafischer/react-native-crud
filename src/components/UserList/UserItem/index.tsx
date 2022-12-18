import React from "react";
import IconButton from "../../IconButton";
import { useTheme } from "styled-components/native";

import getGithubProfileImage from "../../../utl/githubProfileImage";
import { IUserProps } from "../../UserList";
import {
	Container,
	Content,
	Action,
	UserName,
	UserEmail,
	UserAvatar
} from "./styles";

interface IUserItemProps {
	user: IUserProps;
	onEdit: (id: number) => void;
	onDelete: (id: number) => void;
}

export function UserItem({ user, onDelete, onEdit }: IUserItemProps) {
	const theme = useTheme();

	return (
		<Container>
			<UserAvatar source={{ uri: getGithubProfileImage(user.github) }} />
			<Content>
				<UserName>{user.name}</UserName>
				<UserEmail>{user.email}</UserEmail>
			</Content>
			<Action>
				<IconButton
					onPress={() => onEdit(user.id)}
					icon={{
						name: "edit",
						size: 24,
						color: theme.colors.text
					}}
				/>
			</Action>
			<Action>
				<IconButton
					onPress={() => onDelete(user.id)}
					icon={{
						name: "delete",
						size: 24,
						color: theme.colors.error
					}}
				/>
			</Action>
		</Container>
	);
}
