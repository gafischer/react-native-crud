import React from "react";

import { LoadingIndicator } from "./styles";

interface ILoadProps {
	color?: string;
}

export function Load({ color }: ILoadProps) {
	return <LoadingIndicator color={color} />;
}
