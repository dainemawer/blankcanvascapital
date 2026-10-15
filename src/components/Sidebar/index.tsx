"use client";

import { FC } from "react";

const Sidebar: FC = (): React.JSX.Element => {
	return (
		<aside className="flex flex-col mt-0 lg:border-l-2 lg:border-copper lg:pl-10">
			<address className="mb-5">
				<h2 className="m-0 text-sm not-italic font-semibold leading-6 uppercase font-secondary">
					Johannesburg Address
				</h2>
				<p className="not-italic leading-6 font-primary text-address font-regular">
					1st Floor
					<br />
					30 Melrose Boulevard,
					<br />
					Melrose Arch, Johannesburg
					<br />
					South Africa
				</p>
			</address>
			<address className="pt-6 mb-5 border-t-2 border-copper">
				<h2 className="m-0 text-sm not-italic font-semibold leading-6 uppercase font-secondary">
					Cape Town Address
				</h2>
				<p className="not-italic leading-6 font-primary text-address font-regular">
					Foundry One
					<br />
					74 Cardiff Street
					<br />
					De Waterkant
					<br />
					Cape Town
				</p>
			</address>
			<address className="pt-6 mb-5 border-t-2 border-copper">
				<h2 className="m-0 not-italic font-bold leading-8 uppercase font-secondary text-address">
					Contact Details
				</h2>
				<p className="not-italic font-secondary text-address">
					<strong className="font-medium">Email: </strong>
					<a
						className="relative text-black hover:no-underline font-regular"
						href="mailto:info@blankcanvascapital.com"
					>
						info@blankcanvascapital.com
						<span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gold transition-all duration-300 ease-in-out hover:w-full"></span>
					</a>
				</p>
				<p className="not-italic font-secondary text-address font-regular">
					<strong className="font-medium">LinkedIn: </strong>
					<a
						className="relative text-black hover:no-underline font-regular"
						href="https://www.linkedin.com/company/blank-canvas-capital/"
						rel="noopener noreferrer"
						target="_blank"
					>
						@blankcanvascapital
						<span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gold transition-all duration-300 ease-in-out hover:w-full"></span>
					</a>
				</p>
			</address>
		</aside>
	);
};

export default Sidebar;
