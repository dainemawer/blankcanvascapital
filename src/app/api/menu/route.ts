import { NextResponse } from 'next/server';
import { NavigationItemProps } from '@components/Navigation/Navigation.types';

export async function GET() {
	// Define the navigation items
	const navigationItems: NavigationItemProps[] = [
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
		},
	];

	// Return the navigation items as JSON
	return NextResponse.json(navigationItems, { status: 200 });
}
