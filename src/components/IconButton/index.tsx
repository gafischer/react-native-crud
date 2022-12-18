import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

interface IIconProps {
	name: MaterialIconsName;
	size: number;
	color: string;
}

interface IIconButtonProps {
	icon?: IIconProps;
	onPress: () => void;
}

function IconButton({ icon, onPress }: IIconButtonProps) {
	return (
		<TouchableOpacity onPress={onPress}>
			{<MaterialIcons name={icon.name} size={icon.size} color={icon.color} />}
		</TouchableOpacity>
	);
}

export default IconButton;
