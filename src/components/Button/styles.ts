import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const StyledButton = styled(TouchableOpacity)`
	background-color: ${({ theme }) => theme.colors.primary};
	height: 48px;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	margin-top: 12px;
`;

export const Title = styled.Text`
	color: #fff;
	font-weight: bold;
	font-size: 16px;
`;
