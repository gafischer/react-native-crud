import React, {
	useContext,
	useMemo,
	useState,
	createContext,
	useEffect
} from "react";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import themes from "../theme";
import { getData, storeData } from "../database/helpers";

export type Theme = typeof themes["light"];

export type ThemeType = {
	mode?: "dark" | "light";
	system?: boolean;
};

export interface ThemeContextValue {
	theme: Theme;
	themeType: ThemeType;
	updateTheme: (theme: ThemeType) => void;
}

export interface ThemeContextProviderProps {
	children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextValue>({
	theme: themes["light"],
	themeType: { mode: "light", system: false },
	updateTheme: () => ({})
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeContextProvider = ({
	children
}: ThemeContextProviderProps) => {
	const colorScheme = useColorScheme();
	const [themeType, setThemeType] = useState<ThemeType>({
		mode: colorScheme ?? "light",
		system: colorScheme ? true : false
	});

	useEffect(() => {
		const fetchStoredTheme = async () => {
			try {
				let activeTheme = await getData("currentTheme");

				if (!activeTheme || activeTheme.system) {
					activeTheme = { mode: colorScheme, system: true };
				}

				updateTheme(activeTheme);
			} catch ({ message }) {
				alert(`fetchStoredTheme ${message}`);
			}
		};

		fetchStoredTheme();
	}, [colorScheme]);

	const theme = useMemo(() => {
		return {
			dark: themes["dark"],
			light: themes["light"]
		}[themeType.mode];
	}, [themeType]);

	const updateTheme = async (newTheme: ThemeType) => {
		if (newTheme.system) {
			newTheme = { mode: colorScheme, ...newTheme };
		} else {
			newTheme = { ...newTheme, system: false };
		}
		setThemeType(newTheme);
		storeData("currentTheme", newTheme);
	};

	return (
		<NavigationContainer theme={theme}>
			<ThemeProvider theme={theme}>
				<ThemeContext.Provider
					value={{
						theme,
						themeType,
						updateTheme
					}}
				>
					{children}
				</ThemeContext.Provider>
			</ThemeProvider>
		</NavigationContainer>
	);
};
