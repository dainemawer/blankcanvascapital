/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { NextSeo } from 'next-seo';
import Image from 'next/image';
import styled from '@emotion/styled';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Container } from '@components/Container';
import { Hero } from '@components/Hero';
import { colors } from '@theme/colors';
import { breakpoints } from '@theme/breakpoints';
import { fonts } from '@theme/fonts';
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
import { StyledLabelProps } from '../shared/styles.types';
import { Button } from '@components/Button';

const StyledContactGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;

	@media (min-width: 1120px) {
		grid-template-columns: 2fr minmax(400px, 1fr);
		grid-column-gap: 2.5rem;
	}
`;

const StyledAddress = styled.address`
	border-top: 2px solid ${colors.copper};
	margin-bottom: 1.25rem;
	padding-top: 1.5rem;

	&:not(:last-child) {
		margin-top: 3rem;
	}
`;

const StyledAddressHeading = styled.h2`
	font-family: ${fonts.primary};
	font-style: normal;
	font-size: 0.875rem;
	font-weight: 600;
	line-height: 1.7;
	margin: 0;
	text-transform: uppercase;
`

const StyledAddressLocation = styled.p`
	font-family: ${fonts.primary};
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
	line-height: 2;
	margin-bottom: 2rem;
`;

const StyledAddressDetail = styled.p`
	font-family: ${fonts.primary};
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 500;
`;

const StyledInputGroup = styled.div`
	align-items: center;
	border: 2px solid ${colors.copper};
	border-radius: 8px;
	display: flex;
	justify-content: flex-start;
	padding: 0.875rem 1.25rem;

	${breakpoints.md} {
		padding: 1rem 1.5rem;
	}

	&:not(:last-child) {
		margin-bottom: 2rem;
	}
`;

const StyledLabel = styled.label<StyledLabelProps>`
	align-items: ${props => props.vertical ? 'column' : 'center' };
	display: flex;
	flex-direction: ${props => props.vertical ? 'column' : 'row' };
	font-family: ${fonts.primary};
	font-style: normal;

	width: 100%;

	& > span {
		${props => props.vertical ?
			`border-bottom: 2px solid ${colors.copper};` :
			`border-right: 2px solid ${colors.copper};`
		};
		display: inline-block;
		font-size: 1.125rem;
		font-weight: 600;
		text-transform: uppercase;
		min-width: 80px;
		${props => props.vertical ?
			`padding-bottom: 1rem` : `padding-right: 1.5rem` };
		${props => props.vertical ? `margin: 0` : `margin-right: 1.5rem;` };
	}
`;

const StyledInput = styled.input`
	border: 0;
	font-family: ${fonts.primary};
	font-size: 1.125rem;
	font-weight: 500;
	line-height: 1.7;
	display: inline-block;
	width: 100%;

	&:focus {
		outline: 0;
	}

	&:focus::placeholder {
		color: #000;
	}

	&::placeholder {
		color: #AFAFAF;
		transition: color 0.3s ease-in-out;
	}
`;

const StyledTextarea = styled.textarea`
	border: 0;
	font-family: ${fonts.primary};
	font-size: 1.125rem;
	font-weight: 500;
	line-height: 1.7;
	resize: none;
	margin-top: 1.5rem;
	padding: 0;

	&:focus {
		outline: 0;
	}

	&:focus::placeholder {
		color: #000;
	}

	&::placeholder {
		color: #AFAFAF;
	}
`

const StyledSidebar = styled.aside`
	display: flex;
	flex-direction: column;
	margin-top: 0;

	& img {
		display: none;

		@media (min-width: 1120px) {
			display: block;
		}
	}

	@media (min-width: 1120px) {
		border-left: 2px solid ${colors.copper};
		padding-left: 2.5rem;
	}
`;

const StyledErrorMessage = styled.small`
	color: red;
	font-family: ${fonts.primary};
	font-size: 0.75rem;
