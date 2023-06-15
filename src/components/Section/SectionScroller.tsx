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
	align = 'left',
	background = false,
	ctaLabel = '',
	ctaLink = '',
	eyebrow = '',
	id = '',
	image = '',
	label = '',
	lead = '',
	order = null,
	subtitle = '',
	title = '',
}): JSX.Element => {
	return(
		<StyledSection aria-label={label} id={id}></StyledSection>
	);
};

export default SectionScroller;
