import { MaterialIcons } from "@expo/vector-icons";

export declare global {
	type MaterialIconsName = React.ComponentProps<typeof MaterialIcons>["name"];
	type IoniconsName = React.ComponentProps<typeof Ionicons>["name"];
	type MaterialCommunityIconsName = React.ComponentProps<
		typeof MaterialCommunityIcons
	>["name"];
}
