/*
 * Header
 *
 * Global Site Header
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import styled from '@emotion/styled'

interface ContainerProps {
	size?: string;
	children: React.ReactNode;
}

const StyledContainer = styled.div`
	margin: 0 auto;
	max-width: ${(props: ContainerProps) => props.size};
	padding: 0 1.25rem;

	@media (min-width: 1540px) {
		padding: 0;
	}
`;

export const Container: FC<ContainerProps> = ({ size = '1280px', children }): JSX.Element => {
	return (
		<StyledContainer size={size}>
			{children}
		</StyledContainer>
	)
}
