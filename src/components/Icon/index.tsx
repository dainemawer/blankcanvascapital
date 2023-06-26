/*
 * Icon
 *
 * Icon Component
 *
 * @returns {JSX.Element}
*/

import { FC } from 'react'
import {
	Briefcase,
	Key,
	Database,
	Lightning,
	Bookmark,
	Study,
	LightBulb,
	PaperPlane,
	Dollar
} from '../../icons';

interface IconProps {
	icon?: string;
}

export const Icon: FC<IconProps> = ({ icon }) => {
	switch (icon) {
		case 'briefcase':
			return <Briefcase />;
		case 'key':
			return <Key />;
		case 'database':
			return <Database />;
		case 'lightning':
			return <Lightning />;
		case 'bookmark':
			return <Bookmark />;
		case 'study':
			return <Study />;
		case 'light-bulb':
			return <LightBulb />;
		case 'paper-plane':
			return <PaperPlane />;
		case 'dollar':
			return <Dollar />;
		default:
			return <Briefcase />;
	}
}
