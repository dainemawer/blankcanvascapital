const nextConfig = {
	productionBrowserSourceMaps: true,
	experimental: {
		webVitalsAttribution: ['CLS', 'LCP']
	},
	reactStrictMode: true,
}

module.exports = nextConfig
