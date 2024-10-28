import type { Metadata } from "next";
import Team from "@components/Team";

export const metadata: Metadata = {
	title: "Team",
	description:
		"Meet the expert team behind Blank Canvas Capital, a group of investment professionals dedicated to delivering exceptional returns through strategic partnerships and innovative thinking",
};

export default function Page() {
	return <Team />;
}
