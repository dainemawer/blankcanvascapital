"use client";

import { FC } from "react";
import Image from "next/image";
import { Content } from "./Content";
import { Container } from "@components/Container";

interface HeroProps {
	image: string;
	label: string;
	logo: string;
	subtitle: string;
	title: string;
	variation: string;
}

export const Hero: FC<HeroProps> = ({
	image,
	label,
	logo,
	subtitle,
	title,
	variation,
}): JSX.Element => {
	return (
		<section className="mt-4">
			<Container size="1440px" relative>
				{image && (
					<figure className={`relative ${title ? "object-cover" : ""}`}>
						<Image
							alt={label || "default alt text"}
							className="w-full h-auto rounded-[20px_0] sm:object-center lg:object-cover"
							height={668}
							loading="eager"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
							src={image}
							width={1657}
							priority
						/>
						{/* Decorative border for large screens */}
						{image && (
							<div className="hidden lg:block absolute top-0 right-[-10px] h-[140px] w-[2px] bg-copper"></div>
						)}
					</figure>
				)}
				{title && (
					<Content
						logo={logo || ""}
						subtitle={subtitle || ""}
						title={title}
						variation={variation}
					/>
				)}
			</Container>
		</section>
	);
};
