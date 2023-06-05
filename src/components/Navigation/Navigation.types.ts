export interface NavigationItemProps {
	id: string,
	label: string;
	href: string;
}

export interface NavigationProps {
	id: string,
	label: string;
	menu: NavigationItemProps[];
}
