// Imports
import React from "react";
import {NextPage, GetStaticProps} from "next";

// Components
import Meta from "@/components/Backend/Dashboard/Meta/Meta";
import Tables from "@/components/Backend/Dashboard/components/Tables";
import DashboardMetaContextProvider from "@/components/Frontend/context/DashboardMetaContextProvider";

const dashboard: NextPage = () => {
	return (
		<>
			<DashboardMetaContextProvider pageTitle={"Dashboard"}>
				<div className="p-4">
					<Meta />
					<Tables />
				</div>
			</DashboardMetaContextProvider>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};

export default dashboard;
