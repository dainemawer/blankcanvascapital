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
	SubGrid,
	SubGridItem,
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
					At <strong>Blank Canvas Capital</strong>,
					our mission is to drive positive change by
					investing in groundbreaking ideas and visionary entrepreneurs.
					We believe in the power of innovation to transform
					industries and create a better future.We strive to
					support and guide entrepreneurs through their journey,
					offering not only financial backing but also strategic
					guidance and a vast network of industry connections.
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
						At <strong>Blank Canvas Capital</strong>,
						our mission is to drive positive
						change by investing in groundbreaking ideas and
						visionary entrepreneurs. We believe in the power of
						innovation to transform
						industries and create a better future.We strive to
						support and guide entrepreneurs through their journey,
						offering not only financial backing but also strategic
						guidance and a vast network of industry connections.
					</Paragraph>
					<Paragraph align="right" color="#2b2b2b" maxWidth="460px">
						At <strong>Blank Canvas Capital</strong>,
						our mission is to drive positive
						change by investing in groundbreaking ideas and
						visionary entrepreneurs. We believe in the power of
						innovation to transform
						industries and create a better future.We strive to
						support and guide entrepreneurs through their journey,
						offering not only financial backing but also strategic
						guidance and a vast network of industry connections.
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
					At <strong>Blank Canvas Capital</strong>, our mission is to
					drive positive change by
					investing in groundbreaking ideas and visionary entrepreneurs.
					We believe in the power of innovation to transform
					industries and create a better future.We strive to
					support and guide entrepreneurs through their journey,
					offering not only financial backing but also strategic
					guidance and a vast network of industry connections.
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
				<Paragraph color="#2B2B2B">
					At <strong>Blank Canvas Capital</strong>, our mission is to
					drive positive change by
					investing in groundbreaking ideas and visionary entrepreneurs.
					We believe in the power of innovation to transform
					industries and create a better future.We strive to
					support and guide entrepreneurs through their journey,
					offering not only financial backing but also strategic
					guidance and a vast network of industry connections.
				</Paragraph>
				<Paragraph
					className="figure"
					color="#C5A880"
					font="Work Sans"
					size="4.5rem"
					style={{ marginBottom: 0 }}
					weight="700"
				>
					$30m
				</Paragraph>
				<UnorderedList>
					<li>
						Closely held or family enterprises
						transitioning to new ownership
					</li>
					<li>
						Businesses requiring growth capital
						or undergoing recapitalisations
					</li>
					<li>Buy-outs of non-core corporate divisions</li>
					<li>Platform or roll-up strategies</li>
				</UnorderedList>
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
				<SubGrid>
					<SubGridItem aria-label="" id="">
						<span><Icon icon="study" /></span>
						<h5>Expert guidance</h5>
						<p>
							At Blank Canvas Capital, our mission is to drive positive
							change by investing in groundbreaking ideas
							and visionary entrepreneurs.
						</p>
					</SubGridItem>
					<SubGridItem aria-label="" id="">
						<span><Icon icon="paper-plane" /></span>
						<h5>Years of Experience</h5>
						<p>
							At Blank Canvas Capital, our mission is to drive positive
							change by investing in groundbreaking ideas
							and visionary entrepreneurs.
						</p>
					</SubGridItem>
					<SubGridItem aria-label="" id="">
						<span><Icon icon="light-bulb" /></span>
						<h5>Diversified Council</h5>
						<p>
							At Blank Canvas Capital, our mission is to drive positive
							change by investing in groundbreaking ideas
							and visionary entrepreneurs.
						</p>
					</SubGridItem>
					<SubGridItem aria-label="" id="">
						<span><Icon icon="dollar" /></span>
						<h5>Unlimited value</h5>
						<p>
							At Blank Canvas Capital, our mission is to drive positive
							change by investing in groundbreaking ideas
							and visionary entrepreneurs.
						</p>
					</SubGridItem>
				</SubGrid>
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
					At <strong>Blank Canvas Capital</strong>, our mission is
					to drive positive change by
					investing in groundbreaking ideas and visionary entrepreneurs.
					We believe in the power of innovation to transform
					industries and create a better future.We strive to
					support and guide entrepreneurs through their journey,
					offering not only financial backing but also strategic
					guidance and a vast network of industry connections.
				</Paragraph>
				<Paragraph color="#2B2B2B" maxWidth="600px">
					At <strong>Blank Canvas Capital</strong>, our mission is
					to drive positive change by
					investing in groundbreaking ideas and visionary entrepreneurs.
					We believe in the power of innovation to transform
					industries and create a better future.We strive to
					support and guide entrepreneurs through their journey,
					offering not only financial backing but also strategic
					guidance and a vast network of industry connections.
				</Paragraph>
			</InvestmentSection>
			<SimpleSection>
				<Paragraph align="center" color="#424242">
					At <strong>Blank Canvas Capital</strong>,
					our mission is to drive positive change by
					investing in groundbreaking ideas and visionary entrepreneurs.
					We believe in the power of innovation to transform
					industries and create a better future.We strive to
					support and guide entrepreneurs through their journey,
					offering not only financial backing but also strategic
					guidance and a vast network of industry connections.
				</Paragraph>
				<Paragraph align="center" color="#424242">
					<Button href="/contact">Get In Touch</Button>
				</Paragraph>
			</SimpleSection>
		</>
	)
}
