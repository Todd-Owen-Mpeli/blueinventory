// Imports
import {IStripePlans} from "@/types/stripe";
import {IThemesOptionsContent} from "@/types/context/public/index";

/* DASHBOARD CONTEXT PAGES */
export interface IDashboardContent {
	stripePlans: IStripePlans;
	themesOptionsContent: IThemesOptionsContent;
}

/* PUBLIC PAGES */
export interface IDashboard {
	stripePlans: IStripePlans;
	themesOptionsContent: IThemesOptionsContent;
}
