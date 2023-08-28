import type { NextApiRequest, NextApiResponse } from 'next'
import { SingleTeamProps } from '../../components/TeamGrid/TeamGrid.types'

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<SingleTeamProps[]>
) {
	res
		.status(200)
		.json([
			{
				id: 1,
				name: 'Neil Freeman',
				title: 'Partner',
				image: '/team/neil.png',
				linkedin: 'https://www.linkedin.com/company/blank-canvas-capital/',
			},
			{
				id: 2,
				name: 'JD De Villiers',
				title: 'Partner',
				image: '/team/jd.png',
				linkedin: 'https://www.linkedin.com/company/blank-canvas-capital/',
			},
			{
				id: 3,
				name: 'Darren Roy',
				title: 'Partner',
				image: '/team/darren.png',
				linkedin: 'https://www.linkedin.com/in/darren-roy-78771148/',
			}
		])
}
