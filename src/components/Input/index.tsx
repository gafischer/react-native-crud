import React, { useEffect, useState } from "react";
import { TextInputProps } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

import {
	InputContainer,
	StyledInput,
	ErrorContainer,
	ErrorMessage
} from "./styles";

interface IInputProps extends TextInputProps {
	icon: IoniconsName;
	errorMessage?: string;
	value?: string;
}

export function Input({ icon, errorMessage, value, ...props }: IInputProps) {
	const theme = useTheme();
	const [isFocused, setIsFocused] = useState(false);
	const [isFilled, setIsFilled] = useState(!!value);

	const handleInputFocus = () => {
		setIsFocused(true);
	};

	const handleInputBlur = () => {
		setIsFocused(false);
		setIsFilled(!!value);
	};

	useEffect(() => {
		setIsFilled(!!value);
	}, [value]);

	return (
		<>
			<InputContainer error={errorMessage ? true : false} isFocused={isFocused}>
				<Ionicons
					name={icon}
					size={24}
					color={
						isFocused || isFilled ? theme.colors.primary : theme.colors.grey4
					}
				/>
				<StyledInput
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
					value={value}
					{...props}
				/>
			</InputContainer>
			{errorMessage ? (
				<ErrorContainer>
					<ErrorMessage>{errorMessage}</ErrorMessage>
				</ErrorContainer>
			) : (
				false
			)}
		</>
	);
}
