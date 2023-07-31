/*
 * Hero
 *
 * Hero Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import Image from 'next/image';
import { Content } from './Content';
import { Container } from '@components/Container';
import { StyledHero, StyledImage } from './Hero.styled';
import { HeroProps } from './Hero.types';

export const Hero: FC<HeroProps> = ({
	image,
	label,
	logo,
	subtitle,
	title,
	variation
}): JSX.Element => {
	return (
		<StyledHero>
			<Container size="1440px" relative>
				{image && (
					<StyledImage natural={!!title}>
						<Image
							sizes="(max-width: 768px) 100vw,
							(max-width: 1200px) 50vw, 100vw"
							alt={label}
							decoding="auto"
							height={668}
							loading="eager"
							quality={80}
							src={image}
							width={1657}
							priority
						/>
					</StyledImage>
				)}
				{title && (
					<Content logo={logo} subtitle={subtitle} title={title} variation={variation} />
				)}
			</Container>
		</StyledHero>
	)
}
