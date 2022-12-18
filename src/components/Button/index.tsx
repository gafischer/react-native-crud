import React from "react";
import { TouchableOpacityProps } from "react-native";
import { StyledButton, Title } from "./styles";

interface IButtonProps extends TouchableOpacityProps {
	title: string;
}

export function Button({ title, ...props }: IButtonProps) {
	return (
		<StyledButton {...props}>
			<Title>{title}</Title>
		</StyledButton>
	);
}
