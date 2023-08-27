// Imports
import {motion} from "framer-motion";
import {IDashboard} from "@/types/context/dashboard";
import {NextPage, GetStaticProps} from "next";
import {DashboardMetaContent, layoutTailwindStyling} from "@/context/dashboard";

// Components
import Layout from "@/components/Backend/Dashboard/Layout/Layout";

const documents: NextPage<IDashboard> = () => {
	return (
		<DashboardMetaContent.Provider
			value={{
				pageTitle: "Documents",
			}}
		>
			<motion.section
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
			>
				<Layout tailwindStyling={layoutTailwindStyling}>
					<h1 className="text-lg font-bold text-left lg:text-2xl">Documents</h1>
				</Layout>
			</motion.section>
		</DashboardMetaContent.Provider>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};

export default documents;
