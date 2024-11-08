import type { Metadata } from "next";
import { Work_Sans, Roboto } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "@/styles/globals.css";

import { Layout } from "../components/Layout";

const worksans = Work_Sans({
	subsets: ["latin"],
	weight: ["500", "600", "700"],
	display: "swap",
});

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		template: "%s | Blank Canvas Capital",
		default: "Home | Blank Canvas Capital",
	},
	generator: "Next JS",
	creator: "Daine Mawer",
	metadataBase: new URL("https://blankcanvascapital.co.za"),
	description:
		"Blank Canvas Capital is a value-driven investment firm focused on helping businesses grow with flexible funding and strategic partnerships for exceptional returns",
	openGraph: {
		type: "website",
		locale: "en_ZA",
		url: "https://blankcanvascapital.co.za",
		title: "Blank Canvas Capital",
		description:
			"Blank Canvas Capital is a value-driven investment firm focused on helping businesses grow with flexible funding and strategic partnerships for exceptional returns",
		images: [
			{
				url: "/opengraph.png",
				width: 800,
				height: 600,
				alt: "Blank Canvas Capital",
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className={`${worksans.className} ${roboto.className}`} lang="en">
			<body>
				<Layout>{children}</Layout>
			</body>
			<GoogleAnalytics
				gaId={process.env.NEXT_PUBLIC_GA_ID || "default-ga-id"}
			/>
		</html>
	);
}
