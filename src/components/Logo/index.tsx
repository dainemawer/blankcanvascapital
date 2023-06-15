/*
 * Logo
 *
 * Logo Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import Image from 'next/image'

export const Logo: FC = (): JSX.Element => {
	return (
		<Image
			alt="Blank Canvas Capital Logo"
			height={38}
			src="/blank-canvas-capital-horizontal.png"
			width={250}
		/>
	)
}
