/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';
import Image from 'next/image';

export default function Home(): JSX.Element {
	return (
		<>
			<NextSeo
				title="Home"
			/>
			<section>
				<Image
					src="/blank-canvas-capital-logo.png"
					width={192}
					height={192}
					alt="Picture of the author"
				/>
			</section>
		</>
	)
}
