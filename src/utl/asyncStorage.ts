import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, value) => {
	try {
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem(key, jsonValue);
	} catch ({ message }) {
		alert(message);
	}
};

export const getData = async (key: string) => {
	try {
		const jsonValue = await AsyncStorage.getItem(key);
		return jsonValue ? JSON.parse(jsonValue) : null;
	} catch ({ message }) {
		alert(message);
	}
};
