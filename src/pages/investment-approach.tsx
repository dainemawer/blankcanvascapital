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
import { Icon } from '@components/Icon';
import {
	Paragraph,
	Wrap,
	UnorderedList
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
				<Paragraph className="intro" color="#C5A880">
					Blank Canvas Capital is committed to supporting outstanding entrepreneurs and business
					owners to grow successful businesses. As a value-adding firm,
					we provide capital, expertise and deep strategic insights coupled with
					a different way of thinking to help our investee businesses achieve their full potential.
				</Paragraph>
			</SimpleSection>
			<InvestmentSection
				align='left'
				eyebrow="What We Look For In Investments"
				maxWidth="1240px"
				name="investment-criteria"
				title="Investment Criteria"
				grid
			>
				<Wrap>
					<Paragraph align="left" color="#2b2b2b" maxWidth="460px">
						Blank Canvas Capital is free from the restrictions of a traditional fund therefore our
						investment approach is flexible in terms of investment size, industry type and capital
						structure. We look for scalable companies or opportunities that can deliver superior returns on capital
						for our investors. We are quick to act, have a multi-deal track record in mobilising
						large amounts of capital required in a process and will fully engage in
						an opportunity&apos;s fulfilment - from initial investment to its ultimate exit.
					</Paragraph>
					<Paragraph align="right" color="#2b2b2b" maxWidth="460px">
						We are in our deals for the long term. We buy in alongside our partners and we realise
						value with our partners as a general rule. Our investment strategy focuses on private
						equity as our main area of focus, but we also pursue real estate investments
						which are of an opportunistic nature or where our portfolio company is a tenant.
					</Paragraph>
				</Wrap>
			</InvestmentSection>
			<InvestmentSection
				align='center'
				bgColor='#424242'
				eyebrow="What We Look For In Investments"
				icon="bookmark"
				maxWidth="1240px"
				name="partner-selection"
				title="Partner Selection"
				grid
			>
				<Paragraph align="center" color="#2B2B2B" maxWidth="776px">
					We partner with proven entrepreneurs and strong management teams who share our vision and commitment to success.
					We conduct thorough due diligence to ensure that we select the best partners within our investment portfolio,
					and our partners are comfortable and energised in selecting us.
				</Paragraph>
			</InvestmentSection>
			<InvestmentSection
				align='left'
				eyebrow="What We Look For In Investments"
				icon="database"
				maxWidth="1240px"
				name="investment-size"
				title="Investment Size"
				grid
			>
				<Paragraph color="#2B2B2B" maxWidth='776px'>
					Blank Canvas Capital has a flexible approach to investment size, typically investing
					from R25m into a single opportunity with no upper limit. We specialize in acquiring significant,
					non-controlling stakes in our portfolio companies.
				</Paragraph>
			</InvestmentSection>
			<InvestmentSection
				align='right'
				bgColor='#424242'
				eyebrow="What We Look For In Investments"
				icon="lightning"
				maxWidth="1240px"
				name="value-add"
				title="Value Add"
				grid
			>
				<div>
					<Paragraph align='right' color="#fff" maxWidth="776px">
						Our strength lies in our ability to develop and maintain strong
						relationships with our portfolio companies’ management teams and
						provide guidance and support. We back management to run the daily
						operations but play a key role in the strategy of the business, including:
					</Paragraph>
					<UnorderedList align="right">
						<li>Director representation on the board</li>
						<li>Fundraising (debt and equity)</li>
						<li>Introductions to potential business partners and customers</li>
						<li>Changes to the business model</li>
						<li>Introducing well aligned incentive structures</li>
						<li>Assistance with BEE requirements</li>
						<li>Optimisation of the capital structure</li>
						<li>Access to key management hires</li>
						<li>Preparing the business for sale, identifying potential suitors,</li>
						<li>and assisting in the disposal process</li>
					</UnorderedList>
				</div>
			</InvestmentSection>
			<InvestmentSection
				align='left'
				bgColor="#E6E6E6"
				eyebrow="What We Look For In Investments"
				icon="key"
				maxWidth="1240px"
				name="exit-strategy"
				title="Exit Strategy"
				grid
			>
				<Paragraph color="#2B2B2B">
					Ideally, we realise value when our partner feels the time is right to do so.
					We have no time pressure for exits and focus on the long-term success of
					our portfolio companies. We work closely with our partners to develop
					growth and exit strategies that align with their goals, and then assist with the execution of these plans.
				</Paragraph>
			</InvestmentSection>
			<SimpleSection>
				<Paragraph align="center" color="#424242">
					At Blank Canvas Capital, we are driven by a shared passion for creating exceptional value.
					We seek out outstanding businesses run by exceptional individuals who are willing to partner
					with us to deliver outstanding returns for all stakeholders.
					Along the way, we strive to build organizations that all parties can be proud to be associated with.
				</Paragraph>
				<Paragraph align="center" color="#424242">
					<Button href="/contact">Get In Touch</Button>
				</Paragraph>
			</SimpleSection>
		</>
	)
}
