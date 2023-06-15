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
	return (
		<StyledSection aria-label={label} id={id}>
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
							<Image
								alt={title}
								className="radius"
								decoding="async"
								height={500}
								loading="lazy"
								src={image}
								width={450}
							/>
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
