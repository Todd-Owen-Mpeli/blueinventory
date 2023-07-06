// Imports
import cookie from "cookie";

export function parseCookies(req: any) {
	return cookie.parse(req ? req.headers.cookie : "");
}

export function getAuthToken(req: any) {
	const cookies = parseCookies(req);
	return cookies.auth || "";
}
