/*
 * Quote
 *
 * Quote Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'

interface QuoteProps { }

export const Quote: FC<QuoteProps> = (): JSX.Element => {
	return (
		<blockquote>Quote</blockquote>
	)
}
