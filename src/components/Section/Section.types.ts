export interface TeamProps {
	id: number;
	name?: string;
	image?: string;
	position?: string;
}

export interface SectionProps {
	align?: string;
	label: string;
	id: string;
	title: string;
	subtitle?: string;
	lead?: string;
	image: string;
	eyebrow?: string;
	order: string;
	ctaLink: string;
	ctaLabel: string;
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
