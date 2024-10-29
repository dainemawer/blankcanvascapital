/*
 * Google Analytics
 *
 * Initialiszes Google Analytics
 * @returns {JSX.Element}
 */

export const sendToAnalytics = (
	id: string,
	name: string,
	label: string,
	value: number
) => {
	window.gtag("event", name, {
		event_category:
			label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
		value: Math.round(name === "CLS" ? value * 1000 : value),
		event_label: id,
		non_interaction: true,
	});
};
