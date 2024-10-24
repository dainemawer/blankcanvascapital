"use client";

import type { FC } from "react";
import Image from "next/image";
import type { SimpleSectionProps } from "./Section.types";
import { Container } from "@components/Container";
import { Button } from "@components/Button";

const SimpleSection: FC<SimpleSectionProps> = ({
	align,
	backgroundColor,
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
}) => {
	return (
		<section className={`simple py-12 md:py-32 ${backgroundColor}`} id={id}>
			<Container size="1290px">
				<div className={`grid md:grid-cols-2 gap-5`}>
					<div className={`relative ${align === "left" ? "order-2" : ""}`}>
						<span className="block text-gold text-lg font-bold mb-4">
							{index}
						</span>
						<span className="block text-gold font-bold text-lg uppercase border-b-2 border-gold pb-4">
							{eyebrow}
						</span>
					</div>
					<div className={`${contentClassName}`}>
						<header className={`text-${align}`}>
							<h2 className="text-4xl font-bold text-black mb-4">{title}</h2>
						</header>
						<div className="grid grid-cols-1 gap-5">
							<Image alt="" height={501} src={image} width={450} />
							<div className="text-left">
								<h3 className="text-2xl font-bold mb-4">{subTitle}</h3>
								<p className="text-gray-700 text-base mb-6">{excerpt}</p>
								<Button href={ctaLink}>{ctaLabel}</Button>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default SimpleSection;
