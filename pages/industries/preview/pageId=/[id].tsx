// Imports
import {isEmpty} from "lodash";
import {motion} from "framer-motion";
import type {GetServerSideProps, NextPage} from "next";
import {getAuthToken} from "@/functions/cookies/cookies";
import {ContentContext, IContentContext} from "@/context/context";
import {getLoginPreviewRedirectUrl} from "@/functions/redirects/redirects";
import {getAllStripePaymentPlans} from "@/functions/stripe/GetStripePaymentPlans";

// Mutations Functions
import {getAllPreviewFlexibleContentComponents} from "@/functions/graphql/Mutations/GetAllPreviewFlexibleContentComponents";

// Queries Functions
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
	getIndustriesMenuLinks,
} from "@/functions/graphql/Queries/GetAllMenuLinks";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";
import {getAllPreviewSeoContent} from "@/functions/graphql/Mutations/GetAllPreviewSeoContent";
import {getContentSliderBlogPostsPostsContent} from "@/functions/graphql/Queries/GetAllContentSliderPosts";
import {getAllOperationalInsightsContent} from "@/functions/graphql/Queries/GetAllOperationalInsightsPostsSlugs";

// Components
import Layout from "@/components/Layout/Layout";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const dynamicPreviewPosts: NextPage<IContentContext> = ({
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

export const getServerSideProps: GetServerSideProps = async (context: any) => {
	const authToken: string = getAuthToken(context.req);
	const {params}: any = context || {};
	const postType: string = "industry";
	const postTypeFlexiblecontent: string =
		"Industry_Flexiblecontent_FlexibleContent";
	const loginRedirectURL: string = getLoginPreviewRedirectUrl(
		postType,
		params?.id
	);

	if (isEmpty(authToken)) {
		return {
			redirect: {
				permanent: false,
				destination: loginRedirectURL || `/login`,
				query: {postType, previewPostId: params?.id},
			},
		};
	} else {
		// Fetch priority content
		/* PREVIEW BLOGS POSTS SEO CONTENT */
		const seoContent: any = await getAllPreviewSeoContent(
			params?.id,
			authToken,
			postType,
			loginRedirectURL
		);

		/* PREVIEW BLOGS POSTS FLEXIBLE CONTENT */
		const flexibleContentComponents: any =
			await getAllPreviewFlexibleContentComponents(
				params?.id,
				authToken,
				postType,
				postTypeFlexiblecontent,
				loginRedirectURL
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

		if (seoContent || flexibleContentComponents.content) {
			return {
				redirect: {
					permanent: false,
					destination: loginRedirectURL || `/login`,
					query: {postType, previewPostId: params?.id},
				},
			};
		} else {
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
					postTypeFlexiblecontent,
					contentSliderPostsContent,
					content: flexibleContentComponents?.content,
				},
			};
		}
	}
};

export default dynamicPreviewPosts;
