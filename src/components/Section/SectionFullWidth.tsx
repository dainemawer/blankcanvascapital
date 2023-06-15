import { FC } from 'react';
import { StyledSection } from './Section.styled';
import { SectionFullWidthProps } from './Section.types';

const SectionFullWidth: FC<SectionFullWidthProps> = ({
	ctaLabel = '',
	ctaLink = '',
	eyebrow = '',
	id = '',
	image = '',
	label = '',
	lead = '',
	order = null,
	subtitle = '',
	team = null,
	title = '',
}): JSX.Element => {
	return (
		<StyledSection aria-label={label} id={id}></StyledSection>
	);
};

export default SectionFullWidth;
