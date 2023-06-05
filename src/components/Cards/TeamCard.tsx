/*
 * Team Card
 *
 * Team Card Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import Image from 'next/image';

interface CardProps {
	id?: string;
	className?: string;
	image?: string;
	name?: string;
	position?: string;
	linkedin?: string;
}

export const TeamCard: FC<CardProps> = ({ id, className, image, name, position, linkedin }): JSX.Element => {
	return (
		<article id={id} className={className}>
			{image && (
				<figure>
					<Image loading="lazy" decoding="async" alt={name} src={image} width={450} height={500} />
				</figure>
			)}
			<figcaption>
				{name && <h4>{name}</h4>}
				{position && <h5>{position}</h5>}
				{linkedin && <span>linkedin</span>}
			</figcaption>
		</article>
	);
}
