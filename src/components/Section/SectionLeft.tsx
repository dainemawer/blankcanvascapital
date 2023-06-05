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
import { SectionProps } from './Section.types';

const SectionLeft: FC<SectionProps> = ({
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
	return (
		<StyledSection id={id} aria-label={label}>
			<StyledArticle>
				<StyledDivider>
					<StyledOrder>{order}</StyledOrder>
					<StyledEyebrow>{eyebrow}</StyledEyebrow>
				</StyledDivider>
				{title && (
					<header>
						<StyledHeading>{title}</StyledHeading>
					</header>
				)}
				<StyledWrap aria-label={title}>
					{image && (
						<StyledFigure>
							<Image className="radius" loading="lazy" decoding="async" alt={title} src={image} width={450} height={500} />
						</StyledFigure>
					)}
					<StyledContent>
						{subtitle && <StyledSubHeading>{subtitle}</StyledSubHeading>}
						{lead && <StyledLead>{lead}</StyledLead>}
						{ctaLink && <Button href={ctaLink}>{ctaLabel}</Button>}
					</StyledContent>
				</StyledWrap>
			</StyledArticle>
		</StyledSection>
	)
};

export default SectionLeft;
