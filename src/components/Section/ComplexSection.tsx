"use client";

import type { FC } from "react";
import type { ComplexSectionProps } from "./Section.types";
import { Container } from "@components/Container";
import { Button } from "@components/Button";

const ComplexSection: FC<ComplexSectionProps> = ({
	backgroundColor,
	children,
	contentClassName,
	ctaLabel,
	ctaLink,
	excerpt,
	eyebrow,
	id,
	image,
	index,
	subTitle,
	title,
	variant,
}) => {
	if (variant === "our-team") {
		return (
			<section className={`${backgroundColor} py-12 md:py-32`} id={id}>
				<Container size="1290px">
					<div className="grid md:grid-cols-[43px_1fr] gap-5">
						<div className="relative pb-4 md:pb-0">
							<span className="block text-gold text-lg font-bold mb-4">
								{index}
							</span>
							<span className="block text-gold font-bold text-lg uppercase border-b-2 border-gold pb-4">
								{eyebrow}
							</span>
						</div>
						<div className={contentClassName}>
							<header className="text-left">
								<h2 className="text-4xl font-bold text-black mb-4">{title}</h2>
							</header>
							<div className="grid grid-cols-1 gap-5">{children}</div>
							<div className="text-left">
								<p className="text-gray-700 text-base mb-6">{excerpt}</p>
								<Button href={ctaLink}>{ctaLabel}</Button>
							</div>
						</div>
					</div>
				</Container>
			</section>
		);
	}

	if (variant === "investment-portfolio") {
		return (
			<section className="bg-gray-100 py-12 md:py-32" id={id}>
				<Container size="1290px">
					<header className="text-center">
						<h2 className="inline-block relative text-4xl font-bold text-black">
							<span className="block text-gold text-lg font-bold mb-4">
								{index}
							</span>
							<span className="block uppercase text-gold border-b-2 border-gold pb-4">
								{eyebrow}
							</span>
							{title}
						</h2>
					</header>
				</Container>
				<div className="grid grid-cols-1 gap-5">
					<div className="text-center">
						<h3 className="text-2xl font-bold">{subTitle}</h3>
						<p className="text-gray-700 text-base mb-6">{excerpt}</p>
						<Button href={ctaLink}>{ctaLabel}</Button>
					</div>
					{children}
				</div>
			</section>
		);
	}

	return null;
};

export default ComplexSection;
