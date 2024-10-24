"use client";

import { Button } from "@components/Button";
import { Container } from "@components/Container";

const PortfolioSection = ({
	align,
	backgroundImage,
	ctaLabel,
	ctaLink,
	excerpt,
	id,
	index,
	subTitle,
	title,
}) => {
	return (
		<section
			className={`portfolio bg-gray-100 py-12 md:py-32 bg-cover bg-center`}
			id={id}
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<Container size="1290px">
				<div className={`text-${align} relative`}>
					<span className="block text-gold text-lg font-bold mb-4">
						{index}
					</span>
					<p className="block text-gold text-lg font-bold uppercase">
						{subTitle}
					</p>
				</div>
				<header className={`text-${align}`}>
					<h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
				</header>
				<div className="flex flex-col items-center">
					<p className="text-white text-base max-w-lg mb-6">{excerpt}</p>
					<Button href={ctaLink}>{ctaLabel}</Button>
				</div>
			</Container>
		</section>
	);
};

export default PortfolioSection;
