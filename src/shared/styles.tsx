import { css, Global } from '@emotion/react'
import emotionNormalize from 'emotion-normalize';
import { colors } from '@theme/colors';
import { fonts } from '@theme/fonts';

export const globalStyles = (
	<>
		<Global styles={css`${emotionNormalize}`} />
		<Global styles={css`

			:root {
				--font-work-sans: 'Work Sans', sans-serif;
				--font-merriweather: 'Merriweather', serif;

				--font-size-sm: clamp(0.8rem, 0.08vw + 0.78rem, 0.84rem);
				--font-size-base: clamp(1rem, 0.23vw + 0.94rem, 1.13rem);
				--font-size-md: clamp(1.25rem, 0.45vw + 1.14rem, 1.5rem);
				--font-size-lg: clamp(1.56rem, 0.79vw + 1.36rem, 2rem);
				--font-size-xl: clamp(1.95rem, 1.29vw + 1.63rem, 2.66rem);
				--font-size-xxl: clamp(2.44rem, 2.02vw + 1.94rem, 3.55rem);
				--font-size-xxxl: clamp(3.05rem, 3.06vw + 2.29rem, 4.73rem);
			}

			* {
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}

			a {
				color: inherit;
				text-decoration: none;
			}

			a.button {
				align-self: flex-start;
				background-color: ${colors.white};
				border: 1px solid ${colors.gold};
				border-radius: 5px;
				color: ${colors.gold};
				display: block;
				font-family: ${fonts.primary};
				font-size: 1rem;
				font-weight: 600;
				text-transform: uppercase;
				transition: all 0.3s ease-in-out;
				padding: 0.75rem 1.125rem;

				&:hover,
				&:focus {
					background-color: ${colors.gold};
					color: ${colors.white};
				}
			}

			img {
				height: auto;
				max-width: 100%;
			}

			.radius {
				border-radius: 0 20px;
			}

			.mantine-Modal-body {
				align-items: center;
				display: flex;
				justify-content: center;
				height: calc(100% - 70px);
			}

			.portfolio-modal .mantine-Modal-inner {
				padding-left: 5vw;
				padding-right: 5vw;
				max-width: 90%;
			}

			.portfolio-modal .mantine-Modal-body {
				height: unset;
				padding: 0;
			}

			#nprogress .bar {
				background: ${colors.gold};
			}

			#nprogress .spinner-icon {
				border-top-color: ${colors.gold};
				border-left-color: ${colors.gold};
			}
		`} />
	</>

);
