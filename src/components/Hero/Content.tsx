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
	subtitle: string;
	title: string;
}

export const Content: FC<ContentProps> = ({ logo, subtitle, title }): JSX.Element => {
	return (
		<div>
			{logo && <Image alt="Blank Canvas CapitalLogo" height={333} src={logo} width={307} />}
			<div>
				{title && <h1></h1>}
				{subtitle && <p></p>}
			</div>
		</div>
	)
}
