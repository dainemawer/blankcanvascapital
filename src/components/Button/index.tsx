/*
 * Button
 *
 * Button Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import Link from 'next/link';
import { StyledButton } from './Button.styled';

interface ButtonProps {
	id?: string;
	children: React.ReactNode;
	href: string;
	type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<ButtonProps> = ({ id = '', href = '', children = null, type = 'button' }): JSX.Element => {

	if (!href) {
		return (
			<StyledButton type={type} id={id}>{children}</StyledButton>
		);
	}

	return (
		<Link className="button" href={href}>{children}</Link>
	);
}
