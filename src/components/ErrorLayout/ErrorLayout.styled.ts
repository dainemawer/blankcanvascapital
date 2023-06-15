import styled from '@emotion/styled'
import { colors } from '@theme/colors';
import { fonts } from '@theme/fonts';

const StyledWrap = styled.div`
	display: flex;
	justify-content: center;
	min-height: calc(100vh - 343.8px);
`;

const StyledH1 = styled.h1`
	color: ${colors.grey};
	font-family: ${fonts.primary};
	font-size: 96px;
	line-height: 1;
	margin: 0;
	position: relative;
`;

const StyledSpan = styled.span`
	color: ${colors.gold};
`;

const StyledParagraph = styled.p`
	color: ${colors.dove};
	font-family: ${fonts.secondary};
	font-size: 1.5rem;
	font-weight: 400;
	line-height: 1;
	margin-bottom: 1.75rem;
`;

const StyledTextWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 10rem;
`;

const StyledEyebrow = styled.span`
	border-bottom: 3px solid ${colors.gold};
	color: ${colors.gold};
	font-family: ${fonts.primary};
	font-size: 80px;
	font-weight: 700;
	left: -112px;
	padding-bottom: 1.25rem;
	position: absolute;
	top: 0;
	transform: rotate(-90deg);
    transform-origin: bottom;
`;

export {
	StyledWrap,
	StyledH1,
	StyledSpan,
	StyledParagraph,
	StyledTextWrap,
	StyledEyebrow
}
