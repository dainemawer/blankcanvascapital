"use client";

import { useContext, FC } from "react";
import Link from "next/link";
import { Logo } from "@components/Logo";
import { Navigation } from "@components/Navigation";
import { Container } from "@components/Container";
import { useScrollPosition } from "@hooks/useScrollPosition";
import { NavigationItemProps } from "../Navigation/Navigation.types";
import { usePathname } from "next/navigation";

import { AlignJustify } from "lucide-react";

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

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

export const Header: FC = (): JSX.Element => {
	const scrollPosition = useScrollPosition();
	const isSticky = scrollPosition > 0;
	const pathname = usePathname();

	return (
		<header
			className={`site-header sticky top-0 bg-white bg-opacity-90 transition-all duration-500 ease-in-out z-50 ${
				isSticky ? "backdrop-blur-sm shadow-md py-4" : "py-6"
			}`}
			aria-label="Site Header"
			id="site-header"
			role="banner"
		>
			<Container size="1440px">
				<div className="flex items-center justify-start md:justify-between">
					<Sheet>
						<SheetTrigger className="inline-flex md:hidden">
							<AlignJustify className="w-6 h-6 mr-4" strokeWidth={1.5} />
						</SheetTrigger>
						<SheetContent className="w-full" side="left">
							<SheetTitle className="invisible">Navigation Menu</SheetTitle>
							<SheetDescription className="invisible">
								Explore our website to learn more about our investment approach,
								team, and portfolio.
							</SheetDescription>
							<div className="grid h-full gap-4 py-4">
								<div className="flex flex-col items-center justify-center align-center">
									<Logo />
									<nav>
										{menu && (
											<ul className="flex flex-col items-center p-0 m-0 list-none">
												{menu.map((item: NavigationItemProps) => (
													<li className="leading-loose" key={item.id}>
														<Link
															className={`relative group text-black font-primary font-medium text-subheading hover:text-opacity-100`}
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
										)}
									</nav>
								</div>
							</div>
						</SheetContent>
					</Sheet>
					<Link href="/">
						<Logo />
					</Link>
					<Navigation
						id="site-navigation"
						label="Site Navigation"
						menu={menu}
					/>
				</div>
			</Container>
		</header>
	);
};
