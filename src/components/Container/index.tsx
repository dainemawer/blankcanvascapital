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
	relative = false,
	size = '1280px',
}): JSX.Element => {
	return (
		<StyledContainer relative={relative} size={size}>
			{children}
		</StyledContainer>
	)
}
