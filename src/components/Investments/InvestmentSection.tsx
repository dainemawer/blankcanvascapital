import { FC } from 'react';
import { Icon } from '@components/Icon';
import type { InvestmentSectionProps } from './Investments.types';
import {
	Container,
	Content,
	Eyebrow,
	Header,
	IconContainer,
	IconElement,
	Section,
	Title
} from './Investments.styled';

const InvestmentSection: FC<InvestmentSectionProps> = ({
	align,
	bgColor,
	children,
	cols,
	eyebrow,
	grid,
	icon,
	iconBg,
	maxWidth,
	name,
	title,
}) => {
	return (
		<Section align={align} aria-label={title} bgColor={bgColor} id={name}>
			{align === 'left' && (
				<Container align={align} grid={grid} maxWidth={maxWidth}>
					<IconContainer align={align}>
						<IconElement bgColor="#424242">
							<Icon icon={icon} />
						</IconElement>
					</IconContainer>
					<div>
						<Header textAlign="left">
							<Eyebrow className="eyebrow">
								{eyebrow}
							</Eyebrow>
							<Title>{title}</Title>
						</Header>
						<Content>{children}</Content>
					</div>
				</Container>
			)}
			{align === 'right' && (
				<Container align="right" className="with-bg" grid={grid} maxWidth={maxWidth}>
					<div>
						<Header textAlign="right">
							<Eyebrow className="eyebrow">
								{eyebrow}
							</Eyebrow>
							<Title>{title}</Title>
						</Header>
						<Content align="right">{children}</Content>
					</div>
					<IconContainer align="right">
						<IconElement align="right" bgColor="#C5A880">
							<Icon icon={icon} />
						</IconElement>
					</IconContainer>
				</Container>
			)}
			{align === 'center' && (
				<Container
					align="center"
					className="with-bg centered"
					grid={grid}
					maxWidth={maxWidth}
				>
					<div>
						<Header textAlign="center">
							<Eyebrow className="eyebrow">
								{eyebrow}
							</Eyebrow>
							<Title>{title}</Title>
						</Header>
						<Content align="center">{children}</Content>
					</div>
					<IconContainer align="center">
						<IconElement align="center" bgColor="#C5A880">
							<Icon icon={icon} />
						</IconElement>
					</IconContainer>
				</Container>
			)}
		</Section>
	)
}

export default InvestmentSection;
