/*
 * SkipLink
 *
 * Site Main Content Skip Link
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import styled from '@emotion/styled';

interface SkipLinkProps { }

const StyledAnchor = styled.a`
	&:not(:focus):not(:active) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
`;

export const SkipLink: FC<SkipLinkProps> = (): JSX.Element => {
	return (
		<StyledAnchor href="#main-content">Skip to main content</StyledAnchor>
	)
}
