"use client";

import { FC } from "react";
import { Button } from "@components/Button";

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
		<section className="bg-grey py-32">
			<div className="flex flex-col items-center justify-center max-w-[1024px] mx-auto px-5">
				{eyebrow && (
					<p className="text-gold font-primary font-semibold text-md uppercase text-center">
						{eyebrow}
					</p>
				)}
				{title && (
					<h3 className="text-white font-primary font-bold text-xl text-center my-4">
						{title}
					</h3>
				)}
				{description && (
					<p className="text-silverChalice font-secondary font-normal text-md text-center mb-12">
						{description}
					</p>
				)}
				{buttonLink && <Button href={buttonLink}>{buttonText}</Button>}
			</div>
		</section>
	);
};

export default CallToAction;
