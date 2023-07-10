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
