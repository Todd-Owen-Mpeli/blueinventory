import {FC} from "react";
import {DashboardContext} from "@/context/dashboard";
import {IDashboardContextProvider} from "@/types/context/public";

const DashboardContextProvider: FC<IDashboardContextProvider> = ({
	children,
	pageTitle,
	itemsCollection,
}) => {
	return (
		<DashboardContext.Provider
			value={{
				pageTitle: pageTitle,
				itemsCollection: itemsCollection,
			}}
		>
			{children}
		</DashboardContext.Provider>
	);
};

export default DashboardContextProvider;
