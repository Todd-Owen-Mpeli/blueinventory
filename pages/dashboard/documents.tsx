// Imports
import {motion} from "framer-motion";
import {NextPage, GetStaticProps} from "next";
import {IDashboard} from "@/types/context/dashboard";
import {layoutTailwindStyling} from "@/context/dashboard";

// Components
import Layout from "@/components/Backend/Dashboard/Layout/Layout";
import DashboardMetaContentProvider from "@/components/Frontend/context/DashboardMetaContentProvider";

const documents: NextPage<IDashboard> = () => {
	return (
		<DashboardMetaContentProvider pageTitle={"Documents"}>
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
		</DashboardMetaContentProvider>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};

export default documents;
