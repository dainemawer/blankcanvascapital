import type { Metadata } from "next";
import Contact from "@components/Contact";

export const metadata: Metadata = {
	title: "Contact Us",
	description:
		"Get in touch with Blank Canvas Capital for investment inquiries and partnership opportunities. Reach out today to learn how we can help grow your business.",
};

export default function Page() {
	return <Contact />;
}
