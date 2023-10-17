// Imports
import {
	IDashboardMetaContext,
	IDashboardGlobalContent,
	IDashboardLayoutContent,
} from "@/types/context/dashboard";
import {createContext, useContext} from "react";

// Global Dashboard Context
export const DashboardGlobalContext = createContext<
	IDashboardGlobalContent | undefined
>(undefined);

// Dashboard Layout Context
export const DashboardLayoutContext = createContext<
	IDashboardLayoutContent | undefined
>(undefined);

// Dashboard Meta Context
export const DashboardMetaContext = createContext<
	IDashboardMetaContext | undefined
>(undefined);

export const useDashboardGlobalContext = () => {
	const content = useContext(DashboardGlobalContext);

	if (content === undefined) {
		throw new Error(`useDashboardContext must be used to render content.`);
	}

	return content;
};

export const useDashboardLayoutContext = () => {
	const content = useContext(DashboardLayoutContext);

	if (content === undefined) {
		throw new Error(
			`useDashboardLayoutContext must be used to render content.`
		);
	}

	return content;
};

export const useDashboardMetaContext = () => {
	const content = useContext(DashboardMetaContext);

	if (content === undefined) {
		throw new Error(`useDashboardMetaContext must be used to render content.`);
	}

	return content;
};
