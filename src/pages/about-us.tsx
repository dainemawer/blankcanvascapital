/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';

export default function AboutUs(): JSX.Element {
	return (
		<>
			<NextSeo
				title="About Us"
			/>
			<section>
				<h1>About Us</h1>
			</section>
		</>
	)
}
