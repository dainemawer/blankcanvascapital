/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';

export default function Home(): JSX.Element {
	return (
		<>
			<NextSeo
				title="Home"
			/>
			<section>
				<h1>Home</h1>
			</section>
		</>
	)
}
