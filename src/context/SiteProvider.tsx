import React, { createContext } from "react";
import { useDisclosure } from "@mantine/hooks";

export type SiteContextType = {
	close: () => void;
	isOpen: boolean;
	open: () => void;
	toggle: () => void;
};

export const SiteContext = createContext<SiteContextType | undefined>(
	undefined
);

export const SiteProvider = ({ children }: { children: React.ReactNode }) => {
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

	return <SiteContext.Provider value={store}>{children}</SiteContext.Provider>;
};
