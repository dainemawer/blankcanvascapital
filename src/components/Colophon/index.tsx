"use client";

import { FC } from "react";
import Link from "next/link";
import { Container } from "@components/Container";

export const Colophon: FC = (): JSX.Element => {
	return (
		<div className="py-5 text-white border-b-4 bg-grey border-gold font-primary">
			<Container>
				<div className="flex flex-col items-start justify-between md:flex-row">
					<p className="mb-2 text-sm leading-6 md:mb-0">
						&copy; 2023. Blank Canvas Capital. All Rights Reserved
					</p>
					<nav>
						<ul className="flex p-0 m-0 list-none">
							<li className="leading-6">
								<Link
									className="relative text-sm text-white"
									href="/disclaimer"
								>
									Disclaimer
									<span className="block absolute left-0 bottom-[-4px] h-[2px] w-0 bg-gold transition-all duration-300 ease-in-out"></span>
								</Link>
							</li>
							<li className="ml-4 leading-6">
								<Link
									className="relative text-sm text-white"
									href="/terms-conditions"
								>
									Terms and Conditions
									<span className="block absolute left-0 bottom-[-4px] h-[2px] w-0 bg-gold transition-all duration-300 ease-in-out"></span>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</Container>
		</div>
	);
};
