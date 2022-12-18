import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Option = styled(TouchableOpacity)`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	padding: 0 24px;
	margin-bottom: 4px;
	background-color: ${({ theme }) => theme.colors.main};
`;

export const Container = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const OptionName = styled.Text`
	color: ${({ theme }) => theme.colors.text};
	margin-left: 16px;
`;
