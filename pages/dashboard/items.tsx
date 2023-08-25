// Imports
import {motion} from "framer-motion";
import {NextPage, GetStaticProps} from "next";
import {IDashboard} from "@/types/context/dashboard";
import {DashboardContext, layoutTailwindStyling} from "@/context/dashboard";

// Components
import Layout from "@/components/Backend/Dashboard/Layout/Layout";
import CreateItem from "@/components/Backend/Dashboard/components/CreateItem";

const items: NextPage<IDashboard> = () => {
	return (
		<DashboardContext.Provider
			value={{
				pageTitle: "Items",
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
					<div className="flex flex-col justify-center item-center">
						<h1 className="text-lg font-bold text-left lg:text-2xl">Items</h1>
						<CreateItem />
					</div>
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

export default items;
