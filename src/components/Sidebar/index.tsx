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
	StyledSidebar,
	StyledAddress,
	StyledAddressHeading,
	StyledAddressLocation,
	StyledAddressDetail
} from './Sidebar.styled';

const Sidebar: FC = (): JSX.Element => {
	return (
		<StyledSidebar>
			<a className="no-underline" href="https://goo.gl/maps/Mj5tpH9Wnd2v5SjG8" rel="noreferrer" target="_blank">
				<Image
					alt="Google Maps"
					height={261}
					loading="lazy"
					src="/google-map-new.png"
					style={{ filter: 'grayscale(100%)' }}
					width={400}
				/>
			</a>
			<StyledAddress>
				<StyledAddressHeading>Address</StyledAddressHeading>
				<StyledAddressLocation>
					1st Floor<br />
					30 Melrose Boulevard,<br />
					Melrose Arch, Johannesburg<br />
					South Africa
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
					<a href="https://www.linkedin.com/company/blank-canvas-capital/" rel="noopener noreferrer" target="_blank">
						@blankcanvascapital
					</a>
				</StyledAddressDetail>
			</StyledAddress>
		</StyledSidebar>
	)
}

export default Sidebar;
