// Imports
import {motion} from "framer-motion";
import Layout from "@/components/Layout/Layout";
import {ContentContext} from "@/context/context";
import {NextPage, GetServerSideProps} from "next";
import {IContentContext} from "@/types/context/public/index";
import {getAllStripePaymentPlans} from "@/functions/stripe/GetStripePaymentPlans";

// Queries Functions
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getIndustriesMenuLinks,
} from "@/functions/graphql/Queries/GetAllMenuLinks";
import {getAllSeoContent} from "@/functions/graphql/Queries/GetAllSeoPagesContent";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";
import {getContentSliderBlogPostsPostsContent} from "@/functions/graphql/Queries/GetAllContentSliderPosts";
import {getAllFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";
import {getAllOperationalInsightsContent} from "@/functions/graphql/Queries/GetAllOperationalInsightsPostsSlugs";

// Components
import Login from "@/components/Login";

const login: NextPage<IContentContext> = ({
	seo,
	content,
	stripePlans,
	footerMenuLinks,
	navbarMenuLinks,
	industriesMenuLinks,
	operationalInsights,
	themesOptionsContent,
	postTypeFlexibleContent,
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
				postTypeFlexibleContent: postTypeFlexibleContent,
				contentSliderPostsContent: contentSliderPostsContent,
			}}
		>
			<motion.div
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
				className="bg-center bg-no-repeat bg-cover "
				style={{
					backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-orange-yellow-pinkRed.svg")`,
				}}
			>
				<Layout>
					<Login />
				</Layout>
			</motion.div>
		</ContentContext.Provider>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const postType: string = "pages";
	const postTypeFlexibleContent: string =
		"DefaultTemplate_Flexiblecontent_FlexibleContent";

	// Fetch priority content
	const seoContent: any = await getAllSeoContent("Home", postType);

	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		"Home",
		postType,
		postTypeFlexibleContent
	);

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
			operationalInsights,
			industriesMenuLinks,
			themesOptionsContent,
			postTypeFlexibleContent,
			contentSliderPostsContent,
			content: flexibleContentComponents?.content,
		},
	};
};

export default login;
