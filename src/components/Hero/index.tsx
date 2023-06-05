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

export const Hero: FC<HeroProps> = ({ label, image, logo, title, subtitle }): JSX.Element => {
	return (
		<StyledHero>
			<Container size="1650px">
				{image && (
					<StyledImage>
						<Image style={{ width: '100%', height: '668px' }} priority alt={label} src={image} width={1657} height={668} />
					</StyledImage>
				)}
				{title && <Content title={title} logo={logo} subtitle={subtitle} />}
			</Container>
		</StyledHero>
	)
}
