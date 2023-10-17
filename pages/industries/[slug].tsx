// Imports
import type {NextPage, GetStaticProps} from "next";
import {IPageContext} from "@/types/context/public";
import {postType, flexibleContentType} from "@/context/context";
import PageContextProvider from "@/components/Frontend/context/PageContextProvider";

// Queries Functions
import {getAllSeoContent} from "@/functions/Frontend/graphql/Queries/GetAllSeoPagesContent";
import {getAllIndustriesPageSlugs} from "@/functions/Frontend/graphql/Queries/GetAllIndustriesPageSlugs";
import {getAllFlexibleContentComponents} from "@/functions/Frontend/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Frontend/Layout/Layout";
import RenderFlexibleContent from "@/components/Frontend/FlexibleContent/RenderFlexibleContent";

const dynamicIndustriesPages: NextPage<IPageContext> = ({
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
	// Fetch priority content
	const seoContent: any = await getAllSeoContent(
		params?.slug,
		postType?.industry
	);

	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		params?.slug,
		postType?.industry,
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

export default dynamicIndustriesPages;
