import React from "react";
import { useRoute } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

import { Input } from "../../components/Input";

import { Container } from "./styles";

import config from "../../../config.json";
import { Button } from "../../components/Button";

interface IEditProps {
	id: number;
}

interface IFormProps {
	name: string;
	email: string;
	github: string;
}

export function Edit() {
	const route = useRoute();

	const { id } = route.params as IEditProps;

	const user = config.users.find((user) => user.id === id);

	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm<IFormProps>({
		defaultValues: {
			name: user.name,
			email: user.email,
			github: user.github
		}
	});

	const handleEdit = (data) => {
		console.log(data);
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

			<Button title="Salvar" onPress={handleSubmit(handleEdit)} />
		</Container>
	);
}
