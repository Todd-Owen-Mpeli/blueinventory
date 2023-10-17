// Imports
import {NextPage, GetStaticProps} from "next";
import {IPageContext} from "@/types/context/public";
import {flexibleContentType} from "@/context/context";
import PageContextProvider from "@/components/Frontend/context/PageContextProvider";

// Components
import LayoutTwo from "@/components/Frontend/Layout/LayoutTwo";
import Payments from "@/components/Frontend/Payments";

const payment: NextPage<IPageContext> = ({
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
				<section className="min-h-screen bg-white">
					<LayoutTwo pageTitle={`Payments`}>
						<div className="container min-h-full px-4 pt-8 mx-auto lg:pt-16">
							<Payments />
						</div>
					</LayoutTwo>
				</section>
			</PageContextProvider>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {
			seo: null,
			content: null,
			pageTitle: null,
			postTypeFlexibleContent: flexibleContentType?.pages,
		},
		revalidate: 60,
	};
};

export default payment;
