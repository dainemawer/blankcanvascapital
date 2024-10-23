import { Container } from "@components/Container";
import { ErrorLayout } from "@components/ErrorLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "404 Not Found",
};

export default function NotFound() {
	return (
		<Container size="1120px">
			<ErrorLayout
				eyebrow="404"
				lead="The page you were looking for no longer exists."
				permalink="Return Home"
				title="Oops. We blanked on that"
			/>
		</Container>
	);
}
