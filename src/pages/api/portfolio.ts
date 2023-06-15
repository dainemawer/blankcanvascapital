import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
	date?: string;
	description?: string;
	hero?: string;
	id: number;
	logo?: string;
	region?: string;
	sector?: string;
	status?: string;
	title?: string;
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData[]>
) {
	res
		.status(200)
		.json([
			{
				id: 1,
				title: 'Sneaker Lab',
				hero: '',
				logo: '',
				description: '',
				region: '',
				sector: '',
				date: '',
				status: ''
			},
			{
				id: 2,
				title: 'The Invigilator',
				hero: '',
				logo: '',
				description: '',
				region: '',
				sector: '',
				date: '',
				status: ''
			},
			{
				id: 3,
				hero: 'Aura',
				logo: '',
				description: '',
				region: '',
				sector: '',
				date: '',
				status: ''
			},
		])
}
