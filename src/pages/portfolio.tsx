/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { useState } from 'react';
import { NextSeo } from 'next-seo';
import { Container } from '@components/Container';
import { Hero } from '@components/Hero';
import {
	StyledGrid,
	StyledAside,
	StyledLine,
	StyledArticle,
	StyledHeader,
	StyledEyebrow,
	StyledHeading,
	StyledLead,
} from '../shared/content.styled';

import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import fetcher from '@lib/fetcher';
import useSWR from 'swr';

export type PortfolioModalProps = {
	date?: string;
	description?: string;
	hero?: string;
	id: number;
	logo?: string;
	region?: string;
	sector?: string;
	status?: string;
	title?: string;
}

export default function Portfolio(): JSX.Element {
	const { data, error } = useSWR('/api/portfolio', fetcher);
	const portfolio = data as PortfolioModalProps[];

	const [opened, { close, open }] = useDisclosure(false);
	const [modalContent, setModalContent] = useState<PortfolioModalProps>({
		id: 0,
		title: '',
		hero: '',
		logo: '',
		description: '',
		region: '',
		sector: '',
		date: '',
		status: ''
	});

	if (error) return <div>Failed to load...</div>

	const handleClick = (item: PortfolioModalProps) => {
		open();
		setModalContent(item);
	}

	return (
		<>
			<NextSeo
				title="Investment Portfolio"
			/>
			<Hero image="/hero-portfolio.jpg" label="Three Men Walking Up Stairs" />
			<Container size="1620px">
				<StyledGrid>

					<StyledAside>
						<StyledLine />
					</StyledAside>

					<StyledArticle>

						<StyledHeader>
							<StyledEyebrow>Our investments, our passions</StyledEyebrow>
							<StyledHeading>Investment Portfolio</StyledHeading>
						</StyledHeader>

						<StyledLead>
							Welcome to Blank Canvas Capital, where we fuel innovation and empower
							entrepreneurs to turn their visions into reality. As a leading venture
							capitalist firm, we specialize in identifying promising startups with
							exceptional potential and providing them
							with the necessary resources to flourish.
						</StyledLead>

						<div>
							{portfolio && portfolio.map((item) => (
								<article key={item.id}>
									<button onClick={() => handleClick(item)}>
										{item.title}
									</button>
								</article>
							))}
						</div>
						<Modal onClose={close} opened={opened} title={modalContent.title}>
							{modalContent.title && <h1>{modalContent.title}</h1>}
						</Modal>
					</StyledArticle>
				</StyledGrid>
			</Container>
		</>
	)
}
