export interface NavigationItemProps {
	href: string;
	id: string,
	label: string;
}

export interface NavigationProps {
	menu: NavigationItemProps[];
	id: string,
	label: string;
}
