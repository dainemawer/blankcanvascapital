/*
 * Header
 *
 * Global Site Header
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import { StyledContainer } from './Container.styled'
import { ContainerProps } from './Container.types'

export const Container: FC<ContainerProps> = ({
	children,
	size = '1280px',
}): JSX.Element => {
	return (
		<StyledContainer size={size}>
			{children}
		</StyledContainer>
	)
}
