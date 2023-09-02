// Imports
import {motion} from "framer-motion";
import {NextPage, GetStaticProps} from "next";
import {IDashboard} from "@/types/context/dashboard";
import {layoutTailwindStyling} from "@/context/dashboard";

// Components
import Layout from "@/components/Backend/Dashboard/Layout/Layout";
import CreateItem from "@/components/Backend/Dashboard/components/CreateItem";
import DashboardMetaContentProvider from "@/components/Frontend/context/DashboardMetaContentProvider";

const items: NextPage<IDashboard> = () => {
	return (
		<DashboardMetaContentProvider pageTitle={"Items"}>
			<motion.section
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
			>
				<Layout tailwindStyling={layoutTailwindStyling}>
					<div className="flex flex-col justify-center item-center">
						<h1 className="text-lg font-bold text-left lg:text-2xl">Items</h1>
						<CreateItem />
					</div>
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

export default items;
