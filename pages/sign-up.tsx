// Imports
import {motion} from "framer-motion";
import type {GetStaticProps, NextPage} from "next";
import {IContentContext} from "@/types/context/public/index";
import {ContentContext, flexibleContentType} from "@/context/context";
import {getAllStripePaymentPlans} from "@/functions/Backend/stripe/GetStripePaymentPlans";
// Queries Functions
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getIndustriesMenuLinks,
} from "@/functions/Frontend/graphql/Queries/GetAllMenuLinks";
import {getThemesOptionsContent} from "@/functions/Frontend/graphql/Queries/GetAllThemesOptions";
import {getContentSliderBlogPostsPostsContent} from "@/functions/Frontend/graphql/Queries/GetAllContentSliderPosts";
import {getAllOperationalInsightsContent} from "@/functions/Frontend/graphql/Queries/GetAllOperationalInsightsPostsSlugs";

// Components
import SignUp from "@/components/Frontend/SignUp";
import LayoutTwo from "@/components/Frontend/Layout/LayoutTwo";

const signUpPage: NextPage<IContentContext> = ({
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
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
			className="min-h-screen bg-white bg-center bg-no-repeat bg-cover"
			style={{
				backgroundImage: `url("/svg/backgroundSVG/stacked-waves-haikei-blue-pink-red-yellow.svg")`,
			}}
		>
			<LayoutTwo pageTitle={`Sign Up`}>
				<section className="container flex flex-col items-center justify-center min-h-screen px-4 py-10 mx-auto overflow-hidden">
					<SignUp
						title={`Sign Up today`}
						paragraph={`We kindly request you to enter your details.`}
						paragraphTwo={`We have partnered with google to provide and ensure your online experience is secure and hassle-free.
						<br/>
						<br/>
						We're committed to providing you with a top-notch user experience. It's all about making your journey with us secure, convenient, and enjoyable.
						`}
					/>
				</section>
			</LayoutTwo>
		</motion.div>
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

export default signUpPage;
