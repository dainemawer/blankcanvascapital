import type { Metadata } from "next";
import Contact from "@components/Contact";

export const metadata: Metadata = {
	title: "My Page Title",
};

export default function Page() {
	return <Contact />;
}
