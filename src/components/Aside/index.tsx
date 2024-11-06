"use client";

import { FC } from "react";

const Aside: FC = (): JSX.Element => {
	return (
		<aside className="relative md:pr-8">
			<div className="bg-copper h-[2px] w-[140px] relative top-6 md:w-full md:left-1/2 md:top-[150px] md:transform md:-translate-x-1/2" />
		</aside>
	);
};

export default Aside;
