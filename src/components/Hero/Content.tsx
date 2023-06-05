/*
 * Hero
 *
 * Hero Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import Image from 'next/image';

interface ContentProps {
	logo: string;
	title: string;
	subtitle: string;
}

export const Content: FC<ContentProps> = ({ logo, title, subtitle }): JSX.Element => {
	return (
		<div>
			{logo && <Image alt="Blank Canvas CapitalLogo" src={logo} width="307" height="333" />}
			<div>
				{title && <h1></h1>}
				{subtitle && <p></p>}
			</div>
		</div>
	)
}
