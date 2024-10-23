"use client";

import { useContext, FC } from "react";
import Link from "next/link";
import { Logo } from "@components/Logo";
import { Navigation } from "@components/Navigation";
import { Container } from "@components/Container";
import { SiteContext } from "@context/SiteContext";
import { Burger } from "@mantine/core";
import { SiteContextProps } from "@context/SiteContext";
import { StyledHeader, StyledHeaderWrap } from "./Header.styled";
import { HeaderProps } from "./Header.types";
import { useScrollPosition } from "@hooks/useScrollPosition";

export const Header: FC<HeaderProps> = ({ menu }): JSX.Element => {
	const { close, isOpen, open, toggle } =
		useContext<SiteContextProps>(SiteContext);
	const ariaLabel = isOpen ? "Close navigation" : "Open navigation";
	const scrollPosition = useScrollPosition();

	return (
		<StyledHeader
			aria-label="Site Header"
			className="site-header"
			id="site-header"
			role="banner"
			sticky={scrollPosition > 0}
		>
			<Container size="1440px">
				<StyledHeaderWrap>
					<Burger
						aria-label={ariaLabel}
						onClick={toggle}
						opened={isOpen}
						size={18}
					/>
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
				</StyledHeaderWrap>
			</Container>
		</StyledHeader>
	);
};
