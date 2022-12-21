import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

import { User } from "../../database/model/User";
import { getUserById, updateUser } from "../../database/helpers";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container } from "./styles";

interface IEditProps {
	userId: string;
}

interface IFormProps {
	name: string;
	email: string;
	github: string;
}

export function Edit() {
	const route = useRoute();
	const { userId } = route.params as IEditProps;
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState<User>({} as User);

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IFormProps>({
		defaultValues: {
			name: "",
			email: "",
			github: ""
		}
	});

	useEffect(() => {
		const fetchUser = async () => {
			const findUser = await getUserById(userId);

			setUser(findUser);
		};

		fetchUser();
	}, []);

	useEffect(() => {
		const { name, email, github } = user;

		reset({
			name,
			email,
			github
		});
	}, [user]);

	const handleSave = async (data: IFormProps) => {
		try {
			setIsLoading(true);

			await updateUser(userId, data as User);

			Alert.alert("Sucesso", "Usuário alterado com sucesso!");
		} catch (error) {
			Alert.alert("Erro", `Não foi possível salvar as alterações. ${error}`);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Container>
			<Controller
				control={control}
				name="name"
				rules={{
					required: "Informe o nome",
					minLength: {
						value: 5,
						message: "Mínimo 5 caracteres"
					}
				}}
				render={({ field: { onChange, value } }) => (
					<Input
						placeholder="Nome"
						icon="person-outline"
						editable={true}
						value={value}
						onChangeText={onChange}
						errorMessage={errors.name?.message}
					/>
				)}
			/>

			<Controller
				control={control}
				name="email"
				rules={{
					required: "Informe o e-mail",
					pattern: {
						value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
						message: "E-mail inválido"
					}
				}}
				render={({ field: { onChange, value } }) => (
					<Input
						placeholder="E-mail"
						value={value}
						icon="mail-outline"
						onChangeText={onChange}
						errorMessage={errors.email?.message}
					/>
				)}
			/>

			<Controller
				control={control}
				name="github"
				render={({ field: { onChange, value } }) => (
					<Input
						placeholder="Github"
						icon="logo-github"
						value={value}
						onChangeText={onChange}
					/>
				)}
			/>

			<Button
				title="Salvar"
				onPress={handleSubmit(handleSave)}
				isLoading={isLoading}
			/>
		</Container>
	);
}
