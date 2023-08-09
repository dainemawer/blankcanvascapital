/*
 * Quote
 *
 * Quote Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import Image from 'next/image';
import {
	StyledModalContent,
	StyledCoverImage,
	StyledCloseButton,
	StyledModalContentHeader,
	StyledContent,
	StyledModalFigure,
	StyledModalSection,
	StyledModalDescription,
	StyledModalList,
	StyledButton,
	StyledButtonContainerDesktop,
	StyledButtonContainerMobile
} from './Portfolio.styled';
import { Modal } from '@mantine/core';
import type { PortfolioModalProps } from './Portfolio.types';

const PortfolioModal: FC<PortfolioModalProps> = ({ close, modalContent, opened }): JSX.Element => {
	const isRealEstate: Boolean = modalContent.category === 'Real Estate';

	return (
		<Modal.Root
			className="portfolio-modal"
			onClose={close}
			opened={opened}
			size="980px"
		>
			<Modal.Overlay />
			<Modal.Content>
				<Modal.Body>
					<StyledModalContent className={isRealEstate && 'real-estate'}>
						<div>
							{isRealEstate && (
								<>
									<StyledCloseButton onClick={() => close()}>
										<svg
											fill="none"
											height="18"
											viewBox="0 0 24 24"
											width="18"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8 8V2M8 8H2M8 8L1 1M8 16V22M8 16H2M8 16L1 23M16
													8H22M16 8V2M16 8L23 1M16 16H22M16 16V22M16 16L23 23"
												stroke="white"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.5"
											/>
										</svg>
									</StyledCloseButton>
									<StyledContent className={isRealEstate && 'real-estate'}>
										<StyledModalFigure className={isRealEstate && 'real-estate'}>
											{modalContent.logo && (
												<Image
													alt={modalContent.title}
													decoding="async"
													height={137}
													loading="eager"
													src={modalContent.logo}
													width={214}
												/>
											)}
											{modalContent.url && (
												<StyledButtonContainerDesktop>
													<StyledButton href={modalContent.url} rel="noreferrer" target="_blank">Visit Website</StyledButton>
												</StyledButtonContainerDesktop>
											)}
										</StyledModalFigure>
										<StyledModalSection>
											<StyledModalContentHeader>
												{modalContent.title && <h3>{modalContent.title}</h3>}
											</StyledModalContentHeader>
											{modalContent.description && (
												<StyledModalDescription>
													{modalContent.description}
												</StyledModalDescription>
											)}
											<StyledModalList>
												{modalContent.region && <li><strong>Region: </strong>{modalContent.region}</li>}
												{modalContent.sector && <li><strong>Sector: </strong>{modalContent.sector}</li>}
												{modalContent.date && <li><strong>Date: </strong>{modalContent.date}</li>}
												{modalContent.status && (
													<li style={{ textTransform: 'capitalize' }}>
														<strong>Status: </strong>{modalContent.status}
													</li>
												)}
											</StyledModalList>
										</StyledModalSection>
									</StyledContent>
								</>
							)}
							{!isRealEstate && (
								<>
									<StyledCoverImage>
										{modalContent.hero && (
											<Image
												alt={modalContent.title}
												decoding="async"
												height={300}
												loading="lazy"
												src={modalContent.hero}
												style={{ objectPosition: modalContent.position }}
												width={1140}
											/>
										)}
										<StyledCloseButton onClick={() => close()}>
											<svg
												fill="none"
												height="18"
												viewBox="0 0 24 24"
												width="18"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M8 8V2M8 8H2M8 8L1 1M8 16V22M8 16H2M8 16L1 23M16
														8H22M16 8V2M16 8L23 1M16 16H22M16 16V22M16 16L23 23"
													stroke="white"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
												/>
											</svg>
										</StyledCloseButton>
									</StyledCoverImage>
									<StyledContent>
										<StyledModalFigure className="private-equity">
											{modalContent.logo && (
												<Image
													alt={modalContent.title}
													decoding="async"
													height={137}
													loading="eager"
													src={modalContent.logo}
													width={214}
												/>
											)}
											{modalContent.url && (
												<StyledButtonContainerMobile>
													<StyledButton href={modalContent.url} rel="noreferrer" target="_blank">Visit Website</StyledButton>
												</StyledButtonContainerMobile>
											)}
										</StyledModalFigure>
										<StyledModalSection>
											<StyledModalContentHeader>
												{modalContent.title && <h3>{modalContent.title}</h3>}
											</StyledModalContentHeader>
											{modalContent.description && (
												<StyledModalDescription>
													{modalContent.description}
												</StyledModalDescription>
											)}
											<StyledModalList>
												{modalContent.region && <li><strong>Region: </strong>{modalContent.region}</li>}
												{modalContent.sector && <li><strong>Sector: </strong>{modalContent.sector}</li>}
												{modalContent.date && <li><strong>Date: </strong>{modalContent.date}</li>}
												{modalContent.status && (
													<li style={{ textTransform: 'capitalize' }}>
														<strong>Status: </strong>{modalContent.status}
													</li>
												)}
											</StyledModalList>
											{modalContent.url && (
												<p style={{display: 'flex', justifyContent: 'flex-start' }}>
													<StyledButton href={modalContent.url} rel="noreferrer" target="_blank">Visit Website</StyledButton>
												</p>
											)}
										</StyledModalSection>
									</StyledContent>
								</>
							)}
						</div>
					</StyledModalContent>
				</Modal.Body>
			</Modal.Content>
		</Modal.Root>
	);
}

export default PortfolioModal;
