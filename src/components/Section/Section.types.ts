export interface TeamProps {
	id: number;
	image?: string;
	name?: string;
	position?: string;
}

export interface SectionProps {
	align?: string;
	ctaLabel: string;
	ctaLink: string;
	eyebrow?: string;
	id: string;
	image: string;
	label: string;
	lead?: string;
	order: string;
	subtitle?: string;
	title: string;
}

export interface SectionFullWidthProps extends SectionProps {
	team?: TeamProps[];
}

export interface SectionScrollerProps extends SectionProps {
	background: boolean;
}

export interface StyledProps {
	align?: string;
	background?: boolean;
}
