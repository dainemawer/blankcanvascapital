"use client";

import { FC } from "react";
import Link from "next/link";
import { Container } from "@components/Container";

export const Colophon: FC = (): JSX.Element => {
	return (
		<div className="bg-grey border-b-4 border-gold text-white font-primary py-5">
			<Container>
				<div className="flex flex-col md:flex-row justify-between items-start">
					<p className="text-sm leading-6 mb-2 md:mb-0">
						&copy; 2023. Blank Canvas Capital. All Rights Reserved
					</p>
					<nav>
						<ul className="flex list-none m-0 p-0">
							<li className="leading-6">
								<Link
									className="text-sm relative text-white"
									href="/disclaimer"
								>
									Disclaimer
									<span className="block absolute left-0 bottom-[-4px] h-[2px] w-0 bg-gold transition-all duration-300 ease-in-out"></span>
								</Link>
							</li>
							<li className="leading-6 ml-4">
								<Link
									className="text-sm relative text-white"
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
