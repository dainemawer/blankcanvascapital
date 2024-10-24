"use client";

import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";

type ActiveLinkProps = LinkProps & {
	activeClassName: string;
	className?: string;
};

const ActiveLink = ({
	activeClassName,
	children,
	className = "",
	...props
}: PropsWithChildren<ActiveLinkProps>) => {
	const pathname = usePathname();
	const linkPathname = (props.as || props.href) as string;

	const isActive = pathname === linkPathname;
	const computedClassName = `${className} ${
		isActive ? activeClassName : ""
	}`.trim();

	return (
		<Link className={computedClassName} {...props}>
			{children}
		</Link>
	);
};

export default ActiveLink;
