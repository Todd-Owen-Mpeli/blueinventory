// Imports
import {IFirebaseUser} from "@/types/firebase";

// Components Card
export type IFaqCard = {
	title: string;
	paragraph: string;
};
export type ILogoCard = {
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};
export type IJumboCard = {
	title: string;
	subtitle: string;
	paragraph: string;
	backgroundColor: string;
};

export type IHeroThreeCard = {
	link: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};
export type IBulletListCard = {
	bulletPoint: string;
	iconFillColor: string;
	tailwindStyling: string;
};
export type ITestimonialCard = {
	title: string;
	paragraph: string;
	jobPosition: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};
export type IContentImageCard = {
	title: string;
	paragraph: string;
	contentLocation: string;
	backgroundImage: string;
};
export type IPaymentProvidersCard = {
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};
export type IStatsBulletPointCard = {
	bulletPointText: string;
	tailwindStyling: string;
};
export type IOperationalInsightsCard = {
	uri: string;
	title: string;
	paragraph: string;
	featuredImage: {
		node: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
};
export type ITitleThreeContentGridCard = {
	title: string;
	paragraph: string;
	icon: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};

// Elements
export type IFormIntro = {
	title: string;
	paragraph: string;
};
export type IErrorPage = {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
};
export type IParagraphProps = {
	content: string;
	tailwindStyling: string;
};
export type IFooterMenuLinks = {
	url: string;
	label: string;
	tailwindStyling: string;
};
export type INavbarMenuLinks = {
	url: string;
	label: string;
	tailwindStyling: string;
};

// layout
export type ILayout = {
	children: React.ReactNode;
};
export type ILayoutTwo = {
	pageTitle: any;
	children: React.ReactNode;
};

// Components
export type ICTA = {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
	content: {
		title: string;
		paragraph: string;
	};
};
export type IFaq = {
	title: string;
	paragraph: string;
	icon: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	qagrid: [
		{
			title: string;
			paragraph: string;
		}
	];
};
export type IHero = {
	title: string;
	subtitle: string;
	backgroundImage: string;
	backgroundVideoUrl: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
};
export type ILogos = {
	title: string;
	paragraph: string;
	logoGrid: [
		{
			id: string;
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
		}
	];
};
export type IStats = {
	title: string;
	subtitle: string;
	paragraph: string;
	paragraphTwo: string;
	bulletPoints: [
		{
			id: string;
			bulletPoint: string;
		}
	];
	column: {
		title: string;
		values: string;
		percentage: string;
	};
	columnTwo: {
		title: string;
		values: string;
		percentage: string;
	};
};
export type ICTATwo = {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type ISignIn = {
	title: string;
	paragraph: string;
	paragraphTwo: string;
};
export type ISignUp = {
	title: string;
	paragraph: string;
	paragraphTwo: string;
};
export type IHeroTwo = {
	title: string;
	paragraph: string;
	backgroundVideoUrl: string;
	backgroundImageOrVideo: string;
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IPricing = {
	title: string;
	italic: string;
	pointOne: string;
	pointTwo: string;
	paragraph: string;
	card: {
		bulletList: [
			{
				id: string;
				bulletPoint: string;
			}
		];
	};
	paymentProviders: [
		{
			id: string;
			logo: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					height: number;
					width: number;
				};
			};
		}
	];
};
export type IImageGrid = {
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageTwo: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageThree: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageFour: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageFive: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	imageSix: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};
export type ITestimonial = {
	title: string;
	paragraph: string;
	contentGrid: [
		{
			card: {
				id: string;
				name: string;
				position: string;
				paragraph: string;
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: number;
						width: number;
					};
				};
			};
		}
	];
};
export type IContactForm = {
	title: string;
	backgroundImage: string;
};
export type IContactInfo = {
	title: string;
	paragraph: string;
};
export type IMobileNavbar = {
	revealMobileMenu: boolean;
};
export type ILoadingState = {
	error: boolean;
	isLoading: boolean;
};
export type IJumboContent = {
	title: string;
	paragraph: string;
	icon: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	cardOne: {
		title: string;
		subtitle: string;
		paragraph: string;
	};
	cardTwo: {
		backgroundImage: {
			sourceUrl: string;
		};
	};
	cardThree: {
		foreground: {
			title: string;
			subtitle: string;
			paragraph: string;
		};
		background: {
			title: string;
			subtitle: string;
			paragraph: string;
		};
	};
	gridContent: [
		{
			card: {
				id: string;
				title: string;
				subtitle: string;
				paragraph: string;
				backgroundColor: string;
			};
		}
	];
	lastCard: {
		backgroundImage: {
			sourceUrl: string;
		};
	};
};
export type IHeroThreeProps = {
	title: string;
	paragraph: string;
	imageGrid: [
		{
			card: {
				link: {
					url: string;
					title: string;
					target: string;
				};
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: number;
						width: number;
					};
				};
			};
		}
	];
};
export type ISustainability = {
	title: string;
	subtitle: string;
	paragraph: string;
	percentage: string;
	imageText: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};
export type ITitleParagraph = {
	title: string;
	paragraph: string;
};
export type ICheckoutWelcome = {
	title: string;
	paragraph: string;
	stripeSuccess: boolean;
};
export type IJumboContentTwo = {
	cardOne: {
		title: string;
		subtitle: string;
		paragraph: string;
	};
	cardTwo: {
		backgroundImage: {
			sourceUrl: string;
		};
	};
	gridContent: [
		{
			card: {
				id: string;
				title: string;
				subtitle: string;
				paragraph: string;
				backgroundColor: string;
			};
		}
	];
	lastCard: {
		backgroundImage: {
			sourceUrl: string;
		};
	};
};
export type IOperationalInsights = {
	title: string;
	italic: string;
	paragraph: string;
};
export type ITitleThreeContentGrid = {
	title: string;
	icon: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	contentGrid: [
		{
			card: {
				id: string;
				title: string;
				paragraph: string;
				icon: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: number;
						width: number;
					};
				};
				buttonLink: {
					url: string;
					title: string;
					target: string;
				};
			};
		}
	];
};
export type IContentBackgroundImage = {
	gridContent: [
		{
			card: {
				id: string;
				title: string;
				paragraph: string;
				contentLocation: string;
				backgroundImage: {
					sourceUrl: string;
				};
			};
		}
	];
};
