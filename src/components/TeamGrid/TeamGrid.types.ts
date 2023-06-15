export interface SingleTeamProps {
	id: number;
	image: string;
	linkedin: string;
	name: string;
	title: string;
}

export interface TeamProps {
	team: SingleTeamProps[];
}
