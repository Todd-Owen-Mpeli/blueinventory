// Imports
import {motion} from "framer-motion";
import {NextPage, GetStaticProps} from "next";
import {IContentContext} from "@/types/context/public";
import {ContentContext, flexibleContentType} from "@/context/context";

// Queries Functions
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getIndustriesMenuLinks,
} from "@/functions/graphql/Queries/GetAllMenuLinks";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";
import {getContentSliderBlogPostsPostsContent} from "@/functions/graphql/Queries/GetAllContentSliderPosts";
import {getAllOperationalInsightsContent} from "@/functions/graphql/Queries/GetAllOperationalInsightsPostsSlugs";

// Stripe
import {getAllStripePaymentPlans} from "@/functions/stripe/GetStripePaymentPlans";

// Components
import LayoutTwo from "@/components/Layout/LayoutTwo";
import Payments from "@/components/Payments";

const payment: NextPage<IContentContext> = ({
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
}) => (
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
		<motion.section
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
			className="min-h-screen bg-white"
		>
			<LayoutTwo pageTitle={`Payments`}>
				<div className="container px-4 pt-16 mx-auto">
					<Payments />
				</div>
			</LayoutTwo>
		</motion.section>
	</ContentContext.Provider>
);

export const getStaticProps: GetStaticProps = async () => {
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
			seo: null,
			stripePlans,
			content: null,
			mainMenuLinks,
			navbarMenuLinks,
			pageTitle: null,
			footerMenuLinks,
			operationalInsights,
			industriesMenuLinks,
			themesOptionsContent,
			contentSliderPostsContent,
			postTypeFlexibleContent: flexibleContentType?.pages,
		},
		revalidate: 60,
	};
};

export default payment;
