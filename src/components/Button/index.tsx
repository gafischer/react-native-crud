import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Load } from "../Load";
import { StyledButton, Title } from "./styles";

interface IButtonProps extends TouchableOpacityProps {
	title: string;
	isLoading?: boolean;
}

export function Button({ title, isLoading, ...props }: IButtonProps) {
	return (
		<StyledButton disabled={isLoading} {...props}>
			{isLoading ? <Load /> : <Title>{title}</Title>}
		</StyledButton>
	);
}
