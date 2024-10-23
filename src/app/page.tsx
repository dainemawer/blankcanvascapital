import type { Metadata } from "next";
import Home from "../components/Home";

export const metadata: Metadata = {
	title: "My Page Title",
};

export default function Page() {
	return <Home />;
}
