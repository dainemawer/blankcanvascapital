import type { ReactElement } from 'react';

export type ComplexSectionProps = {
	children: JSX.Element;
	contentClassName?: string,
	ctaLabel: string,
	ctaLink: string,
	excerpt?: string,
	eyebrow?: string;
	id: string;
	image?: string;
	index?: string;
	subTitle?: string;
	title: string;
	variant: 'our-team' | 'investment-portfolio';
}

export type SimpleSectionProps = {
	align: 'left' | 'right' | 'center';
	backgroundColor?: string;
	contentClassName?: string;
	ctaLabel: string;
	ctaLink: string;
	excerpt?: string | ReactElement;
	eyebrow: string;
	id: string;
	image: string;
	index: string;
	subTitle: string | ReactElement;
	title: string;
}

export type AlignProps = {
	align?: 'left' | 'right' | 'center' | 'noalign';
}

export type SubTitleProps = {
	align?: 'left' | 'right' | 'center' | 'noalign',
	maxWidth?: string;
}

export type StyledSectionProps = {
	align?: 'left' | 'right' | 'center' | 'noalign';
	backgroundColor?: string;
}

export type EyebrowProps = {
	align?: 'left' | 'right' | 'center' | 'noalign';
	underline?: boolean;
}
