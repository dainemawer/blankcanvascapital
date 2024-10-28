import type { Metadata } from "next";
import InvestmentApproach from "@components/InvestmentApproach";

export const metadata: Metadata = {
	title: "Investment Approach",
	description:
		"Discover Blank Canvas Capital’s flexible and adaptive investment approach, focused on value-driven partnerships and exceptional returns for investors and entrepreneurs.",
};

export default function Page() {
	return <InvestmentApproach />;
}
