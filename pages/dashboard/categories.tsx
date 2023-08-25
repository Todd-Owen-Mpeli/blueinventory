// Imports
import {motion} from "framer-motion";
import {NextPage, GetStaticProps} from "next";
import {IDashboard} from "@/types/context/dashboard";
import {DashboardContext, layoutTailwindStyling} from "@/context/dashboard";

// Components
import Layout from "@/components/Backend/Dashboard/Layout/Layout";

const categories: NextPage<IDashboard> = () => {
	return (
		<DashboardContext.Provider
			value={{
				pageTitle: "Categories",
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
					<h1 className="text-lg font-bold text-left lg:text-2xl">
						Categories
					</h1>
				</Layout>
			</motion.section>
		</DashboardContext.Provider>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};

export default categories;
