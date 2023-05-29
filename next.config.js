// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
	productionBrowserSourceMaps: true,
	experimental: {
		webVitalsAttribution: ['CLS', 'LCP']
	},
	reactStrictMode: true,
	compiler: {
		emotion: true,
	},
}

module.exports = nextConfig
