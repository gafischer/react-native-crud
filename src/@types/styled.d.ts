import "styled-components/native";

declare module "styled-components/native" {
	export interface DefaultTheme {
		dark: boolean;
		colors: {
			primary: string;
			secondary: string;
			background: string;
			main: string;
			text: string;
			grey0: string;
			grey1: string;
			grey2: string;
			grey3: string;
			grey4: string;
			grey5: string;
			border: string;
			search_bg: string;
			card: string;
			notification: string;
			success: string;
			error: string;
			warning: string;
			disabled: string;
		};
	}
}
