import styled from '@emotion/styled'
import { colors } from '@theme/colors';
import { fonts } from '@theme/fonts';

const StyledWrap = styled.div`
	display: flex;
	min-height: calc(100vh - 343.8px);
	justify-content: center;
`;

const StyledH1 = styled.h1`
	color: ${colors.grey};
	font-family: ${fonts.primary};
	line-height: 1;
	font-size: 96px;
	margin: 0;
	position: relative;
`;

const StyledSpan = styled.span`
	color: ${colors.gold};
`;

const StyledParagraph = styled.p`
	color: #777777;
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
	color: ${colors.gold};
	font-family: ${fonts.primary};
	border-bottom: 3px solid ${colors.gold};
	font-weight: 700;
	font-size: 80px;
	position: absolute;
	padding-bottom: 1.25rem;
	transform: rotate(-90deg);
	left: -112px;
    top: 0;
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
