import {FC} from "react";
import {DashboardMetaContent} from "@/context/dashboard";
import {IDashboardMetaContentProvider} from "@/types/context/public";

const DashboardMetaContentProvider: FC<IDashboardMetaContentProvider> = ({
	children,
	pageTitle,
}) => {
	return (
		<DashboardMetaContent.Provider
			value={{
				pageTitle: pageTitle,
			}}
		>
			{children}
		</DashboardMetaContent.Provider>
	);
};

export default DashboardMetaContentProvider;
