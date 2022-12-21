import React from "react";

import { useTheme } from "styled-components/native";
import { User } from "../../../database/model/User";

import IconButton from "../../IconButton";

import {
	Container,
	Content,
	Action,
	UserName,
	UserEmail,
	UserAvatar
} from "./styles";

interface IUserItemProps {
	user: User;
	onEdit: (userId: string) => void;
	onDelete: (user: User) => void;
}

export function UserItem({ user, onDelete, onEdit }: IUserItemProps) {
	const theme = useTheme();

	const getGithubProfileImage = (username?: string) => {
		if (!username) {
			return "https://www.account.p3heavenlybeauty.com/images/noProfilePlaceholder.png";
		}

		return `https://github.com/${username}.png`;
	};

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
					onPress={() => onDelete(user)}
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
