// Imports
import {motion} from "framer-motion";
import type {NextPage, GetStaticProps} from "next";
import {IPageContext} from "@/types/context/public";
import {postType, flexibleContentType} from "@/context/context";
import PageContextProvider from "@/components/Frontend/context/PageContextProvider";

// Queries Functions
import {getAllSeoContent} from "@/functions/Frontend/graphql/Queries/GetAllSeoPagesContent";
import {getAllFlexibleContentComponents} from "@/functions/Frontend/graphql/Queries/GetAllFlexibleContentComponents";
import {getAllOperationalInsightsPostsSlugs} from "@/functions/Frontend/graphql/Queries/GetAllOperationalInsightsPostsSlugs";

// Components
import Layout from "@/components/Frontend/Layout/Layout";
import RenderFlexibleContent from "@/components/Frontend/FlexibleContent/RenderFlexibleContent";

const dynamicOperationalInsightsPosts: NextPage<IPageContext> = ({
	seo,
	content,
	postTypeFlexibleContent,
}) => {
	return (
		<PageContextProvider
			seo={seo}
			content={content}
			postTypeFlexibleContent={postTypeFlexibleContent}
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
		</PageContextProvider>
	);
};

export async function getStaticPaths() {
	const data = await getAllOperationalInsightsPostsSlugs();
	const paths = data.map((item) => ({
		params: {
			slug: item?.slug as String,
		},
	}));

	return {paths, fallback: false};
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
	// Fetch priority content
	const seoContent: any = await getAllSeoContent(params?.slug, postType.posts);

	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		params?.slug,
		postType.posts,
		flexibleContentType?.pages
	);

	return {
		props: {
			seo: seoContent,
			content: flexibleContentComponents?.content,
			postTypeFlexibleContent: flexibleContentType?.pages,
		},
		revalidate: 60,
	};
};

export default dynamicOperationalInsightsPosts;
