import { NextResponse } from 'next/server';
// import { SingleTeamProps } from '@/components/TeamGrid/TeamGrid.types';

export async function GET() {
	const teamMembers = [
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
	];

	// Return the team members as JSON
	return NextResponse.json(teamMembers, { status: 200 });
}
