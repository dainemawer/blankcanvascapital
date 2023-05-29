/*
 * Colophon
 *
 * Colophon Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled';

interface ColophonProps { }

export const Colophon: FC<ColophonProps> = (): JSX.Element => {
	return (
		<nav>
			<p>&copy; Copyright 2023. Blank Canvas Digital. All Rights Reserved</p>
			<ul>
				<li><Link href="/disclaimer">Disclaimer</Link></li>
				<li><Link href="/terms-conditions">Terms and Conditions</Link></li>
			</ul>
		</nav>
	);
}
