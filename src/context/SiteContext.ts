import { createContext, useContext } from 'react';

export type SiteContextProps = {
	isOpen: boolean;
	toggle: () => void;
	open: () => void;
	close: () => void;
}

export const SiteContext = createContext<SiteContextProps>({
	isOpen: false,
	toggle: () => {},
	open: () => {},
	close: () => {},
});

export const useSiteContext = () => useContext(SiteContext);
