/*
 * Colophon
 *
 * Colophon Component
 *
 * @returns {JSX.Element}
 */

import { FC } from "react";
import Link from "next/link";
import { Container } from "@components/Container";
import {
	StyledColophon,
	StyledWrapper,
	StyledList,
	StyledListItem,
	StyledCopyright,
} from "./Colophon.styled";

export const Colophon: FC = (): JSX.Element => {
	return (
		<StyledColophon>
			<Container>
				<StyledWrapper>
					<StyledCopyright>
						&copy; 2023. Blank Canvas Capital. All Rights Reserved
					</StyledCopyright>
					<nav>
						<StyledList>
							<StyledListItem>
								<Link href="/disclaimer">Disclaimer</Link>
							</StyledListItem>
							<StyledListItem>
								<Link href="/terms-conditions">Terms and Conditions</Link>
							</StyledListItem>
						</StyledList>
					</nav>
				</StyledWrapper>
			</Container>
		</StyledColophon>
	);
};
