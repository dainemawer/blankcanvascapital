import styled from '@emotion/styled'
import { ContainerProps } from './Container.types';
import { breakpoints } from '@theme/breakpoints';

const StyledContainer = styled.div`
	margin: 0 auto;
	max-width: ${(props: ContainerProps) => props.size};
	padding: 0 1.25rem;
	${(props: ContainerProps) => props.relative && 'position: relative;'};

	${breakpoints.sm} {
		padding: 0 1.5rem;
	}

	${breakpoints.md} {
		padding: 0 1.25rem;
	}
`;

export { StyledContainer };
