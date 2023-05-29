/*
 * Footer
 *
 * Global Site Footer
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import { Colophon } from '@components/Colophon'

interface FooterProps { }

export const Footer: FC<FooterProps> = (): JSX.Element => {
	return (
		<footer className="site-footer" id="site-footer" role="contentinfo" aria-label="Site Footer">
			<Colophon />
		</footer>
	)
}
