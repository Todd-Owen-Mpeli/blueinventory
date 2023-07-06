// Imports
import {
	ISeo,
	IContent,
	IStripePlans,
	IFooterMenuLinks,
	INavbarMenuLinks,
	IIndustriesMenuLinks,
	IOperationalInsights,
	IThemesOptionsContent,
	IContentSliderPostsContent,
} from "./types";
import {createContext, useContext} from "react";

export interface IContentContext {
	seo: ISeo;
	content: IContent;
	stripePlans: IStripePlans;
	navbarMenuLinks: INavbarMenuLinks;
	footerMenuLinks: IFooterMenuLinks;
	industriesMenuLinks: IIndustriesMenuLinks;
	operationalInsights: IOperationalInsights;
	themesOptionsContent: IThemesOptionsContent;
	contentSliderPostsContent: IContentSliderPostsContent;
}

export interface IPreviewContentContext {
	defaultProps: {
		seo: ISeo;
		content: IContent;
		stripePlans: IStripePlans;
		navbarMenuLinks: INavbarMenuLinks;
		footerMenuLinks: IFooterMenuLinks;
		industriesMenuLinks: IIndustriesMenuLinks;
		operationalInsights: IOperationalInsights;
		themesOptionsContent: IThemesOptionsContent;
		contentSliderPostsContent: IContentSliderPostsContent;
	};
}

/* PUBLIC PAGES & POSTS */
export const ContentContext = createContext<IContentContext | undefined>(
	undefined
);

export const useContentContext = () => {
	const content = useContext(ContentContext);

	if (content === undefined) {
		throw new Error(`useDynamicPagesContext must be used to render content.`);
	}

	return content;
};

/* PREVIEW PAGES & POSTS */
export const PreviewContentContext = createContext<
	IPreviewContentContext | undefined
>(undefined);

export const usePreviewContentContext = () => {
	const content = useContext(PreviewContentContext);

	if (content === undefined) {
		throw new Error(`useDynamicPagesContext must be used to render content.`);
	}

	return content;
};
