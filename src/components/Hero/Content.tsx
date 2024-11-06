"use client";

import { FC } from "react";
import Image from "next/image";

interface ContentProps {
	logo: string;
	subtitle: string;
	title: string;
	variation?: string;
}

export const Content: FC<ContentProps> = ({
	logo,
	subtitle,
	title,
	variation,
}): JSX.Element => {
	return (
		<div className="absolute inset-0 z-50 flex flex-col items-center justify-center text-white p-8 sm:p-12 lg:p-8">
			{variation === "horizontal" && (
				<Image
					alt="Blank Canvas Capital Logo"
					className="horizontal-logo"
					height={666}
					src="/blank-canvas-capital-horizontal.png"
					style={{ filter: "invert(1)" }}
					width={614}
				/>
			)}
			{variation === "natural" && (
				<>
					{logo && (
						<Image
							alt="Blank Canvas CapitalLogo"
							height={333}
							src={logo}
							width={307}
						/>
					)}
					<div className="sm:ml-10 lg:ml-24 lg:max-w-[650px]">
						{title && (
							<h1 className="hidden sm:block text-lg font-primary font-bold leading-tight lg:text-xl">
								{title}
							</h1>
						)}
						{subtitle && (
							<p className="hidden sm:block text-md font-secondary font-normal leading-snug">
								{subtitle}
							</p>
						)}
					</div>
				</>
			)}
			{variation === "bw" && (
				<Image
					alt="Blank Canvas Capital Logo"
					className="horizontal-logo"
					height={666}
					src="/blank-canvas-capital-horizontal.png"
					width={614}
				/>
			)}
		</div>
	);
};
