"use client";

import { FC } from "react";
import { ContainerProps } from "./Container.types";

export const Container: FC<ContainerProps> = ({
	children,
	relative = false,
	size = "1280px",
}): JSX.Element => {
	return (
		<div
			className={`mx-auto px-5 sm:px-6 md:px-5 ${relative ? "relative" : ""}`}
			style={{ maxWidth: size }}
		>
			{children}
		</div>
	);
};
