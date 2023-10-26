import {
	StyledSection,
	StyledEyebrow,
	StyledTitle,
	StyledExcerpt,
	StyledHeader,
	StyledBox,
	StyledCTA
} from './Section.styled';

import { Button } from '@components/Button';
import { Container } from '@components/Container';

const PortfolioSection = ({ align, backgroundImage, ctaLabel, ctaLink, excerpt, id, subTitle, title }) => {
	return (
		<StyledSection align={align} backgroundImage={backgroundImage} className="portfolio" id={id}>
			<Container size='1290px'>
				<StyledEyebrow align={align}>{subTitle}</StyledEyebrow>
				<StyledHeader align={align}>
					<StyledTitle color="#fff">{title}</StyledTitle>
				</StyledHeader>
				<StyledBox>
					<StyledExcerpt align={align} color="#fff" maxWidth="620px">{excerpt}</StyledExcerpt>
					<StyledCTA>
						<Button href={ctaLink}>{ctaLabel}</Button>
					</StyledCTA>
				</StyledBox>
			</Container>
		</StyledSection>
	)
}

export default PortfolioSection;
