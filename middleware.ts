// Imports
import {useState} from "react";

import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

const middleware = (req: NextRequest) => {
	let signedIn: boolean = false;

	const url = req.nextUrl.clone();
	if (signedIn === false && url.pathname === "/dashboard") {
		url.pathname = "/sign-in";
		return NextResponse.redirect(url);
	}
};

// Stop Middleware running on static files
export const config = {
	matcher: "/((?!_next/image|_next/static|BlueInventory favicon Two.png).*)",
};

export default middleware;
