import React from "react";
import { FlatList } from "react-native";

import { UserItem } from "./UserItem";

import { Container, ListContainer } from "./styles";
import { User } from "../../database/model/User";
import withObservables from "@nozbe/with-observables";
import { observeUsers } from "../../database/helpers";

interface IUserListProps {
	users: User[];
	onEdit: (userId: string) => void;
	onDelete: (user: User) => void;
}

function UserList({ users, onEdit, onDelete }: IUserListProps) {
	return (
		<Container horizontal={true}>
			<ListContainer>
				<FlatList
					scrollEnabled={false}
					keyExtractor={(user) => user.email}
					data={users}
					renderItem={({ item }) => (
						<UserItem user={item} onEdit={onEdit} onDelete={onDelete} />
					)}
				/>
			</ListContainer>
		</Container>
	);
}

const enhanceWithUsers = withObservables([], () => ({
	users: observeUsers()
}));

export default enhanceWithUsers(UserList);
