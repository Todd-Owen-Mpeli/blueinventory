// Imports
import React from "react";
import {motion} from "framer-motion";
import {NextPage, GetStaticProps} from "next";
import {IDashboard} from "@/types/context/dashboard";
import {layoutTailwindStyling} from "@/context/dashboard";

// Components
import Layout from "@/components/Backend/Dashboard/Layout/Layout";
import CardGrid from "@/components/Backend/Dashboard/components/CardGrid";
import CreateItem from "@/components/Backend/Dashboard/components/CreateItem";
import LatestItems from "@/components/Backend/Dashboard/components/LatestItems";
import DashboardMetaContentProvider from "@/components/Frontend/context/DashboardMetaContentProvider";

const dashboard: NextPage<IDashboard> = () => {
	return (
		<DashboardMetaContentProvider pageTitle={"Dashboard"}>
			<motion.section
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
			>
				<Layout tailwindStyling={layoutTailwindStyling}>
					<CardGrid />
					<LatestItems />
					<CreateItem />
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

export default dashboard;
