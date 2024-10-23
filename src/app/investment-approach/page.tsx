import type { Metadata } from "next";
import InvestmentApproach from "@components/InvestmentApproach";

export const metadata: Metadata = {
	title: "My Page Title",
};

export default function Page() {
	return <InvestmentApproach />;
}
