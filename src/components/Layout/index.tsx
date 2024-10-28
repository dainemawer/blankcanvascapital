"use client";

import { FC } from "react";
import dynamic from "next/dynamic";
import { Header } from "@components/Header";
import fetcher from "@lib/fetcher";
import useSWR from "swr";

import { NavigationItemProps } from "@components/Navigation/Navigation.types";
interface LayoutProps {
	children: React.ReactNode;
}

const SkipLink = dynamic(() => import("@components/SkipLink"), { ssr: false });
const Footer = dynamic(() => import("@components/Footer"), { ssr: false });

export const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
	const { data } = useSWR("/api/menu", fetcher);
	const menu = data as NavigationItemProps[];

	return (
		<>
			<SkipLink />
			<Header menu={menu} />
			<main id="main-content">{children}</main>
			<Footer />
		</>
	);
};
