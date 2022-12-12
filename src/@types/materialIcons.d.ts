import { MaterialIcons } from "@expo/vector-icons";

export declare global {
  type MaterialIconName = React.ComponentProps<typeof MaterialIcons>["name"];
}
