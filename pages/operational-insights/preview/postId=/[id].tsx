// Imports
import {isEmpty} from "lodash";
import type {GetServerSideProps, NextPage} from "next";

import {IPageContext} from "@/types/context/public";
import {postType, flexibleContentType} from "@/context/context";
import {getAuthToken} from "@/functions/Frontend/cookies/cookies";
import {getLoginPreviewRedirectUrl} from "@/functions/Frontend/redirects/redirects";
import PageContextProvider from "@/components/Frontend/context/PageContextProvider";
import {getAllStripePaymentPlans} from "@/functions/Backend/stripe/GetStripePaymentPlans";

// Mutations Functions
import {getAllPreviewSeoContent} from "@/functions/Frontend/graphql/Mutations/GetAllPreviewSeoContent";
import {getAllPreviewFlexibleContentComponents} from "@/functions/Frontend/graphql/Mutations/GetAllPreviewFlexibleContentComponents";

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
import Layout from "@/components/Frontend/Layout/Layout";
import RenderFlexibleContent from "@/components/Frontend/FlexibleContent/RenderFlexibleContent";

const dynamicPreviewPosts: NextPage<IPageContext> = ({
	seo,
	content,
	postTypeFlexibleContent,
}) => {
	return (
		<>
			<PageContextProvider
				seo={seo}
				content={content}
				postTypeFlexibleContent={postTypeFlexibleContent}
			>
				<Layout>
					<RenderFlexibleContent />
				</Layout>
			</PageContextProvider>
		</>
	);
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
	const authToken: string = getAuthToken(context.req);
	const {params}: any = context || {};
	const loginRedirectURL: string = getLoginPreviewRedirectUrl(
		postType?.previewPost,
		params?.id
	);

	if (isEmpty(authToken)) {
		return {
			redirect: {
				permanent: false,
				destination: loginRedirectURL || "/login",
				query: {postType, previewPostId: params?.id},
			},
		};
	} else {
		// Fetch priority content
		/* PREVIEW BLOGS POSTS SEO CONTENT */
		const seoContent: any = await getAllPreviewSeoContent(
			params?.id,
			authToken,
			postType?.previewPost,
			loginRedirectURL
		);

		/* PREVIEW BLOGS POSTS FLEXIBLE CONTENT */
		const flexibleContentComponents: any =
			await getAllPreviewFlexibleContentComponents(
				params?.id,
				authToken,
				postType?.previewPost,
				loginRedirectURL,
				flexibleContentType?.previewPost
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
				contentSliderPostsContent,
				content: flexibleContentComponents?.content,
				postTypeFlexibleContent: flexibleContentType?.previewPost,
			},
		};
	}
};

export default dynamicPreviewPosts;
