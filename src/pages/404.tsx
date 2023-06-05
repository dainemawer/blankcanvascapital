/*
 * 400 Error Page
 *
 * A 404 page may be accessed very often.
 * Server-rendering an error page for every visit increases the load of the Next.js server
 *
 * @see https://nextjs.org/docs/advanced-features/custom-error-page
 * @returns {JSX.Element}
*/

import { Container } from '@components/Container';
import { NextSeo } from 'next-seo';
import { ErrorLayout } from '@components/ErrorLayout';

export default function FourZeroFour(): JSX.Element {
	return (
		<>
			<NextSeo
				title="404"
				description="The page you were looking for no longer exists."
			/>
			<Container size="1120px">
				<ErrorLayout eyebrow="404" title="Oops. We blanked on that" permalink="Return Home" lead="The page you were looking for no longer exists." />
			</Container>
		</>
	)
}
