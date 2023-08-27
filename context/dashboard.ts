// Imports
import {
	IDashboardContent,
	IDashboardMetaContent,
} from "@/types/context/dashboard";
import {createContext, useContext} from "react";

export const layoutTailwindStyling: string =
	"flex flex-col w-full border-[5px] p-4 border-pureBlack rounded-xl bg-white";

// Global Dashboard Context
export const DashboardContext = createContext<IDashboardContent | undefined>(
	undefined
);

// Dashboard Meta Context
export const DashboardMetaContent = createContext<
	IDashboardMetaContent | undefined
>(undefined);

export const useDashboardContext = () => {
	const content = useContext(DashboardContext);

	if (content === undefined) {
		throw new Error(`useDashboardContext must be used to render content.`);
	}

	return content;
};

export const useDashboardMetaContext = () => {
	const content = useContext(DashboardMetaContent);

	if (content === undefined) {
		throw new Error(`useDashboardContext must be used to render content.`);
	}

	return content;
};
