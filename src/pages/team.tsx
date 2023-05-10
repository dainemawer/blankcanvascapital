/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';

export default function Team(): JSX.Element {
	return (
		<>
			<NextSeo
				title="Team"
			/>
			<section>
				<h1>Team</h1>
			</section>
		</>
	)
}
