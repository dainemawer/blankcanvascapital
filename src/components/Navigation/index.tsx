"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationProps, NavigationItemProps } from "./Navigation.types";

const menu = [
	{
		href: "/",
		id: "home",
		label: "Home",
	},
	{
		href: "/about-us",
		id: "about-us",
		label: "About Us",
	},
	{
		href: "/investment-approach",
		id: "investment-approach",
		label: "Investment Approach",
	},
	{
		href: "/team",
		id: "team",
		label: "Team",
	},
	{
		href: "/portfolio",
		id: "portfolio",
		label: "Portfolio",
	},
	{
		href: "/contact",
		id: "contact-us",
		label: "Contact Us",
	},
];

export const Navigation: FC<NavigationProps> = ({ id, label }): JSX.Element => {
	const pathname = usePathname();

	return (
		<nav
			aria-label={label}
			className="site-navigation"
			id={id}
			role="navigation"
		>
			<ul className="flex p-0 m-0 list-none">
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
