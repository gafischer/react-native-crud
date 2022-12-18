import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	padding: 12px 24px;
`;

export const Section = styled.View`
	border-radius: 32px;
	overflow: hidden;
	margin: 16px 0;
`;

export const SectionTitle = styled.Text`
	color: ${({ theme }) => theme.colors.primary};
	font-weight: bold;
	font-size: 16px;
`;
