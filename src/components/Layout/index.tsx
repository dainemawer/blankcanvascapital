"use client";

import { FC } from "react";
import dynamic from "next/dynamic";
import { Header } from "@components/Header";
import fetcher from "@lib/fetcher";
import useSWR from "swr";
import { SiteContext } from "@context/SiteContext";
import { useDisclosure } from "@mantine/hooks";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { globalStyles } from "../../shared/styles";

import { NavigationItemProps } from "@components/Navigation/Navigation.types";
interface LayoutProps {
	children: React.ReactNode;
}

const SkipLink = dynamic(() => import("@components/SkipLink"), { ssr: false });
const Footer = dynamic(() => import("@components/Footer"), { ssr: false });

const cache = createCache({ key: "next" });

export const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
	const { data } = useSWR("/api/menu", fetcher);
	const menu = data as NavigationItemProps[];
	const [isOpen, { close, open, toggle }] = useDisclosure(false);

	const store = {
		close,
		isOpen,
		open,
		site: {
			title: "My Site",
		},
		toggle,
	};

	return (
		<SiteContext.Provider value={store}>
			<CacheProvider value={cache}>
				{globalStyles}
				<SkipLink />
				<Header menu={menu} />
				<main id="main-content">{children}</main>
				<Footer />
			</CacheProvider>
		</SiteContext.Provider>
	);
};
