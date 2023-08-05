// Imports
import {IStripePlans} from "@/types/stripe";
import {ICurrentUserData} from "@/types/firebase";
import {IThemesOptionsContent} from "@/types/context/public/index";

/* DASHBOARD CONTEXT PAGES */
export interface IDashboardContent {
	userData: ICurrentUserData;
	pageTitle: string;
	stripePlans: IStripePlans;
	themesOptionsContent: IThemesOptionsContent;
}

/* PUBLIC PAGES */
export interface IDashboard {
	userData: ICurrentUserData;
	stripePlans: IStripePlans;
	themesOptionsContent: IThemesOptionsContent;
}
