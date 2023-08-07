// Imports
import {isEmpty} from "lodash";
import {NextApiRequest, NextApiResponse} from "next";
import {getAuthToken} from "@/functions/Frontend/cookies/cookies";
import {getPreviewRedirectUrl} from "@/functions/Frontend/redirects/redirects";

/**
 * http://localhost:3000/api/preview/?postType=page&postId=30
 * @param req
 * @param res
 * @returns {Promise<void>}
 */

export default async function preview(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {postType, postId} = req.query;

	const authToken = getAuthToken(req);

	if (isEmpty(authToken)) {
		res.writeHead(307, {
			Location: `/login/?postType=${postType}&previewPostId=${postId}`,
		});
	} else {
		const previewUrl = getPreviewRedirectUrl(postType, postId);
		res.writeHead(307, {Location: previewUrl});
	}
	res.end();
}
