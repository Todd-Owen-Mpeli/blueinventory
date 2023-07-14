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

type IPostTypes = {
	pages: string;
	posts: string;
	industry: string;
	previewPage: string;
	previewPost: string;
	previewIndustry: string;
};

type IPostTypesFlexiblecontent = {
	pages: string;
	previewPage: string;
	previewPost: string;
	previewIndustry: string;
};

/* PUBLIC PAGES & POSTS */
/* PREVIEW PAGES & POSTS */
export const postType: IPostTypes = {
	// Public pages
	pages: "pages",
	posts: "posts",
	industry: "industries",
	// Preview pages
	previewPage: "page",
	previewPost: "post",
	previewIndustry: "industry",
};
export const homePage: string = "Home";
export const errorPage: string = "error-page";
export const flexibleContentType: IPostTypesFlexiblecontent = {
	// Public pages
	pages: "DefaultTemplate_Flexiblecontent_FlexibleContent",
	// Preview pages
	previewPage: "Page_Flexiblecontent_FlexibleContent",
	previewPost: "Post_Flexiblecontent_FlexibleContent",
	previewIndustry: "Industry_Flexiblecontent_FlexibleContent",
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
