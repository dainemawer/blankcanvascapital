/*
 * 500 Error Page
 *
 * Server-rendering an error page for every visit adds
 * complexity to responding to errors.
 *
 * @see https://nextjs.org/docs/advanced-features/custom-error-page
 * @returns {JSX.Element}
*/

import { Container } from '@components/Container';
import { ErrorLayout } from '@components/ErrorLayout';
import { NextSeo } from 'next-seo';

export default function FiveZeroZero(): JSX.Element {
	return (
		<>
			<NextSeo
				title="500"
				description="Our server encountered an unexpected error."
			/>
			<Container size="1120px">
				<ErrorLayout eyebrow="500" title="Uh oh. Thats not right" permalink="Go Back" lead="Our server encountered an unexpected error." />
			</Container>
		</>
	)
}
