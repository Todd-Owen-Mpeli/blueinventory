// Imports
import {isEmpty} from "lodash";
import {motion} from "framer-motion";
import type {GetServerSideProps, NextPage} from "next";
import {getAuthToken} from "@/functions/cookies/cookies";
import {getLoginPreviewRedirectUrl} from "@/functions/redirects/redirects";
import {IPreviewContentContext, PreviewContentContext} from "@/context/context";
import {getAllStripePaymentPlans} from "@/functions/stripe/GetStripePaymentPlans";

// Mutations Functions
import {getAllPreviewPagesFlexibleContentComponents} from "@/functions/graphql/Mutations/GetAllPreviewFlexibleContentComponents";
import {getAllPreviewSeoPagesContent} from "@/functions/graphql/Mutations/GetAllPreviewSeoContent";

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

// Components
import Layout from "@/components/Layout/Layout";
import RenderFlexibleContentThree from "@/components/FlexibleContent/RenderFlexibleContentThree";

const dynamicPreviewPosts: NextPage<IPreviewContentContext> = ({
	defaultProps,
}) => {
	return (
		<PreviewContentContext.Provider
			value={{
				defaultProps: {
					seo: defaultProps?.seo,
					content: defaultProps?.content,
					stripePlans: defaultProps?.stripePlans,
					navbarMenuLinks: defaultProps?.navbarMenuLinks,
					footerMenuLinks: defaultProps?.footerMenuLinks,
					industriesMenuLinks: defaultProps?.industriesMenuLinks,
					operationalInsights: defaultProps?.operationalInsights,
					themesOptionsContent: defaultProps?.themesOptionsContent,
					contentSliderPostsContent: defaultProps?.contentSliderPostsContent,
				},
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
					<RenderFlexibleContentThree />
				</Layout>
			</motion.div>
		</PreviewContentContext.Provider>
	);
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
	const authToken: string = getAuthToken(context.req);
	const {params}: any = context || {};
	const loginRedirectURL: string = getLoginPreviewRedirectUrl(
		"page",
		params?.id
	);

	if (isEmpty(authToken)) {
		return {
			redirect: {
				permanent: false,
				destination: "/login",
			},
		};
	} else {
		// Fetch priority content
		/* PREVIEW BLOGS POSTS SEO CONTENT */
		const seoContent: any = await getAllPreviewSeoPagesContent(
			params?.id,
			authToken,
			loginRedirectURL
		);

		/* PREVIEW BLOGS POSTS FLEXIBLE CONTENT */
		const flexibleContentComponents: any =
			await getAllPreviewPagesFlexibleContentComponents(
				params?.id,
				authToken,
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

		const defaultProps = {
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
		};

		if (isEmpty(authToken || defaultProps.content)) {
			return {
				redirect: {
					permanent: false,
					destination: "/login",
				},
			};
		} else {
			return {
				props: {
					defaultProps,
				},
			};
		}
	}
};

export default dynamicPreviewPosts;
