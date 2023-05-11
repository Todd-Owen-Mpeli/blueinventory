// Import
import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

const middleware = (req: NextRequest) => {
	return NextResponse.next();
};

// Stop Middleware running on static files
export const config = {
	matcher: "/((?!_next/image|_next/static|BlueInventory favicon Two.png).*)",
};

export default middleware;
