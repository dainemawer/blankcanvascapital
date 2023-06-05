/*
 * Footer
 *
 * Global Site Footer
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import { Colophon } from '@components/Colophon'
import { Container } from '@components/Container'
import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import { colors } from '@theme/colors'
import { fonts } from '@theme/fonts'

const StyledFooter = styled.div`
	background-color: ${colors.aluminum};
	padding: 3.75rem 0;
`;

const StyledAddress = styled.address`
	font-family: ${fonts.primary};
	font-weight: 500;
	font-size: 0.75rem;
	font-style: normal;
	line-height: 1.5;
	margin-left: 1.8rem;
	text-transform: uppercase;
`;

const StyledFooterCard = styled.div`
	align-items: flex-start;
	display: flex;
	justify-content: flex-start;
`;

export const Footer: FC = (): JSX.Element => {
	return (
		<footer className="site-footer" id="site-footer" role="contentinfo" aria-label="Site Footer">
			<StyledFooter>
				<Container>
					<StyledFooterCard>
						<Link href="/">
							<Image loading="lazy" decoding="async" alt="Blank Canvas Capital Logo Square" width="52" height="56" src="/blank-canvas-capital-square.png" />
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
