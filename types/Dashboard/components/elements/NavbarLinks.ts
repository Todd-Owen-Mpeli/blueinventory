export interface INavbarLinks {
	path: string;
	label: string;
	displayMenuText: boolean;
	tailwindStyling: string;
	icon: {
		alt: string;
		src: string;
		height: number;
		width: number;
	};
}
