"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Modal } from "@mantine/core";
import { Logo } from "@components/Logo";
import { NavigationProps, NavigationItemProps } from "./Navigation.types";

export const Navigation: FC<NavigationProps> = ({
	handleClose,
	id,
	isOpen,
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
			<ul className="hidden md:flex list-none m-0 p-0">
				{menu &&
					menu.map((item: NavigationItemProps) => (
						<li className="mr-6 last:mr-0 leading-6" key={item.id}>
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
			<Modal
				aria-label={label}
				closeButtonProps={{ "aria-label": "Close modal" }}
				onClose={handleClose}
				opened={isOpen}
				transitionProps={{ transition: "fade", duration: 400 }}
				closeOnClickOutside
				closeOnEscape
				fullScreen
			>
				<ul className="flex flex-col list-none m-0 p-0">
					<li className="leading-8 text-center">
						<Link href="/">
							<Logo />
						</Link>
					</li>
					{menu &&
						menu.map((item: NavigationItemProps) => (
							<li className="mr-6 last:mr-0 leading-6" key={item.id}>
								<Link
									className="relative text-black font-primary font-medium text-sm hover:text-opacity-100"
									href={item.href}
								>
									{item.label}
									<span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-gold transition-all duration-300 ease-in-out hover:w-full"></span>
								</Link>
							</li>
						))}
				</ul>
			</Modal>
		</nav>
	);
};
