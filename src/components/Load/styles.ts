import styled from "styled-components/native";

export const LoadingIndicator = styled.ActivityIndicator.attrs(
	({ theme, color }) => ({
		color: color ?? theme.colors.disabled
	})
)`
	flex: 1;
	justify-content: center;
	align-items: center;
`;
