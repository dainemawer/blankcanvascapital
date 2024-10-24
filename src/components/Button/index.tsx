"use client";

import { FC } from "react";
import Link from "next/link";
import { ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({
	className = "",
	children = null,
	href = "",
	id = "",
	type = "button",
}): JSX.Element => {
	if (!href) {
		return (
			<button
				className={`self-start bg-white border-2 border-gold rounded-md text-gold cursor-pointer font-primary text-base font-semibold py-3.5 px-6 uppercase transition-all duration-300 ease-in-out hover:bg-gold hover:text-white focus:bg-gold focus:text-white ${className}`}
				id={id}
				type={type}
			>
				{children}
			</button>
		);
	}

	return (
		<Link
			className="button self-start bg-white border-2 border-gold rounded-md text-gold cursor-pointer font-primary text-base font-semibold py-3.5 px-6 uppercase transition-all duration-300 ease-in-out hover:bg-gold hover:text-white focus:bg-gold focus:text-white"
			href={href}
		>
			{children}
		</Link>
	);
};
