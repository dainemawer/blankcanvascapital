import { FC } from 'react';
import Image from 'next/image';
import { Button } from '@components/Button';
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
import { SectionScrollerProps } from './Section.types';

const SectionScroller: FC<SectionScrollerProps> = ({
	background = false,
	align = 'left',
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
}): JSX.Element => {
	return(
		<StyledSection id={id} aria-label={label}></StyledSection>
	);
};

export default SectionScroller;
