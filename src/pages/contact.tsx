/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import { Container } from '@components/Container';
import { Hero } from '@components/Hero';
import { Paragraph } from '@components/Paragraph';
import {
	StyledGrid,
	StyledArticle,
} from '../shared/content.styled';

const Aside = dynamic(() => import('@components/Aside'), { ssr: false });
const ArticleHeader = dynamic(() => import('@components/ArticleHeader'), { ssr: false });
const Form = dynamic(() => import('@components/Form'), { ssr: false });
const Sidebar = dynamic(() => import('@components/Sidebar'), { ssr: false });

const StyledContactGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;

	@media (min-width: 1120px) {
		grid-template-columns: 2fr minmax(400px, 1fr);
		grid-column-gap: 2.5rem;
	}
`;

export default function Contact(): JSX.Element {
	return (
		<>
			<NextSeo
				title="Contact"
			/>
			<Hero
				image="/contact-us-hero.jpg"
				label="Elevator in Department Store"
			/>
			<Container size="1440px">
				<StyledGrid maxWidth="1240px">
					<Aside />
					<StyledArticle>
						<ArticleHeader
							eyebrow="Let's Talk About Investments"
							title="Get in Touch"
						/>
						<StyledContactGrid>
							<Form />
							<Sidebar />
						</StyledContactGrid>
					</StyledArticle>
				</StyledGrid>
			</Container>
		</>
	)
}
