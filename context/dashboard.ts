// Imports
import {createContext, useContext} from "react";
import {IDashboardContent} from "@/types/context/dashboard";

export const DashboardContext = createContext<IDashboardContent | undefined>(
	undefined
);

export const useDashboardContext = () => {
	const content = useContext(DashboardContext);

	if (content === undefined) {
		throw new Error(`useDashboardContext must be used to render content.`);
	}

	return content;
};
