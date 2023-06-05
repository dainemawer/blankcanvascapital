import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	StyledArticle,
	StyledDivider,
	StyledOrder,
	StyledEyebrow,
	StyledHeading,
	StyledWrap,
	StyledFigure,
	StyledContent,
	StyledSubHeading,
	StyledLead,
	StyledSection,
} from './Section.styled';
import { SectionFullWidthProps } from './Section.types';

const SectionFullWidth: FC<SectionFullWidthProps> = ({
	label = '',
	id = '',
	title = '',
	subtitle = '',
	lead = '',
	image = '',
	eyebrow = '',
	order = null,
	ctaLink = '',
	ctaLabel = '',
	team = null,
}): JSX.Element => {
	return (
		<StyledSection id={id} aria-label={label}></StyledSection>
	);
};

export default SectionFullWidth;
