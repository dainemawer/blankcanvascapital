"use client";

import dynamic from "next/dynamic";
import { Hero } from "@components/Hero";
import { Button } from "@components/Button";

const InvestmentSection = dynamic(
	() => import("@components/Investments/InvestmentSection")
);
const SimpleSection = dynamic(() => import("@components/Investments/Section"));

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
			<SimpleSection bgColor={undefined}>
				<p className="intro" color="#C5A880">
					Blank Canvas Capital is committed to supporting outstanding
					entrepreneurs and business owners to grow successful businesses. As a
					value-adding firm, we provide capital, expertise and deep strategic
					insights coupled with a different way of thinking to help our investee
					businesses achieve their full potential.
				</p>
			</SimpleSection>
			<InvestmentSection
				align="right"
				bgColor={undefined}
				eyebrow="What We Look For In Investments"
				icon={undefined}
				maxWidth="1440px"
				name="investment-criteria"
				title="Investment Criteria"
			>
				<div>
					<p color="#2b2b2b">
						Blank Canvas Capital is free from the restrictions of a traditional
						fund therefore our investment approach is flexible in terms of
						investment size, industry type and capital structure. We look for
						scalable businesses that can deliver superior returns on capital for
						our investors.
					</p>
					<p color="#2b2b2b">
						We are quick to act, have a multi-deal track record in mobilising
						large amounts of capital required in a process and will fully engage
						in an opportunity&apos;s fulfilment - from initial investment to its
						ultimate exit.
					</p>
					<p color="#2b2b2b">
						We are in our deals for the long term. We buy in alongside our
						partners and we realise value with our partners as a general rule.
					</p>
					<p color="#2b2b2b">
						Our investment strategy focuses on private equity as our main area
						of focus, but we also pursue real estate investments which are of an
						opportunistic nature or where our portfolio company is a tenant.
					</p>
				</div>
			</InvestmentSection>
			<InvestmentSection
				align="left"
				bgColor="#424242"
				eyebrow="What We Look For In Investments"
				icon="bookmark"
				maxWidth="1440px"
				name="partner-selection"
				title="Partner Selection"
			>
				<p color="#2B2B2B">
					We partner with proven entrepreneurs and strong management teams who
					share our vision and commitment to success. We conduct thorough due
					diligence to ensure that we select the best partners within our
					investment portfolio, and our partners are comfortable and energised
					in selecting us.
				</p>
			</InvestmentSection>
			<InvestmentSection
				align="right"
				bgColor={undefined}
				eyebrow="What We Look For In Investments"
				icon="database"
				maxWidth="1440px"
				name="investment-size"
				title="Investment Size"
			>
				<p color="#2B2B2B">
					Blank Canvas Capital has a flexible approach to investment size,
					typically investing from R50m into a single opportunity with no upper
					limit. We specialize in acquiring significant, non-controlling stakes
					in our portfolio companies.
				</p>
			</InvestmentSection>
			<InvestmentSection
				align="left"
				bgColor="#424242"
				eyebrow="What We Look For In Investments"
				icon="lightning"
				maxWidth="1440px"
				name="value-add"
				title="Value Add"
			>
				<div>
					<p color="#fff">
						Our strength lies in our ability to develop and maintain strong
						relationships with our portfolio companies’ management teams and
						provide guidance and support. We back management to run the daily
						operations but play a key role in the strategy of the business,
						including:
					</p>
					<ul>
						<li>Director representation on the board</li>
						<li>Fundraising (debt and equity)</li>
						<li>Introductions to potential business partners and customers</li>
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
			</InvestmentSection>
			<InvestmentSection
				align="right"
				bgColor="#E6E6E6"
				eyebrow="What We Look For In Investments"
				icon="key"
				maxWidth="1440px"
				name="exit-strategy"
				title="Exit Strategy"
			>
				<p color="#2B2B2B">
					Ideally, we realise value when our partner feels the time is right to
					do so. We have no time pressure for exits and focus on the long-term
					success of our portfolio companies. We work closely with our partners
					to develop growth and exit strategies that align with their goals, and
					then assist with the execution of these plans.
				</p>
			</InvestmentSection>
			<SimpleSection bgColor={undefined}>
				<p className="conclusion" color="#C5A880">
					At Blank Canvas Capital, we are driven by a shared passion for
					creating exceptional value. We seek out outstanding businesses run by
					exceptional individuals who are willing to partner with us to deliver
					outstanding returns for all stakeholders. Along the way, we strive to
					build organizations that all parties can be proud to be associated
					with.
				</p>
				<p className="conclusion" color="#424242">
					<Button href="/contact">Get In Touch</Button>
				</p>
			</SimpleSection>
		</>
	);
}
