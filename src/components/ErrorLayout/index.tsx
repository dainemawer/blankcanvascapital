"use client";

import { FC } from "react";
import { Button } from "@components/Button";
import { ErrorProps } from "./ErrorLayout.types";

export const ErrorLayout: FC<ErrorProps> = ({
	eyebrow = "",
	lead = "",
	permalink = "",
	title = "",
}): JSX.Element => {
	return (
		<div className="flex justify-center min-h-[calc(100vh-343.8px)]">
			<div className="flex flex-col justify-center pl-40">
				{title && (
					<h1 className="text-grey font-primary text-[6rem] leading-none relative m-0">
						{eyebrow && (
							<span className="border-b-3 border-gold text-gold font-primary font-bold text-[5rem] absolute left-[-112px] top-0 pb-5 transform -rotate-90 origin-bottom">
								{eyebrow}
							</span>
						)}
						{title}
					</h1>
				)}
				{lead && (
					<p className="text-dove font-secondary text-md font-normal leading-tight mb-7">
						{lead}
					</p>
				)}
				{permalink && <Button href="/">{permalink}</Button>}
			</div>
		</div>
	);
};
