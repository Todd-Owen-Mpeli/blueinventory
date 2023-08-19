// Imports
import {motion} from "framer-motion";
import type {NextPage, GetStaticProps} from "next";
import {IContentContext} from "@/types/context/public/index";
import {postType, ContentContext, flexibleContentType} from "@/context/context";

// Queries Functions
import {getAllPagesSlugs} from "@/functions/Frontend/graphql/Queries/GetAllPagesSlugs";
import {getAllSeoContent} from "@/functions/Frontend/graphql/Queries/GetAllSeoPagesContent";
import {getAllFlexibleContentComponents} from "@/functions/Frontend/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import Layout from "../components/Frontend/Layout/Layout";
import RenderFlexibleContent from "@/components/Frontend/FlexibleContent/RenderFlexibleContent";
import {useGlobalContext} from "@/context/Global";

const dynamicPages: NextPage<IContentContext> = ({
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

export async function getStaticPaths() {
	const data = await getAllPagesSlugs();
	const paths = data.map((item) => ({
		params: {
			slug: item?.slug as String,
		},
	}));

	return {paths, fallback: false};
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
	// Fetch priority content
	const seoContent: any = await getAllSeoContent(params?.slug, postType?.pages);

	const flexibleContentComponents: any = await getAllFlexibleContentComponents(
		params?.slug,
		postType?.pages,
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

export default dynamicPages;
