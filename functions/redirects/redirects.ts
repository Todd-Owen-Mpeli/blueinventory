// Imports
import {isEmpty} from "lodash";

export const getPreviewRedirectUrl = (
	postType: string | string[] = "",
	previewPostId: string | string[] = ""
) => {
	if (isEmpty(postType) || isEmpty(previewPostId)) {
		return "";
	}

	switch (postType) {
		case "post":
			return `/operational-insights/preview/postId=/${previewPostId}/`;
		case "page":
			return `/page/preview/pageId=/${previewPostId}/`;
		case "industries":
			return `/industries/preview/pageId=/${previewPostId}/`;
		default:
			return "/";
	}
};

export const getLoginPreviewRedirectUrl = (
	postType = "",
	previewPostId = ""
) => {
	return `/login/?postType=${postType || ""}&previewPostId=${
		previewPostId || ""
	}`;
};
