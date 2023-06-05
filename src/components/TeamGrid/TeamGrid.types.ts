export interface SingleTeamProps {
	id: number;
	name: string;
	title: string;
	linkedin: string;
	image: string;
}

export interface TeamProps {
	team: SingleTeamProps[];
}
