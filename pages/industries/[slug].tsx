// Imports
import {motion} from "framer-motion";
import {ContentContext} from "@/context/context";
import {IContentContext} from "@/context/context";
import type {NextPage, GetStaticProps} from "next";
import {getAllStripePaymentPlans} from "@/functions/stripe/GetStripePaymentPlans";

// Queries Functions
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getIndustriesMenuLinks,
} from "@/functions/graphql/Queries/GetAllMenuLinks";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";
import {getAllSeoIndustriesPagesContent} from "@/functions/graphql/Queries/GetAllSeoPagesContent";
import {getAllIndustriesPageSlugs} from "@/functions/graphql/Queries/GetAllIndustriesPageSlugs";
import {getContentSliderBlogPostsPostsContent} from "@/functions/graphql/Queries/GetAllContentSliderPosts";
import {getAllOperationalInsightsContent} from "@/functions/graphql/Queries/GetAllOperationalInsightsPostsSlugs";
import {getAllIndustriesPagesFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const dynamicIndustriesPages: NextPage<IContentContext> = ({
	seo,
	content,
	stripePlans,
	footerMenuLinks,
	navbarMenuLinks,
	industriesMenuLinks,
	operationalInsights,
	themesOptionsContent,
	postTypeFlexiblecontent,
	contentSliderPostsContent,
}) => {
	return (
		<ContentContext.Provider
			value={{
				seo: seo,
				content: content,
				stripePlans: stripePlans,
				navbarMenuLinks: navbarMenuLinks,
				footerMenuLinks: footerMenuLinks,
				industriesMenuLinks: industriesMenuLinks,
				operationalInsights: operationalInsights,
				themesOptionsContent: themesOptionsContent,
				postTypeFlexiblecontent: postTypeFlexiblecontent,
				contentSliderPostsContent: contentSliderPostsContent,
			}}
		>
			<motion.div
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
			>
				<Layout>
					<RenderFlexibleContent />
				</Layout>
			</motion.div>
		</ContentContext.Provider>
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
	const postTypeFlexiblecontent: string =
		"DefaultTemplate_Flexiblecontent_FlexibleContent";

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
			postTypeFlexiblecontent,
			contentSliderPostsContent,
			content: flexibleContentComponents?.content,
		},
		revalidate: 60,
	};
};

export default dynamicIndustriesPages;
