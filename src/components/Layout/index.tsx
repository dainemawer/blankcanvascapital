"use client";

import { FC } from "react";
import dynamic from "next/dynamic";
import { Header } from "@components/Header";
interface LayoutProps {
	children: React.ReactNode;
}

const SkipLink = dynamic(() => import("@components/SkipLink"), { ssr: true });
const Footer = dynamic(() => import("@components/Footer"), { ssr: true });

export const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
	return (
		<>
			<SkipLink />
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</>
	);
};
