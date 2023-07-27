export interface INavbarLinks {
	url: string;
	label: string;
	tailwindStyling: string;
	icon: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
}
