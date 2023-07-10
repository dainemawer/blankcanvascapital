/*
 * Custom Document
 *
 * A custom Document can update
 * the <html> and <body> tags used to render a Page.
 *
 * @see https://nextjs.org/docs/advanced-features/custom-document
 * @returns {JSX.Element}
*/

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
	return (
		<Html lang="en">
			<Head>
				<link href="https://fonts.googleapis.com" rel="preconnect" />
				<link crossOrigin="true" href="https://fonts.gstatic.com" rel="preconnect" />
				<link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Work+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
			</Head>
			<body>
				<Main />
				<NextScript />
				{/* Support for window.gtag on the server */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
						`,
					}}
				/>
			</body>
		</Html>
	)
}
