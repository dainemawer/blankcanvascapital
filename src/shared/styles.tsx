import { css, Global } from '@emotion/react'
import emotionNormalize from 'emotion-normalize';

export const globalStyles = (
	<Global styles={css`${emotionNormalize}`} />
);
