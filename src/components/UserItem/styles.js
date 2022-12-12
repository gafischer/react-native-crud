import { ListItem } from "@rneui/base";
import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
`;

export const UserName = styled(ListItem.Title)`
	font-size: 16px;
	font-weight: bold;
`;

export const UserEmail = styled(ListItem.Subtitle)`
	font-size: 12px;
	color: #ccc;
`;
