"use client";

import { FC } from "react";
import { StyledAnchor } from "./SkipLink.styled";
import { SkipLinkProps } from "./SkipLink.types";

const SkipLink: FC<SkipLinkProps> = (): JSX.Element => {
	return <StyledAnchor href="#main-content">Skip to main content</StyledAnchor>;
};

export default SkipLink;
