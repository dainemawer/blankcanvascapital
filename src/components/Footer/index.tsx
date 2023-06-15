/*
 * Footer
 *
 * Global Site Footer
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Colophon } from '@components/Colophon'
import { Container } from '@components/Container'
import { StyledFooter, StyledFooterCard, StyledAddress } from './Footer.styled';

export const Footer: FC = (): JSX.Element => {
	return (
		<footer
			aria-label="Site Footer"
			className="site-footer"
			id="site-footer"
			role="contentinfo"
		>
			<StyledFooter>
				<Container>
					<StyledFooterCard>
						<Link href="/">
							<Image
								alt="Blank Canvas Capital Logo Square"
								decoding="async"
								height={56}
								loading="lazy"
								src="/blank-canvas-capital-square.png"
								width={52}
							/>
						</Link>
						<StyledAddress>
							1st Floor<br />
							30 Melrose Boulevard<br />
							Melrose Arch, Johannesburg<br />
							South Africa
						</StyledAddress>
					</StyledFooterCard>
				</Container>
			</StyledFooter>
			<Colophon />
		</footer>
	)
}
