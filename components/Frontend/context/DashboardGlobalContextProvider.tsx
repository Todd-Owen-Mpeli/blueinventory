import {FC} from "react";
import {DashboardGlobalContext} from "@/context/dashboard";
import {IDashboardGlobalContextProvider} from "@/types/context/public";

const DashboardGlobalContextProvider: FC<IDashboardGlobalContextProvider> = ({
	children,
	pageTitle,
	itemsCollection,
	mediaFilesCollection,
}) => {
	return (
		<DashboardGlobalContext.Provider
			value={{
				pageTitle: pageTitle,
				itemsCollection: itemsCollection,
				mediaFilesCollection: mediaFilesCollection,
			}}
		>
			{children}
		</DashboardGlobalContext.Provider>
	);
};

export default DashboardGlobalContextProvider;
