/*
 * Google Analytics
 *
 * Initialiszes Google Analytics
 * @returns {JSX.Element}
*/

import Script from 'next/script';
import { GA_TRACKING_ID } from '.'

export const GoogleAnalytics = (): JSX.Element => {
	return (
		<>
			<Script
				src={
				`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
				strategy="afterInteractive"
			/>
			<Script
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${GA_TRACKING_ID}', {
						page_path: window.location.pathname,
						});
					`,
				}}
				id="gtag-init"
				strategy="afterInteractive"
			/>
		</>
	)
}

export const sendToAnalytics = (id, name, label, value) => {
	window.gtag('event', name, {
		event_category:
			label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
		value: Math.round(name === 'CLS' ? value * 1000 : value),
		event_label: id,
		non_interaction: true,
	});
}
