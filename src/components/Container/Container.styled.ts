import styled from '@emotion/styled'
import { ContainerProps } from './Container.types';

const StyledContainer = styled.div`
	margin: 0 auto;
	max-width: ${(props: ContainerProps) => props.size};
	padding: 0 1.25rem;
`;

export { StyledContainer };
