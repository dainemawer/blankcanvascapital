/*
 * Heading
 *
 * Heading Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import {
	StyledHeadingOne,
	StyledHeadingTwo,
	StyledHeadingThree,
	StyledHeadingFour,
	StyledHeadingFive,
	StyledHeadingSix
} from './Heading.styled';
import { HeadingProps } from './Heading.types';

export const Heading: FC<HeadingProps> = ({ as, children }): JSX.Element => {
	switch (as) {
		case 'h1':
			return <StyledHeadingOne>{children}</StyledHeadingOne>;
		case 'h2':
			return <StyledHeadingTwo>{children}</StyledHeadingTwo>;
		case 'h3':
			return <StyledHeadingThree>{children}</StyledHeadingThree>;
		case 'h4':
			return <StyledHeadingFour>{children}</StyledHeadingFour>;
		case 'h5':
			return <StyledHeadingFive>{children}</StyledHeadingFive>;
		case 'h6':
			return <StyledHeadingSix>{children}</StyledHeadingSix>;
		default:
			return null
	}
}
