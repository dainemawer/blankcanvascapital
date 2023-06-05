/*
 * Logo
 *
 * Logo Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import Image from 'next/image'

interface LogoProps { }

export const Logo: FC<LogoProps> = (): JSX.Element => {
	return (
		<Image alt="Blank Canvas Capital Logo" width="250" height="38" src="/blank-canvas-capital-horizontal.png" />
	)
}
