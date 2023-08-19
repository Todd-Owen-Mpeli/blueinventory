// Imports
import {motion} from "framer-motion";
import {NextPage, GetStaticProps} from "next";
import {IContentContext} from "@/types/context/public";
import {ContentContext, flexibleContentType} from "@/context/context";

// Components
import LayoutTwo from "@/components/Frontend/Layout/LayoutTwo";
import Payments from "@/components/Frontend/Payments";
import {useGlobalContext} from "@/context/Global";

const payment: NextPage<IContentContext> = ({
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
			<motion.section
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
				className="min-h-screen bg-white"
			>
				<LayoutTwo pageTitle={`Payments`}>
					<div className="container min-h-full px-4 pt-8 mx-auto lg:pt-16">
						<Payments />
					</div>
				</LayoutTwo>
			</motion.section>
		</ContentContext.Provider>
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
