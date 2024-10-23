import type { Metadata } from "next";
import Team from "@components/Team";

export const metadata: Metadata = {
	title: "My Page Title",
};

export default function Page() {
	return <Team />;
}
