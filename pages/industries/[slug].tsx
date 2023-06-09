// Imports
import {motion} from "framer-motion";
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getIndustriesMenuLinks,
} from "../../functions/GetAllMenuLinks";
import type {NextPage, GetStaticProps} from "next";
import {getThemesOptionsContent} from "../../functions/GetAllThemesOptions";
import {getAllStripePaymentPlans} from "@/functions/stripe/GetStripePaymentPlans";
import {getAllSeoIndustriesPagesContent} from "@/functions/GetAllSeoPagesContent";
import {getAllIndustriesPageSlugs} from "../../functions/GetAllIndustriesPageSlugs";
import {getContentSliderBlogPostsPostsContent} from "@/functions/GetAllContentSliderPosts";
import {getAllOperationalInsightsContent} from "@/functions/GetAllOperationalInsightsPostsSlugs";
import {getAllIndustriesPagesFlexibleContentComponents} from "@/functions/GetAllFlexibleContentComponents";

// Components
import Layout from "../../components/Layout/Layout";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

interface IDynamicIndustriesPages {
	seo: {
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
	content: any;
	pageTitle: any;
	stripePlans: {
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
	footerMenuLinks: {
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
	navbarMenuLinks: {
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
	industriesMenuLinks: {
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
	themesOptionsContent: {
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
	operationalInsights: [
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
	contentSliderPostsContent: {
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
}

const dynamicIndustriesPages: NextPage<IDynamicIndustriesPages> = ({
	seo,
	content,
	pageTitle,
	stripePlans,
	navbarMenuLinks,
	footerMenuLinks,
	industriesMenuLinks,
	operationalInsights,
	themesOptionsContent,
	contentSliderPostsContent,
}) => {
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			<Layout
				seo={seo}
				pageTitle={pageTitle}
				themesOptionsContent={themesOptionsContent}
				footerMenuLinks={footerMenuLinks?.footerMenuLinks}
				navbarMenuLinks={navbarMenuLinks?.navbarMenuLinks}
				industriesMenuLinks={industriesMenuLinks?.industriesMenuLinks}
			>
				<RenderFlexibleContent
					content={content}
					operationalInsights={operationalInsights}
					themesOptionsContent={themesOptionsContent}
					stripePremiumPlan={stripePlans?.stripePremiumPlan}
					stripeStandardPlan={stripePlans?.stripeStandardPlan}
					contentSliderPostsContent={contentSliderPostsContent}
				/>
			</Layout>
		</motion.div>
	);
};

export async function getStaticPaths() {
	const data = await getAllIndustriesPageSlugs();
	const paths = data.map((item) => ({
		params: {
			slug: item?.slug as String,
		},
	}));

	return {paths, fallback: false};
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
	// Fetch priority content
	const seoContent: any = await getAllSeoIndustriesPagesContent(params?.slug);

	const flexibleContentComponents: any =
		await getAllIndustriesPagesFlexibleContentComponents(params?.slug);

	// Fetch remaining content simultaneously
	const [
		stripePlans,
		mainMenuLinks,
		navbarMenuLinks,
		footerMenuLinks,
		industriesMenuLinks,
		themesOptionsContent,
		operationalInsights,
		contentSliderPostsContent,
	] = await Promise.all([
		getAllStripePaymentPlans(),
		getMainMenuLinks(),
		getNavbarMenuLinks(),
		getFooterMenuLinks(),
		getIndustriesMenuLinks(),
		getThemesOptionsContent(),
		getAllOperationalInsightsContent(),
		getContentSliderBlogPostsPostsContent(),
	]);

	return {
		props: {
			stripePlans,
			mainMenuLinks,
			navbarMenuLinks,
			footerMenuLinks,
			seo: seoContent,
			industriesMenuLinks,
			operationalInsights,
			themesOptionsContent,
			contentSliderPostsContent,
			content: flexibleContentComponents?.content,
			pageTitle: flexibleContentComponents?.pageTitle,
		},
		revalidate: 60,
	};
};

export default dynamicIndustriesPages;
