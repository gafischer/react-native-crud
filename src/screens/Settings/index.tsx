import React from "react";
import { ThemeOption } from "../../components/ThemeOption";
import { useTheme } from "../../context/ThemeContext";

import { Container, Section, SectionTitle } from "./styles";

export function Settings() {
	const { themeType, updateTheme } = useTheme();
	return (
		<Container>
			<SectionTitle>Configurações de Tema</SectionTitle>
			<Section>
				<ThemeOption
					label="Claro"
					icon="weather-sunny"
					onPress={() => updateTheme({ mode: "light" })}
					isActive={themeType.mode === "light" && !themeType.system}
				/>
				<ThemeOption
					label="Escuro"
					icon="weather-night"
					onPress={() => updateTheme({ mode: "dark" })}
					isActive={themeType.mode === "dark" && !themeType.system}
				/>
				<ThemeOption
					label="Sistema"
					icon="theme-light-dark"
					onPress={() => updateTheme({ system: true })}
					isActive={themeType.system}
				/>
			</Section>
		</Container>
	);
}
