/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';

export default function Contact(): JSX.Element {
	return (
		<>
			<NextSeo
				title="Contact"
			/>
			<section>
				<h1>Contact</h1>
			</section>
		</>
	)
}
