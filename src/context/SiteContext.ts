"use client";

import { createContext, useContext } from 'react';

export type SiteContextProps = {
	close: () => void;
	isOpen: boolean;
	open: () => void;
	toggle: () => void;
}

export const SiteContext = createContext<SiteContextProps>({
	close: () => { },
	isOpen: false,
	open: () => {},
	toggle: () => { },
});

export const useSiteContext = () => useContext(SiteContext);
