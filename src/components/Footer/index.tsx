"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Colophon } from "@components/Colophon";
import { Container } from "@components/Container";

const Footer: FC = (): JSX.Element => {
	return (
		<footer
			aria-label="Site Footer"
			className="site-footer"
			id="site-footer"
			role="contentinfo"
		>
			<div className="bg-aluminum py-10 md:py-15">
				<Container>
					<div className="flex items-start justify-start">
						<Link href="/">
							<Image
								alt="Blank Canvas Capital Logo Square"
								decoding="async"
								height={56}
								loading="lazy"
								src="/blank-canvas-capital-square.png"
								width={52}
							/>
						</Link>
					</div>
				</Container>
			</div>
			<Colophon />
		</footer>
	);
};

export default Footer;
