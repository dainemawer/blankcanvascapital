"use client";

import { FC } from "react";
import { Icon } from "@components/Icon";

const InvestmentSection = ({
	align,
	bgColor,
	children,
	eyebrow,
	icon,
	maxWidth,
	name,
	title,
}) => {
	/* return (
		<section
			className={`relative ${bgColor === "#292929" ? "text-white" : ""} bg-${
				bgColor || "white"
			} py-8 md:py-16`}
			id={name}
		>
			<div
				className={`mx-auto max-w-${maxWidth || "7xl"} px-6 ${
					align === "right" ? "grid md:grid-cols-2" : "grid md:grid-cols-2"
				}`}
			>
				{align === "left" && (
					<>
						<div className="relative mb-7.5 md:mb-0 md:border-r-2 border-gold">
							<span className="block absolute h-4 w-4 rounded-full bg-gold top-0 right-[-9px]" />
							<span className="flex items-center justify-center rounded-full w-14 h-14 bg-gold">
								<Icon icon={icon} />
							</span>
						</div>
						<div>
							<header className="text-left md:text-left">
								<p className="text-gold font-primary font-semibold text-sm uppercase mb-3.5 md:mb-0">
									{eyebrow}
								</p>
								<h3 className="font-primary font-bold text-4xl leading-tight mb-5 md:mb-14">
									{title}
								</h3>
							</header>
							<div className="flex justify-start md:justify-start">
								{children}
							</div>
						</div>
					</>
				)}
			</div>
		</section>
	); */
};

export default InvestmentSection;
