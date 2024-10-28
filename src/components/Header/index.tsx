"use client";

import { useContext, FC } from "react";
import Link from "next/link";
import { Logo } from "@components/Logo";
import { Navigation } from "@components/Navigation";
import { Container } from "@components/Container";
import { SiteContext } from "@context/SiteContext";
import { SiteContextProps } from "@context/SiteContext";
import { HeaderProps } from "./Header.types";
import { useScrollPosition } from "@hooks/useScrollPosition";

export const Header: FC<HeaderProps> = ({ menu }): JSX.Element => {
	const { close, isOpen, open, toggle } =
		useContext<SiteContextProps>(SiteContext);
	const ariaLabel = isOpen ? "Close navigation" : "Open navigation";
	const scrollPosition = useScrollPosition();
	const isSticky = scrollPosition > 0;

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
					<Link href="/">
						<Logo />
					</Link>
					<Navigation
						handleClose={close}
						handleOpen={open}
						handleToggle={toggle}
						id="site-navigation"
						isOpen={isOpen}
						label="Site Navigation"
						menu={menu}
					/>
				</div>
			</Container>
		</header>
	);
};
