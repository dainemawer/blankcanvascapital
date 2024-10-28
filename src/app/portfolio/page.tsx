import type { Metadata } from "next";
import PortfolioPage from "@components/PortfolioPage";

export type PortfolioProps = {
	category?: string;
	date?: string;
	description?: string;
	hero?: string;
	id: string;
	logo?: string;
	position?: string;
	region?: string;
	sector?: string;
	status?: string;
	title?: string;
	url?: string;
};

export const metadata: Metadata = {
	title: "Portfolio",
	description:
		"Explore Blank Canvas Capital’s diverse investment portfolio, showcasing successful partnerships and growth across various industries. Discover our value-driven investments",
};

export default function Page() {
	return <PortfolioPage />;
}
