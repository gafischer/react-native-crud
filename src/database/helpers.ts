import { User } from "./model/User";
import { database } from "../services/watermelondb";

const users = database.collections.get<User>("users");

export const observeUsers = () =>
	users.query().observeWithColumns(["name", "email", "github"]);

export const getUserById = async (userId: string) => {
	return await users.find(userId);
};

export const addUser = async (user: User) => {
	await database.write(async () => {
		await users.create((entry) => {
			(entry.name = user.name),
				(entry.email = user.email),
				(entry.github = user.github);
		});
	});
};

export const updateUser = async (userId: string, data: User) => {
	const user = await users.find(userId);

	await database.write(async () => {
		await user.update((user) => {
			(user.name = data.name),
				(user.email = data.email),
				(user.github = data.github);
		});
	});
};

export const deleteUser = async (user: User) => {
	await database.write(async () => {
		await user.destroyPermanently();
	});
};

export const storeData = async (key: string, value) => {
	try {
		const jsonValue = JSON.stringify(value);
		await database.adapter.setLocal(key, jsonValue);
	} catch ({ message }) {
		alert(message);
	}
};

export const getData = async (key: string) => {
	try {
		const jsonValue = await database.adapter.getLocal(key);
		return jsonValue ? JSON.parse(jsonValue) : null;
	} catch ({ message }) {
		alert(message);
	}
};
