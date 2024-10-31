"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationProps, NavigationItemProps } from "./Navigation.types";

export const Navigation: FC<NavigationProps> = ({
	id,
	label,
	menu,
}): JSX.Element => {
	const pathname = usePathname();

	return (
		<nav
			aria-label={label}
			className="site-navigation"
			id={id}
			role="navigation"
		>
			<ul className="hidden p-0 m-0 list-none md:flex">
				{menu &&
					menu.map((item: NavigationItemProps) => (
						<li className="mr-6 leading-6 last:mr-0" key={item.id}>
							<Link
								className={`relative group text-black font-primary font-medium text-sm hover:text-opacity-100`}
								href={item.href}
							>
								{item.label}
								<span
									className={`absolute left-0 bottom-[-4px] w-0 h-[3px] bg-gold transition-all duration-300 ease-in-out group-hover:w-full ${
										pathname === item.href ? "w-full" : ""
									}`}
								></span>
							</Link>
						</li>
					))}
			</ul>
		</nav>
	);
};
