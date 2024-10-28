"use client";

import { Hero } from "@components/Hero";
import { Button } from "@components/Button";
import { Icon } from "@components/Icon";

export default function InvestmentApproach() {
	return (
		<>
			<Hero
				image="/hero-investment-portfolio.jpg"
				label="Three Men Walking Up Stairs"
				logo={""}
				subtitle={""}
				title={""}
				variation={""}
			/>

			<p className="max-w-6xl px-6 mx-auto my-8 mb-0 leading-8 text-center text-gold text-eyebrow md:mt-24 md:mb-8">
				Blank Canvas Capital is committed to supporting outstanding
				entrepreneurs and business owners to grow successful businesses. As a
				value-adding firm, we provide capital, expertise and deep strategic
				insights coupled with a different way of thinking to help our investee
				businesses achieve their full potential.
			</p>

			<section className="px-6 py-8 md:py-16 lg:px-0 lg:py-40">
				<div className="flex flex-col-reverse md:flex-col md:grid md:grid-cols-[1fr_110px] max-w-7xl mx-auto">
					<div className="flex flex-col md:items-end">
						<p className="text-base font-semibold leading-6 uppercase text-gold text-eyebrow font-primary">
							What We Look For In Investments
						</p>
						<h3 className="my-5 font-bold leading-tight text-grey text-heading font-primary text-xxl md:my-14">
							Investment Criteria
						</h3>
						<p className="max-w-3xl leading-8 md:text-right text-eyebrow mb-7">
							Blank Canvas Capital is free from the restrictions of a
							traditional fund therefore our investment approach is flexible in
							terms of investment size, industry type and capital structure. We
							look for scalable businesses that can deliver superior returns on
							capital for our investors.
						</p>
						<p className="max-w-3xl leading-8 md:text-right text-eyebrow mb-7">
							We are quick to act, have a multi-deal track record in mobilising
							large amounts of capital required in a process and will fully
							engage in an opportunity's fulfilment - from initial investment to
							its ultimate exit.
						</p>
						<p className="max-w-3xl leading-8 md:text-right text-eyebrow mb-7">
							We are in our deals for the long term. We buy in alongside our
							partners and we realise value with our partners as a general rule.
						</p>
						<p className="max-w-3xl leading-8 md:text-right text-eyebrow">
							Our investment strategy focuses on private equity as our main area
							of focus, but we also pursue real estate investments which are of
							an opportunistic nature or where our portfolio company is a
							tenant.
						</p>
					</div>
					<div className="md:border-l-2 mb-8 md:mb-0 md:ml-6 relative border-gold md:flex md:justify-center after:hidden after:content-[''] after:rounded-full after:bg-gold md:after:block after:top-0 after:w-4 after:h-4 after:-left-[9px] after:absolute">
						<span className="rounded-full w-14 h-14 flex items-center justify-center bg-grey z-30 right-0 top-[-1.55rem] md:absolute">
							<Icon icon="briefcase" />
						</span>
					</div>
				</div>
			</section>

			<section className="px-6 py-8 sm:py-16 lg:px-0 lg:py-40 bg-grey">
				<div className="flex flex-col md:grid md:grid-cols-[110px_1fr] max-w-7xl mx-auto">
					<div className="md:border-r-2 mb-8 md:mb-0 md:mr-6 relative border-gold md:flex md:justify-center after:hidden after:content-[''] after:rounded-full after:bg-gold md:after:block after:top-0 after:w-4 after:h-4 after:-right-[9px] after:absolute">
						<span className="rounded-full w-14 h-14 flex items-center justify-center bg-gold z-30 left-0 top-[-1.55rem] md:absolute">
							<Icon icon="bookmark" />
						</span>
					</div>
					<div className="flex flex-col items-start">
						<p className="text-base font-semibold leading-6 uppercase text-gold text-eyebrow font-primary">
							What We Look For In Investments
						</p>
						<h3 className="my-5 font-bold leading-tight text-white text-heading font-primary text-xxl md:my-14">
							Partner Selection
						</h3>
						<p className="max-w-3xl leading-8 text-left text-white text-eyebrow">
							We partner with proven entrepreneurs and strong management teams
							who share our vision and commitment to success. We conduct
							thorough due diligence to ensure that we select the best partners
							within our investment portfolio, and our partners are comfortable
							and energised in selecting us.
						</p>
					</div>
				</div>
			</section>

			<section className="px-6 py-8 sm:py-16 lg:px-0 lg:py-40">
				<div className="flex flex-col-reverse md:flex-col md:grid md:grid-cols-[1fr_110px] max-w-7xl mx-auto">
					<div className="flex flex-col md:items-end">
						<p className="text-base font-semibold leading-6 uppercase text-gold text-eyebrow font-primary">
							What We Look For In Investments
						</p>
						<h3 className="my-5 font-bold leading-tight text-grey text-heading font-primary text-xxl md:my-14">
							Investment Size
						</h3>
						<p className="max-w-3xl leading-8 md:text-right text-eyebrow">
							Blank Canvas Capital has a flexible approach to investment size,
							typically investing from R50m into a single opportunity with no
							upper limit. We specialize in acquiring significant,
							non-controlling stakes in our portfolio companies.
						</p>
					</div>
					<div className="md:border-l-2 mb-8 md:mb-0 md:ml-6 relative border-gold md:flex md:justify-center after:hidden after:content-[''] after:rounded-full after:bg-gold md:after:block after:top-0 after:w-4 after:h-4 after:-left-[9px] after:absolute">
						<span className="rounded-full w-14 h-14 flex items-center justify-center bg-grey z-30 right-0 top-[-1.55rem] md:absolute">
							<Icon icon="database" />
						</span>
					</div>
				</div>
			</section>

			<section className="px-6 py-8 sm:py-16 lg:px-0 lg:py-40 bg-grey">
				<div className="flex flex-col md:grid md:grid-cols-[110px_1fr] max-w-7xl mx-auto">
					<div className="md:border-r-2 mb-8 md:mb-0 md:mr-6 relative border-gold md:flex md:justify-center after:hidden after:content-[''] after:rounded-full after:bg-gold md:after:block after:top-0 after:w-4 after:h-4 after:-right-[9px] after:absolute">
						<span className="rounded-full w-14 h-14 flex items-center justify-center bg-gold z-30 left-0 top-[-1.55rem] md:absolute">
							<Icon icon="lightning" />
						</span>
					</div>
					<div className="flex flex-col items-start">
						<p className="text-base font-semibold leading-6 uppercase text-gold text-eyebrow font-primary">
							What We Look For In Investments
						</p>
						<h3 className="my-5 font-bold leading-tight text-white text-heading font-primary text-xxl md:my-14">
							Value Add
						</h3>
						<p className="max-w-3xl leading-8 text-left text-white text-eyebrow">
							Our strength lies in our ability to develop and maintain strong
							relationships with our portfolio companies’ management teams and
							provide guidance and support. We back management to run the daily
							operations but play a key role in the strategy of the business,
							including:
						</p>
						<ul className="pl-4 leading-10 text-gold text-eyebrow">
							<li>Director representation on the board</li>
							<li>Fundraising (debt and equity)</li>
							<li>
								Introductions to potential business partners and customers
							</li>
							<li>Changes to the business model</li>
							<li>Introducing well aligned incentive structures</li>
							<li>Assistance with BEE requirements</li>
							<li>Optimisation of the capital structure</li>
							<li>Access to key management hires</li>
							<li>Preparing the business for sale</li>
							<li>Identifying potential suitors</li>
							<li>Assisting in the disposal process</li>
						</ul>
					</div>
				</div>
			</section>

			<section className="px-6 py-8 sm:py-16 lg:px-0 md:py-40 bg-tin">
				<div className="flex flex-col-reverse md:flex-col md:grid md:grid-cols-[1fr_110px] max-w-7xl mx-auto">
					<div className="flex flex-col md:items-end">
						<p className="text-base font-semibold leading-6 uppercase text-gold text-eyebrow font-primary">
							What We Look For In Investments
						</p>
						<h3 className="my-5 font-bold leading-tight text-grey text-heading font-primary text-xxl md:my-14">
							Exit Strategy
						</h3>
						<p className="max-w-3xl leading-8 md:text-right text-eyebrow">
							Ideally, we realise value when our partner feels the time is right
							to do so. We have no time pressure for exits and focus on the
							long-term success of our portfolio companies. We work closely with
							our partners to develop growth and exit strategies that align with
							their goals, and then assist with the execution of these plans.
						</p>
					</div>
					<div className="md:border-l-2 mb-8 md:mb-0 md:ml-6 relative border-gold md:flex md:justify-center after:hidden after:content-[''] after:rounded-full after:bg-gold md:after:block after:top-0 after:w-4 after:h-4 after:-left-[9px] after:absolute">
						<span className="rounded-full w-14 h-14 flex items-center justify-center bg-grey z-30 right-0 top-[-1.55rem] md:absolute">
							<Icon icon="key" />
						</span>
					</div>
				</div>
			</section>

			<p className="max-w-6xl px-6 mx-auto mt-8 mb-8 leading-8 text-center md:mt-24 text-gold text-eyebrow">
				At Blank Canvas Capital, we are driven by a shared passion for creating
				exceptional value. We seek out outstanding businesses run by exceptional
				individuals who are willing to partner with us to deliver outstanding
				returns for all stakeholders. Along the way, we strive to build
				organizations that all parties can be proud to be associated with.
			</p>

			<p className="flex items-center justify-center mb-8 conclusion md:mb-24">
				<Button className="" href="/contact">
					Get In Touch
				</Button>
			</p>
		</>
	);
}
