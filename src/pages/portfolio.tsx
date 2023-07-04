/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
import { Container } from '@components/Container';
import { Hero } from '@components/Hero';
import { Paragraph } from '@components/Paragraph';
import { CallToAction } from '@components/CallToAction';
import {
	StyledGrid,
	StyledArticle,
} from '../shared/content.styled';

import { useDisclosure } from '@mantine/hooks';
import fetcher from '@lib/fetcher';
import useSWR from 'swr';

export type PortfolioProps = {
	category?: string;
	date?: string;
	description?: string;
	hero?: string;
	id: string;
	logo?: string;
	region?: string;
	sector?: string;
	status?: string;
	title?: string;
}

const ArticleHeader = dynamic(() => import('@components/ArticleHeader'), { ssr: false });
const Aside = dynamic(() => import('@components/Aside'), { ssr: false });
const Filters = dynamic(() => import('@components/Portfolio/Filters'), { ssr: false });
const Grid = dynamic(() => import('@components/Portfolio/Grid'), { ssr: false });
const PortfolioModal = dynamic(() => import('@components/Portfolio/Modal'), { ssr: false });

export default function Portfolio(): JSX.Element {
	const { data, error } = useSWR('/api/portfolio', fetcher);
	const portfolio = data as PortfolioProps[];
	const [items, setItems] = useState<PortfolioProps[]>([]);
	const [active, setActive] = useState('Private Equity');

	useEffect(() => {
		portfolio && filterPrivateEquity();
	}, [portfolio])


	const [opened, { close, open }] = useDisclosure(false);
	const [modalContent, setModalContent] = useState<PortfolioProps>({
		id: '0',
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

	const handleClick = (item: PortfolioProps) => {
		open();
		setModalContent(item);
	}

	const filterPrivateEquity = () => {
		const filtered = portfolio.filter((item) => item.category === 'Private Equity');
		setActive('Private Equity')
		setItems(filtered);
	};

	const filterRealEstate = () => {
		const filtered = portfolio.filter((item) => item.category === 'Real Estate');
		setActive('Real Estate')
		setItems(filtered);
	};

	const currentItems = items && items.filter((item) => item.status === 'current');
	const realisedItems =
		items && items.length > 0 && items.filter((item) => item.status === 'realised');

	return (
		<>
			<NextSeo
				title="Investment Portfolio"
			/>
			<Hero image="/hero-portfolio.jpg" label="Three Men Walking Up Stairs" />
			<Container size="1440px">
				<StyledGrid maxWidth='1206px'>
					<Aside />
					<StyledArticle>
						<ArticleHeader
							eyebrow="Our Investments | Our Passion"
							title="Investment Portfolio"
						/>
						<Filters
							active={active}
							filterPrivateEquity={filterPrivateEquity}
							filterRealEstate={filterRealEstate}
						/>
						{currentItems && (
							<Grid handleClick={handleClick} items={currentItems} label="Current" />
						)}
						{realisedItems  && (
							<Grid
								handleClick={handleClick}
								items={realisedItems}
								label="Realised"
							/>
						)}
					</StyledArticle>
				</StyledGrid>
			</Container>
			<CallToAction
				description="Welcome to Blank Canvas Capital, where
					we fuel innovation and empower entrepreneurs to turn their
					visions into reality. As a leading venture capitalist
					firm, we specialize in identifying promising startups with
					"
				buttonLink="/investment-approach"
				buttonText="Our Investment Approach"
				eyebrow="Learn more about how we do investments"
				title="Interested in Our Investment Approach?"
			/>
			<PortfolioModal close={close} modalContent={modalContent} opened={opened} />
		</>
	)
}
