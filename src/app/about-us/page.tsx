import type { Metadata } from "next";
import About from "@components/About";

export const metadata: Metadata = {
	title: "About Us",
	description:
		"Discover Blank Canvas Capital’s mission to support entrepreneurs through strategic investments, expert guidance, and a flexible approach to business growth",
};

export default function Page() {
	return <About />;
}
