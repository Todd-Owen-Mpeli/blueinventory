// Imports
import {NextPage, GetStaticProps} from "next";

// Components
import Meta from "@/components/Backend/Dashboard/Meta/Meta";
import PersonalInformation from "@/components/Backend/Dashboard/components/PersonalInformation";
import DashboardMetaContextProvider from "@/components/Frontend/context/DashboardMetaContextProvider";

const settings: NextPage = () => {
	return (
		<>
			<DashboardMetaContextProvider pageTitle={"Settings"}>
				<div className="w-full p-0 bg-white rounded-xl">
					<Meta />
					<PersonalInformation />
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

export default settings;
