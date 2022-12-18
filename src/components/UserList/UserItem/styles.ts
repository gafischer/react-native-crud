import styled from "styled-components/native";

export const Container = styled.View`
	flex-direction: row;
	align-items: center;
	height: 60px;
	padding: 0 12px;
	margin-bottom: 4px;
	background-color: ${({ theme }) => theme.colors.main};
`;

export const Content = styled.View`
	flex: 1;
	margin-left: 8px;
`;

export const Action = styled.View`
	flex-direction: row;
	margin-left: 12px;
`;

export const UserAvatar = styled.Image`
	width: 40px;
	height: 40px;
	border-radius: 30px;
`;

export const UserName = styled.Text`
	font-weight: bold;
	font-size: 16px;
	color: ${({ theme }) => theme.colors.text};
`;

export const UserEmail = styled.Text`
	font-size: 12px;
	color: ${({ theme }) => theme.colors.grey3};
`;
