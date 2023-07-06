import {createContext, useContext} from "react";
import {IStripePlans, IThemesOptionsContent} from "./types";

interface IDashboardContent {
	stripePlans: IStripePlans;
	themesOptionsContent: IThemesOptionsContent;
}

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
