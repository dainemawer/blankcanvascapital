import React, { createContext } from "react";

export type SiteContextType = {};

export const SiteContext = createContext<SiteContextType | undefined>(
	undefined
);

export const SiteProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<SiteContext.Provider value={undefined}>{children}</SiteContext.Provider>
	);
};
