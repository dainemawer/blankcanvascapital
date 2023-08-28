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
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: { and: [/\.(ts|tsx)x?$/] },
			use: [
				{
					loader: '@svgr/webpack',
				},
				'file-loader',
			],
		});

		return config;
	},
}

module.exports = nextConfig
