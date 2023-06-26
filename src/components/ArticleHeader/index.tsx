/*
 * Quote
 *
 * Quote Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import { StyledHeader, StyledEyebrow, StyledHeading } from './ArticleHeader.styled';
import { ArticleHeaderProps } from './ArticleHeader.types';

const ArticleHeader: FC<ArticleHeaderProps> = ({ eyebrow, title }): JSX.Element => {
	return (
		<StyledHeader>
			<StyledEyebrow>
				{eyebrow}
			</StyledEyebrow>
			<StyledHeading>
				{title}
			</StyledHeading>
		</StyledHeader>
	)
}

export default ArticleHeader;
