"use client";

import { FC } from "react";
import Image from "next/image";

const Sidebar: FC = (): JSX.Element => {
	return (
		<aside className="flex flex-col mt-0 md:border-l-2 md:border-copper md:pl-10">
			<a
				className="no-underline"
				href="https://goo.gl/maps/Mj5tpH9Wnd2v5SjG8"
				rel="noreferrer"
				target="_blank"
			>
				<Image
					alt="Google Maps"
					className="hidden md:block"
					height={261}
					loading="lazy"
					src="/google-map-new.png"
					style={{ filter: "grayscale(100%)" }}
					width={400}
				/>
			</a>
			<address className="border-t-2 border-copper mb-5 pt-6 not-last:mt-12">
				<h2 className="font-secondary font-semibold text-sm uppercase leading-7 m-0">
					Address
				</h2>
				<p className="font-primary text-sm font-medium leading-8 mb-8">
					1st Floor
					<br />
					30 Melrose Boulevard,
					<br />
					Melrose Arch, Johannesburg
					<br />
					South Africa
				</p>
				<p className="font-secondary text-sm font-medium">
					<strong>GPS:</strong> 34.21.23 S, 28.32.12 E
				</p>
			</address>
			<address className="border-t-2 border-copper mb-5 pt-6 not-last:mt-12">
				<h2 className="font-secondary font-semibold text-sm uppercase leading-7 m-0">
					Contact Details
				</h2>
				<p className="font-secondary text-sm font-medium">
					<strong>Email: </strong>
					<a
						className="relative text-black hover:no-underline"
						href="mailto:info@blankcanvascapital.com"
					>
						info@blankcanvascapital.com
						<span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gold transition-all duration-300 ease-in-out hover:w-full"></span>
					</a>
				</p>
				<p className="font-secondary text-sm font-medium">
					<strong>LinkedIn: </strong>
					<a
						className="relative text-black hover:no-underline"
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
