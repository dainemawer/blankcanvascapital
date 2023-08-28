import type { NextApiRequest, NextApiResponse } from 'next'
import { NavigationItemProps } from '@components/Navigation/Navigation.types';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<NavigationItemProps[]>
) {
	res
		.status(200)
		.json([
			{
				href: '/',
				id: 'home',
				label: 'Home',
			},
			{
				href: '/about-us',
				id: 'about-us',
				label: 'About Us',
			},
			{
				href: '/investment-approach',
				id: 'investment-approach',
				label: 'Investment Approach',
			},
			{
				href: '/team',
				id: 'team',
				label: 'Team',
			},
			{
				href: '/portfolio',
				id: 'portfolio',
				label: 'Portfolio',
			},
			{
				href: '/contact',
				id: 'contact-us',
				label: 'Contact Us',
			}
		])
}
