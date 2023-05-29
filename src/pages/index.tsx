/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { Inter } from 'next/font/google'

const inter = Inter({
	weight: ['600'],
	subsets: ['latin']
})

export default function Home(): JSX.Element {
	return (
		<>
			<NextSeo
				title="Home"
			/>
			<section className={`w-full flex justify-center items-center h-screen bg-center bg-cover bg-architecture ${inter.className}`}>
				<div className="relative">
					<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 285" width="192" height="192">
						<path d="M3 121.5V3h258v279h-48.127" stroke="#fff" strokeWidth="5" />
					</svg>
					<Image
						className="absolute bottom-0 left-[6px]"
						src="/blankcanvascapital.png"
						width={120}
						height={192}
						alt="Picture of the author"
						priority
					/>
				</div>
			</section>
		</>
	)
}
