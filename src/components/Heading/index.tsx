/*
 * Heading
 *
 * Heading Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import styled from '@emotion/styled';

interface HeadingProps {
	as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	children: React.ReactElement | string;
}

const StyledHeadingOne = styled.h1``;
const StyledHeadingTwo = styled.h2`
	font-size: 96px;
`;
const StyledHeadingThree = styled.h3`
	font-size: 48px;
`;
const StyledHeadingFour = styled.h4`
	font-size: 20px;
`;
const StyledHeadingFive = styled.h5`
	
`;
const StyledHeadingSix = styled.h6``;

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
