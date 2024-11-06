"use client";

import { useEffect } from "react";
import { Container } from "@components/Container";
import { ErrorLayout } from "@components/ErrorLayout";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div>
			<Container size="1120px">
				<ErrorLayout
					eyebrow="500"
					lead="Our server encountered an unexpected error."
					permalink="Go Back"
					title="Uh oh. Thats not right"
				/>
			</Container>
		</div>
	);
}
