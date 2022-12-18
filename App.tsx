import React from "react";
import { ThemeContextProvider } from "./src/context/ThemeContext";

import { Routes } from "./src/routes";

export default function App() {
	return (
		<ThemeContextProvider>
			<Routes />
		</ThemeContextProvider>
	);
}
