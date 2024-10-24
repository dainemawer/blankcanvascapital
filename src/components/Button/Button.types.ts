export interface ButtonProps {
	className?: string;
	children: React.ReactNode;
	href?: string;
	id?: string;
	type?: 'button' | 'submit' | 'reset';
}
