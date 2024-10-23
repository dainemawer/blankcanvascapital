"use client";

import { FC } from "react";
import Image from "next/image";
import { TeamCardProps } from "./TeamCard.types";

export const TeamCard: FC<TeamCardProps> = ({
	className,
	id,
	image,
	linkedin,
	name,
	position,
}): JSX.Element => {
	return (
		<article className={className} id={id}>
			{image && (
				<figure>
					<Image
						alt={name}
						decoding="async"
						height={500}
						loading="lazy"
						src={image}
						width={450}
					/>
				</figure>
			)}
			<figcaption>
				{name && <h4>{name}</h4>}
				{position && <h5>{position}</h5>}
				{linkedin && <span>linkedin</span>}
			</figcaption>
		</article>
	);
};
