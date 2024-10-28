"use client";

import { Hero } from "@components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Hero
				subtitle="Blank Canvas Capital is an experienced group of talented
				entrepreneurs pioneering the way
				forward across the South African financial landscape."
				image="/bw-home.png"
				label="Aeroplane flying over buildings"
				logo="/bcc-logo.png"
				title="Every investment starts with an idea."
				variation="bw"
			/>

			<section className="container grid max-w-4xl grid-cols-1 gap-4 px-5 mx-auto my-12 md:my-32 md:gap-8 lg:max-w-7xl md:grid-cols-section">
				<div className="relative before:content-[''] pb-4 md:pb-0 before:block before:absolute before:right-0 before:bg-gold before:w-full before:h-[1px] before:bottom-0 md:before:w-[2px] md:before:h-full">
					<span className="block font-bold text-gold font-primary text-subheading">
						01
					</span>
					<span className="block w-full font-semibold leading-normal uppercase md:absolute md:-rotate-90 right-4 text-gold bottom-2 font-primary whitespace-nowrap text-eyebrow">
						Our Investments, Your Business
					</span>
				</div>
				<div>
					<header className="mb-6 md:mb-10">
						<h2 className="font-bold leading-none text-heading font-primary">
							About Us
						</h2>
					</header>
					<div className="grid items-start lg:items-center gap-6 md:gap-8 lg:gap-20 grid-cols-1 sm:grid-cols-[1fr_2fr] md:grid-cols-[450px_1fr]">
						<figure>
							<Image
								alt="Blank Canvas Captial"
								className="rounded-tr-3xl rounded-bl-3xl h-[330px] sm:h-[250px] md:h-[501px] object-cover"
								height="501"
								src="/about-us.jpg"
								width="450"
							/>
						</figure>
						<div>
							<h3 className="mb-4 font-bold leading-tight text-balance text-sectionHeading font-primary">
								Unleashing Potential
								<br /> Creating Value
								<br /> Partnering for Exceptional Returns
							</h3>
							<p className="mb-4 text-eyebrow text-silver">
								Blank Canvas Capital is a value-adding investment firm dedicated
								to supporting outstanding entrepreneurs and business owners in
								growing successful businesses. We provide capital, expertise,
								deep strategic insights, and a vast network of industry
								connections, coupled with a different way of thinking, to help
								our investee businesses achieve their full potential and achieve
								exceptional returns for our investors.
							</p>
							<p className="flex items-start">
								<Link className="button" href="/about-us">
									Our Business
								</Link>
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="px-5 py-12 my-12 md:py-32 md:my-32 bg-tin/30">
				<div className="container grid max-w-4xl grid-cols-1 gap-10 mx-auto lg:max-w-7xl md:grid-cols-section">
					<div className="relative before:content-[''] pb-4 md:pb-0 before:block before:absolute before:right-0 before:bg-gold before:w-full before:h-[1px] before:bottom-0 md:before:w-[2px] md:before:h-full">
						<span className="block font-bold text-gold font-primary text-subheading">
							02
						</span>
						<span className="block w-full font-semibold leading-normal uppercase md:absolute md:-rotate-90 right-4 text-gold bottom-2 font-primary whitespace-nowrap text-eyebrow">
							The People Behind The Investments
						</span>
					</div>
					<div className="flex flex-col md:mb-24 md:flex-row md:flex-wrap">
						<header className="w-full mb-10">
							<h2 className="font-bold leading-none text-heading font-primary">
								Our Team
							</h2>
						</header>
						<div className="grid grid-flow-col gap-8 overflow-x-auto overflow-y-hidden grid-cols-team-overflow no-scrollbar md:grid-cols-team lg:basis-8/12">
							<article>
								<figure className="mb-4">
									<Image
										alt=""
										className="h-[257px] w-[230px] rounded-tr-3xl rounded-bl-3xl object-cover"
										height="500"
										src="/team/neil.png"
										width="447"
									/>
								</figure>
								<h3 className="font-semibold leading-none uppercase font-primary text-eyebrow">
									Neil Freeman
								</h3>
								<p className="mt-2 font-semibold leading-none uppercase font-primary text-eyebrow text-gold">
									Partner
								</p>
							</article>
							<article>
								<figure className="mb-4">
									<Image
										alt=""
										className="h-[257px] w-[230px] rounded-tr-3xl rounded-bl-3xl object-cover"
										height="500"
										src="/team/jd.png"
										width="447"
									/>
								</figure>
								<h3 className="font-semibold leading-none uppercase font-primary text-eyebrow">
									JD De Villiers
								</h3>
								<p className="mt-2 font-semibold leading-none uppercase font-primary text-eyebrow text-gold">
									Partner
								</p>
							</article>
							<article>
								<figure className="mb-4">
									<Image
										alt=""
										className="h-[257px] w-[230px] rounded-tr-3xl rounded-bl-3xl object-cover"
										height="500"
										src="/team/darren.png"
										width="447"
									/>
								</figure>
								<h3 className="font-semibold leading-none uppercase font-primary text-eyebrow">
									Darren Roy
								</h3>
								<p className="mt-2 font-semibold leading-none uppercase font-primary text-eyebrow text-gold">
									Partner
								</p>
							</article>
						</div>
						<div className="mt-6 lg:mt-0 lg:basis-4/12">
							<p className="max-w-xl mt-4 mb-4 lg:max-w-none md:mt-0 text-eyebrow text-silver">
								A dynamic and collaborative team with a track record of
								delivering exceptional returns through extensive investment
								expertise and a partnership-oriented culture
							</p>
							<p className="flex items-start">
								<Link className="button" href="/team">
									Get To Know Us
								</Link>
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="container grid max-w-4xl grid-cols-1 gap-8 px-5 mx-auto my-12 md:my-32 lg:max-w-7xl md:grid-cols-section-reverse">
				<div>
					<header className="mb-6 md:mb-10">
						<h2 className="font-bold leading-none md:text-right text-heading font-primary">
							Our Approach
						</h2>
					</header>
					<div className="grid items-start lg:items-center gap-6 md:gap-8 lg:gap-20 grid-cols-1 sm:grid-cols-[2fr_2fr] lg:grid-cols-[1fr_450px]">
						<div className="lg:row-auto lg:col-auto">
							<h3 className="mb-4 font-bold leading-tight md:text-right text-balance text-sectionHeading font-primary">
								Incredible Investments
								<br /> Incredible People
							</h3>
							<p className="mb-4 md:text-right text-eyebrow text-silver">
								With a flexible investment approach across investment size,
								industry type and capital structure, we seek scalable businesses
								that can deliver superior returns on capital.
							</p>
							<p className="mb-4 md:text-right text-eyebrow text-silver">
								Partner selection is key, and we prioritise backing strong
								entrepreneurs and business owners who share our vision and
								commitment to success. We engage fully in each opportunity, from
								initial investment to exit, and prioritize long-term
								partnerships with our investee businesses.
							</p>
							<p className="flex items-end md:justify-end">
								<Link className="button" href="/investment-approach">
									Investment Approach
								</Link>
							</p>
						</div>
						<figure className="row-start-1 md:col-start-2 lg:row-auto lg:col-auto">
							<Image
								alt="Blank Canvas Captial"
								className="rounded-tr-3xl rounded-bl-3xl h-[330px] md:h-[501px] object-cover"
								height="501"
								src="/approach.jpg"
								width="450"
							/>
						</figure>
					</div>
				</div>
				<div className="row-start-1 md:row-auto relative before:content-[''] pb-4 md:pb-0 before:block before:absolute before:right-0 md:before:left-0 before:bg-gold before:w-full before:h-[1px] before:bottom-0 md:before:w-[2px] md:before:h-full">
					<span className="block font-bold md:text-right text-gold font-primary text-subheading">
						03
					</span>
					<span className="block w-full font-semibold leading-normal uppercase md:absolute md:-rotate-90 left-4 text-gold bottom-2 font-primary whitespace-nowrap text-eyebrow">
						Our Investment Approach
					</span>
				</div>
			</section>

			<section className="px-5 py-24 my-12 bg-center bg-no-repeat bg-cover md:py-48 md:my-32 bg-portfolio-section">
				<div className="container max-w-6xl mx-auto text-white">
					<header className="flex flex-col text-center text-gold font-primary">
						<span className="font-bold text-subheading">04</span>
						<span className="font-semibold uppercase text-eyebrow">
							Our Investments
						</span>
					</header>
					<div className="text-center">
						<h2 className="mt-10 mb-8 font-bold leading-none font-primary text-heading">
							Investment Portfolio
						</h2>
						<p className="mb-10 text-eyebrow">
							Discover our full investment portfolio of private equity and
							property investments.
						</p>
						<p className="flex items-center justify-center font-secondary">
							<Link className="button" href="/portfolio">
								Portfolio
							</Link>
						</p>
					</div>
				</div>
			</section>

			<section className="container grid max-w-4xl grid-cols-1 gap-4 px-5 mx-auto my-12 md:my-32 md:gap-8 lg:max-w-7xl md:grid-cols-section">
				<div className="relative before:content-[''] pb-4 md:pb-0 before:block before:absolute before:right-0 before:bg-gold before:w-full before:h-[1px] before:bottom-0 md:before:w-[2px] md:before:h-full">
					<span className="block font-bold text-gold font-primary text-subheading">
						05
					</span>
					<span className="block w-full font-semibold leading-normal uppercase md:absolute md:-rotate-90 right-4 text-gold bottom-2 font-primary whitespace-nowrap text-eyebrow">
						Our Investments, Your Business
					</span>
				</div>
				<div>
					<header className="mb-6 md:mb-10">
						<h2 className="font-bold leading-none text-heading font-primary">
							Get in Touch
						</h2>
					</header>
					<div className="grid items-start md:items-center gap-6 md:gap-8 lg:gap-20 grid-cols-1 sm:grid-cols-[1fr_2fr] md:grid-cols-[450px_1fr]">
						<figure>
							<Image
								alt="Blank Canvas Captial"
								className="rounded-tr-3xl rounded-bl-3xl h-[330px] sm:h-[250px] md:h-[501px] object-cover"
								height="501"
								src="/contact.jpg"
								width="450"
							/>
						</figure>
						<div>
							<h3 className="mb-4 font-bold leading-tight text-balance text-sectionHeading font-primary">
								Have an idea?
								<br className="hidden md:block" /> Want to talk about
								investments?
							</h3>
							<p className="flex items-start">
								<a className="button" href="">
									Contact Us
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
