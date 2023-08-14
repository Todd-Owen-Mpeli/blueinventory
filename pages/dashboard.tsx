// Imports
import React from "react";
import {motion} from "framer-motion";
import {NextPage, GetStaticProps} from "next";
import {IDashboard} from "@/types/context/dashboard";
import {DashboardContext, layoutTailwindStyling} from "@/context/dashboard";

// Components
import Layout from "@/components/Backend/Dashboard/Layout/Layout";
import Tables from "@/components/Backend/Dashboard/components/Tables";
import CardGrid from "@/components/Backend/Dashboard/components/CardGrid";

const dashboard: NextPage<IDashboard> = () => {
	return (
		<DashboardContext.Provider
			value={{
				pageTitle: "Dashboard",
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
					<div className="flex justify-between gap-4">
						<CardGrid />
					</div>
					<Tables />
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

export default dashboard;
