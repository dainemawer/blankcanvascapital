/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';

export default function Portfolio(): JSX.Element {
	return (
		<>
			<NextSeo
				title="Portfolio"
			/>
			<section>
				<h1>Portfolio</h1>
			</section>
		</>
	)
}