`

export default function Contact(): JSX.Element {
	const [submitted, setSubmitted] = useState('Submit');
	const {
		formState: { errors, isSubmitting },
		handleSubmit,
		register,
		reset,
	} = useForm();

	const onSubmit = data => {
		return new Promise<string>(resolve => {
			setTimeout(() => {
				resolve('Resolved!');

				if (data.honeypot.length > 0) {
					return false;
				}

				const body = {
					to: 'hello@dainemawer.com',
					from: data.email,
					name: data.name,
					message: data.message,
					subject: `⚡️ thelazyload | Form submission`,
					text_body:
						`Hey Daine, you have a new submission from thelazyload.com.
							\n\n${data.message}`,
					html_body:
						`<p>Hey Daine, you have a new submission from thelazyload.com.</p>
							\n\n<p>From: ${data.name} - ${data.email}</p>\n\n
							<p>Message: ${data.message}</p>`,
				};

				fetch('/api/mail', {
					method: 'POST',
					body: JSON.stringify(body),
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then(res => res.json())
					.then(response => {
						response.message === 'success' ?
							setSubmitted('Success') : setSubmitted('Error');
						setTimeout(() => {
							reset();
							setSubmitted('Submit');
						}, 2500)
					})
					.catch(error => console.log('Error', error));
			}, 2000);
		});
	};

	return (
		<>
			<NextSeo
				title="Contact"
			/>
			<Hero
				image="/contact-us-hero.jpg"
				label="Elevator in Department Store"
			/>
			<Container size="1620px">
				<StyledGrid maxWidth="1240px">

					<StyledAside>
						<StyledLine />
					</StyledAside>

					<StyledArticle>

						<StyledHeader>
							<StyledEyebrow>
								Lets talk about investments
							</StyledEyebrow>
							<StyledHeading>Get in Touch</StyledHeading>
						</StyledHeader>

						<StyledLead>
							Welcome to Blank Canvas Capital,
							where we fuel innovation and empower
							entrepreneurs to turn their visions into reality.
							As a leading venture capitalist firm,
							we specialize in identifying promising
							startups with exceptional potential
							and providing them with the necessary
							resources to flourish.
						</StyledLead>

						<StyledContactGrid>
							<section>
								<form onSubmit={handleSubmit(onSubmit)}>
									<StyledInputGroup>
										<StyledLabel htmlFor="name">
											<span>Name</span>
											<StyledInput
												id="name"
												placeholder="Enter your first and last name"
												type="text"
												{...register("name", { required: true })}
											/>
										</StyledLabel>
										<StyledErrorMessage>
											{errors.name && <>This field is required</>}
										</StyledErrorMessage>
									</StyledInputGroup>
									<StyledInputGroup>
										<StyledLabel htmlFor="email">
											<span>Email</span>
											<StyledInput
												id="email"
												placeholder="Enter your email address"
												type="email"
												{...register("email", {
													required: true,
													validate: (value) =>
													/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
														.test(value)
													})}
												/>
										</StyledLabel>
										<StyledErrorMessage>
											{errors.email && <>This field is required</>}
										</StyledErrorMessage>
									</StyledInputGroup>
									<StyledInputGroup>
										<StyledLabel htmlFor="subject">
											<span>Subject</span>
											<StyledInput
												id="subject"
												placeholder="Enter a subject for your message"
												type="text"
												{...register("subject", { required: true })}
											/>
										</StyledLabel>
										<StyledErrorMessage>
											{errors.email && <>This field is required</>}
										</StyledErrorMessage>
									</StyledInputGroup>
									<StyledInputGroup>
										<StyledLabel htmlFor="message" vertical>
											<span>Message</span>
											<StyledTextarea
												id="message"
												placeholder="What would you like to discuss?"
												rows={10}
												{...register("message", { required: true })}
											>
											</StyledTextarea>
											<StyledErrorMessage>
												{errors.message && <>This field is required</>}
											</StyledErrorMessage>
										</StyledLabel>
									</StyledInputGroup>
									<input type="text" {...register('honeypot')} hidden />
									<Button type="submit">
										{isSubmitting ? "Submitting..." : submitted}
									</Button>
								</form>
							</section>
							<StyledSidebar>
								<Image
									alt="Google Maps"
									height={261}
									loading="lazy"
									src="/google-map-new.png"
									style={{ filter: 'grayscale(100%)' }}
									width={400}
								/>
								<StyledAddress>
									<StyledAddressHeading>Address</StyledAddressHeading>
									<StyledAddressLocation>
										1st Floor<br/>
										30 Melrose Boulevard,<br/>
										Melrose Arch, Johannesburg
									</StyledAddressLocation>
									<StyledAddressDetail>
										<strong>GPS:</strong> 34.21.23 S, 28.32.12 E
									</StyledAddressDetail>
								</StyledAddress>
								<StyledAddress>
									<StyledAddressHeading>Contact Details</StyledAddressHeading>
									<StyledAddressDetail>
										<strong>Email: </strong>
										<a href="mailto:info@blankcanvascapital.com">
											info@blankcanvascapital.com
										</a>
									</StyledAddressDetail>
									<StyledAddressDetail>
										<strong>LinkedIn: </strong>
										<a href="https://linkedin.com">
											@blackcanvascapital
										</a>
									</StyledAddressDetail>
								</StyledAddress>
							</StyledSidebar>
						</StyledContactGrid>
					</StyledArticle>
				</StyledGrid>
			</Container>
		</>
	)
}
