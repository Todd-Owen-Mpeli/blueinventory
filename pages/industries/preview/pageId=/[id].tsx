// Imports
import {isEmpty} from "lodash";
import {motion} from "framer-motion";
import {IContentContext} from "@/types/context/public";
import type {GetServerSideProps, NextPage} from "next";
import {getAuthToken} from "@/functions/Frontend/cookies/cookies";
import {postType, ContentContext, flexibleContentType} from "@/context/context";
import {getLoginPreviewRedirectUrl} from "@/functions/Frontend/redirects/redirects";

// Mutations Functions
import {getAllPreviewFlexibleContentComponents} from "@/functions/Frontend/graphql/Mutations/GetAllPreviewFlexibleContentComponents";

// Queries Functions
import {getAllPreviewSeoContent} from "@/functions/Frontend/graphql/Mutations/GetAllPreviewSeoContent";

// Components
import Layout from "@/components/Frontend/Layout/Layout";

import RenderFlexibleContent from "@/components/Frontend/FlexibleContent/RenderFlexibleContent";

const dynamicPreviewPosts: NextPage<IContentContext> = ({
	seo,
	content,
	postTypeFlexibleContent,
}) => {
	return (
		<ContentContext.Provider
			value={{
				seo: seo,
				content: content,
				postTypeFlexibleContent: postTypeFlexibleContent,
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
	const loginRedirectURL: string = getLoginPreviewRedirectUrl(
		postType?.previewIndustry,
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
			postType?.previewIndustry,
			loginRedirectURL
		);

		/* PREVIEW BLOGS POSTS FLEXIBLE CONTENT */
		const flexibleContentComponents: any =
			await getAllPreviewFlexibleContentComponents(
				params?.id,
				authToken,
				postType?.previewIndustry,
				loginRedirectURL,
				flexibleContentType?.previewIndustry
			);

		return {
			props: {
				seo: seoContent,
				content: flexibleContentComponents?.content,
				postTypeFlexibleContent: flexibleContentType?.previewIndustry,
			},
		};
	}
};

export default dynamicPreviewPosts;
