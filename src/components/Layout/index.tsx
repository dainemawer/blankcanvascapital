/*
 * Layout
 *
 * This is the main layout for the app
 *
 * @param {ReactNode} children
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { SkipLink } from '@components/SkipLink'

interface LayoutProps {
	children: React.ReactElement,
}

export const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
	return (
		<>
			<SkipLink />
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</>

	)
}
