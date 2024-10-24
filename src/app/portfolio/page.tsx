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
	title: "My Page Title",
};

export default function Page() {
	return <PortfolioPage />;
}
