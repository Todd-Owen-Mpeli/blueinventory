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

interface IPostTypes {
	pages: string;
	posts: string;
	industry: string;
}

interface IPostTypesFlexiblecontent {
	pages: string;
	posts: string;
	industry: string;
}

/* PUBLIC PAGES & POSTS */
/* PREVIEW PAGES & POSTS */
export const postType: IPostTypes = {
	pages: "pages",
	posts: "posts",
	industry: "industries",
};
export const homePage: string = "Home";
export const errorPage: string = "error-page";
export const flexiblecontentType: IPostTypesFlexiblecontent = {
	pages: "DefaultTemplate_Flexiblecontent_FlexibleContent",
	posts: "Post_Flexiblecontent_FlexibleContent",
	industry: "Industry_Flexiblecontent_FlexibleContent",
};

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
