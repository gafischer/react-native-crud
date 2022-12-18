import styled, { css } from "styled-components/native";
import { TextInput, TextInputProps } from "react-native";

interface IInputContainerProps {
	error?: boolean;
	isFocused: boolean;
}

export const InputContainer = styled.View<IInputContainerProps>`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	margin-bottom: 12px;
	padding-left: 12px;
	height: 60px;
	background-color: ${({ theme }) => theme.colors.main};

	${({ isFocused }) =>
		isFocused
			? css`
					border-bottom-width: 2px;
					border-bottom-color: ${({ theme }) => theme.colors.primary};
			  `
			: false}
`;

export const StyledInput = styled(TextInput).attrs<TextInputProps>(
	({ theme }) => ({
		placeholderTextColor: theme.colors.grey4
	})
)`
	flex: 1;
	height: 60px;
	margin-left: 12px;
	font-size: 16px;
	color: ${({ theme }) => theme.colors.text};
`;

export const ErrorContainer = styled.View`
	margin-top: -4px;
	margin-bottom: 8px;
`;

export const ErrorMessage = styled.Text`
	color: ${({ theme }) => theme.colors.error};
	margin-left: 12px;
`;
