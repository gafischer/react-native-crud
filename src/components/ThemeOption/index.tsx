import React from "react";
import { TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "../../context/ThemeContext";

import { Option, Container, OptionName } from "./styles";

interface IThemeOptionProps extends TouchableOpacityProps {
	label: string;
	icon: MaterialCommunityIconsName;
	isActive: boolean;
}

export function ThemeOption({
	label,
	icon,
	isActive,
	...props
}: IThemeOptionProps) {
	const { theme } = useTheme();

	return (
		<Option {...props}>
			<Container>
				<MaterialCommunityIcons
					name={icon}
					size={24}
					color={theme.colors.text}
				/>
				<OptionName>{label}</OptionName>
			</Container>
			<MaterialCommunityIcons
				name={
					isActive ? "checkbox-marked-circle" : "checkbox-blank-circle-outline"
				}
				size={24}
				color={isActive ? theme.colors.primary : theme.colors.text}
			/>
		</Option>
	);
}
