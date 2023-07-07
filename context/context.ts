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
	IPostTypeFlexiblecontent,
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
	postTypeFlexiblecontent: IPostTypeFlexiblecontent;
	contentSliderPostsContent: IContentSliderPostsContent;
}

/* PUBLIC PAGES & POSTS */
/* PREVIEW PAGES & POSTS */
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
