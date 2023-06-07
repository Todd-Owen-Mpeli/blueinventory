// Import
import {motion} from "framer-motion";
import type {NextPage, GetStaticProps} from "next";
import {getAllPagesSlugs} from "@/functions/GetAllPagesSlugs";
import {getAllSeoPagesContent} from "@/functions/GetAllSeoPagesContent";
import {getContentSliderBlogPostsPostsContent} from "@/functions/GetAllContentSliderPosts";
import {getAllPagesFlexibleContentComponents} from "@/functions/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

interface IDynamicPages {
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
	pageTitle: string;
	content: any;
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
	footerMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];
	navbarMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];
	industriesMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];
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
		errorPageContent: {
			title: string;
			paragraph: string;
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
			backgroundImage: {
				sourceUrl: string;
			};
		};
	};
	operationalInsights: [
		{
			node: {
				id: string;
				uri: string;
				title: string;
				singleOperationalInsightPost: {
					titleParagraph: {
						paragraph: string;
					};
				};
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
		}
	];
	contentSliderPostsContent: {
		content: [
			{
				uri: string;
				date: string;
				title: string;
				singleOperationalInsightPost: {
					heroSection: {
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
					};
					titleParagraph: {
						title: string;
						paragraph: string;
					};
				};
			},
			{
				uri: string;
				date: string;
				title: string;
				singleOperationalInsightPost: {
					heroSection: {
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
					};
					titleParagraph: {
						title: string;
						paragraph: string;
					};
				};
			},
			{
				uri: string;
				date: string;
				title: string;
				singleOperationalInsightPost: {
					heroSection: {
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
					};
					titleParagraph: {
						title: string;
						paragraph: string;
					};
				};
			}
		];
	};
}

const dynamicPages: NextPage<IDynamicPages> = ({
	seo,
	content,
	pageTitle,
	navbarMenuLinks,
	footerMenuLinks,
	stripePremiumPlan,
	stripeStandardPlan,
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
				navbarMenuLinks={navbarMenuLinks}
				footerMenuLinks={footerMenuLinks}
				industriesMenuLinks={industriesMenuLinks}
				themesOptionsContent={themesOptionsContent}
			>
				<RenderFlexibleContent
					content={content}
					navbarMenuLinks={navbarMenuLinks}
					footerMenuLinks={footerMenuLinks}
					stripePremiumPlan={stripePremiumPlan}
					stripeStandardPlan={stripeStandardPlan}
					industriesMenuLinks={industriesMenuLinks}
					operationalInsights={operationalInsights}
					themesOptionsContent={themesOptionsContent}
					contentSliderPostsContent={contentSliderPostsContent}
				/>
			</Layout>
		</motion.div>
	);
};

export async function getStaticPaths() {
	const data = await getAllPagesSlugs();
	const paths = data.map((item) => ({
		params: {
			slug: item?.slug as String,
		},
	}));

	return {paths, fallback: false};
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
	// Fetch priority content
	const seoContent: any = await getAllSeoPagesContent(params?.slug);

	const flexibleContentComponents: any =
		await getAllPagesFlexibleContentComponents(params?.slug);

	// Fetch remaining content simultaneously
	const [
		blogs,
		mainMenuLinks,
		navbarMenuLinks,
		footerMenuLinks,
		themesOptionsContent,
		contentSliderPostsContent,
	] = await Promise.all([
		getAllBlogsContent(),
		getMainMenuLinks(),
		getNavbarMenuLinks(),
		getFooterMenuLinks(),
		getThemesOptionsContent(),
		getContentSliderBlogPostsPostsContent(),
	]);

	return {
		props: {
			blogs,
			mainMenuLinks,
			navbarMenuLinks,
			footerMenuLinks,
			seo: seoContent,
			themesOptionsContent,
			contentSliderPostsContent,
			content: flexibleContentComponents?.content,
			pageTitle: flexibleContentComponents?.pageTitle,
		},
		revalidate: 60,
	};
};

export default dynamicPages;
