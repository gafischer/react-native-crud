import React, { useState } from "react";
import { Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";

import { User } from "../../database/model/User";
import { addUser } from "../../database/helpers";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Container } from "./styles";

interface IFormProps {
	name: string;
	email: string;
	github: string;
}

export function New() {
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<IFormProps>();

	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async (data: IFormProps) => {
		try {
			setIsLoading(true);

			await addUser(data as User);

			reset();

			Alert.alert("Sucesso", "Criação realizada com sucesso!");
		} catch (error) {
			Alert.alert("Erro", `Não foi possível criar o usuário. ${error}`);
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
						onChangeText={onChange}
						value={value}
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
						icon="mail-outline"
						onChangeText={onChange}
						value={value}
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
						onChangeText={onChange}
						value={value}
					/>
				)}
			/>

			<Button
				title="Inserir"
				onPress={handleSubmit(onSubmit)}
				isLoading={isLoading}
			/>
		</Container>
	);
}
