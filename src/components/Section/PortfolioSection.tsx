import Image from 'next/image';
import {
	StyledPortfolioOverflowGridWrap,
	StyledPortfolioOverflowGrid,
	StyledPortfolioOverflowCard,
} from './Section.styled';

const PortfolioSection = ({ portfolio }) => {
	return (
		<StyledPortfolioOverflowGridWrap>
			<StyledPortfolioOverflowGrid>
				{portfolio?.map((investment) => (
					<StyledPortfolioOverflowCard key={investment.id}>
						<Image
							alt=""
							decoding="async"
							height={137}
							loading="lazy"
							src={investment.logo}
							width={214}
						/>
					</StyledPortfolioOverflowCard>
				))}
			</StyledPortfolioOverflowGrid>
		</StyledPortfolioOverflowGridWrap>
	)
}

export default PortfolioSection;
