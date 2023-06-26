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
	StyledButton
} from './Portfolio.styled';
import { Modal } from '@mantine/core';
import type { PortfolioModalProps } from './Portfolio.types';

const PortfolioModal: FC<PortfolioModalProps> = ({ close, modalContent, opened }): JSX.Element => {
	return (
		<Modal.Root
			className="portfolio-modal"
			onClose={close}
			opened={opened}
			size="1140px"
		>
			<Modal.Overlay />
			<Modal.Content>
				<Modal.Body>
					<StyledModalContent>
						<div>
							<StyledCoverImage>
								<Image
									alt={modalContent.title}
									decoding="async"
									height={300}
									loading="lazy"
									src={modalContent.hero}
									width={1140}
								/>
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
							<StyledModalContentHeader>
								{modalContent.title && <h3>{modalContent.title}</h3>}
							</StyledModalContentHeader>
						</div>
						<StyledContent>
							<StyledModalFigure>
								{modalContent.logo && (
									<Image
										alt={modalContent.title}
										decoding="async"
										height={137}
										loading="lazy"
										src={modalContent.logo}
										width={214}
									/>
								)}
							</StyledModalFigure>
							<StyledModalSection>
								{modalContent.description && (
									<StyledModalDescription>
										{modalContent.description}
									</StyledModalDescription>
								)}
								<StyledModalList>
									<li><strong>Region: </strong>{modalContent.region}</li>
									<li><strong>Sector: </strong>{modalContent.sector}</li>
									<li><strong>Date: </strong>{modalContent.date}</li>
									<li><strong>Status: </strong>{modalContent.status}</li>
								</StyledModalList>
								<StyledButton>Visit Website</StyledButton>
							</StyledModalSection>
						</StyledContent>
					</StyledModalContent>
				</Modal.Body>
			</Modal.Content>
		</Modal.Root>
	);
}

export default PortfolioModal;
