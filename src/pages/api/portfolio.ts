import type { NextApiRequest, NextApiResponse } from 'next'
import type { PortfolioProps } from '../../pages/portfolio'

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<PortfolioProps[]>
) {
	res
		.status(200)
		.json([
			{
				category: 'Real Estate',
				id: '1',
				title: 'Sneaker Lab',
				hero: '/sneaker-lab-hero.jpg',
				logo: '/sneaker-lab-logo.png',
				description: 'At Blank Canvas Capital, our mission is to drive positive' +
				'change by investing in groundbreaking ideas and visionary entrepreneurs.' +
				'We believe in the power of innovation to transform industries and create a ' +
				'better future. We strive to support and guide entrepreneurs through ' +
				'their journey, offering not only financial backing but also strategic' +
				'guidance and a vast network of industry connections.',
				region: 'Global.',
				sector: 'Retail',
				date: 'July 2021',
				status: 'current'
			},
			{
				category: 'Private Equity',
				id: '2',
				title: 'The Invigilator',
				hero: '/the-invigilator-hero.png',
				logo: '/the-invigilator-logo.png',
				description: '',
				region: '',
				sector: '',
				date: '',
				status: 'current'

			},
			{
				category: 'Real Estate',
				id: '3',
				title: 'Aura',
				hero: '/aura-hero.png',
				logo: '/aura-logo.png',
				description: '',
				region: '',
				sector: '',
				date: '',
				status: 'realised'
			},
		])
}
