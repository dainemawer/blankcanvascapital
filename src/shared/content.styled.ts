import styled from '@emotion/styled';
import { breakpoints } from '@theme/breakpoints';
import { StyledGridProps, StyledBox } from './styles.types';

const StyledArticle = styled.article`
	margin-bottom: 4rem;

	${breakpoints.md} {
		grid-column: 2 / 3;
		margin-bottom: 5.625rem;
	}
`;

const StyledGrid = styled.div<StyledGridProps>`
	display: grid;

	${breakpoints.md} {
		grid-template-columns:
			minmax(50px, 150px) minmax(min-content,
				${props => props.maxWidth || "1024px"});
	}

	@media (min-width: 1280px) {
		grid-template-columns: minmax(min-content, 150px)
		minmax(min-content, ${props => props.maxWidth || "1024px"});
	}
`;

const StyledBox = styled.div<StyledBox>`
	align-items: ${props => props.align};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

export {
	StyledBox,
	StyledArticle,
	StyledGrid,
}
