export type ISeo = {
	canonical: string;
	cornerstone: Boolean;
	focuskw: string;
	fullHead: string;
	metaDesc: string;
	metaKeywords: string;
	metaRobotsNofollow: string;
	metaRobotsNoindex: string;
	opengraphAuthor: string;
	opengraphDescription: string;
	opengraphImage: {
		mediaItemUrl: string;
	};
	opengraphModifiedTime: string;
	opengraphPublishedTime: string;
	opengraphPublisher: string;
	opengraphSiteName: string;
	opengraphTitle: string;
	opengraphType: string;
	opengraphUrl: string;
	readingTime: number;
	title: string;
	twitterDescription: string;
	twitterTitle: string;
	twitterImage: {
		mediaItemUrl: string;
	};
};

export type IContent = [
	{
		content: any;
	}
];

export type IStripePlans = {
	stripePrices:
		| [
				{
					id: string;
					object: string;
					active: boolean;
					billing_scheme: string;
					created: number;
					currency: string;
					custom_unit_amount: any;
					livemode: boolean;
					lookup_key: any;
					metadata: any;
					nickname: any;
					product: {
						id: string;
						object: string;
						active: boolean;
						attributes: [];
						created: number;
						default_price: string;
						description: string;
						images: [any];
						livemode: boolean;
						metadata: any;
						name: string;
						package_dimensions: any;
						shippable: any;
						statement_descriptor: any;
						tax_code: any;
						type: string;
						unit_label: any;
						updated: number;
						url: any;
					};
					recurring: {
						aggregate_usage: any;
						interval: string;
						interval_count: number;
						trial_period_days: any;
						usage_type: string;
					};
					tax_behavior: string;
					tiers_mode: any;
					transform_quantity: any;
					type: string;
					unit_amount: number;
					unit_amount_decimal: string;
				}
		  ];
	stripePremiumPlan: {
		name: string;
		description: string;
		price: number;
		paymentRecurringInterval: string;
	};
	stripeStandardPlan: {
		name: string;
		description: string;
		price: number;
		paymentRecurringInterval: string;
	};
};

export type IFooterMenuLinks = {
	footerMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];
};

export type INavbarMenuLinks = {
	navbarMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];
};

export type IIndustriesMenuLinks = {
	industriesMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];
};

export type IOperationalInsights = [
	{
		node: {
			id: string;
			uri: string;
			title: string;
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
			template: {
				flexibleContent: {
					flexibleContent: [
						{
							fieldGroupName: string;
							paragraph: string;
							title: string;
						}
					];
				};
			};
		};
	}
];

export type IThemesOptionsContent = {
	email: string;
	address: string;
	emailTwo: string;
	phoneNumber: string;
	phoneNumberTwo: string;
	twitterLink: string;
	facebookLink: string;
	linkedinLink: string;
	copyrightText: string;
};

export type IPostTypeFlexiblecontent = {
	postTypeFlexiblecontent: string;
};

export type IContentSliderPostsContent = {
	content: [
		{
			uri: string;
			date: string;
			title: string;
			template: {
				flexibleContent: {
					flexibleContent: [
						{
							fieldGroupName: string;
							backgroundVideoUrl: string;
							backgroundImageOrVideo: string;
							backgroundImage: {
								altText: string;
								sourceUrl: string;
								mediaDetails: {
									height: number;
									width: number;
								};
							};
						},
						{
							fieldGroupName: string;
							paragraph: string;
							title: string;
						}
					];
				};
			};
		},
		{
			uri: string;
			date: string;
			title: string;
			template: {
				flexibleContent: {
					flexibleContent: [
						{
							fieldGroupName: string;
							backgroundVideoUrl: string;
							backgroundImageOrVideo: string;
							backgroundImage: {
								altText: string;
								sourceUrl: string;
								mediaDetails: {
									height: number;
									width: number;
								};
							};
						},
						{
							fieldGroupName: string;
							paragraph: string;
							title: string;
						}
					];
				};
			};
		},
		{
			uri: string;
			date: string;
			title: string;
			template: {
				flexibleContent: {
					flexibleContent: [
						{
							fieldGroupName: string;
							backgroundVideoUrl: string;
							backgroundImageOrVideo: string;
							backgroundImage: {
								altText: string;
								sourceUrl: string;
								mediaDetails: {
									height: number;
									width: number;
								};
							};
						},
						{
							fieldGroupName: string;
							paragraph: string;
							title: string;
						}
					];
				};
			};
		}
	];
};
