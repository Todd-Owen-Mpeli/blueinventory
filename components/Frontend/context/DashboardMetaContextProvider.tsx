import {FC} from "react";
import {DashboardMetaContext} from "@/context/dashboard";
import {IDashboardMetaContextProvider} from "@/types/context/public";

const DashboardMetaContextProvider: FC<IDashboardMetaContextProvider> = ({
	children,
	pageTitle,
}) => {
	return (
		<DashboardMetaContext.Provider
			value={{
				pageTitle: pageTitle,
			}}
		>
			{children}
		</DashboardMetaContext.Provider>
	);
};

export default DashboardMetaContextProvider;
