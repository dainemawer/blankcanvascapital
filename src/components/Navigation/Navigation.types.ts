export interface NavigationItemProps {
	href: string;
	id: string,
	label: string;
}

export interface NavigationProps {
	handleClose: () => void;
	handleOpen: () => void;
	handleToggle: () => void;
	id: string,
	isOpen: boolean;
	label: string;
}
