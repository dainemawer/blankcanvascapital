/*
 * Custom App
 *
 * Next.js uses the App component to initialize pages.
 * You can override it and control the page initialization
 *
 * @see https://nextjs.org/docs/advanced-features/custom-app
 * @returns {JSX.Element}
*/

import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { DefaultSeo } from 'next-seo';
import { Layout } from '@components/Layout'
import ErrorBoundary from '@components/ErrorBoundary'
import { sendPageView } from '@lib/gtag'
import { GoogleAnalytics, sendToAnalytics } from '@lib/gtag/analytics';
import { SiteContext, store } from '@context/SiteContext';
import NProgress from "nprogress";
import SEO from '../next-seo.config';
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { globalStyles } from '../shared/styles'
import { Work_Sans, Merriweather } from 'next/font/google';

const workSans = Work_Sans({
	weight: ['500', '600', '700', '800'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-work-sans',
});

const merriweather = Merriweather({
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-merriweather',
});

const cache = createCache({ key: 'next' })

import "nprogress/nprogress.css";

export default function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()

	useEffect(() => {
		const handleRouteStart = () => NProgress.start();
		const handleRouteDone = () => NProgress.done();
		const handleRouteChange = (url: string) => {
			sendPageView(url)
		}

		router.events.on('routeChangeComplete', handleRouteChange)
		router.events.on('hashChangeComplete', handleRouteChange)

		router.events.on("routeChangeStart", handleRouteStart)
		router.events.on("routeChangeComplete", handleRouteDone)
		router.events.on("routeChangeError", handleRouteDone)

		document.body.classList.add(workSans.variable);
		document.body.classList.add(merriweather.variable);

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
			router.events.off('hashChangeComplete', handleRouteChange)
			router.events.off("routeChangeStart", handleRouteStart)
			router.events.off("routeChangeComplete", handleRouteDone)
			router.events.off("routeChangeError", handleRouteDone)

			document.body.classList.remove(workSans.variable)
			document.body.classList.remove(merriweather.variable)
		}
	}, [router.events])

	return (
		<SiteContext.Provider value={store}>
			<Layout>
				<ErrorBoundary>
					<DefaultSeo {...SEO} />
					<GoogleAnalytics />
					<CacheProvider value={cache}>
						{globalStyles}
						<Component {...pageProps} />
					</CacheProvider>
				</ErrorBoundary>
			</Layout>
		</SiteContext.Provider>
	)
}

export function reportWebVitals({ id, name, label, value }: NextWebVitalsMetric) {
	if (typeof window !== 'undefined') {
		sendToAnalytics(id, name, label, value);
	}
}
