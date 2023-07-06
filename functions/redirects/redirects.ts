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
			return `/blogs/preview/postId=/${previewPostId}/`;
		case "page":
			return `/page/preview/pageId=/${previewPostId}/`;
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

export const handleRedirectsAndReturnData = (
	defaultProps: any,
	data: any,
	errors: any,
	field: any,
	isPreview: boolean = false,
	loginRedirectURL: string = ""
) => {
	if (isPreview && null === data?.[field]) {
		return {
			redirect: {
				destination: loginRedirectURL || "/",
				statusCode: 307,
			},
		};
	}

	if (isEmpty(data)) {
		return {
			redirect: {
				destination: "/503",
				statusCode: 301,
			},
		};
	}

	if (field && isEmpty(data?.[field])) {
		return {
			// returns the default 404 page with a status code of 404
			notFound: true,
		};
	}

	return defaultProps;
};
