import React from "react";
import { useRoute } from "@react-navigation/native";
import { Container } from "./styles";

interface IEditProps {
  id: number;
}

export function Edit() {
	const route = useRoute();
	const { id } = route.params as IEditProps;

	return(
		<Container>
		</Container>
	);

}
