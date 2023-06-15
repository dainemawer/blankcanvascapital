/*
 * SkipLink
 *
 * Site Main Content Skip Link
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import { StyledAnchor } from './SkipLink.styled';
import { SkipLinkProps } from './SkipLink.types';

export const SkipLink: FC<SkipLinkProps> = (): JSX.Element => {
	return (
		<StyledAnchor href="#main-content">Skip to main content</StyledAnchor>
	)
}
