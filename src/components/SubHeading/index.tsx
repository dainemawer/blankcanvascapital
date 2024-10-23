/*
 * Quote
 *
 * Quote Component
 *
 * @returns {JSX.Element}
 */

import { FC } from "react";
import { StyledSubHeading, StyledSubHeadingSpan } from "./SubHeading.styled";
import { SubHeadingProps } from "./SubHeading.types";

const SubHeading: FC<SubHeadingProps> = ({ heading }): JSX.Element => {
	return (
		<div>
			<StyledSubHeading>
				<StyledSubHeadingSpan>{heading}</StyledSubHeadingSpan>
			</StyledSubHeading>
		</div>
	);
};

export default SubHeading;
