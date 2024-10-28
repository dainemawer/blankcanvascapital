"use client";

import { FC } from "react";
import { Button } from "@components/Button";
import { Paragraph } from "@components/Paragraph";

interface CallToActionProps {
	buttonLink?: string;
	buttonText?: string;
	description?: string;
	eyebrow?: string;
	title?: string;
}

export const CallToAction: FC<CallToActionProps> = ({
	buttonLink,
	buttonText,
	description,
	eyebrow,
	title,
}): JSX.Element => {
	return (
		<section className="py-32 bg-grey">
			<div className="flex flex-col items-center justify-center max-w-[1024px] mx-auto px-5">
				{eyebrow && (
					<p className="font-semibold text-center uppercase text-gold font-primary text-md">
						{eyebrow}
					</p>
				)}
				{title && (
					<h3 className="my-4 text-xl font-bold text-center text-white font-primary">
						{title}
					</h3>
				)}
				{description && (
					<p className="mb-12 font-normal text-center text-silverChalice font-secondary text-md">
						{description}
					</p>
				)}
				{buttonLink && <Button href={buttonLink}>{buttonText}</Button>}
			</div>
		</section>
	);
};

export default CallToAction;
