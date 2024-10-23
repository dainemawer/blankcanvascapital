"use client";

import { FC } from "react";
import Link from "next/link";
import { StyledButton } from "./Button.styled";
import { ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({
	children = null,
	href = "",
	id = "",
	type = "button",
}): JSX.Element => {
	if (!href) {
		return (
			<StyledButton id={id} type={type}>
				{children}
			</StyledButton>
		);
	}

	return (
		<Link className="button" href={href}>
			{children}
		</Link>
	);
};
