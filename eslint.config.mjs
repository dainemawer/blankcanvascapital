import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
	...nextCoreWebVitals,
	{
		rules: {
			"react/jsx-sort-props": [
				"error",
				{ shorthandLast: true, multiline: "first" },
			],
		},
	},
];

export default config;
