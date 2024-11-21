"use client";

import { FC } from "react";
import { HeadingProps } from "./Heading.types";

export const Heading: FC<HeadingProps> = ({ as, children }): JSX.Element => {
	switch (as) {
		case "h1":
			return <h1 className="text-6xl">{children}</h1>;
		case "h2":
			return <h2 className="text-6xl">{children}</h2>;
		case "h3":
			return <h3 className="text-3xl">{children}</h3>;
		case "h4":
			return <h4 className="text-xl font-semibold font-primary">{children}</h4>;
		case "h5":
			return <h5 className="text-base">{children}</h5>;
		case "h6":
			return <h6 className="text-sm">{children}</h6>;
		default:
			return <></>;
	}
};
