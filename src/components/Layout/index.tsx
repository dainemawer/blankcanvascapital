"use client";

import { FC } from "react";
import dynamic from "next/dynamic";
import { Header } from "@components/Header";
interface LayoutProps {
	children: React.ReactNode;
}

const SkipLink = dynamic(() => import("@components/SkipLink"), { ssr: false });
const Footer = dynamic(() => import("@components/Footer"), { ssr: false });

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
