/*
 * Aside
 *
 * Aside Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'

import {
	StyledAside,
	StyledLine,
} from './Aside.styled';

const Aside: FC = (): JSX.Element => {
	return (
		<StyledAside>
			<StyledLine />
		</StyledAside>
	)
}

export default Aside;
