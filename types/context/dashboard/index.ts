/* DASHBOARD CONTEXT PAGES */
export type IDashboardMetaContext = {
	pageTitle: string;
};
export type IDashboardGlobalContent = {
	pageTitle: string;
	itemsCollection: any[] | null;
	mediaFilesCollection: any[] | null;
};
export type IDashboardLayoutContent = {
	revealMediaFilesModal: boolean;
	revealCreateItemModal: boolean;
	handleRevealMediaFilesModal: any;
	handleCloseCreateItemModal: any;
	handleRevealUserCreateItemModal: any;
	handleCloseMediaFilesModalHandler: any;
};

/* DASHBOARD LAYOUT CONTEXT PAGES */
export type IDashboardLayoutContextProvider = {
	children: React.ReactNode;
	revealMediaFilesModal: boolean;
	revealCreateItemModal: boolean;
	handleCloseCreateItemModal: any;
	handleRevealMediaFilesModal: any;
	handleRevealUserCreateItemModal: any;
	handleCloseMediaFilesModalHandler: any;
};
