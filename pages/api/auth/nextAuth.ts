import {getAuth} from "@clerk/nextjs/server";
import {data} from "autoprefixer";
import type {NextApiRequest, NextApiResponse} from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "GET") {
		const {userId} = getAuth(req);
		// Load any data your application needs for the API route
		return res.status(200).json({data});
	}

	return res.status(400).json({
		status: "error",
		message: "Bad request. Please try again.",
	});
}
