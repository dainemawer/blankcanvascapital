/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import { Container } from '@components/Container';
import { Hero } from '@components/Hero';
import { Button } from '@components/Button';
import { Paragraph } from '@components/Paragraph';
import { Heading } from '@components/Heading';

import {
	StyledGrid,
	StyledArticle,
	StyledBox,
} from '../shared/content.styled';

const ArticleHeader = dynamic(() => import('@components/ArticleHeader'), { ssr: false });
const Aside = dynamic(() => import('@components/Aside'), { ssr: false });
const SubHeading = dynamic(() => import('@components/SubHeading'), { ssr: false });

export default function AboutUs(): JSX.Element {
	return (
		<>
			<NextSeo
				title="About Us"
			/>
			<Hero image="/hero-about-optimized.jpg" label="Elevator in Department Store"/>
			<Container size="1440px">
				<StyledGrid>
					<Aside />
					<StyledArticle>
						<ArticleHeader
							eyebrow="Unleashing Potential | Creating Value | Partnering for Exceptional Returns"
							title="Our Investment Mission"
						/>
						<Paragraph color="gold" maxWidth="100%" lead>
							Welcome to Blank Canvas Capital, a value-adding investment firm dedicated to supporting
							outstanding entrepreneurs and business owners in growing successful businesses.
							We provide capital, expertise, deep strategic insights, and a vast network of
							industry connections, coupled with a different way of thinking, to help our
							investee businesses achieve their full potential and achieve exceptional returns for our investors.
						</Paragraph>
						<Paragraph>
							Blank Canvas Capital is a forward-thinking investment firm with a difference.
							We believe in taking a flexible and adaptive approach to investments,
							free from the restrictions of traditional funds. Our experienced team combines years of
							expertise, established business networks, lateral thinking abilities, and an unwavering
							dedication to our ultimate goal: rapid business growth and value creation for our partners and investors.
						</Paragraph>
						<Paragraph>
							Our investors represent some of the most respected pools of capital on the continent.
							This not only demonstrates their confidence in our investment strategies but also enables us to
							leverage their resources and networks to the benefit of our portfolio companies.
						</Paragraph>
						<SubHeading heading="What Sets Us Apart" />
						<Heading as="h4">Value-Driven Partnerships</Heading>
						<Paragraph>
							We prioritize backing entrepreneurs who share our core values of integrity, ambition, and innovation.
							We believe that people are the key to long-term success, and we focus on partnering with individuals
							who embody these qualities.
						</Paragraph>
						<Heading as="h4">Flexible Investment Approach</Heading>
						<Paragraph>
							We offer a flexible investment approach that allows us to consider opportunities of various sizes, industries, and capital structures.
							We are quick to act, mobilizing significant amounts of capital efficiently, and engaging fully in each investment opportunity.
						</Paragraph>
						<Heading as="h4">Value-Adding Support</Heading>
						<Paragraph>
							Our partnership extends beyond providing capital. We actively collaborate with the management teams of our portfolio companies, offering guidance,
							support, and strategic insights. We leverage our expertise and network to add significant value at every stage of the business journey.
						</Paragraph>
						<StyledBox align="flex-start">
							<Button href="/investment-approach">Our Investment Approach</Button>
						</StyledBox>
					</StyledArticle>
				</StyledGrid>
			</Container>
		</>
	)
}
