// Imports
import cookie from "cookie";
import {loginUser} from "@/functions/api";

export default async function login(req: any, res: any) {
	const body: any = JSON.parse(req.body);

	const username: String = body?.username;
	const password: String = body?.password;
	const data = await loginUser(username, password);

	/**
	 * Note when you run 'npm run start' locally, cookies won't be set, because locally process.env.NODE_ENV = 'production'
	 * so secure will be true, but it will still be http and not https , when tested locally.
	 * So when testing locally both in dev and prod, set the value of 'secure' to be false.
	 */
	res.setHeader(
		"Set-Cookie",
		cookie.serialize("auth", String(data?.login?.authToken ?? ""), {
			httpOnly: true,
			secure: "development" !== process.env.NODE_ENV,
			path: "/",
			maxAge: 60 * 60 * 24 * 7, // 1 week
		})
	);

	// Only sending a message that successful, because we don't want to send JWT to client.
	res.status(200).json({success: Boolean(data?.login?.authToken)});
}
