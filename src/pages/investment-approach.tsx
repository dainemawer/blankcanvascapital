/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { Hero } from '@components/Hero';
import { Button } from '@components/Button';
import {
	StyledParagraph,
	UnorderedListBlock
} from '@components/Investments/Investments.styled';

const InvestmentSection = dynamic(() => import('@components/Investments/InvestmentSection'));
const SimpleSection = dynamic(() => import('@components/Investments/Section'));

export default function InvestmentApproach(): JSX.Element {
	return (
		<>
			<NextSeo
				title="Investment Approach"
			/>
			<Hero image="/hero-investment-portfolio.jpg" label="Three Men Walking Up Stairs" />
			<SimpleSection name="intro">
				<StyledParagraph align="center" className="intro" color="#C5A880">
					Blank Canvas Capital is committed to supporting outstanding entrepreneurs and business
					owners to grow successful businesses. As a value-adding firm,
					we provide capital, expertise and deep strategic insights coupled with
					a different way of thinking to help our investee businesses achieve their full potential.
				</StyledParagraph>
			</SimpleSection>
			<InvestmentSection
				align='right'
				eyebrow="What We Look For In Investments"
				maxWidth="1440px"
				name="investment-criteria"
				title="Investment Criteria"
				grid
			>
				<div>
					<StyledParagraph align="right" color="#2b2b2b" maxWidth="900px">
						Blank Canvas Capital is free from the restrictions of a traditional fund therefore our
						investment approach is flexible in terms of investment size, industry type and capital
						structure. We look for scalable businesses that can deliver superior returns on capital
						for our investors.
					</StyledParagraph>
					<StyledParagraph align="right" color="#2b2b2b" maxWidth="900px">
						We are quick to act, have a multi-deal track record in mobilising
						large amounts of capital required in a process and will fully engage in
						an opportunity&apos;s fulfilment - from initial investment to its ultimate exit.
					</StyledParagraph>
					<StyledParagraph align="right" color="#2b2b2b" maxWidth="900px">
						We are in our deals for the long term. We buy in alongside our partners and we realise
						value with our partners as a general rule.
					</StyledParagraph>
					<StyledParagraph align="right" color="#2b2b2b" maxWidth="900px">
						Our investment strategy focuses on private
						equity as our main area of focus, but we also pursue real estate investments
						which are of an opportunistic nature or where our portfolio company is a tenant.
					</StyledParagraph>
				</div>
			</InvestmentSection>
			<InvestmentSection
				align='left'
				bgColor='#424242'
				eyebrow="What We Look For In Investments"
				icon="bookmark"
				maxWidth="1440px"
				name="partner-selection"
				title="Partner Selection"
				grid
			>
				<StyledParagraph align="left" color="#2B2B2B" maxWidth="776px">
					We partner with proven entrepreneurs and strong management teams who share our vision and commitment to success.
					We conduct thorough due diligence to ensure that we select the best partners within our investment portfolio,
					and our partners are comfortable and energised in selecting us.
				</StyledParagraph>
			</InvestmentSection>
			<InvestmentSection
				align='right'
				eyebrow="What We Look For In Investments"
				icon="database"
				maxWidth="1440px"
				name="investment-size"
				title="Investment Size"
				grid
			>
				<StyledParagraph align="right" color="#2B2B2B" maxWidth='776px'>
					Blank Canvas Capital has a flexible approach to investment size, typically investing
					from R50m into a single opportunity with no upper limit. We specialize in acquiring significant,
					non-controlling stakes in our portfolio companies.
				</StyledParagraph>
			</InvestmentSection>
			<InvestmentSection
				align='left'
				bgColor='#424242'
				eyebrow="What We Look For In Investments"
				icon="lightning"
				maxWidth="1440px"
				name="value-add"
				title="Value Add"
				grid
			>
				<div>
					<StyledParagraph align='left' color="#fff" maxWidth="776px">
						Our strength lies in our ability to develop and maintain strong
						relationships with our portfolio companies’ management teams and
						provide guidance and support. We back management to run the daily
						operations but play a key role in the strategy of the business, including:
					</StyledParagraph>
					<UnorderedListBlock>
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
					</UnorderedListBlock>
				</div>
			</InvestmentSection>
			<InvestmentSection
				align='right'
				bgColor="#E6E6E6"
				eyebrow="What We Look For In Investments"
				icon="key"
				maxWidth="1440px"
				name="exit-strategy"
				title="Exit Strategy"
				grid
			>
				<StyledParagraph align="right" color="#2B2B2B" maxWidth='776px'>
					Ideally, we realise value when our partner feels the time is right to do so.
					We have no time pressure for exits and focus on the long-term success of
					our portfolio companies. We work closely with our partners to develop
					growth and exit strategies that align with their goals, and then assist with the execution of these plans.
				</StyledParagraph>
			</InvestmentSection>
			<SimpleSection name="conclusion">
				<StyledParagraph align="center" className="conclusion" color="#C5A880">
					At Blank Canvas Capital, we are driven by a shared passion for creating exceptional value.
					We seek out outstanding businesses run by exceptional individuals who are willing to partner
					with us to deliver outstanding returns for all stakeholders.
					Along the way, we strive to build organizations that all parties can be proud to be associated with.
				</StyledParagraph>
				<StyledParagraph align="center" className="conclusion" color="#424242">
					<Button href="/contact">Get In Touch</Button>
				</StyledParagraph>
			</SimpleSection>
		</>
	)
}
