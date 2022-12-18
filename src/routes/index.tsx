import React from "react";
import { StatusBar } from "expo-status-bar";

import { StackRoutes } from "./stack.routes";
import { useTheme } from "../context/ThemeContext";

export function Routes() {
	const { theme } = useTheme();
	return (
		<>
			<StatusBar style={theme.dark ? "light" : "dark"} translucent />
			<StackRoutes />
		</>
	);
}
